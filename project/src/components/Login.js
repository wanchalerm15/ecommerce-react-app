import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Url } from '../AppRouter';
import Banner from './Banner';

class Login extends Component {

   render() {
      return (
         <div className="login">
            <Banner link="Login" />

            <div className="form">
               <div className="container">
                  <div className="row">
                     <div className="col">
                        <form action="">
                           <div className="form-group icon-input">
                              <input type="text" className="form-control" placeholder="Email" />
                              <i className="fa fa-envelope icon"></i>
                           </div>

                           <div className="form-group icon-input">
                              <input type="text" className="form-control" placeholder="Password" />
                              <div className="fa fa-lock icon"></div>
                           </div>

                           <div className="form-check">
                              <label className="form-check-label">
                                 <input className="form-check-input" type="checkbox" />
                                 Remember me
                              </label>
                           </div>

                           <button type="submit" className="btn btn-pink">Submit</button>
                        </form>
                     </div>

                     <div className="col">
                        <h3>Completely Free Account</h3>
                        <p>
                           Pellentesque neque leo,
                           dictum sit amet accumsan non,
                           dignissim ac mauris. Mauris rhoncus,
                           lectus tincidunt tempus aliquam,
                           odio libero tincidunt metus,
                           sed euismod elit enim ut mi.
                           Nulla porttitor et dolor sed condimentum.
                           Praesent porttitor lorem dui,
                           in pulvinar enim rhoncus vitae.
                           Curabitur tincidunt,
                           turpis ac lobortis hendrerit,
                           ex elit vestibulum est,
                           at faucibus erat ligula non neque.
                        </p>
                        <Link to={ Url.Register } className="btn btn-pink">Register</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }

}

export default Login;
