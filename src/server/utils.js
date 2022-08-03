import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';


export const render = (store, routes, req) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <div>
          {renderRoutes(routes)}
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