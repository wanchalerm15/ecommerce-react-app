import React, { Component } from 'react';
import { Url } from '../AppRouter';
import { Link } from 'react-router-dom';

class Banner extends Component {

   render() {
      return (
         <div className="banner">
            <div className="container">
               <h1>{ this.props.link }</h1>
               <em></em>
               <h2>
                  <Link to={ Url.Home }>Home</Link>
                  <label>/</label>
                  { this.props.link }
               </h2>
            </div>
         </div>
      );
   }

}

export default Banner;
