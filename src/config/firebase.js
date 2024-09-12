// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAptYz_RBRercBJ6f6jR5OMbhNUDXuI06w",
  authDomain: "react-contact-68658.firebaseapp.com",
  projectId: "react-contact-68658",
  storageBucket: "react-contact-68658.appspot.com",
  messagingSenderId: "568101426605",
  appId: "1:568101426605:web:e023bea2466bc3f742bd24"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);