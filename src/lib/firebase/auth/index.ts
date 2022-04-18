import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    User,
} from "firebase/auth";
import { auth } from "../config";

const logIn = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

const sendVerifyEmail = (user: User) => sendEmailVerification(user);

const registerNewEmployee = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

const resetPassword = (email: string) => sendPasswordResetEmail(auth, email);

const logOut = () => signOut(auth);

const isSignedIn: () => Promise<User | null> = () =>
    new Promise((resolve) => onAuthStateChanged(auth, (user) => resolve(user)));

export {
    logIn,
    logOut,
    isSignedIn,
    registerNewEmployee,
    resetPassword,
    sendVerifyEmail,
};
