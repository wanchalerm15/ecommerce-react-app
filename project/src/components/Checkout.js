import React, { Component } from 'react';
import Banner from './Banner';

class Checkout extends Component {

   constructor() {
      super();
      this.state = {
         items: [
            {
               id: 1,
               image: 'ch.jpg',
               name: 'Sed ut perspiciatis unde',
               detail: '(At vero eos et accusamus et iusto odio dignissimos ducimus)',
               price: 100,
               delivery: 'Free shipping'
            },
            {
               id: 2,
               image: 'ch1.jpg',
               name: 'Sed ut perspiciatis unde',
               detail: '(At vero eos et accusamus et iusto odio dignissimos ducimus)',
               price: 100,
               delivery: 'Free shipping'
            },
            {
               id: 3,
               image: 'ch2.jpg',
               name: 'Sed ut perspiciatis unde',
               detail: '(At vero eos et accusamus et iusto odio dignissimos ducimus)',
               price: 100,
               delivery: 'Free shipping'
            }
         ]
      };
   }

   getItemsElement () {
      return this.state.items.map(item => {
         return (
            <tr key={ item.id }>
               <td>
                  <div className="checkout-detail">
                     <a href="">
                        <img src={ '/images/' + item.image } alt={ item.image }/>
                     </a>
                     <h5>
                        <a href="">{ item.name }</a>
                     </h5>
                     <p>{ item.detail }</p>
                  </div>
               </td>
               <td>${ item.price.toFixed(2) }</td>
               <td>{ item.delivery }</td>
               <td>${ item.price.toFixed(2) }</td>
               <td>
                  <a href="" className="btn btn-pink">
                     Add to cart
                  </a>
               </td>
            </tr>
         );
      });
   }

   render() {
      return (
         <div className="checkout">
            <Banner link="Checkout" />

            <div className="container">
               <div className="checkout-table">
                  <table className="table">
                     <thead>
                        <tr>
                           <th style={ { width: '50%' } }>Item</th>
                           <th>Prices</th>
                           <th>Delivery</th>
                           <th>Subtotal</th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody>
                        { this.getItemsElement() }
                     </tbody>
                  </table>
               </div>
               <div className="text-center">
                  <a href="" className="btn btn-pink">Produced To Buy</a>
               </div>
               <br/>
            </div>
         </div>
      );
   }

}

export default Checkout;
