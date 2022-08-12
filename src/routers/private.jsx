import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export function PrivateRoute({ component: Component }) {
  return (
    <Route
      render={(props) => {
        const user = JSON.parse(localStorage.getItem('profile'));
        const token = user?.access;
        if (!token) {
          return <Redirect to="/login" />;
        }
        if (token) {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <Component props={props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
}
PrivateRoute.propTypes = {
  component: PropTypes.func,
};
