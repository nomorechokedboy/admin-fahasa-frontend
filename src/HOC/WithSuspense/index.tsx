import { LoadingOverlay } from "@mantine/core";
import { FC, ReactNode, Suspense } from "react";

export default function withSuspense(
    WrappedComponent: FC,
    Fallback?: ReactNode,
) {
    return () => {
        if (!Fallback) Fallback = <LoadingOverlay visible />;
        return (
            <Suspense fallback={Fallback}>
                <WrappedComponent />
            </Suspense>
        );
    };
}
