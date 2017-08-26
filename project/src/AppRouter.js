import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Checkout from './components/Checkout';
import Products from './components/Products';
import ProductSingle from './components/Product-single';

export const Url = {
   Home: '/',
   Login: '/Login',
   Register: '/Register',
   Checkout: '/Checkout',
   Products: '/Products',
   Single: '/Single'
};

class AppRouter extends React.Component {

   isUnActive(Component) {
      if(localStorage.getItem('authorization'))
         return () => <Redirect to={ Url.Home } />
      return Component;
   }

   isAuthen(Component) {
      if(!localStorage.getItem('authorization'))
         return () => <Redirect to={ Url.Login } />
      return Component;
   }

   render() {
      return (
         <Switch>
            <Route exact path={ Url.Home } component={ Home } />
            <Route path={ Url.Login } component={ this.isUnActive(Login) } />
            <Route path={ Url.Register } component={ this.isUnActive(Register) } />
            <Route path={ Url.Checkout } component={ Checkout } />
            <Route path={ Url.Products } component={ Products } />
            <Route path={ Url.Single } component={ ProductSingle } />
         </Switch>
      );
   }

}

export default AppRouter;
