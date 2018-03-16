const fs = require('fs')

module.exports = function(directory, extension, callback) {
  extension = `.${extension}`
  fs.readdir(directory, (error, data) => {
    if (error) {
      callback(error)
    } else if (Array.isArray(data)) {
      const files = data.filter((filename) => filename.endsWith(extension))
      callback(null, files)
    } else {
      callback('Not an array')
    }
  })
}
