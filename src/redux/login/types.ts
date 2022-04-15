import { User } from "firebase/auth";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const AUTH_ERROR = "LOGIN_FAIL";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGOUT = "LOGOUT";
export interface LoginState {
    loading: boolean;
    user: User | null;
    error: string;
}
