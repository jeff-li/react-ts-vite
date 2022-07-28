import React, { useState } from 'react';
import { MantineThemeOverride, MantineProvider, 
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger
} from '@mantine/core';

import AppFooter from '../../components/AppFooter';

const App: React.FC = () => {
  const myTheme: MantineThemeOverride = {
    colorScheme: 'dark',
    primaryColor: 'orange',
    defaultRadius: 0
  };
  const [opened, setOpened] = useState(false);

  return (
    <MantineProvider
      withNormalizeCSS
      theme={myTheme}
    >
      <AppShell
        styles={(theme) => ({
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
            <Text>Application navbar</Text>
          </Navbar>
        }
        footer={<AppFooter />}
        header={
          <Header height={70} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  mr="xl"
                />
              </MediaQuery>

              <Text>Application header</Text>
            </div>
          </Header>
        }
      >
        <div>Home</div>
        <Text>Resize app to see responsive navbar in action</Text>
      </AppShell>
    </MantineProvider>
  );
};

export default App;
