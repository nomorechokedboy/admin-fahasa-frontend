import NotificationDialog from '@/components/NotificationDiaglog';
import ProtectedRoute from '@/components/ProtectedPage';
import { ADMIN, LOGIN } from '@/configs';
import Layout from '@/layout/Layout';
import LoginPage from '@/pages/Login';
import { getLoginState } from '@/redux';
import {
  ColorScheme,
  ColorSchemeProvider,
  LoadingOverlay,
  MantineProvider,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const AdminPage = lazy(() => import('@/pages/Admin'));
const ErrorPage = lazy(() => import('@/pages/Error'));

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || colorScheme === 'dark' ? 'light' : 'dark');
  };

  const { user } = useSelector(getLoginState);
  console.log({ user });

  console.log('App render');

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <BrowserRouter>
            <Suspense fallback={<LoadingOverlay visible />}>
              <Routes>
                <Route index element={<LoginPage />} />
                <Route path={LOGIN} element={<LoginPage />} />
                <Route
                  path={ADMIN}
                  element={
                    <ProtectedRoute isAllowed={!!user}>
                      <Layout>
                        <AdminPage />
                      </Layout>
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
          <NotificationDialog />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
