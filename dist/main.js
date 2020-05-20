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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _sushi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sushi */ \"./src/sushi.js\");\n/* harmony import */ var _chili__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chili */ \"./src/chili.js\");\n/* harmony import */ var _sushi_monster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sushi_monster */ \"./src/sushi_monster.js\");\n\n\n\n// 10x10 (1000px by 1000px) board display = [\n//   [_,_,_,_,_,_,_,_,_,_],\n//   [_,S,C,S,S,C,S,S,C,_], Y100\n//   [_,C,_,_,_,_,_,_,S,_],\n//   [_,S,_,_,_,_,_,_,C,_],\n//   [_,S,_,_,_,_,_,_,S,_],\n//   [_,C,_,_,_,_,_,_,S,_],\n//   [_,S,_,_,_,_,_,_,C,_],\n//   [_,S,_,_,_,_,_,_,S,_],\n//   [_,C,S,S,C,S,S,C,S,_], Y800\n//   [_,_,_,_,_,_,_,_,_,_]\n// ] X100 ---------> X800\n\nconst PLATTERIMAGE = new Image();\nPLATTERIMAGE.src = '../assets/platter.png';\n\nclass Board {\n  constructor(dimensions) {\n    // 1000px x 1000px\n    this.dimensions = dimensions;\n    this.cols = 10;\n    this.rows = 10;\n    // tile is for grid on board\n    this.tileSize = 100;\n    this.numSushis = 18;\n    this.numChilis = 10;\n    this.sushis = [];\n    this.chilis = [];\n    this.sushiMonster = [];\n    this.addSushi();\n    this.addChilis();\n    this.addSushiMonster();\n  }\n\n  drawSushis(context) {\n    const { sushis } = this;\n    sushis.forEach((sushi) => (\n      sushi.createSushi(context)\n    ));\n  }\n\n  drawChilis(context) {\n    const { chilis } = this;\n    chilis.forEach((chili) => (\n      chili.createChili(context)\n    ));\n  }\n\n  drawSushiMonster(context) {\n    const { sushiMonster } = this;\n    sushiMonster[0].createSushiMonster(context);\n  }\n\n  addSushiMonster() {\n    this.sushiMonster.push(new _sushi_monster__WEBPACK_IMPORTED_MODULE_2__[\"default\"]([500, 500]));\n  }\n\n  // initial seed x,y positions for sushi\n  addSushi() {\n    this.sushis.push(...[\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([100, 100]),\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([300, 100]),\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([400, 100]),\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([600, 100]),\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([700, 100]),\n\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([800, 200]),\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([800, 400]),\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([800, 500]),\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([800, 700]),\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([800, 800]),\n\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([600, 800]),\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([500, 800]),\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([300, 800]),\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([200, 800]),\n\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([100, 300]),\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([100, 400]),\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([100, 600]),\n      new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([100, 700]),\n    ]);\n  }\n\n  // initial seed x,y positions for chili\n  addChilis() {\n    this.chilis.push(...[\n      new _chili__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([200, 100]),\n      new _chili__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([500, 100]),\n      new _chili__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([800, 100]),\n      new _chili__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([800, 300]),\n      new _chili__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([800, 600]),\n      new _chili__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([700, 800]),\n      new _chili__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([400, 800]),\n      new _chili__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([100, 800]),\n      new _chili__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([100, 200]),\n      new _chili__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([100, 500]),\n    ]);\n  }\n\n  // context is the 2D canvas\n  animate(context) {\n    context.clearRect(0, 0, 1000, 1000);\n    this.drawBoard(context);\n    this.drawSushis(context);\n    this.drawChilis(context);\n    this.drawSushiMonster(context);\n  }\n\n\n  step() {\n    // pos[0-left/right, 1-up/down]\n    // pos[0] stays between 100LEFT - 800RIGHT X-axis\n    // pos[1] stays between 100TOP - 800BOTTOM Y-axis\n    // we are moving the position of the sushi upwards (Test)\n    // render if statement, if pos[0] reaches\n    this.sushis.forEach((sushi) => {\n      // subtracting to go upwards until pos[1] reaches 100, then we move to the right\n      if ((sushi.pos[0] === 100) && (sushi.pos[1] !== 100)) {\n      // pos[100,200]\n      // goes to pos[100,100]\n        sushi.pos[1] -= 100;\n      } else if ((sushi.pos[1] === 100) && (sushi.pos[0] !== 800)) {\n        sushi.pos[0] += 100;\n      } else if ((sushi.pos[0] === 800) && (sushi.pos[1] !== 800)) {\n        sushi.pos[1] += 100;\n      } else if (sushi.pos[1] === 800) {\n        sushi.pos[0] -= 100;\n      }\n    });\n\n    this.chilis.forEach((chili) => {\n      if ((chili.pos[0] === 100) && (chili.pos[1] !== 100)) {\n        chili.pos[1] -= 100;\n      } else if ((chili.pos[1] === 100) && (chili.pos[0] !== 800)) {\n        chili.pos[0] += 100;\n      } else if ((chili.pos[0] === 800) && (chili.pos[1] !== 800)) {\n        chili.pos[1] += 100;\n      } else if (chili.pos[1] === 800) {\n        chili.pos[0] -= 100;\n      }\n    });\n\n    // event listener for key strokes\n    document.addEventListener('keydown', (event) => {\n      if (event.keyCode === 37) {\n        // alert('Left arrow of keyboard was smashed');\n        this.sushiMonster[0].pos[0] -= 10;\n      } else if (event.keyCode === 38) {\n        event.preventDefault();\n        this.sushiMonster[0].pos[1] -= 10;\n        // move the SushiMonster to up\n      } else if (event.keyCode === 39) {\n        this.sushiMonster[0].pos[0] += 10;\n        // move the SushiMonster to right\n      } else if (event.keyCode === 40) {\n        this.sushiMonster[0].pos[1] += 10;\n        event.preventDefault();\n      // move the SushiMonster to down\n      }\n    });\n  }\n\n  drawBoard(context) {\n    const { tileSize } = this;\n\n    function createPlatter(x, y) {\n      context.drawImage(PLATTERIMAGE, x, y, 100, 100);\n    }\n\n    // creates tile for construction of grid\n    function createTile(x, y) {\n      context.beginPath();\n      context.rect(x, y, tileSize, tileSize);\n      context.stroke();\n      // context.fillRect(x, y, tileSize, tileSize);\n    }\n\n    for (let col = 0, x = 0; col < this.cols; col += 1, x += this.tileSize) {\n      for (let row = 0, y = 0; row < this.rows; row += 1, y += this.tileSize) {\n        createTile(x, y);\n      }\n    }\n\n    // draws sushi on the top left and right corner of the grid\n    createPlatter(900, 0);\n    createPlatter(0, 900);\n    createPlatter(0, 0);\n    createPlatter(900, 900);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/chili.js":
/*!**********************!*\
  !*** ./src/chili.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Chili; });\nconst CHILI_IMAGE = new Image();\nCHILI_IMAGE.src = '../assets/chili.png';\n\nclass Chili {\n  constructor(pos) {\n    this.pos = pos;\n  }\n\n  createChili(context) {\n    context.drawImage(CHILI_IMAGE, this.pos[0], this.pos[1], 100, 100);\n  }\n  // creates chili pieces\n}\n\n\n//# sourceURL=webpack:///./src/chili.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SushiGoRound; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\nclass SushiGoRound {\n  constructor(canvas) {\n    this.context = canvas.getContext('2d');\n    // set in index.css 1000x1000px\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.restart();\n  }\n\n  restart() {\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    // setTimeout(() => {\n    this.animate();\n    setInterval(() => {\n      this.board.step();\n      this.animate();\n    }, 1000);\n    // }, 25);\n  }\n\n  animate() {\n    this.board.animate(this.context);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('game-canvas');\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  console.log('Webpack is working!');\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sushi.js":
/*!**********************!*\
  !*** ./src/sushi.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sushi; });\nconst SUSHI_IMAGE = new Image();\nSUSHI_IMAGE.src = '../assets/sushi6.png';\n\nclass Sushi {\n  constructor(pos) {\n    this.pos = pos;\n  }\n\n  createSushi(context) {\n    context.drawImage(SUSHI_IMAGE, this.pos[0], this.pos[1], 100, 100);\n  }\n\n  // creates sushi pieces\n}\n\n\n//# sourceURL=webpack:///./src/sushi.js?");

/***/ }),

/***/ "./src/sushi_monster.js":
/*!******************************!*\
  !*** ./src/sushi_monster.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SushiMonster; });\nconst SUSHI_MONSTER_IMAGE = new Image();\nSUSHI_MONSTER_IMAGE.src = '../assets/lickitung.gif';\n\nclass SushiMonster {\n  constructor(pos) {\n    this.pos = pos;\n  }\n\n  // POSSIBLE MOVES WITHIN SUSHI CONVEYOR BELT\n  // [x,x,x,x,x,x,]\n  // [x,x,x,x,x,x,]\n  // [x,x,x,x,x,x,]\n  // [x,x,x,x,x,x,]\n  // [x,x,x,x,x,x,]\n  // [x,x,x,x,x,x,]\n\n  createSushiMonster(context) {\n    context.drawImage(SUSHI_MONSTER_IMAGE, this.pos[0], this.pos[1], 100, 100);\n  }\n  // creates SushiMonster piece\n}\n\n\n\n//# sourceURL=webpack:///./src/sushi_monster.js?");

/***/ })

/******/ });