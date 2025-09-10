const fs = require('fs')

// ^ Read files from the directory synchronously
const files = fs.readdirSync('./')
console.log(files)

// ^ Read files from the directory Asynchronously

fs.readdir('./', (err, files) => {
  if (err) console.log(err)
  else console.log(files)
})
console.log('ASynchCall')
