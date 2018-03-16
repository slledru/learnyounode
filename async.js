const http = require('http')
const bl = require('bl')

if (process.argv.length > 4) {
  const urls = process.argv.slice(2)
  const collection = urls.reduce((last, url) => {
    last[url] = false
    return last
  }, {})
  for (let url in collection) {
    http.get(url, (response) => {
      response.pipe(bl((error, data) => {
        if (error) {
          console.log(error)
          return
        }
        const text = data.toString()
        collection[url] = text
      }))
      response.on('end', () => {
        if (Object.values(collection).filter((ele) => !ele).length === 0) {
          Object.values(collection).forEach((ele) => console.log(ele))
        }
      })
    })
  }
}
