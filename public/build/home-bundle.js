webpackJsonp([0],{

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Backbone, $) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     App main file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */
// import styles

// import custom scripts

// import backbone/react


__webpack_require__(424);

__webpack_require__(146);

__webpack_require__(218);

__webpack_require__(217);

var _main = __webpack_require__(216);

var _main2 = _interopRequireDefault(_main);

var _index = __webpack_require__(214);

var _view = __webpack_require__(227);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = function () {
  function Application() {
    _classCallCheck(this, Application);

    //additional initialization
    this.initialize();
  }

  _createClass(Application, [{
    key: 'initialize',
    value: function initialize() {
      var self = this;
      this._mainView = new _view2.default();
      // template for multiple pages
      // this._pageController = new PageController({
      //   app: self
      // });

      this._homeController = new _index.HomeController({
        app: self
      });

      this._clubsController = new _index.ClubsController({
        app: self
      });

      this._mapController = new _index.MapController({
        app: self
      });

      this._eventsController = new _index.EventsController({
        app: self
      });

      this._router = new _main2.default({
        controllers: {
          // page: self._pageController,
          home: self._homeController,
          clubs: self._clubsController,
          map: self._mapController,
          events: self._eventsController
        }
      });
      //start backbone history
      Backbone.history.start();
      console.log('app finished initializing!');
    }
  }, {
    key: 'router',
    get: function get() {
      return this._router;
    }
  }]);

  return Application;
}();

//start up function


$(function () {
  //webpack works
  console.log('Loading...');

  var app = new Application();
  // console.log(app);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75), __webpack_require__(15)))

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(77);

var _base2 = _interopRequireDefault(_base);

var _club = __webpack_require__(220);

var _club2 = _interopRequireDefault(_club);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               club controller
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Controller = function (_BaseController) {
  _inherits(Controller, _BaseController);

  function Controller(options) {
    _classCallCheck(this, Controller);

    return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this, options));

    // this.events = {};
  }
  ///action methods/////


  _createClass(Controller, [{
    key: 'index',
    value: function index() {
      //re-render the page being requested
      // console.log('Index route is to be implemented...');
      var currentView = React.createElement(_club2.default, null);
      this.viewPort.render(currentView);
    }
  }]);

  return Controller;
}(_base2.default);

exports.default = Controller;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(77);

var _base2 = _interopRequireDefault(_base);

var _event = __webpack_require__(225);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               events controller
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Controller = function (_BaseController) {
  _inherits(Controller, _BaseController);

  function Controller(options) {
    _classCallCheck(this, Controller);

    return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this, options));

    // this.events = {};
  }
  ///action methods/////


  _createClass(Controller, [{
    key: 'index',
    value: function index() {
      //re-render the page being requested
      // console.log('Index route is to be implemented...');
      var currentView = React.createElement(_event2.default, null);
      this.viewPort.render(currentView);
    }
  }]);

  return Controller;
}(_base2.default);

exports.default = Controller;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(77);

var _base2 = _interopRequireDefault(_base);

var _home = __webpack_require__(226);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Home controller
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Controller = function (_BaseController) {
  _inherits(Controller, _BaseController);

  function Controller(options) {
    _classCallCheck(this, Controller);

    return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this, options));

    // this.events = {};
  }
  ///action methods/////


  _createClass(Controller, [{
    key: 'index',
    value: function index() {
      //re-render the page being requested
      // console.log('Index route is to be implemented...');
      var currentView = React.createElement(_home2.default, null);
      this.viewPort.render(currentView);
    }
  }]);

  return Controller;
}(_base2.default);

exports.default = Controller;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClubsController = exports.MapController = exports.EventsController = exports.HomeController = undefined;

var _home = __webpack_require__(213);

var _home2 = _interopRequireDefault(_home);

var _events = __webpack_require__(212);

var _events2 = _interopRequireDefault(_events);

var _map = __webpack_require__(215);

var _map2 = _interopRequireDefault(_map);

var _clubs = __webpack_require__(211);

