import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import routes from '../Routes';
import { getClientStore } from '../store';

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <div>
          {renderRoutes(routes)}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

const container = document.getElementById('root');
hydrateRoot(container, <App />)