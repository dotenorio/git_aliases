const { execSync } = require('child_process')

let to = {
  co: 'checkout',
  br: 'branch',
  ci: 'commit',
  st: 'status',
  ft: 'fetch',
  pl: 'pull',
  ps: 'push'
}

function execCmd (alias, to) {
  console.log('Executing', `"${alias}" ~> "${to}"`)
  execSync(['git', 'config', '--global', 'alias.' + alias, to].join(' '))
}

for (let alias in to) {
  execCmd(alias, to[alias])
}

console.log()
console.log('Aliases created with success!')
console.log()

let s = 3
let i = 0
console.log('Exiting in ' + s)
setInterval(() => {
  i++
  if (i === s) {
    console.log()
    console.log('Bye :D')
    process.exit(0)
  } else {
    console.log('           ' + (s - i))
  }
}, 1000)
