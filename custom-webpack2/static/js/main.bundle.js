webpackJsonp([0],{

/***/ 224:
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** multi ./js/app.js ./scss/main.scss ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/app.js */95);
module.exports = __webpack_require__(/*! ./scss/main.scss */96);


/***/ }),

/***/ 231:
/* exports provided: default */
/* exports used: default */
/*!**************************************!*\
  !*** ./js/components/ProductList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar ProductList = function (_React$Component) {\n    _inherits(ProductList, _React$Component);\n\n    function ProductList() {\n        _classCallCheck(this, ProductList);\n\n        return _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).apply(this, arguments));\n    }\n\n    _createClass(ProductList, [{\n        key: \"render\",\n        value: function render() {\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { className: \"ui unstackable items\" },\n                \"Product List here\"\n            );\n        }\n    }]);\n\n    return ProductList;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ProductList;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzP2FhZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHVuc3RhY2thYmxlIGl0ZW1zXCI+XG4gICAgICAgICAgICAgIFByb2R1Y3QgTGlzdCBoZXJlXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7OztBQVBBO0FBQ0E7QUFTQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 95:
/* unknown exports provided */
/* all exports used */
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 62);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__(/*! ./components/Header */ 98);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ProductList__ = __webpack_require__(/*! ./components/ProductList */ 231);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__extra__ = __webpack_require__(/*! ./extra */ 99);\n\n\n//import { render } from 'react-dom';\n\n\n\n\n\n__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__extra__[\"a\" /* formatPrice */])(1233);\nconsole.log('FROM VIM again with webpack2');\nconsole.log('xx');\n\n//render(<h1>mama</h1>, document.querySelector('#root'));\nvar name = \"Mono\";\n\n__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t'div',\n\tnull,\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__[\"a\" /* default */], null),\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t'h1',\n\t\tnull,\n\t\t'Hello ',\n\t\tname,\n\t\t', again!'\n\t),\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t'h2',\n\t\tnull,\n\t\t'the name is ' + name\n\t),\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t'h2',\n\t\tnull,\n\t\t'Again name for ' + name\n\t),\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_ProductList__[\"a\" /* default */], null)\n), document.getElementById('root'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz83MTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbi8vaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuL2NvbXBvbmVudHMvUHJvZHVjdExpc3QnO1xuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuL2V4dHJhJztcblxuZm9ybWF0UHJpY2UoMTIzMyk7XG5jb25zb2xlLmxvZygnRlJPTSBWSU0gYWdhaW4gd2l0aCB3ZWJwYWNrMicpO1xuY29uc29sZS5sb2coJ3h4Jyk7XG5cbi8vcmVuZGVyKDxoMT5tYW1hPC9oMT4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JykpO1xuY29uc3QgbmFtZSA9IFwiTW9ub1wiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG5cdDxkaXY+XG5cdFx0PEhlYWRlci8+XG5cdFx0PGgxPkhlbGxvIHtuYW1lfSwgYWdhaW4hPC9oMT5cblx0XHQ8aDI+e2B0aGUgbmFtZSBpcyAke25hbWV9YH08L2gyPlxuXHRcdDxoMj57YEFnYWluIG5hbWUgZm9yICR7bmFtZX1gfTwvaDI+XG5cdFx0PFByb2R1Y3RMaXN0IC8+XG5cdDwvZGl2Pixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUxBOzs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

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
/*!*********************************!*\
  !*** ./js/components/Header.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n\n\nvar Header = function Header(props) {\n  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n    \"header\",\n    { className: \"top\" },\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      \"h1\",\n      null,\n      \"A Big Header\"\n    ),\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      \"div\",\n      { className: \"bg1\" },\n      \"Backgound 1\"\n    ),\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      \"div\",\n      { className: \"bg2\" },\n      \"Backgound 1\"\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = Header;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvSGVhZGVyLmpzP2Q1YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidG9wXCI+XG4gICAgICA8aDE+QSBCaWcgSGVhZGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcxXCI+QmFja2dvdW5kIDE8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcyXCI+QmFja2dvdW5kIDE8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQ0E7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 99:
/* exports provided: formatPrice */
/* exports used: formatPrice */
/*!*********************!*\
  !*** ./js/extra.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = formatPrice;\nfunction formatPrice(cents) {\n    return '$' + (cents / 100).toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2V4dHJhLmpzPzU1YjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFByaWNlIChjZW50cykge1xuICAgIHJldHVybiBgJCR7KGNlbnRzIC8gMTAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9YDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvZXh0cmEuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

},[224]);