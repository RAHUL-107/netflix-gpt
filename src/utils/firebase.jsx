// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaHtgOZhpc1X6agNjUg-JTxZ5Izu00MNs",
  authDomain: "netflix-gpt-c161b.firebaseapp.com",
  projectId: "netflix-gpt-c161b",
  storageBucket: "netflix-gpt-c161b.firebasestorage.app",
  messagingSenderId: "362374713614",
  appId: "1:362374713614:web:c4abe7e54131b96961075f",
  measurementId: "G-E2KSQQ383V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
