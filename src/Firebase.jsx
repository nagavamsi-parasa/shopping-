// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRfyvv8c4dAh6vZ6FgsfrrflzlX0gmOdo",
  authDomain: "shopping-15ee7.firebaseapp.com",
  projectId: "shopping-15ee7",
  storageBucket: "shopping-15ee7.firebasestorage.app",
  messagingSenderId: "148934794298",
  appId: "1:148934794298:web:b3f885ee4142af85f1a903",
  measurementId: "G-CYJWKJTG7K"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
