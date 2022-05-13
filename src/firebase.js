import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeQ35ZYDBXo6rR0y6nR3DNtLwnIyME9L8",
  authDomain: "react-hooks-blog-25.firebaseapp.com",
  projectId: "react-hooks-blog-25",
  storageBucket: "react-hooks-blog-25.appspot.com",
  messagingSenderId: "1013486134862",
  appId: "1:1013486134862:web:8a1c4f6ec035c535a5451f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
