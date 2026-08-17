// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAy1JAO6JzXBm-33P0ubMf-fbdfDR3rL70",
  authDomain: "nearbyu-e1b2f.firebaseapp.com",
  projectId: "nearbyu-e1b2f",
  storageBucket: "nearbyu-e1b2f.firebasestorage.app",
  messagingSenderId: "872037913300",
  appId: "1:872037913300:web:1d00f506e0b6c491e12141",
  measurementId: "G-YYZGPSRXFT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);