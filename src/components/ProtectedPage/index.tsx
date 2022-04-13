import { getLoginState } from "@/redux";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface ProtectedPageProps {
    children: ReactNode;
}

export default function ProtectedPage({ children }: ProtectedPageProps) {
    const { user } = useSelector(getLoginState);
    if (!user) return <Navigate to="/" replace />;
    return <>{children}</>;
}
