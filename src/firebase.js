// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//install fire base tools global
// yarn add fire base
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9rNRgnUx7lfuySl7KP8Ce9l6-UD3n6FE",
  authDomain: "ecommerce-f4b53.firebaseapp.com",
  projectId: "ecommerce-f4b53",
  storageBucket: "ecommerce-f4b53.appspot.com",
  messagingSenderId: "24920063393",
  appId: "1:24920063393:web:56263ce1a15fd9f0711fe0",
  measurementId: "G-JGQQN10Y0H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //this will set up all
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

// 3:56:00