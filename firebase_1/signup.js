import { auth, db } from "./firebaseconfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save to Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: user.email,
    });

    alert("Sign up successful!");
    window.location.href = "login.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
});
