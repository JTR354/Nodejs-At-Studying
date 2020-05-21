exports.Enum = function (arr) {
  if (!(arr instanceof Array)) {
    throw new Error('is not a array')
  }
  let tmp = {}
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    let t = arr[i].split('=')
    let key = t[1] || index
    index = key
    if (tmp[key]) {
      throw new Error('cant save the same key')
    }
    tmp[key] = t[0]
    index++
  }
  for (let key in tmp) {
    let _val = tmp[key]
    if (tmp[_val]) {
      throw new Error('cant save the same key')
    }
    tmp[_val] = +key
  }
  return tmp
}