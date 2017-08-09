import React, { Component } from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import AppRouter from './AppRouter';

import Navbar from './components/Navbar';
import BrandFooter from './components/Brand-footer';
import FooterPage from './components/Footer';

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <div id="ecommerce-react-app">
            	<Navbar />
               <AppRouter />
               <BrandFooter />
               <FooterPage />
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
