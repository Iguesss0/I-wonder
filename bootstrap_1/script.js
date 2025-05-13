// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBZOxFKjXvX4quVu3ExENboJO9oXiR23TA",
  authDomain: "i-wonder-42fbe.firebaseapp.com",
  projectId: "i-wonder-42fbe",
  storageBucket: "i-wonder-42fbe.firebasestorage.app",
  messagingSenderId: "998073898697",
  appId: "1:998073898697:web:d939778f7e73c18bebdf18",
  measurementId: "G-JS72F15EC1"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Update heading
  document.getElementById("myHeading").textContent = "Wagga Wagga";

  const provider = new GoogleAuthProvider();
  
  const signInBtn = document.getElementById("signInBtn");
  const signOutBtn = document.getElementById("signOutBtn");
  const userInfo = document.getElementById("userInfo");
  
  // Sign in
  signInBtn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Signed in:", result.user);
      })
      .catch((error) => {
        console.error("Sign in error:", error);
      });
  });
  
  // Sign out
  signOutBtn.addEventListener("click", () => {
    signOut(auth)
      .then(() => console.log("Signed out"))
      .catch((error) => console.error("Sign out error:", error));
  });
  
  // Update UI when auth state changes
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userInfo.textContent = `Signed in as ${user.displayName}`;
      signInBtn.style.display = "none";
      signOutBtn.style.display = "inline-block";
    } else {
      userInfo.textContent = "";
      signInBtn.style.display = "inline-block";
      signOutBtn.style.display = "none";
    }
  });
  

  // Age logic (for console)
  const age = 15;
  const birthYear = 2010;
  const sum = age + 3;
  console.log("2028 will be a banger", sum);

  if (age >= 18) {
    console.log("You are an adult");
  } else {
    console.log("Stop Swearing");
  }

  if (age >= 12 && age <= 18) {
    console.log("You are grinding for the World Cup!");
  }

  if (age < 12 || age > 22) {
    console.log("You have either still never played GeoGuessr or graduated college");
  }

  const clueless = age < 12;
  if (!clueless) {
    console.log("You haven't played GeoGuessr yet");
  }

  // Fade-in animation logic
  const container = document.querySelector(".container");
  const leftImage = document.querySelector(".top-left-image");
  const rightImage = document.querySelector(".top-right-image");

  function checkVisibility() {
    if (container) {
      const rect = container.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        container.classList.add("visible");
      }
    }

    if (leftImage) {
      const rectLeft = leftImage.getBoundingClientRect();
      if (rectLeft.top >= 0 && rectLeft.bottom <= window.innerHeight) {
        leftImage.classList.add("visible");
      }
    }

    if (rightImage) {
      const rectRight = rightImage.getBoundingClientRect();
      if (rectRight.top >= 0 && rectRight.bottom <= window.innerHeight) {
        rightImage.classList.add("visible");
      }
    }
  }

  container?.classList.add("fade-in");
  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Initial check
});



    


