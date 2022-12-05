// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLDPzIAafoBj3-APNhlPv-sD0lo-DOJBc",
    authDomain: "bandaid-dental-b87bc.firebaseapp.com",
    projectId: "bandaid-dental-b87bc",
    storageBucket: "bandaid-dental-b87bc.appspot.com",
    messagingSenderId: "234563795030",
    appId: "1:234563795030:web:7aa985a25f16890e8523f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;