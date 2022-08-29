import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Context } from './Context';

export default (props)=>{
  const { authUser } = useContext(Context);
  const location = useLocation();
  return authUser? <Outlet /> : <Navigate to="/login" replace state={{from: location}} />;
}

// export default PrivateRoute;