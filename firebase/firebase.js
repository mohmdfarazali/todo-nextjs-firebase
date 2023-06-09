import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNUBwX263hS7Mb9AbPdKlv-SM2_buURko",
  authDomain: "task-savvy.firebaseapp.com",
  projectId: "task-savvy",
  storageBucket: "task-savvy.appspot.com",
  messagingSenderId: "225464240193",
  appId: "1:225464240193:web:97f4c834d89f5bb2f65ec0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);