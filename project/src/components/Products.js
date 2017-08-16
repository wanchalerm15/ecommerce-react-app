import React, { Component } from 'react';
import Banner from './Banner';
import Sidebar from './Sidebar';
import ProductItem from './Product-item-2';

class Products extends Component {

   render() {
      return (
         <div className="products">
            <Banner link="Products" />
            <div className="products-wapper container">
               <div className="row">
                  <div className="col-9">
                     <ProductItem />
                  </div>
                  <div className="col-3">
                     <Sidebar />
                  </div>
               </div>
            </div>
         </div>
      );
   }

}

export default Products;
