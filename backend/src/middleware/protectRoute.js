import { requireAuth } from "@clerk/express";
import User from "../models/User.js";
import { upsertStreamUser } from "../lib/stream.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const { userId: clerkId, sessionClaims } = req.auth();

      if (!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token" });

      // find user in db by clerk ID
      let user = await User.findOne({ clerkId });

      // Self-heal missing DB users (e.g., webhook missed during setup)
      if (!user) {
        const email =
          sessionClaims?.email ||
          sessionClaims?.email_address ||
          sessionClaims?.primaryEmailAddress ||
          sessionClaims?.primary_email_address ||
          `${clerkId}@clerk.local`;
        const name =
          sessionClaims?.fullName ||
          [sessionClaims?.firstName, sessionClaims?.lastName]
            .filter(Boolean)
            .join(" ") ||
          [sessionClaims?.first_name, sessionClaims?.last_name]
            .filter(Boolean)
            .join(" ") ||
          "New User";
        const profileImage =
          sessionClaims?.image_url || sessionClaims?.picture || sessionClaims?.avatar_url || "";

        user = await User.findOneAndUpdate(
          { clerkId },
          {
            $setOnInsert: {
              clerkId,
              email,
              name,
              profileImage,
            },
          },
          { upsert: true, new: true }
        );

        // Best effort: ensure Stream user exists too.
        await upsertStreamUser({
          id: clerkId,
          name: user.name,
          image: user.profileImage,
        });
      }

      // attach user to req
      req.user = user;

      next();
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];
