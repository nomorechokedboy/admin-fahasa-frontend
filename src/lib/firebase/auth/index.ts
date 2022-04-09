import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "../config";

const logIn = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

const registerNewEmployee = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

const resetPassword = (email: string) => sendPasswordResetEmail(auth, email);

const logOut = () => signOut(auth);
export { logIn, logOut, registerNewEmployee, resetPassword };
