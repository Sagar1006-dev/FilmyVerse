import {initializeApp} from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// import Firestore from "firestore";
// import { initializeApp } from "firebase/app";
// import { getFirestores,collection } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyD1d5icOtxvGRXxH5ECClwQgsSMpNqpS14",
  authDomain: "filmyverse-2cd1d.firebaseapp.com",
  projectId: "filmyverse-2cd1d",
  storageBucket: "filmyverse-2cd1d.appspot.com",
  messagingSenderId: "443515402431",
  appId: "1:443515402431:web:a19da40fd093616ca72e0a"
};


// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const db = getFirestores(app);
export const moviesRef = collection (db,"movies");
export const reviewsRef = collection (db,"reviews");
export const usersRef = collection(db,"users");

export default app;