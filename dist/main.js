/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    display: flex;
    min-height: 100vh;
    background-color: #f0f0f0;
}

.container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
}

.content {
    display: flex;
    flex: 1;
}

.sidebar {
    background-color: #444;
    color: #fff;
    padding: 1rem;
    width: 250px;
    flex-shrink: 0;
}

.add-section {
    margin-bottom: 2rem;
}

.add-section button {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: none;
    background-color: #555;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
}

.add-section button:hover {
    background-color: #666;
}

.project-storage {
    margin-bottom: 2rem;
}

.project-storage h2 {
    margin-bottom: 1rem;
}

.project-storage ul {
    list-style: none;
}

.project-item {
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: none;
    background-color: #555;
    color: #fff;
    text-align: left;
    cursor: pointer;
    font-size: 1rem;
}

.project-item:hover {
    background-color: #666;
}

.task-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
}

.task-section h2 {
    margin-bottom: 1rem;
}

.task-section ul {
    list-style: none;
    width: 100%;
    max-width: 600px;
}

.task-section li {
    padding: 0.5rem;
    background-color: #ddd;
    margin-bottom: 0.5rem;
}

/* Overlay and modal sections */
#overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: none;
    pointer-events: none;
}

#overlay.visible {
    display: block;
    pointer-events: all;
}

.hidden {
    display: none;
}

.add-project-section, .add-task-section {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 2rem;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 2;
    display: none;
}

.add-project-section.visible, .add-task-section.visible {
    display: block;
}

.add-project-section label, .add-task-section label {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: #333;
}

.add-project-section input, .add-task-section input, .add-task-section select {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.add-project-section button, .add-task-section button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1rem;
    margin-right: 0.5rem;
}

.add-project-section button:hover, .add-task-section button:hover {
    background-color: #555;
}

/* Task item styles */
.task-item {
    padding: 1rem;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}

.task-title {
    margin-bottom: 0.5rem;
    color: #333;
}

.task-description {
    margin-bottom: 0.5rem;
    color: #666;
}

.task-priority {
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333;
}

.task-item button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1rem;
    margin-top: 0.5rem;
    align-self: flex-start;
}

.task-item button:hover {
    background-color: #555;
}

.project-name {
    text-align: center;
    margin-bottom: 1rem;
    color: #333;
}

.edit-task-section.hidden {
    display: none;
}

.edit-task-section {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 2rem;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 2;
    display: none;
}

.edit-task-section.visible {
    display: block;
}

.edit-task-section label {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: #333;
}

.edit-task-section input, .edit-task-section select {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

/*for edit tasks section*/

.edit-task-section button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1rem;
    margin-right: 0.5rem;
}

.edit-task-section button:hover {
    background-color: #555;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Arial, sans-serif;\n}\n\nbody {\n    display: flex;\n    min-height: 100vh;\n    background-color: #f0f0f0;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\nheader {\n    background-color: #333;\n    color: #fff;\n    padding: 1rem;\n    text-align: center;\n}\n\n.content {\n    display: flex;\n    flex: 1;\n}\n\n.sidebar {\n    background-color: #444;\n    color: #fff;\n    padding: 1rem;\n    width: 250px;\n    flex-shrink: 0;\n}\n\n.add-section {\n    margin-bottom: 2rem;\n}\n\n.add-section button {\n    display: block;\n    width: 100%;\n    margin-bottom: 1rem;\n    padding: 0.5rem;\n    border: none;\n    background-color: #555;\n    color: #fff;\n    cursor: pointer;\n    font-size: 1rem;\n}\n\n.add-section button:hover {\n    background-color: #666;\n}\n\n.project-storage {\n    margin-bottom: 2rem;\n}\n\n.project-storage h2 {\n    margin-bottom: 1rem;\n}\n\n.project-storage ul {\n    list-style: none;\n}\n\n.project-item {\n    display: block;\n    width: 100%;\n    padding: 0.5rem;\n    border: none;\n    background-color: #555;\n    color: #fff;\n    text-align: left;\n    cursor: pointer;\n    font-size: 1rem;\n}\n\n.project-item:hover {\n    background-color: #666;\n}\n\n.task-section {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    padding: 1rem;\n}\n\n.task-section h2 {\n    margin-bottom: 1rem;\n}\n\n.task-section ul {\n    list-style: none;\n    width: 100%;\n    max-width: 600px;\n}\n\n.task-section li {\n    padding: 0.5rem;\n    background-color: #ddd;\n    margin-bottom: 0.5rem;\n}\n\n/* Overlay and modal sections */\n#overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1;\n    display: none;\n    pointer-events: none;\n}\n\n#overlay.visible {\n    display: block;\n    pointer-events: all;\n}\n\n.hidden {\n    display: none;\n}\n\n.add-project-section, .add-task-section {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #fff;\n    padding: 2rem;\n    border: 1px solid #ccc;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    z-index: 2;\n    display: none;\n}\n\n.add-project-section.visible, .add-task-section.visible {\n    display: block;\n}\n\n.add-project-section label, .add-task-section label {\n    display: block;\n    margin-bottom: 1rem;\n    font-size: 1.2rem;\n    color: #333;\n}\n\n.add-project-section input, .add-task-section input, .add-task-section select {\n    width: 100%;\n    padding: 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\n.add-project-section button, .add-task-section button {\n    padding: 0.5rem 1rem;\n    border: none;\n    background-color: #333;\n    color: #fff;\n    cursor: pointer;\n    border-radius: 4px;\n    font-size: 1rem;\n    margin-right: 0.5rem;\n}\n\n.add-project-section button:hover, .add-task-section button:hover {\n    background-color: #555;\n}\n\n/* Task item styles */\n.task-item {\n    padding: 1rem;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    margin-bottom: 1rem;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    display: flex;\n    flex-direction: column;\n}\n\n.task-title {\n    margin-bottom: 0.5rem;\n    color: #333;\n}\n\n.task-description {\n    margin-bottom: 0.5rem;\n    color: #666;\n}\n\n.task-priority {\n    margin-bottom: 0.5rem;\n    font-weight: bold;\n    color: #333;\n}\n\n.task-item button {\n    padding: 0.5rem 1rem;\n    border: none;\n    background-color: #333;\n    color: #fff;\n    cursor: pointer;\n    border-radius: 4px;\n    font-size: 1rem;\n    margin-top: 0.5rem;\n    align-self: flex-start;\n}\n\n.task-item button:hover {\n    background-color: #555;\n}\n\n.project-name {\n    text-align: center;\n    margin-bottom: 1rem;\n    color: #333;\n}\n\n.edit-task-section.hidden {\n    display: none;\n}\n\n.edit-task-section {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #fff;\n    padding: 2rem;\n    border: 1px solid #ccc;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    z-index: 2;\n    display: none;\n}\n\n.edit-task-section.visible {\n    display: block;\n}\n\n.edit-task-section label {\n    display: block;\n    margin-bottom: 1rem;\n    font-size: 1.2rem;\n    color: #333;\n}\n\n.edit-task-section input, .edit-task-section select {\n    width: 100%;\n    padding: 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\n/*for edit tasks section*/\n\n.edit-task-section button {\n    padding: 0.5rem 1rem;\n    border: none;\n    background-color: #333;\n    color: #fff;\n    cursor: pointer;\n    border-radius: 4px;\n    font-size: 1rem;\n    margin-right: 0.5rem;\n}\n\n.edit-task-section button:hover {\n    background-color: #555;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/get-dom-data.js":
/*!*****************************!*\
  !*** ./src/get-dom-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEditTaskData: () => (/* binding */ getEditTaskData),
/* harmony export */   getProjectData: () => (/* binding */ getProjectData),
/* harmony export */   getTaskData: () => (/* binding */ getTaskData)
/* harmony export */ });
function getProjectData() {
    let projectTitle;
    const projectTitleInput = document.getElementById('project-name');
    // logic so it dont receive when there is nothing
    if (projectTitleInput.value) {
        projectTitle = projectTitleInput.value;
    } else {
        console.log('Project title is empty.');
        return null; // Explicitly return null if the input is empty
    };


    return projectTitle;
};

