// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCjqaUk33cRdBQGKGyRnx6i8e1-jbhkfKM',
  authDomain: 'login-f1c00.firebaseapp.com',
  projectId: 'login-f1c00',
  storageBucket: 'login-f1c00.appspot.com',
  messagingSenderId: '467467011406',
  appId: '1:467467011406:web:af8c9f6bba05a1a12b4a1f',
  measurementId: 'G-VFKJP3S7GH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
