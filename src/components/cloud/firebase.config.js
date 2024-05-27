import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtHJd3m3JCcVRaChYWwfPrBxAd9MvO648",
  authDomain: "swp391-c4a72.firebaseapp.com",
  projectId: "swp391-c4a72",
  storageBucket: "swp391-c4a72.appspot.com",
  messagingSenderId: "966533859873",
  appId: "1:966533859873:web:fd9da226b72ec7acdab160",
  measurementId: "G-9CBWRMNLTJ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;