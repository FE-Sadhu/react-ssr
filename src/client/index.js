import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import Routes from '../../Routes';
import thunk from 'redux-thunk';

const container = document.getElementById('root');

const reducer = (state = {name: 'sadhu'}, action) => {
  return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {Routes}
      </BrowserRouter>
    </Provider>
  )
}

hydrateRoot(container, <App />)