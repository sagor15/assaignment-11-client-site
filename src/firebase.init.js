// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl5iXn6dwHHmAlmgCDbUzLeT6TsLS0ysM",
  authDomain: "assaignment-11-599ca.firebaseapp.com",
  projectId: "assaignment-11-599ca",
  storageBucket: "assaignment-11-599ca.appspot.com",
  messagingSenderId: "492734688305",
  appId: "1:492734688305:web:8c90726d0f3149b8077910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default app;