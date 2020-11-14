void function() {
    var __webpack_modules__ = {
        './lib.js': (module, exports) => {
            // todo something
        }   
    }

    var __webpack_module_cache__ = {};

    function __webpack_require__(moduleId) {


        if(__webpack_module_cache__[moduleId]) {
            return __webpack_module_cache__[moduleId].exports
        }

        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        }

        __webpack_modules__[moduleId](module, module.exports, __webpack_require__)

        return module.exports
    }

    void function() {
        // require('./lib.js')
        __webpack_require__('./lib.js')
    }()
}()