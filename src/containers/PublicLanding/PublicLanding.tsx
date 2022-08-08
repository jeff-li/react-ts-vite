import { useState } from 'react';
import { Box, createStyles } from '@mantine/core';
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Box>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default Home;
