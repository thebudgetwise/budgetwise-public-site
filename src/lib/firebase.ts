// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0I3NzJl6xVNpvPp-RbrJb-p5ZbqQbb0k",
  authDomain: "bwealthy-3eb08.firebaseapp.com",
  projectId: "bwealthy-3eb08",
  storageBucket: "bwealthy-3eb08.firebasestorage.app",
  messagingSenderId: "232887297377",
  appId: "1:232887297377:web:a8138316a602665b539120"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);