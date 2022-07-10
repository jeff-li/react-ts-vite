import * as React from 'react';
import { MantineThemeOverride, MantineProvider, AppShell, Navbar, Header } from '@mantine/core';

const App: React.FC = () => {
  const myTheme: MantineThemeOverride = {
    colorScheme: 'dark',
    primaryColor: 'orange',
    defaultRadius: 0
  };
  return (
    <MantineProvider
      withNormalizeCSS
      theme={myTheme}
    >
      <AppShell
        padding="md"
        navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
        header={<Header height={60} p="xs">{/* Header content */}</Header>}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        <div>Home</div>
      </AppShell>
    </MantineProvider>
  );
};

export default App;
