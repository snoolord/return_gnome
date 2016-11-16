/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _game = __webpack_require__(1);
	
	var _game2 = _interopRequireDefault(_game);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	$(function () {
	  var game = new _game2.default($('.sky'));
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function () {
	  function Game($el) {
	    _classCallCheck(this, Game);
	
	    this.el = $el;
	    this.setupGame();
	  }
	
	  _createClass(Game, [{
	    key: 'button',
	    value: function button() {
	      var that = this;
	      var button = $('button');
	      console.log(button);
	      $('button').click(function (e) {
	        e.preventDefault();
	        $('.sky').css("justify-content", "space-between");
	      });
	    }
	  }, {
	    key: 'cssField',
	    value: function cssField() {
	      var cssField = $('textarea');
	      cssField.on('keyup', function () {
	        var styles = cssField.val().split(':');
	        if (styles[1]) {
	          styles[1] = styles[1].slice(0, styles[1].length - 1).trim();
	        }
	        styles.map(function (style) {
	          style.trim();
	        });
	
	        console.log(styles[0], styles[1]);
	        $('.sky').css(styles[0], styles[1]);
	      });
	    }
	  }, {
	    key: 'setupGame',
	    value: function setupGame() {
	      for (var i = 0; i < 2; i++) {
	        var frog = $('<div>frog</div>');
	        this.el.append(frog);
	      }
	      this.button();
	      this.cssField();
	    }
	  }]);
	
	  return Game;
	}();
	
	exports.default = Game;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map