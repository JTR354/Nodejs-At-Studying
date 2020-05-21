// const action = process.argv[process.argv.length - 1]
const {games} = require('./game')
// games(action)
let count = 0
process.stdin.on('data', e=> {
  const action = e.toString().trim()
  const result = games(action)
  if (result > 0) {
    count++
  } else {
    // count = 0
  }
  if (count >= 3) {
    console.log('你太厉害了,不跟你完了!')
    process.exit()
  }
})