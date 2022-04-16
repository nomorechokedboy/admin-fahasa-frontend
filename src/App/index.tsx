import ProtectedPage from "@/components/ProtectedPage";
import Layout from "@/layout/Layout";
import LoginPage from "@/pages/Login";
import {
    ColorScheme,
    ColorSchemeProvider,
    LoadingOverlay,
    MantineProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "../redux/store";
import "./App.css";
const AdminPage = lazy(() => import("@/pages/AdminPage"));

function App() {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: "mantine-color-scheme",
        defaultValue: "dark",
    });

    const toggleColorScheme = (value?: ColorScheme) => {
        setColorScheme(value || colorScheme === "dark" ? "light" : "dark");
    };

    console.log("App render");

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <Provider store={store}>
                <MantineProvider
                    theme={{ colorScheme }}
                    withGlobalStyles
                    withNormalizeCSS
                >
                    <BrowserRouter>
                        <Suspense fallback={<LoadingOverlay visible />}>
                            <Routes>
                                <Route index element={<LoginPage />} />
                                <Route path="/" element={<LoginPage />} />
                                <Route
                                    path="admin/*"
                                    element={
                                        <ProtectedPage>
                                            <Layout>
                                                <AdminPage />
                                            </Layout>
                                        </ProtectedPage>
                                    }
                                />
                                <Route
                                    path="*"
                                    element={<p>There's nothing here: 404!</p>}
                                />
                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                </MantineProvider>
            </Provider>
        </ColorSchemeProvider>
    );
}

export default App;
