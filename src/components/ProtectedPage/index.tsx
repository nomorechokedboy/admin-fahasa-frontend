import { LOGIN } from "@/configs";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: ReactNode;
    isAllowed: boolean;
    redirectLink?: string;
}

export default function ProtectedRoute({
    children,
    isAllowed,
    redirectLink = LOGIN,
}: ProtectedRouteProps) {
    if (!isAllowed) return <Navigate to={redirectLink} replace />;
    return <>{children}</>;
}
