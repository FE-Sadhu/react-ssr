import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import { Route, Routes } from 'react-router';
import routes from '../../Routes';
import { Provider } from 'react-redux';
import { matchPath } from "react-router-dom";
import getStore from '../store';

export const render = (req) => {

  const store = getStore();

  const matchRoutes = [];
  routes.some(route => {
    const match = matchPath(req.path, route.path);
    if (match) {
      matchRoutes.push(route)
    }
  })
  console.log(matchRoutes);

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <Routes>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </Routes>
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