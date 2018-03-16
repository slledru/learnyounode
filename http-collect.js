const http = require('http')

if (process.argv.length > 2) {
  const url = process.argv[2]
  const array = []
  let total = 0
  http.get(url, (response) => {
    response.on('data', (data) => {
      const str = data.toString()
      total += str.length
      array.push(str)
    })
    response.on('error', (error) => {
      console.log('error', error);
    })
    response.on('end', () => {
      console.log(total)
      console.log(array.join(''))
    })
  })
}
