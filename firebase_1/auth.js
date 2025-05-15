// auth.js
import { auth } from './firebaseconfig.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export async function signUp(email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

export async function login(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}
