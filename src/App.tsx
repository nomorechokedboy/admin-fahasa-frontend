import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Provider } from 'react-redux';
import './App.css';
import AdminPage from './components/AdminPage';
import store from './redux/store';

function App() {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
    });

    const toggleColorScheme = (value?: ColorScheme) => {
        setColorScheme(value || colorScheme === "dark" ? "light" : "dark");
    };

    return (
        <Provider store={store}>
            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                    <AdminPage />
                </MantineProvider>
            </ColorSchemeProvider >
        </Provider>
    );
}

export default App;
