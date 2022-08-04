import React from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";
export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const user = JSON.parse(localStorage.getItem("profile"));
      const token = user?.access;
      if (!token) {
        return <Redirect to="/login" />;
      }
      if (token) {
        const decodedToken = decode(token);
        if (new Date().getTime() / 1000 > decodedToken.exp) {
          console.log(new Date().getTime() / 1000 < decodedToken.exp);
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      } else {
        return <Redirect to="/login" />;
      }
    }}
  />
);
