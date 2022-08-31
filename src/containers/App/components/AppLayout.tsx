import { Outlet } from "react-router-dom";
import { AppShell } from '@mantine/core';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const AppLayout: React.FC = () => {
  return (
    <AppShell
      padding="md"
      header={<AppHeader />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
      footer={<AppFooter />}
    >
      <Outlet />
    </AppShell>
  );
};

export default AppLayout;
