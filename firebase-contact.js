// firebase-contact.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Firebase Configuration (নিচে নিজের config বসাও)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoWUK_-c5X8pJMkGdKvo57KNEmhAyXRGw",
  authDomain: "sharif-s-protfolio.firebaseapp.com",
  projectId: "sharif-s-protfolio",
  storageBucket: "sharif-s-protfolio.firebasestorage.app",
  messagingSenderId: "954352110292",
  appId: "1:954352110292:web:93a1c4fb7f962cdafd4941"
};

// Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle Form Submission
const form = document.getElementById("contactForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const message = form.querySelector("textarea").value;

  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      timestamp: new Date()
    });
    alert("Message sent successfully!");
    form.reset();
  } catch (error) {
    console.error("Error sending message: ", error);
    alert("Failed to send message. Please try again.");
  }
});
