document.addEventListener("DOMContentLoaded", function() {
    let myHeader = document.getElementById("myHeading");
    myHeader.textContent = "Wagga Wagga";
    
    let age = 15;
    const birthYear = 2010;
    let sum = age + 3;
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
    
    let clueless = age < 12;
    if (!clueless) {
        console.log("You haven't played GeoGuessr yet");
    }
        let container = document.querySelector(".container");
    
        // Check if the element is in the viewport
        function checkVisibility() {
            let rect = container.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                container.classList.add("visible"); // Add the visible class when the element is in the viewport
            }
        }
    
        // Add fade-in class o container
        container.classList.add("fade-in");
    
        // Trigger the visibility check on scroll
        window.addEventListener("scroll", checkVisibility);
        
        // Also check on initial load
        checkVisibility();
    });
        const leftImage = document.querySelector(".top-left-image");
        const rightImage = document.querySelector(".top-right-image");
    
        // Function to check visibility
        function checkVisibility() {
            const rectLeft = leftImage.getBoundingClientRect();
            const rectRight = rightImage.getBoundingClientRect();
            
            // Add animation class when images are in the viewport
            if (rectLeft.top >= 0 && rectLeft.bottom <= window.innerHeight) {
                leftImage.classList.add("visible");
            }
            if (rectRight.top >= 0 && rectRight.bottom <= window.innerHeight) {
                rightImage.classList.add("visible");
            }
        }
    
        // Trigger on page load and scroll
        window.addEventListener("scroll", checkVisibility);
        checkVisibility();  // Also check on initial load

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";


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
const auth = getAuth(app);

// Google Sign In
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

document.getElementById("signInBtn").addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google sign-in success:", result.user);
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
      });
  });
  
  document.getElementById("signOutBtn").addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      });
  });
  

// Handle user state
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user);
  } else {
    console.log("No user is signed in");
  }
});

// Sign out
import { signOut } from "firebase/auth";

signOut(auth).then(() => {
  console.log("Signed out successfully");
});



    


