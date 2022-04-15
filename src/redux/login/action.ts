import { logIn, logOut } from "@/lib/firebase";
import { codeToMessage } from "@/utils/auth";
import { AUTH_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./types";
import { User } from "firebase/auth";
import { Action, StateTree } from "../types";

export default function login(email: string, password: string) {
    return (dispatch: any) => {
        dispatch(setLoading());
        logIn(email, password)
            .then((credential) => dispatch(setLoginUser(credential.user)))
            .catch((e) =>
                dispatch({ type: AUTH_ERROR, payload: codeToMessage(e.code) }),
            );
    };
}

export const logout = () => (dispatch: any) => {
    logOut()
        .then(() => {
            dispatch(setLogout());
        })
        .catch((e) =>
            dispatch({ type: AUTH_ERROR, payload: codeToMessage(e.code) }),
        );
};

export const setLoading = (): Action<null> => ({
    payload: null,
    type: LOGIN_LOADING,
});

export const setLoginUser = (user: User): Action<User> => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const setLoginError = (error: string): Action<string> => ({
    payload: error,
    type: AUTH_ERROR,
});

export const setLogout = (): Action<null> => ({
    payload: null,
    type: LOGOUT,
});

export const getLoginState = (state: StateTree) => state.login;
