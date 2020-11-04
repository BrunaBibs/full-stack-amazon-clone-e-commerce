// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBzk2MhXVtk7k-T4MXGfRF2b7yATcQMlzs",
  authDomain: "clone-7d5bd.firebaseapp.com",
  databaseURL: "https://clone-7d5bd.firebaseio.com",
  projectId: "clone-7d5bd",
  storageBucket: "clone-7d5bd.appspot.com",
  messagingSenderId: "152908400039",
  appId: "1:152908400039:web:b198e1c161390077b6e282",
  measurementId: "G-L4S741QKLS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

