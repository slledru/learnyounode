const fs = require('fs')

if (process.argv.length > 2) {
  const filename = process.argv[2]
  fs.readFile(filename, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      const fileContent = data.toString().match(/\n/g)
      console.log(fileContent.length);
    }
  })
} else {
  console.log('0');
}
