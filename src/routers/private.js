import React from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";
export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const user = JSON.parse(localStorage.getItem("profile"));
      const token = user?.access;
      const decodedToken = decode(token);

      console.log(decodedToken);

      var currentTimestamp = new Date().getTime() / 1000;
      var tokenIsNotExpired = decodedToken.exp > currentTimestamp;
      console.log(tokenIsNotExpired);
      if (!token) {
        return <Redirect to="/login" />;
      }

      if (token && tokenIsNotExpired) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/login" />;
      }
    }}
  />
);
