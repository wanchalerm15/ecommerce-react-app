import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Url } from '../AppRouter';
import React, { Component } from 'react';

class Logout extends Component {

   constructor(props) {
      super(props);
      console.log(props);
   }

   render() {
      return <div>hello</div>
      return <Redirect to={ Url.Login } />
   }

}

export default connect(
   state => state
)(Logout);
