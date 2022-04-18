import { CustomHookCallback } from "@/types/customs/hook";
import { ReactNode, useState } from "react";
import useError from "../useError";

export default function useValidate<T>(
    field: ReactNode,
    cb?: CustomHookCallback<T>,
    defaultValue?: T,
): [T | undefined, string | undefined, (value: T) => void, (value: T) => void] {
    const [state, setState] = defaultValue
        ? useState<T>(defaultValue)
        : useState<T>();
    const [error, setError] = useError(field);

    const handleChange = (value: T) => {
        setState(value);
        setError("");
        if (typeof cb === "function") cb(value);
    };

    const reset = (value: T) => {
        setState(value);
    };

    return [state, error, handleChange, reset];
}
