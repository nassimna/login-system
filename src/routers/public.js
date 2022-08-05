import React from "react";
import { Route, Redirect } from "react-router-dom";
export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const token = user?.access;
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          if (token && restricted) {
            return <Redirect to="/" />;
          }
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};
