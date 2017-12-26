const http = require('http')
const port = 3000

const server = http.createServer((request, response) => {
  response.end('Hello World!')
})

server.listen(port, (error) => {
  if (error) {
    return console.log(error)
  }
  console.log(`Server is listening on port ${port}`)
})

process.once('SIGINT', () => {
  console.log('\nShutting down server...')
  server.close()
})
