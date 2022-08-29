import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Public from './components/Public';
import PrivateRoute from './PrivateRoute';
import NotFound from './components/NotFound';
import UserSignUp from './components/UserSignUp';
import UserLogIn from './components/UserLogIn';
import UserLogOut from './components/UserLogOut';
import Authenticated from './components/Authenticated';

export default () => (

  <div>
    <Header />
    <Routes>
      <Route exact path="/" element={ <Public /> } />
      <Route path="/authenticated" element={ <PrivateRoute /> }>
        <Route element={<Authenticated />} />
      </Route>
      <Route path="/login" element={ <UserLogIn /> } />
      <Route path="/logout" element={ <UserLogOut /> } />
      <Route path="/signup" element={ <UserSignUp /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  </div>

);
