import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

   render() {
      return (
         <div className="login">
            <div className="container">
               <h4>Login page</h4>
               <ul>
                  <li><Link to="/">Home</Link></li>
               </ul>
            </div>
         </div>
      );
   }

}

export default Login;
