// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjCcskEQmlSTYNY71IusIWY1s-BOmCOAE",
  authDomain: "pokedex-9e1e3.firebaseapp.com",
  projectId: "pokedex-9e1e3",
  storageBucket: "pokedex-9e1e3.appspot.com",
  messagingSenderId: "490292020924",
  appId: "1:490292020924:web:611c10c4d0e5d2180032b9",
  measurementId: "G-5W1QEYC9M7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);