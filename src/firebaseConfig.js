import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


//web app's Firebase configuration:
const firebaseConfig = {
  apiKey: "AIzaSyAF5kAl78ZWHP8WdUnxZtaXcDy8feUk8V8",
  authDomain: "koyomkoyoadmin.firebaseapp.com",
  projectId: "koyomkoyoadmin",
  storageBucket: "koyomkoyoadmin.firebasestorage.app",
  messagingSenderId: "697192588523",
  appId: "1:697192588523:web:ff97757eac79ac1cec0aae"
};

// Initialize Firebase: 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };