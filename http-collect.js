const http = require('http')
const bl = require('bl')

if (process.argv.length > 2) {
  const url = process.argv[2]
  http.get(url, (response) => {
    response.pipe(bl((error, data) => {
      if (error) {
        console.log(error)
        return
      }
      const text = data.toString()
      console.log(text.length)
      console.log(text)
    }))
  })
}
