import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Sliderbar from './components/Sliderbar';

class App extends Component {
  render() {
    return (
      <div id="ecommerce-react-app">
      	<Navbar />
      	<Sliderbar />
      </div>
    );
  }
}

export default App;
