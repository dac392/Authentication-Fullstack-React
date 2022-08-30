import React, { useState } from 'react';
import Cookies from 'js-cookie';
import Data from './Data';

export const Context = React.createContext(); 

export const Provider = (props) => {
  const data = new Data();
  const cookie_data = Cookies.get('authUser');
  const user_cookie = cookie_data? JSON.parse( cookie_data ) : null;
  const [authUser, setAuthUser] = useState(user_cookie? user_cookie:null);

  const logIn = async (username, password) => {
    const user = await data.getUser(username, password);
    if (user !== null){
      setAuthUser(user);

      // set cookie
      Cookies.set('authUser', JSON.stringify(user), { expires: 1 });
      // [ cookie name, cookie value, cookie options ]
      // cookie option: { expires: 1 } sets the cookie to expire in 1 day
    }
    return user;
  };
  const logOut = () => {
    setAuthUser(null);
    Cookies.remove('authUser');
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

