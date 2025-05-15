import { auth } from "./firebaseconfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Sign up successful!");
    window.location.href = "login.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
});
