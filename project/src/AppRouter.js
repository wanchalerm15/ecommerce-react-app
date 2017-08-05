import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Checkout from './components/Checkout';

export const Url = {
   Home: '/',
   Login: '/Login',
   Register: '/Register',
   Checkout: '/Checkout'
};

export default () => (
   <Switch>
      <Route exact path={ Url.Home } component={ Home } />
      <Route path={ Url.Login } component={ Login } />
      <Route path={ Url.Register } component={ Register } />
      <Route path={ Url.Checkout } component={ Checkout } />
   </Switch>
);
