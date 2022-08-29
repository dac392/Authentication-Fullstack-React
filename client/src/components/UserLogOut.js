import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../Context';

export default () => {
  const { actions } = useContext(Context);
  actions.logOut();

  return (<Navigate to="/" />);
}