var _clubs2 = _interopRequireDefault(_clubs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Carl Flint
*/

// import pageController from './page.js';
exports.HomeController = _home2.default;
exports.EventsController = _events2.default;
exports.MapController = _map2.default;
exports.ClubsController = _clubs2.default;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(77);

var _base2 = _interopRequireDefault(_base);

var _map = __webpack_require__(228);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               map controller
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Controller = function (_BaseController) {
  _inherits(Controller, _BaseController);

  function Controller(options) {
    _classCallCheck(this, Controller);

    return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this, options));

    // this.events = {};
  }
  ///action methods/////


  _createClass(Controller, [{
    key: 'index',
    value: function index() {
      //re-render the page being requested
      //console.log('Index route is to be implemented...');
      var currentView = React.createElement(_map2.default, null);
      this.viewPort.render(currentView);
    }
  }]);

  return Controller;
}(_base2.default);

exports.default = Controller;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Backbone) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
Router for github.io (SPA)
*/
exports.default = Backbone.Router.extend({
  name: 'main',
  initialize: function initialize(options) {
    this.options = options;
    console.log('router is being initialized');
    this.controllers = options.controllers;
  },

  routes: {
    '': 'index',
    'clubs': 'clubs',
    'map': 'map',
    'events': 'events'
  },
  index: function index() {
    this.controllers.home.index();
  },
  clubs: function clubs() {
    this.controllers.clubs.index();
  },
  map: function map() {
    this.controllers.map.index();
  },
  events: function events() {
    this.controllers.events.index();
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)))

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(15);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
	var container, button, menu;

	container = document.getElementById('site-navigation');
	if (!container) {
		return;
	}

	button = container.getElementsByTagName('h4')[0];
	if ('undefined' === typeof button) {
		return;
	}

	menu = container.getElementsByTagName('ul')[0];

	// Hide menu toggle button if menu is empty and return early.
	if ('undefined' === typeof menu) {
		button.style.display = 'none';
		return;
	}

	if (-1 === menu.className.indexOf('nav-menu')) {
		menu.className += 'nav-menu';
	}

	button.onclick = function () {
		if (-1 !== container.className.indexOf('main-small-navigation')) {
			container.className = container.className.replace('main-small-navigation', 'main-navigation');
		} else {
			container.className = container.className.replace('main-navigation', 'main-small-navigation');
		}
	};
})(); //
// Author: Carl Flint
//
/**
 * mobileNav.js
 *
 * Handles toggling the navigation menu for small screens.
 */

(0, _jquery2.default)(document).ready(function () {
	(0, _jquery2.default)('.better-responsive-menu #site-navigation .menu-item-has-children').append('<span class="sub-toggle"> <span class="genericon genericon-expand"></span> </span>');
	(0, _jquery2.default)('.better-responsive-menu #site-navigation .sub-toggle').click(function () {
		(0, _jquery2.default)(this).parent('.menu-item-has-children').children('ul.sub-menu').first().slideToggle('1000');
		(0, _jquery2.default)(this).children('<span class="genericon genericon-rightarrow"></span>').first().toggleClass('<span class="genericon genericon-expand"></span>');
		(0, _jquery2.default)(this).toggleClass('active');
	});
});

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

/*to top button appeasrs after scroll down*/
$(window).scroll(function () {
  if ($(this).scrollTop() > 250) {
    $('#to-top').stop(true, true).fadeIn();
  } else {
    $('#to-top').stop(true, true).fadeOut();
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
App container view
*/
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    //this.state = {};
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "react-app-container" },
        this.props.children
      );
    }
  }]);

  return App;
}(React.Component);

exports.default = App;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _navbar = __webpack_require__(79);

var _navbar2 = _interopRequireDefault(_navbar);

var _toTop = __webpack_require__(80);

var _toTop2 = _interopRequireDefault(_toTop);

var _footer = __webpack_require__(78);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               React main component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

//import TopNav from '../component/topNav.jsx';


