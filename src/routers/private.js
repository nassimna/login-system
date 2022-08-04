import React from "react";
import { Route, Redirect } from "react-router-dom";
export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={
      (props) => {
        const user = JSON.parse(localStorage.getItem("profile"));
        const token = user?.access;

        if (!token) {
          return <Redirect to="/login" />;
        }
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }

      // authorised so return component
    }
  />
);
