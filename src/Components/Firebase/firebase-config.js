// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import {getFirestore} from 'firebase/firestore';

// realtime database 
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSEh3yKZRnF092JFwHShkSpE0QsaKy0Jc",
  authDomain: "beauty-bloom-73dc2.firebaseapp.com",
  projectId: "beauty-bloom-73dc2",
  storageBucket: "beauty-bloom-73dc2.appspot.com",
  messagingSenderId: "953396748615",
  appId: "1:953396748615:web:3131691c0ca43d17396c62",
  // databaseURL
  databaseURL: "https://beauty-bloom-73dc2-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const database = getDatabase(app);