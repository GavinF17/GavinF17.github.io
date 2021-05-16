const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

const postsPath = path.join(__dirname, '..', 'posts')

fs.readdir(postsPath, function (err, files) {
  if (err) {
    return console.error('Unable to scan directory: ' + err)
  }

  files.forEach(function (file) {
    fs.readFile(path.join(postsPath, file), 'utf8', (err, data) => {
      // console.log(yaml.load(data))
      const match = data.match(/^---[\r\n]?([^]+)[\r\n]---/)
      console.log(match[1])
      console.log(yaml.load(match[1]))
    })
    console.log(file)
  })
})

/**
 * Match between --- ---
 * filter on published
 * hash content
 * set created/updated
 * create components
 */
