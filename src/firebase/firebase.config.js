// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClRrT6DHPJDaeNC8HigAIorNuaxqRli5U",
  authDomain: "dragon-news-recap-32d8a.firebaseapp.com",
  projectId: "dragon-news-recap-32d8a",
  storageBucket: "dragon-news-recap-32d8a.firebasestorage.app",
  messagingSenderId: "84726997976",
  appId: "1:84726997976:web:11ca98af26d2476db4c8ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;