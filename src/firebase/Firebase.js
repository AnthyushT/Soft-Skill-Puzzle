// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs84sWjoO3lBjZrJce6xA9hxWVUSRljpg",
  authDomain: "the-puzzle-app-4efc0.firebaseapp.com",
  projectId: "the-puzzle-app-4efc0",
  storageBucket: "the-puzzle-app-4efc0.appspot.com",
  messagingSenderId: "1055235937941",
  appId: "1:1055235937941:web:aec1bc00ab8b5717ec6d9c",
  measurementId: "G-6XW8KMQDE3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