// this section is for adding tasks to projects using data in add task section

function getTaskData() {
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const projectSelection = document.getElementById('project-selection').value;

    // Check if any of the input values are empty
    if (!taskTitle || !taskDescription || !dueDate || !priority || !projectSelection) {
        alert("Please fill in all fields");
        return null;
    }

    return [taskTitle, taskDescription, dueDate, priority, projectSelection];
};


function getEditTaskData() {
    const taskTitle = document.getElementById('edit-task-title').value;
    const taskDescription = document.getElementById('edit-task-description').value;
    const dueDate = document.getElementById('edit-due-date').value;
    const priority = document.getElementById('edit-priority').value;
    const projectName = document.querySelector('.edit-task-section').getAttribute('data-project-name');
    const taskKey = document.querySelector('.edit-task-section').getAttribute('data-task-key');

    return [taskTitle, taskDescription, dueDate, priority, projectName, taskKey];
}




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   populateProjectSelection: () => (/* binding */ populateProjectSelection),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   selectProjectByName: () => (/* binding */ selectProjectByName)
/* harmony export */ });

const projects = [];


//creates an object that is the project and there is also functions to add tasks
const createProject = (name, tasks) => {
    return {
        name: name,
        tasks: tasks || [],

        //this addTask and removeTask may change for better coding like these methods can be putted in tasks.js and use it with this factory fucntion
        addTask: function(task) {
            this.tasks.push(task);
        },

        removeTask: function(key) {
            // assigning the tasks array to a filtered version that removes the task we want
            this.tasks = this.tasks.filter(taskItem => taskItem.key !== key);
        },
        //selects task
        selectTask: function(key) {
            return this.tasks.find(task => task.key === key);
        }
    };
};

const addProject = (project) => {
    projects.push(project);
};

function selectProjectByName(projectName) {
    const selectedProject = projects.find(project => project.name === projectName);
    return selectedProject;
};

//puts projects into projectseelction area in task section as option
function populateProjectSelection() {
    const projectSelection = document.getElementById('project-selection');
    //delete section each call
    projectSelection.innerHTML = '';
    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project.name;
        option.textContent = project.name;
        projectSelection.appendChild(option);
    });
}










/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateEditForm: () => (/* binding */ populateEditForm),
/* harmony export */   renderAllTasks: () => (/* binding */ renderAllTasks),
/* harmony export */   renderProject: () => (/* binding */ renderProject),
/* harmony export */   renderTaskSection: () => (/* binding */ renderTaskSection),
/* harmony export */   setupEditTaskVisibilityToggles: () => (/* binding */ setupEditTaskVisibilityToggles),
/* harmony export */   setupProjectVisibilityToggles: () => (/* binding */ setupProjectVisibilityToggles),
/* harmony export */   setupTaskVisibilityToggles: () => (/* binding */ setupTaskVisibilityToggles)
/* harmony export */ });

//item is a refernce to project object
function renderProject(item) {
    const projectSection = document.getElementById('project-list');
    const project = document.createElement('button')
    project.classList.add('project-item')
    project.textContent = item.name;
    projectSection.appendChild(project);
};

// ptoject parameter is for to reference the project name so we can make task to a spesific one
function renderTaskSection(project) {
    const taskSection = document.getElementById('task-list')
    // Clear previous content in task section
    taskSection.innerHTML = '';

    //changing heading to all tasks
    const heading = document.getElementById('task-heading');
    heading.textContent = 'Tasks'

    // Create project name element
    const projectNameElement = document.createElement('h2');
    projectNameElement.textContent = project.name;
    //after you can cahnge this with css and giving only class name for effiency and etc
    projectNameElement.style.textAlign = 'center';

    // Append project name to task section
    taskSection.appendChild(projectNameElement);

    // Iterate over tasks array and create task items
    project.tasks.forEach(task => {
        // Create a new task item element and put data for projects name
        const taskItem = document.createElement('li');
        taskItem.setAttribute('data-project-name', project.name);
        taskItem.classList.add('task-item');

        // Set task key as a custom attribute
        taskItem.setAttribute('data-task-key', task.key);

        // Set task title
        const titleElement = document.createElement('h3');
        titleElement.textContent = task.title;

        //set task duedate
        const dueDate = document.createElement('p');
        dueDate.textContent = task.dueDate;

        // Set task description
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = task.description;

        // Set task priority
        const priorityElement = document.createElement('p');
        priorityElement.textContent = `Priority: ${task.priority}`;

        // Create edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-task-button');

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-task-button');

        // Append elements to task item
        taskItem.appendChild(titleElement);
        taskItem.appendChild(descriptionElement);
        taskItem.appendChild(priorityElement);
        taskItem.appendChild(dueDate);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        // Append task item to task section
        taskSection.appendChild(taskItem);
        
    });
};



// this is for opening task section and closing logic
function setupTaskVisibilityToggles() {
    const addTaskBtn = document.getElementById('add-task');
    const closeTaskSectionBtn = document.querySelector('.close-task-section');
    const overlay = document.getElementById('overlay');
    const addTaskSection = document.querySelector('.add-task-section');
    const submitTaskBtn = document.querySelector('.submit-task');

    //uses the function on top to toggle states when button clicked
    addTaskBtn.addEventListener('click', () => {
        toggleVisibility(addTaskSection, true);
        toggleVisibility(overlay, true);
    });

    //uses the function on top to toggle states when button clicked
    closeTaskSectionBtn.addEventListener('click', () => {
        toggleVisibility(addTaskSection, false);
        toggleVisibility(overlay, false);
    });

    //uses the function on top to toggle states when button clicked
    overlay.addEventListener('click', () => {
        toggleVisibility(addTaskSection, false);
        toggleVisibility(overlay, false);
    });

    //uses the function on top to toggle states when button clicked
    submitTaskBtn.addEventListener('click', () => {
        toggleVisibility(addTaskSection, false);
        toggleVisibility(overlay, false);
    });
};

function setupProjectVisibilityToggles() {
    const addProjectBtn = document.getElementById('add-project');
    const closeProjectSectionBtn = document.querySelector('#close-project-section');
    const overlay = document.getElementById('overlay');
    const addProjectSection = document.querySelector('.add-project-section');
    //it will close section when submited
    const submitProjectBtn = document.getElementById('submit-project');

    //uses the function on top to toggle states when button clicked
    addProjectBtn.addEventListener('click', () => {
        toggleVisibility(addProjectSection, true);
        toggleVisibility(overlay, true);
    });

    //uses the function on top to toggle states when button clicked
    closeProjectSectionBtn.addEventListener('click', () => {
        toggleVisibility(addProjectSection, false);
        toggleVisibility(overlay, false);
    });

    //uses the function on top to toggle states when button clicked
    overlay.addEventListener('click', () => {
        toggleVisibility(addProjectSection, false);
        toggleVisibility(overlay, false);
    });

    //uses the function on top to toggle states when button clicked
    submitProjectBtn.addEventListener('click', () => {
        toggleVisibility(addProjectSection, false);
        toggleVisibility(overlay, false);
    });
};



//in this function there is elements that dynamically created so event listeners work with event delegation
function setupEditTaskVisibilityToggles() {
    const overlay = document.getElementById('overlay');
    const editTaskSection = document.querySelector('.edit-task-section');
    const taskList = document.getElementById('task-list');
    const closeEditTaskSectionBtn = document.querySelector('.close-edit-task-section');
    const submitEditTaskBtn = document.querySelector('.submit-edit-task');

    
    
    taskList.addEventListener('click', event => {
        const target = event.target;
        if(target.classList.contains('edit-task-button') && target.tagName === 'BUTTON') {
            toggleVisibility(editTaskSection, true);
            toggleVisibility(overlay, true);
        };
    });

    submitEditTaskBtn.addEventListener('click', () => {
        toggleVisibility(editTaskSection, false);
        toggleVisibility(overlay, false);
    });

    closeEditTaskSectionBtn.addEventListener('click', () => {
        toggleVisibility(editTaskSection, false);
        toggleVisibility(overlay, false);
    });

    overlay.addEventListener('click', () => {
        toggleVisibility(editTaskSection, false);
        toggleVisibility(overlay, false);
    });
};

