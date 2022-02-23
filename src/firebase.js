// import firebase from "firebase/app";
// import "firebase/database"

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//     apiKey: "AIzaSyBoKXonFHPeQyqbFG3vafxC_GvCHU-hfC4",
//     authDomain: "react-contact-867ea.firebaseapp.com",
//     projectId: "react-contact-867ea",
//     storageBucket: "react-contact-867ea.appspot.com",
//     messagingSenderId: "795641043561",
//     appId: "1:795641043561:web:618ae25ebd56917ab2e0f8"
//   };

// const fireDb = firebase.initializeApp(firebaseConfig);
// export default fireDb.database().ref();


// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoKXonFHPeQyqbFG3vafxC_GvCHU-hfC4",
  authDomain: "react-contact-867ea.firebaseapp.com",
  databaseURL: "https://react-contact-867ea-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-contact-867ea",
  storageBucket: "react-contact-867ea.appspot.com",
  messagingSenderId: "795641043561",
  appId: "1:795641043561:web:8bd8f17e80cd89abb2e0f8"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
