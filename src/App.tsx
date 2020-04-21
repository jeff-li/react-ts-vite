import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

const App: React.SFC<{}> = () => {
  return (
    <Router>
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

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <div>
              <h2>Home</h2>
            </div>
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
  );
};

export default App;
