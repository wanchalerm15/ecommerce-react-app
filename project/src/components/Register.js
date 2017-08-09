import React, { Component } from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import { Url } from '../AppRouter';

class Register extends Component {

   render() {
      return (
         <div className="register">
            <Banner link="Register" />

            <div className="form">
               <div className="container">
                  <div className="row">
                     <div className="col">
                        <form action="">
                           <div className="form-group icon-input">
                              <input type="text" className="form-control" placeholder="Name" />
                              <i className="fa fa-user icon"></i>
                           </div>

                           <div className="form-group icon-input">
                              <input type="text" className="form-control" placeholder="Phone number" />
                              <i className="fa fa-phone icon"></i>
                           </div>

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
                                 Forget password
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
                        <Link to={ Url.Login } className="btn btn-pink">Login</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }

}

export default Register;
