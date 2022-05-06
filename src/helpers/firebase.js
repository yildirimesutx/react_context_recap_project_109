// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVFswRlconKQsAA63ovw0uTogxGV4KHoA",
  authDomain: "car-lover-5b6ac.firebaseapp.com",
  projectId: "car-lover-5b6ac",
  storageBucket: "car-lover-5b6ac.appspot.com",
  messagingSenderId: "760583826833",
  appId: "1:760583826833:web:4652742fce98a2d659be30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export const createUser = async(name, email, password, navigate) =>{
   try {
   let userCredential = await  createUserWithEmailAndPassword (auth, name, email,password)   
   navigate("/")
   console.log(userCredential);
   } catch (error) {
      alert("error") 
   }






}