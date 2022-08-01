import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import routes from '../../Routes';
import getStore from '../store';

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        <Routes>
          {routes.map(route => (
            <Route key={route.key} {...route} />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

const container = document.getElementById('root');
hydrateRoot(container, <App />)