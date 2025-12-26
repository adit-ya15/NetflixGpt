# AI-Powered Movie Recommendation App


## TL;DR
- Netflix-style UI with AI-powered movie recommendations
- Built using React, Redux, and Gemini AI
- Focused on performance (lazy loading, optimized state)
- Deployed on Netlify


A Netflix-style frontend heavy application that helps users discover movies using AI-powered recommendations based on user mood and preferences.

## 🚀 Live Demo
   https://aipoweredmovieapp.netlify.app/

## 🧠 Problem Statement
Users often know they want to watch something, but don’t know **what** to watch.  
This application solves that by combining a familiar Netflix-like UI with **AI-driven movie suggestions**.

## 🛠 Tech Stack
### Frontend
- React.js
- Redux
- Tailwind CSS

### Backend / Services
- Firebase Authentication
- Gemini AI (for recommendations)
- Note: This project uses managed backend services (Firebase & Gemini AI). A custom backend API is planned.


## ✨ Key Features
- User authentication (Login / Signup)
- Global state management using Redux
- AI-powered movie recommendations
- Lazy loading for performance
- Responsive UI
- Clean API handling

## ⚙️ Performance Optimizations
- Lazy loading of routes and components
- Efficient Redux store structure
- Optimized API calls

## 🧪 Testing
- Basic unit testing using Jest and React Testing Library

## 📂 Project Structure
```text
src/
├── components/
├── pages/
├── hooks/
├── store/
├── services/
└── utils/
```

## 📌 Learnings
- Integrating AI APIs into frontend apps
- Managing complex state with Redux
- Authentication flows with Firebase
- Performance optimization in React
- Designing scalable frontend architecture

## 🚧 Future Improvements
- Backend API instead of direct service calls
- User watchlists
- Recommendation history
- Improved AI prompt tuning

## 📷 Preview 
### Authentication
<img width="1915" height="1069" alt="image" src="https://github.com/user-attachments/assets/903adab2-dd5e-4d81-b0fc-1aa6ee9d3690" />

### Home
<img width="1920" height="1080" alt="Screenshot 2025-12-13 153721" src="https://github.com/user-attachments/assets/8a229e08-09d0-45cc-a5c7-104be37dad43" />

### AI powered search page
<img width="1920" height="1080" alt="Screenshot 2025-12-13 153733" src="https://github.com/user-attachments/assets/a3140a8d-66ef-4ee7-b51f-6f5a8b30f62f" />

### Movie detail page
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/72194f0f-8673-4fef-a4e2-d814fa044cd2" />





## 🛠️ Run Locally

```bash
git clone https://github.com/your-username/project-name.git
cd project-name
npm install
npm run dev
```

## 📄 License
This project is for learning and demonstration purposes.
