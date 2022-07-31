import express from 'express';
import Home from './containers/Home';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();
const port = 3000;
const content = renderToString(<Home />);

// 发现客户端有请求静态文件，就去根目录 public 里去找
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        ${content}
      </body>
      <script src='./index.js'></script>
    </html>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})