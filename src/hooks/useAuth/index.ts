import { auth, firebase } from "@/lib/firebase";
import { authContext } from "@/providers/Auth";
import { useContext, useEffect, useState } from "react";

export default function useAuth() {
    return useContext(authContext);
}

export const useProviderAuth = () => {
    const [user, setUser] = useState<null | firebase.User>(null);

    const login = (email: string, password: string) =>
        auth.signInWithEmailAndPassword(email, password).then((res) => {
            setUser(res.user);
            console.log({ user: res.user });
        });

    const logout = () =>
        auth.signOut().then(() => {
            setUser(null);
        });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return {
        user,
        login,
        logout,
    };
};
