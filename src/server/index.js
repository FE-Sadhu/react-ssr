import express from 'express';
import { matchRoutes } from 'react-router-config';
import routes from '../Routes';
import { render } from './utils';
import { getStore } from '../store';
import proxy from 'express-http-proxy';

const app = express();
const port = 3000;

// 发现客户端有请求静态文件，就去根目录 public 里去找
app.use(express.static('public'))

// 代理本服务器上 /api 的请求
app.use('/api', proxy('https://api.github.com/', {
  roxyReqPathResolver: function (req) {
    // req.url 是 /api 后面的内容
    return req.url;
  }
}));


app.get('*', (req, res) => {
  const store = getStore(req);

  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })

  Promise.all(promises).then(() => {
    const context = {};
    const html = render(store, routes, req, context);

    // router 检测 Redirect 组件后注入的
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
      return;
    } else if (context.NOT_FOUND) {
      // 在 NOT_FOUND 组件注入的
      res.status(404)
    }
    res.send(html)
  })
  
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})