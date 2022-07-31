import express from 'express';
import { render } from './utils';

const app = express();
const port = 3000;

// 发现客户端有请求静态文件，就去根目录 public 里去找
app.use(express.static('public'))

app.get('*', (req, res) => {
  res.send(render(req))
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})