import BaseUser from "@/types/user";
import { User } from "firebase/auth";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const AUTH_ERROR = "LOGIN_FAIL";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGOUT = "LOGOUT";
export interface LoginState {
    loading: boolean;
    user: BaseUser | null;
    error: string;
}
