import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
import { 
    getAuth, 
    connectAuthEmulator,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
 } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCX8_5UWWZ8WRSobm1whf71m2Q-Z1AmuGY",
    authDomain: "bathsquash.firebaseapp.com",
    projectId: "bathsquash",
    storageBucket: "bathsquash.appspot.com",
    messagingSenderId: "178684431385",
    appId: "1:178684431385:web:ea23a9ef53688e29e8ee88",
    measurementId: "G-9DEF8K42EG"
  };

// Initialize Firebase
const app_fb = initializeApp(firebaseConfig);
const db = getFirestore(app_fb);
const auth = getAuth(app_fb);
console.log("Firebase Initialized");

// create authEmulator
// connectAuthEmulator(auth, 'http//localhost:9099');

const loginEmailPassword = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential);
};

const signupEmailPassword = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential);
};


// export the functions
export { loginEmailPassword, signupEmailPassword };