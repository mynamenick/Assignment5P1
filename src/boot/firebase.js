import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFWiYXmGtn-JyNon4u4V-k1bpT85lWJRo",
  authDomain: "quitter-app-47880.firebaseapp.com",
  projectId: "quitter-app-47880",
  storageBucket: "quitter-app-47880.appspot.com",
  messagingSenderId: "372196408996",
  appId: "1:372196408996:web:17081ca3fba3e12dd3b031"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// access firebase database with db variable
const db = firebase.firestore()

export default db

