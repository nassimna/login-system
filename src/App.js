import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/home';
import Login from './component/login';
import Signup from './component/signup';
import { PrivateRoute } from './routers/private';
import { PublicRoute } from './routers/public';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PublicRoute restricted exact path="/login" component={Login} />
          <PublicRoute restricted exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
