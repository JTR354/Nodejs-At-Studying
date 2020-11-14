/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib.js":
/*!****************!*\
  !*** ./lib.js ***!
  \****************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 6:16-23 */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module, exports, __webpack_require__) => {

eval("exports.a = 123\r\n\r\nexports.fn = (a,b) => a + b\r\n\r\nsetTimeout(() => {\r\n    console.log(exports, 'exports')\r\n}, 2000)\r\n\r\nmodule.exports = function mixins(b, x) {\r\n    return b ** x\r\n}\r\n\r\nconsole.log(__webpack_require__(\"./ sync recursive\"), 1e9)\n\n//# sourceURL=webpack:///./lib.js?");

/***/ }),

/***/ "./ sync recursive":
/*!****************!*\
  !*** .// sync ***!
  \****************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.o */
/***/ ((module) => {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = () => [];\nwebpackEmptyContext.resolve = webpackEmptyContext;\nwebpackEmptyContext.id = \"./ sync recursive\";\nmodule.exports = webpackEmptyContext;\n\n//# sourceURL=webpack:///.//_sync?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("console.log('require start')\r\n\r\nconst lib = __webpack_require__(/*! ./lib */ \"./lib.js\")\r\n\r\nlib.other = (a,b) => a - b\r\nconsole.log(lib, '---------> lib')\r\n\r\n// console.log(require.cache)\r\n\r\nconsole.log('require end')\n\n//# sourceURL=webpack:///./index.js?");
})();

/******/ })()
;