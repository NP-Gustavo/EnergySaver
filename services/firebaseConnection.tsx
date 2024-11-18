import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD8UGiV_CoxjXGlofkCwrbfFfq0pt2NHU8",
  authDomain: "energysaver-a992f.firebaseapp.com",
  projectId: "energysaver-a992f",
  storageBucket: "energysaver-a992f.firebasestorage.app",
  messagingSenderId: "589782659632",
  appId: "1:589782659632:web:5dbd8e568108d77658f3f5"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };