// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { messaging } from "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js";
// 'https://www.gstatic.com/firebasejs/9.6.7/firebase-SERVICE.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
console.log(messaging());
const firebaseConfig = {
  apiKey: "AIzaSyDjqsp6RH6D_JSGNwQqbpVEAzLEnXRljnA",
  authDomain: "fcm-server-push.firebaseapp.com",
  projectId: "fcm-server-push",
  storageBucket: "fcm-server-push.appspot.com",
  messagingSenderId: "798753823737",
  appId: "1:798753823737:web:fc1c4f09e9b5165831bb28",
};

console.log(initializeApp(firebaseConfig));

// Initialize Firebase
const app = initializeApp(firebaseConfig);
