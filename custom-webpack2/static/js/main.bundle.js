webpackJsonp([0],{

/***/ 228:
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** multi ./js/app.js ./scss/main.scss ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/app.js */95);
module.exports = __webpack_require__(/*! ./scss/main.scss */96);


/***/ }),

/***/ 95:
/* unknown exports provided */
/* all exports used */
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 62);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__(/*! ./components/Header */ 99);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Clock__ = __webpack_require__(/*! ./components/Clock */ 98);\n\n\n\n// or I can import just the render method\n//import { render } from 'react-dom';\n\n// import { BrowserRouter, Match, Miss } from 'react-router';\n\n\n// import ProductList from './components/ProductList';\n\n// import NotFound from './components/NotFound';\n\n// import { formatPrice } from './extra';\n\nfunction tick() {\n\t__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t'div',\n\t\tnull,\n\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__[\"a\" /* default */], { color: 'red' }),\n\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Clock__[\"a\" /* default */], { date: new Date() })\n\t), document.getElementById('root'));\n}\nsetInterval(tick, 1000);\n\n// const Root = () => {\n// \t return (\n// \t\t\t<BrowserRouter>\n// \t\t\t\t<div>\n// \t\t\t\t\t<p><a href=\"/\">products</a></p>\n// \t\t\t\t\t<p><a href=\"/head\">head</a></p>\n// \t\t\t\t\t<Match exactly pattern=\"/\" component={Clock} />\n// \t\t\t\t\t<Match exactly pattern=\"/head\" component={Header} />\n// \t\t\t\t\t<Miss component={NotFound} />\n// \t\t\t\t</div>\n// \t\t\t</BrowserRouter>\n// \t);\n// };\n\n// ReactDOM.render(<Root />, document.querySelector('#root'));\n\n// const name = \"Mono\";\n// // if I imported just the render method\n// //render(<h1>mama</h1>, document.querySelector('#root'));\n// ReactDOM.render(\n// \t<div>\n// \t\t<Clock />\n// \t\t<ProductList />\n// \t\t<Header/>\n// \t\t<h1>Hello {name}, again!</h1>\n// \t\t<h2>{`the name is ${name}`}</h2>\n// \t\t<h3>{formatPrice(1233)}</h3>\n// \t</div>,\n// \tdocument.getElementById('root')\n// );\n\n// export default Root;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz83MTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuLy8gb3IgSSBjYW4gaW1wb3J0IGp1c3QgdGhlIHJlbmRlciBtZXRob2Rcbi8vaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuLy8gaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgTWF0Y2gsIE1pc3MgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuLy8gaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdCc7XG5pbXBvcnQgQ2xvY2sgZnJvbSAnLi9jb21wb25lbnRzL0Nsb2NrJztcbi8vIGltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuXG4vLyBpbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4vZXh0cmEnO1xuXG5mdW5jdGlvbiB0aWNrICgpIHtcblx0IFJlYWN0RE9NLnJlbmRlcihcblx0XHQgPGRpdj5cblx0XHRcdCA8SGVhZGVyIGNvbG9yPVwicmVkXCIgLz5cblx0XHRcdCA8Q2xvY2sgZGF0ZT17bmV3IERhdGUoKX0vPlxuXHRcdCA8L2Rpdj4sXG5cdFx0IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcblx0ICk7XG59XG5zZXRJbnRlcnZhbCh0aWNrLCAxMDAwKTtcblxuLy8gY29uc3QgUm9vdCA9ICgpID0+IHtcbi8vIFx0IHJldHVybiAoXG4vLyBcdFx0XHQ8QnJvd3NlclJvdXRlcj5cbi8vIFx0XHRcdFx0PGRpdj5cbi8vIFx0XHRcdFx0XHQ8cD48YSBocmVmPVwiL1wiPnByb2R1Y3RzPC9hPjwvcD5cbi8vIFx0XHRcdFx0XHQ8cD48YSBocmVmPVwiL2hlYWRcIj5oZWFkPC9hPjwvcD5cbi8vIFx0XHRcdFx0XHQ8TWF0Y2ggZXhhY3RseSBwYXR0ZXJuPVwiL1wiIGNvbXBvbmVudD17Q2xvY2t9IC8+XG4vLyBcdFx0XHRcdFx0PE1hdGNoIGV4YWN0bHkgcGF0dGVybj1cIi9oZWFkXCIgY29tcG9uZW50PXtIZWFkZXJ9IC8+XG4vLyBcdFx0XHRcdFx0PE1pc3MgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbi8vIFx0XHRcdFx0PC9kaXY+XG4vLyBcdFx0XHQ8L0Jyb3dzZXJSb3V0ZXI+XG4vLyBcdCk7XG4vLyB9O1xuXG4vLyBSZWFjdERPTS5yZW5kZXIoPFJvb3QgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JykpO1xuXG4vLyBjb25zdCBuYW1lID0gXCJNb25vXCI7XG4vLyAvLyBpZiBJIGltcG9ydGVkIGp1c3QgdGhlIHJlbmRlciBtZXRob2Rcbi8vIC8vcmVuZGVyKDxoMT5tYW1hPC9oMT4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JykpO1xuLy8gUmVhY3RET00ucmVuZGVyKFxuLy8gXHQ8ZGl2PlxuLy8gXHRcdDxDbG9jayAvPlxuLy8gXHRcdDxQcm9kdWN0TGlzdCAvPlxuLy8gXHRcdDxIZWFkZXIvPlxuLy8gXHRcdDxoMT5IZWxsbyB7bmFtZX0sIGFnYWluITwvaDE+XG4vLyBcdFx0PGgyPntgdGhlIG5hbWUgaXMgJHtuYW1lfWB9PC9oMj5cbi8vIFx0XHQ8aDM+e2Zvcm1hdFByaWNlKDEyMzMpfTwvaDM+XG4vLyBcdDwvZGl2Pixcbi8vIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuLy8gKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgUm9vdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

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
/* exports used: default */
/*!********************************!*\
  !*** ./js/components/Clock.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar Clock = function (_React$Component) {\n    _inherits(Clock, _React$Component);\n\n    function Clock() {\n        _classCallCheck(this, Clock);\n\n        return _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).apply(this, arguments));\n    }\n\n    _createClass(Clock, [{\n        key: 'render',\n        value: function render() {\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                null,\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    'h2',\n                    null,\n                    'Big Clock'\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    'p',\n                    null,\n                    'It is ',\n                    this.props.date.toLocaleTimeString(),\n                    '.'\n                )\n            );\n        }\n    }]);\n\n    return Clock;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\nClock.propTypes = {\n    date: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.instanceOf(Date)\n    // also works, more generic\n    // date: React.PropTypes.Object\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = Clock;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvQ2xvY2suanM/MmQwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBDbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPkJpZyBDbG9jazwvaDI+XG4gICAgICAgICAgICA8cD5JdCBpcyB7dGhpcy5wcm9wcy5kYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfS48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5DbG9jay5wcm9wVHlwZXMgPSB7XG4gICAgZGF0ZTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSlcbiAgICAvLyBhbHNvIHdvcmtzLCBtb3JlIGdlbmVyaWNcbiAgICAvLyBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMuT2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbG9jaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9DbG9jay5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBOzs7O0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 99:
/* exports provided: default */
/* exports used: default */
/*!*********************************!*\
  !*** ./js/components/Header.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n\n\n// stateless functional component\nvar Header = function Header(props) {\n  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n    \"header\",\n    { className: \"top\" },\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      \"h1\",\n      null,\n      \"Favorite color is \",\n      props.color\n    ),\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      \"div\",\n      { className: \"bg1\" },\n      \"Backgound 1\"\n    ),\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      \"div\",\n      { className: \"bg2\" },\n      \"Backgound 1\"\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = Header;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvSGVhZGVyLmpzP2Q1YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gc3RhdGVsZXNzIGZ1bmN0aW9uYWwgY29tcG9uZW50XG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ0b3BcIj5cbiAgICAgIDxoMT5GYXZvcml0ZSBjb2xvciBpcyB7IHByb3BzLmNvbG9yIH08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZzFcIj5CYWNrZ291bmQgMTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZzJcIj5CYWNrZ291bmQgMTwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQ0E7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

},[228]);