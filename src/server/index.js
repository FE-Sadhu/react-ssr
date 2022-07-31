import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import Routes from '../../Routes';

const app = express();
const port = 3000;

// 发现客户端有请求静态文件，就去根目录 public 里去找
app.use(express.static('public'))

app.get('/', (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.path}>
      {Routes}
    </StaticRouter>
  );

  res.send(`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src='./index.js'></script>
    </html>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})