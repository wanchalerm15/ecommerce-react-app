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
            <div className="products-wapper container">
               <div className="row">
                  <div className="col-8"></div>
                  <div className="col-4">
                     <Sidebar />
                  </div>
               </div>
            </div>
         </div>
      );
   }

}

export default Products;
