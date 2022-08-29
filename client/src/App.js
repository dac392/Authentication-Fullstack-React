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
import Profile from './components/Profile';

export default () => (

  <div>
    <Header />
    <Routes>
      <Route exact path="/" element={ <Public /> } />
      <Route element={ <PrivateRoute /> }>
        <Route path="/authenticated" element={<Authenticated />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={ <UserLogIn /> } />
      <Route path="/logout" element={ <UserLogOut /> } />
      <Route path="/signup" element={ <UserSignUp /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  </div>

);
