// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJMZU0Q6OzUC_8CXO3X5TpyNS-z-Ybv6k",
  authDomain: "taskify-a4953.firebaseapp.com",
  projectId: "taskify-a4953",
  storageBucket: "taskify-a4953.firebasestorage.app",
  messagingSenderId: "797371349869",
  appId: "1:797371349869:web:7eb53173c219034b8cb864",
  measurementId: "G-QG62T723NV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  const token = await result.user.getIdToken();
  return token;
};
