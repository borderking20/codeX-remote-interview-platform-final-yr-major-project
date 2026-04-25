# Codex – Remote Interview Platform

Codex is a full-stack remote interview platform designed to simulate real-world technical interviews. It provides a seamless environment where candidates can write, compile, and submit code in real time while interacting with interviewers or AI.

## 🚀 Features

- Real-time coding environment  
- AI-powered mock interview system  
- Resume upload and parsing for personalized questions  
- Role-based interview setup (role, experience, etc.)  
- Full-screen coding mode  
- Copy-paste restriction to simulate real interviews  
- Live communication between candidate and interviewer  
- Secure authentication using JWT  
- Clean and intuitive UI  

## 🧠 AI Mock Interview

- Users can practice interviews with AI  
- Dynamic question generation based on:
  - Selected role  
  - Experience level  
  - Resume content  
- Instant feedback and evaluation  

## 🛠️ Tech Stack

### Frontend
- React  
- Next.js  
- Tailwind CSS  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  

### Other Tools & Services
- groq API (AI integration)  
- Clerk (Authentication)  
- mongoDB (Real-time backend services)  
- Stream (Communication)  

## 📦 Installation

```bash
git clone https://github.com/your-username/codex.git
cd codex
```

### Setup Backend

```bash
cd backend
npm install
npm run dev
```

### Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

## ⚙️ Environment Variables

Create a `.env` file in the backend:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
GEMINI_API_KEY=your_api_key
```

## 📌 Usage

1. Sign up / Log in  
2. Choose:
   - Start Interview  
   - AI Mock Interview  
3. Fill in details (role, experience, resume)  
4. Start coding and answering questions  

## 🎯 Goal

The goal of Codex is to eliminate the gap between preparation and real interviews by providing a structured, realistic, and scalable platform.

## 📈 Future Improvements

- Video proctoring  
- Plagiarism detection  
- Interview analytics dashboard  
- Multi-language compiler support  
- Company-specific interview tracks  

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.

## 📄 License

This project is licensed under the MIT License.
