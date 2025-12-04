// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB16i6yqLtWp8BnthKDrKv8XJJjv7JxnfA",
  authDomain: "dragon-news-422a4.firebaseapp.com",
  projectId: "dragon-news-422a4",
  storageBucket: "dragon-news-422a4.firebasestorage.app",
  messagingSenderId: "291422751942",
  appId: "1:291422751942:web:265a93ec1d068dcbea9bc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;