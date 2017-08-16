import React, { Component } from 'react';

class ProductItem2 extends Component {

   constructor() {
      super();
      this.state = {
         products: [
            {
               id: 1,
               image: 'pc.jpg',
               category: 'Women',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 2,
               image: 'pc1.jpg',
               category: 'Women',
               name: 'At vero eos',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 3,
               image: 'pc2.jpg',
               category: 'Men',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 4,
               image: 'pc3.jpg',
               category: 'Women',
               name: 'On the other',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 5,
               image: 'pc4.jpg',
               category: 'Men',
               name: 'On the other',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 6,
               image: 'pc5.jpg',
               category: 'Men',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 7,
               image: 'pc6.jpg',
               category: 'Women',
               name: 'At vero eos',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 8,
               image: 'pc7.jpg',
               category: 'Men',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               id: 9,
               image: 'pc.jpg',
               category: 'Women',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
         ]
      };
   }

   getProducts() {
      return this.state.products.map(item => (
         <div className="col-4" key={ item.id }>
            <div className="boxprod">
               <div className="prod-img">
                  <img src={ '/images/' + item.image } alt={ item.image } />
                  <div className="pic-prod-detail">
                    <a><i className="fa fa-search"></i></a>
                    <a><i className="fa fa-chevron-right"></i></a>
                  </div>
               </div>

               <div className="prod-detail">
                  <a href="" className="pull-right">
                     <i className="fa fa-cart-plus"></i>
                  </a>
                  <span>{ item.category }</span>
                  <h6>
                     <a href="single.html">{ item.name }</a>
                  </h6>
                  <div className="prod-price">
                     <p>
                        <label>${ item.prices.saleout.toFixed(2) }</label>
                        <em>${ item.prices.sale.toFixed(2) }</em>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      ));
   }

   render() {
      return (
         <div className="product-item">
            <div className="container">
               <div className="row product-list remove-padding">
                  { this.getProducts() }
               </div>
            </div>
         </div>
      );
   }

}

export default ProductItem2;
