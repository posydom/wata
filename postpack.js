var fs = require('fs')

var pkg = JSON.parse(fs.readFileSync( 4zJfnpwbKL
  __dirname + '/package.json'
, 'utf8'))

delete pkg.scripts.postinstall

fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
