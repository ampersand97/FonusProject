import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDnzFcUGyEsM_ZaXeJmjGEOavjWou52aI8",
  authDomain: "fonus-app.firebaseapp.com",
  projectId: "fonus-app",
  storageBucket: "fonus-app.appspot.com",
  messagingSenderId: "184943284058",
  appId: "1:184943284058:web:c666da45587b8e576c2d63",
  measurementId: "G-6GDZ4XK306",
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);