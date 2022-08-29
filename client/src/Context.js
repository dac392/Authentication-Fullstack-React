import React, { useState } from 'react';
import Data from './Data';

export const Context = React.createContext(); 

export const Provider = (props) => {
  const data = new Data();
  const [authUser, setAuthUser] = useState(null);

  const logIn = async (username, password) => {
    const user = await data.getUser(username, password);
    if (user !== null){
      setAuthUser(user);
    }
    return user;
  };
  const logOut = () => {
    setAuthUser(null);
  };
  const signup = () => {};

  return (
    <Context.Provider value={ {
      data,
      authUser,
      actions: {
        logIn: logIn,
        setAuthUser,
        logOut,
        signup
      }
    } }>
      {props.children}
    </Context.Provider>
  );
};

