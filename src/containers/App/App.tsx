import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';

import Layout from './components/Layout'
import PublicLanding from '../PublicLanding';
import PrivateHome from '../PrivateHome';
import NoMatch from '../NoMatch'

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
  setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<PublicLanding />} />
            <Route path="login" element={<span>LOGIN</span>} />
            <Route path="register" element={<span>Register</span>} />
            <Route path="home" element={<PrivateHome />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
