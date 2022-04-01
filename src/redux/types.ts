export interface ReduxAction<T> {
    type: string;
    payload: T;
}

export interface StateTree {}
