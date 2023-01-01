// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMboDBG3fpxPv00ZQjuN0XL-kreIxxDJc",
  authDomain: "myportfolio-12162.firebaseapp.com",
  databaseURL: "https://myportfolio-12162-default-rtdb.firebaseio.com",
  projectId: "myportfolio-12162",
  storageBucket: "myportfolio-12162.appspot.com",
  messagingSenderId: "75004389041",
  appId: "1:75004389041:web:875f18e05927690d74e490",
  measurementId: "G-ZGZD96YVEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
//const analytics = getAnalytics(app);