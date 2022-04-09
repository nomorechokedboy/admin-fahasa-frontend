import {
    apiKey,
    appId,
    authDomain,
    measurementId,
    messagingSenderId,
    projectId,
    storageBucket,
} from "@/configs/env";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";

export const app = firebase.initializeApp({
    apiKey: apiKey as string,
    appId: appId as string,
    authDomain: authDomain as string,
    measurementId: measurementId as string,
    messagingSenderId: messagingSenderId as string,
    projectId: projectId as string,
    storageBucket: storageBucket as string,
});

export const auth = getAuth(app);
