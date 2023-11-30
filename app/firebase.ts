// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDREsf7kPZPln9DTcrm1eTBbclq7UKwXuM",
  authDomain: "todo-app-6f365.firebaseapp.com",
  projectId: "todo-app-6f365",
  storageBucket: "todo-app-6f365.appspot.com",
  messagingSenderId: "609419064975",
  appId: "1:609419064975:web:90d6f57a7a27723d74a2fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
