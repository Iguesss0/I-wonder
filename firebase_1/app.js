// ✅ Your Firebase config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // ✅ Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  // ✅ Login function
  function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
  
        // ✅ Log login info to Firestore
        db.collection("logins").doc(user.uid).set({
          email: user.email,
          lastLogin: new Date()
        }, { merge: true });
  
        alert("Login successful!");
      })
      .catch(error => {
        console.error("Login error:", error.message);
        alert("Login failed: " + error.message);
      });
  }
  