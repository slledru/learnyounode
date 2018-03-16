const net = require('http')
const fs = require('fs')

if (process.argv.length > 3) {
  const portNumber = parseInt(process.argv[2], 10)
  const filename = process.argv[3]
  console.log(portNumber, filename);
  const server = net.createServer((request, response) => {
    const readStream = fs.createReadStream(filename)
    readStream.pipe(response)
  })
  server.listen(portNumber)
}
