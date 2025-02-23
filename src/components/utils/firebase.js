// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBp8i9iPzoIfxEOoGLOA35Si7gMTFhP3fE",
  authDomain: "netflixgpt-6a3b2.firebaseapp.com",
  projectId: "netflixgpt-6a3b2",
  storageBucket: "netflixgpt-6a3b2.firebasestorage.app",
  messagingSenderId: "390722778804",
  appId: "1:390722778804:web:fae8d39c5280a2765b49e1",
  measurementId: "G-1LS2XF5NPT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
