const { spawn, execFile } = require('child_process')

let to = {
  co: 'checkout',
  br: 'branch',
  ci: 'commit',
  st: 'status',
  ft: 'fecth',
  pl: 'pull',
  ps: 'push'
}

function execCmd (alias, to) {
  console.log('Executando', `"${alias}" ~> "${to}"`)
  spawn('git', ['config', '--global', 'alias.' + alias, to])
}

for (let alias in to) {
  execCmd(alias, to[alias])
}

console.log()
console.log('Aliases created with success!')
