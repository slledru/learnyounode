const fs = require('fs')

if (process.argv.length > 2) {
  const filename = process.argv[2]
  const buffer = fs.readFileSync(filename)
  const fileContent = buffer.toString().match(/\n/g)
  console.log(fileContent.length);
} else {
  console.log('0');
}
