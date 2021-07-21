import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        {/* <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/dashboard/*' component={Dashboard} /> */}
      </Switch>
    </Router>
  );
}

export default App;

/* 
import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { isAuthenticated } from './actions/auth';

import Dashboard from './pages/Dashboard/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/dashboard/*' component={Dashboard} />
      </Switch>
    </Router>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state, setState] = useState({
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    isAuthenticated()
      .then((auth) => {
        if (auth) {
          setState({ isAuthenticated: true, isLoading: false });
        } else {
          setState({ isAuthenticated: false, isLoading: false });
        }
      })
      .catch(() => {
        setState({ isAuthenticated: false, isLoading: false });
      });

    return function cleanup() {
      setState({ isAuthenticated: false, isLoading: false });
    };
  }, []);

  if (state.isLoading) {
    return <div>Loading...</div>;
  }
  if (!state.isAuthenticated) {
    return <Redirect to='/login' />;
  }
  return <Component {...rest} />;
};

export default App;


*/
