import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Context } from './Context';

export default ()=>{
  const { authUser } = useContext(Context);
  return authUser? <Outlet /> : <Navigate to='/login' />;
}

// export default PrivateRoute;