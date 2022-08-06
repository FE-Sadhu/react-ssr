import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';
import { createServerAxios } from '../server/request';
import { clientAxios } from '../client/request';

const reducer = combineReducers({
  home: homeReducer
})

export const getStore = (req) => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(createServerAxios(req))));
}

export const getClientStore = () => {
  // 数据脱水
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}
