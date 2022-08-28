import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context } from './Context';

export default ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
    />
  );
};