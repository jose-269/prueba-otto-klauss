import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHaGU9XgqOE_bmw7EL3GKNtIGd6JX-sIw",
  authDomain: "otto-klaus-5eb23.firebaseapp.com",
  projectId: "otto-klaus-5eb23",
  storageBucket: "otto-klaus-5eb23.appspot.com",
  messagingSenderId: "716501761703",
  appId: "1:716501761703:web:55768d371174361a83e582",
  measurementId: "G-QKSTXWWHFS",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export { firebaseConfig, db };
