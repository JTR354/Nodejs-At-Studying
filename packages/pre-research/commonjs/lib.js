exports.a = 123

exports.fn = (a,b) => a + b

setTimeout(() => {
    console.log(exports, 'exports')
}, 2000)

module.exports = function mixins(b, x) {
    return b ** x
}

console.log(require, 1e9)