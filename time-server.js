const net = require('net')

if (process.argv.length > 2) {
  const portNumber = parseInt(process.argv[2], 10)
  const server = net.createServer((socket) => {
    socket.end(formatDate() + '\n')
  })
  server.listen(portNumber)
}

function prefixZero(num, digits) {
  return ('0'.repeat(digits) + num).slice(-digits)
}

function formatDate() {
  const date = new Date()
  let data = prefixZero(date.getFullYear(), 4)
  data += '-' + prefixZero(date.getMonth() + 1, 2)
  data += '-' + prefixZero(date.getDate(), 2)
  data += ' ' + prefixZero(date.getHours(), 2)
  data += ':' + prefixZero(date.getMinutes(), 2)
  return data
}
