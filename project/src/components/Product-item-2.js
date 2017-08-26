import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Url } from '../AppRouter';
import { connect } from 'react-redux';

class ProductItem2 extends Component {

   getProducts() {
      return this.props.products.map(item => (
         <div className="col-4" key={ item.id }>
            <div className="boxprod">
               <div className="prod-img">
                  <img src={ '/images/' + item.image } alt={ item.image } />
                  <div className="pic-prod-detail">
                    <a><i className="fa fa-search"></i></a>
                    <Link to={ Url.Single }><i className="fa fa-chevron-right"></i></Link>
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

export default connect(
   state => {
      return {
         products : state.product.item2
      }
   },
   dispatch => {
      dispatch({ type: 'product2' });
      return {};
   }
)(ProductItem2);
