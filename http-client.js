const http = require('http')

if (process.argv.length > 2) {
  const url = process.argv[2]
  http.get(url, (response) => {
    response.on('data', (data) => {
      console.log(data.toString());
    })
    response.on('error', (error) => {
      console.log('error', error);
    })
    response.on('end', () => {
    })
  })
}
