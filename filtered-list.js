const fs = require('fs')

if (process.argv.length > 3) {
  const directory = process.argv[2]
  const extension = `.${process.argv[3]}`
  fs.readdir(directory, (error, data) => {
    if (error) {
      console.log(error)
    } else {
      if (Array.isArray(data)) {
        const files = data.filter((filename) => filename.endsWith(extension))
        files.forEach((filename) => console.log(filename))
      }
    }
  })
}
