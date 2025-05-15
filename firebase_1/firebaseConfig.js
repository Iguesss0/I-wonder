// firebaseconfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZOxFKjXvX4quVu3ExENboJO9oXiR23TA",
  authDomain: "i-wonder-42fbe.firebaseapp.com",
  projectId: "i-wonder-42fbe",
  storageBucket: "i-wonder-42fbe.appspot.com", // ⚠️ fix: use ".appspot.com"
  messagingSenderId: "998073898697",
  appId: "1:998073898697:web:d939778f7e73c18bebdf18",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
