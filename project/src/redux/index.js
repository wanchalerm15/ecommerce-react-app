import { createStore, combineReducers } from 'redux';
import productReducer from './productReducer';
import userReducer from './userReducer';

const store = createStore(combineReducers({
   product: productReducer,
   user: userReducer
}));

export default store;
