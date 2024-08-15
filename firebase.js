// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcK8xY20bB62DsJwwr2RMqGktvsKAFS9c",
  authDomain: "inventory-management-8847e.firebaseapp.com",
  projectId: "inventory-management-8847e",
  storageBucket: "inventory-management-8847e.appspot.com",
  messagingSenderId: "297375495727",
  appId: "1:297375495727:web:ab058c16d0d8bdc790f8da",
  measurementId: "G-L2LR583WE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};