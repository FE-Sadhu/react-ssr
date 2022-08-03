import express from 'express';
import { matchRoutes } from 'react-router-config';
import routes from '../../Routes';
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
  const store = getStore();

  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })

  Promise.all(promises).then(() => {
    res.send(render(store, routes, req))
  })
  
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})