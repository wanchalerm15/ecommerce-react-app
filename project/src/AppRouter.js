import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Checkout from './components/Checkout';
import Products from './components/Products';
import ProductSingle from './components/Product-single';
import Logout from './components/Logout';

export const Url = {
   Home: '/',
   Login: '/Login',
   Register: '/Register',
   Checkout: '/Checkout',
   Products: '/Products',
   Single: '/Single',
   Logout: '/Logout'
};

class AppRouter extends React.Component {

   render() {
      return (
         <Switch>
            <Route exact path={ Url.Home } component={ Home } />
            <Route path={ Url.Login } component={ Login } />
            <Route path={ Url.Register } component={ Register } />
            <Route path={ Url.Checkout } component={ Checkout } />
            <Route path={ Url.Products } component={ Products } />
            <Route path={ Url.Single } component={ ProductSingle } />
            <Route path={ Url.Logout } component={ Logout } />
         </Switch>
      );
   }

}

export default AppRouter;
