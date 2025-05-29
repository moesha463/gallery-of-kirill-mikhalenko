import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD2lSlVOKR4R6P3Im4pyQiu72omupkq39Y",
    authDomain: "artportfolio-3a450.firebaseapp.com",
    projectId: "artportfolio-3a450",
    storageBucket: "artportfolio-3a450.firebasestorage.app",
    messagingSenderId: "376606642786",
    appId: "1:376606642786:web:4a33080f8337817dbcf73b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);