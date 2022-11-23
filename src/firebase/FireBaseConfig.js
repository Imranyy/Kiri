// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6PP7Xy2lNuzZNa4DsGHf3R7lGUsD-eH4",
  authDomain: "kiri-web-app.firebaseapp.com",
  projectId: "kiri-web-app",
  storageBucket: "kiri-web-app.appspot.com",
  messagingSenderId: "380309710914",
  appId: "1:380309710914:web:2bb60ffa57581b2c3325db",
  measurementId: "G-7EEFWG66EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);