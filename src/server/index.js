import express from 'express';
import { matchRoutes } from 'react-router-config';
import routes from '../../Routes';
import { render } from './utils';
import getStore from '../store';

const app = express();
const port = 3000;

// 发现客户端有请求静态文件，就去根目录 public 里去找
app.use(express.static('public'))

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