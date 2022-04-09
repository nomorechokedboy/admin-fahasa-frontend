import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Provider } from "react-redux";
import "./App.css";
import AdminPage from "../pages/AdminPage";
import store from "../redux/store";
import LoginPage from "@/pages/Login";
import AuthProvider from "@/providers/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
                            <Route path="/" element={<LoginPage />} />
                            <Route path="admin/*" element={<AdminPage />} />
                        </Routes>
                    </BrowserRouter>
                </MantineProvider>
            </Provider>
        </ColorSchemeProvider>
    );
}

export default App;
