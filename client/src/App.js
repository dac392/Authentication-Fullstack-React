import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header';
import Public from './components/Public';
import NotFound from './components/NotFound';
import UserSignUp from './components/UserSignUp';
import UserLogIn from './components/UserLogIn';
import UserLogOut from './components/UserLogOut';
import Authenticated from './components/Authenticated';

export default () => (
  <Router>
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Public} />
        <Route path="/authenticated" component={Authenticated} />
        <Route path="/login" component={UserLogIn} />
        <Route path="/signup" component={UserSignUp} />
        <Route path="/logout" component={UserLogOut} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);
