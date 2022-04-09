import { Action as ReduxAction } from "redux";
import { LoginState } from "../login/types";

export interface Action<T> extends ReduxAction<string> {
    payload: T;
}

export interface StateTree {
    login: LoginState;
}
