import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCd7aCxvm8xiXZ69qx-xJ_TrN30VjnAplc",
  authDomain: "clone-72d3f.firebaseapp.com",
  projectId: "clone-72d3f",
  storageBucket: "clone-72d3f.appspot.com",
  messagingSenderId: "86230813271",
  appId: "1:86230813271:web:d1e9d077c7f9145ad67112",
  measurementId: "G-GPFLK4H9ZG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
