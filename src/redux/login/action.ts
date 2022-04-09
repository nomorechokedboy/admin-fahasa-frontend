import { logIn } from "@/lib/firebase";
import { codeToMessage } from "@/utils/auth";
import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "./types";
import { User } from "firebase/auth";
import { Action } from "../types";

export default function login(email: string, password: string) {
    return (dispatch: any) => {
        dispatch(setLoginLoading());
        logIn(email, password)
            .then((credential) => dispatch(setLoginUser(credential.user)))
            .catch((e) =>
                dispatch({ type: LOGIN_FAIL, payload: codeToMessage(e.code) }),
            );
    };
}

export const setLoginLoading = (): Action<null> => ({
    payload: null,
    type: LOGIN_LOADING,
});

export const setLoginUser = (user: User): Action<User> => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const setLoginError = (error: string): Action<string> => ({
    payload: error,
    type: LOGIN_FAIL,
});
