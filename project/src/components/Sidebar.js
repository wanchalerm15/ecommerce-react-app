import React from 'react';

class Sidebar extends React.Component {

   render() {
      return (
         <div className="sidebar">
            <div className="categories">
               <h4>Categories</h4>
               <ul>
                  <li><a href="">Men</a></li>
                  <li><a href="">Women</a></li>
                  <li><a href="">Kids</a></li>
                  <li><a href="">Accessories</a></li>
                  <li><a href="">Shoes</a></li>
               </ul>
            </div>
         </div>
      );
   }

}

export default Sidebar;
