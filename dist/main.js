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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _sushi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sushi */ \"./src/sushi.js\");\n/* harmony import */ var _chili__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chili */ \"./src/chili.js\");\n/* harmony import */ var _sushi_monster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sushi_monster */ \"./src/sushi_monster.js\");\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tile */ \"./src/tile.js\");\n/* harmony import */ var _scorebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scorebar */ \"./src/scorebar.js\");\n\n\n\n\n\n\nconst PLATTERIMAGE = new Image();\nPLATTERIMAGE.src = '../assets/platter.png';\n\nclass Board {\n  constructor(dimensions) {\n    // 1000px x 1000px\n    this.dimensions = dimensions;\n    this.cols = 10;\n    this.rows = 10;\n    // tile is for grid on board\n    this.tileSize = 100;\n    this.numSushis = 18;\n    this.numChilis = 10;\n    this.allConveyorBeltItems = [];\n    this.sushiMonster = [];\n    this.possiblePos = [];\n    this.tiles = [];\n    this.score = [4];\n    this.scorebar = [];\n    this.allPossiblePos();\n    this.addItemsOntoConveyorBelt();\n    this.addSushiMonster();\n    this.addTiles();\n    this.addScoreBar();\n\n    document.addEventListener('keydown', (event) => {\n      if (event.key === ' ') {\n        event.preventDefault();\n        this.eatItem();\n      }\n    });\n  }\n\n  drawConveyorBeltItems(context) {\n    const { allConveyorBeltItems } = this;\n    allConveyorBeltItems.forEach((item) => (\n      item.draw(context)\n    ));\n  }\n\n  drawSushiMonster(context) {\n    const { sushiMonster } = this;\n    sushiMonster[0].drawSushiMonster(context);\n  }\n\n  drawScoreBar(context) {\n    const { scorebar } = this;\n    scorebar[0].drawScore(context);\n  }\n\n  drawTiles(context) {\n    const { tiles } = this;\n    tiles.forEach((tile) => (\n      tile.createTile(context)\n    ));\n  }\n\n  addSushiMonster() {\n    this.sushiMonster.push(new _sushi_monster__WEBPACK_IMPORTED_MODULE_2__[\"default\"]([500, 500]));\n  }\n\n  addScoreBar() {\n    const { score } = this;\n    this.scorebar.push(new _scorebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"](score[0]));\n  }\n\n  allPossiblePos() {\n    const { possiblePos } = this;\n    for (let x = 100; x <= 800; x += 100) {\n      possiblePos.push([x, 100]);\n    }\n\n    for (let y = 200; y <= 800; y += 100) {\n      possiblePos.push([800, y]);\n    }\n\n    for (let x = 100; x <= 700; x += 100) {\n      possiblePos.push([x, 800]);\n    }\n\n    for (let y = 200; y <= 700; y += 100) {\n      possiblePos.push([100, y]);\n    }\n\n    return possiblePos;\n  }\n\n  addTiles() {\n    const { possiblePos } = this;\n    possiblePos.forEach((el) => (\n      this.tiles.push(new _tile__WEBPACK_IMPORTED_MODULE_3__[\"default\"](el))\n    ));\n  }\n\n  addItemsOntoConveyorBelt() {\n    const orderedPositions = [];\n    const scrambledPositions = [];\n    const { allConveyorBeltItems } = this;\n    this.possiblePos.forEach((arr) => {\n      let mini = [];\n      mini.push(arr[0]);\n      mini.push(arr[1]);\n      orderedPositions.push(mini);\n    });\n    while (orderedPositions.length !== 0) {\n      const random = Math.floor(Math.random() * Math.floor(orderedPositions.length));\n      scrambledPositions.push(orderedPositions[random]);\n      orderedPositions.splice(random, 1);\n    }\n\n    for (let i = 0; i < 18; i += 1) {\n      allConveyorBeltItems.push(new _sushi__WEBPACK_IMPORTED_MODULE_0__[\"default\"](scrambledPositions[i]));\n    }\n\n    for (let i = 18; i < 28; i += 1) {\n      allConveyorBeltItems.push(new _chili__WEBPACK_IMPORTED_MODULE_1__[\"default\"](scrambledPositions[i]));\n    }\n  }\n\n  // context is the 2D canvas\n  animate(context) {\n    context.clearRect(0, 0, 1000, 1000);\n    this.drawBoard(context);\n    this.drawTiles(context);\n    this.drawConveyorBeltItems(context);\n    this.drawSushiMonster(context);\n    this.drawScoreBar(context);\n  }\n\n  eatItem() {\n    const { sushiMonster, allConveyorBeltItems, score, scorebar } = this;\n    const monster = sushiMonster[0];\n    const horizontal = monster.pos[0];\n    const vertical = monster.pos[1];\n\n    allConveyorBeltItems.forEach((item, index) => {\n      const left = item.pos[0];\n      const right = item.pos[1];\n      if (((left === horizontal - 100) && (right === vertical))\n      || ((left === horizontal + 100) && (right === vertical))\n      || ((right === vertical - 100) && (left === horizontal))\n      || ((right === vertical + 100) && (left === horizontal))) {\n        if ((item.type === 'sushi') && (score[0] !== 10)) {\n          score[0] += 1;\n        } else if ((item.type === 'chili') && (score[0] !== 1)) {\n          score[0] -= 1;\n        } else if ((item.type === 'chili') && (score[0] === 1)) {\n          alert(\"Sushi Monster is NOT HAPPY!!!  TRY AGAIN\");\n        }\n        allConveyorBeltItems.splice(index, 1);\n\n        scorebar[0].num = score[0];\n      }\n    });\n  }\n\n  step() {\n    this.allConveyorBeltItems.forEach((item) => {\n    // subtracting to go upwards until pos[1] reaches 100, then we move to the right\n      if ((item.pos[0] === 100) && (item.pos[1] !== 100)) {\n        item.pos[1] -= 100;\n      } else if ((item.pos[1] === 100) && (item.pos[0] !== 800)) {\n        item.pos[0] += 100;\n      } else if ((item.pos[0] === 800) && (item.pos[1] !== 800)) {\n        item.pos[1] += 100;\n      } else if (item.pos[1] === 800) {\n        item.pos[0] -= 100;\n      }\n    });\n  }\n\n\n\n  drawBoard(context) {\n    const { tileSize } = this;\n\n    function createPlatter(x, y) {\n      context.drawImage(PLATTERIMAGE, x, y, 100, 100);\n    }\n\n    function createTile(x, y) {\n      context.beginPath();\n      context.rect(x, y, tileSize, tileSize);\n      context.stroke();\n    }\n\n    for (let col = 0, x = 0; col < this.cols; col += 1, x += this.tileSize) {\n      for (let row = 0, y = 0; row < this.rows; row += 1, y += this.tileSize) {\n        createTile(x, y);\n      }\n    }\n\n    // draws sushi on the top left and right corner of the grid\n    createPlatter(900, 0);\n    createPlatter(0, 900);\n    createPlatter(0, 0);\n    createPlatter(900, 900);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/chili.js":
/*!**********************!*\
  !*** ./src/chili.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Chili; });\nconst CHILI_IMAGE = new Image();\nCHILI_IMAGE.src = '../assets/chili.png';\n\nclass Chili {\n  constructor(pos) {\n    this.pos = pos;\n    this.type = 'chili';\n  }\n\n  draw(context) {\n    context.drawImage(CHILI_IMAGE, this.pos[0], this.pos[1], 100, 100);\n  }\n  // creates chili pieces\n}\n\n\n//# sourceURL=webpack:///./src/chili.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SushiGoRound; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\nclass SushiGoRound {\n  constructor(canvas) {\n    this.context = canvas.getContext('2d');\n    // set in index.css 1000x1000px\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.restart();\n  }\n\n  restart() {\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    // setTimeout(() => {\n    this.animate();\n    setInterval(() => {\n    // this is how fast monster moves\n      this.animate();\n    }, 50);\n    setInterval(() => {\n    // this is how fast convery belt items move\n      this.board.step();\n    }, 1000);\n    // }, 25);\n  }\n\n  animate() {\n    this.board.animate(this.context);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('game-canvas');\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  console.log('Webpack is working!');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scorebar.js":
/*!*************************!*\
  !*** ./src/scorebar.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScoreBar; });\nclass ScoreBar {\n  constructor(num) {\n    this.num = num;\n    this.scorebarXaxis = [];\n\n    for (let i = 0; i <= 400; i += 40) {\n      this.scorebarXaxis.push(i);\n    }\n  }\n\n  drawScore(context) {\n    const { num, scorebarXaxis } = this;\n    if (num > 0 && num < 6) {\n      context.fillStyle = 'red';\n      context.fillRect(300, 40, scorebarXaxis[num], 20);\n    } else if (num >= 6 && num <= 10) {\n      context.fillStyle = 'lightgreen';\n      context.fillRect(300, 40, scorebarXaxis[num], 20);\n    } else if (num === 0) {\n      alert('Sushi Monster is not happy!!!');\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/scorebar.js?");

/***/ }),

/***/ "./src/sushi.js":
/*!**********************!*\
  !*** ./src/sushi.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sushi; });\nconst SUSHI_IMAGE = new Image();\nSUSHI_IMAGE.src = '../assets/sushi6.png';\n\nclass Sushi {\n  constructor(pos) {\n    this.pos = pos;\n    this.type = 'sushi';\n  }\n\n  draw(context) {\n    context.drawImage(SUSHI_IMAGE, this.pos[0], this.pos[1], 100, 100);\n  }\n\n  // creates sushi pieces\n}\n\n\n//# sourceURL=webpack:///./src/sushi.js?");

/***/ }),

/***/ "./src/sushi_monster.js":
/*!******************************!*\
  !*** ./src/sushi_monster.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SushiMonster; });\n// creates SushiMonster piece\nconst SUSHI_MONSTER_IMAGE = new Image();\nSUSHI_MONSTER_IMAGE.src = '../assets/lickitung.gif';\n\nclass SushiMonster {\n  constructor(pos) {\n    this.pos = pos;\n    this.stepSize = 100;\n    this.moveSushiMonster();\n  }\n\n  moveSushiMonster() {\n    document.addEventListener('keydown', (event) => {\n      const monster = this;\n      const horizontal = monster.pos[0];\n      const vertical = monster.pos[1];\n\n      if (event.keyCode === 37) {\n        // alert('Left arrow of keyboard was smashed');\n        if (horizontal > 200) monster.pos[0] -= this.stepSize;\n      } else if (event.keyCode === 38) {\n        event.preventDefault();\n        if (vertical > 200) monster.pos[1] -= this.stepSize;\n        // move the SushiMonster to up\n      } else if (event.keyCode === 39) {\n        if (horizontal <= 600) monster.pos[0] += this.stepSize;\n        // move the SushiMonster to right\n      } else if (event.keyCode === 40) {\n        if (vertical < 700) monster.pos[1] += this.stepSize;\n        event.preventDefault();\n      // move the SushiMonster to down\n      }\n    });\n  }\n\n  drawSushiMonster(context) {\n    context.drawImage(SUSHI_MONSTER_IMAGE, this.pos[0], this.pos[1], 100, 100);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/sushi_monster.js?");

/***/ }),

/***/ "./src/tile.js":
/*!*********************!*\
  !*** ./src/tile.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tile; });\n// creates tile for sushi conveyor belt\n\nclass Tile {\n  constructor(pos) {\n    this.pos = pos;\n    this.possiblePos = [];\n  }\n\n  createTile(context) {\n    const { pos } = this;\n    context.fillStyle = 'black';\n    context.fillRect(pos[0], pos[1], 100, 100);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/tile.js?");

/***/ })

/******/ });