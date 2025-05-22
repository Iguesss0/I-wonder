// firestore.js
import { db } from './firebaseconfig.js';
import {
  collection, addDoc, getDocs, updateDoc, deleteDoc, doc
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// CREATE
export async function addUser(data) {
  await addDoc(collection(db, "users"), data);
}

// READ
export async function getUsers() {
  const snapshot = await getDocs(collection(db, "users"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// UPDATE
export async function updateUser(id, data) {
  const docRef = doc(db, "users", id);
  await updateDoc(docRef, data);
}

// DELETE
export async function deleteUser(id) {
  const docRef = doc(db, "users", id);
  await deleteDoc(docRef);
}
