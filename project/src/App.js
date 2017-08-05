import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Sliderbar from './components/Sliderbar';
import ProductHeader from './components/Product-header';
import ProductItem from './components/Product-item';
import FooterPage from './components/Footer';

class App extends Component {
   render() {
      return (
         <div id="ecommerce-react-app">
         	<Navbar />
         	<Sliderbar />
            <ProductHeader />
            <ProductItem />
            <FooterPage />
         </div>
      );
   }
}

export default App;
