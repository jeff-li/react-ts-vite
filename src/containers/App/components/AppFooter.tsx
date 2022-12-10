import React from 'react';
import { Footer, Center } from '@mantine/core';

const AppFooter: React.FC = () => {
  return (
    <Footer height={60} p="md" >
      <Center>
        react-ts-vite {new Date().getFullYear()}
      </Center>
    </Footer>
  );
};

export default AppFooter;