var Club = function (_React$Component) {
  _inherits(Club, _React$Component);

  function Club(props) {
    _classCallCheck(this, Club);

    var _this = _possibleConstructorReturn(this, (Club.__proto__ || Object.getPrototypeOf(Club)).call(this, props));

    _this.style = {};

    // this.state = {

    // };
    return _this;
  }

  _createClass(Club, [{
    key: 'render',
    value: function render() {
      var content = React.createElement(
        'div',
        null,
        React.createElement(_navbar2.default, null),
        React.createElement(
          'h1',
          { className: 'container' },
          'Place holder for Clubs'
        ),
        React.createElement(_toTop2.default, null),
        React.createElement(_footer2.default, null)
      );

      return content;
    }
  }]);

  return Club;
}(React.Component);

exports.default = Club;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactBootstrapCarousel = __webpack_require__(443);

__webpack_require__(425);

__webpack_require__(426);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               React carousel component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

//import Slider from 'react-slick';


var Carousel = function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));
  }

  _createClass(Carousel, [{
    key: 'onSelect',
    value: function onSelect(active, direction) {
      console.log('active=' + active + ' && direction=' + direction);
    }
  }, {
    key: 'render',
    value: function render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      var content = React.createElement(
        'div',
        { className: 'carouselWrapper' },
        React.createElement(
          _reactBootstrapCarousel.React_Bootstrap_Carousel,
          {
            animation: true,
            onSelect: this.onSelect,
            className: 'carousel-fade'
          },
          React.createElement('div', { id: 'slide1', className: 'carouselItem', style: { height: 700, width: "100%", backgroundColor: "skyblue" } }),
          React.createElement('div', { id: 'slide2', className: 'carouselItem', style: { height: 700, width: "100%", backgroundColor: "aqua" } }),
          React.createElement('div', { id: 'slide3', className: 'carouselItem', style: { height: 700, width: "100%", backgroundColor: "lightpink" } })
        )
      );

      return content;
    }
  }]);

  return Carousel;
}(React.Component);

