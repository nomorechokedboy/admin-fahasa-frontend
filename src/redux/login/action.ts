import { findUserById, logIn, logOut } from "@/lib/firebase";
import BaseUser from "@/types/user";
import { ErrorCodeToMessage } from "@/utils/auth";
import { Action, StateTree } from "../types";
import {
    AUTH_ERROR,
    LoginState,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT,
} from "./types";

export default function login(email: string, password: string) {
    return (dispatch: any) => {
        dispatch(setLoading());
        logIn(email, password)
            .then(async (credential) => {
                const {
                    user: { email, uid, photoURL },
                } = credential;
                const user: BaseUser = {
                    displayName: email ? email : "",
                    photoURL: photoURL ? photoURL : "",
                    role: "",
                };
                const snapshot = await findUserById(uid).once("value");
                const found = snapshot.val();
                user.displayName = `${found.firstName} ${found.lastName}`;
                user.role = found.role;
                user.photoURL = found.photoURL;

                dispatch(setLoginUser(user));
            })
            .catch((e: any) => {
                dispatch(setLoginError(ErrorCodeToMessage(e.code)!));
                console.log(e.code);
            });
    };
}

export const logout = () => (dispatch: any) => {
    logOut()
        .then(() => {
            dispatch(setLogout());
        })
        .catch((e) =>
            dispatch({ type: AUTH_ERROR, payload: ErrorCodeToMessage(e.code) }),
        );
};

export const setLoading = (): Action<null> => ({
    payload: null,
    type: LOGIN_LOADING,
});

export const setLoginUser = (user: BaseUser): Action<LoginState> => ({
    type: LOGIN_SUCCESS,
    payload: {
        error: "",
        user,
        loading: false,
    },
});

export const setLoginError = (error: string): Action<LoginState> => ({
    payload: {
        error,
        user: null,
        loading: false,
    },
    type: AUTH_ERROR,
});

export const setLogout = (): Action<null> => ({
    payload: null,
    type: LOGOUT,
});

export const getLoginState = (state: StateTree) => state.login;
