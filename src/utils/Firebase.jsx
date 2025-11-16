
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBix-4Z4Y9C8Gd86_ei1kI5yqbBXFxXqYw",
  authDomain: "netflixgpt-74da4.firebaseapp.com",
  projectId: "netflixgpt-74da4",
  storageBucket: "netflixgpt-74da4.firebasestorage.app",
  messagingSenderId: "598176842018",
  appId: "1:598176842018:web:e9075dc5b285dbc689657b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();