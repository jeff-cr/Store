// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { env } from "../../helpers/constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const env=import.meta.env

// const firebaseConfig = {
//   apiKey: "AIzaSyDmUhPOTw8S7n7Pk7sPmZlqfCUpAllkZ-E",
//   authDomain: "web-fake-store.firebaseapp.com",
//   projectId: "web-fake-store",
//   storageBucket: "web-fake-store.appspot.com",
//   messagingSenderId: "709373015941",
//   appId: "1:709373015941:web:5cd84a08f207b1782bf6ec",
//   measurementId: "G-Z7SQ8P9ML2"
// };
console.log("Env ",env);
const firebaseConfig = {
    apiKey: env.VITE_API_KEY,
    authDomain: env.VITE_AUTH_DOMAIN,
    projectId: env.VITE_PROJECT_ID,
    storageBucket: env.VITE_STORAGE_BUCKET,
    messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
    appId: env.VITE_APP_ID,
    measurementId: env.VITE_MEASUREMENT_ID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);