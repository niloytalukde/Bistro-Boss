// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPjAusJaLYecWsk5OvNvwq_LchqZQrgwA",
  authDomain: "bistro-boss-restrant.firebaseapp.com",
  projectId: "bistro-boss-restrant",
  storageBucket: "bistro-boss-restrant.firebasestorage.app",
  messagingSenderId: "38003560570",
  appId: "1:38003560570:web:db0e0bb41f57645c136bc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth =getAuth(app)