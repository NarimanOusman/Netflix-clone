import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6ZHkISp84gLzNbbBjlkgaT_MJHr2JsXE",
  authDomain: "nariflix-cbdbd.firebaseapp.com",
  projectId: "nariflix-cbdbd",
  storageBucket: "nariflix-cbdbd.firebasestorage.app",
  messagingSenderId: "56905840402",
  appId: "1:56905840402:web:05f82b2d2a1f54df8be5cb",
  measurementId: "G-H9QJNQN2LJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      email,
      authProvider: "local",
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("Signup error", error);

    if (error.code === "auth/email-already-in-use") {
      alert("This email is already registered. Please log in instead.");
    } else {
      alert(error.message); // Show other errors normally
    }
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const logout = async () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
