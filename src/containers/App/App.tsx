import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/core/styles';
import Landing from '../../components/Landing';
import Dashboard from '../Dashboard';
import './App.scss';

const App: React.SFC<{}> = () => {
  return (
    <StylesProvider injectFirst>
      <Router>
        <CssBaseline />
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
              <Dashboard />
            </div>
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
