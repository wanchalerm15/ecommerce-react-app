import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Url } from '../AppRouter';
import httpRequest from '../redux/httpRequest';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Banner from './Banner';

class Login extends Component {

   constructor(props) {
      super(props);
      this.state = {
         Username: 'wanchaloem.laokeut@googlemail.com',
         Password: '202EFEB4',
         redirect: null
      };
   }

   onSubmit(e) {
      httpRequest
         .requestPost('/Authorization', this.state)
         .then(response => {
            this.props.authorization(response);
            this.setState({ redirect: Url.Home });
         })
         .catch(error => alert(error.Message));
      e.preventDefault();
   }

   render() {
      const { redirect } = this.state;

      if(redirect)
         return (<Redirect to={ redirect } />);

      return (
         <div className="login">
            <Banner link="Login" />

            <div className="form">
               <div className="container">
                  <div className="row">
                     <div className="col">
                        <form onSubmit={ this.onSubmit.bind(this) }>
                           <div className="form-group icon-input">
                              <input type="text"
                                 value={ this.state.Username }
                                 onChange={ e => this.setState({ Username:e.target.value }) }
                                 className="form-control"
                                 placeholder="Email" />
                              <i className="fa fa-envelope icon"></i>
                           </div>

                           <div className="form-group icon-input">
                              <input type="password"
                                 value={ this.state.Password }
                                 onChange={ e => this.setState({ Password:e.target.value }) }
                                 className="form-control"
                                 placeholder="Password" />
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

export default connect(
   state => {
      return {
         user: state.user
      };
   },
   dispatch => {
      return {
         authorization (payload) {
            dispatch({ type: 'authorization', payload });
         }
      };
   }
)(Login);
