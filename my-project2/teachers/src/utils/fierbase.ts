// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4yj6LAJDYyz9veFjGnRA6KLkGvhtvaas",
  authDomain: "demoteachers-f9772.firebaseapp.com",
  projectId: "demoteachers-f9772",
  storageBucket: "demoteachers-f9772.firebasestorage.app",
  messagingSenderId: "326762020258",
  appId: "1:326762020258:web:1721dfc713d78cdd7c06fb",
  measurementId: "G-7JYWHK2JMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);