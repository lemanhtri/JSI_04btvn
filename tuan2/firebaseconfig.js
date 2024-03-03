import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'
const firebaseConfig = {
    apiKey: "AIzaSyDDFYrCYbp5nU-eyghyrSGjhwG6p6V8-WI",
    authDomain: "jsi04-ceaad.firebaseapp.com",
    projectId: "jsi04-ceaad",
    storageBucket: "jsi04-ceaad.appspot.com",
    messagingSenderId: "764041360842",
    appId: "1:764041360842:web:56e615f66e2e403abf0b33",
    measurementId: "G-8K81HF4ZZS"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const dangky = async (auth, email, password) => {
    let isSuccess;
    let infoMessage;
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        isSuccess = true
    } catch (error) {

        isSuccess = false
        infoMessage = err.code
    }
    return { isSuccess, infoMessage }
}
export const dangnhap = async()