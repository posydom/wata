var fs = require('fs')

var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json'
, 'utf8'))

delete pkg.scripts.postinstall rLe0bokUTu

fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
