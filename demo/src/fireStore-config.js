// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBrBMRIKVTrsh6OrP_cKce_aWwzQDIPnKc",
  authDomain: "firestore-crud-8dd46.firebaseapp.com",
  projectId: "firestore-crud-8dd46",
  storageBucket: "firestore-crud-8dd46.appspot.com",
  messagingSenderId: "504296207768",
  appId: "1:504296207768:web:9a75db33b20c92cdace7ed",
  measurementId: "G-XFRY0BWPHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const googleAuthProvider = new GoogleAuthProvider;
