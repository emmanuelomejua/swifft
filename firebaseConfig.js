// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FIREBASE_API } from "./util/key";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: FIREBASE_API,
    authDomain: "swift-app-4cfdb.firebaseapp.com",
    projectId: "swift-app-4cfdb",
    storageBucket: "swift-app-4cfdb.appspot.com",
    messagingSenderId: "890841952118",
    appId: "1:890841952118:web:c2d70d14c198d478581457",
    measurementId: "G-J5FV2PEXCR"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);