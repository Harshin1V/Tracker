// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbIvtTjUyXM7VCyWONaCCGQN6I3b38kOs",
  authDomain: "expensetracker-2b5cd.firebaseapp.com",
  projectId: "expensetracker-2b5cd",
  storageBucket: "expensetracker-2b5cd.appspot.com",
  messagingSenderId: "572915846737",
  appId: "1:572915846737:web:81f8e9be3f04f5361db270",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
