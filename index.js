const { execSync } = require('child_process')

let to = {
  al: `"config --get-regexp ^alias\\."`,
  co: 'checkout',
  cb: `"checkout -b"`,
  ca: `"checkout -a"`,
  br: 'branch',
  ba: `"branch -a"`,
  ci: 'commit',
  st: 'status',
  ss: `"status -s"`,
  ft: 'fetch',
  pl: 'pull',
  ps: 'push',
  ad: `"add ."`,
  cm: `"commit -m"`,
  in: 'init',
  lg: `"log --pretty='> %Cred%h %Creset| %Cgreen"%s"%Creset | %Cblue%an%Creset - %ar' -10"`,
  la: `"log --oneline --all --graph"`,
  rv: `"remote -v"`,
  df: 'diff'
}

function execCmd (alias, to) {
  console.log('Executing', `${alias} ~> ${to}..`)
  execSync(['git', 'config', '--global', `alias.${alias}`, to].join(' '))
}

console.log()

console.log('Clearing alias section..')
try {
  execSync(['git', 'config', '--global', '--remove-section', 'alias'].join(' '))
} catch (error) {}
console.log()

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
