import { Dispatch, SetStateAction } from 'react';

type State<T> = T | undefined;

export type ReturnArrayState<T> = [
  State<T>,
  Dispatch<SetStateAction<State<T>>>,
];

export type CustomHookCallback<T> = (value: T) => void;
