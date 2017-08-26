import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import store from './redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
   <Provider store={ store }>
      <App />
   </Provider>,
   document.getElementById('root')
);

registerServiceWorker();
