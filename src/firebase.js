import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCndvKLklHqQBnnHWNbwVH-AJxmDp5uuUE",
  authDomain: "portfolio-responses-ad442.firebaseapp.com",
  projectId: "portfolio-responses-ad442",
  storageBucket: "portfolio-responses-ad442.appspot.com",
  messagingSenderId: "419188053229",
  appId: "1:419188053229:web:48a31878a7f8a53af228e4",
  measurementId: "G-TP91SZE7FW"
});

var db = firebaseApp.firestore();

export { db };
