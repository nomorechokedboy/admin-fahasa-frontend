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

firebase.initializeApp({
    apiKey: (apiKey as string) || import.meta.env.VITE_apiKey,
    appId: appId as string,
    authDomain: authDomain as string,
    measurementId: measurementId as string,
    messagingSenderId: messagingSenderId as string,
    projectId: projectId as string,
    storageBucket: storageBucket as string,
});

const auth = firebase.auth();
export { auth, firebase };
