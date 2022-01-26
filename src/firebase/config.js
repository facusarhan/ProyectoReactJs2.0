
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW0Swk0hvbMS-138nHyA47E7JWjCDqy-k",
  authDomain: "proyecto-reactjs-b0a23.firebaseapp.com",
  projectId: "proyecto-reactjs-b0a23",
  storageBucket: "proyecto-reactjs-b0a23.appspot.com",
  messagingSenderId: "993779427940",
  appId: "1:993779427940:web:0716cb7db3562229b68d71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);