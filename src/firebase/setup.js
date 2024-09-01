import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDg4tp-Dq7C8iEq_hEGVAEPRJ9pq1xHy0Y",
  authDomain: "cartgo24.firebaseapp.com",
  projectId: "cartgo24",
  storageBucket: "cartgo24.appspot.com",
  messagingSenderId: "17419926079",
  appId: "1:17419926079:web:181bcb1df21033d4dad68a",
  measurementId: "G-DCRE1VG0R7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)