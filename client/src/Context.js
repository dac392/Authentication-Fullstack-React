import React from 'react';

export const Context = React.createContext(); 

export const Provider = (props) => {
  const logIn = async () => {};
  const logOut = () => {};
  const signup = () => {};

  return (
    <Context.Provider value={ {
      actions: {
        logIn,
        logOut,
        signup
      }
    } }>
      {props.children}
    </Context.Provider>
  );
};

