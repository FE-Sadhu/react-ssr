import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';

export const render = (store, routes, req, context) => {
  const sheet = new ServerStyleSheet();

  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <div>
            {renderRoutes(routes)}
          </div>
        </StaticRouter>
      </Provider>
      )
  );

  return `
    <html>
      <head>
        <title>ssr</title>
        ${sheet.getStyleTags()}
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script>
          // 数据注水
          window.context = { 
            state: ${JSON.stringify(store.getState())} 
          }
      </script>
      <script src='./index.js'></script>
    </html>
  `;
}