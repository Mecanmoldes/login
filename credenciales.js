// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA46gyrr4fHBEP5zBofiOms53hkHD9fjic",
  authDomain: "mecanmoldes-230c6.firebaseapp.com",
  projectId: "mecanmoldes-230c6",
  storageBucket: "mecanmoldes-230c6.appspot.com",
  messagingSenderId: "341100563323",
  appId: "1:341100563323:web:26c3f9d8e7e511e4a24bde"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;