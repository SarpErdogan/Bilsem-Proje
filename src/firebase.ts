// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUPShNO-nBLBn8sHHnuqXmwphLJcdlGlY",
  authDomain: "myapp-2f1ab.firebaseapp.com",
  databaseURL: "https://myapp-2f1ab-default-rtdb.firebaseio.com",
  projectId: "myapp-2f1ab",
  storageBucket: "myapp-2f1ab.firebasestorage.app",
  messagingSenderId: "1022044981571",
  appId: "1:1022044981571:web:27f48f5e1a3ad2917747f6",
  measurementId: "G-R9EY457WMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db:any = getDatabase(app);
export default db;