function toggleVisibility(element, show) {
    if (show) {
        element.classList.remove('hidden');
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
        element.classList.add('hidden');
    }
}


function renderAllTasks(projects = []) {
    const taskSection = document.getElementById('task-list')
    // Clear previous content in task section
    taskSection.innerHTML = '';

    //changing heading to all tasks
    const heading = document.getElementById('task-heading');
    heading.textContent = 'All Tasks'


    projects.forEach(project => {

        project.tasks.forEach(task => {
            // Create a new task item element and put data for projects name
        const taskItem = document.createElement('li');
        taskItem.setAttribute('data-project-name', project.name);
        taskItem.classList.add('task-item');

        // Set task key as a custom attribute
        taskItem.setAttribute('data-task-key', task.key);

        // Set task title
        const titleElement = document.createElement('h3');
        titleElement.textContent = task.title;

        // Set task description
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = task.description;

        // Set task priority
        const priorityElement = document.createElement('p');
        priorityElement.textContent = `Priority: ${task.priority}`;

        // Create edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-task-button');

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-task-button');

        // Append elements to task item
        taskItem.appendChild(titleElement);
        taskItem.appendChild(descriptionElement);
        taskItem.appendChild(priorityElement);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        // Append task item to task section
        taskSection.appendChild(taskItem);
        });
    });
};

//populates edit form with tasks data
function populateEditForm(taskToEdit) {
    document.getElementById('edit-task-title').value = taskToEdit.title;
    document.getElementById('edit-task-description').value = taskToEdit.description;
    document.getElementById('edit-due-date').value = taskToEdit.dueDate;
    document.getElementById('edit-priority').value = taskToEdit.priority;
}



/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   generateUniqueId: () => (/* binding */ generateUniqueId)
/* harmony export */ });
const createTask = (title, description, dueDate, priority, projectTitle, key) => {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        projectTitle: projectTitle,
        key: key
    };
};

//this function creates unique key for each task
function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}





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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _get_dom_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-dom-data */ "./src/get-dom-data.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render */ "./src/render.js");







// This uses getProjectData function from ./get-dom-data to make a project object with createProject function from ./projects.js
const submitProjectBtn = document.getElementById('submit-project');
submitProjectBtn.addEventListener('click', () => {

    const projectTitle = (0,_get_dom_data__WEBPACK_IMPORTED_MODULE_3__.getProjectData)();
    //check if new projects name same with other projects
    const checkProjectName = _projects__WEBPACK_IMPORTED_MODULE_1__.projects.find(project => project.name === projectTitle);

    if (projectTitle && !checkProjectName) {
        // Logic for assign the data to createProject function
        const newProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectTitle);
        (0,_projects__WEBPACK_IMPORTED_MODULE_1__.addProject)(newProject);
        (0,_render__WEBPACK_IMPORTED_MODULE_4__.renderProject)(newProject);
        (0,_projects__WEBPACK_IMPORTED_MODULE_1__.populateProjectSelection)();
        saveProjectsToLocalStorage();  // Save to local storage
    } else {
        // Alert the user and stop further execution
        alert('Project name is either empty or already exists. Please choose a different name.');
        return;
    }
});

//this uses getTaskData and assigns it to createTask factory function then get that task to assign project factory function and after celaring the task section
const submitTask = document.querySelector('.submit-task');
submitTask.addEventListener('click', () => {
    //assigning values to createtask factory function
    const taskData = (0,_get_dom_data__WEBPACK_IMPORTED_MODULE_3__.getTaskData)();
    if (taskData[0] || taskData[1] || taskData[2] || taskData[3] || taskData[4]) {
        const taskItem = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.createTask)(taskData[0], taskData[1], taskData[2], taskData[3], taskData[4], (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.generateUniqueId)());
        const assignedProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.selectProjectByName)(taskData[4]);
        assignedProject.addTask(taskItem);
        (0,_render__WEBPACK_IMPORTED_MODULE_4__.renderTaskSection)(assignedProject);
        saveProjectsToLocalStorage();  // Save to local storage
    };
});

// this is for handling project selection it will select project that clicked and will return a project object and we will use that for add task functions
const projectSection = document.getElementById('project-list');
projectSection.addEventListener('click', event => {
    // this statement checks that element have class project and it is a button
    if (event.target.classList.contains('project-item') && event.target.tagName === 'BUTTON') {
        const projectName = event.target.textContent;

        // find the corresponding project object then return it 
        const selectedProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.selectProjectByName)(projectName);

        // this section renders html and creates a task section
        (0,_render__WEBPACK_IMPORTED_MODULE_4__.renderTaskSection)(selectedProject);
        };
});


//this section do functions when dom loaded 
document.addEventListener('DOMContentLoaded', () => {

    //loading the data from local storage in each dom content load
    const loadedProjects = loadProjectsFromLocalStorage();
    loadedProjects.forEach(project => {
        (0,_projects__WEBPACK_IMPORTED_MODULE_1__.addProject)(project);
        (0,_render__WEBPACK_IMPORTED_MODULE_4__.renderProject)(project);
    });


    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.populateProjectSelection)();
    (0,_render__WEBPACK_IMPORTED_MODULE_4__.setupTaskVisibilityToggles)();
    (0,_render__WEBPACK_IMPORTED_MODULE_4__.setupProjectVisibilityToggles)();
    (0,_render__WEBPACK_IMPORTED_MODULE_4__.setupEditTaskVisibilityToggles)();
});



const taskList = document.getElementById('task-list');
taskList.addEventListener('click', event => {
    const target = event.target;
    const taskKey = target.closest('.task-item').getAttribute('data-task-key');
    const projectName = target.closest('.task-item').getAttribute('data-project-name');
    const project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.selectProjectByName)(projectName);

    //for removing tasks and render task section again
    if (target.classList.contains('delete-task-button') && target.tagName === 'BUTTON') {
        project.removeTask(taskKey);
        (0,_render__WEBPACK_IMPORTED_MODULE_4__.renderTaskSection)(project);
        saveProjectsToLocalStorage();  // Save to local storage
    };


    if(target.classList.contains('edit-task-button') && target.tagName === 'BUTTON') {
        const taskToEdit = project.selectTask(taskKey);
        if (taskToEdit) {
            // Populate the edit task form fields with task data
            (0,_render__WEBPACK_IMPORTED_MODULE_4__.populateEditForm)(taskToEdit);
        };

        const editTaskSection = document.querySelector('.edit-task-section');
        
        editTaskSection.setAttribute('data-task-key', taskKey);
        editTaskSection.setAttribute('data-project-name', projectName);
        
    };
});


//for submitting edited task
const submitEditTaskBtn = document.querySelector('.submit-edit-task')
submitEditTaskBtn.addEventListener('click', () => {
    const editedTaskData = (0,_get_dom_data__WEBPACK_IMPORTED_MODULE_3__.getEditTaskData)();
    const assignedProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.selectProjectByName)(editedTaskData[4]);
    const taskKey = editedTaskData[5];

    assignedProject.removeTask(taskKey);

    const newTaskItem = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.createTask)(editedTaskData[0], editedTaskData[1], editedTaskData[2], editedTaskData[3], editedTaskData[4], editedTaskData[5]);
    assignedProject.addTask(newTaskItem);

    (0,_render__WEBPACK_IMPORTED_MODULE_4__.renderTaskSection)(assignedProject);
    saveProjectsToLocalStorage();
});


//for rendering all tasks
const allTasksBtn = document.getElementById('all-tasks-button');
allTasksBtn.addEventListener('click', () => {
    (0,_render__WEBPACK_IMPORTED_MODULE_4__.renderAllTasks)(_projects__WEBPACK_IMPORTED_MODULE_1__.projects);
});


