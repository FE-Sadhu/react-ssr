import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state = {name: 'sadhu'}, action) => {
  return state;
}

const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
}

export default getStore;