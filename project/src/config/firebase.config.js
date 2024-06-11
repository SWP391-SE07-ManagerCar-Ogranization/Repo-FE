import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBOyr56zssu325YSH7Ai7snvtQ0FJqpZ-k",
  authDomain: "fir-8c58e.firebaseapp.com",
  projectId: "fir-8c58e",
  storageBucket: "fir-8c58e.appspot.com",
  messagingSenderId: "871883867231",
  appId: "1:871883867231:web:f11d6fba43d8bfc87dc7ea",
  measurementId: "G-S927NNP0SS"
};

firebase.initializeApp(firebaseConfig); 
export default firebase;