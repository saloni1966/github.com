import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAP6x0VytYO6cl9toIkgxRvS76C3kFq9lw",
  authDomain: "wily---without-auth.firebaseapp.com",
  databaseURL : "https://wily---without-auth.firebaseapp.com",
  projectId: "wily---without-auth",
  storageBucket: "wily---without-auth.appspot.com",
  messagingSenderId: "866283877838",
  appId: "1:866283877838:web:7ac75de674ccdf712ca79f"
};


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
