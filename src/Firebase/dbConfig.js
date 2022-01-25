// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2uHp2SpI8pJzJXrgzOhEpzNncgsdNOoQ",
    authDomain: "react-app-sabor.firebaseapp.com",
    projectId: "react-app-sabor",
    storageBucket: "react-app-sabor.appspot.com",
    messagingSenderId: "713570094254",
    appId: "1:713570094254:web:a488c4a418f249d36cb13f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestorApp = () => {
    return app
}

