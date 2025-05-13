// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZOxFKjXvX4quVu3ExENboJO9oXiR23TA",
  authDomain: "i-wonder-42fbe.firebaseapp.com",
  projectId: "i-wonder-42fbe",
  storageBucket: "i-wonder-42fbe.firebasestorage.app",
  messagingSenderId: "998073898697",
  appId: "1:998073898697:web:d939778f7e73c18bebdf18",
  measurementId: "G-JS72F15EC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);