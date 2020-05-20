/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _sushi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sushi */ \"./src/sushi.js\");\n/* harmony import */ var _chili__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chili */ \"./src/chili.js\");\n\n\n// 10x10 (1000px by 1000px) board display = [\n//   [_,_,_,_,_,_,_,_,_,_],\n//   [_,S,S,S,S,S,S,S,S,_],\n//   [_,S,_,_,_,_,_,_,S,_],\n//   [_,S,_,_,_,_,_,_,S,_],\n//   [_,S,_,_,_,_,_,_,S,_],\n//   [_,S,_,_,_,_,_,_,S,_],\n//   [_,S,_,_,_,_,_,_,S,_],\n//   [_,S,_,_,_,_,_,_,S,_],\n//   [_,S,S,S,S,S,S,S,S,_],\n//   [_,_,_,_,_,_,_,_,_,_]\n// ]\n// 28 slots on conveyor belt = 18 sushis + 10 chilis\n\nclass Board {\n  constructor(dimensions) {\n    // 1000px x 1000px\n    this.dimensions = dimensions;\n    this.cols = 10;\n    this.rows = 10;\n    // tile is for grid on board\n    this.tileSize = 100;\n    this.sushis = [];\n    this.chilis = [];\n    this.addSushi();\n    this.addChilis();\n  }\n\n  drawSushis(context) {\n    const { sushis } = this;\n    sushis.forEach((sushi) => (\n      sushi.createSushi(context)\n    ));\n  }\n\n  drawChilis(context) {\n    const { chilis } = this;\n    chilis.forEach((chili) => (\n      chili.createChili(context)\n    ));\n  }\n\n  addSushi() {\n    this.sushis.push(new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([100, 500]));\n  }\n\n  addChilis() {\n    this.chilis.push(new _chili__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([100, 300]));\n  }\n\n  // context is the 2D canvas\n  animate(context) {\n    context.clearRect(0, 0, 1000, 1000);\n    this.drawBoard(context);\n    this.drawSushis(context);\n    this.drawChilis(context);\n  }\n\n  step() {\n    // we are moving the position of the sushi upwards (Test)\n    this.sushis.forEach((sushi) => {\n      sushi.pos[1] -= 100;\n    });\n    this.chilis.forEach((chili) => {\n      chili.pos[1] -= 100;\n    });\n  }\n\n  drawBoard(context) {\n    const { tileSize } = this;\n\n    function createPlatter(x, y) {\n      const img = new Image();\n      img.src = '../assets/platter.webp';\n      img.onload = () => {\n        context.drawImage(img, x, y, 100, 100);\n      };\n    }\n\n    // creates tile for construction of grid\n    function createTile(x, y) {\n      context.beginPath();\n      context.rect(x, y, tileSize, tileSize);\n      context.stroke();\n      // context.fillRect(x, y, tileSize, tileSize);\n    }\n\n    for (let col = 0, x = 0; col < this.cols; col += 1, x += this.tileSize) {\n      for (let row = 0, y = 0; row < this.rows; row += 1, y += this.tileSize) {\n        createTile(x, y);\n      }\n    }\n\n    // draws sushi on the top left and right corner of the grid\n    createPlatter(900, 0);\n    createPlatter(0, 0);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/chili.js":
/*!**********************!*\
  !*** ./src/chili.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Chili; });\nclass Chili {\n  constructor(pos) {\n    this.pos = pos;\n  }\n\n  createChili(context) {\n    const img = new Image();\n    img.src = '../assets/chili.png';\n    img.onload = () => {\n      context.drawImage(img, this.pos[0], this.pos[1], 100, 100);\n    };\n  }\n  // creates chili pieces\n}\n\n\n//# sourceURL=webpack:///./src/chili.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SushiGoRound; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\nclass SushiGoRound {\n  constructor(canvas) {\n    this.context = canvas.getContext('2d');\n    // set in index.css 1000x1000px\n    this.dimensions = { width: canvas.width, height: canvas.height }; \n    this.restart();\n  }\n\n  restart() {\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    // setInterval(() => {\n    this.animate();\n    setTimeout(() => {\n      this.board.step();\n      this.animate();\n    }, 1000);\n    // }, 25);\n  }\n\n  animate() {\n    this.board.animate(this.context);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('game-canvas');\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  console.log('Webpack is working!');\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sushi.js":
/*!**********************!*\
  !*** ./src/sushi.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sushi; });\nclass Sushi {\n  constructor(pos) {\n    this.pos = pos;\n  }\n\n  createSushi(context) {\n    const img = new Image();\n    img.src = '../assets/sushi1.jpg';\n    img.onload = () => {\n      context.drawImage(img, this.pos[0], this.pos[1], 100, 100);\n    };\n  }\n\n  // creates sushi pieces\n}\n\n\n//# sourceURL=webpack:///./src/sushi.js?");

/***/ })

/******/ });