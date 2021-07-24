import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVlyOaJ9mpu2aSvLL1DycNh0e_hWUPRGc",
  authDomain: "next-gdocs.firebaseapp.com",
  projectId: "next-gdocs",
  storageBucket: "next-gdocs.appspot.com",
  messagingSenderId: "236916210787",
  appId: "1:236916210787:web:280375718fb30a7ba30c56",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
