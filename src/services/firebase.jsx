// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4KBhwJMtfn_8X2LLxA_NaoJi9Tsunie4",
  authDomain: "criptoclover-f0647.firebaseapp.com",
  projectId: "criptoclover-f0647",
  storageBucket: "criptoclover-f0647.appspot.com",
  messagingSenderId: "57763623890",
  appId: "1:57763623890:web:e7b685551df55695210e0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();
