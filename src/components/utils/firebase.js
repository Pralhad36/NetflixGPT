// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCavwcbo4JylhVXZuRRS4zr1A7ilL_smdw",
  authDomain: "netflixgpt-bab90.firebaseapp.com",
  projectId: "netflixgpt-bab90",
  storageBucket: "netflixgpt-bab90.appspot.com",
  messagingSenderId: "245645017754",
  appId: "1:245645017754:web:5189db46b0cb414a729523",
  measurementId: "G-0BW4QJ2D3R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
