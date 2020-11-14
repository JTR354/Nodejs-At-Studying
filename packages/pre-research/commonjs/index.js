console.log('require start')

const lib = require('./lib')

lib.other = (a,b) => a - b
console.log(lib, '---------> lib')

// console.log(require.cache)

console.log('require end')