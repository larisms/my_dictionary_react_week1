// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoRCLawi4x3KA6WSAxV_TEQfg8bs5P-b0",
  authDomain: "my-dictionary-ee1e3.firebaseapp.com",
  projectId: "my-dictionary-ee1e3",
  storageBucket: "my-dictionary-ee1e3.appspot.com",
  messagingSenderId: "193945183025",
  appId: "1:193945183025:web:fabc7248497ec5ae9d8610",
  measurementId: "G-8R8CQTEEQG"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
initializeApp(firebaseConfig)
export const db = getFirestore();