import { createStore, combineReducers } from 'redux';
import productReducer from './productReducer';

const store = createStore(combineReducers({
   product: productReducer
}));

store.subscribe(() => console.log('Update store', store.getState()));

export default store;
