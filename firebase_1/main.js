// main.js
import { signUp, login } from './auth.js';
import { addUser } from './firestore.js';

document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const user = await signUp(email, password);
    await addUser({ uid: user.uid, email: user.email });
    alert("User signed up!");
  } catch (error) {
    alert(error.message);
  }
});
