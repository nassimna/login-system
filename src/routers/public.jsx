import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export function PublicRoute({ component: Component, restricted }) {
  const user = JSON.parse(localStorage.getItem('profile'));
  const token = user?.access;
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      render={() => {
        if (token) {
          if (token && restricted) {
            return <Redirect to="/" />;
          }
        }

        return <Component />;
      }}
    />
  );
}
PublicRoute.propTypes = {

  component: PropTypes.func,
  restricted: PropTypes.bool,

};
