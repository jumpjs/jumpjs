/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(2);\n\nvar jumpjs = __webpack_require__(3);\n\nif (window) {\n  window.jumpjs = jumpjs;\n}\n\nmodule.exports = jumpjs;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9zZXR1cCcpO1xuXG52YXIganVtcGpzID0gcmVxdWlyZSgnLi9saWInKTtcblxuaWYgKHdpbmRvdykge1xuICB3aW5kb3cuanVtcGpzID0ganVtcGpzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGp1bXBqcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("var lastTime = 0;\nvar vendors = ['ms', 'moz', 'webkit', 'o'];\nfor (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {\n  window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];\n  window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];\n}\nif (!window.requestAnimationFrame) {\n  window.requestAnimationFrame = (callback, element) => {\n    var currTime = new Date().getTime();\n    var timeToCall = Math.max(0, 16 - (currTime - lastTime));\n    var id = window.setTimeout(() => {\n      callback(currTime + timeToCall);\n    }, timeToCall);\n    lastTime = currTime + timeToCall;\n    return id;\n  };\n}\nif (!window.cancelAnimationFrame) {\n  window.cancelAnimationFrame = id => {\n    clearTimeout(id);\n  };\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXR1cC5qcz9iNDRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSxlQUFlLHFEQUFxRDtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbGFzdFRpbWUgPSAwO1xudmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xuZm9yICh2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fCB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbn1cbmlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKGNhbGxiYWNrLCBlbGVtZW50KSA9PiB7XG4gICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG59XG5pZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBpZCA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2V0dXAuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("var core = __webpack_require__(4);\nvar graphics = __webpack_require__(10);\nvar input = __webpack_require__(14);\nvar components = __webpack_require__(16);\n\nmodule.exports = {\n  core,\n  graphics,\n  input,\n  components\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanM/YmRkOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb3JlID0gcmVxdWlyZSgnLi9jb3JlJyk7XG52YXIgZ3JhcGhpY3MgPSByZXF1aXJlKCcuL2dyYXBoaWNzJyk7XG52YXIgaW5wdXQgPSByZXF1aXJlKCcuL2lucHV0Jyk7XG52YXIgY29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29yZSxcbiAgZ3JhcGhpY3MsXG4gIGlucHV0LFxuICBjb21wb25lbnRzXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("var Game = __webpack_require__(5);\nvar Scene = __webpack_require__(6);\nvar Entity = __webpack_require__(7);\n\nmodule.exports = {\n  Game,\n  Scene,\n  Entity\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29yZS9pbmRleC5qcz8zZmFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZScpO1xudmFyIFNjZW5lID0gcmVxdWlyZSgnLi9TY2VuZScpO1xudmFyIEVudGl0eSA9IHJlcXVpcmUoJy4vRW50aXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBHYW1lLFxuICBTY2VuZSxcbiAgRW50aXR5XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvY29yZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("var FPS = 60;\nvar FRAME_DURATION = 1000 / FPS;\nvar fps = 0;\nvar frames = 0;\nvar scene = null;\nvar previousTime = null;\nvar delta = null;\nvar canvas = null;\nvar context = null;\nvar paused = true;\nvar elapsed = 0;\n\nvar Game = {\n  getCanvas() {\n    return canvas;\n  },\n  setCanvas(_canvas) {\n    canvas = _canvas;\n    context = canvas.getContext('2d');\n  },\n  getContext() {\n    return context;\n  },\n  getScene() {\n    return scene;\n  },\n  setScene(_scene) {\n    if (_scene.onSetup) {\n      _scene.onSetup();\n    }\n    scene = _scene;\n  },\n  getDelta() {\n    return delta;\n  },\n  getFPS() {\n    return Math.round(1 / elapsed);\n  },\n  run() {\n    _gameLoop();\n  }\n};\n\nmodule.exports = Game;\n\nfunction _gameLoop() {\n\n  //Call the next iteration of the game loop\n  window.requestAnimationFrame(() => _gameLoop());\n\n  //calculate the delta time between this current timestamp (frame)\n  //and the previous\n  var now = window.performance.now();\n  elapsed = (now - (previousTime || now)) / 1000;\n  delta = now - previousTime;\n\n  //correct any huge unexpected gaps in the delta\n  if (delta > 1000) {\n    delta = FRAME_DURATION;\n  }\n\n  // Store the current transformation matrix\n  context.save();\n\n  // Use the identity matrix while clearing the canvas\n  context.setTransform(1, 0, 0, 1, 0, 0);\n  context.clearRect(0, 0, canvas.width, canvas.height);\n\n  // Restore the transform\n  context.restore();\n\n  //Update all of the game components\n  scene.update(Game);\n\n  //set the current time to be used as the previous\n  //for the next frame\n  previousTime = now;\n\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29yZS9HYW1lLmpzP2Q0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEZQUyA9IDYwO1xudmFyIEZSQU1FX0RVUkFUSU9OID0gMTAwMCAvIEZQUztcbnZhciBmcHMgPSAwO1xudmFyIGZyYW1lcyA9IDA7XG52YXIgc2NlbmUgPSBudWxsO1xudmFyIHByZXZpb3VzVGltZSA9IG51bGw7XG52YXIgZGVsdGEgPSBudWxsO1xudmFyIGNhbnZhcyA9IG51bGw7XG52YXIgY29udGV4dCA9IG51bGw7XG52YXIgcGF1c2VkID0gdHJ1ZTtcbnZhciBlbGFwc2VkID0gMDtcblxudmFyIEdhbWUgPSB7XG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gY2FudmFzO1xuICB9LFxuICBzZXRDYW52YXMoX2NhbnZhcykge1xuICAgIGNhbnZhcyA9IF9jYW52YXM7XG4gICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICB9LFxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9LFxuICBnZXRTY2VuZSgpIHtcbiAgICByZXR1cm4gc2NlbmU7XG4gIH0sXG4gIHNldFNjZW5lKF9zY2VuZSkge1xuICAgIGlmIChfc2NlbmUub25TZXR1cCkge1xuICAgICAgX3NjZW5lLm9uU2V0dXAoKTtcbiAgICB9XG4gICAgc2NlbmUgPSBfc2NlbmU7XG4gIH0sXG4gIGdldERlbHRhKCkge1xuICAgIHJldHVybiBkZWx0YTtcbiAgfSxcbiAgZ2V0RlBTKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKDEgLyBlbGFwc2VkKTtcbiAgfSxcbiAgcnVuKCkge1xuICAgIF9nYW1lTG9vcCgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG5cbmZ1bmN0aW9uIF9nYW1lTG9vcCgpIHtcblxuICAvL0NhbGwgdGhlIG5leHQgaXRlcmF0aW9uIG9mIHRoZSBnYW1lIGxvb3BcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBfZ2FtZUxvb3AoKSk7XG5cbiAgLy9jYWxjdWxhdGUgdGhlIGRlbHRhIHRpbWUgYmV0d2VlbiB0aGlzIGN1cnJlbnQgdGltZXN0YW1wIChmcmFtZSlcbiAgLy9hbmQgdGhlIHByZXZpb3VzXG4gIHZhciBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gIGVsYXBzZWQgPSAobm93IC0gKHByZXZpb3VzVGltZSB8fCBub3cpKSAvIDEwMDA7XG4gIGRlbHRhID0gbm93IC0gcHJldmlvdXNUaW1lO1xuXG4gIC8vY29ycmVjdCBhbnkgaHVnZSB1bmV4cGVjdGVkIGdhcHMgaW4gdGhlIGRlbHRhXG4gIGlmIChkZWx0YSA+IDEwMDApIHtcbiAgICBkZWx0YSA9IEZSQU1FX0RVUkFUSU9OO1xuICB9XG5cbiAgLy8gU3RvcmUgdGhlIGN1cnJlbnQgdHJhbnNmb3JtYXRpb24gbWF0cml4XG4gIGNvbnRleHQuc2F2ZSgpO1xuXG4gIC8vIFVzZSB0aGUgaWRlbnRpdHkgbWF0cml4IHdoaWxlIGNsZWFyaW5nIHRoZSBjYW52YXNcbiAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgLy8gUmVzdG9yZSB0aGUgdHJhbnNmb3JtXG4gIGNvbnRleHQucmVzdG9yZSgpO1xuXG4gIC8vVXBkYXRlIGFsbCBvZiB0aGUgZ2FtZSBjb21wb25lbnRzXG4gIHNjZW5lLnVwZGF0ZShHYW1lKTtcblxuICAvL3NldCB0aGUgY3VycmVudCB0aW1lIHRvIGJlIHVzZWQgYXMgdGhlIHByZXZpb3VzXG4gIC8vZm9yIHRoZSBuZXh0IGZyYW1lXG4gIHByZXZpb3VzVGltZSA9IG5vdztcblxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvY29yZS9HYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("function Scene() {\n  this.entities = [];\n  this.onSetup = null;\n}\n\nScene.prototype.reset = function() {\n  this.entities = [];\n}\n\nScene.prototype.addEntity = function(entity) {\n  this.entities.push(entity);\n}\n\nScene.prototype.update = function(game) {\n  for (var i = 0; i < this.entities.length; i++) {\n    this.entities[i].update(game);\n  }\n}\n\nScene.prototype.findEntity = function(id) {\n  for (var i = 0; i < this.entities.length; i++) {\n    if (id === this.entities[i].getId()) {\n      return this.entities[i];\n    }\n  }\n}\n\nmodule.exports = Scene;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29yZS9TY2VuZS5qcz9hN2FmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU2NlbmUoKSB7XG4gIHRoaXMuZW50aXRpZXMgPSBbXTtcbiAgdGhpcy5vblNldHVwID0gbnVsbDtcbn1cblxuU2NlbmUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZW50aXRpZXMgPSBbXTtcbn1cblxuU2NlbmUucHJvdG90eXBlLmFkZEVudGl0eSA9IGZ1bmN0aW9uKGVudGl0eSkge1xuICB0aGlzLmVudGl0aWVzLnB1c2goZW50aXR5KTtcbn1cblxuU2NlbmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5lbnRpdGllc1tpXS51cGRhdGUoZ2FtZSk7XG4gIH1cbn1cblxuU2NlbmUucHJvdG90eXBlLmZpbmRFbnRpdHkgPSBmdW5jdGlvbihpZCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaWQgPT09IHRoaXMuZW50aXRpZXNbaV0uZ2V0SWQoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXNbaV07XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9jb3JlL1NjZW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("var Transform = __webpack_require__(8);\n\nfunction Entity(x, y, width, height) {\n  this.components = {\n    transform: new Transform(x, y, width, height)\n  };\n  this.id = null;\n}\n\nEntity.prototype.addComponent = function(name, component) {\n  this.components[name] = component;\n}\n\nEntity.prototype.update = function(game) {\n  var keys = Object.keys(this.components);\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    this.components[key].update(game, this);\n  }\n}\n\nEntity.prototype.setId = function(id) {\n  this.id = id;\n}\n\nEntity.prototype.getId = function() {\n  return this.id;\n}\n\nmodule.exports = Entity;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29yZS9FbnRpdHkuanM/MWQ2ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL1RyYW5zZm9ybScpO1xuXG5mdW5jdGlvbiBFbnRpdHkoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgdHJhbnNmb3JtOiBuZXcgVHJhbnNmb3JtKHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gIH07XG4gIHRoaXMuaWQgPSBudWxsO1xufVxuXG5FbnRpdHkucHJvdG90eXBlLmFkZENvbXBvbmVudCA9IGZ1bmN0aW9uKG5hbWUsIGNvbXBvbmVudCkge1xuICB0aGlzLmNvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnQ7XG59XG5cbkVudGl0eS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZ2FtZSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuY29tcG9uZW50cyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHRoaXMuY29tcG9uZW50c1trZXldLnVwZGF0ZShnYW1lLCB0aGlzKTtcbiAgfVxufVxuXG5FbnRpdHkucHJvdG90eXBlLnNldElkID0gZnVuY3Rpb24oaWQpIHtcbiAgdGhpcy5pZCA9IGlkO1xufVxuXG5FbnRpdHkucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmlkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVudGl0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2NvcmUvRW50aXR5LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("var Component = __webpack_require__(9);\n\nfunction Transform(x, y, width, height) {\n  Component.call(this);\n  this.x = x;\n  this.y = y;\n  this.width = width;\n  this.height = height;\n}\n\nTransform.prototype = Object.create(Component.prototype);\nTransform.prototype.constructor = Transform;\n\nTransform.prototype.getTop = function() {\n  return this.y;\n}\n\nTransform.prototype.getBottom = function() {\n  return this.y + this.height;\n}\n\nTransform.prototype.getLeft = function() {\n  return this.x;\n}\n\nTransform.prototype.getRight = function() {\n  return this.x + this.width;\n}\n\nmodule.exports = Transform;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy9UcmFuc2Zvcm0uanM/M2RiZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoJy4vQ29tcG9uZW50Jyk7XG5cbmZ1bmN0aW9uIFRyYW5zZm9ybSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIENvbXBvbmVudC5jYWxsKHRoaXMpO1xuICB0aGlzLnggPSB4O1xuICB0aGlzLnkgPSB5O1xuICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcblRyYW5zZm9ybS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUcmFuc2Zvcm07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnk7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLng7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNmb3JtO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvY29tcG9uZW50cy9UcmFuc2Zvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 9 */
/***/ function(module, exports) {

	eval("function Component() {\n  this.onUpdate = null;\n}\n\nComponent.prototype.update = function(game, entity) {\n  if (this.onUpdate) {\n    this.onUpdate(game, entity);\n  }\n}\n\nmodule.exports = Component;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy9Db21wb25lbnQuanM/MGU5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQ29tcG9uZW50KCkge1xuICB0aGlzLm9uVXBkYXRlID0gbnVsbDtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihnYW1lLCBlbnRpdHkpIHtcbiAgaWYgKHRoaXMub25VcGRhdGUpIHtcbiAgICB0aGlzLm9uVXBkYXRlKGdhbWUsIGVudGl0eSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9jb21wb25lbnRzL0NvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	eval("var Sprite = __webpack_require__(11);\nvar SpriteSheet = __webpack_require__(12);\nvar Rect = __webpack_require__(13);\nvar Text = __webpack_require__(18);\n\nmodule.exports = {\n  Sprite,\n  SpriteSheet,\n  Rect,\n  Text\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ3JhcGhpY3MvaW5kZXguanM/Zjg5NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3ByaXRlID0gcmVxdWlyZSgnLi9TcHJpdGUnKTtcbnZhciBTcHJpdGVTaGVldCA9IHJlcXVpcmUoJy4vU3ByaXRlU2hlZXQnKTtcbnZhciBSZWN0ID0gcmVxdWlyZSgnLi9SZWN0Jyk7XG52YXIgVGV4dCA9IHJlcXVpcmUoJy4vVGV4dCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgU3ByaXRlLFxuICBTcHJpdGVTaGVldCxcbiAgUmVjdCxcbiAgVGV4dFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2dyYXBoaWNzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	eval("var Component = __webpack_require__(9);\n\nfunction Sprite(img, x, y, width, height) {\n  Component.call(this);\n  this.img = img;\n  this.x = x;\n  this.y = y;\n  this.width = width;\n  this.height = height;\n  this.onUpdate = onUpdate\n}\n\nSprite.prototype = Object.create(Component.prototype);\nSprite.prototype.constructor = Sprite;\n\nSprite.prototype.setImg = function (img) {\n  this.img = img;\n}\n\nvar onUpdate = function (_game, _entity) {\n  if (!this.img) {\n    return;\n  }\n  var transform = _entity.components['transform'];\n  var ctx = _game.getContext();\n  ctx.drawImage(this.img,\n    this.x,\n    this.y,\n    this.width,\n    this.height,\n    transform.x,\n    transform.y,\n    transform.width,\n    transform.height\n  );\n}\n\nmodule.exports = Sprite;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ3JhcGhpY3MvU3ByaXRlLmpzPzJjZTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9Db21wb25lbnQnKTtcblxuZnVuY3Rpb24gU3ByaXRlKGltZywgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICBDb21wb25lbnQuY2FsbCh0aGlzKTtcbiAgdGhpcy5pbWcgPSBpbWc7XG4gIHRoaXMueCA9IHg7XG4gIHRoaXMueSA9IHk7XG4gIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIHRoaXMub25VcGRhdGUgPSBvblVwZGF0ZVxufVxuXG5TcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcblNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTcHJpdGU7XG5cblNwcml0ZS5wcm90b3R5cGUuc2V0SW1nID0gZnVuY3Rpb24gKGltZykge1xuICB0aGlzLmltZyA9IGltZztcbn1cblxudmFyIG9uVXBkYXRlID0gZnVuY3Rpb24gKF9nYW1lLCBfZW50aXR5KSB7XG4gIGlmICghdGhpcy5pbWcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHRyYW5zZm9ybSA9IF9lbnRpdHkuY29tcG9uZW50c1sndHJhbnNmb3JtJ107XG4gIHZhciBjdHggPSBfZ2FtZS5nZXRDb250ZXh0KCk7XG4gIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsXG4gICAgdGhpcy54LFxuICAgIHRoaXMueSxcbiAgICB0aGlzLndpZHRoLFxuICAgIHRoaXMuaGVpZ2h0LFxuICAgIHRyYW5zZm9ybS54LFxuICAgIHRyYW5zZm9ybS55LFxuICAgIHRyYW5zZm9ybS53aWR0aCxcbiAgICB0cmFuc2Zvcm0uaGVpZ2h0XG4gICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3ByaXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvZ3JhcGhpY3MvU3ByaXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	eval("var Sprite = __webpack_require__(11);\n\nfunction SpriteSheet(src, map) {\n  this.map = map;\n  this.img = new Image();\n  this.img.src = src;\n  this.sprites = {};\n  for (var i = 0; i < map.length; i++) {\n    var info = map[i];\n    this.sprites[info.name] = new Sprite(this.img, info.x, info.y, info.width, info.height);\n  };\n}\n\nmodule.exports = SpriteSheet;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ3JhcGhpY3MvU3ByaXRlU2hlZXQuanM/ZjFjMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTcHJpdGUgPSByZXF1aXJlKCcuL1Nwcml0ZScpO1xuXG5mdW5jdGlvbiBTcHJpdGVTaGVldChzcmMsIG1hcCkge1xuICB0aGlzLm1hcCA9IG1hcDtcbiAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgdGhpcy5pbWcuc3JjID0gc3JjO1xuICB0aGlzLnNwcml0ZXMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXAubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaW5mbyA9IG1hcFtpXTtcbiAgICB0aGlzLnNwcml0ZXNbaW5mby5uYW1lXSA9IG5ldyBTcHJpdGUodGhpcy5pbWcsIGluZm8ueCwgaW5mby55LCBpbmZvLndpZHRoLCBpbmZvLmhlaWdodCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3ByaXRlU2hlZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9ncmFwaGljcy9TcHJpdGVTaGVldC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	eval("var Component = __webpack_require__(9);\n\nfunction Rect(color) {\n  Component.call(this);\n  this.color = color || 'black';\n  this.onUpdate = onUpdate;\n}\n\nRect.prototype = Object.create(Component.prototype);\nRect.prototype.constructor = Rect;\n\nvar onUpdate = function (_game, _entity) {\n  var transform = _entity.components['transform'];\n  var ctx = _game.getContext();\n  ctx.fillStyle = this.color;\n  ctx.fillRect(transform.x, transform.y, transform.width, transform.height);\n};\n\nmodule.exports = Rect;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ3JhcGhpY3MvUmVjdC5qcz81NTNiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9Db21wb25lbnQnKTtcblxuZnVuY3Rpb24gUmVjdChjb2xvcikge1xuICBDb21wb25lbnQuY2FsbCh0aGlzKTtcbiAgdGhpcy5jb2xvciA9IGNvbG9yIHx8ICdibGFjayc7XG4gIHRoaXMub25VcGRhdGUgPSBvblVwZGF0ZTtcbn1cblxuUmVjdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUpO1xuUmVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZWN0O1xuXG52YXIgb25VcGRhdGUgPSBmdW5jdGlvbiAoX2dhbWUsIF9lbnRpdHkpIHtcbiAgdmFyIHRyYW5zZm9ybSA9IF9lbnRpdHkuY29tcG9uZW50c1sndHJhbnNmb3JtJ107XG4gIHZhciBjdHggPSBfZ2FtZS5nZXRDb250ZXh0KCk7XG4gIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICBjdHguZmlsbFJlY3QodHJhbnNmb3JtLngsIHRyYW5zZm9ybS55LCB0cmFuc2Zvcm0ud2lkdGgsIHRyYW5zZm9ybS5oZWlnaHQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvZ3JhcGhpY3MvUmVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	eval("var Keyboard = __webpack_require__(15);\n\nmodule.exports = {\n  Keyboard\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvaW5wdXQvaW5kZXguanM/OTEyOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgS2V5Ym9hcmQgPSByZXF1aXJlKCcuL0tleWJvYXJkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBLZXlib2FyZFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2lucHV0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 15 */
/***/ function(module, exports) {

	eval("var keys = new Array();\n\nfunction bindKey(k){\n\treturn new Key(k);\n}\n\nmodule.exports = {\n  bindKey\n};\n\nfunction Key(k){\n\n  document.addEventListener('keyup', function () {\n    var keyCode = window.event.keyCode;\n    if (keys[keyCode]) {\n  \t\tkeys[keyCode].pressed = false;\n  \t}\n  });\n  document.addEventListener('keydown', function () {\n    var keyCode = window.event.keyCode;\n    if (keys[keyCode]) {\n      if (!keys[keyCode].pressed && keys[keyCode].event) {\n    \t\tkeys[keyCode].event();\n    \t}\n  \t\tkeys[keyCode].pressed = true;\n  \t}\n  });\n\n\tif (k.length > 1) {\n\t\tvar c = 0;\n\t\tswitch (k.toUpperCase()) {\n      case \"ENTER\":    c=13; break;\n\t\t\tcase \"LEFT\":   \t c=37; break;\n\t\t\tcase \"RIGHT\": \t c=39; break;\n\t\t\tcase \"UP\":    \t c=38; break;\n\t\t\tcase \"DOWN\":  \t c=40; break;\n\t\t\tcase \"SPACEBAR\": c=32; break;\n\t\t}\n\t\tthis.code = c;\n\t} else {\n\t\tthis.code = k.charCodeAt(0);\n\t}\n\n\tthis.pressed = false;\n\tthis.event = null;\n\n\tkeys[this.code] = this;\n\n\treturn this;\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvaW5wdXQvS2V5Ym9hcmQuanM/YjBlNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6Qix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBrZXlzID0gbmV3IEFycmF5KCk7XG5cbmZ1bmN0aW9uIGJpbmRLZXkoayl7XG5cdHJldHVybiBuZXcgS2V5KGspO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYmluZEtleVxufTtcblxuZnVuY3Rpb24gS2V5KGspe1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBrZXlDb2RlID0gd2luZG93LmV2ZW50LmtleUNvZGU7XG4gICAgaWYgKGtleXNba2V5Q29kZV0pIHtcbiAgXHRcdGtleXNba2V5Q29kZV0ucHJlc3NlZCA9IGZhbHNlO1xuICBcdH1cbiAgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGtleUNvZGUgPSB3aW5kb3cuZXZlbnQua2V5Q29kZTtcbiAgICBpZiAoa2V5c1trZXlDb2RlXSkge1xuICAgICAgaWYgKCFrZXlzW2tleUNvZGVdLnByZXNzZWQgJiYga2V5c1trZXlDb2RlXS5ldmVudCkge1xuICAgIFx0XHRrZXlzW2tleUNvZGVdLmV2ZW50KCk7XG4gICAgXHR9XG4gIFx0XHRrZXlzW2tleUNvZGVdLnByZXNzZWQgPSB0cnVlO1xuICBcdH1cbiAgfSk7XG5cblx0aWYgKGsubGVuZ3RoID4gMSkge1xuXHRcdHZhciBjID0gMDtcblx0XHRzd2l0Y2ggKGsudG9VcHBlckNhc2UoKSkge1xuICAgICAgY2FzZSBcIkVOVEVSXCI6ICAgIGM9MTM7IGJyZWFrO1xuXHRcdFx0Y2FzZSBcIkxFRlRcIjogICBcdCBjPTM3OyBicmVhaztcblx0XHRcdGNhc2UgXCJSSUdIVFwiOiBcdCBjPTM5OyBicmVhaztcblx0XHRcdGNhc2UgXCJVUFwiOiAgICBcdCBjPTM4OyBicmVhaztcblx0XHRcdGNhc2UgXCJET1dOXCI6ICBcdCBjPTQwOyBicmVhaztcblx0XHRcdGNhc2UgXCJTUEFDRUJBUlwiOiBjPTMyOyBicmVhaztcblx0XHR9XG5cdFx0dGhpcy5jb2RlID0gYztcblx0fSBlbHNlIHtcblx0XHR0aGlzLmNvZGUgPSBrLmNoYXJDb2RlQXQoMCk7XG5cdH1cblxuXHR0aGlzLnByZXNzZWQgPSBmYWxzZTtcblx0dGhpcy5ldmVudCA9IG51bGw7XG5cblx0a2V5c1t0aGlzLmNvZGVdID0gdGhpcztcblxuXHRyZXR1cm4gdGhpcztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2lucHV0L0tleWJvYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	eval("var Component = __webpack_require__(9);\nvar Transform = __webpack_require__(8);\nvar Collision = __webpack_require__(17);\n\nmodule.exports = {\n  Component,\n  Transform,\n  Collision\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy9pbmRleC5qcz9kZjQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoJy4vQ29tcG9uZW50Jyk7XG52YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9UcmFuc2Zvcm0nKTtcbnZhciBDb2xsaXNpb24gPSByZXF1aXJlKCcuL0NvbGxpc2lvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ29tcG9uZW50LFxuICBUcmFuc2Zvcm0sXG4gIENvbGxpc2lvblxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2NvbXBvbmVudHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	eval("var Component = __webpack_require__(9);\n\nfunction Collision() {\n  Component.call(this);\n  this.onUpdate = onUpdate;\n  this.collidedWith = [];\n}\n\nCollision.prototype = Object.create(Component.prototype);\nCollision.prototype.constructor = Collision;\n\nCollision.prototype.hasCollidedWith = function(entity) {\n  for (var i = 0; i < this.collidedWith.length; i++) {\n    if (entity === this.collidedWith[i].entity) {\n      return this.collidedWith[i].collisions;\n    }\n  }\n  return false;\n}\n\nmodule.exports = Collision;\n\nvar onUpdate = function (_game, _entity) {\n  var collision = _entity.components['collision'];\n  var entities = _game.getScene().entities;\n  this.collidedWith = [];\n  for (var i = 0; i < entities.length; i++) {\n    var entity = entities[i];\n    if (entity === _entity) {\n      return;\n    }\n    var collisions = {\n      top: false,\n      bottom: false,\n      left: false,\n      right: false\n    };\n    checkCollions(collisions, _entity, entity);\n    if (collisions.top || collisions.bottom || collisions.left || collisions.right) {\n      this.collidedWith.push({\n        entity: entity,\n        collisions: collisions\n      });\n    }\n  }\n}\n\nfunction checkCollions(collisions, _entity, entity) {\n  var transform1 = _entity1.components['transform'];\n  var transform2 = _entity2.components['transform'];\n  if (transform1.getBottom() >= transform2.getBottom()) {\n    collisions.bottom = true;\n  }\n  if (transform1.getTop() <= transform2.getTop()) {\n    collisions.top = true;\n  }\n\tif (transform1.getRight() >= transform2.getRight()) {\n    collisions.right = true;\n  }\n  if (transform1.getLeft() <= transform2.getLeft()) {\n    collisions.left = true;\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy9Db2xsaXNpb24uanM/MzAzOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsOEJBQThCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb21wb25lbnQgPSByZXF1aXJlKCcuL0NvbXBvbmVudCcpO1xuXG5mdW5jdGlvbiBDb2xsaXNpb24oKSB7XG4gIENvbXBvbmVudC5jYWxsKHRoaXMpO1xuICB0aGlzLm9uVXBkYXRlID0gb25VcGRhdGU7XG4gIHRoaXMuY29sbGlkZWRXaXRoID0gW107XG59XG5cbkNvbGxpc2lvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUpO1xuQ29sbGlzaW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbGxpc2lvbjtcblxuQ29sbGlzaW9uLnByb3RvdHlwZS5oYXNDb2xsaWRlZFdpdGggPSBmdW5jdGlvbihlbnRpdHkpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbGxpZGVkV2l0aC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbnRpdHkgPT09IHRoaXMuY29sbGlkZWRXaXRoW2ldLmVudGl0eSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29sbGlkZWRXaXRoW2ldLmNvbGxpc2lvbnM7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xsaXNpb247XG5cbnZhciBvblVwZGF0ZSA9IGZ1bmN0aW9uIChfZ2FtZSwgX2VudGl0eSkge1xuICB2YXIgY29sbGlzaW9uID0gX2VudGl0eS5jb21wb25lbnRzWydjb2xsaXNpb24nXTtcbiAgdmFyIGVudGl0aWVzID0gX2dhbWUuZ2V0U2NlbmUoKS5lbnRpdGllcztcbiAgdGhpcy5jb2xsaWRlZFdpdGggPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnRpdGllcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlbnRpdHkgPSBlbnRpdGllc1tpXTtcbiAgICBpZiAoZW50aXR5ID09PSBfZW50aXR5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjb2xsaXNpb25zID0ge1xuICAgICAgdG9wOiBmYWxzZSxcbiAgICAgIGJvdHRvbTogZmFsc2UsXG4gICAgICBsZWZ0OiBmYWxzZSxcbiAgICAgIHJpZ2h0OiBmYWxzZVxuICAgIH07XG4gICAgY2hlY2tDb2xsaW9ucyhjb2xsaXNpb25zLCBfZW50aXR5LCBlbnRpdHkpO1xuICAgIGlmIChjb2xsaXNpb25zLnRvcCB8fCBjb2xsaXNpb25zLmJvdHRvbSB8fCBjb2xsaXNpb25zLmxlZnQgfHwgY29sbGlzaW9ucy5yaWdodCkge1xuICAgICAgdGhpcy5jb2xsaWRlZFdpdGgucHVzaCh7XG4gICAgICAgIGVudGl0eTogZW50aXR5LFxuICAgICAgICBjb2xsaXNpb25zOiBjb2xsaXNpb25zXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tDb2xsaW9ucyhjb2xsaXNpb25zLCBfZW50aXR5LCBlbnRpdHkpIHtcbiAgdmFyIHRyYW5zZm9ybTEgPSBfZW50aXR5MS5jb21wb25lbnRzWyd0cmFuc2Zvcm0nXTtcbiAgdmFyIHRyYW5zZm9ybTIgPSBfZW50aXR5Mi5jb21wb25lbnRzWyd0cmFuc2Zvcm0nXTtcbiAgaWYgKHRyYW5zZm9ybTEuZ2V0Qm90dG9tKCkgPj0gdHJhbnNmb3JtMi5nZXRCb3R0b20oKSkge1xuICAgIGNvbGxpc2lvbnMuYm90dG9tID0gdHJ1ZTtcbiAgfVxuICBpZiAodHJhbnNmb3JtMS5nZXRUb3AoKSA8PSB0cmFuc2Zvcm0yLmdldFRvcCgpKSB7XG4gICAgY29sbGlzaW9ucy50b3AgPSB0cnVlO1xuICB9XG5cdGlmICh0cmFuc2Zvcm0xLmdldFJpZ2h0KCkgPj0gdHJhbnNmb3JtMi5nZXRSaWdodCgpKSB7XG4gICAgY29sbGlzaW9ucy5yaWdodCA9IHRydWU7XG4gIH1cbiAgaWYgKHRyYW5zZm9ybTEuZ2V0TGVmdCgpIDw9IHRyYW5zZm9ybTIuZ2V0TGVmdCgpKSB7XG4gICAgY29sbGlzaW9ucy5sZWZ0ID0gdHJ1ZTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvY29tcG9uZW50cy9Db2xsaXNpb24uanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	eval("var Component = __webpack_require__(9);\n\nfunction Text(str, color) {\n  Component.call(this);\n  this.str = str;\n  this.onUpdate = onUpdate;\n}\n\nText.prototype = Object.create(Component.prototype);\nText.prototype.constructor = Text;\n\nText.prototype.setText = function(str) {\n  this.str = str;\n};\n\nvar onUpdate = function (_game, _entity) {\n  var transform = _entity.components['transform'];\n  var ctx = _game.getContext();\n  ctx.fillText(\n    this.str,\n    transform.x,\n    transform.y\n  );\n};\n\nmodule.exports = Text;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ3JhcGhpY3MvVGV4dC5qcz8zNmY4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50Jyk7XG5cbmZ1bmN0aW9uIFRleHQoc3RyLCBjb2xvcikge1xuICBDb21wb25lbnQuY2FsbCh0aGlzKTtcbiAgdGhpcy5zdHIgPSBzdHI7XG4gIHRoaXMub25VcGRhdGUgPSBvblVwZGF0ZTtcbn1cblxuVGV4dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUpO1xuVGV4dC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUZXh0O1xuXG5UZXh0LnByb3RvdHlwZS5zZXRUZXh0ID0gZnVuY3Rpb24oc3RyKSB7XG4gIHRoaXMuc3RyID0gc3RyO1xufTtcblxudmFyIG9uVXBkYXRlID0gZnVuY3Rpb24gKF9nYW1lLCBfZW50aXR5KSB7XG4gIHZhciB0cmFuc2Zvcm0gPSBfZW50aXR5LmNvbXBvbmVudHNbJ3RyYW5zZm9ybSddO1xuICB2YXIgY3R4ID0gX2dhbWUuZ2V0Q29udGV4dCgpO1xuICBjdHguZmlsbFRleHQoXG4gICAgdGhpcy5zdHIsXG4gICAgdHJhbnNmb3JtLngsXG4gICAgdHJhbnNmb3JtLnlcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2dyYXBoaWNzL1RleHQuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);