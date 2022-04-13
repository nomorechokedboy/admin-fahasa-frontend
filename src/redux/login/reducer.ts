import { isSignedIn } from "@/lib/firebase";
import { User } from "firebase/auth";
import { Action } from "../types";
import { LoginState, LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "./types";

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
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload as string,
            };
        default:
            return state;
    }
}
