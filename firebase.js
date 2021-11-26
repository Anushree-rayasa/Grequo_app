import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBdPvzG4laHfJ7s2vNmedULeYNNY0xBqo8",
    authDomain: "grequo-c9773.firebaseapp.com",
    projectId: "grequo-c9773",
    storageBucket: "grequo-c9773.appspot.com",
    messagingSenderId: "444399373615",
    appId: "1:444399373615:web:0c6b0f89a6dde5081525da",
    measurementId: "G-3RS9VKFVJP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;