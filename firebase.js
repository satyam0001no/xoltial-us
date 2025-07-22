// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Your new Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQLMSykqbdRdUajr5GU49fdmEXbHejbAo",
  authDomain: "xoltial-web.firebaseapp.com",
  projectId: "xoltial-web",
  storageBucket: "xoltial-web.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db, RecaptchaVerifier, signInWithPhoneNumber };
