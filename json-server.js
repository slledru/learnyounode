const http = require('http')
const url = require('url')

if (process.argv.length > 2) {
  const portNumber = parseInt(process.argv[2], 10)
  const server = http.createServer((request, response) => {
    if (request.method !== 'GET') {
      return response.end('send me a GET\n')
    }
    const parsed = url.parse(request.url, true)
    const date = parseTime(parsed.query)
    const result = {}
    switch (parsed.pathname) {
      case '/api/parsetime':
        result.hour = date.getHours()
        result.minute = date.getMinutes()
        result.second = date.getSeconds()
        break
      case '/api/unixtime':
        result.unixtime = date.getTime()
        break
      default:
    }
    response.end(JSON.stringify(result))
  })
  server.listen(portNumber)
}

function parseTime(iso) {
  return new Date(iso.iso);
}