exports.default = Carousel;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
home content component
*/
var Content = function (_React$Component) {
    _inherits(Content, _React$Component);

    function Content(props) {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));
    }

    _createClass(Content, [{
        key: "render",
        value: function render() {

            var content = React.createElement(
                "div",
                { className: "homeContent" },
                React.createElement(
                    "section",
                    { className: "figure-nest row" },
                    React.createElement(
                        "figure",
                        { className: "effect-move" },
                        React.createElement(
                            "a",
                            { href: "/WiHD/#clubs" },
                            React.createElement("img", { id: "placeHolder1" }),
                            React.createElement(
                                "div",
                                { className: "floater text-vertical-center" },
                                React.createElement(
                                    "h3",
                                    null,
                                    "Walking Clubs"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "figure",
                        { className: "effect-move" },
                        React.createElement(
                            "a",
                            { href: "/WiHD/#map" },
                            React.createElement("img", { id: "walkWicomicoLogo" }),
                            React.createElement(
                                "div",
                                { className: "floater text-vertical-center" },
                                React.createElement(
                                    "h3",
                                    null,
                                    "View Trail Maps"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "figure",
                        { className: "effect-move" },
                        React.createElement(
                            "a",
                            { href: "/WiHD/#events" },
                            React.createElement("img", { id: "placeHolder2" }),
                            React.createElement(
                                "div",
                                { className: "floater text-vertical-center" },
                                React.createElement(
                                    "h3",
                                    null,
                                    "Events"
                                )
                            )
                        )
                    )
                )
            );

            return content;
        }
    }]);

    return Content;
}(React.Component);

exports.default = Content;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactBurgerMenu = __webpack_require__(445);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               React mobile nav component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var MobileNav = function (_React$Component) {
  _inherits(MobileNav, _React$Component);

  function MobileNav(props) {
    _classCallCheck(this, MobileNav);

    var _this = _possibleConstructorReturn(this, (MobileNav.__proto__ || Object.getPrototypeOf(MobileNav)).call(this, props));

    _this.style = {};

    _this.state = {};
    return _this;
  }

  _createClass(MobileNav, [{
    key: "showSettings",
    value: function showSettings(event) {
      event.prefentDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var content = React.createElement(
        "div",
        null,
        React.createElement(
          _reactBurgerMenu.slide,
          { right: true },
          React.createElement(
            "ul",
            { className: "menunav-menu cz-color-4473924" },
            React.createElement(
              "li",
              { className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children current-menu-item current_page_item menu-item-home menu-item-50 cz-color-4473924 cz-color-15131873" },
              React.createElement(
                "a",
                { href: "/WiHD/", className: "cz-color-4473924" },
                "Wicomico Trails 101"
              ),
              React.createElement(
                "ul",
                { className: "sub-menu cz-color-4473924" },
                React.createElement(
                  "li",
                  { id: "menu-item-90", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-90 cz-color-4473924" },
                  React.createElement(
                    "a",
                    { href: "/WiHD/", className: "cz-color-4473924 cz-color-16777215" },
                    "Health Benefits"
                  )
                ),
                React.createElement(
                  "li",
                  { id: "menu-item-51", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-51 cz-color-4473924" },
                  React.createElement(
                    "a",
                    { href: "/WiHD/", className: "cz-color-4473924 cz-color-16777215" },
                    "Trail Etiquette"
                  )
                ),
                React.createElement(
                  "li",
                  { id: "menu-item-362", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-362 cz-color-4473924" },
                  React.createElement(
                    "a",
                    { href: "/WiHD/", className: "cz-color-4473924 cz-color-16777215" },
                    "Get Involved"
                  )
                ),
                React.createElement(
                  "li",
                  { id: "menu-item-74", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-74 cz-color-4473924" },
                  React.createElement(
                    "a",
                    { href: "/WiHD/", className: "cz-color-4473924 cz-color-16777215" },
                    "Contact Us"
                  )
                )
              ),
              React.createElement(
                "span",
                { className: "sub-toggle cz-color-4473924" },
                React.createElement("span", { className: "genericon genericon-expand cz-color-4473924" })
              )
            ),
            React.createElement(
              "li",
              { className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-48 cz-color-4473924 cz-color-15131873" },
              React.createElement(
                "a",
                { href: "/WiHD/#map", className: "cz-color-16777215 cz-color-14717251" },
                "Trail Maps"
              )
            ),
            React.createElement(
              "li",
              { id: "menu-item-53", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-53 cz-color-4473924 cz-color-15131873" },
              React.createElement(
                "a",
                { href: "/WiHD/#events", className: "cz-color-4473924" },
                "Events"
              ),
              React.createElement(
                "ul",
                { className: "sub-menu cz-color-4473924" },
                React.createElement(
                  "li",
                  { id: "menu-item-177", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-177 cz-color-4473924" },
                  React.createElement(
                    "a",
                    { href: "http://www.pembertonpark.org/pemberton-park/index.htm", className: "cz-color-4473924 cz-color-16777215" },
                    "Pemberton Park"
                  )
                ),
                React.createElement(
                  "li",
                  { id: "menu-item-177", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-177 cz-color-4473924" },
                  React.createElement(
                    "a",
                    { href: "http://www.wicomicorecandparks.org/parks-and-facilities/winterplace-park-and-equestrian-center", className: "cz-color-4473924 cz-color-16777215" },
                    "Winterplace Park"
                  )
                ),
                React.createElement(
                  "li",
                  { id: "menu-item-117", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-117 cz-color-4473924" },
                  React.createElement(
                    "a",
                    { href: "http://www.salisburyzoo.org/", className: "cz-color-4473924 cz-color-16777215" },
                    "Salisbury Municipal Park"
                  )
                )
              ),
              React.createElement(
                "span",
                { className: "sub-toggle cz-color-4473924" },
                React.createElement("span", { className: "genericon genericon-expand cz-color-4473924" })
              )
            ),
            React.createElement(
              "li",
              { id: "menu-item-49", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-49 cz-color-4473924 cz-color-15131873" },
              React.createElement(
                "a",
                { href: "/WiHD/#clubs", className: "cz-color-4473924" },
                "Walking Clubs"
              ),
              React.createElement(
                "span",
                { className: "sub-toggle cz-color-4473924" },
                React.createElement("span", { className: "genericon genericon-expand cz-color-4473924" })
              )
            )
          )
        )
      );

      return content;
    }
  }]);

  return MobileNav;
}(React.Component);

exports.default = MobileNav;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
React nav component
*/

var TopNav = function (_React$Component) {
  _inherits(TopNav, _React$Component);

  function TopNav(props) {
    _classCallCheck(this, TopNav);

    var _this = _possibleConstructorReturn(this, (TopNav.__proto__ || Object.getPrototypeOf(TopNav)).call(this, props));

    _this.style = {};

    _this.state = {};
    return _this;
  }

  _createClass(TopNav, [{
    key: "showSettings",
    value: function showSettings(event) {
      event.prefentDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var content = React.createElement(
        "div",
        null,
        React.createElement(
          "ul",
          { className: "menunav-menu cz-color-4473924" },
          React.createElement(
            "li",
            { className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children current-menu-item current_page_item menu-item-home menu-item-50 cz-color-4473924 cz-color-15131873" },
            React.createElement(
              "a",
              { href: "/WiHD/", className: "cz-color-4473924" },
              "Wicomico Trails 101"
            ),
            React.createElement(
              "ul",
              { className: "sub-menu cz-color-4473924" },
              React.createElement(
                "li",
                { id: "menu-item-90", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-90 cz-color-4473924" },
                React.createElement(
                  "a",
                  { href: "/WiHD/", className: "cz-color-4473924 cz-color-16777215" },
                  "Health Benefits"
                )
              ),
              React.createElement(
                "li",
                { id: "menu-item-51", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-51 cz-color-4473924" },
                React.createElement(
                  "a",
                  { href: "/WiHD/", className: "cz-color-4473924 cz-color-16777215" },
                  "Trail Etiquette"
                )
              ),
              React.createElement(
                "li",
                { id: "menu-item-362", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-362 cz-color-4473924" },
                React.createElement(
                  "a",
                  { href: "/WiHD/", className: "cz-color-4473924 cz-color-16777215" },
                  "Get Involved"
                )
              ),
              React.createElement(
                "li",
                { id: "menu-item-74", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-74 cz-color-4473924" },
                React.createElement(
                  "a",
                  { href: "/WiHD/", className: "cz-color-4473924 cz-color-16777215" },
                  "Contact Us"
                )
              )
            ),
            React.createElement(
              "span",
              { className: "sub-toggle cz-color-4473924" },
              " ",
              React.createElement("span", { className: "genericon genericon-expand cz-color-4473924" }),
              " "
            )
          ),
          React.createElement(
            "li",
            { className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-48 cz-color-4473924 cz-color-15131873" },
            React.createElement(
              "a",
              { href: "/WiHD/#map", className: "cz-color-16777215 cz-color-14717251" },
              "Trail Maps"
            )
          ),
          React.createElement(
            "li",
            { id: "menu-item-53", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-53 cz-color-4473924 cz-color-15131873" },
            React.createElement(
              "a",
              { href: "/WiHD/#events", className: "cz-color-4473924" },
              "Events"
            ),
            React.createElement(
              "ul",
              { className: "sub-menu cz-color-4473924" },
              React.createElement(
                "li",
                { id: "menu-item-177", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-177 cz-color-4473924" },
                React.createElement(
                  "a",
                  { href: "http://www.pembertonpark.org/pemberton-park/index.htm", className: "cz-color-4473924 cz-color-16777215" },
                  "Pemberton Park"
                )
              ),
              React.createElement(
                "li",
                { id: "menu-item-177", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-177 cz-color-4473924" },
                React.createElement(
                  "a",
                  { href: "http://www.wicomicorecandparks.org/parks-and-facilities/winterplace-park-and-equestrian-center", className: "cz-color-4473924 cz-color-16777215" },
                  "Winterplace Park"
                )
              ),
              React.createElement(
                "li",
                { id: "menu-item-117", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-117 cz-color-4473924" },
                React.createElement(
                  "a",
                  { href: "http://www.salisburyzoo.org/", className: "cz-color-4473924 cz-color-16777215" },
                  "Salisbury Municipal Park"
                )
              )
            ),
            React.createElement(
              "span",
              { className: "sub-toggle cz-color-4473924" },
              " ",
              React.createElement("span", { className: "genericon genericon-expand cz-color-4473924" }),
              " "
            )
          ),
          React.createElement(
            "li",
            { id: "menu-item-49", className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-49 cz-color-4473924 cz-color-15131873" },
            React.createElement(
              "a",
              { href: "/WiHD/#clubs", className: "cz-color-4473924" },
              "Walking Clubs"
            ),
            React.createElement(
              "span",
              { className: "sub-toggle cz-color-4473924" },
              " ",
              React.createElement("span", { className: "genericon genericon-expand cz-color-4473924" }),
              " "
            )
          )
        )
      );

      return content;
    }
  }]);

  return TopNav;
}(React.Component);

exports.default = TopNav;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _navbar = __webpack_require__(79);

var _navbar2 = _interopRequireDefault(_navbar);

var _toTop = __webpack_require__(80);

var _toTop2 = _interopRequireDefault(_toTop);

var _footer = __webpack_require__(78);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               React main component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
// import TopNav from '../component/nav.jsx';


var Event = function (_React$Component) {
  _inherits(Event, _React$Component);

  function Event(props) {
    _classCallCheck(this, Event);

    var _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));

    _this.style = {};

    // this.state = {

    // };
    return _this;
  }

  _createClass(Event, [{
    key: 'render',
    value: function render() {
      var content = React.createElement(
        'div',
        null,
        React.createElement(_navbar2.default, null),
        React.createElement(
          'h1',
          { className: 'container' },
          'Place holder for Events'
        ),
        React.createElement(_toTop2.default, null),
        React.createElement(_footer2.default, null)
      );

      return content;
    }
  }]);

  return Event;
}(React.Component);

exports.default = Event;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _navbar = __webpack_require__(79);

var _navbar2 = _interopRequireDefault(_navbar);

var _carousel = __webpack_require__(221);

var _carousel2 = _interopRequireDefault(_carousel);

var _mainBody = __webpack_require__(222);

var _mainBody2 = _interopRequireDefault(_mainBody);

var _toTop = __webpack_require__(80);

var _toTop2 = _interopRequireDefault(_toTop);

var _footer = __webpack_require__(78);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               React main component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

//import TopNav from '../component/nav.jsx';


var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.style = {};

    // this.state = {

    // };
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var content = React.createElement(
        'div',
        null,
        React.createElement(_navbar2.default, null),
        React.createElement(_carousel2.default, null),
        React.createElement(_mainBody2.default, null),
        React.createElement(_toTop2.default, null),
        React.createElement(_footer2.default, null)
      );

      return content;
    }
  }]);

  return Home;
}(React.Component);

exports.default = Home;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Backbone, ReactDOM, React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = __webpack_require__(219);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Backbone.View.extend({
  el: '#wrapper',
  render: function render(currentView) {
    ReactDOM.render(React.createElement(
      _app2.default,
      null,
      currentView
    ), this.el);
  }
}); /*
    Backbone MainView
    */
//require react view
// import Page from './component/page.jsx';
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75), __webpack_require__(76), __webpack_require__(10)))

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _navbar = __webpack_require__(79);

var _navbar2 = _interopRequireDefault(_navbar);

var _toTop = __webpack_require__(80);

var _toTop2 = _interopRequireDefault(_toTop);

var _footer = __webpack_require__(78);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               React main component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
// import TopNav from '../component/nav.jsx';


var Map = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    _classCallCheck(this, Map);

    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

    _this.state = {};

    return _this;
  }

  _createClass(Map, [{
    key: 'render',
    value: function render() {
      var content = React.createElement(
        'div',
        null,
        React.createElement(_navbar2.default, null),
        React.createElement(
          'h1',
          { className: 'container' },
          'Placeholder for Map component'
        ),
        React.createElement('div', { id: 'map' }),
        React.createElement(_toTop2.default, null),
        React.createElement(_footer2.default, null)
      );

      return content;
    }
  }]);

  return Map;
}(React.Component);

exports.default = Map;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(209);
module.exports = __webpack_require__(208);


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
base controller
*/

var Controller = function () {
  function Controller(options) {
    _classCallCheck(this, Controller);

    Object.assign(this, options);
    var _mainView = this.app._mainView;

    this.viewPort = _mainView;
    this._currentRoute = '';
  }

  ///end of action methods
  //////////////////////


  ///private functions


  _createClass(Controller, [{
    key: 'navigateTo',
    value: function navigateTo(url) {
      if (typeof this._router === 'undefined') this._router = this.app.router;
      this._router.navigate(url, { replace: true });
    }
  }, {
    key: 'currentRoute',
    get: function get() {
      return this._currentRoute;
    }
  }]);

  return Controller;
}();

exports.default = Controller;

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
Footer component
*/

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.style = {};

    // this.state = {

    // };
    return _this;
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var content = React.createElement(
        "div",
        { className: "navbar navbar-fixed-bottom" },
        React.createElement(
          "div",
          { className: "footer-bottom transition-all" },
          React.createElement(
            "div",
            { className: "container-fluid" },
            React.createElement("hr", null),
            React.createElement(
              "ul",
              { className: "list-inline pull-left", id: "walkWico" },
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#", target: "_blank" },
                  React.createElement("i", { id: "footLogo" })
                )
              )
            ),
            React.createElement(
              "ul",
              { className: "list-inline", id: "wicomicoCrest" },
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#", target: "_blank" },
                  React.createElement("i", { id: "wicoCrest" })
                )
              )
            ),
            React.createElement(
              "ul",
              { className: "list-inline pull-right", id: "socialMedia" },
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#", target: "_blank" },
                  React.createElement("i", { className: "fa fa-twitter fa-fw fa-3x" })
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#", target: "_blank" },
                  React.createElement("i", { className: "fa fa-facebook fa-fw fa-3x" })
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#", target: "_blank" },
                  React.createElement("i", { className: "fa fa-youtube fa-fw fa-3x" })
                )
              )
            )
          )
        )
      );

      return content;
    }
  }]);

  return Footer;
}(React.Component);

exports.default = Footer;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _topNav = __webpack_require__(224);

var _topNav2 = _interopRequireDefault(_topNav);

var _nav = __webpack_require__(223);

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               navbar component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.style = {};

    _this.state = {};
    return _this;
  }

  _createClass(Navbar, [{
    key: 'showSettings',
    value: function showSettings(event) {
      event.prefentDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var content = React.createElement(
        'div',
        { className: 'header-wrap clearfix' },
        React.createElement(
          'div',
          { className: 'site-branding' },
          React.createElement(
            'h1',
            { className: 'site-title' },
            React.createElement(
              'a',
              { href: '/WiHD/', title: 'Walk Wicomico' },
              'Walk Wicomico'
            )
          )
        ),
        React.createElement(
          'nav',
          { id: 'site-navigation', className: 'main-navigation', role: 'navigation' },
          React.createElement(_topNav2.default, null),
          React.createElement(_nav2.default, null)
        )
      );

      return content;
    }
  }]);

  return Navbar;
}(React.Component);

exports.default = Navbar;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
return to top button component
*/

var ToTop = function (_React$Component) {
  _inherits(ToTop, _React$Component);

  function ToTop(props) {
    _classCallCheck(this, ToTop);

    var _this = _possibleConstructorReturn(this, (ToTop.__proto__ || Object.getPrototypeOf(ToTop)).call(this, props));

    _this.style = {};

    _this.state = {
      intervalId: 0
    };
    return _this;
  }

  _createClass(ToTop, [{
    key: "scrollStep",
    value: function scrollStep() {
      if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      var intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var content = React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { id: "to-top", className: "btn btn-dark btn-lg", onClick: function onClick() {
              _this2.scrollToTop();
            } },
          React.createElement("i", { className: "fa fa-chevron-up fa-fw fa-1x" })
        )
      );

      return content;
    }
  }]);

  return ToTop;
}(React.Component);

exports.default = ToTop;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ })

},[543]);
//# sourceMappingURL=home-bundle.js.map