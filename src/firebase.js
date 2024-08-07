// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lightcietech-website.firebaseapp.com",
  projectId: "lightcietech-website",
  storageBucket: "lightcietech-website.appspot.com",
  messagingSenderId: "760088651961",
  appId: "1:760088651961:web:97f7f4470d4984deeb1368",
  measurementId: "G-KD6Z50ZM7S"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);