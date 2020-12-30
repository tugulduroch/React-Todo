import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBcFVEAYfe5eA0tpJqH1zJk8nzcYphr9Z4",
    authDomain: "todo-app-6de1e.firebaseapp.com",
    projectId: "todo-app-6de1e",
    storageBucket: "todo-app-6de1e.appspot.com",
    messagingSenderId: "622702152999",
    appId: "1:622702152999:web:46a9a031fe586f5e616d02"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db};