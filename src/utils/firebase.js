// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7F0hzpFyKtzvdhKID6rcQwJoYywBH86w",
  authDomain: "netflixgpt-af0f1.firebaseapp.com",
  projectId: "netflixgpt-af0f1",
  storageBucket: "netflixgpt-af0f1.firebasestorage.app",
  messagingSenderId: "502884570703",
  appId: "1:502884570703:web:cc40c102af250e0affbc3a",
  measurementId: "G-DS1Q3RTGKR"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();