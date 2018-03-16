const filterFile = require('./filter-module')

if (process.argv.length > 3) {
  const directory = process.argv[2]
  const extension = process.argv[3]
  const files = filterFile(directory, extension, filterCallback)
}

function filterCallback(error, data) {
  if (error) {
    console.log(error)
  } else {
    data.forEach((file) => console.log(file))
  }
}
