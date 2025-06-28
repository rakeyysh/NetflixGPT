// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbV55fOQjlB694T9walhkQ9oYRgqqVKr4",
  authDomain: "netflixgpt-44b2f.firebaseapp.com",
  projectId: "netflixgpt-44b2f",
  storageBucket: "netflixgpt-44b2f.firebasestorage.app",


  messagingSenderId: "391306466271",
  appId: "1:391306466271:web:bb74642917cc2ef3ee2a6a",
  measurementId: "G-5GLVQPBR0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
