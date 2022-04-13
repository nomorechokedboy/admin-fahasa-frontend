import ProtectedPage from "@/components/ProtectedPage";
import LoginPage from "@/pages/Login";
import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import store from "../redux/store";
import "./App.css";

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
                        <Routes>
                            <Route index element={<LoginPage />} />
                            <Route path="/" element={<LoginPage />} />
                            <Route
                                path="admin/*"
                                element={
                                    <ProtectedPage>
                                        <AdminPage />
                                    </ProtectedPage>
                                }
                            />
                            <Route
                                path="*"
                                element={<p>There's nothing here: 404!</p>}
                            />
                        </Routes>
                    </BrowserRouter>
                </MantineProvider>
            </Provider>
        </ColorSchemeProvider>
    );
}

export default App;
