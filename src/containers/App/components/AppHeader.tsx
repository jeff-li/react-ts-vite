import { useState } from 'react';
import { Header, Group, Title, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import ColorSchemeToggle from './ColorSchemeToggle';
import useAuth from '../../../hooks/useAuth';

const AppHeader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/login');
  };

  const logout = async (): Promise<void> => {
    try {
      setIsLoading(true)
      await signout();
      navigate('/');
    } catch(e) {
      setIsLoading(false);
    }
  };

  return (
    <Header height={60} p="xs">
      <Group position="apart">
        <Title order={3}>react-ts-vite</Title>
        <Group>
          <ColorSchemeToggle />
          {user ? (
            <Button onClick={logout}>
              { isLoading ? 'signing out' : 'Sign Out' }
            </Button>
          ) : (
            <Button onClick={redirect}>Login</Button>
          )}
        </Group>
      </Group>
    </Header>
  );
};

export default AppHeader;
