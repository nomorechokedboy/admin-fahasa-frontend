import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
  User,
} from 'firebase/auth';
import { auth } from '../config';

const logIn = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

const sendVerifyEmail = (user: User) => sendEmailVerification(user);

const registerNewEmployee = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

const resetPassword = (email: string) => sendPasswordResetEmail(auth, email);

const logOut = () => signOut(auth);

const isSignedIn: () => Promise<User | null> = () =>
  new Promise((resolve) => onAuthStateChanged(auth, (user) => resolve(user)));

const stayLogin = (currentUser: User) => updateCurrentUser(auth, currentUser);

export {
  logIn,
  logOut,
  isSignedIn,
  registerNewEmployee,
  resetPassword,
  sendVerifyEmail,
  stayLogin,
};
