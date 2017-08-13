import React, { Component } from 'react';
import Banner from './Banner';
import Sidebar from './Sidebar';

class Products extends Component {
   constructor() {
      super();
      this.state = {
         items: [

         ]
      };
   }

   render() {
      return (
         <div className="products">
            <Banner link="Products" />
            <Sidebar />
         </div>
      );
   }

}

export default Products;
