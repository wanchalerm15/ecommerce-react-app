import React, { Component } from 'react';

class ProductItem extends Component {

   constructor() {
      super();
      this.state = {
         products: [
            {
               image: 'pc.jpg',
               category: 'Women',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               image: 'pc1.jpg',
               category: 'Women',
               name: 'At vero eos',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               image: 'pc2.jpg',
               category: 'Men',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               image: 'pc3.jpg',
               category: 'Women',
               name: 'On the other',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               image: 'pc4.jpg',
               category: 'Men',
               name: 'On the other',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               image: 'pc5.jpg',
               category: 'Men',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               image: 'pc6.jpg',
               category: 'Women',
               name: 'At vero eos',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            },
            {
               image: 'pc7.jpg',
               category: 'Men',
               name: 'Sed ut perspiciati',
               prices: {
                  saleout: 100,
                  sale: 70
               }
            }
         ]
      }
   }

   mapProductItem() {
      return this.state.products.map(item => {
         return (
            <div className="col-3" key={ item.image }>
               <div className="boxprod">
                  <div className="prod-img">
                     <img src={ '/images/' + item.image } alt={ item.image } />
                     <div className="pic-prod-detail">
                       <a><i className="fa fa-search"></i></a>
                       <a><i className="fa fa-chevron-right"></i></a>
                     </div>
                  </div>

                  <div className="prod-detail">
                     <a href="" className="fa fa-cart-plus pull-right"></a>
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
         );
      });
   }

   render() {
      return (
         <div className="product-item">
            <div className="container">
               <header className="text-center">
                  <h3>Trending Items</h3>
				      <label className="line"></label>
               </header>

               <div className="row product-list">
                  { this.mapProductItem() }
               </div>
            </div>
         </div>
      );
   }

}

export default ProductItem;
