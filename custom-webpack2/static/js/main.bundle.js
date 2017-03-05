webpackJsonp([0],{

/***/ 100:
/* exports provided: default */
/*!**************************************!*\
  !*** ./js/components/ProductList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__seed__ = __webpack_require__(/*! ../seed */ 102);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__seed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__seed__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Product__ = __webpack_require__(/*! ./Product */ 99);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar ProductList = function (_React$Component) {\n    _inherits(ProductList, _React$Component);\n\n    function ProductList(props) {\n        _classCallCheck(this, ProductList);\n\n        var _this = _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).call(this, props));\n\n        _this.handleProductUpvote = _this.handleProductUpvote.bind(_this);\n        _this.state = {\n            products: []\n        };\n        return _this;\n    }\n\n    _createClass(ProductList, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.setState({ products: __WEBPACK_IMPORTED_MODULE_1__seed___default.a });\n        }\n    }, {\n        key: 'handleProductUpvote',\n        value: function handleProductUpvote(productId) {\n            var products = [].concat(_toConsumableArray(this.state.products));\n            products.map(function (product) {\n                if (product.id === productId) {\n                    product.votes += 1;\n                }\n                return product;\n            });\n            this.setState({ products: products });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            // not using state\n            // const productComponents = sampleProducts.map((product) => (\n            // using state\n            var productComponents = this.state.products.map(function (product) {\n                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Product__[\"a\" /* default */], { key: 'product-' + product.id,\n                    id: product.id,\n                    title: product.title,\n                    votes: product.votes,\n                    onVote: _this2.handleProductUpvote,\n                    description: product.description });\n            });\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                { className: 'ui unstackable items' },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    'h2',\n                    null,\n                    'Product List from map in const'\n                ),\n                productComponents\n            );\n        }\n    }]);\n\n    return ProductList;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* unused harmony default export */ var _unused_webpack_default_export = ProductList;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzP2FhZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHNhbXBsZVByb2R1Y3RzIGZyb20gJy4uL3NlZWQnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcblxuY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUHJvZHVjdFVwdm90ZSA9IHRoaXMuaGFuZGxlUHJvZHVjdFVwdm90ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcHJvZHVjdHM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdHM6IHNhbXBsZVByb2R1Y3RzIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVByb2R1Y3RVcHZvdGUgKHByb2R1Y3RJZCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi50aGlzLnN0YXRlLnByb2R1Y3RzXTtcbiAgICAgICAgcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdC5pZCA9PT0gcHJvZHVjdElkKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdC52b3RlcyArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3Q7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdHMgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgLy8gbm90IHVzaW5nIHN0YXRlXG4gICAgICAgIC8vIGNvbnN0IHByb2R1Y3RDb21wb25lbnRzID0gc2FtcGxlUHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgIC8vIHVzaW5nIHN0YXRlXG4gICAgICAgIGNvbnN0IHByb2R1Y3RDb21wb25lbnRzID0gdGhpcy5zdGF0ZS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICA8UHJvZHVjdCBrZXk9e2Bwcm9kdWN0LSR7cHJvZHVjdC5pZH1gfVxuICAgICAgICAgICAgaWQ9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICB0aXRsZT17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICAgIHZvdGVzPXtwcm9kdWN0LnZvdGVzfVxuICAgICAgICAgICAgb25Wb3RlPXt0aGlzLmhhbmRsZVByb2R1Y3RVcHZvdGV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvZHVjdC5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgKSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHVuc3RhY2thYmxlIGl0ZW1zXCI+XG4gICAgICAgICAgICAgIDxoMj5Qcm9kdWN0IExpc3QgZnJvbSBtYXAgaW4gY29uc3Q8L2gyPlxuICAgICAgICAgICAgICB7cHJvZHVjdENvbXBvbmVudHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBOzs7O0FBMUNBO0FBQ0E7QUE0Q0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 101:
/* exports provided: formatPrice */
/*!*********************!*\
  !*** ./js/extra.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export formatPrice */\nfunction formatPrice(cents) {\n    return '$' + (cents / 100).toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9leHRyYS5qcz81NWI3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZSAoY2VudHMpIHtcbiAgICByZXR1cm4gYCQkeyhjZW50cyAvIDEwMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWA7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2V4dHJhLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 102:
/* unknown exports provided */
/* exports used: default */
/*!********************!*\
  !*** ./js/seed.js ***!
  \********************/
/***/ (function(module, exports) {

eval("/*global module:true*/\n\n// const products = [\nmodule.exports = [{\n    id: 1,\n    title: 'yellow tile',\n    description: 'a good old yellow tile',\n    url: '#',\n    votes: 3\n}, {\n    id: 2,\n    title: 'red monkey',\n    description: 'a monkey of a redish color',\n    url: '#',\n    votes: 1\n}, {\n    id: 3,\n    title: 'black horse',\n    description: 'this horse knows how to tango',\n    url: '#',\n    votes: 15\n}];\n\n// export default products;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9zZWVkLmpzPzU3NTEiXSwic291cmNlc0NvbnRlbnQiOlsiLypnbG9iYWwgbW9kdWxlOnRydWUqL1xuXG4vLyBjb25zdCBwcm9kdWN0cyA9IFtcbm1vZHVsZS5leHBvcnRzID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiAneWVsbG93IHRpbGUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ2EgZ29vZCBvbGQgeWVsbG93IHRpbGUnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdm90ZXM6IDNcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHRpdGxlOiAncmVkIG1vbmtleScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnYSBtb25rZXkgb2YgYSByZWRpc2ggY29sb3InLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdm90ZXM6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHRpdGxlOiAnYmxhY2sgaG9yc2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ3RoaXMgaG9yc2Uga25vd3MgaG93IHRvIHRhbmdvJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHZvdGVzOiAxNVxuICAgIH1cbl07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9zZWVkLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBUUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 227:
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** multi ./js/app.js ./scss/main.scss ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/app.js */95);
module.exports = __webpack_require__(/*! ./scss/main.scss */96);


/***/ }),

/***/ 234:
/* exports provided: default */
/* exports used: default */
/*!********************************!*\
  !*** ./js/components/Clock.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar Clock = function (_React$Component) {\n    _inherits(Clock, _React$Component);\n\n    function Clock() {\n        _classCallCheck(this, Clock);\n\n        return _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).apply(this, arguments));\n    }\n\n    _createClass(Clock, [{\n        key: 'render',\n        value: function render() {\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                null,\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    'h2',\n                    null,\n                    'Big Clock'\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    'p',\n                    null,\n                    'It is ',\n                    this.props.date.toLocaleTimeString(),\n                    '.'\n                )\n            );\n        }\n    }]);\n\n    return Clock;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\nClock.propTypes = {\n    date: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.instanceOf(Date)\n    // also works, more generic\n    // date: React.PropTypes.Object\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = Clock;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL0Nsb2NrLmpzPzJkMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQ2xvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5CaWcgQ2xvY2s8L2gyPlxuICAgICAgICAgICAgPHA+SXQgaXMge3RoaXMucHJvcHMuZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX0uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ2xvY2sucHJvcFR5cGVzID0ge1xuICAgIGRhdGU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpXG4gICAgLy8gYWxzbyB3b3JrcywgbW9yZSBnZW5lcmljXG4gICAgLy8gZGF0ZTogUmVhY3QuUHJvcFR5cGVzLk9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvY2s7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvQ2xvY2suanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTs7OztBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 95:
/* unknown exports provided */
/* all exports used */
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 62);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__(/*! ./components/Header */ 98);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ProductList__ = __webpack_require__(/*! ./components/ProductList */ 100);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Clock__ = __webpack_require__(/*! ./components/Clock */ 234);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extra__ = __webpack_require__(/*! ./extra */ 101);\n\n\n\n// or I can import just the render method\n//import { render } from 'react-dom';\n\n// import { BrowserRouter, Match, Miss } from 'react-router';\n\n\n\n\n// import NotFound from './components/NotFound';\n\n\n\nfunction tick() {\n\t__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Clock__[\"a\" /* default */], { date: new Date() }), document.getElementById('root'));\n}\nsetInterval(tick, 1000);\n\n// const Root = () => {\n// \t return (\n// \t\t\t<BrowserRouter>\n// \t\t\t\t<div>\n// \t\t\t\t\t<p><a href=\"/\">products</a></p>\n// \t\t\t\t\t<p><a href=\"/head\">head</a></p>\n// \t\t\t\t\t<Match exactly pattern=\"/\" component={Clock} />\n// \t\t\t\t\t<Match exactly pattern=\"/head\" component={Header} />\n// \t\t\t\t\t<Miss component={NotFound} />\n// \t\t\t\t</div>\n// \t\t\t</BrowserRouter>\n// \t);\n// };\n\n// ReactDOM.render(<Root />, document.querySelector('#root'));\n\n// const name = \"Mono\";\n// // if I imported just the render method\n// //render(<h1>mama</h1>, document.querySelector('#root'));\n// ReactDOM.render(\n// \t<div>\n// \t\t<Clock />\n// \t\t<ProductList />\n// \t\t<Header/>\n// \t\t<h1>Hello {name}, again!</h1>\n// \t\t<h2>{`the name is ${name}`}</h2>\n// \t\t<h3>{formatPrice(1233)}</h3>\n// \t</div>,\n// \tdocument.getElementById('root')\n// );\n\n// export default Root;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz83MTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuLy8gb3IgSSBjYW4gaW1wb3J0IGp1c3QgdGhlIHJlbmRlciBtZXRob2Rcbi8vaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuLy8gaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgTWF0Y2gsIE1pc3MgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdCc7XG5pbXBvcnQgQ2xvY2sgZnJvbSAnLi9jb21wb25lbnRzL0Nsb2NrJztcbi8vIGltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuXG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4vZXh0cmEnO1xuXG5mdW5jdGlvbiB0aWNrICgpIHtcblx0IFJlYWN0RE9NLnJlbmRlcihcblx0XHQgPENsb2NrIGRhdGU9e25ldyBEYXRlKCl9Lz4sXG5cdFx0IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcblx0ICk7XG59XG5zZXRJbnRlcnZhbCh0aWNrLCAxMDAwKTtcblxuLy8gY29uc3QgUm9vdCA9ICgpID0+IHtcbi8vIFx0IHJldHVybiAoXG4vLyBcdFx0XHQ8QnJvd3NlclJvdXRlcj5cbi8vIFx0XHRcdFx0PGRpdj5cbi8vIFx0XHRcdFx0XHQ8cD48YSBocmVmPVwiL1wiPnByb2R1Y3RzPC9hPjwvcD5cbi8vIFx0XHRcdFx0XHQ8cD48YSBocmVmPVwiL2hlYWRcIj5oZWFkPC9hPjwvcD5cbi8vIFx0XHRcdFx0XHQ8TWF0Y2ggZXhhY3RseSBwYXR0ZXJuPVwiL1wiIGNvbXBvbmVudD17Q2xvY2t9IC8+XG4vLyBcdFx0XHRcdFx0PE1hdGNoIGV4YWN0bHkgcGF0dGVybj1cIi9oZWFkXCIgY29tcG9uZW50PXtIZWFkZXJ9IC8+XG4vLyBcdFx0XHRcdFx0PE1pc3MgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbi8vIFx0XHRcdFx0PC9kaXY+XG4vLyBcdFx0XHQ8L0Jyb3dzZXJSb3V0ZXI+XG4vLyBcdCk7XG4vLyB9O1xuXG4vLyBSZWFjdERPTS5yZW5kZXIoPFJvb3QgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JykpO1xuXG4vLyBjb25zdCBuYW1lID0gXCJNb25vXCI7XG4vLyAvLyBpZiBJIGltcG9ydGVkIGp1c3QgdGhlIHJlbmRlciBtZXRob2Rcbi8vIC8vcmVuZGVyKDxoMT5tYW1hPC9oMT4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JykpO1xuLy8gUmVhY3RET00ucmVuZGVyKFxuLy8gXHQ8ZGl2PlxuLy8gXHRcdDxDbG9jayAvPlxuLy8gXHRcdDxQcm9kdWN0TGlzdCAvPlxuLy8gXHRcdDxIZWFkZXIvPlxuLy8gXHRcdDxoMT5IZWxsbyB7bmFtZX0sIGFnYWluITwvaDE+XG4vLyBcdFx0PGgyPntgdGhlIG5hbWUgaXMgJHtuYW1lfWB9PC9oMj5cbi8vIFx0XHQ8aDM+e2Zvcm1hdFByaWNlKDEyMzMpfTwvaDM+XG4vLyBcdDwvZGl2Pixcbi8vIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuLy8gKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgUm9vdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 96:
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3NzL21haW4uc2Nzcz82MDVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zY3NzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 98:
/* exports provided: default */
/*!*********************************!*\
  !*** ./js/components/Header.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n\n\nvar Header = function Header(props) {\n  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n    \"header\",\n    { className: \"top\" },\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      \"h1\",\n      null,\n      \"A Big Header\"\n    ),\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      \"div\",\n      { className: \"bg1\" },\n      \"Backgound 1\"\n    ),\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      \"div\",\n      { className: \"bg2\" },\n      \"Backgound 1\"\n    )\n  );\n};\n\n/* unused harmony default export */ var _unused_webpack_default_export = Header;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvSGVhZGVyLmpzP2Q1YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidG9wXCI+XG4gICAgICA8aDE+QSBCaWcgSGVhZGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcxXCI+QmFja2dvdW5kIDE8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcyXCI+QmFja2dvdW5kIDE8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQ0E7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 99:
/* exports provided: default */
/* exports used: default */
/*!**********************************!*\
  !*** ./js/components/Product.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar Product = function (_React$Component) {\n    _inherits(Product, _React$Component);\n\n    function Product(props) {\n        _classCallCheck(this, Product);\n\n        var _this = _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this, props));\n        // any time we define our own custom component methods, we have to manually bind this to the component ourselves.\n\n\n        _this.handleUpvote = _this.handleUpvote.bind(_this);\n        return _this;\n    }\n\n    _createClass(Product, [{\n        key: \"handleUpvote\",\n        value: function handleUpvote() {\n            this.props.onVote(this.props.id);\n        }\n    }, {\n        key: \"handleWithEvent\",\n        value: function handleWithEvent(e, id) {\n            // e is the event\n            console.log(\"Handle with event id: \" + id);\n            e.preventDefault();\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            var _this2 = this;\n\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { className: \"item\" },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { className: \"description\" },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"h2\",\n                        null,\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"a\",\n                            { href: \"#\" },\n                            this.props.id,\n                            \": \",\n                            this.props.title\n                        )\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"p\",\n                        null,\n                        this.props.description,\n                        \" | \",\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"a\",\n                            { href: \"#\", onClick: this.handleUpvote },\n                            this.props.votes,\n                            \" votes\"\n                        )\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"p\",\n                        null,\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"a\",\n                            { href: \"#\", onClick: function onClick(e) {\n                                    return _this2.handleWithEvent(e, _this2.props.id);\n                                } },\n                            \"Click preventing event\"\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Product;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\nProduct.propTypes = {\n    id: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,\n    title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,\n    votes: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,\n    description: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,\n    onVote: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = Product;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvUHJvZHVjdC5qcz8yNmY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICAvLyBhbnkgdGltZSB3ZSBkZWZpbmUgb3VyIG93biBjdXN0b20gY29tcG9uZW50IG1ldGhvZHMsIHdlIGhhdmUgdG8gbWFudWFsbHkgYmluZCB0aGlzIHRvIHRoZSBjb21wb25lbnQgb3Vyc2VsdmVzLlxuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVXB2b3RlID0gdGhpcy5oYW5kbGVVcHZvdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVVcHZvdGUgKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uVm90ZSh0aGlzLnByb3BzLmlkKTtcbiAgICB9XG5cbiAgICBoYW5kbGVXaXRoRXZlbnQgKGUsIGlkKSB7XG4gICAgICAgIC8vIGUgaXMgdGhlIGV2ZW50XG4gICAgICAgIGNvbnNvbGUubG9nKGBIYW5kbGUgd2l0aCBldmVudCBpZDogJHtpZH1gKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMj48YSBocmVmPVwiI1wiPnt0aGlzLnByb3BzLmlkfToge3RoaXMucHJvcHMudGl0bGV9PC9hPjwvaDI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn0gfCA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXB2b3RlfT57dGhpcy5wcm9wcy52b3Rlc30gdm90ZXM8L2E+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVXaXRoRXZlbnQoZSwgdGhpcy5wcm9wcy5pZCl9PkNsaWNrIHByZXZlbnRpbmcgZXZlbnQ8L2E+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUHJvZHVjdC5wcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2b3RlczogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBkZXNjcmlwdGlvbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblZvdGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL1Byb2R1Y3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTEE7QUFEQTtBQVlBOzs7O0FBL0JBO0FBQ0E7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

},[227]);