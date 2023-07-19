// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAz75xjvv5VB6om4NYUkHeBX8fE4KoySdU",
    authDomain: "crown-9561a.firebaseapp.com",
    projectId: "crown-9561a",
    storageBucket: "crown-9561a.appspot.com",
    messagingSenderId: "1058382527187",
    appId: "1:1058382527187:web:7c6a93d4eb74f028bbb226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {auth};