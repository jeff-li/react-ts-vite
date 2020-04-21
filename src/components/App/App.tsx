import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/core/styles';
import Landing from '../Landing';
import './App.css';

const App: React.SFC<{}> = () => {
  return (
    <StylesProvider injectFirst>
      <Router>
        <CssBaseline />
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/about">
              <div>
                <h2>About</h2>
              </div>
            </Route>
            <Route path="/dashboard">
              <div>
                <h2>Dashboard</h2>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </StylesProvider>
  );
};

export default App;
