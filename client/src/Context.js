import React from 'react';
import Data from './Data';

export const Context = React.createContext(); 

export const Provider = (props) => {
  const data = new Data();

  const logIn = async (username, password) => {
    const user = await data.getUser(username, password);
    return user;
  };
  const logOut = () => {};
  const signup = () => {};

  return (
    <Context.Provider value={ {
      data,
      actions: {
        logIn: logIn,
        logOut,
        signup
      }
    } }>
      {props.children}
    </Context.Provider>
  );
};

