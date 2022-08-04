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
        if (token && restricted) {
          const decodedToken = decode(token);
          var currentTimestamp = new Date().getTime() / 1000;
          var tokenIsNotExpired = decodedToken.exp > currentTimestamp;
          if (tokenIsNotExpired) {
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
