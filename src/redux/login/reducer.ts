import { isSignedIn } from "@/lib/firebase";
import { User } from "firebase/auth";
import { Action } from "../types";
import {
    LoginState,
    AUTH_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT,
} from "./types";

const initialState: LoginState = {
    user: await isSignedIn(),
    loading: false,
    error: "",
};

export default function LoginReducer(
    state = initialState,
    action: Action<User | string>,
): LoginState {
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true,
                error: "",
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload as User,
                loading: false,
            };
        case AUTH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload as string,
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
}
