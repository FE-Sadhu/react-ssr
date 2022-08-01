import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from "react-router-dom";
import routes from '../../Routes';
import { Provider } from 'react-redux';
import getStore from '../store';
import { matchRoutes } from 'react-router-config';

export const render = (req) => {

  const store = getStore();

  const matchedRoutes = matchRoutes(routes, req.path);

  console.log(matchedRoutes);

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </div>
      </StaticRouter>
    </Provider>
  )
  return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src='./index.js'></script>
    </html>
  `;
}