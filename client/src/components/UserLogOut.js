import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../Context';

export default () => {
  const { actions } = useContext(Context);
  useEffect(()=>{
    // has to be done like this because you can't change state of provider while in use or something like that
    actions.logOut();
  }, []);

  return (<Navigate to="/" />);
}
