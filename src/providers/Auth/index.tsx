import { useProviderAuth } from "@/hooks/useAuth";
import { createContext, ReactNode } from "react";
import { firebase } from "@/lib/firebase";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContext {
    user: firebase.User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const authContext = createContext<AuthContext | null>(null);

export default function AuthProvider({ children }: AuthProviderProps) {
    const auth = useProviderAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
