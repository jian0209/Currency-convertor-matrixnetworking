const express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 5000

const app = express()

// attackers can use this header to detect apps running Express
// and then launch specifically-targeted attacks
app.disable('x-powered-by')

app.use(history())
app.use(serveStatic(__dirname + '/dist/spa'))
app.listen(port)
