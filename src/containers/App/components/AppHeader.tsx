import React from 'react';
import { Header, Group, Title, Button } from '@mantine/core';

import ColorSchemeToggle from './ColorSchemeToggle'

const AppHeader: React.FC = () => {
    return (
      <Header height={60} p="xs">
        <Group position="apart">
          <Title order={3}>react-ts-vite</Title>
          <Group>
            <ColorSchemeToggle />
            <Button>Login</Button>
          </Group>
        </Group>
      </Header>
    );
  };
  
  export default AppHeader;
