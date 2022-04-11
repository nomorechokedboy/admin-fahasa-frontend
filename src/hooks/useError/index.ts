import { ReturnArrayState } from "@/types/customs/hook";
import { ReactNode, useEffect, useState } from "react";

export default function useError(e: ReactNode): ReturnArrayState<string> {
    const [error, setError] = useState<string>();

    useEffect(() => {
        if (typeof e === "string") setError(e);
    }, [e]);

    return [error, setError];
}
