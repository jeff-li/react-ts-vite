import { useState } from 'react';
import { Box, Card, createStyles, Image, Text, Button, SimpleGrid } from '@mantine/core';
import reactLogo from '../../assets/react.svg';

const useStyles = createStyles(() => ({
  page: {
    textAlign: 'center',
    padding: '2rem',
    maxWidth: 1280,
    margin: 'auto'
  },
  logo: {
    height: '6em',
    padding: '1.5em',
    willChange: 'filter',
    '&:hover': {
      filter: 'drop-shadow(0 0 2em #646cffaa)'
    }
  },
  react: {
      '&:hover': {
      filter: 'drop-shadow(0 0 2em #61dafbaa)'
    }
  },
}));

const Home: React.FC = () => {
  const { classes, cx } = useStyles();
  const [count, setCount] = useState<number>(0)

  const sampleCard = (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>
      <Text mt="md" mb="xs" size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  )
  return (
    <div className={classes.page}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className={classes.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={cx(classes.logo, classes.react)} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Box sx={{padding: '2em'}}>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Box>
      <SimpleGrid cols={3}>
        {sampleCard}
        {sampleCard}
        {sampleCard}
        {sampleCard}
        {sampleCard}
        {sampleCard}
      </SimpleGrid>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default Home;
