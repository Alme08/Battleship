/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Anton&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* font-family: 'Anton', sans-serif;*/\\n* {\\n\\tpadding: 0;\\n\\tmargin: 0;\\n\\tbox-sizing: border-box;\\n}\\n\\nbody {\\n\\tbackground-color: rgb(2, 50, 93);\\n\\theight: 100vh;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tjustify-content: space-between;\\n}\\n\\n/* START SCREEN */\\n\\n.start-screen {\\n\\twidth: 80%;\\n\\tmargin: 0 auto;\\n\\tpadding: 20px;\\n\\theight: 100%;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tjustify-content: start;\\n\\talign-items: center;\\n\\tgap: 100px;\\n}\\n.start-screen h1 {\\n\\tcolor: aliceblue;\\n\\tfont-family: 'Anton', sans-serif;\\n\\tfont-size: 100px;\\n\\tletter-spacing: 0.1cm;\\n}\\n.start-screen form {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tgap: 20px;\\n}\\n.start-screen form label {\\n\\tcolor: #fff;\\n\\tfont-size: 40px;\\n}\\n.start-screen form #playerName {\\n\\theight: 40px;\\n\\twidth: 400px;\\n\\tpadding: 0 20px;\\n\\tfont-size: 20px;\\n}\\n.start-screen form .button {\\n\\tpadding: 20px 30px;\\n\\tfont-size: 20px;\\n\\tborder: none;\\n\\tborder-radius: 5px;\\n\\tcursor: pointer;\\n}\\n/* CARRIER SHIPS */\\n.ships-screen {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\twidth: 80%;\\n\\theight: 100%;\\n\\tmargin: 0 auto;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\tpadding: 20px;\\n\\tgap: 20px;\\n}\\n.ships-screen > h2 {\\n\\tcolor: #fff;\\n\\ttext-transform: uppercase;\\n}\\n.ships-screen > #boardCarrier {\\n\\tbackground-color: rgb(5, 54, 97);\\n\\twidth: auto;\\n\\theight: auto;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: repeat(10, 50px);\\n\\tgrid-template-rows: repeat(10, 50px);\\n\\tgap: 2.5px;\\n}\\n.ships-screen > #boardCarrier > div {\\n\\tbackground-color: rgb(114, 194, 255);\\n}\\n.ships-screen > #boardCarrier > div.fleet {\\n\\tbackground-color: rgb(255, 255, 255);\\n}\\n\\n.ships-screen > .ships {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tgap: 20px;\\n}\\n.ships-screen > .ships > .ship > .cell {\\n\\twidth: 50px;\\n\\theight: 50px;\\n\\tbackground-color: #fff;\\n\\tborder: 2px solid #000;\\n}\\n.rotated {\\n\\tdisplay: flex;\\n}\\n.ships-screen > .ships > button {\\n\\tpadding: 20px 30px;\\n\\tfont-size: 20px;\\n\\tborder: none;\\n\\tborder-radius: 5px;\\n\\tcursor: pointer;\\n}\\n/* GAME SCREEN */\\n.game-screen {\\n\\tdisplay: flex;\\n\\twidth: 80%;\\n\\theight: 100%;\\n\\tmargin: 0 auto;\\n\\talign-items: flex-start;\\n\\tjustify-content: center;\\n\\tpadding: 20px;\\n}\\n.game-screen > div {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\talign-items: center;\\n\\tgap: 100px;\\n}\\n.game-screen > div > h2 {\\n\\tcolor: #fff;\\n}\\n.game-screen > div > div {\\n\\tbackground-color: rgb(5, 54, 97);\\n\\twidth: auto;\\n\\theight: auto;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: repeat(10, 50px);\\n\\tgrid-template-rows: repeat(10, 50px);\\n\\tgap: 2.5px;\\n}\\n.game-screen > div > div > div {\\n\\tbackground-color: rgb(114, 194, 255);\\n}\\n.game-screen > div > #enemyBoard > div {\\n\\tcursor: pointer;\\n}\\n.game-screen > div > div > div {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n}\\n.game-screen > div > div > div > div {\\n\\twidth: 20px;\\n\\theight: 20px;\\n\\tborder-radius: 100%;\\n}\\n.miss {\\n\\tbackground-color: rgb(0, 0, 0);\\n}\\n.hit {\\n\\tbackground-color: rgb(255, 0, 0);\\n}\\n.game-screen > div > div > .sunk {\\n\\tbackground-color: red;\\n}\\n\\n/* END SCREEN */\\n.end-screen {\\n\\tposition: absolute;\\n\\theight: 100%;\\n\\twidth: 100%;\\n\\tbackground-color: #001928dd;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\tgap: 20px;\\n}\\n.end-screen > h2 {\\n\\tcolor: #fff;\\n\\ttext-transform: uppercase;\\n}\\n.end-screen > button {\\n\\tpadding: 20px 30px;\\n\\tfont-size: 20px;\\n\\tborder: none;\\n\\tborder-radius: 5px;\\n\\tcursor: pointer;\\n}\\n/* FOOTER */\\nfooter {\\n\\tbackground-color: rgb(1, 34, 62);\\n\\theight: 6vh;\\n\\ttext-align: center;\\n\\tcolor: #fff;\\n\\tpadding: 20px;\\n}\\n\\n.display-none {\\n\\tdisplay: none;\\n}\\n.drag-over {\\n\\tborder: dashed 3px red;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom.js */ \"./src/modules/dom.js\");\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/modules/game.js\");\n/* harmony import */ var _drag_and_drop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-and-drop.js */ \"./src/modules/drag-and-drop.js\");\n\n\n\nconst form = document.querySelector('#form');\nconst startScreen = document.querySelector('.start-screen');\nconst shipsScreen = document.querySelector('.ships-screen');\nconst gameScreen = document.querySelector('.game-screen');\nconst endScreen = document.querySelector('.end-screen');\nconst startGame = document.querySelector('#start-game');\nconst restartGame = document.querySelector('#restart');\nlet players = null;\n\nconst renderEndScreen = (winner) => {\n  const winnerSpan = document.querySelector('#winner');\n  endScreen.classList.remove('display-none');\n  winnerSpan.textContent = winner.name;\n};\n\nconst renderBoards = () => {\n  const board = document.querySelector('#board');\n  const enemyBoard = document.querySelector('#enemyBoard');\n  board.innerHTML = '';\n  enemyBoard.innerHTML = '';\n\n  function attack(e) {\n    if (!players.human.getTurn()) return;\n    players.human.attack(players.pc, e.target.dataset.x, e.target.dataset.y);\n    renderBoards();\n\n    if (typeof (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.checkPlayerWon)(players) === 'object') {\n      renderEndScreen((0,_game_js__WEBPACK_IMPORTED_MODULE_0__.checkPlayerWon)(players));\n      return;\n    }\n\n    setTimeout(() => {\n      players.pc.randomAttack(players.human);\n      renderBoards();\n\n      if (typeof (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.checkPlayerWon)(players) === 'object') {\n        renderEndScreen((0,_game_js__WEBPACK_IMPORTED_MODULE_0__.checkPlayerWon)(players));\n      }\n    }, 500);\n  }\n\n  for (let i = 0; i < players.human.gameboard.board.length; i += 1) {\n    for (let j = 0; j < players.human.gameboard.board[i].length; j += 1) {\n      const div = document.createElement('div');\n      div.setAttribute('data-x', i);\n      div.setAttribute('data-y', j);\n      if (players.human.gameboard.board[i][j] === 'miss') {\n        const divMiss = document.createElement('div');\n        divMiss.classList.add('miss');\n        div.appendChild(divMiss);\n      }\n      if (typeof players.human.gameboard.board[i][j] === 'object'\n      && players.human.gameboard.board[i][j]?.ship?.tiles[players.human.gameboard.board[i][j].shipPosition] === 'hit') {\n        const divHit = document.createElement('div');\n        divHit.classList.add('hit');\n        div.appendChild(divHit);\n      }\n\n      if (players.human.gameboard.board[i][j] !== null\n      && players.human.gameboard?.isSunk(i, j) === true) {\n        div.classList.add('sunk');\n      }\n      board.appendChild(div);\n    }\n  }\n  for (let i = 0; i < players.pc.gameboard.board.length; i += 1) {\n    for (let j = 0; j < players.pc.gameboard.board[i].length; j += 1) {\n      const div = document.createElement('div');\n      div.setAttribute('data-x', i);\n      div.setAttribute('data-y', j);\n      if (players.pc.gameboard.board[i][j] === 'miss') {\n        const divMiss = document.createElement('div');\n        divMiss.classList.add('miss');\n        div.appendChild(divMiss);\n      }\n      if (typeof players.pc.gameboard.board[i][j] === 'object'\n      && players.pc.gameboard.board[i][j]?.ship?.tiles[players.pc.gameboard.board[i][j].shipPosition] === 'hit') {\n        const divHit = document.createElement('div');\n        divHit.classList.add('hit');\n        div.appendChild(divHit);\n      }\n\n      if (players.pc.gameboard.board[i][j] !== null\n      && players.pc.gameboard.isSunk(i, j) === true) {\n        div.classList.add('sunk');\n      }\n      if (!div.hasChildNodes()) {\n        div.addEventListener('click', attack);\n      }\n      enemyBoard.appendChild(div);\n    }\n  }\n};\n\nconst renderCarrierShipBoard = () => {\n  const carrierBoard = document.querySelector('#boardCarrier');\n\n  for (let i = 0; i < 10; i += 1) {\n    for (let j = 0; j < 10; j += 1) {\n      const div = document.createElement('div');\n      div.setAttribute('data-x', i);\n      div.setAttribute('data-y', j);\n      div.setAttribute('class', 'box');\n      carrierBoard.appendChild(div);\n    }\n  }\n};\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const playerName = document.querySelector('#playerName');\n  startScreen.classList.add('display-none');\n  renderCarrierShipBoard();\n  shipsScreen.classList.remove('display-none');\n  players = (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.game)(playerName.value);\n  (0,_drag_and_drop_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.ship-4', players);\n  (0,_drag_and_drop_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.ship-4-2', players);\n  (0,_drag_and_drop_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.ship-3', players);\n  (0,_drag_and_drop_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.ship-2', players);\n  (0,_drag_and_drop_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.ship-1', players);\n});\n\nstartGame.addEventListener('click', () => {\n  shipsScreen.classList.add('display-none');\n  renderBoards();\n  gameScreen.classList.remove('display-none');\n});\n\nrestartGame.addEventListener('click', () => {\n  startScreen.classList.remove('display-none');\n  const playerName = document.querySelector('#playerName');\n  playerName.value = '';\n  gameScreen.classList.add('display-none');\n  endScreen.classList.add('display-none');\n});\n\n\n//# sourceURL=webpack://battleship/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/drag-and-drop.js":
/*!**************************************!*\
  !*** ./src/modules/drag-and-drop.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderPlayerFleet(player) {\n  console.log(player.gameboard.board);\n  document.querySelectorAll('#boardCarrier > div').forEach((e, i) => {\n    let pos1;\n    let pos2;\n    let pos = `${i}`;\n\n    // transform index string to array of pos1 and pos2\n    if (i < 10) {\n      pos1 = 0;\n      pos2 = i;\n    } else {\n      pos = pos.split('');\n      pos1 = pos[0];\n      pos2 = pos[1];\n    }\n\n    if (!player.gameboard.board[pos1][pos2]) return;\n    e.classList.add('fleet');\n  });\n}\n\nconst shipDrag = (shipName, players) => {\n  const body = document.querySelector('body');\n  const ship = document.querySelector(shipName);\n  const shipsContainer = document.querySelector('.ships');\n  const startGame = document.querySelector('#start-game');\n  const cells = document.querySelectorAll('#boardCarrier > div');\n  const child = document.querySelectorAll(`${shipName} > div`);\n  let dragSelection;\n  let offset;\n  let dir = 'v';\n\n  // offset for ship selection\n  if (child[0]) {\n    child[0].addEventListener('mouseenter', () => { offset = 0; });\n  }\n  if (child[1]) {\n    child[1].addEventListener('mouseenter', () => { offset = -1; });\n  }\n  if (child[2]) {\n    child[2].addEventListener('mouseenter', () => { offset = -2; });\n  }\n  if (child[3]) {\n    child[3].addEventListener('mouseenter', () => { offset = -3; });\n  }\n\n  ship.addEventListener('dragstart', (e) => {\n    e.dataTransfer.setData('text/plain', e.target.id);\n    setTimeout(() => {\n      e.target.classList.add('display-none');\n    }, 0);\n  });\n\n  ship.addEventListener('dragend', (e) => {\n    if (dragSelection === -1) {\n      e.target.classList.remove('display-none');\n      return; // prevents offset error\n    }\n    let pos1;\n    let pos2;\n    let pos = `${dragSelection}`;\n\n    // transform index string to array of pos1 and pos2\n    if (dragSelection < 10) {\n      pos1 = 0;\n      pos2 = dragSelection;\n    } else {\n      pos = pos.split('');\n      pos1 = pos[0] * 1;\n      pos2 = pos[1] * 1;\n    }\n\n    // place ships with proper offset\n    if (dir === 'h') pos2 += offset;\n    if (dir === 'v') pos1 += offset;\n    if (pos2 < 0) return;\n    if (shipName === '.ship-1') {\n      if (players.human.gameboard.placeShip(pos1, pos2, 1, dir) === false) {\n        e.target.classList.remove('display-none');\n        return;\n      }\n    }\n    if (shipName === '.ship-2') {\n      if (players.human.gameboard.placeShip(pos1, pos2, 2, dir) === false) {\n        e.target.classList.remove('display-none');\n        return;\n      }\n    }\n    if (shipName === '.ship-3') {\n      if (players.human.gameboard.placeShip(pos1, pos2, 3, dir) === false) {\n        e.target.classList.remove('display-none');\n        return;\n      }\n    }\n    if (shipName === '.ship-4' || shipName === '.ship-4-2') {\n      if (players.human.gameboard.placeShip(pos1, pos2, 4, dir) === false) {\n        e.target.classList.remove('display-none');\n        return;\n      }\n    }\n    renderPlayerFleet(players.human); // renders fleet\n\n    // render start game button when all ships are in the cells\n    let display = true;\n    for (let i = 0; i < shipsContainer.children.length; i += 1) {\n      if (!shipsContainer.children[i].classList.contains('display-none')) {\n        display = false;\n      }\n    }\n    if (display === true) startGame.classList.remove('display-none');\n  });\n\n  // event listeners for drag on cells\n  cells.forEach((e, i) => {\n    e.addEventListener('dragover', (event) => {\n      event.preventDefault();\n      event.target.classList.add('drag-over');\n      dragSelection = i;\n    });\n  });\n  cells.forEach((e) => {\n    e.addEventListener('dragleave', (event) => {\n      // event.preventDefault();\n      event.target.classList.remove('drag-over');\n    });\n  });\n  cells.forEach((e) => {\n    e.addEventListener('drop', (event) => {\n      // event.preventDefault();\n      event.target.classList.remove('drag-over');\n    });\n  });\n  // removes index if drop outside of cells\n  body.addEventListener('dragenter', () => {\n    dragSelection = -1;\n  });\n\n  ship.addEventListener('click', (e) => {\n    if (dir === 'h') {\n      dir = 'v';\n      e.target.parentNode.classList.toggle('rotated');\n    } else {\n      dir = 'h';\n      e.target.parentNode.classList.toggle('rotated');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipDrag);\n\n\n//# sourceURL=webpack://battleship/./src/modules/drag-and-drop.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkPlayerWon\": () => (/* binding */ checkPlayerWon),\n/* harmony export */   \"game\": () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/modules/player.js\");\n\n\nfunction game(name) {\n  const human = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\n  const pc = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Pc');\n  pc.gameboard.placeShip(0, 0, 9, 'h');\n  human.changeTurn();\n  return {\n    human,\n    pc,\n  };\n}\nconst checkPlayerWon = (players) => {\n  if (players.human.gameboard.areAllSunk() === true) {\n    return players.pc;\n  }\n  if (players.pc.gameboard.areAllSunk() === true) {\n    return players.human;\n  }\n  return false;\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/modules/ship.js\");\n\n\nclass GameboardFactory {\n  constructor() {\n    this.board = [\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null]];\n  }\n\n  placeShip = (x, y, length, dir) => {\n    if (this.board[x][y] !== null) return false;\n    const ship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length);\n    let shipPosition = 0;\n\n    if (dir === 'h') {\n      if (y + ship.getLength() > 10) return false;\n\n      for (let i = 0; i < ship.getLength(); i += 1) {\n        if (this.board[x][y + i] !== null) return false;\n      }\n\n      for (let i = y; i < y + ship.getLength(); i += 1) {\n        this.board[x].splice(i, 1, { ship, shipPosition });\n        shipPosition += 1;\n      }\n    } else {\n      if (x + ship.getLength() > 10) return false;\n\n      for (let i = 0; i < ship.getLength(); i += 1) {\n        if (this.board[x + i][y] !== null) return false;\n      }\n\n      for (let i = x; i < x + ship.getLength(); i += 1) {\n        this.board[i].splice(y, 1, { ship, shipPosition });\n        shipPosition += 1;\n      }\n    }\n\n    return true;\n  };\n\n  receiveAttack = (x, y) => {\n    if (this.board[x][y] === null) {\n      this.board[x][y] = 'miss';\n      return this.board[x][y];\n    }\n    if (this.board[x][y] === 'miss') return false;\n    if (typeof this.board[x][y] === 'object' && this.board[x][y].ship.tiles[this.board[x][y].shipPosition] === 'hit') return false;\n    this.board[x][y].ship.hit(this.board[x][y].shipPosition);\n    return this.board[x][y].ship.tiles[this.board[x][y].shipPosition];\n  };\n\n  isSunk = (x, y) => {\n    if (typeof this.board[x][y] !== 'object') return false;\n    return this.board[x][y].ship.isSunk();\n  };\n\n  areAllSunk = () => {\n    let sunk = true;\n\n    for (let i = 0; i < this.board.length; i += 1) {\n      for (let j = 0; j < this.board[i].length; j += 1) {\n        if (this.board[i][j] !== null && this.board[i][j] !== 'miss') {\n          if (this.board[i][j].ship.isSunk() !== true) sunk = false;\n        }\n      }\n    }\n    return sunk;\n  };\n  // return {\n  //   board, placeShip, receiveAttack, isSunk, areAllSunk,\n  // };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameboardFactory);\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/modules/gameboard.js\");\n\n\nclass Player {\n  constructor(name) {\n    this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.turn = false;\n    this.name = name;\n  }\n\n  changeTurn = () => {\n    this.turn = !this.turn;\n  };\n\n  getTurn = () => this.turn;\n\n  attack = (enemy, x, y) => {\n    this.changeTurn();\n    enemy.changeTurn();\n    return enemy.gameboard.receiveAttack(x, y);\n  };\n\n  randomAttack = (enemy) => {\n    let check = false;\n    do {\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n      if (enemy.gameboard.board[x][y] !== 'miss'\n      && enemy.gameboard.board[x][y]?.ship.tiles[enemy.gameboard.board[x][y].shipPosition] !== 'hit') {\n        check = this.attack(enemy, x, y);\n      }\n    } while (check === false);\n    return check;\n  };\n\n  // return {\n  //   gameboard, changeTurn, getTurn, attack, randomAttack,\n  // };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ShipFactory {\n  constructor(length) {\n    this.length = length;\n    this.tiles = [...Array(length).keys()];\n  }\n\n  hit = (tile) => {\n    this.tiles.splice(tile, 1, 'hit');\n  };\n\n  getLength = () => this.length;\n\n  isSunk = () => {\n    let sunk = true;\n    this.tiles.forEach((tile) => {\n      if (tile !== 'hit') sunk = false;\n      return null;\n    });\n    return sunk;\n  };\n\n  // return {\n  //   getLength, hit, isSunk, tiles,\n  // };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipFactory);\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;