const express = require('express')
const app = express()
const port = 3000
  
app.get('/', (req, res) => {
  res.send(
    `<html>
      <head>
        <title>react-ssr</title>
      </head>
      <body>
        <h1>sadhu</h1>
        <p>hello world</p>
      </body>
      </html>`
  )
})

app.listen(port, () => {
  console.log(`Example app listening on http:localhost:${port}`)
})