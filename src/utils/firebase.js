import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyYnpoXGwHoT0YaUv5WBHk2SGvUtL98TM",
  authDomain: "netflixgpt-c1caa.firebaseapp.com",
  projectId: "netflixgpt-c1caa",
  storageBucket: "netflixgpt-c1caa.firebasestorage.app",
  messagingSenderId: "1069670144684",
  appId: "1:1069670144684:web:5eaa952af4d1b1fd315d09",
  measurementId: "G-XQKEP4KP94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()