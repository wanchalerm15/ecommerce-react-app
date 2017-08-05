import React, { Component } from 'react';
import Sliderbar from './Sliderbar';
import ProductHeader from './Product-header';
import ProductItem from './Product-item';

class Home extends Component {

   render() {
      return (
         <div className="homepage">
            <Sliderbar />
            <ProductHeader />
            <ProductItem />
         </div>
      );
   }

}

export default Home;
