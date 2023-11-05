
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBT-C1QkzQpJRlcYc_pWYLViebAMP4Vw1Q",
  authDomain: "carpooling-ride-sharing-client.firebaseapp.com",
  projectId: "carpooling-ride-sharing-client",
  storageBucket: "carpooling-ride-sharing-client.appspot.com",
  messagingSenderId: "1089336874719",
  appId: "1:1089336874719:web:682d937fa806cba035bb6a"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)