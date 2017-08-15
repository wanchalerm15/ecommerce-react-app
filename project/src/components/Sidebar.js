import React, { Component } from 'react';

class Sidebar extends Component {

   constructor() {
      super();
      this.state = {
         categories: [
            { id: 1, name: 'Men' },
            { id: 2, name: 'Women' },
            { id: 3, name: 'Kids' },
            { id: 4, name: 'Accessories' },
            { id: 5, name: 'Shoes' }
         ],
         discounts: [
            { id: 1, name: 'Upto - 10%', count: 20 },
            { id: 2, name: '40% - 50%', count: 5 },
            { id: 3, name: '30% - 20%', count: 7 },
            { id: 4, name: '10% - 5%', count: 2 },
            { id: 5, name: 'Other', count: 50 }
         ],
         types: [
            { id: 1, name: 'Sofa Cum Beds', count: 30 },
            { id: 2, name: 'Bags', count: 30 },
            { id: 3, name: 'Caps & Hats', count: 30 },
            { id: 4, name: 'Jackets & Coats', count: 30 },
            { id: 5, name: 'Jeans', count: 30 },
            { id: 6, name: 'Shirts', count: 30 },
            { id: 7, name: 'Sunglasses', count: 30 },
            { id: 8, name: 'Swimwear', count: 30 },
         ],
         brands: [
            { id: 1, name: 'Roadstar' },
            { id: 2, name: 'Levis' },
            { id: 3, name: 'Persol' },
            { id: 4, name: 'Nike' },
            { id: 5, name: 'Edwin' },
            { id: 6, name: 'New Balance' },
            { id: 7, name: 'Paul Smith' },
            { id: 8, name: 'Ray-Ban' }
         ]
      };
   }

   getCategories() {
      return this.state.categories.map(item => (
         <li key={ item.id }>
            <a href="">{ item.name }</a>
         </li>
      ));
   }

   getDiscounts() {
      return this.state.discounts.map(item => (
         <li key={ item.id }>
            <a href="">{ item.name } ({ item.count })</a>
         </li>
      ));
   }

   getTypes() {
      return this.state.types.map(item => (
         <li key={ item.id }>
            <a href="">{ item.name } ({ item.count })</a>
         </li>
      ));
   }

   getBrands() {
      return this.state.brands.map(item => (
         <li key={ item.id }>
            <a href="">{ item.name }</a>
         </li>
      ));
   }

   render() {
      return (
         <div className="sidebar">
            <div className="boxs categories">
               <h4>Categories</h4>
               <ul>{ this.getCategories() }</ul>
            </div>

            <div className="boxs discounts">
               <h4>Discounts</h4>
               <ul>{ this.getDiscounts() }</ul>
            </div>

            <div className="boxs types">
               <h4>Type</h4>
               <ul>{ this.getTypes() }</ul>
            </div>

            <div className="boxs brands">
               <h4>Brand</h4>
               <ul>{ this.getBrands() }</ul>
            </div>
         </div>
      );
   }

}

export default Sidebar;