//for saving and loading data to local storage and updating it

// Save projects to local storage
function saveProjectsToLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_1__.projects));
}

// Load projects from local storage
function loadProjectsFromLocalStorage() {
    const storedProjects = localStorage.getItem('projects');
    if (!storedProjects) return [];
    
    const plainProjects = JSON.parse(storedProjects);
    return plainProjects.map(plainProject => {
        const project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)(plainProject.name);
        plainProject.tasks.forEach(task => project.addTask(task));
        return project;
    });
}






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZ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O0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLHFCQUFxQjtBQUNyQjs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUd1QjtBQUNIO0FBQ0Y7QUFDZ0I7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQsY0FBYzs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQsY0FBYzs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR29COzs7Ozs7O1VDakJwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN5RjtBQUN6RDtBQUN1QjtBQUMyRzs7O0FBR3ZMO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsNkRBQWM7QUFDdkM7QUFDQSw2QkFBNkIsK0NBQVE7O0FBRXJDO0FBQ0E7QUFDQSwyQkFBMkIsd0RBQWE7QUFDeEMsUUFBUSxxREFBVTtBQUNsQixRQUFRLHNEQUFhO0FBQ3JCLFFBQVEsbUVBQXdCO0FBQ2hDLHVDQUF1QztBQUN2QyxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBEQUFXO0FBQ2hDO0FBQ0EseUJBQXlCLGtEQUFVLGtFQUFrRSx3REFBZ0I7QUFDckgsZ0NBQWdDLDhEQUFtQjtBQUNuRDtBQUNBLFFBQVEsMERBQWlCO0FBQ3pCLHVDQUF1QztBQUN2QztBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLDhEQUFtQjs7QUFFbkQ7QUFDQSxRQUFRLDBEQUFpQjtBQUN6QjtBQUNBLENBQUM7OztBQUdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBVTtBQUNsQixRQUFRLHNEQUFhO0FBQ3JCLEtBQUs7OztBQUdMLElBQUksbUVBQXdCO0FBQzVCLElBQUksbUVBQTBCO0FBQzlCLElBQUksc0VBQTZCO0FBQ2pDLElBQUksdUVBQThCO0FBQ2xDLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhEQUFtQjs7QUFFdkM7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBaUI7QUFDekIsdUNBQXVDO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseURBQWdCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4REFBZTtBQUMxQyw0QkFBNEIsOERBQW1CO0FBQy9DOztBQUVBOztBQUVBLHdCQUF3QixrREFBVTtBQUNsQzs7QUFFQSxJQUFJLDBEQUFpQjtBQUNyQjtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQWMsQ0FBQywrQ0FBUTtBQUMzQixDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9ELCtDQUFRO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFhO0FBQ3JDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2dldC1kb20tZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbn1cblxuLnNpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5hZGQtc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmFkZC1zZWN0aW9uIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmFkZC1zZWN0aW9uIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2Njtcbn1cblxuLnByb2plY3Qtc3RvcmFnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnByb2plY3Qtc3RvcmFnZSBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnByb2plY3Qtc3RvcmFnZSB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnByb2plY3QtaXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnByb2plY3QtaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2Njtcbn1cblxuLnRhc2stc2VjdGlvbiB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLnRhc2stc2VjdGlvbiBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnRhc2stc2VjdGlvbiB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4udGFzay1zZWN0aW9uIGxpIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi8qIE92ZXJsYXkgYW5kIG1vZGFsIHNlY3Rpb25zICovXG4jb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4jb3ZlcmxheS52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYWRkLXByb2plY3Qtc2VjdGlvbiwgLmFkZC10YXNrLXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hZGQtcHJvamVjdC1zZWN0aW9uLnZpc2libGUsIC5hZGQtdGFzay1zZWN0aW9uLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWRkLXByb2plY3Qtc2VjdGlvbiBsYWJlbCwgLmFkZC10YXNrLXNlY3Rpb24gbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5hZGQtcHJvamVjdC1zZWN0aW9uIGlucHV0LCAuYWRkLXRhc2stc2VjdGlvbiBpbnB1dCwgLmFkZC10YXNrLXNlY3Rpb24gc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmFkZC1wcm9qZWN0LXNlY3Rpb24gYnV0dG9uLCAuYWRkLXRhc2stc2VjdGlvbiBidXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4uYWRkLXByb2plY3Qtc2VjdGlvbiBidXR0b246aG92ZXIsIC5hZGQtdGFzay1zZWN0aW9uIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbn1cblxuLyogVGFzayBpdGVtIHN0eWxlcyAqL1xuLnRhc2staXRlbSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50YXNrLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi50YXNrLWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgY29sb3I6ICM2NjY7XG59XG5cbi50YXNrLXByaW9yaXR5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi50YXNrLWl0ZW0gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLnRhc2staXRlbSBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4uZWRpdC10YXNrLXNlY3Rpb24uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZWRpdC10YXNrLXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5lZGl0LXRhc2stc2VjdGlvbi52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmVkaXQtdGFzay1zZWN0aW9uIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4uZWRpdC10YXNrLXNlY3Rpb24gaW5wdXQsIC5lZGl0LXRhc2stc2VjdGlvbiBzZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4vKmZvciBlZGl0IHRhc2tzIHNlY3Rpb24qL1xuXG4uZWRpdC10YXNrLXNlY3Rpb24gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLmVkaXQtdGFzay1zZWN0aW9uIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJ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QW9CO0FBQ3hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmFkZC1zZWN0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmFkZC1zZWN0aW9uIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFkZC1zZWN0aW9uIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XFxufVxcblxcbi5wcm9qZWN0LXN0b3JhZ2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1zdG9yYWdlIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnByb2plY3Qtc3RvcmFnZSB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xcbn1cXG5cXG4udGFzay1zZWN0aW9uIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udGFzay1zZWN0aW9uIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2stc2VjdGlvbiB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4udGFzay1zZWN0aW9uIGxpIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi8qIE92ZXJsYXkgYW5kIG1vZGFsIHNlY3Rpb25zICovXFxuI292ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI292ZXJsYXkudmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LXNlY3Rpb24sIC5hZGQtdGFzay1zZWN0aW9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJvamVjdC1zZWN0aW9uLnZpc2libGUsIC5hZGQtdGFzay1zZWN0aW9uLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmFkZC1wcm9qZWN0LXNlY3Rpb24gbGFiZWwsIC5hZGQtdGFzay1zZWN0aW9uIGxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuXFxuLmFkZC1wcm9qZWN0LXNlY3Rpb24gaW5wdXQsIC5hZGQtdGFzay1zZWN0aW9uIGlucHV0LCAuYWRkLXRhc2stc2VjdGlvbiBzZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1zZWN0aW9uIGJ1dHRvbiwgLmFkZC10YXNrLXNlY3Rpb24gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qtc2VjdGlvbiBidXR0b246aG92ZXIsIC5hZGQtdGFzay1zZWN0aW9uIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcblxcbi8qIFRhc2sgaXRlbSBzdHlsZXMgKi9cXG4udGFzay1pdGVtIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICBjb2xvcjogIzY2NjtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuXFxuLnRhc2staXRlbSBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udGFzay1pdGVtIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4uZWRpdC10YXNrLXNlY3Rpb24uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmVkaXQtdGFzay1zZWN0aW9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lZGl0LXRhc2stc2VjdGlvbi52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5lZGl0LXRhc2stc2VjdGlvbiBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5lZGl0LXRhc2stc2VjdGlvbiBpbnB1dCwgLmVkaXQtdGFzay1zZWN0aW9uIHNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLypmb3IgZWRpdCB0YXNrcyBzZWN0aW9uKi9cXG5cXG4uZWRpdC10YXNrLXNlY3Rpb24gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4uZWRpdC10YXNrLXNlY3Rpb24gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBnZXRQcm9qZWN0RGF0YSgpIHtcbiAgICBsZXQgcHJvamVjdFRpdGxlO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpO1xuICAgIC8vIGxvZ2ljIHNvIGl0IGRvbnQgcmVjZWl2ZSB3aGVuIHRoZXJlIGlzIG5vdGhpbmdcbiAgICBpZiAocHJvamVjdFRpdGxlSW5wdXQudmFsdWUpIHtcbiAgICAgICAgcHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlSW5wdXQudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2plY3QgdGl0bGUgaXMgZW1wdHkuJyk7XG4gICAgICAgIHJldHVybiBudWxsOyAvLyBFeHBsaWNpdGx5IHJldHVybiBudWxsIGlmIHRoZSBpbnB1dCBpcyBlbXB0eVxuICAgIH07XG5cblxuICAgIHJldHVybiBwcm9qZWN0VGl0bGU7XG59O1xuXG4vLyB0aGlzIHNlY3Rpb24gaXMgZm9yIGFkZGluZyB0YXNrcyB0byBwcm9qZWN0cyB1c2luZyBkYXRhIGluIGFkZCB0YXNrIHNlY3Rpb25cblxuZnVuY3Rpb24gZ2V0VGFza0RhdGEoKSB7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1zZWxlY3Rpb24nKS52YWx1ZTtcblxuICAgIC8vIENoZWNrIGlmIGFueSBvZiB0aGUgaW5wdXQgdmFsdWVzIGFyZSBlbXB0eVxuICAgIGlmICghdGFza1RpdGxlIHx8ICF0YXNrRGVzY3JpcHRpb24gfHwgIWR1ZURhdGUgfHwgIXByaW9yaXR5IHx8ICFwcm9qZWN0U2VsZWN0aW9uKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgaW4gYWxsIGZpZWxkc1wiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIFt0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RTZWxlY3Rpb25dO1xufTtcblxuXG5mdW5jdGlvbiBnZXRFZGl0VGFza0RhdGEoKSB7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGFzay10aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRhc2stZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZHVlLWRhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLXNlY3Rpb24nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1uYW1lJyk7XG4gICAgY29uc3QgdGFza0tleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stc2VjdGlvbicpLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWtleScpO1xuXG4gICAgcmV0dXJuIFt0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3ROYW1lLCB0YXNrS2V5XTtcbn1cblxuXG5leHBvcnQge2dldFByb2plY3REYXRhLCBnZXRUYXNrRGF0YSwgZ2V0RWRpdFRhc2tEYXRhfTsiLCJcbmNvbnN0IHByb2plY3RzID0gW107XG5cblxuLy9jcmVhdGVzIGFuIG9iamVjdCB0aGF0IGlzIHRoZSBwcm9qZWN0IGFuZCB0aGVyZSBpcyBhbHNvIGZ1bmN0aW9ucyB0byBhZGQgdGFza3NcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSwgdGFza3MpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB0YXNrczogdGFza3MgfHwgW10sXG5cbiAgICAgICAgLy90aGlzIGFkZFRhc2sgYW5kIHJlbW92ZVRhc2sgbWF5IGNoYW5nZSBmb3IgYmV0dGVyIGNvZGluZyBsaWtlIHRoZXNlIG1ldGhvZHMgY2FuIGJlIHB1dHRlZCBpbiB0YXNrcy5qcyBhbmQgdXNlIGl0IHdpdGggdGhpcyBmYWN0b3J5IGZ1Y250aW9uXG4gICAgICAgIGFkZFRhc2s6IGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVUYXNrOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIC8vIGFzc2lnbmluZyB0aGUgdGFza3MgYXJyYXkgdG8gYSBmaWx0ZXJlZCB2ZXJzaW9uIHRoYXQgcmVtb3ZlcyB0aGUgdGFzayB3ZSB3YW50XG4gICAgICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIodGFza0l0ZW0gPT4gdGFza0l0ZW0ua2V5ICE9PSBrZXkpO1xuICAgICAgICB9LFxuICAgICAgICAvL3NlbGVjdHMgdGFza1xuICAgICAgICBzZWxlY3RUYXNrOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmtleSA9PT0ga2V5KTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xufTtcblxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdEJ5TmFtZShwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0O1xufTtcblxuLy9wdXRzIHByb2plY3RzIGludG8gcHJvamVjdHNlZWxjdGlvbiBhcmVhIGluIHRhc2sgc2VjdGlvbiBhcyBvcHRpb25cbmZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdFNlbGVjdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Qtc2VsZWN0aW9uJyk7XG4gICAgLy9kZWxldGUgc2VjdGlvbiBlYWNoIGNhbGxcbiAgICBwcm9qZWN0U2VsZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcHJvamVjdFNlbGVjdGlvbi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xufVxuXG5cbmV4cG9ydCB7Y3JlYXRlUHJvamVjdH07XG5leHBvcnQge2FkZFByb2plY3R9O1xuZXhwb3J0IHtwcm9qZWN0c307XG5leHBvcnQge3BvcHVsYXRlUHJvamVjdFNlbGVjdGlvbn07XG5leHBvcnQge3NlbGVjdFByb2plY3RCeU5hbWV9O1xuXG4iLCJcbi8vaXRlbSBpcyBhIHJlZmVybmNlIHRvIHByb2plY3Qgb2JqZWN0XG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KGl0ZW0pIHtcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QnKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpXG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbn07XG5cbi8vIHB0b2plY3QgcGFyYW1ldGVyIGlzIGZvciB0byByZWZlcmVuY2UgdGhlIHByb2plY3QgbmFtZSBzbyB3ZSBjYW4gbWFrZSB0YXNrIHRvIGEgc3Blc2lmaWMgb25lXG5mdW5jdGlvbiByZW5kZXJUYXNrU2VjdGlvbihwcm9qZWN0KSB7XG4gICAgY29uc3QgdGFza1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0JylcbiAgICAvLyBDbGVhciBwcmV2aW91cyBjb250ZW50IGluIHRhc2sgc2VjdGlvblxuICAgIHRhc2tTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuXG4gICAgLy9jaGFuZ2luZyBoZWFkaW5nIHRvIGFsbCB0YXNrc1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1oZWFkaW5nJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdUYXNrcydcblxuICAgIC8vIENyZWF0ZSBwcm9qZWN0IG5hbWUgZWxlbWVudFxuICAgIGNvbnN0IHByb2plY3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIC8vYWZ0ZXIgeW91IGNhbiBjYWhuZ2UgdGhpcyB3aXRoIGNzcyBhbmQgZ2l2aW5nIG9ubHkgY2xhc3MgbmFtZSBmb3IgZWZmaWVuY3kgYW5kIGV0Y1xuICAgIHByb2plY3ROYW1lRWxlbWVudC5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcblxuICAgIC8vIEFwcGVuZCBwcm9qZWN0IG5hbWUgdG8gdGFzayBzZWN0aW9uXG4gICAgdGFza1NlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50KTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0YXNrcyBhcnJheSBhbmQgY3JlYXRlIHRhc2sgaXRlbXNcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyB0YXNrIGl0ZW0gZWxlbWVudCBhbmQgcHV0IGRhdGEgZm9yIHByb2plY3RzIG5hbWVcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1uYW1lJywgcHJvamVjdC5uYW1lKTtcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG5cbiAgICAgICAgLy8gU2V0IHRhc2sga2V5IGFzIGEgY3VzdG9tIGF0dHJpYnV0ZVxuICAgICAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1rZXknLCB0YXNrLmtleSk7XG5cbiAgICAgICAgLy8gU2V0IHRhc2sgdGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICAgICAgICAvL3NldCB0YXNrIGR1ZWRhdGVcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblxuICAgICAgICAvLyBTZXQgdGFzayBkZXNjcmlwdGlvblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICAgICAgLy8gU2V0IHRhc2sgcHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcmlvcml0eUVsZW1lbnQudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX1gO1xuXG4gICAgICAgIC8vIENyZWF0ZSBlZGl0IGJ1dHRvblxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC10YXNrLWJ1dHRvbicpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBkZWxldGUgYnV0dG9uXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10YXNrLWJ1dHRvbicpO1xuXG4gICAgICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byB0YXNrIGl0ZW1cbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHlFbGVtZW50KTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0YXNrIGl0ZW0gdG8gdGFzayBzZWN0aW9uXG4gICAgICAgIHRhc2tTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICAgICAgXG4gICAgfSk7XG59O1xuXG5cblxuLy8gdGhpcyBpcyBmb3Igb3BlbmluZyB0YXNrIHNlY3Rpb24gYW5kIGNsb3NpbmcgbG9naWNcbmZ1bmN0aW9uIHNldHVwVGFza1Zpc2liaWxpdHlUb2dnbGVzKCkge1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2snKTtcbiAgICBjb25zdCBjbG9zZVRhc2tTZWN0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXRhc2stc2VjdGlvbicpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuICAgIGNvbnN0IGFkZFRhc2tTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLXNlY3Rpb24nKTtcbiAgICBjb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC10YXNrJyk7XG5cbiAgICAvL3VzZXMgdGhlIGZ1bmN0aW9uIG9uIHRvcCB0byB0b2dnbGUgc3RhdGVzIHdoZW4gYnV0dG9uIGNsaWNrZWRcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2dnbGVWaXNpYmlsaXR5KGFkZFRhc2tTZWN0aW9uLCB0cnVlKTtcbiAgICAgICAgdG9nZ2xlVmlzaWJpbGl0eShvdmVybGF5LCB0cnVlKTtcbiAgICB9KTtcblxuICAgIC8vdXNlcyB0aGUgZnVuY3Rpb24gb24gdG9wIHRvIHRvZ2dsZSBzdGF0ZXMgd2hlbiBidXR0b24gY2xpY2tlZFxuICAgIGNsb3NlVGFza1NlY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZVZpc2liaWxpdHkoYWRkVGFza1NlY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgdG9nZ2xlVmlzaWJpbGl0eShvdmVybGF5LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICAvL3VzZXMgdGhlIGZ1bmN0aW9uIG9uIHRvcCB0byB0b2dnbGUgc3RhdGVzIHdoZW4gYnV0dG9uIGNsaWNrZWRcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2dnbGVWaXNpYmlsaXR5KGFkZFRhc2tTZWN0aW9uLCBmYWxzZSk7XG4gICAgICAgIHRvZ2dsZVZpc2liaWxpdHkob3ZlcmxheSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgLy91c2VzIHRoZSBmdW5jdGlvbiBvbiB0b3AgdG8gdG9nZ2xlIHN0YXRlcyB3aGVuIGJ1dHRvbiBjbGlja2VkXG4gICAgc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlVmlzaWJpbGl0eShhZGRUYXNrU2VjdGlvbiwgZmFsc2UpO1xuICAgICAgICB0b2dnbGVWaXNpYmlsaXR5KG92ZXJsYXksIGZhbHNlKTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIHNldHVwUHJvamVjdFZpc2liaWxpdHlUb2dnbGVzKCkge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QnKTtcbiAgICBjb25zdCBjbG9zZVByb2plY3RTZWN0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXByb2plY3Qtc2VjdGlvbicpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuICAgIGNvbnN0IGFkZFByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LXNlY3Rpb24nKTtcbiAgICAvL2l0IHdpbGwgY2xvc2Ugc2VjdGlvbiB3aGVuIHN1Ym1pdGVkXG4gICAgY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtcHJvamVjdCcpO1xuXG4gICAgLy91c2VzIHRoZSBmdW5jdGlvbiBvbiB0b3AgdG8gdG9nZ2xlIHN0YXRlcyB3aGVuIGJ1dHRvbiBjbGlja2VkXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlVmlzaWJpbGl0eShhZGRQcm9qZWN0U2VjdGlvbiwgdHJ1ZSk7XG4gICAgICAgIHRvZ2dsZVZpc2liaWxpdHkob3ZlcmxheSwgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICAvL3VzZXMgdGhlIGZ1bmN0aW9uIG9uIHRvcCB0byB0b2dnbGUgc3RhdGVzIHdoZW4gYnV0dG9uIGNsaWNrZWRcbiAgICBjbG9zZVByb2plY3RTZWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2dnbGVWaXNpYmlsaXR5KGFkZFByb2plY3RTZWN0aW9uLCBmYWxzZSk7XG4gICAgICAgIHRvZ2dsZVZpc2liaWxpdHkob3ZlcmxheSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgLy91c2VzIHRoZSBmdW5jdGlvbiBvbiB0b3AgdG8gdG9nZ2xlIHN0YXRlcyB3aGVuIGJ1dHRvbiBjbGlja2VkXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlVmlzaWJpbGl0eShhZGRQcm9qZWN0U2VjdGlvbiwgZmFsc2UpO1xuICAgICAgICB0b2dnbGVWaXNpYmlsaXR5KG92ZXJsYXksIGZhbHNlKTtcbiAgICB9KTtcblxuICAgIC8vdXNlcyB0aGUgZnVuY3Rpb24gb24gdG9wIHRvIHRvZ2dsZSBzdGF0ZXMgd2hlbiBidXR0b24gY2xpY2tlZFxuICAgIHN1Ym1pdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZVZpc2liaWxpdHkoYWRkUHJvamVjdFNlY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgdG9nZ2xlVmlzaWJpbGl0eShvdmVybGF5LCBmYWxzZSk7XG4gICAgfSk7XG59O1xuXG5cblxuLy9pbiB0aGlzIGZ1bmN0aW9uIHRoZXJlIGlzIGVsZW1lbnRzIHRoYXQgZHluYW1pY2FsbHkgY3JlYXRlZCBzbyBldmVudCBsaXN0ZW5lcnMgd29yayB3aXRoIGV2ZW50IGRlbGVnYXRpb25cbmZ1bmN0aW9uIHNldHVwRWRpdFRhc2tWaXNpYmlsaXR5VG9nZ2xlcygpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcbiAgICBjb25zdCBlZGl0VGFza1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLXNlY3Rpb24nKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcbiAgICBjb25zdCBjbG9zZUVkaXRUYXNrU2VjdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1lZGl0LXRhc2stc2VjdGlvbicpO1xuICAgIGNvbnN0IHN1Ym1pdEVkaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1lZGl0LXRhc2snKTtcblxuICAgIFxuICAgIFxuICAgIHRhc2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtdGFzay1idXR0b24nKSAmJiB0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgICAgIHRvZ2dsZVZpc2liaWxpdHkoZWRpdFRhc2tTZWN0aW9uLCB0cnVlKTtcbiAgICAgICAgICAgIHRvZ2dsZVZpc2liaWxpdHkob3ZlcmxheSwgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBzdWJtaXRFZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlVmlzaWJpbGl0eShlZGl0VGFza1NlY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgdG9nZ2xlVmlzaWJpbGl0eShvdmVybGF5LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBjbG9zZUVkaXRUYXNrU2VjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlVmlzaWJpbGl0eShlZGl0VGFza1NlY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgdG9nZ2xlVmlzaWJpbGl0eShvdmVybGF5LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2dnbGVWaXNpYmlsaXR5KGVkaXRUYXNrU2VjdGlvbiwgZmFsc2UpO1xuICAgICAgICB0b2dnbGVWaXNpYmlsaXR5KG92ZXJsYXksIGZhbHNlKTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIHRvZ2dsZVZpc2liaWxpdHkoZWxlbWVudCwgc2hvdykge1xuICAgIGlmIChzaG93KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiByZW5kZXJBbGxUYXNrcyhwcm9qZWN0cyA9IFtdKSB7XG4gICAgY29uc3QgdGFza1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0JylcbiAgICAvLyBDbGVhciBwcmV2aW91cyBjb250ZW50IGluIHRhc2sgc2VjdGlvblxuICAgIHRhc2tTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuXG4gICAgLy9jaGFuZ2luZyBoZWFkaW5nIHRvIGFsbCB0YXNrc1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1oZWFkaW5nJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnXG5cblxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG5cbiAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHRhc2sgaXRlbSBlbGVtZW50IGFuZCBwdXQgZGF0YSBmb3IgcHJvamVjdHMgbmFtZVxuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHRhc2tJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LW5hbWUnLCBwcm9qZWN0Lm5hbWUpO1xuICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcblxuICAgICAgICAvLyBTZXQgdGFzayBrZXkgYXMgYSBjdXN0b20gYXR0cmlidXRlXG4gICAgICAgIHRhc2tJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWtleScsIHRhc2sua2V5KTtcblxuICAgICAgICAvLyBTZXQgdGFzayB0aXRsZVxuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gICAgICAgIC8vIFNldCB0YXNrIGRlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcblxuICAgICAgICAvLyBTZXQgdGFzayBwcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByaW9yaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0YXNrLnByaW9yaXR5fWA7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGVkaXQgYnV0dG9uXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRhc2stYnV0dG9uJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGRlbGV0ZSBidXR0b25cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRhc2stYnV0dG9uJyk7XG5cbiAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIHRhc2sgaXRlbVxuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eUVsZW1lbnQpO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICAvLyBBcHBlbmQgdGFzayBpdGVtIHRvIHRhc2sgc2VjdGlvblxuICAgICAgICB0YXNrU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuLy9wb3B1bGF0ZXMgZWRpdCBmb3JtIHdpdGggdGFza3MgZGF0YVxuZnVuY3Rpb24gcG9wdWxhdGVFZGl0Rm9ybSh0YXNrVG9FZGl0KSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGFzay10aXRsZScpLnZhbHVlID0gdGFza1RvRWRpdC50aXRsZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10YXNrLWRlc2NyaXB0aW9uJykudmFsdWUgPSB0YXNrVG9FZGl0LmRlc2NyaXB0aW9uO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWR1ZS1kYXRlJykudmFsdWUgPSB0YXNrVG9FZGl0LmR1ZURhdGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJpb3JpdHknKS52YWx1ZSA9IHRhc2tUb0VkaXQucHJpb3JpdHk7XG59XG5cbmV4cG9ydCB7cmVuZGVyUHJvamVjdCwgc2V0dXBUYXNrVmlzaWJpbGl0eVRvZ2dsZXMsIHJlbmRlclRhc2tTZWN0aW9uLCBzZXR1cFByb2plY3RWaXNpYmlsaXR5VG9nZ2xlcywgc2V0dXBFZGl0VGFza1Zpc2liaWxpdHlUb2dnbGVzLCByZW5kZXJBbGxUYXNrcywgcG9wdWxhdGVFZGl0Rm9ybX07IiwiY29uc3QgY3JlYXRlVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0VGl0bGUsIGtleSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIHByb2plY3RUaXRsZTogcHJvamVjdFRpdGxlLFxuICAgICAgICBrZXk6IGtleVxuICAgIH07XG59O1xuXG4vL3RoaXMgZnVuY3Rpb24gY3JlYXRlcyB1bmlxdWUga2V5IGZvciBlYWNoIHRhc2tcbmZ1bmN0aW9uIGdlbmVyYXRlVW5pcXVlSWQoKSB7XG4gICAgcmV0dXJuICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcbn1cblxuXG5leHBvcnQge2NyZWF0ZVRhc2t9O1xuZXhwb3J0IHtnZW5lcmF0ZVVuaXF1ZUlkfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7Y3JlYXRlUHJvamVjdCwgYWRkUHJvamVjdCwgcHJvamVjdHMsIHBvcHVsYXRlUHJvamVjdFNlbGVjdGlvbiwgc2VsZWN0UHJvamVjdEJ5TmFtZX0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7Y3JlYXRlVGFzaywgZ2VuZXJhdGVVbmlxdWVJZH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7Z2V0UHJvamVjdERhdGEsIGdldFRhc2tEYXRhLCBnZXRFZGl0VGFza0RhdGF9IGZyb20gXCIuL2dldC1kb20tZGF0YVwiO1xuaW1wb3J0IHtyZW5kZXJQcm9qZWN0LCBzZXR1cFRhc2tWaXNpYmlsaXR5VG9nZ2xlcywgcmVuZGVyVGFza1NlY3Rpb24sIHNldHVwUHJvamVjdFZpc2liaWxpdHlUb2dnbGVzLCBzZXR1cEVkaXRUYXNrVmlzaWJpbGl0eVRvZ2dsZXMsIHJlbmRlckFsbFRhc2tzLCBwb3B1bGF0ZUVkaXRGb3JtfSBmcm9tIFwiLi9yZW5kZXJcIjtcblxuXG4vLyBUaGlzIHVzZXMgZ2V0UHJvamVjdERhdGEgZnVuY3Rpb24gZnJvbSAuL2dldC1kb20tZGF0YSB0byBtYWtlIGEgcHJvamVjdCBvYmplY3Qgd2l0aCBjcmVhdGVQcm9qZWN0IGZ1bmN0aW9uIGZyb20gLi9wcm9qZWN0cy5qc1xuY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtcHJvamVjdCcpO1xuc3VibWl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGdldFByb2plY3REYXRhKCk7XG4gICAgLy9jaGVjayBpZiBuZXcgcHJvamVjdHMgbmFtZSBzYW1lIHdpdGggb3RoZXIgcHJvamVjdHNcbiAgICBjb25zdCBjaGVja1Byb2plY3ROYW1lID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdFRpdGxlKTtcblxuICAgIGlmIChwcm9qZWN0VGl0bGUgJiYgIWNoZWNrUHJvamVjdE5hbWUpIHtcbiAgICAgICAgLy8gTG9naWMgZm9yIGFzc2lnbiB0aGUgZGF0YSB0byBjcmVhdGVQcm9qZWN0IGZ1bmN0aW9uXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gICAgICAgIGFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIHJlbmRlclByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIHBvcHVsYXRlUHJvamVjdFNlbGVjdGlvbigpO1xuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpOyAgLy8gU2F2ZSB0byBsb2NhbCBzdG9yYWdlXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQWxlcnQgdGhlIHVzZXIgYW5kIHN0b3AgZnVydGhlciBleGVjdXRpb25cbiAgICAgICAgYWxlcnQoJ1Byb2plY3QgbmFtZSBpcyBlaXRoZXIgZW1wdHkgb3IgYWxyZWFkeSBleGlzdHMuIFBsZWFzZSBjaG9vc2UgYSBkaWZmZXJlbnQgbmFtZS4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0pO1xuXG4vL3RoaXMgdXNlcyBnZXRUYXNrRGF0YSBhbmQgYXNzaWducyBpdCB0byBjcmVhdGVUYXNrIGZhY3RvcnkgZnVuY3Rpb24gdGhlbiBnZXQgdGhhdCB0YXNrIHRvIGFzc2lnbiBwcm9qZWN0IGZhY3RvcnkgZnVuY3Rpb24gYW5kIGFmdGVyIGNlbGFyaW5nIHRoZSB0YXNrIHNlY3Rpb25cbmNvbnN0IHN1Ym1pdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXRhc2snKTtcbnN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy9hc3NpZ25pbmcgdmFsdWVzIHRvIGNyZWF0ZXRhc2sgZmFjdG9yeSBmdW5jdGlvblxuICAgIGNvbnN0IHRhc2tEYXRhID0gZ2V0VGFza0RhdGEoKTtcbiAgICBpZiAodGFza0RhdGFbMF0gfHwgdGFza0RhdGFbMV0gfHwgdGFza0RhdGFbMl0gfHwgdGFza0RhdGFbM10gfHwgdGFza0RhdGFbNF0pIHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBjcmVhdGVUYXNrKHRhc2tEYXRhWzBdLCB0YXNrRGF0YVsxXSwgdGFza0RhdGFbMl0sIHRhc2tEYXRhWzNdLCB0YXNrRGF0YVs0XSwgZ2VuZXJhdGVVbmlxdWVJZCgpKTtcbiAgICAgICAgY29uc3QgYXNzaWduZWRQcm9qZWN0ID0gc2VsZWN0UHJvamVjdEJ5TmFtZSh0YXNrRGF0YVs0XSk7XG4gICAgICAgIGFzc2lnbmVkUHJvamVjdC5hZGRUYXNrKHRhc2tJdGVtKTtcbiAgICAgICAgcmVuZGVyVGFza1NlY3Rpb24oYXNzaWduZWRQcm9qZWN0KTtcbiAgICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTsgIC8vIFNhdmUgdG8gbG9jYWwgc3RvcmFnZVxuICAgIH07XG59KTtcblxuLy8gdGhpcyBpcyBmb3IgaGFuZGxpbmcgcHJvamVjdCBzZWxlY3Rpb24gaXQgd2lsbCBzZWxlY3QgcHJvamVjdCB0aGF0IGNsaWNrZWQgYW5kIHdpbGwgcmV0dXJuIGEgcHJvamVjdCBvYmplY3QgYW5kIHdlIHdpbGwgdXNlIHRoYXQgZm9yIGFkZCB0YXNrIGZ1bmN0aW9uc1xuY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1saXN0Jyk7XG5wcm9qZWN0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAvLyB0aGlzIHN0YXRlbWVudCBjaGVja3MgdGhhdCBlbGVtZW50IGhhdmUgY2xhc3MgcHJvamVjdCBhbmQgaXQgaXMgYSBidXR0b25cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC1pdGVtJykgJiYgZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgcHJvamVjdCBvYmplY3QgdGhlbiByZXR1cm4gaXQgXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHNlbGVjdFByb2plY3RCeU5hbWUocHJvamVjdE5hbWUpO1xuXG4gICAgICAgIC8vIHRoaXMgc2VjdGlvbiByZW5kZXJzIGh0bWwgYW5kIGNyZWF0ZXMgYSB0YXNrIHNlY3Rpb25cbiAgICAgICAgcmVuZGVyVGFza1NlY3Rpb24oc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICAgICAgfTtcbn0pO1xuXG5cbi8vdGhpcyBzZWN0aW9uIGRvIGZ1bmN0aW9ucyB3aGVuIGRvbSBsb2FkZWQgXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gICAgLy9sb2FkaW5nIHRoZSBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZSBpbiBlYWNoIGRvbSBjb250ZW50IGxvYWRcbiAgICBjb25zdCBsb2FkZWRQcm9qZWN0cyA9IGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICBsb2FkZWRQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICByZW5kZXJQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuXG5cbiAgICBwb3B1bGF0ZVByb2plY3RTZWxlY3Rpb24oKTtcbiAgICBzZXR1cFRhc2tWaXNpYmlsaXR5VG9nZ2xlcygpO1xuICAgIHNldHVwUHJvamVjdFZpc2liaWxpdHlUb2dnbGVzKCk7XG4gICAgc2V0dXBFZGl0VGFza1Zpc2liaWxpdHlUb2dnbGVzKCk7XG59KTtcblxuXG5cbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xudGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHRhc2tLZXkgPSB0YXJnZXQuY2xvc2VzdCgnLnRhc2staXRlbScpLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWtleScpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gdGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWl0ZW0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1uYW1lJyk7XG4gICAgY29uc3QgcHJvamVjdCA9IHNlbGVjdFByb2plY3RCeU5hbWUocHJvamVjdE5hbWUpO1xuXG4gICAgLy9mb3IgcmVtb3ZpbmcgdGFza3MgYW5kIHJlbmRlciB0YXNrIHNlY3Rpb24gYWdhaW5cbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXRhc2stYnV0dG9uJykgJiYgdGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgICAgIHByb2plY3QucmVtb3ZlVGFzayh0YXNrS2V5KTtcbiAgICAgICAgcmVuZGVyVGFza1NlY3Rpb24ocHJvamVjdCk7XG4gICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7ICAvLyBTYXZlIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICB9O1xuXG5cbiAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXRhc2stYnV0dG9uJykgJiYgdGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgICAgIGNvbnN0IHRhc2tUb0VkaXQgPSBwcm9qZWN0LnNlbGVjdFRhc2sodGFza0tleSk7XG4gICAgICAgIGlmICh0YXNrVG9FZGl0KSB7XG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSB0aGUgZWRpdCB0YXNrIGZvcm0gZmllbGRzIHdpdGggdGFzayBkYXRhXG4gICAgICAgICAgICBwb3B1bGF0ZUVkaXRGb3JtKHRhc2tUb0VkaXQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stc2VjdGlvbicpO1xuICAgICAgICBcbiAgICAgICAgZWRpdFRhc2tTZWN0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWtleScsIHRhc2tLZXkpO1xuICAgICAgICBlZGl0VGFza1NlY3Rpb24uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtbmFtZScsIHByb2plY3ROYW1lKTtcbiAgICAgICAgXG4gICAgfTtcbn0pO1xuXG5cbi8vZm9yIHN1Ym1pdHRpbmcgZWRpdGVkIHRhc2tcbmNvbnN0IHN1Ym1pdEVkaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1lZGl0LXRhc2snKVxuc3VibWl0RWRpdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZWRpdGVkVGFza0RhdGEgPSBnZXRFZGl0VGFza0RhdGEoKTtcbiAgICBjb25zdCBhc3NpZ25lZFByb2plY3QgPSBzZWxlY3RQcm9qZWN0QnlOYW1lKGVkaXRlZFRhc2tEYXRhWzRdKTtcbiAgICBjb25zdCB0YXNrS2V5ID0gZWRpdGVkVGFza0RhdGFbNV07XG5cbiAgICBhc3NpZ25lZFByb2plY3QucmVtb3ZlVGFzayh0YXNrS2V5KTtcblxuICAgIGNvbnN0IG5ld1Rhc2tJdGVtID0gY3JlYXRlVGFzayhlZGl0ZWRUYXNrRGF0YVswXSwgZWRpdGVkVGFza0RhdGFbMV0sIGVkaXRlZFRhc2tEYXRhWzJdLCBlZGl0ZWRUYXNrRGF0YVszXSwgZWRpdGVkVGFza0RhdGFbNF0sIGVkaXRlZFRhc2tEYXRhWzVdKTtcbiAgICBhc3NpZ25lZFByb2plY3QuYWRkVGFzayhuZXdUYXNrSXRlbSk7XG5cbiAgICByZW5kZXJUYXNrU2VjdGlvbihhc3NpZ25lZFByb2plY3QpO1xuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG59KTtcblxuXG4vL2ZvciByZW5kZXJpbmcgYWxsIHRhc2tzXG5jb25zdCBhbGxUYXNrc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtdGFza3MtYnV0dG9uJyk7XG5hbGxUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW5kZXJBbGxUYXNrcyhwcm9qZWN0cyk7XG59KTtcblxuXG4vL2ZvciBzYXZpbmcgYW5kIGxvYWRpbmcgZGF0YSB0byBsb2NhbCBzdG9yYWdlIGFuZCB1cGRhdGluZyBpdFxuXG4vLyBTYXZlIHByb2plY3RzIHRvIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbi8vIExvYWQgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgaWYgKCFzdG9yZWRQcm9qZWN0cykgcmV0dXJuIFtdO1xuICAgIFxuICAgIGNvbnN0IHBsYWluUHJvamVjdHMgPSBKU09OLnBhcnNlKHN0b3JlZFByb2plY3RzKTtcbiAgICByZXR1cm4gcGxhaW5Qcm9qZWN0cy5tYXAocGxhaW5Qcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocGxhaW5Qcm9qZWN0Lm5hbWUpO1xuICAgICAgICBwbGFpblByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHByb2plY3QuYWRkVGFzayh0YXNrKSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH0pO1xufVxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==