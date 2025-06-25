// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw594gE7xH3itDMv3IFRlf7c8jX8DeH7E",
  authDomain: "interviewbot-554c5.firebaseapp.com",
  projectId: "interviewbot-554c5",
  storageBucket: "interviewbot-554c5.firebasestorage.app",
  messagingSenderId: "633163345246",
  appId: "1:633163345246:web:6089ad9344cff0a21fb3cf",
  measurementId: "G-RWG08658F5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);  

