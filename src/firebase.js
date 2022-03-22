import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCe3C7WWBYwwbVBHCSgJ8HJcGACOJaiffU",
  authDomain: "twitter-clone-febb0.firebaseapp.com",
  projectId: "twitter-clone-febb0",
  storageBucket: "twitter-clone-febb0.appspot.com",
  messagingSenderId: "1088908037367",
  appId: "1:1088908037367:web:dc6c0a8255887ae2bbd7f2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
