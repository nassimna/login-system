import React from "react";
import "./App.css";
import Login from "./component/login";
import Signup from "./component/signup";
import Home from "./component/home";
import { PrivateRoute } from "./routers/private";
import { PublicRoute } from "./routers/public";

import { BrowserRouter as Router, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PublicRoute
            restricted={true}
            exact
            path="/login"
            component={Login}
          />
          <PublicRoute
            restricted={true}
            exact
            path="/signup"
            component={Signup}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
