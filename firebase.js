
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFIYJ9XmEp6HvMvRwwhSEopbRtx2D8Hg",
  authDomain: "xoltial-auth.firebaseapp.com",
  projectId: "xoltial-auth",
  storageBucket: "xoltial-auth.appspot.com",
  messagingSenderId: "497733495970",
  appId: "1:497733495970:web:xxxxxxx"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider, signInWithPopup };
