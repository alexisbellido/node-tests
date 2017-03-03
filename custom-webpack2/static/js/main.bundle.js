webpackJsonp([0],{

/***/ 100:
/* exports provided: default */
/* exports used: default */
/*!**************************************!*\
  !*** ./js/components/ProductList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__seed__ = __webpack_require__(/*! ../seed */ 102);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__seed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__seed__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Product__ = __webpack_require__(/*! ./Product */ 99);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar ProductList = function (_React$Component) {\n    _inherits(ProductList, _React$Component);\n\n    function ProductList(props) {\n        _classCallCheck(this, ProductList);\n\n        var _this = _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).call(this, props));\n\n        _this.state = {\n            products: []\n        };\n        return _this;\n    }\n\n    _createClass(ProductList, [{\n        key: 'handleProductUpvote',\n        value: function handleProductUpvote(productId) {\n            console.log(productId + ' was upvoted');\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            // map with implicit return of Product components that is rendered inside ProductList below\n            var productComponents = __WEBPACK_IMPORTED_MODULE_1__seed___default.a.map(function (product) {\n                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Product__[\"a\" /* default */], { key: 'product-' + product.id,\n                    id: product.id,\n                    title: product.title,\n                    votes: product.votes,\n                    onVote: _this2.handleProductUpvote,\n                    description: product.description });\n            });\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                { className: 'ui unstackable items' },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    'h2',\n                    null,\n                    'Product List from map in const'\n                ),\n                productComponents\n            );\n        }\n    }]);\n\n    return ProductList;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ProductList;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzP2FhZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHNhbXBsZVByb2R1Y3RzIGZyb20gJy4uL3NlZWQnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcblxuY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwcm9kdWN0czogW11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBoYW5kbGVQcm9kdWN0VXB2b3RlIChwcm9kdWN0SWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJvZHVjdElkfSB3YXMgdXB2b3RlZGApO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIC8vIG1hcCB3aXRoIGltcGxpY2l0IHJldHVybiBvZiBQcm9kdWN0IGNvbXBvbmVudHMgdGhhdCBpcyByZW5kZXJlZCBpbnNpZGUgUHJvZHVjdExpc3QgYmVsb3dcbiAgICAgICAgY29uc3QgcHJvZHVjdENvbXBvbmVudHMgPSBzYW1wbGVQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICA8UHJvZHVjdCBrZXk9e2Bwcm9kdWN0LSR7cHJvZHVjdC5pZH1gfVxuICAgICAgICAgICAgaWQ9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICB0aXRsZT17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICAgIHZvdGVzPXtwcm9kdWN0LnZvdGVzfVxuICAgICAgICAgICAgb25Wb3RlPXt0aGlzLmhhbmRsZVByb2R1Y3RVcHZvdGV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvZHVjdC5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgKSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHVuc3RhY2thYmxlIGl0ZW1zXCI+XG4gICAgICAgICAgICAgIDxoMj5Qcm9kdWN0IExpc3QgZnJvbSBtYXAgaW4gY29uc3Q8L2gyPlxuICAgICAgICAgICAgICB7cHJvZHVjdENvbXBvbmVudHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBOzs7O0FBNUJBO0FBQ0E7QUE4QkE7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 101:
/* exports provided: formatPrice */
/* exports used: formatPrice */
/*!*********************!*\
  !*** ./js/extra.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = formatPrice;\nfunction formatPrice(cents) {\n    return '$' + (cents / 100).toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9leHRyYS5qcz81NWI3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZSAoY2VudHMpIHtcbiAgICByZXR1cm4gYCQkeyhjZW50cyAvIDEwMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWA7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2V4dHJhLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

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

/***/ 95:
/* unknown exports provided */
/* all exports used */
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 62);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__(/*! ./components/Header */ 98);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ProductList__ = __webpack_require__(/*! ./components/ProductList */ 100);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__extra__ = __webpack_require__(/*! ./extra */ 101);\n\n\n//import { render } from 'react-dom';\n\n\n\n\n\n__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__extra__[\"a\" /* formatPrice */])(1233);\nconsole.log('FROM VIM again with webpack2');\nconsole.log('xx');\n\n//render(<h1>mama</h1>, document.querySelector('#root'));\nvar name = \"Mono\";\n\n__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t'div',\n\tnull,\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_ProductList__[\"a\" /* default */], null),\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__[\"a\" /* default */], null),\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t'h1',\n\t\tnull,\n\t\t'Hello ',\n\t\tname,\n\t\t', again!'\n\t),\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t'h2',\n\t\tnull,\n\t\t'the name is ' + name\n\t),\n\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t'h2',\n\t\tnull,\n\t\t'Again name for ' + name\n\t)\n), document.getElementById('root'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz83MTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbi8vaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuL2NvbXBvbmVudHMvUHJvZHVjdExpc3QnO1xuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuL2V4dHJhJztcblxuZm9ybWF0UHJpY2UoMTIzMyk7XG5jb25zb2xlLmxvZygnRlJPTSBWSU0gYWdhaW4gd2l0aCB3ZWJwYWNrMicpO1xuY29uc29sZS5sb2coJ3h4Jyk7XG5cbi8vcmVuZGVyKDxoMT5tYW1hPC9oMT4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JykpO1xuY29uc3QgbmFtZSA9IFwiTW9ub1wiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG5cdDxkaXY+XG5cdFx0PFByb2R1Y3RMaXN0IC8+XG5cdFx0PEhlYWRlci8+XG5cdFx0PGgxPkhlbGxvIHtuYW1lfSwgYWdhaW4hPC9oMT5cblx0XHQ8aDI+e2B0aGUgbmFtZSBpcyAke25hbWV9YH08L2gyPlxuXHRcdDxoMj57YEFnYWluIG5hbWUgZm9yICR7bmFtZX1gfTwvaDI+XG5cdDwvZGl2Pixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBOzs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

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
/* exports provided: default */
/* exports used: default */
/*!**********************************!*\
  !*** ./js/components/Product.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar Product = function (_React$Component) {\n    _inherits(Product, _React$Component);\n\n    function Product(props) {\n        _classCallCheck(this, Product);\n\n        var _this = _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this, props));\n        // any time we define our own custom component methods, we have to manually bind this to the component ourselves.\n\n\n        _this.handleUpvote = _this.handleUpvote.bind(_this);\n        return _this;\n    }\n\n    _createClass(Product, [{\n        key: \"handleUpvote\",\n        value: function handleUpvote() {\n            this.props.onVote(this.props.id);\n        }\n    }, {\n        key: \"handleWithEvent\",\n        value: function handleWithEvent(e, id) {\n            // e is the event\n            console.log(\"Handle with event id: \" + id);\n            e.preventDefault();\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            var _this2 = this;\n\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { className: \"item\" },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { className: \"description\" },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"h2\",\n                        null,\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"a\",\n                            { href: \"#\" },\n                            this.props.id,\n                            \": \",\n                            this.props.title\n                        )\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"p\",\n                        null,\n                        this.props.description,\n                        \" | \",\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"a\",\n                            { href: \"#\", onClick: this.handleUpvote },\n                            this.props.votes,\n                            \" votes\"\n                        )\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"p\",\n                        null,\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"a\",\n                            { href: \"#\", onClick: function onClick(e) {\n                                    return _this2.handleWithEvent(e, _this2.props.id);\n                                } },\n                            \"Click preventing event\"\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Product;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = Product;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvUHJvZHVjdC5qcz8yNmY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICAvLyBhbnkgdGltZSB3ZSBkZWZpbmUgb3VyIG93biBjdXN0b20gY29tcG9uZW50IG1ldGhvZHMsIHdlIGhhdmUgdG8gbWFudWFsbHkgYmluZCB0aGlzIHRvIHRoZSBjb21wb25lbnQgb3Vyc2VsdmVzLlxuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVXB2b3RlID0gdGhpcy5oYW5kbGVVcHZvdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVVcHZvdGUgKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uVm90ZSh0aGlzLnByb3BzLmlkKTtcbiAgICB9XG5cbiAgICBoYW5kbGVXaXRoRXZlbnQgKGUsIGlkKSB7XG4gICAgICAgIC8vIGUgaXMgdGhlIGV2ZW50XG4gICAgICAgIGNvbnNvbGUubG9nKGBIYW5kbGUgd2l0aCBldmVudCBpZDogJHtpZH1gKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMj48YSBocmVmPVwiI1wiPnt0aGlzLnByb3BzLmlkfToge3RoaXMucHJvcHMudGl0bGV9PC9hPjwvaDI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn0gfCA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXB2b3RlfT57dGhpcy5wcm9wcy52b3Rlc30gdm90ZXM8L2E+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVXaXRoRXZlbnQoZSwgdGhpcy5wcm9wcy5pZCl9PkNsaWNrIHByZXZlbnRpbmcgZXZlbnQ8L2E+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9Qcm9kdWN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUxBO0FBREE7QUFZQTs7OztBQS9CQTtBQUNBO0FBaUNBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

},[227]);