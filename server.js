const Vue = require('vue')
const express = require('express')
const server = express()
const createRenderer = require('vue-server-renderer').createRenderer
const createApp = require('./dist/server-bundle').default

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

  const app = createApp({
    url: req.url
  })

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      if (err.code === 404) {
         res.status(404).end('Page not found')
       } else {
         res.status(500).end('Internal Server Error')
       }
       return
    }

    res.send(html)
  })
})

server.listen(8080, () => {
  console.log(`server started at localhost:8080`)
})
