// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQI3VApJjX4kZHTMYmxJkLe-h_rOS6kJg",
  authDomain: "netflixgpt-6a3b2.firebaseapp.com",
  projectId: "netflixgpt-6a3b2",
  storageBucket: "netflixgpt-6a3b2.appspot.com",
  messagingSenderId: "390722778804",
  appId: "1:390722778804:web:24e92f337faa7fc15b49e1",
  measurementId: "G-VPM8M1P9XM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
