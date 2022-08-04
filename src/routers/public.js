import React from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";
export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const token = user?.access;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          const decodedToken = decode(token);
          if (
            token &&
            restricted &&
            new Date().getTime() / 1000 > decodedToken.exp
          ) {
            return <Redirect to="/" />;
          } else {
            return <Component {...props} />;
          }
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};
