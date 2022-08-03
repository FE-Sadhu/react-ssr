import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../Routes';
import { getClientStore } from '../store';

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

const container = document.getElementById('root');
hydrateRoot(container, <App />)