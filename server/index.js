const http = require('http')

const server = http.createServer((req, res) => {
  res.end('Hello Server!')
})

server.listen(5001)
