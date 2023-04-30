// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh8sVPCNMHjs0xkQwznBW26ejNGMZ2D74",
  authDomain: "the-news-dragon-b4b41.firebaseapp.com",
  projectId: "the-news-dragon-b4b41",
  storageBucket: "the-news-dragon-b4b41.appspot.com",
  messagingSenderId: "223000782294",
  appId: "1:223000782294:web:71594cd0ae8934aecd3077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;