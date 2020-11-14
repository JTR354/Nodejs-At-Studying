exports.Enum = function (...args) {
    if (!args) {
        throw new Error(`enum params error!`)
    }
    let _enum = {}
    let _cache
    function setValue(obj, key, value) {
        if (obj[key]) {
            throw new Error('setValue key error')
        }
        if (obj[value]) {
            throw new Error('setValue value error')
        }
        obj[key] = value
        obj[value] = key
    }
    for (let i=0;i<args.length;i++) {
        const current = args[i]
        if (typeof current !== 'string') {
            throw new Error(`please set string type with element`)
        }
        const string = current.split('=')
        const key = string[0]
        const value = +string[1]
        if (string[1] != null && isNaN(value)) {
            throw new Error(`type error eg: xx=123=123123`)
        }
        if (string[1] != null) {
            _cache = value
        }
        setValue(_enum, key, typeof _cache === 'number' ? _cache++ : i)
    } 
    return _enum
}