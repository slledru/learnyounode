const net = require('http')
const map = require('through2-map')

if (process.argv.length > 2) {
  const portNumber = parseInt(process.argv[2], 10)
  const server = net.createServer((request, response) => {
    if (request.method !== 'POST') {
      return response.end('send me a POST\n')
    }
    request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(response)
  })
  server.listen(portNumber)
}
