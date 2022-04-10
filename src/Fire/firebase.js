// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwtancIS183MYFOzgqAD88gsDZXiiGwVQ",
  authDomain: "ema-jhon-simple-d937d.firebaseapp.com",
  projectId: "ema-jhon-simple-d937d",
  storageBucket: "ema-jhon-simple-d937d.appspot.com",
  messagingSenderId: "16927573616",
  appId: "1:16927573616:web:cf3be764719884f34fd6b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)