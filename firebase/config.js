// import { initializeApp, getApps } from "firebase/app";

//  const firebaseConfig = {
//      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
//  };
// console.log("Firebase API Key:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
//  // Initialize Firebase
//  let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// export default firebase_app;
 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5QJ0hbyzInG9OyJ4PDPUPP-ReSoxG72k",
  authDomain: "experimental-app-ad922.firebaseapp.com",
  projectId: "experimental-app-ad922",
  storageBucket: "experimental-app-ad922.firebasestorage.app",
  messagingSenderId: "859122550142",
  appId: "1:859122550142:web:09b4f44841755288005f2f",
  measurementId: "G-GQ4WB0QRXX"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase_app);
export default firebase_app