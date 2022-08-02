import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';

const reducer = combineReducers({
  home: homeReducer
})

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
}

export const getClientStore = () => {
  // 数据脱水
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk));
}
