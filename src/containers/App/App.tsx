import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';

import AuthProvider from '../../context/AuthContext'
import AppLayout from './components/AppLayout'
import ProtectedPage from '../../components/ProtectedPage';
import PublicLanding from '../PublicLanding';
import PrivateHome from '../PrivateHome';
import TempPage from './components/TempPage'
import Login from '../Login';
import NoMatch from '../NoMatch'

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
  setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <AuthProvider>
          <Routes>
            {/* public pages */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<span>Register</span>} />
            <Route element={<AppLayout />}>
              <Route path="/" element={<PublicLanding />} />
              {/* private pages */}
              <Route element={<ProtectedPage />}>
                <Route path="/home" element={<PrivateHome />} />
                <Route path="/projects" element={<TempPage content="Projects Page" />} />
                <Route path="/users" element={<TempPage content="Users Page" />} />
                <Route path="/requests" element={<TempPage content="Requests Page" />} />
                <Route path="/discussions" element={<TempPage content="Discussions Page" />} />
              
              </Route>
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </AuthProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
