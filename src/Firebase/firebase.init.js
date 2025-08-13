// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQjsF6xlNsU_LKpr5AEc_95UFzd9t9jYY",
  authDomain: "portfolio-bd274.firebaseapp.com",
  projectId: "portfolio-bd274",
  storageBucket: "portfolio-bd274.firebasestorage.app",
  messagingSenderId: "924694554177",
  appId: "1:924694554177:web:748eb4102666e69564c8c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);