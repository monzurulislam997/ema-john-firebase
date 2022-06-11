// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATui3hM37Qy8GtCnKFgZ5ishtALcWrOGQ",
    authDomain: "ema-johon-firebase.firebaseapp.com",
    projectId: "ema-johon-firebase",
    storageBucket: "ema-johon-firebase.appspot.com",
    messagingSenderId: "878755429185",
    appId: "1:878755429185:web:1af4ad517b2face5177fc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;