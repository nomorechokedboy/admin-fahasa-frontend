import { User } from "firebase/auth";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_LOADING = "LOGIN_LOADING";
export interface LoginState {
    loading: boolean;
    user: User | null;
    error: string;
}
