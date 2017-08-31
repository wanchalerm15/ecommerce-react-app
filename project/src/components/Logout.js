import { Redirect } from 'react-router-dom';
import { Url } from '../AppRouter';
import React, { Component } from 'react';

class Logout extends Component {

   constructor(props) {
      super(props);
      console.log(props);
   }

   render() {
      return <Redirect to={ Url.Login } />
   }

}

export default Logout;
