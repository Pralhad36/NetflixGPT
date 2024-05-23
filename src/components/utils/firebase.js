// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2T30hFdI-P3wnDu9ErEZ-9LGldAXwn3U",
  authDomain: "netflixgpt-4d4f9.firebaseapp.com",
  projectId: "netflixgpt-4d4f9",
  storageBucket: "netflixgpt-4d4f9.appspot.com",
  messagingSenderId: "223822508236",
  appId: "1:223822508236:web:646fb0f2059293e4485269",
  measurementId: "G-HW940LV0V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
