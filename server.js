const Vue = require('vue')
const express = require('express')
const server = express()
const createRenderer = require('vue-server-renderer').createRenderer
const app = require('./dist/server-bundle')

const renderer = createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8'),
})

server.use(express.static('dist'))


server.get('*', (req, res) => {
  const context = {
    title: 'hello',
    meta: `
      <meta charset="utf8">
    `
  }

  renderer.renderToString(app.default(), context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }

    res.send(html)
  })
})

server.listen(8080, () => {
  console.log(`server started at localhost:8080`)
})
