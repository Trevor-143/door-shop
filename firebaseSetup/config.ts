import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBPMpKIK7bSQyHliXDkzR2vBaaks5XZLJw",
  authDomain: "door-shop-b8caf.firebaseapp.com",
  projectId: "door-shop-b8caf",
  storageBucket: "door-shop-b8caf.appspot.com",
  messagingSenderId: "356429672002",
  appId: "1:356429672002:web:e4ebbed59e7d7fb95c47db",
  measurementId: "G-1C5ZLDD9GQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)

export  {
    Auth
}