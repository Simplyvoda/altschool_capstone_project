// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD37nRs5KcN5XM5uGQZY43v2Ri6AWPJLsc",
  authDomain: "scissors-app-f3ced.firebaseapp.com",
  projectId: "scissors-app-f3ced",
  storageBucket: "scissors-app-f3ced.appspot.com",
  messagingSenderId: "235541823291",
  appId: "1:235541823291:web:e7c48e4afac48a20c7c11e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);