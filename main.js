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
___CSS_LOADER_EXPORT___.push([module.id, "/* Таблица используемых цветов */\r\n\r\n/* #282E33 - светлый фон для тёмной темы */\r\n/* #272822 - monokai фон */\r\n/* #18191D - Тёмный фон */\r\n/* #65AADD - синий цвет */\r\n/* #F92672 - monokai розовй */\r\n/* #A6E22E - monokai зелёный */\r\n/* #F8F8F0 - monokai белый */\r\n/* #00CC99 - приятный зелёный */\r\n/* #FF0066 - розовый 2 */\r\n/* #FF9999 - розовая тень / акцент */\r\n\r\nbody {\r\n    background: #18191D;\r\n}\r\n\r\n.application {\r\n    justify-content: center;\r\n}\r\n\r\n.header {\r\n    height: 70px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    color: #F8F8F0;\r\n}\r\n\r\n.header_img {\r\n    height: 50px;\r\n    margin: 10px;\r\n}\r\n\r\n.tile_hexagon {\r\n    min-height: 40px;\r\n    min-width: 40px;\r\n    height: 40px;\r\n    width: 40px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n:root {\r\n    --hex-side: 22px;\r\n    --hex-rotate: 30deg;\r\n}\r\n\r\n.hexagon {\r\n    width: calc(var(--hex-side) * 1.732);\r\n    height: var(--hex-side);\r\n    position: relative;\r\n    transform: rotate(var(--hex-rotate));\r\n}\r\n\r\n.cell_waitingSelect .hexagon {\r\n    box-shadow:0 0 18px #FF9999;\r\n}\r\n\r\n.hexagon:hover {\r\n    box-shadow:0 0 25px #F8F8F0;\r\n}\r\n\r\n.cell_selected .hexagon {\r\n    box-shadow:0 0 10px #FF0066;\r\n}\r\n\r\n.hexagon:before,\r\n.hexagon:after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.hexagon_powerValue {\r\n    position: absolute;\r\n    z-index: 2;\r\n    font-weight: 600;\r\n     margin-top: 10px;\r\n    height: 37px;\r\n    width: 37px;\r\n    text-align: center;\r\n}\r\n\r\n.hexagon:before {\r\n    transform: rotate(60deg);\r\n}\r\n\r\n.hexagon:after {\r\n    transform: rotate(-60deg);\r\n}\r\n\r\n.tile_blue .hexagon:before,\r\n.tile_blue .hexagon:after,\r\n.tile_blue .hexagon {\r\n    background: #65AADD;\r\n}\r\n\r\n.tile_magenta .hexagon:before,\r\n.tile_magenta .hexagon:after,\r\n.tile_magenta .hexagon {\r\n    background: #F92672;\r\n}\r\n\r\n.tile_red .hexagon:before,\r\n.tile_red .hexagon:after,\r\n.tile_red .hexagon {\r\n    background: darkred;\r\n}\r\n\r\n.tile_green .hexagon:before,\r\n.tile_green .hexagon:after,\r\n.tile_green .hexagon {\r\n    background: #A6E22E;\r\n}\r\n\r\n.cell {\r\n    min-height: 35px;\r\n    min-width: 35px;\r\n    height: 35px;\r\n    width: 35px;\r\n    margin: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.cell_row {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* TODO: всё что cell заменить на square, изначально делал под квадрат. */\r\n/* TODO: временный коммент-костыль */\r\n.cell_empty { /*background: #282E33;*/ }\r\n.cell_waiting { background: #F92672; }\r\n\r\n.cell_wrap {\r\n    /*padding: 5px;*/\r\n    /* TODO: временный коммент-костыль */\r\n    /*background: #272822;*/\r\n    /*min-height: 40px;\r\n    min-width: 40px;\r\n    height: 40px;\r\n    width: 40px;*/\r\n}\r\n\r\n.cell_wrap:hover,\r\n.cell_waitingSelect {\r\n    /*-moz-box-shadow:0 0 10px #000;*/\r\n    /*-webkit-box-shadow:0 0 10px #000;*/\r\n    /*box-shadow:0 0 10px #F8F8F0;*/\r\n}\r\n\r\n.cell_selected {\r\n    /*-moz-box-shadow:0 0 10px #000;*/\r\n    /*-webkit-box-shadow:0 0 10px #000;*/\r\n    /*box-shadow:0 0 10px #FF0066;*/\r\n}\r\n\r\n\r\n.cell_green { background: #A6E22E; }\r\n.cell_red { background: darkred; }\r\n.cell_magenta { background: #F92672; }\r\n.cell_blue { background: #65AADD; }\r\n\r\n.tile_hexagon_line_1,\r\n.tile_hexagon_line_2,\r\n.tile_hexagon_line_3 {\r\n    border: none;\r\n    background-color: #F8F8F0;\r\n    height: 1px;\r\n    width: 100%;\r\n    -moz-transform: rotate(7.5deg);\r\n    -o-transform: rotate(7.5deg);\r\n    -webkit-transform: rotate(7.5deg);\r\n    -ms-transform: rotate(7.5deg);\r\n}\r\n\r\n.tile_hexagon_line_1 {\r\n    transform: rotate(64deg);\r\n    margin-left: -6px;\r\n}\r\n\r\n.tile_hexagon_line_2 {\r\n    transform: rotate(116deg);\r\n    margin-left: -5px;\r\n}\r\n\r\n.tile_hexagon_line_3 {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n/* CELL_CONNECT: */\r\n\r\n.cell_connect {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.cell_connect_diagonalLeft,\r\n.cell_connect_diagonalRight,\r\n.cell_connect_line {\r\n    border: none;\r\n    background-color: #F8F8F0;\r\n    height: 4px;\r\n    width: 100%;\r\n    -moz-transform: rotate(7.5deg);\r\n    -o-transform: rotate(7.5deg);\r\n    -webkit-transform: rotate(7.5deg);\r\n    -ms-transform: rotate(7.5deg);\r\n}\r\n\r\n.cell_connect_diagonalLeft {\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.cell_connect_diagonalRight {\r\n    /*transform: rotate(45deg);*/\r\n}\r\n\r\n.cell_connect_line {\r\n    transform: rotate(0deg);\r\n}\r\n\r\n/* ADDITIONAL/LOG START: */\r\n/* Используем \"log\" т.к. так короче. */\r\n\r\n/*.log_wrap {\r\n    margin: 10px;\r\n    height: 200px;\r\n    width: 200px;\r\n    background: #272822;\r\n    color: #F8F8F0;\r\n    padding: 10px;\r\n}*/\r\n\r\n.log_tile {\r\n    margin: 0 10px 10px 10px;\r\n    background: #272822;\r\n    color: #F8F8F0;\r\n    padding: 10px;\r\n}\r\n\r\n.log_button {\r\n    height: 20px;\r\n    width: 160px;\r\n    background: #18191D;\r\n    padding: 10px;\r\n}\r\n\r\n.log_button_selected {\r\n    box-shadow:0 0 10px #FF0066;\r\n}\r\n\r\n/* ADDITIONAL/LOG END. */\r\n\r\n/* COMMON START: */\r\n.justifyCenter,\r\n.flexColumn,\r\n.flex {\r\n    display: flex;\r\n}\r\n\r\n.flexColumn {\r\n    flex-direction: column;\r\n}\r\n\r\n.justifySpaceBetween {\r\n    justify-content: space-between;\r\n}\r\n\r\n.cell_wrap,\r\n.justifyCenter {\r\n    justify-content: center;\r\n}\r\n\r\n/* COMMON END. */\r\n\r\n/* ВРЕМЕННЫЕ КОСТЫЛИ */\r\n\r\n.marginLeftMiddle {\r\n    margin-left: 25px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Таблица используемых цветов */\r\n\r\n/* #282E33 - светлый фон для тёмной темы */\r\n/* #272822 - monokai фон */\r\n/* #18191D - Тёмный фон */\r\n/* #65AADD - синий цвет */\r\n/* #F92672 - monokai розовй */\r\n/* #A6E22E - monokai зелёный */\r\n/* #F8F8F0 - monokai белый */\r\n/* #00CC99 - приятный зелёный */\r\n/* #FF0066 - розовый 2 */\r\n/* #FF9999 - розовая тень / акцент */\r\n\r\nbody {\r\n    background: #18191D;\r\n}\r\n\r\n.application {\r\n    justify-content: center;\r\n}\r\n\r\n.header {\r\n    height: 70px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    color: #F8F8F0;\r\n}\r\n\r\n.header_img {\r\n    height: 50px;\r\n    margin: 10px;\r\n}\r\n\r\n.tile_hexagon {\r\n    min-height: 40px;\r\n    min-width: 40px;\r\n    height: 40px;\r\n    width: 40px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n:root {\r\n    --hex-side: 22px;\r\n    --hex-rotate: 30deg;\r\n}\r\n\r\n.hexagon {\r\n    width: calc(var(--hex-side) * 1.732);\r\n    height: var(--hex-side);\r\n    position: relative;\r\n    transform: rotate(var(--hex-rotate));\r\n}\r\n\r\n.cell_waitingSelect .hexagon {\r\n    box-shadow:0 0 18px #FF9999;\r\n}\r\n\r\n.hexagon:hover {\r\n    box-shadow:0 0 25px #F8F8F0;\r\n}\r\n\r\n.cell_selected .hexagon {\r\n    box-shadow:0 0 10px #FF0066;\r\n}\r\n\r\n.hexagon:before,\r\n.hexagon:after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.hexagon_powerValue {\r\n    position: absolute;\r\n    z-index: 2;\r\n    font-weight: 600;\r\n     margin-top: 10px;\r\n    height: 37px;\r\n    width: 37px;\r\n    text-align: center;\r\n}\r\n\r\n.hexagon:before {\r\n    transform: rotate(60deg);\r\n}\r\n\r\n.hexagon:after {\r\n    transform: rotate(-60deg);\r\n}\r\n\r\n.tile_blue .hexagon:before,\r\n.tile_blue .hexagon:after,\r\n.tile_blue .hexagon {\r\n    background: #65AADD;\r\n}\r\n\r\n.tile_magenta .hexagon:before,\r\n.tile_magenta .hexagon:after,\r\n.tile_magenta .hexagon {\r\n    background: #F92672;\r\n}\r\n\r\n.tile_red .hexagon:before,\r\n.tile_red .hexagon:after,\r\n.tile_red .hexagon {\r\n    background: darkred;\r\n}\r\n\r\n.tile_green .hexagon:before,\r\n.tile_green .hexagon:after,\r\n.tile_green .hexagon {\r\n    background: #A6E22E;\r\n}\r\n\r\n.cell {\r\n    min-height: 35px;\r\n    min-width: 35px;\r\n    height: 35px;\r\n    width: 35px;\r\n    margin: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.cell_row {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* TODO: всё что cell заменить на square, изначально делал под квадрат. */\r\n/* TODO: временный коммент-костыль */\r\n.cell_empty { /*background: #282E33;*/ }\r\n.cell_waiting { background: #F92672; }\r\n\r\n.cell_wrap {\r\n    /*padding: 5px;*/\r\n    /* TODO: временный коммент-костыль */\r\n    /*background: #272822;*/\r\n    /*min-height: 40px;\r\n    min-width: 40px;\r\n    height: 40px;\r\n    width: 40px;*/\r\n}\r\n\r\n.cell_wrap:hover,\r\n.cell_waitingSelect {\r\n    /*-moz-box-shadow:0 0 10px #000;*/\r\n    /*-webkit-box-shadow:0 0 10px #000;*/\r\n    /*box-shadow:0 0 10px #F8F8F0;*/\r\n}\r\n\r\n.cell_selected {\r\n    /*-moz-box-shadow:0 0 10px #000;*/\r\n    /*-webkit-box-shadow:0 0 10px #000;*/\r\n    /*box-shadow:0 0 10px #FF0066;*/\r\n}\r\n\r\n\r\n.cell_green { background: #A6E22E; }\r\n.cell_red { background: darkred; }\r\n.cell_magenta { background: #F92672; }\r\n.cell_blue { background: #65AADD; }\r\n\r\n.tile_hexagon_line_1,\r\n.tile_hexagon_line_2,\r\n.tile_hexagon_line_3 {\r\n    border: none;\r\n    background-color: #F8F8F0;\r\n    height: 1px;\r\n    width: 100%;\r\n    -moz-transform: rotate(7.5deg);\r\n    -o-transform: rotate(7.5deg);\r\n    -webkit-transform: rotate(7.5deg);\r\n    -ms-transform: rotate(7.5deg);\r\n}\r\n\r\n.tile_hexagon_line_1 {\r\n    transform: rotate(64deg);\r\n    margin-left: -6px;\r\n}\r\n\r\n.tile_hexagon_line_2 {\r\n    transform: rotate(116deg);\r\n    margin-left: -5px;\r\n}\r\n\r\n.tile_hexagon_line_3 {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n/* CELL_CONNECT: */\r\n\r\n.cell_connect {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.cell_connect_diagonalLeft,\r\n.cell_connect_diagonalRight,\r\n.cell_connect_line {\r\n    border: none;\r\n    background-color: #F8F8F0;\r\n    height: 4px;\r\n    width: 100%;\r\n    -moz-transform: rotate(7.5deg);\r\n    -o-transform: rotate(7.5deg);\r\n    -webkit-transform: rotate(7.5deg);\r\n    -ms-transform: rotate(7.5deg);\r\n}\r\n\r\n.cell_connect_diagonalLeft {\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.cell_connect_diagonalRight {\r\n    /*transform: rotate(45deg);*/\r\n}\r\n\r\n.cell_connect_line {\r\n    transform: rotate(0deg);\r\n}\r\n\r\n/* ADDITIONAL/LOG START: */\r\n/* Используем \"log\" т.к. так короче. */\r\n\r\n/*.log_wrap {\r\n    margin: 10px;\r\n    height: 200px;\r\n    width: 200px;\r\n    background: #272822;\r\n    color: #F8F8F0;\r\n    padding: 10px;\r\n}*/\r\n\r\n.log_tile {\r\n    margin: 0 10px 10px 10px;\r\n    background: #272822;\r\n    color: #F8F8F0;\r\n    padding: 10px;\r\n}\r\n\r\n.log_button {\r\n    height: 20px;\r\n    width: 160px;\r\n    background: #18191D;\r\n    padding: 10px;\r\n}\r\n\r\n.log_button_selected {\r\n    box-shadow:0 0 10px #FF0066;\r\n}\r\n\r\n/* ADDITIONAL/LOG END. */\r\n\r\n/* COMMON START: */\r\n.justifyCenter,\r\n.flexColumn,\r\n.flex {\r\n    display: flex;\r\n}\r\n\r\n.flexColumn {\r\n    flex-direction: column;\r\n}\r\n\r\n.justifySpaceBetween {\r\n    justify-content: space-between;\r\n}\r\n\r\n.cell_wrap,\r\n.justifyCenter {\r\n    justify-content: center;\r\n}\r\n\r\n/* COMMON END. */\r\n\r\n/* ВРЕМЕННЫЕ КОСТЫЛИ */\r\n\r\n.marginLeftMiddle {\r\n    margin-left: 25px;\r\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/PowerGame.js":
/*!**************************!*\
  !*** ./src/PowerGame.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PowerGameApp)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data/index.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render/index.js");
/* harmony import */ var _power__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./power */ "./src/power/index.js");
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./library */ "./src/library/index.js");
/* harmony import */ var _power_powerTurn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./power/powerTurn */ "./src/power/powerTurn.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/constants.js");









/**
 * Игра PowerNumber.
 */
class PowerGameApp {
    constructor(config, domIds, isDev) {
        const RENDER_CONFIG = {
            USE_TABLE: config.USE_TABLE,
            DOM_IDS: domIds,
        }

        this.logicAPI = new _power__WEBPACK_IMPORTED_MODULE_2__.PowerLogicAPI(isDev);
        this.dataAPI = new _data__WEBPACK_IMPORTED_MODULE_0__.PowerDataAPI(this.dataHandler.bind(this), config, isDev);
        this.renderAPI = new _render__WEBPACK_IMPORTED_MODULE_1__.PowerRenderAPI(this.domHandler.bind(this), RENDER_CONFIG, isDev);

        this.config = config;

        this.isDev = isDev;
    }

    start() {
        this.renderAPI.createApp(this.dataAPI.matrix);
        this.dataAPI.setFirstTurn();

        if (this.isDev) {
            this.renderAPI.showDevButton(this.dataAPI.state.getCurrentStepType());

            window.testDataAPI = this.dataAPI;
            window.testRenderAPI = this.renderAPI;
            window.testLogicAPI = this.logicAPI;
        }
    }

    dataHandler(type, data) {
        if (_library__WEBPACK_IMPORTED_MODULE_3__.BASE_HANDLER_TYPES.ELEMENT_CHANGED === type) {
            const tile = this.dataAPI.getItemByPosition(data);

            this.renderAPI.rerenderTile(tile, this.config.MATRIX_TYPE);
        }

        if (_constants__WEBPACK_IMPORTED_MODULE_5__.TURN_BUTTON_EVENT_TYPES.HIGHLIGHT === type) {
            this.renderAPI.rerenderTurnButton(type, true);
        }

        if (_constants__WEBPACK_IMPORTED_MODULE_5__.TURN_BUTTON_EVENT_TYPES.ACTIVE_GIFT_VIEW === type) {
            this.renderAPI.rerenderTurnButton(type, data);
        }
    }

    domHandler(event, targetElement, type) {
        if (this.isDev) {
            console.log(event, targetElement, type);
        }

        if (_library__WEBPACK_IMPORTED_MODULE_3__.BASE_HANDLER_TYPES.TILE_CLICK === type) {
            (0,_power_powerTurn__WEBPACK_IMPORTED_MODULE_4__.tileClickHandler)(event, targetElement, this.dataAPI);
        }

        if (_constants__WEBPACK_IMPORTED_MODULE_5__.TURN_BUTTON_EVENTS.includes(type)) {
            this.logicAPI.turnButtonClickHandler(this.dataAPI, this.renderAPI, { type });
        }

        if (type === _constants__WEBPACK_IMPORTED_MODULE_5__.HANDLER_TYPE.DEV_DO_RANDOM_1) {
            this.logicAPI.devHandler(type, this.dataAPI, this.renderAPI);
        }
    }
}

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POWER_CONFIG": () => (/* binding */ POWER_CONFIG)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


/**
 * Базовый конфиг для построения приложения.
 */

// Можно поменять через настройки. Необходимо для дефолтной отрисовки.
const POWER_CONFIG = {
    MAP: {
        SIZE: {
            x: 15,
            y: 15,
        }
    },
    COUNT_PLAYER: 4,
    FIRST_TURN_INDEX: 0,
    MAX_POWER_VALUE: 8,
    MATRIX_TYPE: _constants__WEBPACK_IMPORTED_MODULE_0__.MATRIX_TYPES.HEXAGON,
    SORTING_TYPE: _constants__WEBPACK_IMPORTED_MODULE_0__.SORTING_TYPES.RANDOM,
    USE_TABLE: false,
};

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CALC_ATTACK_RESULTS": () => (/* binding */ CALC_ATTACK_RESULTS),
/* harmony export */   "CELL_TYPE": () => (/* binding */ CELL_TYPE),
/* harmony export */   "COLOR_LIST": () => (/* binding */ COLOR_LIST),
/* harmony export */   "CONNECT_TYPE": () => (/* binding */ CONNECT_TYPE),
/* harmony export */   "DEV_BUTTON_CAPTIONS": () => (/* binding */ DEV_BUTTON_CAPTIONS),
/* harmony export */   "HANDLER_TYPE": () => (/* binding */ HANDLER_TYPE),
/* harmony export */   "MATRIX_TYPES": () => (/* binding */ MATRIX_TYPES),
/* harmony export */   "SORTING_TYPES": () => (/* binding */ SORTING_TYPES),
/* harmony export */   "STEP_TYPE": () => (/* binding */ STEP_TYPE),
/* harmony export */   "TURN_BUTTON_EVENTS": () => (/* binding */ TURN_BUTTON_EVENTS),
/* harmony export */   "TURN_BUTTON_EVENT_TYPES": () => (/* binding */ TURN_BUTTON_EVENT_TYPES)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data/index.js");


/**
 * То что может использоваться везде.
 */

// Возможные варианты состояния клетки
const CELL_TYPE = {
    EMPTY: null,                                //
    WAITING: 'waiting',                         //
    WAITING_ALLOCATION: 'waitingAllocation',    // клетка под power, но не имеет принадлежности.
    READY: 'ready',                             //
    CONNECT_LINE: 'connectLine',                //
    WAITING_SELECT: 'waitingSelect',            // ожидание выбора, подсветка.
    SELECTED: 'selected',                       // выбранная/активная плитка
};

//
const CONNECT_TYPE = {
    LINE: 'line',
    LEFT_LINE: 'leftLine',
    RIGHT_LINE: 'rightLine',
    LEFT_TOP: 'leftTop',
    RIGHT_BOTTOM: 'rightBottom',

    LEFT_TO_BOTTOM: 'leftToBottom',
    RIGHT_TO_BOTTOM: 'rightToBottom',
    LEFT_TO_TOP: 'leftToTop',
    RIGHT_TO_TOP: 'rightToTop',
};

//
const COLOR_LIST = ['red', 'magenta', 'green', 'blue'];

// Возможные варианты состояния хода.
const STEP_TYPE = {
    GIVE_POWER: 'givePower',                // раздать power по завершению хода.
    CHOOSE_FOR_ATTACK: 'chooseForAttack',   // выбор своей клетки для атаки.
    ATTACK: 'attack',                       // выбор клетки оппонента для атаки.
    WAITING: 'waiting',                     // ожидание оппонента.
}

//
const HANDLER_TYPE = {
    TURN_BUTTON_CLICK: 'turnButtonClick',           // клик по "Следующий ход".
    GIFT_END_BUTTON_CLICK: 'giftEndButtonClick',    // клик по "Завершить раздачу".
    TILE_CLICK: 'tileClick',                        // клик по плитке.
    CHANGE_TURN_BUTTON: 'changeTurnButton',         //

    DEV_DO_RANDOM_1: 'devDoRandom1',                // клик по автовыполнению чего либо.
}

//
const CALC_ATTACK_RESULTS = {
    ATTACK: 'attack',
    DEFENSIVE: 'defensive',
}

const TURN_BUTTON_EVENTS = [
    HANDLER_TYPE.TURN_BUTTON_CLICK,
    HANDLER_TYPE.GIFT_END_BUTTON_CLICK
];

const TURN_BUTTON_EVENT_TYPES = {
    HIGHLIGHT: 'highlight',
    ACTIVE_GIFT_VIEW: 'activeGiftView',
    ACTIVE_TURN_BUTTON: 'activeTurnButton',
}

// Тип карты / тип элементов на карте.
const MATRIX_TYPES = {
    SIMPLE: _data__WEBPACK_IMPORTED_MODULE_0__.MATRIX_NAMES.SQUARE1_MATRIX_NAME,   // Квадрат с двумя связями. Нужен только для тестирования. Реализован через таблицу.
    HEXAGON: _data__WEBPACK_IMPORTED_MODULE_0__.MATRIX_NAMES.HEXAGON1_MATRIX_NAME, // Базовый тип с шестью связями.
}

// Тип распределения Power (кому какая клетка принадлежит).
const SORTING_TYPES = {
    RANDOM: 'random',
    FROM_FIRST: 'fromFirst',
}

const DEV_BUTTON_CAPTIONS = {
    MAKE_MOVE: 'Сделать ходы',
    GIVE_POWER: 'Раздать power',
}

/***/ }),

/***/ "./src/data/Data.js":
/*!**************************!*\
  !*** ./src/data/Data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerData": () => (/* binding */ PowerData)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/data/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library */ "./src/library/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/data/components/index.js");
/* harmony import */ var _components_State__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/State */ "./src/data/components/State.js");
/* harmony import */ var _components_Tile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Tile */ "./src/data/components/Tile.js");







/**
 * Создание данных, методы работы с данными без привязки к логике игры.
 */
class PowerData extends _library__WEBPACK_IMPORTED_MODULE_2__.DataHelper {

    initData() {
        this.playersName = this.getPlayersName();
        this.state = new _components_State__WEBPACK_IMPORTED_MODULE_4__.PowerState(this.playersName);
        this.matrix = new _components__WEBPACK_IMPORTED_MODULE_3__.PowerMatrix(this.config, this.state.getShotInfo());

        // TODO: реализовать нормальный функционал после раздела "настройки".
        const isPeopleFlag = 'default';
        if (isPeopleFlag === 'default') {
            this.state.setIsPeopleFlagTrue([this.playersName[0]]);
        }
    }

    decreaseAvailablePower(name) {
        --this.state[name].availablePower;
    }

    getPowerValue(position) {
        const tile = this.getItemByPosition(position);
        return tile.getPowerValue();
    }

    /**
     * Проставить availablePower в state
     *
     * @param {string} name
     * @param {number|string} value
     */
    setAvailablePower(name, value) {
        if (value === undefined) {
            value = this.matrix.getCountTilesByName(name);
        }

        this.state.setAvailablePower(name, value);
    }

    /**
     * TODO: переписать логику. При превышении значения снимать подсветку и не обрабатывать клик.
     */
    increasePowerValue(position) {
        let result = false;
        const item = this.getItemByPosition(position);

        if (item.powerValue < this.config.MAX_POWER_VALUE) {
            ++item.powerValue;
            result = true;
        }

        return result;
    }

    getFirstTurnName() {
        return this.playersName[this.config.FIRST_TURN_INDEX];
    }

    /**
     * TODO: это нужно рефакторить на более говорящие функции. Сократить по максимуму вызов метода и удалить потом.
     *
     * @param {string} name
     * @param {any} value
     * @param {boolean} useRerender
     */
    setStepType(name, value, useRerender = false) {
        this.state.changeStepType(name, value);
        this.state.setCurrentStepType(value);
        this.state.setCurrentTurn(name);

        // Подсвечиваем клетки в которые можно раздать power.
        if (value === _constants__WEBPACK_IMPORTED_MODULE_1__.STEP_TYPE.GIVE_POWER) {
            this.setCellTypeForAll(_constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TARGET_TYPE.byPlayerName, name, _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_TYPE.WAITING_SELECT, useRerender);
        }

        // Подсвечиваем клетки которые можно выбрать для атаки.
        if (value === _constants__WEBPACK_IMPORTED_MODULE_1__.STEP_TYPE.CHOOSE_FOR_ATTACK) {
            const tileList = this.matrix.getTileListByCanAttack(name);

            this.setCellTypeInList(tileList, _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_TYPE.WAITING_SELECT, useRerender);
        }
    }

    /**
     * Проставить stepType.
     *
     * @param {string} targetType - тип простановки. На все, по id, ещё какие-то выборки.
     * @param {any} target
     * @param {string} value
     * @param {boolean} useRerender
     */
    setCellTypeForAll(targetType, target, value, useRerender = false) {
        if (_constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TARGET_TYPE.byPlayerName === targetType) {
            const tileList = this.matrix.getTileListByPlayer(target);

            tileList.forEach(tile => {
                tile.setType(value);

                if (useRerender) {
                    this.rerenderByPosition(tile.position);
                }
            });
        }

        if (_constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TARGET_TYPE.byPosition === targetType) {
            const item = this.matrix.getItem(target);

            if (item?.type) {
                item.type = value;
            }

            if (useRerender) {
                this.rerenderByPosition(target);
            }
        }
    }

    /**
     * Проставить stepType для переданного списка.
     *
     * @param {array} list
     * @param {any} value
     * @param {boolean} useRerender
     */
    setCellTypeInList(list, value, useRerender = false) {
        list.forEach(tile => {
            tile.setType(value);

            if (useRerender) {
                this.rerenderByPosition(tile.position);
            }
        });
    }

    setCurrentStepType(type) {
        this.state.setCurrentStepType(type);
    }

    getOpponentTileList(myPosition) {
        return this.matrix.getOpponentLinkedTile(myPosition, this.config.MATRIX_TYPE);
    }

    resetWaitingSelect() {
        this.changeParamByParam(_components_Tile__WEBPACK_IMPORTED_MODULE_5__.MATRIX_FIELDS.TYPE, _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_TYPE.WAITING_SELECT, _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_TYPE.READY, true);
    }

    highlightActiveTile(position) {
        this.setCellTypeForAll(_constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TARGET_TYPE.byPosition, position, _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_TYPE.SELECTED, true);
    }


    highlightOpponent(myPosition) {
        const linkedList = this.getOpponentTileList(myPosition);

        linkedList.forEach(({ position }) => {
            this.setCellTypeForAll(_constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TARGET_TYPE.byPosition, position, _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_TYPE.WAITING_SELECT, true);
        });

        return linkedList;
    }

    resetHighlight() {
        const highlightList = [_constants__WEBPACK_IMPORTED_MODULE_1__.CELL_TYPE.WAITING_SELECT, _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_TYPE.SELECTED];

        this.changeParamByParam(_components_Tile__WEBPACK_IMPORTED_MODULE_5__.MATRIX_FIELDS.TYPE, highlightList, _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_TYPE.READY, true);
    }

    /**
     * Самый примитивный способ получения следующего игрока по очередности.
     *
     * @param {string} playerName
     */
    getNextPlayerName(playerName) {
        const playersList = this.state.getPlayersList();
        const currentIndex = playersList.indexOf(playerName);

        return playersList[currentIndex + 1] || playersList[0];
    }

    /**
     *
     * @return {object} { info, name }
     */
    getNextPlayerInfo() {
        const oldName = this.state.getCurrentTurn();
        const nextName = this.getNextPlayerName(oldName);
        const playerInfo = this.state.getPlayerInfo(nextName);

        return {
            info: { ...playerInfo },
            name: nextName,
        };
    }

    getAvailablePosition() {
        return this.state.getAvailablePosition();
    }

    setAvailablePosition(positionList) {
        this.state.setAvailablePosition(positionList);
    }

    setActiveTilePosition(position, isPeople = false) {
        if (isPeople) {
            this.highlightActiveTile(position);
        }
        this.setState(_components_State__WEBPACK_IMPORTED_MODULE_4__.STATE_FIELDS.ACTIVE_TILE_POSITION, { ...position });
    }

    getActiveTilePosition() {
        return this.state.getStateProperty(_components_State__WEBPACK_IMPORTED_MODULE_4__.STATE_FIELDS.ACTIVE_TILE_POSITION);
    }

    /**
     * TODO: вероятно нужно переместить часть логики в Tile чтобы не затаскивать MATRIX_FIELDS.
     */
    changeTileAfterAttack(attackPosition, defensivePosition, result) {
        const attackTile = this.getItemByPosition(attackPosition);
        const defensiveTile = this.getItemByPosition(defensivePosition);

        attackTile.setValues({
            [_components_Tile__WEBPACK_IMPORTED_MODULE_5__.MATRIX_FIELDS.POWER_VALUE]: result.activeValue,
            [_components_Tile__WEBPACK_IMPORTED_MODULE_5__.MATRIX_FIELDS.TYPE]: _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_TYPE.READY,
        });
        const defensiveTileIsChanges = defensiveTile.setValues({
            [_components_Tile__WEBPACK_IMPORTED_MODULE_5__.MATRIX_FIELDS.POWER_VALUE]: result.defensiveValue,
            [_components_Tile__WEBPACK_IMPORTED_MODULE_5__.MATRIX_FIELDS.PLAYER_NAME]: result.winner === _constants__WEBPACK_IMPORTED_MODULE_1__.CALC_ATTACK_RESULTS.ATTACK ? attackTile.getPlayerName() : defensiveTile.getPlayerName(),
            [_components_Tile__WEBPACK_IMPORTED_MODULE_5__.MATRIX_FIELDS.COLOR]: result.winner === _constants__WEBPACK_IMPORTED_MODULE_1__.CALC_ATTACK_RESULTS.ATTACK ? attackTile.getColor() : defensiveTile.getColor(),
            [_components_Tile__WEBPACK_IMPORTED_MODULE_5__.MATRIX_FIELDS.TYPE]: _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_TYPE.READY,
        });

        this.rerenderByPosition(attackPosition);

        // может не измениться если power 2 нападет на power 1.
        if (defensiveTileIsChanges) {
            this.rerenderByPosition(defensivePosition);
        }
    }

    /**
     *
     * @param {string} name - playerName.
     */
    changeStepAfterAttack(name) {
        this.state.resetActiveTilePosition();
        this.state.resetAvailablePosition();
        this.setStepType(name, _constants__WEBPACK_IMPORTED_MODULE_1__.STEP_TYPE.CHOOSE_FOR_ATTACK, true);
    }

    /**
     * Проверка на возможность совершить дальнейший ход.
     * Если человек - подсветить кнопку "Завершить ход".
     * Если компьютер - перейти к след. игроку.
     *
     * @param {string} name - playerName.
     */
    checkMoveIsCompleted(name) {
        const canAttackList = this.matrix.getTileListByCanAttack(name);
        const isPeople = this.state.getIsPeopleFlag(name);

        if (canAttackList.length === 0) {
            if (isPeople) {
                this.rerender(_constants__WEBPACK_IMPORTED_MODULE_1__.TURN_BUTTON_EVENT_TYPES.HIGHLIGHT);
            } else {
                // След. ход.
                console.log("isn't people");
            }
        }

        this.checkVictory();
    }

    checkVictory() {
        const list = this.matrix.getListWithOnlyPlayers();
        const filtered = list.filter((player, index, list) => player === list[0]);

        if (filtered.length === list.length) {
            alert('Кто-то победил! Но я пока не умею определять кто.');
        }
    }

    doGivePowerBase(playerName, position, useRerender = false) {
        const availablePower = this.state.getAvailablePower(playerName);

        // уменьшаем в state / меняем отображение.
        if (availablePower > 0) {
            const increaseResult = this.increasePowerValue(position);

            if (increaseResult) {
                const newPower = availablePower - 1;

                this.decreaseAvailablePower(playerName);
                this.rerenderByPosition(position);
                this.activeGiftView(newPower, useRerender);
            }
        }
    }

    // Если нет возможности раздавать - подсвечиваем кнопку.
    activeGiftView(amount, useRerender = false) {
        const highlight = amount === 0;
        const isRerenderCase = useRerender || highlight;

        if (isRerenderCase) {
            this.useHandlerWithCustom(_constants__WEBPACK_IMPORTED_MODULE_1__.TURN_BUTTON_EVENT_TYPES.ACTIVE_GIFT_VIEW, { highlight, amount });
        }
    }

    rerenderByPosition(position) {
        this.useHandler(position);
    }

    // TODO: для быстрой совместимости. Перейти на "useHandler".
    rerender(type) {
        this.useHandlerWithCustom(type);
    }

    // TODO: убрать дублирование
    checkPositionLimits({ x, y }) {
        const limitsMethod = (value, maxLimit) => value >= 0 && value <= maxLimit;

        return limitsMethod(x, this.config.MAP.SIZE.x) && limitsMethod(y, this.config.MAP.SIZE.y);
    }
}

/***/ }),

/***/ "./src/data/DataAPI.js":
/*!*****************************!*\
  !*** ./src/data/DataAPI.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerDataAPI": () => (/* binding */ PowerDataAPI)
/* harmony export */ });
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data */ "./src/data/Data.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _components_State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/State */ "./src/data/components/State.js");
/* harmony import */ var _power_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../power/main */ "./src/power/main.js");





/**
 * Расширяем данные "PowerData" методами для совершения ходов.
 * С постфикосм "PC" не выполняются промежуточные перерисовки.
 */
class PowerDataAPI extends _Data__WEBPACK_IMPORTED_MODULE_0__.PowerData {

    setFirstTurn() {
        const name = this.getFirstTurnName();

        this.setStepType(name, _constants__WEBPACK_IMPORTED_MODULE_1__.STEP_TYPE.CHOOSE_FOR_ATTACK, true);
    }

    // CHANGE TURN

    /**
     * Поменять статусы для совершения след. хода. Убрать подсветки.
     *
     * @param {string} newPlayerName
     */
    doNextTurn(newPlayerName) {

        // Сброс предыдущих состояний.
        this.resetHighlight();
        this.rerender('turnButtonInactive');

        // Установка новых состояний.
        this.setStepType(newPlayerName, _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_TYPE.WAITING_SELECT);
    }

    // FOR ATTACK

    /**
     * Выделяем клетку чтобы совершить атаку. Выделем клетки которые можно атаковать.
     *
     * @param {object} position
     * @param {boolean} useRerender - для хода компьютера не используем лишние перерисовки.
     */
    doSelectForAttack(position, useRerender = false) {
        this.resetWaitingSelect();
        this.setActiveTilePosition(position);
        const opponentList = this.highlightOpponent(position);
        const opponentPositionList = opponentList.map(item => item.position);
        this.setCurrentStepType(_constants__WEBPACK_IMPORTED_MODULE_1__.STEP_TYPE.ATTACK);
        this.setAvailablePosition(opponentPositionList);
    }

    /**
     * Отмена "doSelectForAttack", можно заново выбрать клетку для атаки.
     */
    doResetSelectForAttack() {
        const name = this.getStateProperty(_components_State__WEBPACK_IMPORTED_MODULE_2__.STATE_FIELDS.CURRENT_TURN);

        this.resetHighlight();
        this.setStepType(name, _constants__WEBPACK_IMPORTED_MODULE_1__.STEP_TYPE.CHOOSE_FOR_ATTACK, true);
    }

    /**
     *
     */
    doPeopleAttack(position) {
        const activePosition = this.getActiveTilePosition();
        const activePower = this.getPowerValue(activePosition);
        const defensivePower = this.getPowerValue(position);
        const currentTurn = this.state.getCurrentTurn();
        const attackResult = (0,_power_main__WEBPACK_IMPORTED_MODULE_3__.calcAttackResult)(activePower, defensivePower);

        this.changeTileAfterAttack(activePosition, position, attackResult);
        this.resetHighlight();
        this.changeStepAfterAttack(currentTurn);
        this.checkMoveIsCompleted(currentTurn);
    }

    /**
     *
     * @param {object} active - {x, y}
     * @param {object} defensive - {x, y}
     * @param {string} playerName
     */
    doPCAttack(active, defensive, playerName) {
        const activePower = this.getPowerValue(active);
        const defensivePower = this.getPowerValue(defensive);
        const attackResult = (0,_power_main__WEBPACK_IMPORTED_MODULE_3__.calcAttackResult)(activePower, defensivePower);

        this.changeTileAfterAttack(active, defensive, attackResult);
        this.resetHighlight();
        this.checkMoveIsCompleted(playerName);
    }

    // FOR GIVE POWER:

    /**
     * Перевести ход в стадию раздачи power.
     * Отображаем кол-во доступных power.
     */
    activeGivePowerStep(isPeople = false) {
        const playerName = this.state.getCurrentTurn();
        const tileList = this.matrix.getTileListByPlayer(playerName);

        this.setStepType(playerName, _constants__WEBPACK_IMPORTED_MODULE_1__.STEP_TYPE.GIVE_POWER, isPeople);
        this.setAvailablePower(playerName, tileList.length);

        if (isPeople) {
            this.activeGiftView(tileList.length, isPeople);
        }
    }

    /**
     * Раздаём power, проверки на возможность, смена статуса, изменеиня промежуточного отображения.
     *
     * @param {string} playerName.
     * @param {object} position { x, y }.
     */
    doGivePower(playerName, position) {
        this.doGivePowerBase(playerName, position, true);
    }

    /**
     * Раздать power.
     *
     * @param {string} playerName.
     * @param {object} position { x, y }.
     */
    doGivePowerPC(playerName, position) {
        this.doGivePowerBase(playerName, position);
    }
}

/***/ }),

/***/ "./src/data/components/Matrix.js":
/*!***************************************!*\
  !*** ./src/data/components/Matrix.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerMatrix": () => (/* binding */ PowerMatrix)
/* harmony export */ });
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library */ "./src/library/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile */ "./src/data/components/Tile.js");
/* harmony import */ var _matrixGenerators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matrixGenerators */ "./src/data/components/matrixGenerators/index.js");
/* harmony import */ var _matrixGenerators_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matrixGenerators/utils */ "./src/data/components/matrixGenerators/utils.js");







/**
 * Данные для карты.
 */
class PowerMatrix extends _library__WEBPACK_IMPORTED_MODULE_0__.BaseMatrix {

    /**
     * @param {object} config
     * @param {array} playerInfo - [ [name, color], ... ] .
     */
    constructor(config, playerInfo) {
        super(config.MAP);

        const emptyMatrix = this.getEmptyMatrix(config.MATRIX_TYPE, config.MAP.SIZE);
        const filledMatrix = this.getFilledMatrix(config.SORTING_TYPE, emptyMatrix, playerInfo);

        this.overwriteMatrix(filledMatrix);
        this.config = config;
    }

    /**
     *
     * @param {string} type
     * @param {object} size - { x, y }.
     */
    getEmptyMatrix(type, size) {
        switch (type) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__.MATRIX_TYPES.SIMPLE: return (0,_matrixGenerators__WEBPACK_IMPORTED_MODULE_3__.getSquareMatrix1)(size);
            case _constants__WEBPACK_IMPORTED_MODULE_1__.MATRIX_TYPES.HEXAGON: return (0,_matrixGenerators__WEBPACK_IMPORTED_MODULE_3__.getHexagonMatrix1)(size);
            default: return [[]];
        }
    }

    /**
     * Проставить принадлежность power tile.
     *
     * @param {SORTING_TYPES} type - тип заполнения Matrix.
     * @param {array} emptyMatrix.
     * @param {array} playerInfo - [ [name, color], ... ] .
     */
    getFilledMatrix(type, emptyMatrix, playerInfo) {
        switch (type) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__.SORTING_TYPES.RANDOM: return (0,_matrixGenerators_utils__WEBPACK_IMPORTED_MODULE_4__.setRandomPowerInMatrix)(emptyMatrix, playerInfo);
            // case SORTING_TYPES.FROM_FIRST: return setRandomPowerInMatrix(emptyMatrix, playerInfo);
            default: return emptyMatrix;
        }
    }

    /**
     * Через промежуточный массив, т.к. map попытается создать новый экземпляр PowerMatrix.
     *
     * @param {string} name - playerName.
     */
    getTileListByPlayer(name) {
        const filtered = [];

        this.forEach(row => {
            filtered.push(row.filter(tile => tile.playerName === name));
        });

        return filtered.flat();
    }

    getCountTilesByName(name) {
        return this.getTileListByPlayer(name).length;
    }

    getListWithOnlyPlayers() {
        const result = [];

        this.forEach(row => {
            row.forEach(tile => {
                if (!!tile.playerName) {
                    result.push(tile.playerName);
                }
            });
        });

        return result;
    }

    /**
     * Возвращает список tile, которые могут атаковать.
     *
     * @param {string} name - playerName.
     * @return {array}
     */
    getTileListByCanAttack(name) {
        const tileList = this.getTileListByPlayer(name);

        return tileList.filter(tile => {
            const neighbors = this.getNeighbors(tile);
            let result = false;

            // Есть соседние клетки и есть powerValue для атаки.
            if (neighbors.length && tile.powerValue > 1) {
                result = neighbors.some(neighborTile => neighborTile.playerName !== name);
            }

            return result;
        });
    }

    /**
     * Возвращает список доступных клеток через connectList.
     *
     * @param {Tile} tile
     * @param {string} scheme - схема / тип карты.
     * @return {array}
     */
    getNeighbors({ connectList, position }, scheme = _constants__WEBPACK_IMPORTED_MODULE_1__.MATRIX_TYPES.HEXAGON) {
        const { x: X, y: Y } = position;

        if (scheme === _constants__WEBPACK_IMPORTED_MODULE_1__.MATRIX_TYPES.SIMPLE) {
            const result = [];

            connectList.forEach(type => {
                let neighborPosition;

                if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.CONNECT_TYPE.LEFT_TOP) {
                    neighborPosition = { x: X - 1, y: Y - 1 };
                }

                if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.CONNECT_TYPE.RIGHT_BOTTOM) {
                    neighborPosition = { x: X + 1, y: Y + 1 };
                }

                result.push(this.getItem(neighborPosition));
            });

            return result;
        }

        if (scheme === _constants__WEBPACK_IMPORTED_MODULE_1__.MATRIX_TYPES.HEXAGON) {
            const result = [];

            connectList.forEach(type => {
                const neighborPosition = (0,_matrixGenerators__WEBPACK_IMPORTED_MODULE_3__.getNeighborHexagon1)(type, position);

                result.push(this.getItem(neighborPosition));
            });

            return result.filter(tile => !!tile);
        }
    }

    getOpponentLinkedTile(position, scheme) {
        const isOpponentCondition = (name1, name2) => name1 !== name2;
        const tile = this.getItem(position);
        const neighbors = this.getNeighbors(tile, scheme);

        return neighbors.filter(linkedTile => isOpponentCondition(
            linkedTile.getPlayerName(),
            tile.getPlayerName()
        ));
    }
}

/***/ }),

/***/ "./src/data/components/State.js":
/*!**************************************!*\
  !*** ./src/data/components/State.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerState": () => (/* binding */ PlayerState),
/* harmony export */   "PowerState": () => (/* binding */ PowerState),
/* harmony export */   "STATE_FIELDS": () => (/* binding */ STATE_FIELDS)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library */ "./src/library/index.js");



class PowerState extends _library__WEBPACK_IMPORTED_MODULE_1__.BaseState {
    constructor(names) {
        super();

        this[STATE_FIELDS.PLAYERS_LIST] = [ ...names ];
        this[STATE_FIELDS.CURRENT_TURN] = null;
        this[STATE_FIELDS.CURRENT_STEP_TYPE] = null;
        this[STATE_FIELDS.ACTIVE_TILE_POSITION] = {};
        this[STATE_FIELDS.AVAILABLE_POSITION] = [];

        names.forEach((name, index) => {
            this.setState(name, this.createPlayerStateObj(_constants__WEBPACK_IMPORTED_MODULE_0__.COLOR_LIST[index]));
        });
    }

    createPlayerStateObj(value) {
        return new PlayerState(value);
    }

    setCurrentStepType(value) {
        this.setState(STATE_FIELDS.CURRENT_STEP_TYPE, value);
    }

    getCurrentStepType() {
        return this.getStateProperty(STATE_FIELDS.CURRENT_STEP_TYPE);
    }

    getCurrentTurn() {
        return this.getStateProperty(STATE_FIELDS.CURRENT_TURN);
    }

    setCurrentTurn(value) {
        this.setState(STATE_FIELDS.CURRENT_TURN, value);
    }

    getPlayersList() {
        return this.getStateProperty(STATE_FIELDS.PLAYERS_LIST);
    }

    changeStepType(name, value) {
        this.setStepTypeByName(name, value);
        this.getPlayersList().forEach(otherName => {
            if (otherName !== name) {
                this.setStepTypeByName(otherName, _constants__WEBPACK_IMPORTED_MODULE_0__.STEP_TYPE.WAITING);
            }
        });
    }

    setStepTypeByName(name, value) {
        this[name].setStepType(value);
    }

    getAvailablePower(playerName) {
        return this[playerName][STATE_FIELDS.AVAILABLE_POWER];
    }

    setAvailablePower(playerName, power) {
        this[playerName][STATE_FIELDS.AVAILABLE_POWER] = power;
    }

    getAvailablePosition() {
        return this.getStateProperty(STATE_FIELDS.AVAILABLE_POSITION);
    }

    setAvailablePosition(value) {
        this.setState(STATE_FIELDS.AVAILABLE_POSITION, value);
    }

    resetAvailablePosition() {
        this.setState(STATE_FIELDS.AVAILABLE_POSITION, []);
    }

    resetActiveTilePosition() {
        this.setState(STATE_FIELDS.ACTIVE_TILE_POSITION, {});
    }

    setIsPeopleFlagTrue(peopleNameList) {
        peopleNameList.forEach(name => {
            this[name].setIsPeopleFlag(true);
        });
    }

    getIsPeopleFlag(playerName) {
        return this[playerName].getIsPeopleFlag();
    }

    getPlayerInfo(playerName) {
        return this[playerName];
    }

    getPlayerColor(playerName) {
        return this.getPlayerInfo(playerName).value;
    }

    /**
     * @return {array} [ [name, color], ... ] .
     */
    getShotInfo() {
        return this.getPlayersList().map(name => [name, this.getPlayerColor(name)]);
    }
}

/**
 *
 */
class PlayerState extends _library__WEBPACK_IMPORTED_MODULE_1__.BaseState {
    constructor(value) {
        super();

        this[STATE_FIELDS.STEP_TYPE] = null;
        this[STATE_FIELDS.VALUE] = value || '';
        this[STATE_FIELDS.AVAILABLE_POWER] = 0;
        this[STATE_FIELDS.IS_PEOPLE] = false;
    }

    setStepType(type) {
        this.setState(STATE_FIELDS.STEP_TYPE, type)
    }

    setIsPeopleFlag(value) {
        this.setState(STATE_FIELDS.IS_PEOPLE, value);
    }

    getIsPeopleFlag() {
        return this.getStateProperty(STATE_FIELDS.IS_PEOPLE);
    }
}

const STATE_FIELDS = {
    STEP_TYPE: 'stepType',                  // шаг/тип действия на клетке.
    VALUE: 'value',                         // цвет.
    AVAILABLE_POWER: 'availablePower',      // доступно power.
    PLAYERS_LIST: 'playersList',            // список игроков.
    CURRENT_TURN: 'currentTurn',            // текущий ход, активный игрок.
    CURRENT_STEP_TYPE: 'currentStepType',   // этап текущего хода.
    ACTIVE_TILE_POSITION: 'activeTilePosition', // координаты активной плитки.
    AVAILABLE_POSITION: 'availablePosition',    // доступные для активной клетки ходы.
    IS_PEOPLE: 'isPeople',                  // флаг, человек.
}

/***/ }),

/***/ "./src/data/components/Tile.js":
/*!*************************************!*\
  !*** ./src/data/components/Tile.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MATRIX_FIELDS": () => (/* binding */ MATRIX_FIELDS),
/* harmony export */   "Tile": () => (/* binding */ Tile)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");


class Tile {
    constructor(position = { x: 0, y: 0 }, type = _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.EMPTY, connectType) {
        this[MATRIX_FIELDS.POWER_VALUE] = null;
        this[MATRIX_FIELDS.POSITION] = { ...position };
        this[MATRIX_FIELDS.TYPE] = type;
        this[MATRIX_FIELDS.CONNECT_LIST] = [];

        if (connectType) {
            this[MATRIX_FIELDS.CONNECT_TYPE] = connectType;
        }
    }

    setProperty(property, value) {
        this[property] = value;
    }

    getPowerValue() {
        return this[MATRIX_FIELDS.POWER_VALUE];
    }

    getColor() {
        return this[MATRIX_FIELDS.COLOR];
    }

    getPlayerName() {
        return this[MATRIX_FIELDS.PLAYER_NAME];
    }

    getType() {
        return this[MATRIX_FIELDS.TYPE];
    }

    /**
     *
     * @param {MATRIX_FIELDS} value
     */
    setType(value) {
        this.setProperty(MATRIX_FIELDS.TYPE, value);
    }

    /**
     * @param {object} values
     * @return {boolean} is changed
     */
    setValues(values = {}) {
        const property = Object.values(MATRIX_FIELDS);
        let result = false;

        for (let key in values) {
            if (property.includes(key)) {
                if (this[key] !== values[key]) {
                    this.setProperty(key, values[key]);
                    result = true;
                }
            }
        }

        return result;
    }

    /**
     *
     * @param {string} value
     */
    addToConnectList(value) {
        if (!this[MATRIX_FIELDS.CONNECT_LIST].includes(value)) {
            this[MATRIX_FIELDS.CONNECT_LIST].push(value);
        }
    }
}

const MATRIX_FIELDS = {
    TYPE: 'type',
    POWER_VALUE: 'powerValue',
    POSITION: 'position',
    CONNECT_LIST: 'connectList',
    PLAYER_NAME: 'playerName',
    COLOR: 'color',
    CONNECT_TYPE: 'connectType',
};

/***/ }),

/***/ "./src/data/components/index.js":
/*!**************************************!*\
  !*** ./src/data/components/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MATRIX_NAMES": () => (/* reexport safe */ _matrixGenerators__WEBPACK_IMPORTED_MODULE_3__.MATRIX_NAMES),
/* harmony export */   "PowerMatrix": () => (/* reexport safe */ _Matrix__WEBPACK_IMPORTED_MODULE_0__.PowerMatrix),
/* harmony export */   "PowerState": () => (/* reexport safe */ _State__WEBPACK_IMPORTED_MODULE_1__.PowerState),
/* harmony export */   "Tile": () => (/* reexport safe */ _Tile__WEBPACK_IMPORTED_MODULE_2__.Tile)
/* harmony export */ });
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix */ "./src/data/components/Matrix.js");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State */ "./src/data/components/State.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile */ "./src/data/components/Tile.js");
/* harmony import */ var _matrixGenerators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matrixGenerators */ "./src/data/components/matrixGenerators/index.js");








/***/ }),

/***/ "./src/data/components/matrixGenerators/hexagon1.js":
/*!**********************************************************!*\
  !*** ./src/data/components/matrixGenerators/hexagon1.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MATRIX_NAME": () => (/* binding */ MATRIX_NAME),
/* harmony export */   "getHexagonMatrix1": () => (/* binding */ getHexagonMatrix1),
/* harmony export */   "getNeighbor": () => (/* binding */ getNeighbor)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tile */ "./src/data/components/Tile.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/data/components/matrixGenerators/utils.js");




const MATRIX_NAME = 'hexagon1';

/**
 * Гексагон который максимально заполнен элементами.
 *
 * @param {object} size { x, y }.
 */
const getHexagonMatrix1 = (size) => {
    const matrix = [];

    // Расставляем элементы.
    for (let i = 0; i < size.y; i++) {
        const row = [];
        const isPowerRow = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isEvenNumber)(i);     // Через одну идут строки с power.

        for (let j = 0; j < size.x; j++) {
            const isEvenTile = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isEvenNumber)(j);

            // PowerRow - можно ставить Power-клетки и горизонтальные связи.
            if (isPowerRow) {
                const isOffsetRow = (i + 2) % 4 === 0;  // Через одну строка с Power-клетками(PowerRow) идут со сдвигом для связей.
                let type;

                // Смещаем Power-элемент где это необходимо.
                if (isOffsetRow) {
                    // Крайние клетки не имеют горизонтальных связей.
                    type = isEvenTile
                        ? j !== 0 && j !== size.x - 1 ? _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.CONNECT_LINE : _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.EMPTY
                        : _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.WAITING_ALLOCATION;
                } else {
                    type = isEvenTile
                        ? _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.WAITING_ALLOCATION
                        : j !== 0 || j !== size.x - 1 ? _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.CONNECT_LINE : _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.EMPTY;
                }

                const connectType = type === _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.CONNECT_LINE ? _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.LINE : undefined;

                row.push(new _Tile__WEBPACK_IMPORTED_MODULE_1__.Tile({ x: j, y: i }, type, connectType));
            } else {
                const isEndRow = i === (size.y - 1);
                const isEndTile = j === (size.x - 1);
                const isFunnelRow = (i + 3) % 4 === 0;    // связи образуют визуальную воронку.

                // 1 - Нечего вертикально связывать.
                // 2 - В таком случае не будет нижнего Power-Row.
                // TODO: предупреждать на этапе получения конфига.
                if (isEndTile || isEndRow) {
                    row.push(new _Tile__WEBPACK_IMPORTED_MODULE_1__.Tile({ x: j, y: i }, _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.EMPTY));
                    break;
                }

                const connectType = isFunnelRow
                    ? isEvenTile ? _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.LEFT_TO_BOTTOM : _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.RIGHT_TO_BOTTOM
                    : isEvenTile ? _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.RIGHT_TO_BOTTOM : _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.LEFT_TO_BOTTOM;

                row.push(new _Tile__WEBPACK_IMPORTED_MODULE_1__.Tile({ x: j, y: i }, _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.CONNECT_LINE, connectType));
            }
        }

        matrix.push(row);
    }

    // Заполняем поле Tile connectType.
    matrix.forEach((row, yIndex) => {
        row.forEach((tile, xIndex) => {
            if (tile.type === _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.WAITING_ALLOCATION) {
                const neighborsPositionList = [
                    [{y: yIndex, x: xIndex - 2}, _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.LEFT_LINE],
                    [{y: yIndex, x: xIndex + 2}, _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.RIGHT_LINE],

                    [{y: yIndex - 2, x: xIndex - 1}, _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.RIGHT_TO_TOP],
                    [{y: yIndex - 2, x: xIndex + 1}, _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.LEFT_TO_TOP],

                    [{y: yIndex + 2, x: xIndex - 1}, _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.RIGHT_TO_BOTTOM],
                    [{y: yIndex + 2, x: xIndex + 1}, _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.LEFT_TO_BOTTOM],
                ];

                neighborsPositionList.forEach(item => {
                    const [position, type] = item;

                    if (
                        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.checkPositionLimits)(position, { maxX: size.x, maxY: size.y })
                        && matrix[yIndex][xIndex].type === _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.WAITING_ALLOCATION
                    ) {
                        tile.addToConnectList(type);
                    }
                });
            }
        });
    });

    return matrix;
}

const getNeighbor = (connectType, { x, y }) => {
    switch (connectType) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.LEFT_TO_BOTTOM: return { x: x + 1, y: y + 2 };
        case _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.RIGHT_TO_BOTTOM: return { x: x - 1, y: y + 2 };
        case _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.LEFT_TO_TOP: return { x: x + 1, y: y - 2 };
        case _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.RIGHT_TO_TOP: return { x: x - 1, y: y - 2 };
        case _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.LEFT_LINE: return { x: x - 2, y: y };
        case _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.RIGHT_LINE: return { x: x + 2, y: y };
        case _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.READY: return undefined;
    }
}

/***/ }),

/***/ "./src/data/components/matrixGenerators/index.js":
/*!*******************************************************!*\
  !*** ./src/data/components/matrixGenerators/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MATRIX_NAMES": () => (/* binding */ MATRIX_NAMES),
/* harmony export */   "getHexagonMatrix1": () => (/* reexport safe */ _hexagon1__WEBPACK_IMPORTED_MODULE_0__.getHexagonMatrix1),
/* harmony export */   "getNeighborHexagon1": () => (/* reexport safe */ _hexagon1__WEBPACK_IMPORTED_MODULE_0__.getNeighbor),
/* harmony export */   "getSquareMatrix1": () => (/* reexport safe */ _square1__WEBPACK_IMPORTED_MODULE_1__.getSquareMatrix1)
/* harmony export */ });
/* harmony import */ var _hexagon1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hexagon1 */ "./src/data/components/matrixGenerators/hexagon1.js");
/* harmony import */ var _square1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./square1 */ "./src/data/components/matrixGenerators/square1.js");






const MATRIX_NAMES = {
    HEXAGON1_MATRIX_NAME: _hexagon1__WEBPACK_IMPORTED_MODULE_0__.MATRIX_NAME,
    SQUARE1_MATRIX_NAME: _square1__WEBPACK_IMPORTED_MODULE_1__.MATRIX_NAME,
}

/***/ }),

/***/ "./src/data/components/matrixGenerators/square1.js":
/*!*********************************************************!*\
  !*** ./src/data/components/matrixGenerators/square1.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MATRIX_NAME": () => (/* binding */ MATRIX_NAME),
/* harmony export */   "getSquareMatrix1": () => (/* binding */ getSquareMatrix1)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tile */ "./src/data/components/Tile.js");



const MATRIX_NAME = 'simple';

/**
 * Квадрат с двумя связями.
 * Первый способ реализации для тестирования.
 *
 * @param {object} size - { x, y }.
 */
const getSquareMatrix1 = (size) => {
    const result = [];

    for (let i = 0; i < size.y; i++) {
        let rowResult = [];
        for (let j = 0; j < size.x; j++) {
            const type = i % 2 === 0
                ? j % 2 === 0 ? _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.WAITING : _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.EMPTY
                : j % 2 === 0 ? _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.EMPTY : _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.WAITING;
            rowResult.push(new _Tile__WEBPACK_IMPORTED_MODULE_1__.Tile({ x: j, y: i }, type));
        }

        /* Проставляем верхние связи слева. */
        if (result.length) {
            rowResult.forEach((item, index) => {
                if (item.type === _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.WAITING) {
                    const previousRow = result[result.length - 1];
                    if (previousRow[index - 1]?.type === _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.WAITING) {
                        item.connectList.push(_constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.LEFT_TOP);
                        previousRow[index - 1].connectList.push(_constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.RIGHT_BOTTOM);
                    }
                }
            });
        }

        result.push(rowResult);
    }

    return result;
}

/***/ }),

/***/ "./src/data/components/matrixGenerators/utils.js":
/*!*******************************************************!*\
  !*** ./src/data/components/matrixGenerators/utils.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkPositionLimits": () => (/* binding */ checkPositionLimits),
/* harmony export */   "isEvenNumber": () => (/* binding */ isEvenNumber),
/* harmony export */   "setRandomPowerInMatrix": () => (/* binding */ setRandomPowerInMatrix)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _library_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/utils */ "./src/library/utils.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tile */ "./src/data/components/Tile.js");




/**
 * Проверка чётное ли число.
 *
 * @param {number} value
 */
const isEvenNumber = value => value % 2 === 0;

/**
 * Проверка границ. Дублируется.
 *
 * @param {object} position - { x, y }.
 * @param {object} limits - { maxX, maxY }.
 */
const checkPositionLimits = ({ x, y }, { maxX, maxY }) => {
    const limitsMethod = (value, maxLimit) => value >= 0 && value <= maxLimit;

    return limitsMethod(x, maxX) && limitsMethod(y, maxY);
}

/**
 * Смысл метода: сделать рандомное расположение для игроков и их клеток.
 * Формируем список свободных клеток -> выбираем рандомную из них -> перестраиваем массив.
 * По итогу из массива строим отображение.
 *
 * @param {array} matrix
 * @param {array} playerInfo
 */
const setRandomPowerInMatrix = (matrix, playerInfo) => {
    const waitingList = matrix.reduce((acc, item) => {
        const list = item.filter(item => item.type === _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.WAITING_ALLOCATION).map(item => item.position);

        return [...acc, ...list];
    }, []);
    const ceilByCount = Math.ceil(waitingList.length / playerInfo.length);

    playerInfo.forEach(info => {
        const [playerName, playerColor] = info;

        for (let i = 0; i < ceilByCount; i++) {
            if (waitingList.length) {
                const currentRandom = (0,_library_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(waitingList.length - 1);
                const currentPosition = waitingList[currentRandom];

                matrix[currentPosition.y][currentPosition.x].setValues({
                    [_Tile__WEBPACK_IMPORTED_MODULE_2__.MATRIX_FIELDS.POWER_VALUE]: 2,
                    [_Tile__WEBPACK_IMPORTED_MODULE_2__.MATRIX_FIELDS.COLOR]: playerColor,
                    [_Tile__WEBPACK_IMPORTED_MODULE_2__.MATRIX_FIELDS.PLAYER_NAME]: playerName,
                    [_Tile__WEBPACK_IMPORTED_MODULE_2__.MATRIX_FIELDS.TYPE]: _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.READY,
                });

                waitingList.splice(currentRandom, 1);
            }
        }
    });

    return matrix;
}


/***/ }),

/***/ "./src/data/constants.js":
/*!*******************************!*\
  !*** ./src/data/constants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CELL_TARGET_TYPE": () => (/* binding */ CELL_TARGET_TYPE)
/* harmony export */ });
const CELL_TARGET_TYPE = {
    byPlayerName: 'byPlayerName',
    byPosition: 'byPosition',
};

/***/ }),

/***/ "./src/data/index.js":
/*!***************************!*\
  !*** ./src/data/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MATRIX_NAMES": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.MATRIX_NAMES),
/* harmony export */   "PowerDataAPI": () => (/* reexport safe */ _DataAPI__WEBPACK_IMPORTED_MODULE_0__.PowerDataAPI)
/* harmony export */ });
/* harmony import */ var _DataAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataAPI */ "./src/data/DataAPI.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/data/components/index.js");




/***/ }),

/***/ "./src/library/base/ConfigHelper.js":
/*!******************************************!*\
  !*** ./src/library/base/ConfigHelper.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigHelper": () => (/* binding */ ConfigHelper)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/library/base/base.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/library/base/constants.js");



/**
 *
 */
class ConfigHelper extends _base__WEBPACK_IMPORTED_MODULE_0__.Base {
    constructor(config) {
        super();

        this.REQUIRED_FIELDS = _constants__WEBPACK_IMPORTED_MODULE_1__.CONFIG_REQUIRED_FIELDS;
        this.ERROR_TEXT = _constants__WEBPACK_IMPORTED_MODULE_1__.CONFIG_ERROR_TEXT;

        for (let key in config) {
            this[key] = config[key];
        }

        this.checkRequiredFields();
    }

    getValue(field) {
        return this[field];
    }

    setValue(field, value) {
        this[field] = value;
    }
}

/***/ }),

/***/ "./src/library/base/base.js":
/*!**********************************!*\
  !*** ./src/library/base/base.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base": () => (/* binding */ Base)
/* harmony export */ });
/**
 * Общее для Data и Render.
 */
class Base {

    /**
     * Проверка что переданы / определены необходимые поля.
     */
    checkRequiredFields() {
        let hasError = false;

        if (!this.REQUIRED_FIELDS || this.REQUIRED_FIELDS?.length === 0) {
            return true;
        }

        this.REQUIRED_FIELDS.forEach(fieldName => {
            if (this[fieldName] === undefined) {
                hasError = true;

                console.log(this.ERROR_TEXT[fieldName.toUpperCase()]);
            }
        });

        return !hasError;
    }
}

/***/ }),

/***/ "./src/library/base/constants.js":
/*!***************************************!*\
  !*** ./src/library/base/constants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_HANDLER_TYPES": () => (/* binding */ BASE_HANDLER_TYPES),
/* harmony export */   "CONFIG_ERROR_TEXT": () => (/* binding */ CONFIG_ERROR_TEXT),
/* harmony export */   "CONFIG_REQUIRED_FIELDS": () => (/* binding */ CONFIG_REQUIRED_FIELDS)
/* harmony export */ });
/**
 * Базовые типы событий.
 */
const BASE_HANDLER_TYPES = {
    ELEMENT_CHANGED: 'elementChanged',
    TILE_CLICK: 'tileClick',
}

const CONFIG_REQUIRED_FIELDS = ['COUNT_PLAYER', 'MAP'];

const CONFIG_ERROR_TEXT = {
    COUNT_PLAYER: 'Не передан COUNT_PLAYER',
    MAP: 'Не передан MAP',
};

/***/ }),

/***/ "./src/library/base/index.js":
/*!***********************************!*\
  !*** ./src/library/base/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_HANDLER_TYPES": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.BASE_HANDLER_TYPES),
/* harmony export */   "Base": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.Base),
/* harmony export */   "ConfigHelper": () => (/* reexport safe */ _ConfigHelper__WEBPACK_IMPORTED_MODULE_2__.ConfigHelper)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/library/base/base.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/library/base/constants.js");
/* harmony import */ var _ConfigHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfigHelper */ "./src/library/base/ConfigHelper.js");




/***/ }),

/***/ "./src/library/data/DataHelper.js":
/*!****************************************!*\
  !*** ./src/library/data/DataHelper.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataHelper": () => (/* binding */ DataHelper)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/library/base/index.js");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State */ "./src/library/data/State.js");
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Matrix */ "./src/library/data/Matrix.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/library/data/constants.js");





/**
 * Универсальные методы для работы с данными.
 * Данные в виде матрицы по переданным размерам.
 *
 * config - размер matrix которую необходимо построить.
 * handler - вызов при изменении полей matrix.
 */
class DataHelper extends _base__WEBPACK_IMPORTED_MODULE_0__.Base {
    constructor(handler, config, isDev = false) {
        super();

        this.REQUIRED_FIELDS = _constants__WEBPACK_IMPORTED_MODULE_3__.REQUIRED_FIELDS;
        this.ERROR_TEXT = _constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_TEXT;

        this.handler = handler;
        this.config = new _base__WEBPACK_IMPORTED_MODULE_0__.ConfigHelper(config);
        this.isDev = isDev;

        const checkResult = this.checkRequiredFields();

        if (checkResult || isDev) {
            this.initData();
        }
    }

    /**
     * Определение минимально необходимых данных.
     */
    initData() {
        this.state = new _State__WEBPACK_IMPORTED_MODULE_1__.BaseState();
        this.matrix = new _Matrix__WEBPACK_IMPORTED_MODULE_2__.BaseMatrix(this.config.MAP);
    }

    setState(property, value) {
        this.state.setState(property, value);
    }

    getStateProperty(property) {
        return this.state.getStateProperty(property);
    }

    /**
     * Возвращает имена/ключи игроков самым простым способом.
     */
    getPlayersName() {
        const value = this.getNumberOfPlayers();
        const result = [];

        for (let i = 0; i < value; i++) {
            result.push(_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_PLAYER_NAME + i);
        }

        return result;
    }

    getNumberOfPlayers() {
        return this.config.COUNT_PLAYER || 1;
    }

    /**
     * Получить элемент матрицы по координатам.
     *
     * @param {object} position - { x, y } .
     */
    getItemByPosition(position) {
        return this.matrix.getItem(position);
    }

    /**
     * Меняем одно переданное значение на другое
     *
     * @param {string} property
     * @param {any|array} oldValue
     * @param {any} newValue
     * @param {boolean} useHandler
     */
    changeParamByParam(property, oldValue, newValue, useHandler = false) {
        const changedList = this.matrix.changeParamByParam(property, oldValue, newValue);

        if (useHandler) {
            changedList.forEach(position => {
                this.useHandler(position);
            });
        }
    }

    /**
     * Событие изменения элемента.
     *
     * @param {object} position - { x, y } .
     */
    useHandler(position) {
        this.useHandlerWithCustom(_base__WEBPACK_IMPORTED_MODULE_0__.BASE_HANDLER_TYPES.ELEMENT_CHANGED, position);
    }

    /**
     * Любое событие.
     *
     * @param {string} type
     * @param {any} data
     */
    useHandlerWithCustom(type, data) {
        this.handler(type, data);
    }
}

/***/ }),

/***/ "./src/library/data/Matrix.js":
/*!************************************!*\
  !*** ./src/library/data/Matrix.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseMatrix": () => (/* binding */ BaseMatrix)
/* harmony export */ });
/**
 * Самые простые методы для работы с данными в виде матрицы.
 */
class BaseMatrix extends Array {

    constructor(config) {
        super();

        this.MAX_X = config.SIZE.x;
        this.MAX_Y = config.SIZE.y;
    }

    /**
     * Принимаем матрицу и последовательно записывает её.
     *
     * @param {array} matrix.
     */
    overwriteMatrix(matrix) {
        matrix.forEach((row, index) => {
            this[index] = row;
        });
    }

    /**
     * Получить элемент матрицы.
     *
     * @param {object} position - { x, y } .
     */
    getItem({ x, y }) {
        if (!this.checkPositionLimits({ x, y })) {
            console.log('checkPositionLimits ERROR');

            return null;
        }

        return this[y][x];
    }

    /**
     * Меняем одно переданное значение на другое
     *
     * @param {string} property
     * @param {any|array} oldValue
     * @param {any} newValue
     *
     * @return {array} [{ x, y }]. Координаты изменённых элементов.
     */
    changeParamByParam(property, oldValue, newValue) {
        const changedList = [];

        this.forEach(row => {
            row.forEach(item => {
                let isEqual;

                if (Array.isArray(oldValue)) {
                    isEqual = oldValue.some(oldValueItem => oldValueItem === item[property]);
                } else {
                    isEqual = item[property] === oldValue;
                }

                if (isEqual) {
                    item[property] = newValue;

                    changedList.push(item.position);
                }
            });
        });

        return changedList;
    }

    /**
     *
     */
    getEmptyMatrix() {
        if (!this.MAX_X && !this.MAX_Y) {
            return [[]];
        }

        for (let i = 0; i < this.MAX_Y; i++) {
            let rowResult = [];

            for (let j = 0; j < this.MAX_X; j++) {
                rowResult.push({ x: j, y: i });
            }

            result.push(rowResult);
        }

        return result;
    }

    /**
     * Проверка соответствию границы матрицы.
     */
    checkPositionLimits({ x, y }) {
        const limitsMethod = (value, maxLimit) => value >= 0 && value <= maxLimit;

        return limitsMethod(x, this.MAX_X) && limitsMethod(y, this.MAX_Y);
    }
}

/***/ }),

/***/ "./src/library/data/State.js":
/*!***********************************!*\
  !*** ./src/library/data/State.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseState": () => (/* binding */ BaseState)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/library/base/index.js");


/**
 * Самые простые методы для работы с состоянием приложения или его отдельных частей.
 */
class BaseState extends _base__WEBPACK_IMPORTED_MODULE_0__.Base {
    setState(property, value) {
        if (property) {
            this[property] = value;
        }
    }

    getStateProperty(property) {
        return this[property];
    }
}

/***/ }),

/***/ "./src/library/data/constants.js":
/*!***************************************!*\
  !*** ./src/library/data/constants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_PLAYER_NAME": () => (/* binding */ DEFAULT_PLAYER_NAME),
/* harmony export */   "ERROR_TEXT": () => (/* binding */ ERROR_TEXT),
/* harmony export */   "REQUIRED_FIELDS": () => (/* binding */ REQUIRED_FIELDS)
/* harmony export */ });
const ERROR_TEXT = {
    HANDLER: 'Не передан handler',
    CONFIG: 'Не передан config',
}

// Обязательные поля для "DataHelper".
const REQUIRED_FIELDS = ['handler', 'config'];

const DEFAULT_PLAYER_NAME = 'player';

/***/ }),

/***/ "./src/library/index.js":
/*!******************************!*\
  !*** ./src/library/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_HANDLER_TYPES": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_1__.BASE_HANDLER_TYPES),
/* harmony export */   "BaseComponent": () => (/* reexport safe */ _render_components_Base__WEBPACK_IMPORTED_MODULE_0__.BaseComponent),
/* harmony export */   "BaseMatrix": () => (/* reexport safe */ _data_Matrix__WEBPACK_IMPORTED_MODULE_5__.BaseMatrix),
/* harmony export */   "BaseState": () => (/* reexport safe */ _data_State__WEBPACK_IMPORTED_MODULE_4__.BaseState),
/* harmony export */   "COMMON": () => (/* binding */ COMMON),
/* harmony export */   "DataHelper": () => (/* reexport safe */ _data_DataHelper__WEBPACK_IMPORTED_MODULE_3__.DataHelper),
/* harmony export */   "RenderHelper": () => (/* reexport safe */ _render_RenderHelper__WEBPACK_IMPORTED_MODULE_2__.RenderHelper),
/* harmony export */   "renderUtils": () => (/* binding */ renderUtils)
/* harmony export */ });
/* harmony import */ var _render_components_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render/components/Base */ "./src/library/render/components/Base.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/library/base/index.js");
/* harmony import */ var _render_RenderHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render/RenderHelper */ "./src/library/render/RenderHelper.js");
/* harmony import */ var _data_DataHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/DataHelper */ "./src/library/data/DataHelper.js");
/* harmony import */ var _data_State__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/State */ "./src/library/data/State.js");
/* harmony import */ var _data_Matrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/Matrix */ "./src/library/data/Matrix.js");
/* harmony import */ var _render_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render/utils */ "./src/library/render/utils.js");
/* harmony import */ var _render_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./render/constants */ "./src/library/render/constants.js");











const renderUtils = {
    getEmptyDiv: _render_utils__WEBPACK_IMPORTED_MODULE_6__.getEmptyDiv,
    getDiv: _render_utils__WEBPACK_IMPORTED_MODULE_6__.getDiv,
}

const COMMON = {
    CLASS_NAMES: _render_constants__WEBPACK_IMPORTED_MODULE_7__.COMMON_CLASS_NAMES,
    DOM_IDS: _render_constants__WEBPACK_IMPORTED_MODULE_7__.COMMON_DOM_IDS,
}

/***/ }),

/***/ "./src/library/render/RenderHelper.js":
/*!********************************************!*\
  !*** ./src/library/render/RenderHelper.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderHelper": () => (/* binding */ RenderHelper)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/library/render/utils.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "./src/library/render/components/Header.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/library/render/constants.js");
/* harmony import */ var _components_DivMatrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DivMatrix */ "./src/library/render/components/DivMatrix.js");





/**
 * TODO: необходимо добавить возможность заменять иконки.
 *
 *
 */
class RenderHelper {

    /**
     * TODO: необходимо реализовать корректное изменение встроенных классов/идентификаторов.
     *
     *
     */
    constructor(handler, config, isDev = false) {
        this.DOM_IDS = config.DOM_IDS;
        this.USE_TABLE = config.USE_TABLE;
        this.handler = handler;
        this.isDev = isDev;
    }

    /**
     * Базовая пустая форма с id:
     *  основное поле
     *  вспомогательное поле
     *  header
     */
    getBaseForm() {
        const appNode = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDiv)(_constants__WEBPACK_IMPORTED_MODULE_2__.COMMON_CLASS_NAMES.APP, this.DOM_IDS.root);
        const contentNode = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDiv)(_constants__WEBPACK_IMPORTED_MODULE_2__.COMMON_CLASS_NAMES.JUSTIFY_CENTER);
        const mainNode = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDiv)(_constants__WEBPACK_IMPORTED_MODULE_2__.COMMON_CLASS_NAMES.FLEX, _constants__WEBPACK_IMPORTED_MODULE_2__.COMMON_DOM_IDS.MAIN);
        const additionalNode = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDiv)(null, _constants__WEBPACK_IMPORTED_MODULE_2__.COMMON_DOM_IDS.ADDITIONAL);

        const headerNode = this.getHeader();

        contentNode.append(mainNode, additionalNode);
        appNode.append(headerNode, contentNode);

        return appNode;
    }

    getAdditionalNode() {
        return this.getElementById(_constants__WEBPACK_IMPORTED_MODULE_2__.COMMON_DOM_IDS.ADDITIONAL);
    }

    getHeader() {
        return (0,_components_Header__WEBPACK_IMPORTED_MODULE_1__.getHeader)(_constants__WEBPACK_IMPORTED_MODULE_2__.COMMON_CLASS_NAMES.HEADER, _constants__WEBPACK_IMPORTED_MODULE_2__.COMMON_CLASS_NAMES.HEADER_IMG, _constants__WEBPACK_IMPORTED_MODULE_2__.COMMON_DOM_IDS.HEADER);
    }

    getElementById(id) {
        return document.getElementById(id);
    }

    getDiv(className, id, text, child) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDiv)(className, id, text, child);
    }

    getEmptyDiv() {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEmptyDiv)();
    }

    /**
     * Устанавливаем атрибуты для клетки.
     *
     * @param {object} tileElement - DOM-элемент клетки.
     * @param {object} attribute - атрибуты.
     * @param {string} prefix -
     */
    setAttributeInTile(tileElement, attribute, prefix) {
        for (let key in attribute) {
            if (attribute.hasOwnProperty(key)) {
                const currentValue = attribute[key];

                if (typeof currentValue === 'object' && currentValue !== null) {
                    this.setAttributeInTile(tileElement, currentValue, key);
                } else {
                    tileElement.setAttribute(`data-${prefix ? prefix + '-' : ''}${key}`, attribute[key]);
                }
            }
        }
    }

    // COMPONENTS

    getContentMethods() {
        return {
            getDiv: this.getDiv,
            getEmptyDiv: this.getEmptyDiv,
            getTile: this.buildDivTile,
            setAttributeInTile: this.setAttributeInTile,
            tileHandler: this.handler,
        };
    }

    buildDivMatrix(matrix) {
        return (0,_components_DivMatrix__WEBPACK_IMPORTED_MODULE_3__.buildDivMatrix)(matrix, this.getContentMethods());
    }

    buildDivTile() {
        return this.getDiv();
    }
}

/***/ }),

/***/ "./src/library/render/components/Base.js":
/*!***********************************************!*\
  !*** ./src/library/render/components/Base.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/library/render/utils.js");


/**
 * Что-то самое простое, чтобы упросить работу с DOM.
 */
class BaseComponent {
    getDiv(className, id, text, child) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDiv)(className, id, text, child);
    }

    pastIn(parentNode) {
        if (parentNode && this.element) {
            parentNode.append(this.element);
        }
    }
}

/***/ }),

/***/ "./src/library/render/components/DivMatrix.js":
/*!****************************************************!*\
  !*** ./src/library/render/components/DivMatrix.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildDivMatrix": () => (/* binding */ buildDivMatrix)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/library/render/constants.js");


/**
 * Создаём карту в виде таблицы для приложения.
 *
 * @param {array} matrix
 * @param {object} contentMethods - методы рендера для контента.
 */
function buildDivMatrix(matrix, contentMethods) {
    const wrapElement = contentMethods.getDiv();

    wrapElement.className = _constants__WEBPACK_IMPORTED_MODULE_0__.COMMON_CLASS_NAMES.FLEX_COLUMN;

    matrix.forEach((row, index) => {
        const rowElement = contentMethods.getDiv();

        rowElement.setAttribute('data-order', index);
        rowElement.className = _constants__WEBPACK_IMPORTED_MODULE_0__.COMMON_CLASS_NAMES.FLEX;

        // Сдвиг строк с power через одну.
        if (index % 2 !== 0) {
            rowElement.className = `${rowElement.className} marginLeftMiddle`;
        }

        row.forEach(item => {
            const tile = contentMethods.getTile(item, contentMethods);

            rowElement.appendChild(tile);
        });
        wrapElement.appendChild(rowElement);
    });

    return wrapElement;
}

/***/ }),

/***/ "./src/library/render/components/Header.js":
/*!*************************************************!*\
  !*** ./src/library/render/components/Header.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHeader": () => (/* binding */ getHeader)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/library/render/utils.js");
/* harmony import */ var _static_free_icon_font_menu_burger_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/free-icon-font-menu-burger.svg */ "./src/library/static/free-icon-font-menu-burger.svg");
/* harmony import */ var _static_free_icon_font_settings_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/free-icon-font-settings.svg */ "./src/library/static/free-icon-font-settings.svg");




/**
 * Шапка с кнопками бутерброда и шестерёнкой.
 *
 * @param {string} headerClassName
 * @param {string} imgClassName
 * @param {string} id
 */
function getHeader(headerClassName, imgClassName, id) {
    const node = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDiv)(headerClassName, id, );
    const burgerIcon = new Image();
    const settingsIcon = new Image();

    burgerIcon.src = _static_free_icon_font_menu_burger_svg__WEBPACK_IMPORTED_MODULE_1__;
    settingsIcon.src = _static_free_icon_font_settings_svg__WEBPACK_IMPORTED_MODULE_2__;

    burgerIcon.className = imgClassName;
    settingsIcon.className = imgClassName;

    node.append(burgerIcon, settingsIcon);

    return node;
}

/***/ }),

/***/ "./src/library/render/constants.js":
/*!*****************************************!*\
  !*** ./src/library/render/constants.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMMON_CLASS_NAMES": () => (/* binding */ COMMON_CLASS_NAMES),
/* harmony export */   "COMMON_DOM_IDS": () => (/* binding */ COMMON_DOM_IDS)
/* harmony export */ });
const COMMON_CLASS_NAMES = {
    APP: 'application',

    FLEX: 'flex',
    JUSTIFY_CENTER: 'justifyCenter',
    FLEX_COLUMN: 'flexColumn',

    HEADER: 'header',
    HEADER_IMG: 'header_img',
}

const COMMON_DOM_IDS = {
    MAIN: 'mainField',
    ADDITIONAL: 'additionalField',
    HEADER: 'header',
}


/***/ }),

/***/ "./src/library/render/utils.js":
/*!*************************************!*\
  !*** ./src/library/render/utils.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDiv": () => (/* binding */ getDiv),
/* harmony export */   "getEmptyDiv": () => (/* binding */ getEmptyDiv)
/* harmony export */ });
const getEmptyDiv = () => document.createElement('div');

/**
 * Div с простым наполнением.
 */
const getDiv = (className, id, text, child) => {
    const element = getEmptyDiv();

    if (className) {
        element.className = className;
    }

    if (id) {
        element.id = id;
    }

    if (text) {
        element.textContent = text;
    }

    if (child) {
        element.append(child);
    }

    return element;
};

/***/ }),

/***/ "./src/library/utils.js":
/*!******************************!*\
  !*** ./src/library/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomNumber": () => (/* binding */ getRandomNumber)
/* harmony export */ });
/**
 * Возвращает рандомное число по переданным параметрам.
 * @param {number} max.
 * @param {number} min.
 * @return {number}
 */
const getRandomNumber = (max = 10, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

/***/ }),

/***/ "./src/power/LogicAPI.js":
/*!*******************************!*\
  !*** ./src/power/LogicAPI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerLogicAPI": () => (/* binding */ PowerLogicAPI)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");


/**
 * Набор методов для выполнения событий приложения.
 */
class PowerLogicAPI {
    constructor(isDev) {
        this.isDev = isDev;
    }


    /**
     * Выполняем рандомные атаки по переданному игроку
     *
     * @param {string} name
     * @param {PowerDataAPI} DataApi -
     */
    doRandomAttacks(name, DataApi) {
        const tileList = DataApi.matrix.getTileListByCanAttack(name);

        tileList.forEach(tile => {
            const availableTile = DataApi.getOpponentTileList(tile.position);

            if (availableTile.length) {
                DataApi.doPCAttack(tile.position, availableTile[0].position, name);
            }
        });
    }

    /**
     *
     */
    doSimpleGiftPower(name, DataApi) {
        const tileList = DataApi.matrix.getTileListByPlayer(name);

        tileList.forEach(tile => {
            DataApi.doGivePowerPC(name, tile.position);
        });
    }

    /**
     * Обработка клика по кнопке хода.
     * Кнопка поддерживает разные состояния с разной реакцией.
     *
     * @param {PowerDataAPI} DataAPI.
     * @param {object} RenderAPI.
     * @param {object} info, { type } - на случай необходимости доп. информации.
     */
    turnButtonClickHandler(DataAPI, RenderAPI, info) {
        const { type } = info;

        if (type === _constants__WEBPACK_IMPORTED_MODULE_0__.HANDLER_TYPE.TURN_BUTTON_CLICK) {
            DataAPI.activeGivePowerStep(true);
            RenderAPI.showDevButton(DataAPI.state.getCurrentStepType());
        }

        if (type === _constants__WEBPACK_IMPORTED_MODULE_0__.HANDLER_TYPE.GIFT_END_BUTTON_CLICK) {
            const { info: nextPlayerInfo, name: nextPlayerName } = DataAPI.getNextPlayerInfo();

            if (nextPlayerInfo.isPeople) {
                DataAPI.setStepType(nextPlayerName, _constants__WEBPACK_IMPORTED_MODULE_0__.STEP_TYPE.CHOOSE_FOR_ATTACK, true);
                RenderAPI.showDevButton(DataAPI.state.getCurrentStepType());
                RenderAPI.rerenderTurnButton(_constants__WEBPACK_IMPORTED_MODULE_0__.TURN_BUTTON_EVENT_TYPES.ACTIVE_TURN_BUTTON, { highlight: false });
            } else {
                DataAPI.doNextTurn(nextPlayerName);
                this.doRandomAttacks(nextPlayerName, DataAPI);
                DataAPI.activeGivePowerStep();
                this.doSimpleGiftPower(nextPlayerName, DataAPI);
                this.turnButtonClickHandler(DataAPI, RenderAPI, {
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__.HANDLER_TYPE.GIFT_END_BUTTON_CLICK,
                });
            }
        }
    }

    devHandler(type, dataAPI, renderAPI) {
        if (!this.isDev) {
            return;
        }

        if (type === _constants__WEBPACK_IMPORTED_MODULE_0__.HANDLER_TYPE.DEV_DO_RANDOM_1) {
            const currentStepType = dataAPI.state.getCurrentStepType();
            const currentTurn = dataAPI.state.getCurrentTurn();

            if (currentStepType === _constants__WEBPACK_IMPORTED_MODULE_0__.STEP_TYPE.GIVE_POWER) {
                this.doSimpleGiftPower(currentTurn, dataAPI);
                // renderAPI.rerender('turnButtonActive');
            }

            if (currentStepType === _constants__WEBPACK_IMPORTED_MODULE_0__.STEP_TYPE.CHOOSE_FOR_ATTACK) {
                this.doRandomAttacks(currentTurn, dataAPI);
            }
        }
    }
}


/***/ }),

/***/ "./src/power/index.js":
/*!****************************!*\
  !*** ./src/power/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerLogicAPI": () => (/* reexport safe */ _LogicAPI__WEBPACK_IMPORTED_MODULE_0__.PowerLogicAPI)
/* harmony export */ });
/* harmony import */ var _LogicAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogicAPI */ "./src/power/LogicAPI.js");


/***/ }),

/***/ "./src/power/main.js":
/*!***************************!*\
  !*** ./src/power/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcAttackResult": () => (/* binding */ calcAttackResult)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



/**
 * Логика расчёта при атаке.
 * active/defensive - значения из Tile.
 *
 * @param {number|string} active
 * @param {number|string} defensive
 *
 * @return {object} winner / activeValue / defensiveValue
 */
const calcAttackResult = (active, defensive) => {
    const result = {
        winner: '',
        activeValue: 1,
        defensiveValue: 1,
    }
    const attackingValue = active - 1;

    if (attackingValue === defensive) {
        result.defensiveValue = 1;
        result.winner = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomBoolean)() ? _constants__WEBPACK_IMPORTED_MODULE_1__.CALC_ATTACK_RESULTS.ATTACK : _constants__WEBPACK_IMPORTED_MODULE_1__.CALC_ATTACK_RESULTS.DEFENSIVE;
    }

    if (attackingValue < defensive) {
        if (attackingValue === defensive - 1) {
            result.defensiveValue = 1;
            result.winner = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomBoolean)(25) ? _constants__WEBPACK_IMPORTED_MODULE_1__.CALC_ATTACK_RESULTS.DEFENSIVE : _constants__WEBPACK_IMPORTED_MODULE_1__.CALC_ATTACK_RESULTS.ATTACK;
        } else {
            result.defensiveValue = defensive - attackingValue;
            result.winner = _constants__WEBPACK_IMPORTED_MODULE_1__.CALC_ATTACK_RESULTS.DEFENSIVE;
        }
    }

    if (attackingValue > defensive) {
        result.defensiveValue = attackingValue - defensive;
        result.winner = _constants__WEBPACK_IMPORTED_MODULE_1__.CALC_ATTACK_RESULTS.ATTACK;
    }

    return result;
}

/***/ }),

/***/ "./src/power/powerTurn.js":
/*!********************************!*\
  !*** ./src/power/powerTurn.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tileClickHandler": () => (/* binding */ tileClickHandler)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/power/utils.js");



/**
 * Обработка клика по плитке.
 * Плитки меняют состояния в зависимости от типа хода.
 *
 * TODO: привести к единому виду с "turnButtonClickHandler".
 * @param {event} event
 * @param {object} context
 * @param {DataHelper} appData
 */
const tileClickHandler = (event, context, appData) => {
    const attrDataset = context.dataset;

    const currentStepTypeState = appData.getStateProperty('currentStepType');
    const currentTurnState = appData.getStateProperty('currentTurn');

    const tilePlayerName = attrDataset.playername;
    const pressedPosition = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getPositionObject)(attrDataset.positionX, attrDataset.positionY);

    // Ожидание выбора своей клетки для дальнейшей атаки.
    if (currentStepTypeState === _constants__WEBPACK_IMPORTED_MODULE_0__.STEP_TYPE.CHOOSE_FOR_ATTACK) {

        // Можно нажать только на свою клетку.
        if (tilePlayerName === currentTurnState) {
            appData.doSelectForAttack(pressedPosition);
        } else {
            console.log('Нажмите на свою клетку.');
        }
    }

    // Ожидание клика по плитке оппонента для совершения атаки.
    if (currentStepTypeState === _constants__WEBPACK_IMPORTED_MODULE_0__.STEP_TYPE.ATTACK) {
        const availableList = appData.getAvailablePosition();

        // Выполнить атаку / сбросить ход.
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.someEqualPosition)(availableList, pressedPosition)) {
            appData.doPeopleAttack(pressedPosition);
        } else {
            appData.doResetSelectForAttack();
        }
    }

    // Ожидание выбора своих клеток для раздачи power.
    if (currentStepTypeState === _constants__WEBPACK_IMPORTED_MODULE_0__.STEP_TYPE.GIVE_POWER) {
        appData.doGivePower(tilePlayerName, pressedPosition);
    }
}

/***/ }),

/***/ "./src/power/utils.js":
/*!****************************!*\
  !*** ./src/power/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "equalPosition": () => (/* binding */ equalPosition),
/* harmony export */   "getPositionObject": () => (/* binding */ getPositionObject),
/* harmony export */   "someEqualPosition": () => (/* binding */ someEqualPosition)
/* harmony export */ });
/**
 *
 * @param {string|number} x
 * @param {string|number} y
 * @return {object}
 */
const getPositionObject = (x, y) => {
    return {
        x: Number(x),
        y: Number(y)
    };
}

/**
 *
 * @param {object} obj1
 * @param {object} obj2
 * @return {boolean}
 */
const equalPosition = (obj1, obj2) => obj1.x === obj2.x && obj1.y === obj2.y;

/**
 *
 * @param {array} positionList
 * @param {object} position
 * @return {boolean}
 */
const someEqualPosition = (positionList, position) => {
    return positionList.some(item => equalPosition(item, position));
}

/***/ }),

/***/ "./src/render/Render.js":
/*!******************************!*\
  !*** ./src/render/Render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerRender": () => (/* binding */ PowerRender)
/* harmony export */ });
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library */ "./src/library/index.js");
/* harmony import */ var _library_render_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/render/constants */ "./src/library/render/constants.js");
/* harmony import */ var _components_HexagonTile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/HexagonTile */ "./src/render/components/HexagonTile.js");
/* harmony import */ var _components_AdditionalField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AdditionalField */ "./src/render/components/AdditionalField.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/render/constants.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Table */ "./src/render/components/Table.js");








/**
 * Всё что связано с визуальным отображением игры.
 */
class PowerRender extends _library__WEBPACK_IMPORTED_MODULE_0__.RenderHelper {

    createApp(matrix) {
        const baseForm = this.getBaseForm();

        document.body.appendChild(baseForm);

        this.createMatrix(matrix);
        this.createAdditionalInfo();
    }

    /**
     * Создаёт элемент в DOM.
     * Элемент является таблицей которая строится по переданной матрице.
     */
    createMatrix(matrix) {
        if (matrix) {
            const matrixMap = this.buildMap(matrix);
            const root = this.getElementById(_constants__WEBPACK_IMPORTED_MODULE_4__.POWER_DOM_IDS.MAIN_FIELD);

            root.appendChild(matrixMap);
        } else {
            console.log(_constants__WEBPACK_IMPORTED_MODULE_4__.TEXTS.MATRIX_ERROR);
        }
    }

    buildMap(matrix) {
        return this.USE_TABLE ? _components_Table__WEBPACK_IMPORTED_MODULE_5__.buildTable.call(this, matrix) : this.buildDivMatrix(matrix);
    }

    /**
     * Не хватило фантазии на более интересное название.
     */
    createAdditionalInfo() {
        const rootNode = this.getAdditionalNode();

        this.additionalField = new _components_AdditionalField__WEBPACK_IMPORTED_MODULE_3__.AdditionalFieldComponent(this.handler);
        this.additionalField.pastIn(rootNode);
    }

    buildDivTile(item, contentMethods) {
        return (0,_components_HexagonTile__WEBPACK_IMPORTED_MODULE_2__.buildHexagonTile)(item, contentMethods);
    }

    rerenderDivTile(tile) {
        const {x, y} = tile.position;

        const commonMap = this.getElementById(_library_render_constants__WEBPACK_IMPORTED_MODULE_1__.COMMON_DOM_IDS.MAIN);
        const rowNodes = commonMap.firstChild;
        const oldNode = rowNodes.childNodes[y].childNodes[x];
        const tileNode = this.buildDivTile(tile, this.getContentMethods());

        rowNodes.childNodes[y].replaceChild(tileNode, oldNode);
    }

    rerenderTableTile(tile) {
        const tdNode = buildTD.call(this, tile);

        const commonMap = this.getElementById(_library_render_constants__WEBPACK_IMPORTED_MODULE_1__.COMMON_DOM_IDS.MAIN);
        const trNode = commonMap.getElementsByTagName('tr')[tile.position.y];
        const oldTd = trNode.getElementsByTagName('td')[tile.position.x];

        trNode.replaceChild(tdNode, oldTd);
    }
}

/***/ }),

/***/ "./src/render/RenderAPI.js":
/*!*********************************!*\
  !*** ./src/render/RenderAPI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerRenderAPI": () => (/* binding */ PowerRenderAPI)
/* harmony export */ });
/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render */ "./src/render/Render.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



/**
 * Всё что связано с визуальным отображением игры.
 */
class PowerRenderAPI extends _Render__WEBPACK_IMPORTED_MODULE_0__.PowerRender {

    rerenderTile(tile, matrixType) {
        if (matrixType === _constants__WEBPACK_IMPORTED_MODULE_1__.MATRIX_TYPES.HEXAGON) {
            this.rerenderDivTile(tile);
        }

        if (matrixType === _constants__WEBPACK_IMPORTED_MODULE_1__.MATRIX_TYPES.SIMPLE) {
            this.rerenderTableTile(tile);
        }
    }

    rerenderTurnButton(type, data) {
        if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.TURN_BUTTON_EVENT_TYPES.ACTIVE_TURN_BUTTON) {
            this.additionalField.activeTurnView(data);
        }

        if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.TURN_BUTTON_EVENT_TYPES.HIGHLIGHT) {
            this.additionalField.buttonHighlight(data);
        }

        if (type === _constants__WEBPACK_IMPORTED_MODULE_1__.TURN_BUTTON_EVENT_TYPES.ACTIVE_GIFT_VIEW) {
            this.additionalField.activeGiftView(data);
        }

        /*if (type === 'dev_AutoGiftActive') {
            this.additionalField.devButtonChange(type, data);
        }*/

        /*if (type === 'dev1_highlight') {
            this.additionalField.devButtonHighlight(type, data);
        }*/
    }

    /**
     * @param {string} stepType - в зависимости от stepType dev-кнопка выполняет разные действия.
     */
    showDevButton(stepType) {
        if (stepType === _constants__WEBPACK_IMPORTED_MODULE_1__.STEP_TYPE.CHOOSE_FOR_ATTACK) {
            this.additionalField.showDevButton(_constants__WEBPACK_IMPORTED_MODULE_1__.DEV_BUTTON_CAPTIONS.MAKE_MOVE);
        }

        if (stepType === _constants__WEBPACK_IMPORTED_MODULE_1__.STEP_TYPE.GIVE_POWER) {
            this.additionalField.showDevButton(_constants__WEBPACK_IMPORTED_MODULE_1__.DEV_BUTTON_CAPTIONS.GIVE_POWER);
        }
    }
}

/***/ }),

/***/ "./src/render/components/AdditionalField.js":
/*!**************************************************!*\
  !*** ./src/render/components/AdditionalField.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditionalFieldComponent": () => (/* binding */ AdditionalFieldComponent)
/* harmony export */ });
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library */ "./src/library/index.js");
/* harmony import */ var _TurnButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TurnButton */ "./src/render/components/TurnButton.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/render/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");






/**
 * Дополнительные поля для игры.
 * Кнопка следующего хода.
 * Логирование.
 */
class AdditionalFieldComponent extends _library__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(handler) {
        super();

        this.handler = handler;
        this.tileClassName = _constants__WEBPACK_IMPORTED_MODULE_2__.LOG_CLASS.TILE;
        this.buttonClassName = _constants__WEBPACK_IMPORTED_MODULE_2__.LOG_CLASS.BUTTON;

        this.buttonElement = new _TurnButton__WEBPACK_IMPORTED_MODULE_1__.TurnButtonComponent(handler, _constants__WEBPACK_IMPORTED_MODULE_3__.HANDLER_TYPE.TURN_BUTTON_CLICK, _constants__WEBPACK_IMPORTED_MODULE_2__.TEXTS.NEXT_TURN);
        this.element = this.getNewElement();
    }

    getNewElement() {
        const baseNode = this.getDiv();

        this.buttonElement.pastIn(baseNode);

        return baseNode;
    }

    /**
     * @param {boolean} status
     */
    buttonHighlight(status) {
        status ? this.buttonElement.highlightOn() : this.buttonElement.highlightOff();
    }

    /**
     * @param {boolean} status
     */
    devButtonHighlight(status) {
        if (this.devButtonElement1) {
            status ? this.devButtonElement1.highlightOn() : this.devButtonElement1.highlightOff();
        }
    }

    /**
     *
     * @param {object} data - { highlight, amount }
     */
    activeGiftView({ highlight, amount }) {
        this.buttonElement.changeTurnInfo(`${_constants__WEBPACK_IMPORTED_MODULE_2__.TEXTS.END_GIFT} - ${amount}`, _constants__WEBPACK_IMPORTED_MODULE_3__.HANDLER_TYPE.GIFT_END_BUTTON_CLICK);
        this.buttonHighlight(highlight);
    }

    activeTurnView({ highlight }) {
        this.buttonElement.changeTurnInfo(_constants__WEBPACK_IMPORTED_MODULE_2__.TEXTS.NEXT_TURN, _constants__WEBPACK_IMPORTED_MODULE_3__.HANDLER_TYPE.TURN_BUTTON_CLICK);
        this.buttonHighlight(highlight);
    }

    /**
     *
     */
    devButtonChange(type, data) {
        this.devButtonElement1.setText('Раздать power');
    }

    /**
     * Вторая кнопка.
     */
    showDevButton(text, isActive = false) {
        if (this.element.childNodes.length > 1) {
            this.devButtonElement1.setText(text);
        } else {
            this.devButtonElement1 = new _TurnButton__WEBPACK_IMPORTED_MODULE_1__.TurnButtonComponent(this.handler, _constants__WEBPACK_IMPORTED_MODULE_3__.HANDLER_TYPE.DEV_DO_RANDOM_1, text);
            this.devButtonElement1.pastIn(this.element);
        }
    }
}

/***/ }),

/***/ "./src/render/components/HexagonTile.js":
/*!**********************************************!*\
  !*** ./src/render/components/HexagonTile.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildHexagonTile": () => (/* binding */ buildHexagonTile)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/render/constants.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper */ "./src/render/helper.js");
/* harmony import */ var _library_render_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../library/render/constants */ "./src/library/render/constants.js");





const buildHexagonTile = (tile, contentMethods) => {
    const clickHandler = function(event) {
        contentMethods.tileHandler(event, this, _constants__WEBPACK_IMPORTED_MODULE_0__.HANDLER_TYPE.TILE_CLICK);
    }

    const tileNode = contentMethods.getDiv();
    const content = getTileContent(tile, contentMethods);
    const powerValue = contentMethods.getDiv();

    powerValue.textContent = tile.powerValue;
    powerValue.className = _constants__WEBPACK_IMPORTED_MODULE_1__.HEXAGON_CLASS_NAMES.POWER_VALUE;

    tileNode.append(powerValue, content);

    if (tile.type !== undefined && tile.type !== _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.CONNECT_LINE) {
        tileNode.addEventListener('click', clickHandler);
    }

    tileNode.className = getClassForTileWrap(tile);
    contentMethods.setAttributeInTile(tileNode, tile);

    return tileNode;
}

const getTileContent = (tile, contentMethods) => {
    const wrapElem = contentMethods.getDiv();

    if (tile.type === _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.CONNECT_LINE) {
        const line = contentMethods.getDiv();

        line.className = getClassForConnect(tile.connectType);

        wrapElem.append(line);
    }

    if ([_constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.READY, _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.WAITING_SELECT].includes(tile.type)) {
        const hexagon = contentMethods.getDiv();
        const hexagonSpan = document.createElement('span');

        hexagon.className = _constants__WEBPACK_IMPORTED_MODULE_1__.HEXAGON_CLASS_NAMES.HEXAGON;

        hexagon.append(hexagonSpan);
        wrapElem.append(hexagon);
    }

    wrapElem.className = `${_constants__WEBPACK_IMPORTED_MODULE_1__.HEXAGON_CLASS_NAMES.TILE_HEXAGON} ${_library_render_constants__WEBPACK_IMPORTED_MODULE_3__.COMMON_CLASS_NAMES.FLEX}`;

    if (tile.color) {
        const colorClass = getClassByColor(tile.color);

        wrapElem.className = `${wrapElem.className} ${colorClass}`;
    }

    return wrapElem;
}

const getClassForTileWrap = item => {
    const byCellType = (0,_helper__WEBPACK_IMPORTED_MODULE_2__.getClassByCellType)(item.type);
    let result = _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_CLASS_NAME.WRAP;

    if (byCellType) {
        result = `${result} ${byCellType}`;
    }

    return result;
}

const getClassForConnect = connectType => {
    switch (connectType) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.LEFT_TO_BOTTOM: return _constants__WEBPACK_IMPORTED_MODULE_1__.HEXAGON_CLASS_NAMES.LEFT_TO_BOTTOM;
        case _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.RIGHT_TO_BOTTOM: return _constants__WEBPACK_IMPORTED_MODULE_1__.HEXAGON_CLASS_NAMES.RIGHT_TO_BOTTOM;
        case _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECT_TYPE.LINE: return _constants__WEBPACK_IMPORTED_MODULE_1__.HEXAGON_CLASS_NAMES.LINE;
        default: return _constants__WEBPACK_IMPORTED_MODULE_1__.COLOR.DEFAULT;
    }
}

const getClassByColor = color => {
    switch (color) {
        case _constants__WEBPACK_IMPORTED_MODULE_1__.COLOR.GREEN: return _constants__WEBPACK_IMPORTED_MODULE_1__.HEXAGON_CLASS_NAMES.TILE_GREEN;
        case _constants__WEBPACK_IMPORTED_MODULE_1__.COLOR.RED: return _constants__WEBPACK_IMPORTED_MODULE_1__.HEXAGON_CLASS_NAMES.TILE_RED;
        case _constants__WEBPACK_IMPORTED_MODULE_1__.COLOR.MAGENTA: return _constants__WEBPACK_IMPORTED_MODULE_1__.HEXAGON_CLASS_NAMES.TILE_MAGENTA;
        case _constants__WEBPACK_IMPORTED_MODULE_1__.COLOR.BLUE: return _constants__WEBPACK_IMPORTED_MODULE_1__.HEXAGON_CLASS_NAMES.TILE_BLUE;
        default: return _constants__WEBPACK_IMPORTED_MODULE_1__.COLOR.DEFAULT;
    }
}

/***/ }),

/***/ "./src/render/components/Table.js":
/*!****************************************!*\
  !*** ./src/render/components/Table.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTD": () => (/* binding */ buildTD),
/* harmony export */   "buildTable": () => (/* binding */ buildTable)
/* harmony export */ });
/* harmony import */ var _powerTile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./powerTile */ "./src/render/components/powerTile.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/render/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper */ "./src/render/helper.js");





/**
 * Создаём таблицу для приложения.
 */
function buildTable(matrix) {
    const tableElement = document.createElement('table');

    matrix.forEach((rowList, index) => {
        const rowElement = document.createElement('tr');
        rowElement.setAttribute('data-order', index);

        rowList.forEach(item => {
            const cellElement = buildTD.call(this, item);

            rowElement.appendChild(cellElement);
        });
        tableElement.appendChild(rowElement);
    });

    return tableElement;
}

function buildTD(item) {
    const onClickHandler = this.handler;
    const tdHandler = function(event) {
        return onClickHandler(event, this, _constants__WEBPACK_IMPORTED_MODULE_2__.HANDLER_TYPE.TILE_CLICK);
    }
    const cellElement = document.createElement('td');
    const content = (0,_powerTile__WEBPACK_IMPORTED_MODULE_0__.getPowerTileRenderElement)(item);

    cellElement.appendChild(content);
    cellElement.addEventListener('click', tdHandler);
    cellElement.className = getClassForTD(item);
    setAttributeInCell(cellElement, item);

    return cellElement;
}

const getClassForTD = item => {
    let result = _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_CLASS_NAME.WRAP;
    const byCellType = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.getClassByCellType)(item.type);

    if (byCellType) {
        result = `${result} ${byCellType}`;
    }

    return result;
}

/**
 * Устанавливаем атрибуты для клетки.
 * @param {object} cellElement - DOM-элемент клетки таблицы.
 * @param {object} attribute - атрибуты.
 * @param {string} prefix -
 */
const setAttributeInCell = (cellElement, attribute, prefix) => {
    for (let key in attribute) {
        if (attribute.hasOwnProperty(key)) {
            const currentValue = attribute[key];

            if (typeof currentValue === 'object' && currentValue !== null) {
                setAttributeInCell(cellElement, currentValue, key);
            } else {
                cellElement.setAttribute(`data-${prefix ? prefix + '-' : ''}${key}`, attribute[key]);
            }
        }
    }
}

/***/ }),

/***/ "./src/render/components/TurnButton.js":
/*!*********************************************!*\
  !*** ./src/render/components/TurnButton.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TurnButtonComponent": () => (/* binding */ TurnButtonComponent)
/* harmony export */ });
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library */ "./src/library/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/render/constants.js");




/**
 * Компонент кнопки для смены состояния хода.
 */
class TurnButtonComponent extends _library__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(handler, type, text) {
        super();

        this.handler = handler;
        this.handlerType = type;
        this.tileClassName = _constants__WEBPACK_IMPORTED_MODULE_1__.LOG_CLASS.TILE;
        this.buttonClassName = _constants__WEBPACK_IMPORTED_MODULE_1__.LOG_CLASS.BUTTON;

        this.element = this.getNewElement(text);
    }

    getNewElement(text) {
        const buttonTile = this.getDiv(this.tileClassName);
        const buttonNode = this.getDiv(this.buttonClassName, null, text);

        this.buttonNode = buttonNode;
        buttonNode.addEventListener('click', event => this.clickHandler(event));
        buttonTile.append(buttonNode);

        return buttonTile;
    }

    clickHandler(event) {
        this.handler(event, null, this.handlerType);
    }

    highlightOn() {
        this.buttonNode.className = `${this.buttonClassName} ${_constants__WEBPACK_IMPORTED_MODULE_1__.LOG_CLASS.BUTTON_SELECTED}`;
    }

    highlightOff() {
        this.buttonNode.className = this.buttonClassName;
    }

    setText(value) {
        this.buttonNode.textContent = value;
    }

    changeTurnInfo(caption, type) {
        this.setText(caption);
        this.handlerType = type;
    }
}

/***/ }),

/***/ "./src/render/components/powerTile.js":
/*!********************************************!*\
  !*** ./src/render/components/powerTile.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPowerTileRenderElement": () => (/* binding */ getPowerTileRenderElement)
/* harmony export */ });
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library */ "./src/library/index.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper */ "./src/render/helper.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/render/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");





const getContentWrap = () => _library__WEBPACK_IMPORTED_MODULE_0__.renderUtils.getDiv('cell_row flex justifySpaceBetween');

/**
 *
 * @param {object} item - свойства color может быть пустым.
 */
const getWrapElement = item => {
    const element = _library__WEBPACK_IMPORTED_MODULE_0__.renderUtils.getEmptyDiv();
    let elementClassName = `${_constants__WEBPACK_IMPORTED_MODULE_2__.CELL_CLASS_NAME.COMMON} flex`;

    if (item.color?.value) {
        const colorClass = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getClassByColor)(item.color.value);
        elementClassName = `${elementClassName} ${colorClass}`;
    }

    element.className = elementClassName;

    return element;
}

/**
 * Рендер верхней части клетки.
 * На данный момент есть возможность только прописывать верхнюю девую свзяь.
 * TODO: на данный момент middle - это лишний элемент. Можно убрать.
 * @param {array} connectList - список соединение строками.
 */
const getTopElement = ({ connectList }) => {
    const element = getContentWrap();
    const emptyClass = `${_constants__WEBPACK_IMPORTED_MODULE_2__.CONNECT_CLASS_NAME.BASE} ${_constants__WEBPACK_IMPORTED_MODULE_2__.CONNECT_CLASS_NAME.EMPTY}`;

    const left = _library__WEBPACK_IMPORTED_MODULE_0__.renderUtils.getDiv(_constants__WEBPACK_IMPORTED_MODULE_2__.CONNECT_CLASS_NAME.BASE);
    const middle = _library__WEBPACK_IMPORTED_MODULE_0__.renderUtils.getDiv(emptyClass);
    const right = _library__WEBPACK_IMPORTED_MODULE_0__.renderUtils.getDiv(emptyClass);

    if (connectList.includes(_constants__WEBPACK_IMPORTED_MODULE_3__.CONNECT_TYPE.LEFT_TOP)) {
        left.className = `${left.className} ${_constants__WEBPACK_IMPORTED_MODULE_2__.CONNECT_CLASS_NAME.DIAGONAL_LEFT}`;
    } else {
        left.className = `${left.className} ${_constants__WEBPACK_IMPORTED_MODULE_2__.CONNECT_CLASS_NAME.EMPTY}`;
    }

    element.append(left, middle, right);

    return element;
}

/**
 * Могут в том числе проставляться горизонтальные связи.
 */
const getMiddleElement = ({ powerValue, connectList }) => {
    const element = getContentWrap();
    let contentClass = `${_constants__WEBPACK_IMPORTED_MODULE_2__.CONNECT_CLASS_NAME.BASE} ${_constants__WEBPACK_IMPORTED_MODULE_2__.CONNECT_CLASS_NAME.EMPTY}`;

    if (connectList.includes(_constants__WEBPACK_IMPORTED_MODULE_3__.CONNECT_TYPE.LINE)) {
        contentClass = `${contentClass} ${_constants__WEBPACK_IMPORTED_MODULE_2__.CONNECT_CLASS_NAME.LINE}`;
    }

    const left = _library__WEBPACK_IMPORTED_MODULE_0__.renderUtils.getDiv(contentClass);
    const middle = _library__WEBPACK_IMPORTED_MODULE_0__.renderUtils.getDiv(contentClass);
    const right = _library__WEBPACK_IMPORTED_MODULE_0__.renderUtils.getDiv(contentClass);

    if (powerValue) {
        middle.textContent = powerValue;
    }

    element.append(left, middle, right);

    return element;
}

const getBottomElement = ({ connectList }) => {
    const element = getContentWrap();
    const emptyClass = `${_constants__WEBPACK_IMPORTED_MODULE_2__.CONNECT_CLASS_NAME.BASE} ${_constants__WEBPACK_IMPORTED_MODULE_2__.CONNECT_CLASS_NAME.EMPTY}`

    const left = _library__WEBPACK_IMPORTED_MODULE_0__.renderUtils.getDiv(emptyClass);
    const middle = _library__WEBPACK_IMPORTED_MODULE_0__.renderUtils.getDiv(emptyClass);
    const right = _library__WEBPACK_IMPORTED_MODULE_0__.renderUtils.getDiv(_constants__WEBPACK_IMPORTED_MODULE_2__.CONNECT_CLASS_NAME.BASE);

    if (connectList.includes(_constants__WEBPACK_IMPORTED_MODULE_3__.CONNECT_TYPE.RIGHT_BOTTOM)) {
        right.className = `${right.className} ${_constants__WEBPACK_IMPORTED_MODULE_2__.CONNECT_CLASS_NAME.DIAGONAL_RIGHT}`;
    } else {
        right.className = `${right.className} ${_constants__WEBPACK_IMPORTED_MODULE_2__.CONNECT_CLASS_NAME.EMPTY}`;
    }

    element.append(left, middle, right);

    return element;
}

/**
 * Базовая DOM-клетка для игры со всем наполнением.
 * @param {object} item - className, color?: { stepType, value(color) }, connectList: [], position, powerValue, type.
 */
const getPowerTileRenderElement = item => {
    const wrap = getWrapElement(item);
    const methodList = [getTopElement, getMiddleElement, getBottomElement];

    methodList.forEach(method => wrap.append(method(item)));

    return wrap;
}

/***/ }),

/***/ "./src/render/constants.js":
/*!*********************************!*\
  !*** ./src/render/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CELL_CLASS_NAME": () => (/* binding */ CELL_CLASS_NAME),
/* harmony export */   "COLOR": () => (/* binding */ COLOR),
/* harmony export */   "CONNECT_CLASS_NAME": () => (/* binding */ CONNECT_CLASS_NAME),
/* harmony export */   "HEXAGON_CLASS_NAMES": () => (/* binding */ HEXAGON_CLASS_NAMES),
/* harmony export */   "LOG_CLASS": () => (/* binding */ LOG_CLASS),
/* harmony export */   "POWER_DOM_IDS": () => (/* binding */ POWER_DOM_IDS),
/* harmony export */   "TEXTS": () => (/* binding */ TEXTS)
/* harmony export */ });
const CELL_CLASS_NAME = {
    COMMON: 'cell',
    EMPTY: 'cell_empty',
    WAITING: 'cell_waiting',
    WRAP: 'cell_wrap',
    GREEN: 'cell_green',
    RED: 'cell_red',
    MAGENTA: 'cell_magenta',
    BLUE: 'cell_blue',
    WAITING_SELECT: 'cell_waitingSelect',
    SELECTED: 'cell_selected',
};

const HEXAGON_CLASS_NAMES = {
    TILE_HEXAGON: 'tile_hexagon',
    HEXAGON: 'hexagon',
    POWER_VALUE: 'hexagon_powerValue',

    TILE_BLUE: 'tile_blue',
    TILE_MAGENTA: 'tile_magenta',
    TILE_RED: 'tile_red',
    TILE_GREEN: 'tile_green',

    LEFT_TO_BOTTOM: 'tile_hexagon_line_1',
    RIGHT_TO_BOTTOM: 'tile_hexagon_line_2',
    LINE: 'tile_hexagon_line_3',
}

const CONNECT_CLASS_NAME = {
    BASE: 'cell_connect',
    DIAGONAL_LEFT: 'cell_connect_diagonalLeft',
    DIAGONAL_RIGHT: 'cell_connect_diagonalRight',
    LINE: 'cell_connect_line',
}

const COLOR = {
    GREEN: 'green',
    RED: 'red',
    MAGENTA: 'magenta',
    BLUE: 'blue',
    DEFAULT: '',
};

const LOG_CLASS = {
    // WRAP: 'log_wrap',
    TILE: 'log_tile',
    BUTTON: 'log_button',
    BUTTON_SELECTED: 'log_button_selected',
}

const TEXTS = {
    NEXT_TURN: 'Завершить ход',
    END_GIFT: 'Завершить раздачу',
    MATRIX_ERROR: 'Ошибка в переданной матрице.',
}

const POWER_DOM_IDS = {
    TURN_BUTTON: 'turnButton',      // TODO: может оказаться лишним.
    MAIN_FIELD: 'mainField',
}

/***/ }),

/***/ "./src/render/helper.js":
/*!******************************!*\
  !*** ./src/render/helper.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClassByCellType": () => (/* binding */ getClassByCellType),
/* harmony export */   "getClassByColor": () => (/* binding */ getClassByColor)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/render/constants.js");



const getClassByCellType = (type) => {
    switch (type) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.EMPTY: return _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_CLASS_NAME.EMPTY;
        case _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.WAITING: return _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_CLASS_NAME.WAITING;
        case _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.WAITING_SELECT: return _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_CLASS_NAME.WAITING_SELECT;
        case _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.SELECTED: return _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_CLASS_NAME.SELECTED;
        case _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_TYPE.READY: return '';
        default: return _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_CLASS_NAME.EMPTY;
    }
}

/**
 * @param {string} color
 * @return {string}
 */
const getClassByColor = color => {
    switch (color) {
        case _constants__WEBPACK_IMPORTED_MODULE_1__.COLOR.GREEN: return _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_CLASS_NAME.GREEN;
        case _constants__WEBPACK_IMPORTED_MODULE_1__.COLOR.RED: return _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_CLASS_NAME.RED;
        case _constants__WEBPACK_IMPORTED_MODULE_1__.COLOR.MAGENTA: return _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_CLASS_NAME.MAGENTA;
        case _constants__WEBPACK_IMPORTED_MODULE_1__.COLOR.BLUE: return _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_CLASS_NAME.BLUE;
        default: return _constants__WEBPACK_IMPORTED_MODULE_1__.COLOR.DEFAULT;
    }
}

/***/ }),

/***/ "./src/render/index.js":
/*!*****************************!*\
  !*** ./src/render/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerRenderAPI": () => (/* reexport safe */ _RenderAPI__WEBPACK_IMPORTED_MODULE_0__.PowerRenderAPI)
/* harmony export */ });
/* harmony import */ var _RenderAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderAPI */ "./src/render/RenderAPI.js");


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomBoolean": () => (/* binding */ getRandomBoolean),
/* harmony export */   "getRandomNumber": () => (/* binding */ getRandomNumber)
/* harmony export */ });
/**
 * Возвращает рандомное число по переданным параметрам.
 * @param {number} max.
 * @param {number} min.
 * @return {number}
 */
const getRandomNumber = (max = 10, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Возвращает рандомно true/false;
 *
 * @param {number} chance
 * @return {boolean}
 */
const getRandomBoolean = (chance) => {
    let param = 1;

    if (chance === 25) {
        param = 3;
    }

    return !!getRandomNumber(param);
};

/***/ }),

/***/ "./src/library/static/free-icon-font-menu-burger.svg":
/*!***********************************************************!*\
  !*** ./src/library/static/free-icon-font-menu-burger.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97488be38941da7114da.svg";

/***/ }),

/***/ "./src/library/static/free-icon-font-settings.svg":
/*!********************************************************!*\
  !*** ./src/library/static/free-icon-font-settings.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9b947057f763a050b64.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _PowerGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PowerGame */ "./src/PowerGame.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const APP_NAME = 'powerValue';
const isDev = false;

function createApp() {
    const DOM_IDS = { root: APP_NAME };
    const powerGame = new _PowerGame__WEBPACK_IMPORTED_MODULE_1__["default"](_config__WEBPACK_IMPORTED_MODULE_0__.POWER_CONFIG, DOM_IDS, isDev);

    powerGame.start();
}

createApp();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9Qb3dlckdhbWUuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9kYXRhL0RhdGEuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvZGF0YS9EYXRhQVBJLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2RhdGEvY29tcG9uZW50cy9NYXRyaXguanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvZGF0YS9jb21wb25lbnRzL1N0YXRlLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2RhdGEvY29tcG9uZW50cy9UaWxlLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2RhdGEvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9kYXRhL2NvbXBvbmVudHMvbWF0cml4R2VuZXJhdG9ycy9oZXhhZ29uMS5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9kYXRhL2NvbXBvbmVudHMvbWF0cml4R2VuZXJhdG9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9kYXRhL2NvbXBvbmVudHMvbWF0cml4R2VuZXJhdG9ycy9zcXVhcmUxLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2RhdGEvY29tcG9uZW50cy9tYXRyaXhHZW5lcmF0b3JzL3V0aWxzLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2RhdGEvY29uc3RhbnRzLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2RhdGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvbGlicmFyeS9iYXNlL0NvbmZpZ0hlbHBlci5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L2Jhc2UvYmFzZS5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L2Jhc2UvY29uc3RhbnRzLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2xpYnJhcnkvYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L2RhdGEvRGF0YUhlbHBlci5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L2RhdGEvTWF0cml4LmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2xpYnJhcnkvZGF0YS9TdGF0ZS5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L2RhdGEvY29uc3RhbnRzLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2xpYnJhcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvbGlicmFyeS9yZW5kZXIvUmVuZGVySGVscGVyLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2xpYnJhcnkvcmVuZGVyL2NvbXBvbmVudHMvQmFzZS5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L3JlbmRlci9jb21wb25lbnRzL0Rpdk1hdHJpeC5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L3JlbmRlci9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L3JlbmRlci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvbGlicmFyeS9yZW5kZXIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvbGlicmFyeS91dGlscy5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9wb3dlci9Mb2dpY0FQSS5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9wb3dlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9wb3dlci9tYWluLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL3Bvd2VyL3Bvd2VyVHVybi5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9wb3dlci91dGlscy5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9yZW5kZXIvUmVuZGVyLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL3JlbmRlci9SZW5kZXJBUEkuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvcmVuZGVyL2NvbXBvbmVudHMvQWRkaXRpb25hbEZpZWxkLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL3JlbmRlci9jb21wb25lbnRzL0hleGFnb25UaWxlLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL3JlbmRlci9jb21wb25lbnRzL1RhYmxlLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL3JlbmRlci9jb21wb25lbnRzL1R1cm5CdXR0b24uanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvcmVuZGVyL2NvbXBvbmVudHMvcG93ZXJUaWxlLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL3JlbmRlci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvcmVuZGVyL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qINCi0LDQsdC70LjRhtCwINC40YHQv9C+0LvRjNC30YPQtdC80YvRhSDRhtCy0LXRgtC+0LIgKi9cXHJcXG5cXHJcXG4vKiAjMjgyRTMzIC0g0YHQstC10YLQu9GL0Lkg0YTQvtC9INC00LvRjyDRgtGR0LzQvdC+0Lkg0YLQtdC80YsgKi9cXHJcXG4vKiAjMjcyODIyIC0gbW9ub2thaSDRhNC+0L0gKi9cXHJcXG4vKiAjMTgxOTFEIC0g0KLRkdC80L3Ri9C5INGE0L7QvSAqL1xcclxcbi8qICM2NUFBREQgLSDRgdC40L3QuNC5INGG0LLQtdGCICovXFxyXFxuLyogI0Y5MjY3MiAtIG1vbm9rYWkg0YDQvtC30L7QstC5ICovXFxyXFxuLyogI0E2RTIyRSAtIG1vbm9rYWkg0LfQtdC70ZHQvdGL0LkgKi9cXHJcXG4vKiAjRjhGOEYwIC0gbW9ub2thaSDQsdC10LvRi9C5ICovXFxyXFxuLyogIzAwQ0M5OSAtINC/0YDQuNGP0YLQvdGL0Lkg0LfQtdC70ZHQvdGL0LkgKi9cXHJcXG4vKiAjRkYwMDY2IC0g0YDQvtC30L7QstGL0LkgMiAqL1xcclxcbi8qICNGRjk5OTkgLSDRgNC+0LfQvtCy0LDRjyDRgtC10L3RjCAvINCw0LrRhtC10L3RgiAqL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMTgxOTFEO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwbGljYXRpb24ge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjb2xvcjogI0Y4RjhGMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9pbWcge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGVfaGV4YWdvbiB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1oZXgtc2lkZTogMjJweDtcXHJcXG4gICAgLS1oZXgtcm90YXRlOiAzMGRlZztcXHJcXG59XFxyXFxuXFxyXFxuLmhleGFnb24ge1xcclxcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1oZXgtc2lkZSkgKiAxLjczMik7XFxyXFxuICAgIGhlaWdodDogdmFyKC0taGV4LXNpZGUpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKHZhcigtLWhleC1yb3RhdGUpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfd2FpdGluZ1NlbGVjdCAuaGV4YWdvbiB7XFxyXFxuICAgIGJveC1zaGFkb3c6MCAwIDE4cHggI0ZGOTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLmhleGFnb246aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OjAgMCAyNXB4ICNGOEY4RjA7XFxyXFxufVxcclxcblxcclxcbi5jZWxsX3NlbGVjdGVkIC5oZXhhZ29uIHtcXHJcXG4gICAgYm94LXNoYWRvdzowIDAgMTBweCAjRkYwMDY2O1xcclxcbn1cXHJcXG5cXHJcXG4uaGV4YWdvbjpiZWZvcmUsXFxyXFxuLmhleGFnb246YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5oZXhhZ29uX3Bvd2VyVmFsdWUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDM3cHg7XFxyXFxuICAgIHdpZHRoOiAzN3B4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZXhhZ29uOmJlZm9yZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhleGFnb246YWZ0ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZV9ibHVlIC5oZXhhZ29uOmJlZm9yZSxcXHJcXG4udGlsZV9ibHVlIC5oZXhhZ29uOmFmdGVyLFxcclxcbi50aWxlX2JsdWUgLmhleGFnb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNjVBQUREO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZV9tYWdlbnRhIC5oZXhhZ29uOmJlZm9yZSxcXHJcXG4udGlsZV9tYWdlbnRhIC5oZXhhZ29uOmFmdGVyLFxcclxcbi50aWxlX21hZ2VudGEgLmhleGFnb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRjkyNjcyO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZV9yZWQgLmhleGFnb246YmVmb3JlLFxcclxcbi50aWxlX3JlZCAuaGV4YWdvbjphZnRlcixcXHJcXG4udGlsZV9yZWQgLmhleGFnb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBkYXJrcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZV9ncmVlbiAuaGV4YWdvbjpiZWZvcmUsXFxyXFxuLnRpbGVfZ3JlZW4gLmhleGFnb246YWZ0ZXIsXFxyXFxuLnRpbGVfZ3JlZW4gLmhleGFnb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjQTZFMjJFO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDM1cHg7XFxyXFxuICAgIG1pbi13aWR0aDogMzVweDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbF9yb3cge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUT0RPOiDQstGB0ZEg0YfRgtC+IGNlbGwg0LfQsNC80LXQvdC40YLRjCDQvdCwIHNxdWFyZSwg0LjQt9C90LDRh9Cw0LvRjNC90L4g0LTQtdC70LDQuyDQv9C+0LQg0LrQstCw0LTRgNCw0YIuICovXFxyXFxuLyogVE9ETzog0LLRgNC10LzQtdC90L3Ri9C5INC60L7QvNC80LXQvdGCLdC60L7RgdGC0YvQu9GMICovXFxyXFxuLmNlbGxfZW1wdHkgeyAvKmJhY2tncm91bmQ6ICMyODJFMzM7Ki8gfVxcclxcbi5jZWxsX3dhaXRpbmcgeyBiYWNrZ3JvdW5kOiAjRjkyNjcyOyB9XFxyXFxuXFxyXFxuLmNlbGxfd3JhcCB7XFxyXFxuICAgIC8qcGFkZGluZzogNXB4OyovXFxyXFxuICAgIC8qIFRPRE86INCy0YDQtdC80LXQvdC90YvQuSDQutC+0LzQvNC10L3Rgi3QutC+0YHRgtGL0LvRjCAqL1xcclxcbiAgICAvKmJhY2tncm91bmQ6ICMyNzI4MjI7Ki9cXHJcXG4gICAgLyptaW4taGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDQwcHg7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfd3JhcDpob3ZlcixcXHJcXG4uY2VsbF93YWl0aW5nU2VsZWN0IHtcXHJcXG4gICAgLyotbW96LWJveC1zaGFkb3c6MCAwIDEwcHggIzAwMDsqL1xcclxcbiAgICAvKi13ZWJraXQtYm94LXNoYWRvdzowIDAgMTBweCAjMDAwOyovXFxyXFxuICAgIC8qYm94LXNoYWRvdzowIDAgMTBweCAjRjhGOEYwOyovXFxyXFxufVxcclxcblxcclxcbi5jZWxsX3NlbGVjdGVkIHtcXHJcXG4gICAgLyotbW96LWJveC1zaGFkb3c6MCAwIDEwcHggIzAwMDsqL1xcclxcbiAgICAvKi13ZWJraXQtYm94LXNoYWRvdzowIDAgMTBweCAjMDAwOyovXFxyXFxuICAgIC8qYm94LXNoYWRvdzowIDAgMTBweCAjRkYwMDY2OyovXFxyXFxufVxcclxcblxcclxcblxcclxcbi5jZWxsX2dyZWVuIHsgYmFja2dyb3VuZDogI0E2RTIyRTsgfVxcclxcbi5jZWxsX3JlZCB7IGJhY2tncm91bmQ6IGRhcmtyZWQ7IH1cXHJcXG4uY2VsbF9tYWdlbnRhIHsgYmFja2dyb3VuZDogI0Y5MjY3MjsgfVxcclxcbi5jZWxsX2JsdWUgeyBiYWNrZ3JvdW5kOiAjNjVBQUREOyB9XFxyXFxuXFxyXFxuLnRpbGVfaGV4YWdvbl9saW5lXzEsXFxyXFxuLnRpbGVfaGV4YWdvbl9saW5lXzIsXFxyXFxuLnRpbGVfaGV4YWdvbl9saW5lXzMge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4RjA7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3LjVkZWcpO1xcclxcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3LjVkZWcpO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcuNWRlZyk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3LjVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZV9oZXhhZ29uX2xpbmVfMSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDY0ZGVnKTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XFxyXFxufVxcclxcblxcclxcbi50aWxlX2hleGFnb25fbGluZV8yIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTE2ZGVnKTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxyXFxufVxcclxcblxcclxcbi50aWxlX2hleGFnb25fbGluZV8zIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ0VMTF9DT05ORUNUOiAqL1xcclxcblxcclxcbi5jZWxsX2Nvbm5lY3Qge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbF9jb25uZWN0X2RpYWdvbmFsTGVmdCxcXHJcXG4uY2VsbF9jb25uZWN0X2RpYWdvbmFsUmlnaHQsXFxyXFxuLmNlbGxfY29ubmVjdF9saW5lIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEYwO1xcclxcbiAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNy41ZGVnKTtcXHJcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNy41ZGVnKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3LjVkZWcpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNy41ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfY29ubmVjdF9kaWFnb25hbExlZnQge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsX2Nvbm5lY3RfZGlhZ29uYWxSaWdodCB7XFxyXFxuICAgIC8qdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyovXFxyXFxufVxcclxcblxcclxcbi5jZWxsX2Nvbm5lY3RfbGluZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBRERJVElPTkFML0xPRyBTVEFSVDogKi9cXHJcXG4vKiDQmNGB0L/QvtC70YzQt9GD0LXQvCBcXFwibG9nXFxcIiDRgi7Qui4g0YLQsNC6INC60L7RgNC+0YfQtS4gKi9cXHJcXG5cXHJcXG4vKi5sb2dfd3JhcCB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMjcyODIyO1xcclxcbiAgICBjb2xvcjogI0Y4RjhGMDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59Ki9cXHJcXG5cXHJcXG4ubG9nX3RpbGUge1xcclxcbiAgICBtYXJnaW46IDAgMTBweCAxMHB4IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyNzI4MjI7XFxyXFxuICAgIGNvbG9yOiAjRjhGOEYwO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nX2J1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDE2MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMTgxOTFEO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nX2J1dHRvbl9zZWxlY3RlZCB7XFxyXFxuICAgIGJveC1zaGFkb3c6MCAwIDEwcHggI0ZGMDA2NjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQURESVRJT05BTC9MT0cgRU5ELiAqL1xcclxcblxcclxcbi8qIENPTU1PTiBTVEFSVDogKi9cXHJcXG4uanVzdGlmeUNlbnRlcixcXHJcXG4uZmxleENvbHVtbixcXHJcXG4uZmxleCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5mbGV4Q29sdW1uIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmp1c3RpZnlTcGFjZUJldHdlZW4ge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5jZWxsX3dyYXAsXFxyXFxuLmp1c3RpZnlDZW50ZXIge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ09NTU9OIEVORC4gKi9cXHJcXG5cXHJcXG4vKiDQktCg0JXQnNCV0J3QndCr0JUg0JrQntCh0KLQq9Cb0JggKi9cXHJcXG5cXHJcXG4ubWFyZ2luTGVmdE1pZGRsZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdDQUFnQzs7QUFFaEMsMENBQTBDO0FBQzFDLDBCQUEwQjtBQUMxQix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsNEJBQTRCO0FBQzVCLCtCQUErQjtBQUMvQix3QkFBd0I7QUFDeEIsb0NBQW9DOztBQUVwQztJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtLQUNmLGdCQUFnQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBOzs7SUFHSSxtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLHlFQUF5RTtBQUN6RSxvQ0FBb0M7QUFDcEMsY0FBYyx1QkFBdUIsRUFBRTtBQUN2QyxnQkFBZ0IsbUJBQW1CLEVBQUU7O0FBRXJDO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkI7OztpQkFHYTtBQUNqQjs7QUFFQTs7SUFFSSxpQ0FBaUM7SUFDakMsb0NBQW9DO0lBQ3BDLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsK0JBQStCO0FBQ25DOzs7QUFHQSxjQUFjLG1CQUFtQixFQUFFO0FBQ25DLFlBQVksbUJBQW1CLEVBQUU7QUFDakMsZ0JBQWdCLG1CQUFtQixFQUFFO0FBQ3JDLGFBQWEsbUJBQW1CLEVBQUU7O0FBRWxDOzs7SUFHSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUEsa0JBQWtCOztBQUVsQjtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7OztJQUdJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUEsMEJBQTBCO0FBQzFCLHNDQUFzQzs7QUFFdEM7Ozs7Ozs7RUFPRTs7QUFFRjtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBLHdCQUF3Qjs7QUFFeEIsa0JBQWtCO0FBQ2xCOzs7SUFHSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQSxnQkFBZ0I7O0FBRWhCLHNCQUFzQjs7QUFFdEI7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyog0KLQsNCx0LvQuNGG0LAg0LjRgdC/0L7Qu9GM0LfRg9C10LzRi9GFINGG0LLQtdGC0L7QsiAqL1xcclxcblxcclxcbi8qICMyODJFMzMgLSDRgdCy0LXRgtC70YvQuSDRhNC+0L0g0LTQu9GPINGC0ZHQvNC90L7QuSDRgtC10LzRiyAqL1xcclxcbi8qICMyNzI4MjIgLSBtb25va2FpINGE0L7QvSAqL1xcclxcbi8qICMxODE5MUQgLSDQotGR0LzQvdGL0Lkg0YTQvtC9ICovXFxyXFxuLyogIzY1QUFERCAtINGB0LjQvdC40Lkg0YbQstC10YIgKi9cXHJcXG4vKiAjRjkyNjcyIC0gbW9ub2thaSDRgNC+0LfQvtCy0LkgKi9cXHJcXG4vKiAjQTZFMjJFIC0gbW9ub2thaSDQt9C10LvRkdC90YvQuSAqL1xcclxcbi8qICNGOEY4RjAgLSBtb25va2FpINCx0LXQu9GL0LkgKi9cXHJcXG4vKiAjMDBDQzk5IC0g0L/RgNC40Y/RgtC90YvQuSDQt9C10LvRkdC90YvQuSAqL1xcclxcbi8qICNGRjAwNjYgLSDRgNC+0LfQvtCy0YvQuSAyICovXFxyXFxuLyogI0ZGOTk5OSAtINGA0L7Qt9C+0LLQsNGPINGC0LXQvdGMIC8g0LDQutGG0LXQvdGCICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxODE5MUQ7XFxyXFxufVxcclxcblxcclxcbi5hcHBsaWNhdGlvbiB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiAjRjhGOEYwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX2ltZyB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZV9oZXhhZ29uIHtcXHJcXG4gICAgbWluLWhlaWdodDogNDBweDtcXHJcXG4gICAgbWluLXdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWhleC1zaWRlOiAyMnB4O1xcclxcbiAgICAtLWhleC1yb3RhdGU6IDMwZGVnO1xcclxcbn1cXHJcXG5cXHJcXG4uaGV4YWdvbiB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWhleC1zaWRlKSAqIDEuNzMyKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZXgtc2lkZSk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUodmFyKC0taGV4LXJvdGF0ZSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbF93YWl0aW5nU2VsZWN0IC5oZXhhZ29uIHtcXHJcXG4gICAgYm94LXNoYWRvdzowIDAgMThweCAjRkY5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uaGV4YWdvbjpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6MCAwIDI1cHggI0Y4RjhGMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfc2VsZWN0ZWQgLmhleGFnb24ge1xcclxcbiAgICBib3gtc2hhZG93OjAgMCAxMHB4ICNGRjAwNjY7XFxyXFxufVxcclxcblxcclxcbi5oZXhhZ29uOmJlZm9yZSxcXHJcXG4uaGV4YWdvbjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhleGFnb25fcG93ZXJWYWx1ZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMzdweDtcXHJcXG4gICAgd2lkdGg6IDM3cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhleGFnb246YmVmb3JlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGV4YWdvbjphZnRlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi50aWxlX2JsdWUgLmhleGFnb246YmVmb3JlLFxcclxcbi50aWxlX2JsdWUgLmhleGFnb246YWZ0ZXIsXFxyXFxuLnRpbGVfYmx1ZSAuaGV4YWdvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM2NUFBREQ7XFxyXFxufVxcclxcblxcclxcbi50aWxlX21hZ2VudGEgLmhleGFnb246YmVmb3JlLFxcclxcbi50aWxlX21hZ2VudGEgLmhleGFnb246YWZ0ZXIsXFxyXFxuLnRpbGVfbWFnZW50YSAuaGV4YWdvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGOTI2NzI7XFxyXFxufVxcclxcblxcclxcbi50aWxlX3JlZCAuaGV4YWdvbjpiZWZvcmUsXFxyXFxuLnRpbGVfcmVkIC5oZXhhZ29uOmFmdGVyLFxcclxcbi50aWxlX3JlZCAuaGV4YWdvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi50aWxlX2dyZWVuIC5oZXhhZ29uOmJlZm9yZSxcXHJcXG4udGlsZV9ncmVlbiAuaGV4YWdvbjphZnRlcixcXHJcXG4udGlsZV9ncmVlbiAuaGV4YWdvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNBNkUyMkU7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gICAgbWluLWhlaWdodDogMzVweDtcXHJcXG4gICAgbWluLXdpZHRoOiAzNXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jZWxsX3JvdyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIFRPRE86INCy0YHRkSDRh9GC0L4gY2VsbCDQt9Cw0LzQtdC90LjRgtGMINC90LAgc3F1YXJlLCDQuNC30L3QsNGH0LDQu9GM0L3QviDQtNC10LvQsNC7INC/0L7QtCDQutCy0LDQtNGA0LDRgi4gKi9cXHJcXG4vKiBUT0RPOiDQstGA0LXQvNC10L3QvdGL0Lkg0LrQvtC80LzQtdC90YIt0LrQvtGB0YLRi9C70YwgKi9cXHJcXG4uY2VsbF9lbXB0eSB7IC8qYmFja2dyb3VuZDogIzI4MkUzMzsqLyB9XFxyXFxuLmNlbGxfd2FpdGluZyB7IGJhY2tncm91bmQ6ICNGOTI2NzI7IH1cXHJcXG5cXHJcXG4uY2VsbF93cmFwIHtcXHJcXG4gICAgLypwYWRkaW5nOiA1cHg7Ki9cXHJcXG4gICAgLyogVE9ETzog0LLRgNC10LzQtdC90L3Ri9C5INC60L7QvNC80LXQvdGCLdC60L7RgdGC0YvQu9GMICovXFxyXFxuICAgIC8qYmFja2dyb3VuZDogIzI3MjgyMjsqL1xcclxcbiAgICAvKm1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDBweDsqL1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbF93cmFwOmhvdmVyLFxcclxcbi5jZWxsX3dhaXRpbmdTZWxlY3Qge1xcclxcbiAgICAvKi1tb3otYm94LXNoYWRvdzowIDAgMTBweCAjMDAwOyovXFxyXFxuICAgIC8qLXdlYmtpdC1ib3gtc2hhZG93OjAgMCAxMHB4ICMwMDA7Ki9cXHJcXG4gICAgLypib3gtc2hhZG93OjAgMCAxMHB4ICNGOEY4RjA7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfc2VsZWN0ZWQge1xcclxcbiAgICAvKi1tb3otYm94LXNoYWRvdzowIDAgMTBweCAjMDAwOyovXFxyXFxuICAgIC8qLXdlYmtpdC1ib3gtc2hhZG93OjAgMCAxMHB4ICMwMDA7Ki9cXHJcXG4gICAgLypib3gtc2hhZG93OjAgMCAxMHB4ICNGRjAwNjY7Ki9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNlbGxfZ3JlZW4geyBiYWNrZ3JvdW5kOiAjQTZFMjJFOyB9XFxyXFxuLmNlbGxfcmVkIHsgYmFja2dyb3VuZDogZGFya3JlZDsgfVxcclxcbi5jZWxsX21hZ2VudGEgeyBiYWNrZ3JvdW5kOiAjRjkyNjcyOyB9XFxyXFxuLmNlbGxfYmx1ZSB7IGJhY2tncm91bmQ6ICM2NUFBREQ7IH1cXHJcXG5cXHJcXG4udGlsZV9oZXhhZ29uX2xpbmVfMSxcXHJcXG4udGlsZV9oZXhhZ29uX2xpbmVfMixcXHJcXG4udGlsZV9oZXhhZ29uX2xpbmVfMyB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGMDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDcuNWRlZyk7XFxyXFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDcuNWRlZyk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNy41ZGVnKTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDcuNWRlZyk7XFxyXFxufVxcclxcblxcclxcbi50aWxlX2hleGFnb25fbGluZV8xIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjRkZWcpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGVfaGV4YWdvbl9saW5lXzIge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTZkZWcpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGVfaGV4YWdvbl9saW5lXzMge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDRUxMX0NPTk5FQ1Q6ICovXFxyXFxuXFxyXFxuLmNlbGxfY29ubmVjdCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jZWxsX2Nvbm5lY3RfZGlhZ29uYWxMZWZ0LFxcclxcbi5jZWxsX2Nvbm5lY3RfZGlhZ29uYWxSaWdodCxcXHJcXG4uY2VsbF9jb25uZWN0X2xpbmUge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4RjA7XFxyXFxuICAgIGhlaWdodDogNHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3LjVkZWcpO1xcclxcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3LjVkZWcpO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcuNWRlZyk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3LjVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbF9jb25uZWN0X2RpYWdvbmFsTGVmdCB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfY29ubmVjdF9kaWFnb25hbFJpZ2h0IHtcXHJcXG4gICAgLyp0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfY29ubmVjdF9saW5lIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxufVxcclxcblxcclxcbi8qIEFERElUSU9OQUwvTE9HIFNUQVJUOiAqL1xcclxcbi8qINCY0YHQv9C+0LvRjNC30YPQtdC8IFxcXCJsb2dcXFwiINGCLtC6LiDRgtCw0Log0LrQvtGA0L7Rh9C1LiAqL1xcclxcblxcclxcbi8qLmxvZ193cmFwIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyNzI4MjI7XFxyXFxuICAgIGNvbG9yOiAjRjhGOEYwO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn0qL1xcclxcblxcclxcbi5sb2dfdGlsZSB7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4IDEwcHggMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzI3MjgyMjtcXHJcXG4gICAgY29sb3I6ICNGOEY4RjA7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dfYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMTYwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxODE5MUQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dfYnV0dG9uX3NlbGVjdGVkIHtcXHJcXG4gICAgYm94LXNoYWRvdzowIDAgMTBweCAjRkYwMDY2O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBRERJVElPTkFML0xPRyBFTkQuICovXFxyXFxuXFxyXFxuLyogQ09NTU9OIFNUQVJUOiAqL1xcclxcbi5qdXN0aWZ5Q2VudGVyLFxcclxcbi5mbGV4Q29sdW1uLFxcclxcbi5mbGV4IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXhDb2x1bW4ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeVNwYWNlQmV0d2VlbiB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfd3JhcCxcXHJcXG4uanVzdGlmeUNlbnRlciB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDT01NT04gRU5ELiAqL1xcclxcblxcclxcbi8qINCS0KDQldCc0JXQndCd0KvQlSDQmtCe0KHQotCr0JvQmCAqL1xcclxcblxcclxcbi5tYXJnaW5MZWZ0TWlkZGxlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUG93ZXJEYXRhQVBJIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHsgUG93ZXJSZW5kZXJBUEkgfSBmcm9tICcuL3JlbmRlcic7XHJcbmltcG9ydCB7IFBvd2VyTG9naWNBUEkgfSBmcm9tICcuL3Bvd2VyJztcclxuXHJcbmltcG9ydCB7IEJBU0VfSEFORExFUl9UWVBFUyB9IGZyb20gJy4vbGlicmFyeSc7XHJcblxyXG5pbXBvcnQgeyB0aWxlQ2xpY2tIYW5kbGVyIH0gZnJvbSAnLi9wb3dlci9wb3dlclR1cm4nO1xyXG5pbXBvcnQgeyBIQU5ETEVSX1RZUEUsIFRVUk5fQlVUVE9OX0VWRU5UX1RZUEVTLCBUVVJOX0JVVFRPTl9FVkVOVFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICog0JjQs9GA0LAgUG93ZXJOdW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3dlckdhbWVBcHAge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBkb21JZHMsIGlzRGV2KSB7XHJcbiAgICAgICAgY29uc3QgUkVOREVSX0NPTkZJRyA9IHtcclxuICAgICAgICAgICAgVVNFX1RBQkxFOiBjb25maWcuVVNFX1RBQkxFLFxyXG4gICAgICAgICAgICBET01fSURTOiBkb21JZHMsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvZ2ljQVBJID0gbmV3IFBvd2VyTG9naWNBUEkoaXNEZXYpO1xyXG4gICAgICAgIHRoaXMuZGF0YUFQSSA9IG5ldyBQb3dlckRhdGFBUEkodGhpcy5kYXRhSGFuZGxlci5iaW5kKHRoaXMpLCBjb25maWcsIGlzRGV2KTtcclxuICAgICAgICB0aGlzLnJlbmRlckFQSSA9IG5ldyBQb3dlclJlbmRlckFQSSh0aGlzLmRvbUhhbmRsZXIuYmluZCh0aGlzKSwgUkVOREVSX0NPTkZJRywgaXNEZXYpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICAgICAgdGhpcy5pc0RldiA9IGlzRGV2O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyQVBJLmNyZWF0ZUFwcCh0aGlzLmRhdGFBUEkubWF0cml4KTtcclxuICAgICAgICB0aGlzLmRhdGFBUEkuc2V0Rmlyc3RUdXJuKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRGV2KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQVBJLnNob3dEZXZCdXR0b24odGhpcy5kYXRhQVBJLnN0YXRlLmdldEN1cnJlbnRTdGVwVHlwZSgpKTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy50ZXN0RGF0YUFQSSA9IHRoaXMuZGF0YUFQSTtcclxuICAgICAgICAgICAgd2luZG93LnRlc3RSZW5kZXJBUEkgPSB0aGlzLnJlbmRlckFQSTtcclxuICAgICAgICAgICAgd2luZG93LnRlc3RMb2dpY0FQSSA9IHRoaXMubG9naWNBUEk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGFIYW5kbGVyKHR5cGUsIGRhdGEpIHtcclxuICAgICAgICBpZiAoQkFTRV9IQU5ETEVSX1RZUEVTLkVMRU1FTlRfQ0hBTkdFRCA9PT0gdHlwZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aWxlID0gdGhpcy5kYXRhQVBJLmdldEl0ZW1CeVBvc2l0aW9uKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJBUEkucmVyZW5kZXJUaWxlKHRpbGUsIHRoaXMuY29uZmlnLk1BVFJJWF9UWVBFKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChUVVJOX0JVVFRPTl9FVkVOVF9UWVBFUy5ISUdITElHSFQgPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJBUEkucmVyZW5kZXJUdXJuQnV0dG9uKHR5cGUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFRVUk5fQlVUVE9OX0VWRU5UX1RZUEVTLkFDVElWRV9HSUZUX1ZJRVcgPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJBUEkucmVyZW5kZXJUdXJuQnV0dG9uKHR5cGUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb21IYW5kbGVyKGV2ZW50LCB0YXJnZXRFbGVtZW50LCB0eXBlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZXYpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQsIHRhcmdldEVsZW1lbnQsIHR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEJBU0VfSEFORExFUl9UWVBFUy5USUxFX0NMSUNLID09PSB0eXBlKSB7XHJcbiAgICAgICAgICAgIHRpbGVDbGlja0hhbmRsZXIoZXZlbnQsIHRhcmdldEVsZW1lbnQsIHRoaXMuZGF0YUFQSSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoVFVSTl9CVVRUT05fRVZFTlRTLmluY2x1ZGVzKHR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naWNBUEkudHVybkJ1dHRvbkNsaWNrSGFuZGxlcih0aGlzLmRhdGFBUEksIHRoaXMucmVuZGVyQVBJLCB7IHR5cGUgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gSEFORExFUl9UWVBFLkRFVl9ET19SQU5ET01fMSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2ljQVBJLmRldkhhbmRsZXIodHlwZSwgdGhpcy5kYXRhQVBJLCB0aGlzLnJlbmRlckFQSSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTUFUUklYX1RZUEVTLCBTT1JUSU5HX1RZUEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqINCR0LDQt9C+0LLRi9C5INC60L7QvdGE0LjQsyDQtNC70Y8g0L/QvtGB0YLRgNC+0LXQvdC40Y8g0L/RgNC40LvQvtC20LXQvdC40Y8uXHJcbiAqL1xyXG5cclxuLy8g0JzQvtC20L3QviDQv9C+0LzQtdC90Y/RgtGMINGH0LXRgNC10Lcg0L3QsNGB0YLRgNC+0LnQutC4LiDQndC10L7QsdGF0L7QtNC40LzQviDQtNC70Y8g0LTQtdGE0L7Qu9GC0L3QvtC5INC+0YLRgNC40YHQvtCy0LrQuC5cclxuZXhwb3J0IGNvbnN0IFBPV0VSX0NPTkZJRyA9IHtcclxuICAgIE1BUDoge1xyXG4gICAgICAgIFNJWkU6IHtcclxuICAgICAgICAgICAgeDogMTUsXHJcbiAgICAgICAgICAgIHk6IDE1LFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBDT1VOVF9QTEFZRVI6IDQsXHJcbiAgICBGSVJTVF9UVVJOX0lOREVYOiAwLFxyXG4gICAgTUFYX1BPV0VSX1ZBTFVFOiA4LFxyXG4gICAgTUFUUklYX1RZUEU6IE1BVFJJWF9UWVBFUy5IRVhBR09OLFxyXG4gICAgU09SVElOR19UWVBFOiBTT1JUSU5HX1RZUEVTLlJBTkRPTSxcclxuICAgIFVTRV9UQUJMRTogZmFsc2UsXHJcbn07IiwiaW1wb3J0IHsgTUFUUklYX05BTUVTIH0gZnJvbSAnLi9kYXRhJztcclxuXHJcbi8qKlxyXG4gKiDQotC+INGH0YLQviDQvNC+0LbQtdGCINC40YHQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y8g0LLQtdC30LTQtS5cclxuICovXHJcblxyXG4vLyDQktC+0LfQvNC+0LbQvdGL0LUg0LLQsNGA0LjQsNC90YLRiyDRgdC+0YHRgtC+0Y/QvdC40Y8g0LrQu9C10YLQutC4XHJcbmV4cG9ydCBjb25zdCBDRUxMX1RZUEUgPSB7XHJcbiAgICBFTVBUWTogbnVsbCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICBXQUlUSU5HOiAnd2FpdGluZycsICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICBXQUlUSU5HX0FMTE9DQVRJT046ICd3YWl0aW5nQWxsb2NhdGlvbicsICAgIC8vINC60LvQtdGC0LrQsCDQv9C+0LQgcG93ZXIsINC90L4g0L3QtSDQuNC80LXQtdGCINC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LguXHJcbiAgICBSRUFEWTogJ3JlYWR5JywgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICBDT05ORUNUX0xJTkU6ICdjb25uZWN0TGluZScsICAgICAgICAgICAgICAgIC8vXHJcbiAgICBXQUlUSU5HX1NFTEVDVDogJ3dhaXRpbmdTZWxlY3QnLCAgICAgICAgICAgIC8vINC+0LbQuNC00LDQvdC40LUg0LLRi9Cx0L7RgNCwLCDQv9C+0LTRgdCy0LXRgtC60LAuXHJcbiAgICBTRUxFQ1RFRDogJ3NlbGVjdGVkJywgICAgICAgICAgICAgICAgICAgICAgIC8vINCy0YvQsdGA0LDQvdC90LDRjy/QsNC60YLQuNCy0L3QsNGPINC/0LvQuNGC0LrQsFxyXG59O1xyXG5cclxuLy9cclxuZXhwb3J0IGNvbnN0IENPTk5FQ1RfVFlQRSA9IHtcclxuICAgIExJTkU6ICdsaW5lJyxcclxuICAgIExFRlRfTElORTogJ2xlZnRMaW5lJyxcclxuICAgIFJJR0hUX0xJTkU6ICdyaWdodExpbmUnLFxyXG4gICAgTEVGVF9UT1A6ICdsZWZ0VG9wJyxcclxuICAgIFJJR0hUX0JPVFRPTTogJ3JpZ2h0Qm90dG9tJyxcclxuXHJcbiAgICBMRUZUX1RPX0JPVFRPTTogJ2xlZnRUb0JvdHRvbScsXHJcbiAgICBSSUdIVF9UT19CT1RUT006ICdyaWdodFRvQm90dG9tJyxcclxuICAgIExFRlRfVE9fVE9QOiAnbGVmdFRvVG9wJyxcclxuICAgIFJJR0hUX1RPX1RPUDogJ3JpZ2h0VG9Ub3AnLFxyXG59O1xyXG5cclxuLy9cclxuZXhwb3J0IGNvbnN0IENPTE9SX0xJU1QgPSBbJ3JlZCcsICdtYWdlbnRhJywgJ2dyZWVuJywgJ2JsdWUnXTtcclxuXHJcbi8vINCS0L7Qt9C80L7QttC90YvQtSDQstCw0YDQuNCw0L3RgtGLINGB0L7RgdGC0L7Rj9C90LjRjyDRhdC+0LTQsC5cclxuZXhwb3J0IGNvbnN0IFNURVBfVFlQRSA9IHtcclxuICAgIEdJVkVfUE9XRVI6ICdnaXZlUG93ZXInLCAgICAgICAgICAgICAgICAvLyDRgNCw0LfQtNCw0YLRjCBwb3dlciDQv9C+INC30LDQstC10YDRiNC10L3QuNGOINGF0L7QtNCwLlxyXG4gICAgQ0hPT1NFX0ZPUl9BVFRBQ0s6ICdjaG9vc2VGb3JBdHRhY2snLCAgIC8vINCy0YvQsdC+0YAg0YHQstC+0LXQuSDQutC70LXRgtC60Lgg0LTQu9GPINCw0YLQsNC60LguXHJcbiAgICBBVFRBQ0s6ICdhdHRhY2snLCAgICAgICAgICAgICAgICAgICAgICAgLy8g0LLRi9Cx0L7RgCDQutC70LXRgtC60Lgg0L7Qv9C/0L7QvdC10L3RgtCwINC00LvRjyDQsNGC0LDQutC4LlxyXG4gICAgV0FJVElORzogJ3dhaXRpbmcnLCAgICAgICAgICAgICAgICAgICAgIC8vINC+0LbQuNC00LDQvdC40LUg0L7Qv9C/0L7QvdC10L3RgtCwLlxyXG59XHJcblxyXG4vL1xyXG5leHBvcnQgY29uc3QgSEFORExFUl9UWVBFID0ge1xyXG4gICAgVFVSTl9CVVRUT05fQ0xJQ0s6ICd0dXJuQnV0dG9uQ2xpY2snLCAgICAgICAgICAgLy8g0LrQu9C40Log0L/QviBcItCh0LvQtdC00YPRjtGJ0LjQuSDRhdC+0LRcIi5cclxuICAgIEdJRlRfRU5EX0JVVFRPTl9DTElDSzogJ2dpZnRFbmRCdXR0b25DbGljaycsICAgIC8vINC60LvQuNC6INC/0L4gXCLQl9Cw0LLQtdGA0YjQuNGC0Ywg0YDQsNC30LTQsNGH0YNcIi5cclxuICAgIFRJTEVfQ0xJQ0s6ICd0aWxlQ2xpY2snLCAgICAgICAgICAgICAgICAgICAgICAgIC8vINC60LvQuNC6INC/0L4g0L/Qu9C40YLQutC1LlxyXG4gICAgQ0hBTkdFX1RVUk5fQlVUVE9OOiAnY2hhbmdlVHVybkJ1dHRvbicsICAgICAgICAgLy9cclxuXHJcbiAgICBERVZfRE9fUkFORE9NXzE6ICdkZXZEb1JhbmRvbTEnLCAgICAgICAgICAgICAgICAvLyDQutC70LjQuiDQv9C+INCw0LLRgtC+0LLRi9C/0L7Qu9C90LXQvdC40Y4g0YfQtdCz0L4g0LvQuNCx0L4uXHJcbn1cclxuXHJcbi8vXHJcbmV4cG9ydCBjb25zdCBDQUxDX0FUVEFDS19SRVNVTFRTID0ge1xyXG4gICAgQVRUQUNLOiAnYXR0YWNrJyxcclxuICAgIERFRkVOU0lWRTogJ2RlZmVuc2l2ZScsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUVVJOX0JVVFRPTl9FVkVOVFMgPSBbXHJcbiAgICBIQU5ETEVSX1RZUEUuVFVSTl9CVVRUT05fQ0xJQ0ssXHJcbiAgICBIQU5ETEVSX1RZUEUuR0lGVF9FTkRfQlVUVE9OX0NMSUNLXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgVFVSTl9CVVRUT05fRVZFTlRfVFlQRVMgPSB7XHJcbiAgICBISUdITElHSFQ6ICdoaWdobGlnaHQnLFxyXG4gICAgQUNUSVZFX0dJRlRfVklFVzogJ2FjdGl2ZUdpZnRWaWV3JyxcclxuICAgIEFDVElWRV9UVVJOX0JVVFRPTjogJ2FjdGl2ZVR1cm5CdXR0b24nLFxyXG59XHJcblxyXG4vLyDQotC40L8g0LrQsNGA0YLRiyAvINGC0LjQvyDRjdC70LXQvNC10L3RgtC+0LIg0L3QsCDQutCw0YDRgtC1LlxyXG5leHBvcnQgY29uc3QgTUFUUklYX1RZUEVTID0ge1xyXG4gICAgU0lNUExFOiBNQVRSSVhfTkFNRVMuU1FVQVJFMV9NQVRSSVhfTkFNRSwgICAvLyDQmtCy0LDQtNGA0LDRgiDRgSDQtNCy0YPQvNGPINGB0LLRj9C30Y/QvNC4LiDQndGD0LbQtdC9INGC0L7Qu9GM0LrQviDQtNC70Y8g0YLQtdGB0YLQuNGA0L7QstCw0L3QuNGPLiDQoNC10LDQu9C40LfQvtCy0LDQvSDRh9C10YDQtdC3INGC0LDQsdC70LjRhtGDLlxyXG4gICAgSEVYQUdPTjogTUFUUklYX05BTUVTLkhFWEFHT04xX01BVFJJWF9OQU1FLCAvLyDQkdCw0LfQvtCy0YvQuSDRgtC40L8g0YEg0YjQtdGB0YLRjNGOINGB0LLRj9C30Y/QvNC4LlxyXG59XHJcblxyXG4vLyDQotC40L8g0YDQsNGB0L/RgNC10LTQtdC70LXQvdC40Y8gUG93ZXIgKNC60L7QvNGDINC60LDQutCw0Y8g0LrQu9C10YLQutCwINC/0YDQuNC90LDQtNC70LXQttC40YIpLlxyXG5leHBvcnQgY29uc3QgU09SVElOR19UWVBFUyA9IHtcclxuICAgIFJBTkRPTTogJ3JhbmRvbScsXHJcbiAgICBGUk9NX0ZJUlNUOiAnZnJvbUZpcnN0JyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERFVl9CVVRUT05fQ0FQVElPTlMgPSB7XHJcbiAgICBNQUtFX01PVkU6ICfQodC00LXQu9Cw0YLRjCDRhdC+0LTRiycsXHJcbiAgICBHSVZFX1BPV0VSOiAn0KDQsNC30LTQsNGC0YwgcG93ZXInLFxyXG59IiwiaW1wb3J0IHsgQ0VMTF9UQVJHRVRfVFlQRSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgU1RFUF9UWVBFLCBDRUxMX1RZUEUsIENBTENfQVRUQUNLX1JFU1VMVFMsIFRVUk5fQlVUVE9OX0VWRU5UX1RZUEVTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgRGF0YUhlbHBlciB9IGZyb20gJy4uL2xpYnJhcnknO1xyXG5pbXBvcnQgeyBQb3dlck1hdHJpeCB9IGZyb20gJy4vY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFBvd2VyU3RhdGUsIFNUQVRFX0ZJRUxEUyB9IGZyb20gJy4vY29tcG9uZW50cy9TdGF0ZSc7XHJcbmltcG9ydCB7IE1BVFJJWF9GSUVMRFMgfSBmcm9tICcuL2NvbXBvbmVudHMvVGlsZSc7XHJcblxyXG4vKipcclxuICog0KHQvtC30LTQsNC90LjQtSDQtNCw0L3QvdGL0YUsINC80LXRgtC+0LTRiyDRgNCw0LHQvtGC0Ysg0YEg0LTQsNC90L3Ri9C80Lgg0LHQtdC3INC/0YDQuNCy0Y/Qt9C60Lgg0Log0LvQvtCz0LjQutC1INC40LPRgNGLLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvd2VyRGF0YSBleHRlbmRzIERhdGFIZWxwZXIge1xyXG5cclxuICAgIGluaXREYXRhKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyc05hbWUgPSB0aGlzLmdldFBsYXllcnNOYW1lKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBQb3dlclN0YXRlKHRoaXMucGxheWVyc05hbWUpO1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbmV3IFBvd2VyTWF0cml4KHRoaXMuY29uZmlnLCB0aGlzLnN0YXRlLmdldFNob3RJbmZvKCkpO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiDRgNC10LDQu9C40LfQvtCy0LDRgtGMINC90L7RgNC80LDQu9GM0L3Ri9C5INGE0YPQvdC60YbQuNC+0L3QsNC7INC/0L7RgdC70LUg0YDQsNC30LTQtdC70LAgXCLQvdCw0YHRgtGA0L7QudC60LhcIi5cclxuICAgICAgICBjb25zdCBpc1Blb3BsZUZsYWcgPSAnZGVmYXVsdCc7XHJcbiAgICAgICAgaWYgKGlzUGVvcGxlRmxhZyA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0SXNQZW9wbGVGbGFnVHJ1ZShbdGhpcy5wbGF5ZXJzTmFtZVswXV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWNyZWFzZUF2YWlsYWJsZVBvd2VyKG5hbWUpIHtcclxuICAgICAgICAtLXRoaXMuc3RhdGVbbmFtZV0uYXZhaWxhYmxlUG93ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG93ZXJWYWx1ZShwb3NpdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmdldEl0ZW1CeVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICByZXR1cm4gdGlsZS5nZXRQb3dlclZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9GA0L7RgdGC0LDQstC40YLRjCBhdmFpbGFibGVQb3dlciDQsiBzdGF0ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHNldEF2YWlsYWJsZVBvd2VyKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLm1hdHJpeC5nZXRDb3VudFRpbGVzQnlOYW1lKG5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRBdmFpbGFibGVQb3dlcihuYW1lLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUT0RPOiDQv9C10YDQtdC/0LjRgdCw0YLRjCDQu9C+0LPQuNC60YMuINCf0YDQuCDQv9GA0LXQstGL0YjQtdC90LjQuCDQt9C90LDRh9C10L3QuNGPINGB0L3QuNC80LDRgtGMINC/0L7QtNGB0LLQtdGC0LrRgyDQuCDQvdC1INC+0LHRgNCw0LHQsNGC0YvQstCw0YLRjCDQutC70LjQui5cclxuICAgICAqL1xyXG4gICAgaW5jcmVhc2VQb3dlclZhbHVlKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldEl0ZW1CeVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgaWYgKGl0ZW0ucG93ZXJWYWx1ZSA8IHRoaXMuY29uZmlnLk1BWF9QT1dFUl9WQUxVRSkge1xyXG4gICAgICAgICAgICArK2l0ZW0ucG93ZXJWYWx1ZTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rmlyc3RUdXJuTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzTmFtZVt0aGlzLmNvbmZpZy5GSVJTVF9UVVJOX0lOREVYXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRPRE86INGN0YLQviDQvdGD0LbQvdC+INGA0LXRhNCw0LrRgtC+0YDQuNGC0Ywg0L3QsCDQsdC+0LvQtdC1INCz0L7QstC+0YDRj9GJ0LjQtSDRhNGD0L3QutGG0LjQuC4g0KHQvtC60YDQsNGC0LjRgtGMINC/0L4g0LzQsNC60YHQuNC80YPQvNGDINCy0YvQt9C+0LIg0LzQtdGC0L7QtNCwINC4INGD0LTQsNC70LjRgtGMINC/0L7RgtC+0LwuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1c2VSZXJlbmRlclxyXG4gICAgICovXHJcbiAgICBzZXRTdGVwVHlwZShuYW1lLCB2YWx1ZSwgdXNlUmVyZW5kZXIgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY2hhbmdlU3RlcFR5cGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0Q3VycmVudFN0ZXBUeXBlKHZhbHVlKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldEN1cnJlbnRUdXJuKG5hbWUpO1xyXG5cclxuICAgICAgICAvLyDQn9C+0LTRgdCy0LXRh9C40LLQsNC10Lwg0LrQu9C10YLQutC4INCyINC60L7RgtC+0YDRi9C1INC80L7QttC90L4g0YDQsNC30LTQsNGC0YwgcG93ZXIuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBTVEVQX1RZUEUuR0lWRV9QT1dFUikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENlbGxUeXBlRm9yQWxsKENFTExfVEFSR0VUX1RZUEUuYnlQbGF5ZXJOYW1lLCBuYW1lLCBDRUxMX1RZUEUuV0FJVElOR19TRUxFQ1QsIHVzZVJlcmVuZGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCf0L7QtNGB0LLQtdGH0LjQstCw0LXQvCDQutC70LXRgtC60Lgg0LrQvtGC0L7RgNGL0LUg0LzQvtC20L3QviDQstGL0LHRgNCw0YLRjCDQtNC70Y8g0LDRgtCw0LrQuC5cclxuICAgICAgICBpZiAodmFsdWUgPT09IFNURVBfVFlQRS5DSE9PU0VfRk9SX0FUVEFDSykge1xyXG4gICAgICAgICAgICBjb25zdCB0aWxlTGlzdCA9IHRoaXMubWF0cml4LmdldFRpbGVMaXN0QnlDYW5BdHRhY2sobmFtZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldENlbGxUeXBlSW5MaXN0KHRpbGVMaXN0LCBDRUxMX1RZUEUuV0FJVElOR19TRUxFQ1QsIHVzZVJlcmVuZGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9GA0L7RgdGC0LDQstC40YLRjCBzdGVwVHlwZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0VHlwZSAtINGC0LjQvyDQv9GA0L7RgdGC0LDQvdC+0LLQutC4LiDQndCwINCy0YHQtSwg0L/QviBpZCwg0LXRidGRINC60LDQutC40LUt0YLQviDQstGL0LHQvtGA0LrQuC5cclxuICAgICAqIEBwYXJhbSB7YW55fSB0YXJnZXRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1c2VSZXJlbmRlclxyXG4gICAgICovXHJcbiAgICBzZXRDZWxsVHlwZUZvckFsbCh0YXJnZXRUeXBlLCB0YXJnZXQsIHZhbHVlLCB1c2VSZXJlbmRlciA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKENFTExfVEFSR0VUX1RZUEUuYnlQbGF5ZXJOYW1lID09PSB0YXJnZXRUeXBlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbGVMaXN0ID0gdGhpcy5tYXRyaXguZ2V0VGlsZUxpc3RCeVBsYXllcih0YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgdGlsZUxpc3QuZm9yRWFjaCh0aWxlID0+IHtcclxuICAgICAgICAgICAgICAgIHRpbGUuc2V0VHlwZSh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHVzZVJlcmVuZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXJlbmRlckJ5UG9zaXRpb24odGlsZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENFTExfVEFSR0VUX1RZUEUuYnlQb3NpdGlvbiA9PT0gdGFyZ2V0VHlwZSkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5tYXRyaXguZ2V0SXRlbSh0YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0/LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udHlwZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodXNlUmVyZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVyZW5kZXJCeVBvc2l0aW9uKHRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9GA0L7RgdGC0LDQstC40YLRjCBzdGVwVHlwZSDQtNC70Y8g0L/QtdGA0LXQtNCw0L3QvdC+0LPQviDRgdC/0LjRgdC60LAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHthcnJheX0gbGlzdFxyXG4gICAgICogQHBhcmFtIHthbnl9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZVJlcmVuZGVyXHJcbiAgICAgKi9cclxuICAgIHNldENlbGxUeXBlSW5MaXN0KGxpc3QsIHZhbHVlLCB1c2VSZXJlbmRlciA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKHRpbGUgPT4ge1xyXG4gICAgICAgICAgICB0aWxlLnNldFR5cGUodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZVJlcmVuZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcmVuZGVyQnlQb3NpdGlvbih0aWxlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbnRTdGVwVHlwZSh0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRDdXJyZW50U3RlcFR5cGUodHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3Bwb25lbnRUaWxlTGlzdChteVBvc2l0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4LmdldE9wcG9uZW50TGlua2VkVGlsZShteVBvc2l0aW9uLCB0aGlzLmNvbmZpZy5NQVRSSVhfVFlQRSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRXYWl0aW5nU2VsZWN0KCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFyYW1CeVBhcmFtKE1BVFJJWF9GSUVMRFMuVFlQRSwgQ0VMTF9UWVBFLldBSVRJTkdfU0VMRUNULCBDRUxMX1RZUEUuUkVBRFksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZ2hsaWdodEFjdGl2ZVRpbGUocG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnNldENlbGxUeXBlRm9yQWxsKENFTExfVEFSR0VUX1RZUEUuYnlQb3NpdGlvbiwgcG9zaXRpb24sIENFTExfVFlQRS5TRUxFQ1RFRCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhpZ2hsaWdodE9wcG9uZW50KG15UG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCBsaW5rZWRMaXN0ID0gdGhpcy5nZXRPcHBvbmVudFRpbGVMaXN0KG15UG9zaXRpb24pO1xyXG5cclxuICAgICAgICBsaW5rZWRMaXN0LmZvckVhY2goKHsgcG9zaXRpb24gfSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldENlbGxUeXBlRm9yQWxsKENFTExfVEFSR0VUX1RZUEUuYnlQb3NpdGlvbiwgcG9zaXRpb24sIENFTExfVFlQRS5XQUlUSU5HX1NFTEVDVCwgdHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBsaW5rZWRMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0SGlnaGxpZ2h0KCkge1xyXG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodExpc3QgPSBbQ0VMTF9UWVBFLldBSVRJTkdfU0VMRUNULCBDRUxMX1RZUEUuU0VMRUNURURdO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZVBhcmFtQnlQYXJhbShNQVRSSVhfRklFTERTLlRZUEUsIGhpZ2hsaWdodExpc3QsIENFTExfVFlQRS5SRUFEWSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQodCw0LzRi9C5INC/0YDQuNC80LjRgtC40LLQvdGL0Lkg0YHQv9C+0YHQvtCxINC/0L7Qu9GD0YfQtdC90LjRjyDRgdC70LXQtNGD0Y7RidC10LPQviDQuNCz0YDQvtC60LAg0L/QviDQvtGH0LXRgNC10LTQvdC+0YHRgtC4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5ZXJOYW1lXHJcbiAgICAgKi9cclxuICAgIGdldE5leHRQbGF5ZXJOYW1lKHBsYXllck5hbWUpIHtcclxuICAgICAgICBjb25zdCBwbGF5ZXJzTGlzdCA9IHRoaXMuc3RhdGUuZ2V0UGxheWVyc0xpc3QoKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBwbGF5ZXJzTGlzdC5pbmRleE9mKHBsYXllck5hbWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGxheWVyc0xpc3RbY3VycmVudEluZGV4ICsgMV0gfHwgcGxheWVyc0xpc3RbMF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7b2JqZWN0fSB7IGluZm8sIG5hbWUgfVxyXG4gICAgICovXHJcbiAgICBnZXROZXh0UGxheWVySW5mbygpIHtcclxuICAgICAgICBjb25zdCBvbGROYW1lID0gdGhpcy5zdGF0ZS5nZXRDdXJyZW50VHVybigpO1xyXG4gICAgICAgIGNvbnN0IG5leHROYW1lID0gdGhpcy5nZXROZXh0UGxheWVyTmFtZShvbGROYW1lKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJJbmZvID0gdGhpcy5zdGF0ZS5nZXRQbGF5ZXJJbmZvKG5leHROYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5mbzogeyAuLi5wbGF5ZXJJbmZvIH0sXHJcbiAgICAgICAgICAgIG5hbWU6IG5leHROYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXZhaWxhYmxlUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZ2V0QXZhaWxhYmxlUG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBdmFpbGFibGVQb3NpdGlvbihwb3NpdGlvbkxpc3QpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldEF2YWlsYWJsZVBvc2l0aW9uKHBvc2l0aW9uTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlVGlsZVBvc2l0aW9uKHBvc2l0aW9uLCBpc1Blb3BsZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKGlzUGVvcGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0QWN0aXZlVGlsZShwb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoU1RBVEVfRklFTERTLkFDVElWRV9USUxFX1BPU0lUSU9OLCB7IC4uLnBvc2l0aW9uIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2ZVRpbGVQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5nZXRTdGF0ZVByb3BlcnR5KFNUQVRFX0ZJRUxEUy5BQ1RJVkVfVElMRV9QT1NJVElPTik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUT0RPOiDQstC10YDQvtGP0YLQvdC+INC90YPQttC90L4g0L/QtdGA0LXQvNC10YHRgtC40YLRjCDRh9Cw0YHRgtGMINC70L7Qs9C40LrQuCDQsiBUaWxlINGH0YLQvtCx0Ysg0L3QtSDQt9Cw0YLQsNGB0LrQuNCy0LDRgtGMIE1BVFJJWF9GSUVMRFMuXHJcbiAgICAgKi9cclxuICAgIGNoYW5nZVRpbGVBZnRlckF0dGFjayhhdHRhY2tQb3NpdGlvbiwgZGVmZW5zaXZlUG9zaXRpb24sIHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnN0IGF0dGFja1RpbGUgPSB0aGlzLmdldEl0ZW1CeVBvc2l0aW9uKGF0dGFja1Bvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBkZWZlbnNpdmVUaWxlID0gdGhpcy5nZXRJdGVtQnlQb3NpdGlvbihkZWZlbnNpdmVQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIGF0dGFja1RpbGUuc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgW01BVFJJWF9GSUVMRFMuUE9XRVJfVkFMVUVdOiByZXN1bHQuYWN0aXZlVmFsdWUsXHJcbiAgICAgICAgICAgIFtNQVRSSVhfRklFTERTLlRZUEVdOiBDRUxMX1RZUEUuUkVBRFksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZGVmZW5zaXZlVGlsZUlzQ2hhbmdlcyA9IGRlZmVuc2l2ZVRpbGUuc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgW01BVFJJWF9GSUVMRFMuUE9XRVJfVkFMVUVdOiByZXN1bHQuZGVmZW5zaXZlVmFsdWUsXHJcbiAgICAgICAgICAgIFtNQVRSSVhfRklFTERTLlBMQVlFUl9OQU1FXTogcmVzdWx0Lndpbm5lciA9PT0gQ0FMQ19BVFRBQ0tfUkVTVUxUUy5BVFRBQ0sgPyBhdHRhY2tUaWxlLmdldFBsYXllck5hbWUoKSA6IGRlZmVuc2l2ZVRpbGUuZ2V0UGxheWVyTmFtZSgpLFxyXG4gICAgICAgICAgICBbTUFUUklYX0ZJRUxEUy5DT0xPUl06IHJlc3VsdC53aW5uZXIgPT09IENBTENfQVRUQUNLX1JFU1VMVFMuQVRUQUNLID8gYXR0YWNrVGlsZS5nZXRDb2xvcigpIDogZGVmZW5zaXZlVGlsZS5nZXRDb2xvcigpLFxyXG4gICAgICAgICAgICBbTUFUUklYX0ZJRUxEUy5UWVBFXTogQ0VMTF9UWVBFLlJFQURZLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlcmVuZGVyQnlQb3NpdGlvbihhdHRhY2tQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIC8vINC80L7QttC10YIg0L3QtSDQuNC30LzQtdC90LjRgtGM0YHRjyDQtdGB0LvQuCBwb3dlciAyINC90LDQv9Cw0LTQtdGCINC90LAgcG93ZXIgMS5cclxuICAgICAgICBpZiAoZGVmZW5zaXZlVGlsZUlzQ2hhbmdlcykge1xyXG4gICAgICAgICAgICB0aGlzLnJlcmVuZGVyQnlQb3NpdGlvbihkZWZlbnNpdmVQb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gcGxheWVyTmFtZS5cclxuICAgICAqL1xyXG4gICAgY2hhbmdlU3RlcEFmdGVyQXR0YWNrKG5hbWUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnJlc2V0QWN0aXZlVGlsZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5yZXNldEF2YWlsYWJsZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGVwVHlwZShuYW1lLCBTVEVQX1RZUEUuQ0hPT1NFX0ZPUl9BVFRBQ0ssIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0LLQtdGA0LrQsCDQvdCwINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0YHQvtCy0LXRgNGI0LjRgtGMINC00LDQu9GM0L3QtdC50YjQuNC5INGF0L7QtC5cclxuICAgICAqINCV0YHQu9C4INGH0LXQu9C+0LLQtdC6IC0g0L/QvtC00YHQstC10YLQuNGC0Ywg0LrQvdC+0L/QutGDIFwi0JfQsNCy0LXRgNGI0LjRgtGMINGF0L7QtFwiLlxyXG4gICAgICog0JXRgdC70Lgg0LrQvtC80L/RjNGO0YLQtdGAIC0g0L/QtdGA0LXQudGC0Lgg0Log0YHQu9C10LQuINC40LPRgNC+0LrRgy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHBsYXllck5hbWUuXHJcbiAgICAgKi9cclxuICAgIGNoZWNrTW92ZUlzQ29tcGxldGVkKG5hbWUpIHtcclxuICAgICAgICBjb25zdCBjYW5BdHRhY2tMaXN0ID0gdGhpcy5tYXRyaXguZ2V0VGlsZUxpc3RCeUNhbkF0dGFjayhuYW1lKTtcclxuICAgICAgICBjb25zdCBpc1Blb3BsZSA9IHRoaXMuc3RhdGUuZ2V0SXNQZW9wbGVGbGFnKG5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoY2FuQXR0YWNrTGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGlzUGVvcGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcmVuZGVyKFRVUk5fQlVUVE9OX0VWRU5UX1RZUEVTLkhJR0hMSUdIVCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDQodC70LXQtC4g0YXQvtC0LlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc24ndCBwZW9wbGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tWaWN0b3J5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tWaWN0b3J5KCkge1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLm1hdHJpeC5nZXRMaXN0V2l0aE9ubHlQbGF5ZXJzKCk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBsaXN0LmZpbHRlcigocGxheWVyLCBpbmRleCwgbGlzdCkgPT4gcGxheWVyID09PSBsaXN0WzBdKTtcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ9Ca0YLQvi3RgtC+INC/0L7QsdC10LTQuNC7ISDQndC+INGPINC/0L7QutCwINC90LUg0YPQvNC10Y4g0L7Qv9GA0LXQtNC10LvRj9GC0Ywg0LrRgtC+LicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb0dpdmVQb3dlckJhc2UocGxheWVyTmFtZSwgcG9zaXRpb24sIHVzZVJlcmVuZGVyID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBhdmFpbGFibGVQb3dlciA9IHRoaXMuc3RhdGUuZ2V0QXZhaWxhYmxlUG93ZXIocGxheWVyTmFtZSk7XHJcblxyXG4gICAgICAgIC8vINGD0LzQtdC90YzRiNCw0LXQvCDQsiBzdGF0ZSAvINC80LXQvdGP0LXQvCDQvtGC0L7QsdGA0LDQttC10L3QuNC1LlxyXG4gICAgICAgIGlmIChhdmFpbGFibGVQb3dlciA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgaW5jcmVhc2VSZXN1bHQgPSB0aGlzLmluY3JlYXNlUG93ZXJWYWx1ZShwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5jcmVhc2VSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Bvd2VyID0gYXZhaWxhYmxlUG93ZXIgLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGVjcmVhc2VBdmFpbGFibGVQb3dlcihwbGF5ZXJOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVyZW5kZXJCeVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlR2lmdFZpZXcobmV3UG93ZXIsIHVzZVJlcmVuZGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDQldGB0LvQuCDQvdC10YIg0LLQvtC30LzQvtC20L3QvtGB0YLQuCDRgNCw0LfQtNCw0LLQsNGC0YwgLSDQv9C+0LTRgdCy0LXRh9C40LLQsNC10Lwg0LrQvdC+0L/QutGDLlxyXG4gICAgYWN0aXZlR2lmdFZpZXcoYW1vdW50LCB1c2VSZXJlbmRlciA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgaGlnaGxpZ2h0ID0gYW1vdW50ID09PSAwO1xyXG4gICAgICAgIGNvbnN0IGlzUmVyZW5kZXJDYXNlID0gdXNlUmVyZW5kZXIgfHwgaGlnaGxpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoaXNSZXJlbmRlckNhc2UpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VIYW5kbGVyV2l0aEN1c3RvbShUVVJOX0JVVFRPTl9FVkVOVF9UWVBFUy5BQ1RJVkVfR0lGVF9WSUVXLCB7IGhpZ2hsaWdodCwgYW1vdW50IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXJlbmRlckJ5UG9zaXRpb24ocG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnVzZUhhbmRsZXIocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86INC00LvRjyDQsdGL0YHRgtGA0L7QuSDRgdC+0LLQvNC10YHRgtC40LzQvtGB0YLQuC4g0J/QtdGA0LXQudGC0Lgg0L3QsCBcInVzZUhhbmRsZXJcIi5cclxuICAgIHJlcmVuZGVyKHR5cGUpIHtcclxuICAgICAgICB0aGlzLnVzZUhhbmRsZXJXaXRoQ3VzdG9tKHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86INGD0LHRgNCw0YLRjCDQtNGD0LHQu9C40YDQvtCy0LDQvdC40LVcclxuICAgIGNoZWNrUG9zaXRpb25MaW1pdHMoeyB4LCB5IH0pIHtcclxuICAgICAgICBjb25zdCBsaW1pdHNNZXRob2QgPSAodmFsdWUsIG1heExpbWl0KSA9PiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IG1heExpbWl0O1xyXG5cclxuICAgICAgICByZXR1cm4gbGltaXRzTWV0aG9kKHgsIHRoaXMuY29uZmlnLk1BUC5TSVpFLngpICYmIGxpbWl0c01ldGhvZCh5LCB0aGlzLmNvbmZpZy5NQVAuU0laRS55KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBvd2VyRGF0YSB9IGZyb20gJy4vRGF0YSc7XHJcbmltcG9ydCB7IENFTExfVFlQRSwgU1RFUF9UWVBFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgU1RBVEVfRklFTERTIH0gZnJvbSAnLi9jb21wb25lbnRzL1N0YXRlJztcclxuaW1wb3J0IHsgY2FsY0F0dGFja1Jlc3VsdCB9IGZyb20gJy4uL3Bvd2VyL21haW4nO1xyXG5cclxuLyoqXHJcbiAqINCg0LDRgdGI0LjRgNGP0LXQvCDQtNCw0L3QvdGL0LUgXCJQb3dlckRhdGFcIiDQvNC10YLQvtC00LDQvNC4INC00LvRjyDRgdC+0LLQtdGA0YjQtdC90LjRjyDRhdC+0LTQvtCyLlxyXG4gKiDQoSDQv9C+0YHRgtGE0LjQutC+0YHQvCBcIlBDXCIg0L3QtSDQstGL0L/QvtC70L3Rj9GO0YLRgdGPINC/0YDQvtC80LXQttGD0YLQvtGH0L3Ri9C1INC/0LXRgNC10YDQuNGB0L7QstC60LguXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG93ZXJEYXRhQVBJIGV4dGVuZHMgUG93ZXJEYXRhIHtcclxuXHJcbiAgICBzZXRGaXJzdFR1cm4oKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0Rmlyc3RUdXJuTmFtZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0ZXBUeXBlKG5hbWUsIFNURVBfVFlQRS5DSE9PU0VfRk9SX0FUVEFDSywgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ0hBTkdFIFRVUk5cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0L7QvNC10L3Rj9GC0Ywg0YHRgtCw0YLRg9GB0Ysg0LTQu9GPINGB0L7QstC10YDRiNC10L3QuNGPINGB0LvQtdC0LiDRhdC+0LTQsC4g0KPQsdGA0LDRgtGMINC/0L7QtNGB0LLQtdGC0LrQuC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGxheWVyTmFtZVxyXG4gICAgICovXHJcbiAgICBkb05leHRUdXJuKG5ld1BsYXllck5hbWUpIHtcclxuXHJcbiAgICAgICAgLy8g0KHQsdGA0L7RgSDQv9GA0LXQtNGL0LTRg9GJ0LjRhSDRgdC+0YHRgtC+0Y/QvdC40LkuXHJcbiAgICAgICAgdGhpcy5yZXNldEhpZ2hsaWdodCgpO1xyXG4gICAgICAgIHRoaXMucmVyZW5kZXIoJ3R1cm5CdXR0b25JbmFjdGl2ZScpO1xyXG5cclxuICAgICAgICAvLyDQo9GB0YLQsNC90L7QstC60LAg0L3QvtCy0YvRhSDRgdC+0YHRgtC+0Y/QvdC40LkuXHJcbiAgICAgICAgdGhpcy5zZXRTdGVwVHlwZShuZXdQbGF5ZXJOYW1lLCBDRUxMX1RZUEUuV0FJVElOR19TRUxFQ1QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZPUiBBVFRBQ0tcclxuXHJcbiAgICAvKipcclxuICAgICAqINCS0YvQtNC10LvRj9C10Lwg0LrQu9C10YLQutGDINGH0YLQvtCx0Ysg0YHQvtCy0LXRgNGI0LjRgtGMINCw0YLQsNC60YMuINCS0YvQtNC10LvQtdC8INC60LvQtdGC0LrQuCDQutC+0YLQvtGA0YvQtSDQvNC+0LbQvdC+INCw0YLQsNC60L7QstCw0YLRjC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlUmVyZW5kZXIgLSDQtNC70Y8g0YXQvtC00LAg0LrQvtC80L/RjNGO0YLQtdGA0LAg0L3QtSDQuNGB0L/QvtC70YzQt9GD0LXQvCDQu9C40YjQvdC40LUg0L/QtdGA0LXRgNC40YHQvtCy0LrQuC5cclxuICAgICAqL1xyXG4gICAgZG9TZWxlY3RGb3JBdHRhY2socG9zaXRpb24sIHVzZVJlcmVuZGVyID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLnJlc2V0V2FpdGluZ1NlbGVjdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGlsZVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBvcHBvbmVudExpc3QgPSB0aGlzLmhpZ2hsaWdodE9wcG9uZW50KHBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBvcHBvbmVudFBvc2l0aW9uTGlzdCA9IG9wcG9uZW50TGlzdC5tYXAoaXRlbSA9PiBpdGVtLnBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnRTdGVwVHlwZShTVEVQX1RZUEUuQVRUQUNLKTtcclxuICAgICAgICB0aGlzLnNldEF2YWlsYWJsZVBvc2l0aW9uKG9wcG9uZW50UG9zaXRpb25MaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0YLQvNC10L3QsCBcImRvU2VsZWN0Rm9yQXR0YWNrXCIsINC80L7QttC90L4g0LfQsNC90L7QstC+INCy0YvQsdGA0LDRgtGMINC60LvQtdGC0LrRgyDQtNC70Y8g0LDRgtCw0LrQuC5cclxuICAgICAqL1xyXG4gICAgZG9SZXNldFNlbGVjdEZvckF0dGFjaygpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXRTdGF0ZVByb3BlcnR5KFNUQVRFX0ZJRUxEUy5DVVJSRU5UX1RVUk4pO1xyXG5cclxuICAgICAgICB0aGlzLnJlc2V0SGlnaGxpZ2h0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGVwVHlwZShuYW1lLCBTVEVQX1RZUEUuQ0hPT1NFX0ZPUl9BVFRBQ0ssIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZG9QZW9wbGVBdHRhY2socG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVQb3NpdGlvbiA9IHRoaXMuZ2V0QWN0aXZlVGlsZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUG93ZXIgPSB0aGlzLmdldFBvd2VyVmFsdWUoYWN0aXZlUG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGRlZmVuc2l2ZVBvd2VyID0gdGhpcy5nZXRQb3dlclZhbHVlKHBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50VHVybiA9IHRoaXMuc3RhdGUuZ2V0Q3VycmVudFR1cm4oKTtcclxuICAgICAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSBjYWxjQXR0YWNrUmVzdWx0KGFjdGl2ZVBvd2VyLCBkZWZlbnNpdmVQb3dlcik7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlVGlsZUFmdGVyQXR0YWNrKGFjdGl2ZVBvc2l0aW9uLCBwb3NpdGlvbiwgYXR0YWNrUmVzdWx0KTtcclxuICAgICAgICB0aGlzLnJlc2V0SGlnaGxpZ2h0KCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGVwQWZ0ZXJBdHRhY2soY3VycmVudFR1cm4pO1xyXG4gICAgICAgIHRoaXMuY2hlY2tNb3ZlSXNDb21wbGV0ZWQoY3VycmVudFR1cm4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3RpdmUgLSB7eCwgeX1cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkZWZlbnNpdmUgLSB7eCwgeX1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5ZXJOYW1lXHJcbiAgICAgKi9cclxuICAgIGRvUENBdHRhY2soYWN0aXZlLCBkZWZlbnNpdmUsIHBsYXllck5hbWUpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVQb3dlciA9IHRoaXMuZ2V0UG93ZXJWYWx1ZShhY3RpdmUpO1xyXG4gICAgICAgIGNvbnN0IGRlZmVuc2l2ZVBvd2VyID0gdGhpcy5nZXRQb3dlclZhbHVlKGRlZmVuc2l2ZSk7XHJcbiAgICAgICAgY29uc3QgYXR0YWNrUmVzdWx0ID0gY2FsY0F0dGFja1Jlc3VsdChhY3RpdmVQb3dlciwgZGVmZW5zaXZlUG93ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZVRpbGVBZnRlckF0dGFjayhhY3RpdmUsIGRlZmVuc2l2ZSwgYXR0YWNrUmVzdWx0KTtcclxuICAgICAgICB0aGlzLnJlc2V0SGlnaGxpZ2h0KCk7XHJcbiAgICAgICAgdGhpcy5jaGVja01vdmVJc0NvbXBsZXRlZChwbGF5ZXJOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGT1IgR0lWRSBQT1dFUjpcclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0LXRgNC10LLQtdGB0YLQuCDRhdC+0LQg0LIg0YHRgtCw0LTQuNGOINGA0LDQt9C00LDRh9C4IHBvd2VyLlxyXG4gICAgICog0J7RgtC+0LHRgNCw0LbQsNC10Lwg0LrQvtC7LdCy0L4g0LTQvtGB0YLRg9C/0L3Ri9GFIHBvd2VyLlxyXG4gICAgICovXHJcbiAgICBhY3RpdmVHaXZlUG93ZXJTdGVwKGlzUGVvcGxlID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBwbGF5ZXJOYW1lID0gdGhpcy5zdGF0ZS5nZXRDdXJyZW50VHVybigpO1xyXG4gICAgICAgIGNvbnN0IHRpbGVMaXN0ID0gdGhpcy5tYXRyaXguZ2V0VGlsZUxpc3RCeVBsYXllcihwbGF5ZXJOYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGVwVHlwZShwbGF5ZXJOYW1lLCBTVEVQX1RZUEUuR0lWRV9QT1dFUiwgaXNQZW9wbGUpO1xyXG4gICAgICAgIHRoaXMuc2V0QXZhaWxhYmxlUG93ZXIocGxheWVyTmFtZSwgdGlsZUxpc3QubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgaWYgKGlzUGVvcGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlR2lmdFZpZXcodGlsZUxpc3QubGVuZ3RoLCBpc1Blb3BsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KDQsNC30LTQsNGR0LwgcG93ZXIsINC/0YDQvtCy0LXRgNC60Lgg0L3QsCDQstC+0LfQvNC+0LbQvdC+0YHRgtGMLCDRgdC80LXQvdCwINGB0YLQsNGC0YPRgdCwLCDQuNC30LzQtdC90LXQuNC90Y8g0L/RgNC+0LzQtdC20YPRgtC+0YfQvdC+0LPQviDQvtGC0L7QsdGA0LDQttC10L3QuNGPLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5ZXJOYW1lLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBvc2l0aW9uIHsgeCwgeSB9LlxyXG4gICAgICovXHJcbiAgICBkb0dpdmVQb3dlcihwbGF5ZXJOYW1lLCBwb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuZG9HaXZlUG93ZXJCYXNlKHBsYXllck5hbWUsIHBvc2l0aW9uLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCg0LDQt9C00LDRgtGMIHBvd2VyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5ZXJOYW1lLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBvc2l0aW9uIHsgeCwgeSB9LlxyXG4gICAgICovXHJcbiAgICBkb0dpdmVQb3dlclBDKHBsYXllck5hbWUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kb0dpdmVQb3dlckJhc2UocGxheWVyTmFtZSwgcG9zaXRpb24pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQmFzZU1hdHJpeCB9IGZyb20gJy4uLy4uL2xpYnJhcnknO1xyXG5pbXBvcnQgeyBDT05ORUNUX1RZUEUsIFNPUlRJTkdfVFlQRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi9UaWxlJztcclxuaW1wb3J0IHsgTUFUUklYX1RZUEVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0U3F1YXJlTWF0cml4MSwgZ2V0SGV4YWdvbk1hdHJpeDEsIGdldE5laWdoYm9ySGV4YWdvbjEgfSBmcm9tICcuL21hdHJpeEdlbmVyYXRvcnMnO1xyXG5pbXBvcnQgeyBzZXRSYW5kb21Qb3dlckluTWF0cml4IH0gZnJvbSAnLi9tYXRyaXhHZW5lcmF0b3JzL3V0aWxzJztcclxuXHJcbi8qKlxyXG4gKiDQlNCw0L3QvdGL0LUg0LTQu9GPINC60LDRgNGC0YsuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG93ZXJNYXRyaXggZXh0ZW5kcyBCYXNlTWF0cml4IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHBsYXllckluZm8gLSBbIFtuYW1lLCBjb2xvcl0sIC4uLiBdIC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBwbGF5ZXJJbmZvKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnLk1BUCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtcHR5TWF0cml4ID0gdGhpcy5nZXRFbXB0eU1hdHJpeChjb25maWcuTUFUUklYX1RZUEUsIGNvbmZpZy5NQVAuU0laRSk7XHJcbiAgICAgICAgY29uc3QgZmlsbGVkTWF0cml4ID0gdGhpcy5nZXRGaWxsZWRNYXRyaXgoY29uZmlnLlNPUlRJTkdfVFlQRSwgZW1wdHlNYXRyaXgsIHBsYXllckluZm8pO1xyXG5cclxuICAgICAgICB0aGlzLm92ZXJ3cml0ZU1hdHJpeChmaWxsZWRNYXRyaXgpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc2l6ZSAtIHsgeCwgeSB9LlxyXG4gICAgICovXHJcbiAgICBnZXRFbXB0eU1hdHJpeCh0eXBlLCBzaXplKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTUFUUklYX1RZUEVTLlNJTVBMRTogcmV0dXJuIGdldFNxdWFyZU1hdHJpeDEoc2l6ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgTUFUUklYX1RZUEVTLkhFWEFHT046IHJldHVybiBnZXRIZXhhZ29uTWF0cml4MShzaXplKTtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIFtbXV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0YHRgtCw0LLQuNGC0Ywg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLRjCBwb3dlciB0aWxlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U09SVElOR19UWVBFU30gdHlwZSAtINGC0LjQvyDQt9Cw0L/QvtC70L3QtdC90LjRjyBNYXRyaXguXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBlbXB0eU1hdHJpeC5cclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHBsYXllckluZm8gLSBbIFtuYW1lLCBjb2xvcl0sIC4uLiBdIC5cclxuICAgICAqL1xyXG4gICAgZ2V0RmlsbGVkTWF0cml4KHR5cGUsIGVtcHR5TWF0cml4LCBwbGF5ZXJJbmZvKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU09SVElOR19UWVBFUy5SQU5ET006IHJldHVybiBzZXRSYW5kb21Qb3dlckluTWF0cml4KGVtcHR5TWF0cml4LCBwbGF5ZXJJbmZvKTtcclxuICAgICAgICAgICAgLy8gY2FzZSBTT1JUSU5HX1RZUEVTLkZST01fRklSU1Q6IHJldHVybiBzZXRSYW5kb21Qb3dlckluTWF0cml4KGVtcHR5TWF0cml4LCBwbGF5ZXJJbmZvKTtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGVtcHR5TWF0cml4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCn0LXRgNC10Lcg0L/RgNC+0LzQtdC20YPRgtC+0YfQvdGL0Lkg0LzQsNGB0YHQuNCyLCDRgi7Qui4gbWFwINC/0L7Qv9GL0YLQsNC10YLRgdGPINGB0L7Qt9C00LDRgtGMINC90L7QstGL0Lkg0Y3QutC30LXQvNC/0LvRj9GAIFBvd2VyTWF0cml4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gcGxheWVyTmFtZS5cclxuICAgICAqL1xyXG4gICAgZ2V0VGlsZUxpc3RCeVBsYXllcihuYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkLnB1c2gocm93LmZpbHRlcih0aWxlID0+IHRpbGUucGxheWVyTmFtZSA9PT0gbmFtZSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZmlsdGVyZWQuZmxhdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvdW50VGlsZXNCeU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRpbGVMaXN0QnlQbGF5ZXIobmFtZSkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpc3RXaXRoT25seVBsYXllcnMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICByb3cuZm9yRWFjaCh0aWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghIXRpbGUucGxheWVyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRpbGUucGxheWVyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YHQv9C40YHQvtC6IHRpbGUsINC60L7RgtC+0YDRi9C1INC80L7Qs9GD0YIg0LDRgtCw0LrQvtCy0LDRgtGMLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gcGxheWVyTmFtZS5cclxuICAgICAqIEByZXR1cm4ge2FycmF5fVxyXG4gICAgICovXHJcbiAgICBnZXRUaWxlTGlzdEJ5Q2FuQXR0YWNrKG5hbWUpIHtcclxuICAgICAgICBjb25zdCB0aWxlTGlzdCA9IHRoaXMuZ2V0VGlsZUxpc3RCeVBsYXllcihuYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRpbGVMaXN0LmZpbHRlcih0aWxlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmVpZ2hib3JzID0gdGhpcy5nZXROZWlnaGJvcnModGlsZSk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vINCV0YHRgtGMINGB0L7RgdC10LTQvdC40LUg0LrQu9C10YLQutC4INC4INC10YHRgtGMIHBvd2VyVmFsdWUg0LTQu9GPINCw0YLQsNC60LguXHJcbiAgICAgICAgICAgIGlmIChuZWlnaGJvcnMubGVuZ3RoICYmIHRpbGUucG93ZXJWYWx1ZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5laWdoYm9ycy5zb21lKG5laWdoYm9yVGlsZSA9PiBuZWlnaGJvclRpbGUucGxheWVyTmFtZSAhPT0gbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRgdC/0LjRgdC+0Log0LTQvtGB0YLRg9C/0L3Ri9GFINC60LvQtdGC0L7QuiDRh9C10YDQtdC3IGNvbm5lY3RMaXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7VGlsZX0gdGlsZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNjaGVtZSAtINGB0YXQtdC80LAgLyDRgtC40L8g0LrQsNGA0YLRiy5cclxuICAgICAqIEByZXR1cm4ge2FycmF5fVxyXG4gICAgICovXHJcbiAgICBnZXROZWlnaGJvcnMoeyBjb25uZWN0TGlzdCwgcG9zaXRpb24gfSwgc2NoZW1lID0gTUFUUklYX1RZUEVTLkhFWEFHT04pIHtcclxuICAgICAgICBjb25zdCB7IHg6IFgsIHk6IFkgfSA9IHBvc2l0aW9uO1xyXG5cclxuICAgICAgICBpZiAoc2NoZW1lID09PSBNQVRSSVhfVFlQRVMuU0lNUExFKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29ubmVjdExpc3QuZm9yRWFjaCh0eXBlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuZWlnaGJvclBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBDT05ORUNUX1RZUEUuTEVGVF9UT1ApIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvclBvc2l0aW9uID0geyB4OiBYIC0gMSwgeTogWSAtIDEgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gQ09OTkVDVF9UWVBFLlJJR0hUX0JPVFRPTSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9yUG9zaXRpb24gPSB7IHg6IFggKyAxLCB5OiBZICsgMSB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZ2V0SXRlbShuZWlnaGJvclBvc2l0aW9uKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzY2hlbWUgPT09IE1BVFJJWF9UWVBFUy5IRVhBR09OKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29ubmVjdExpc3QuZm9yRWFjaCh0eXBlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5laWdoYm9yUG9zaXRpb24gPSBnZXROZWlnaGJvckhleGFnb24xKHR5cGUsIHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmdldEl0ZW0obmVpZ2hib3JQb3NpdGlvbikpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZmlsdGVyKHRpbGUgPT4gISF0aWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3Bwb25lbnRMaW5rZWRUaWxlKHBvc2l0aW9uLCBzY2hlbWUpIHtcclxuICAgICAgICBjb25zdCBpc09wcG9uZW50Q29uZGl0aW9uID0gKG5hbWUxLCBuYW1lMikgPT4gbmFtZTEgIT09IG5hbWUyO1xyXG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmdldEl0ZW0ocG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IG5laWdoYm9ycyA9IHRoaXMuZ2V0TmVpZ2hib3JzKHRpbGUsIHNjaGVtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZWlnaGJvcnMuZmlsdGVyKGxpbmtlZFRpbGUgPT4gaXNPcHBvbmVudENvbmRpdGlvbihcclxuICAgICAgICAgICAgbGlua2VkVGlsZS5nZXRQbGF5ZXJOYW1lKCksXHJcbiAgICAgICAgICAgIHRpbGUuZ2V0UGxheWVyTmFtZSgpXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDT0xPUl9MSVNULCBTVEVQX1RZUEUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tICcuLi8uLi9saWJyYXJ5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3dlclN0YXRlIGV4dGVuZHMgQmFzZVN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWVzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpc1tTVEFURV9GSUVMRFMuUExBWUVSU19MSVNUXSA9IFsgLi4ubmFtZXMgXTtcclxuICAgICAgICB0aGlzW1NUQVRFX0ZJRUxEUy5DVVJSRU5UX1RVUk5dID0gbnVsbDtcclxuICAgICAgICB0aGlzW1NUQVRFX0ZJRUxEUy5DVVJSRU5UX1NURVBfVFlQRV0gPSBudWxsO1xyXG4gICAgICAgIHRoaXNbU1RBVEVfRklFTERTLkFDVElWRV9USUxFX1BPU0lUSU9OXSA9IHt9O1xyXG4gICAgICAgIHRoaXNbU1RBVEVfRklFTERTLkFWQUlMQUJMRV9QT1NJVElPTl0gPSBbXTtcclxuXHJcbiAgICAgICAgbmFtZXMuZm9yRWFjaCgobmFtZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShuYW1lLCB0aGlzLmNyZWF0ZVBsYXllclN0YXRlT2JqKENPTE9SX0xJU1RbaW5kZXhdKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUGxheWVyU3RhdGVPYmoodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBsYXllclN0YXRlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50U3RlcFR5cGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFNUQVRFX0ZJRUxEUy5DVVJSRU5UX1NURVBfVFlQRSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRTdGVwVHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGF0ZVByb3BlcnR5KFNUQVRFX0ZJRUxEUy5DVVJSRU5UX1NURVBfVFlQRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudFR1cm4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdGVQcm9wZXJ0eShTVEFURV9GSUVMRFMuQ1VSUkVOVF9UVVJOKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50VHVybih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoU1RBVEVfRklFTERTLkNVUlJFTlRfVFVSTiwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYXllcnNMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0YXRlUHJvcGVydHkoU1RBVEVfRklFTERTLlBMQVlFUlNfTElTVCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3RlcFR5cGUobmFtZSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0ZXBUeXBlQnlOYW1lKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLmdldFBsYXllcnNMaXN0KCkuZm9yRWFjaChvdGhlck5hbWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3RoZXJOYW1lICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0ZXBUeXBlQnlOYW1lKG90aGVyTmFtZSwgU1RFUF9UWVBFLldBSVRJTkcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RlcFR5cGVCeU5hbWUobmFtZSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzW25hbWVdLnNldFN0ZXBUeXBlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdmFpbGFibGVQb3dlcihwbGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbcGxheWVyTmFtZV1bU1RBVEVfRklFTERTLkFWQUlMQUJMRV9QT1dFUl07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXZhaWxhYmxlUG93ZXIocGxheWVyTmFtZSwgcG93ZXIpIHtcclxuICAgICAgICB0aGlzW3BsYXllck5hbWVdW1NUQVRFX0ZJRUxEUy5BVkFJTEFCTEVfUE9XRVJdID0gcG93ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXZhaWxhYmxlUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdGVQcm9wZXJ0eShTVEFURV9GSUVMRFMuQVZBSUxBQkxFX1BPU0lUSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBdmFpbGFibGVQb3NpdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoU1RBVEVfRklFTERTLkFWQUlMQUJMRV9QT1NJVElPTiwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0QXZhaWxhYmxlUG9zaXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShTVEFURV9GSUVMRFMuQVZBSUxBQkxFX1BPU0lUSU9OLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRBY3RpdmVUaWxlUG9zaXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShTVEFURV9GSUVMRFMuQUNUSVZFX1RJTEVfUE9TSVRJT04sIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJc1Blb3BsZUZsYWdUcnVlKHBlb3BsZU5hbWVMaXN0KSB7XHJcbiAgICAgICAgcGVvcGxlTmFtZUxpc3QuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgdGhpc1tuYW1lXS5zZXRJc1Blb3BsZUZsYWcodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXNQZW9wbGVGbGFnKHBsYXllck5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1twbGF5ZXJOYW1lXS5nZXRJc1Blb3BsZUZsYWcoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGF5ZXJJbmZvKHBsYXllck5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1twbGF5ZXJOYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGF5ZXJDb2xvcihwbGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGxheWVySW5mbyhwbGF5ZXJOYW1lKS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4ge2FycmF5fSBbIFtuYW1lLCBjb2xvcl0sIC4uLiBdIC5cclxuICAgICAqL1xyXG4gICAgZ2V0U2hvdEluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGxheWVyc0xpc3QoKS5tYXAobmFtZSA9PiBbbmFtZSwgdGhpcy5nZXRQbGF5ZXJDb2xvcihuYW1lKV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTdGF0ZSBleHRlbmRzIEJhc2VTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXNbU1RBVEVfRklFTERTLlNURVBfVFlQRV0gPSBudWxsO1xyXG4gICAgICAgIHRoaXNbU1RBVEVfRklFTERTLlZBTFVFXSA9IHZhbHVlIHx8ICcnO1xyXG4gICAgICAgIHRoaXNbU1RBVEVfRklFTERTLkFWQUlMQUJMRV9QT1dFUl0gPSAwO1xyXG4gICAgICAgIHRoaXNbU1RBVEVfRklFTERTLklTX1BFT1BMRV0gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGVwVHlwZSh0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShTVEFURV9GSUVMRFMuU1RFUF9UWVBFLCB0eXBlKVxyXG4gICAgfVxyXG5cclxuICAgIHNldElzUGVvcGxlRmxhZyh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoU1RBVEVfRklFTERTLklTX1BFT1BMRSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElzUGVvcGxlRmxhZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGF0ZVByb3BlcnR5KFNUQVRFX0ZJRUxEUy5JU19QRU9QTEUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU1RBVEVfRklFTERTID0ge1xyXG4gICAgU1RFUF9UWVBFOiAnc3RlcFR5cGUnLCAgICAgICAgICAgICAgICAgIC8vINGI0LDQsy/RgtC40L8g0LTQtdC50YHRgtCy0LjRjyDQvdCwINC60LvQtdGC0LrQtS5cclxuICAgIFZBTFVFOiAndmFsdWUnLCAgICAgICAgICAgICAgICAgICAgICAgICAvLyDRhtCy0LXRgi5cclxuICAgIEFWQUlMQUJMRV9QT1dFUjogJ2F2YWlsYWJsZVBvd2VyJywgICAgICAvLyDQtNC+0YHRgtGD0L/QvdC+IHBvd2VyLlxyXG4gICAgUExBWUVSU19MSVNUOiAncGxheWVyc0xpc3QnLCAgICAgICAgICAgIC8vINGB0L/QuNGB0L7QuiDQuNCz0YDQvtC60L7Qsi5cclxuICAgIENVUlJFTlRfVFVSTjogJ2N1cnJlbnRUdXJuJywgICAgICAgICAgICAvLyDRgtC10LrRg9GJ0LjQuSDRhdC+0LQsINCw0LrRgtC40LLQvdGL0Lkg0LjQs9GA0L7Qui5cclxuICAgIENVUlJFTlRfU1RFUF9UWVBFOiAnY3VycmVudFN0ZXBUeXBlJywgICAvLyDRjdGC0LDQvyDRgtC10LrRg9GJ0LXQs9C+INGF0L7QtNCwLlxyXG4gICAgQUNUSVZFX1RJTEVfUE9TSVRJT046ICdhY3RpdmVUaWxlUG9zaXRpb24nLCAvLyDQutC+0L7RgNC00LjQvdCw0YLRiyDQsNC60YLQuNCy0L3QvtC5INC/0LvQuNGC0LrQuC5cclxuICAgIEFWQUlMQUJMRV9QT1NJVElPTjogJ2F2YWlsYWJsZVBvc2l0aW9uJywgICAgLy8g0LTQvtGB0YLRg9C/0L3Ri9C1INC00LvRjyDQsNC60YLQuNCy0L3QvtC5INC60LvQtdGC0LrQuCDRhdC+0LTRiy5cclxuICAgIElTX1BFT1BMRTogJ2lzUGVvcGxlJywgICAgICAgICAgICAgICAgICAvLyDRhNC70LDQsywg0YfQtdC70L7QstC10LouXHJcbn0iLCJpbXBvcnQgeyBDRUxMX1RZUEUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGUge1xyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfSwgdHlwZSA9IENFTExfVFlQRS5FTVBUWSwgY29ubmVjdFR5cGUpIHtcclxuICAgICAgICB0aGlzW01BVFJJWF9GSUVMRFMuUE9XRVJfVkFMVUVdID0gbnVsbDtcclxuICAgICAgICB0aGlzW01BVFJJWF9GSUVMRFMuUE9TSVRJT05dID0geyAuLi5wb3NpdGlvbiB9O1xyXG4gICAgICAgIHRoaXNbTUFUUklYX0ZJRUxEUy5UWVBFXSA9IHR5cGU7XHJcbiAgICAgICAgdGhpc1tNQVRSSVhfRklFTERTLkNPTk5FQ1RfTElTVF0gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGNvbm5lY3RUeXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXNbTUFUUklYX0ZJRUxEUy5DT05ORUNUX1RZUEVdID0gY29ubmVjdFR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXNbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG93ZXJWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tNQVRSSVhfRklFTERTLlBPV0VSX1ZBTFVFXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2xvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tNQVRSSVhfRklFTERTLkNPTE9SXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGF5ZXJOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW01BVFJJWF9GSUVMRFMuUExBWUVSX05BTUVdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbTUFUUklYX0ZJRUxEUy5UWVBFXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge01BVFJJWF9GSUVMRFN9IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHNldFR5cGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFByb3BlcnR5KE1BVFJJWF9GSUVMRFMuVFlQRSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlc1xyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gaXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICBzZXRWYWx1ZXModmFsdWVzID0ge30pIHtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IE9iamVjdC52YWx1ZXMoTUFUUklYX0ZJRUxEUyk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eS5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpc1trZXldICE9PSB2YWx1ZXNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZXNba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcclxuICAgICAqL1xyXG4gICAgYWRkVG9Db25uZWN0TGlzdCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghdGhpc1tNQVRSSVhfRklFTERTLkNPTk5FQ1RfTElTVF0uaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXNbTUFUUklYX0ZJRUxEUy5DT05ORUNUX0xJU1RdLnB1c2godmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1BVFJJWF9GSUVMRFMgPSB7XHJcbiAgICBUWVBFOiAndHlwZScsXHJcbiAgICBQT1dFUl9WQUxVRTogJ3Bvd2VyVmFsdWUnLFxyXG4gICAgUE9TSVRJT046ICdwb3NpdGlvbicsXHJcbiAgICBDT05ORUNUX0xJU1Q6ICdjb25uZWN0TGlzdCcsXHJcbiAgICBQTEFZRVJfTkFNRTogJ3BsYXllck5hbWUnLFxyXG4gICAgQ09MT1I6ICdjb2xvcicsXHJcbiAgICBDT05ORUNUX1RZUEU6ICdjb25uZWN0VHlwZScsXHJcbn07IiwiZXhwb3J0IHsgUG93ZXJNYXRyaXggfSBmcm9tICcuL01hdHJpeCc7XHJcbmV4cG9ydCB7IFBvd2VyU3RhdGUgfSBmcm9tICcuL1N0YXRlJztcclxuZXhwb3J0IHsgVGlsZSB9IGZyb20gJy4vVGlsZSc7XHJcblxyXG5leHBvcnQgeyBNQVRSSVhfTkFNRVMgfSBmcm9tICcuL21hdHJpeEdlbmVyYXRvcnMnO1xyXG5cclxuIiwiaW1wb3J0IHsgQ0VMTF9UWVBFLCBDT05ORUNUX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi4vVGlsZSc7XHJcbmltcG9ydCB7IGlzRXZlbk51bWJlciwgY2hlY2tQb3NpdGlvbkxpbWl0cyB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BVFJJWF9OQU1FID0gJ2hleGFnb24xJztcclxuXHJcbi8qKlxyXG4gKiDQk9C10LrRgdCw0LPQvtC9INC60L7RgtC+0YDRi9C5INC80LDQutGB0LjQvNCw0LvRjNC90L4g0LfQsNC/0L7Qu9C90LXQvSDRjdC70LXQvNC10L3RgtCw0LzQuC5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHNpemUgeyB4LCB5IH0uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0SGV4YWdvbk1hdHJpeDEgPSAoc2l6ZSkgPT4ge1xyXG4gICAgY29uc3QgbWF0cml4ID0gW107XHJcblxyXG4gICAgLy8g0KDQsNGB0YHRgtCw0LLQu9GP0LXQvCDRjdC70LXQvNC10L3RgtGLLlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLnk7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGlzUG93ZXJSb3cgPSBpc0V2ZW5OdW1iZXIoaSk7ICAgICAvLyDQp9C10YDQtdC3INC+0LTQvdGDINC40LTRg9GCINGB0YLRgNC+0LrQuCDRgSBwb3dlci5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplLng7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBpc0V2ZW5UaWxlID0gaXNFdmVuTnVtYmVyKGopO1xyXG5cclxuICAgICAgICAgICAgLy8gUG93ZXJSb3cgLSDQvNC+0LbQvdC+INGB0YLQsNCy0LjRgtGMIFBvd2VyLdC60LvQtdGC0LrQuCDQuCDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3Ri9C1INGB0LLRj9C30LguXHJcbiAgICAgICAgICAgIGlmIChpc1Bvd2VyUm93KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc09mZnNldFJvdyA9IChpICsgMikgJSA0ID09PSAwOyAgLy8g0KfQtdGA0LXQtyDQvtC00L3RgyDRgdGC0YDQvtC60LAg0YEgUG93ZXIt0LrQu9C10YLQutCw0LzQuChQb3dlclJvdykg0LjQtNGD0YIg0YHQviDRgdC00LLQuNCz0L7QvCDQtNC70Y8g0YHQstGP0LfQtdC5LlxyXG4gICAgICAgICAgICAgICAgbGV0IHR5cGU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0KHQvNC10YnQsNC10LwgUG93ZXIt0Y3Qu9C10LzQtdC90YIg0LPQtNC1INGN0YLQviDQvdC10L7QsdGF0L7QtNC40LzQvi5cclxuICAgICAgICAgICAgICAgIGlmIChpc09mZnNldFJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vINCa0YDQsNC50L3QuNC1INC60LvQtdGC0LrQuCDQvdC1INC40LzQtdGO0YIg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvRhSDRgdCy0Y/Qt9C10LkuXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGlzRXZlblRpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBqICE9PSAwICYmIGogIT09IHNpemUueCAtIDEgPyBDRUxMX1RZUEUuQ09OTkVDVF9MSU5FIDogQ0VMTF9UWVBFLkVNUFRZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogQ0VMTF9UWVBFLldBSVRJTkdfQUxMT0NBVElPTjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGlzRXZlblRpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBDRUxMX1RZUEUuV0FJVElOR19BTExPQ0FUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaiAhPT0gMCB8fCBqICE9PSBzaXplLnggLSAxID8gQ0VMTF9UWVBFLkNPTk5FQ1RfTElORSA6IENFTExfVFlQRS5FTVBUWTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb25uZWN0VHlwZSA9IHR5cGUgPT09IENFTExfVFlQRS5DT05ORUNUX0xJTkUgPyBDT05ORUNUX1RZUEUuTElORSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICByb3cucHVzaChuZXcgVGlsZSh7IHg6IGosIHk6IGkgfSwgdHlwZSwgY29ubmVjdFR5cGUpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzRW5kUm93ID0gaSA9PT0gKHNpemUueSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNFbmRUaWxlID0gaiA9PT0gKHNpemUueCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNGdW5uZWxSb3cgPSAoaSArIDMpICUgNCA9PT0gMDsgICAgLy8g0YHQstGP0LfQuCDQvtCx0YDQsNC30YPRjtGCINCy0LjQt9GD0LDQu9GM0L3Rg9GOINCy0L7RgNC+0L3QutGDLlxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDEgLSDQndC10YfQtdCz0L4g0LLQtdGA0YLQuNC60LDQu9GM0L3QviDRgdCy0Y/Qt9GL0LLQsNGC0YwuXHJcbiAgICAgICAgICAgICAgICAvLyAyIC0g0JIg0YLQsNC60L7QvCDRgdC70YPRh9Cw0LUg0L3QtSDQsdGD0LTQtdGCINC90LjQttC90LXQs9C+IFBvd2VyLVJvdy5cclxuICAgICAgICAgICAgICAgIC8vIFRPRE86INC/0YDQtdC00YPQv9GA0LXQttC00LDRgtGMINC90LAg0Y3RgtCw0L/QtSDQv9C+0LvRg9GH0LXQvdC40Y8g0LrQvtC90YTQuNCz0LAuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNFbmRUaWxlIHx8IGlzRW5kUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93LnB1c2gobmV3IFRpbGUoeyB4OiBqLCB5OiBpIH0sIENFTExfVFlQRS5FTVBUWSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RUeXBlID0gaXNGdW5uZWxSb3dcclxuICAgICAgICAgICAgICAgICAgICA/IGlzRXZlblRpbGUgPyBDT05ORUNUX1RZUEUuTEVGVF9UT19CT1RUT00gOiBDT05ORUNUX1RZUEUuUklHSFRfVE9fQk9UVE9NXHJcbiAgICAgICAgICAgICAgICAgICAgOiBpc0V2ZW5UaWxlID8gQ09OTkVDVF9UWVBFLlJJR0hUX1RPX0JPVFRPTSA6IENPTk5FQ1RfVFlQRS5MRUZUX1RPX0JPVFRPTTtcclxuXHJcbiAgICAgICAgICAgICAgICByb3cucHVzaChuZXcgVGlsZSh7IHg6IGosIHk6IGkgfSwgQ0VMTF9UWVBFLkNPTk5FQ1RfTElORSwgY29ubmVjdFR5cGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0cml4LnB1c2gocm93KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQl9Cw0L/QvtC70L3Rj9C10Lwg0L/QvtC70LUgVGlsZSBjb25uZWN0VHlwZS5cclxuICAgIG1hdHJpeC5mb3JFYWNoKChyb3csIHlJbmRleCkgPT4ge1xyXG4gICAgICAgIHJvdy5mb3JFYWNoKCh0aWxlLCB4SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRpbGUudHlwZSA9PT0gQ0VMTF9UWVBFLldBSVRJTkdfQUxMT0NBVElPTikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmVpZ2hib3JzUG9zaXRpb25MaXN0ID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIFt7eTogeUluZGV4LCB4OiB4SW5kZXggLSAyfSwgQ09OTkVDVF9UWVBFLkxFRlRfTElORV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW3t5OiB5SW5kZXgsIHg6IHhJbmRleCArIDJ9LCBDT05ORUNUX1RZUEUuUklHSFRfTElORV0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFt7eTogeUluZGV4IC0gMiwgeDogeEluZGV4IC0gMX0sIENPTk5FQ1RfVFlQRS5SSUdIVF9UT19UT1BdLFxyXG4gICAgICAgICAgICAgICAgICAgIFt7eTogeUluZGV4IC0gMiwgeDogeEluZGV4ICsgMX0sIENPTk5FQ1RfVFlQRS5MRUZUX1RPX1RPUF0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFt7eTogeUluZGV4ICsgMiwgeDogeEluZGV4IC0gMX0sIENPTk5FQ1RfVFlQRS5SSUdIVF9UT19CT1RUT01dLFxyXG4gICAgICAgICAgICAgICAgICAgIFt7eTogeUluZGV4ICsgMiwgeDogeEluZGV4ICsgMX0sIENPTk5FQ1RfVFlQRS5MRUZUX1RPX0JPVFRPTV0sXHJcbiAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgICAgIG5laWdoYm9yc1Bvc2l0aW9uTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtwb3NpdGlvbiwgdHlwZV0gPSBpdGVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrUG9zaXRpb25MaW1pdHMocG9zaXRpb24sIHsgbWF4WDogc2l6ZS54LCBtYXhZOiBzaXplLnkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgbWF0cml4W3lJbmRleF1beEluZGV4XS50eXBlID09PSBDRUxMX1RZUEUuV0FJVElOR19BTExPQ0FUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuYWRkVG9Db25uZWN0TGlzdCh0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG1hdHJpeDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE5laWdoYm9yID0gKGNvbm5lY3RUeXBlLCB7IHgsIHkgfSkgPT4ge1xyXG4gICAgc3dpdGNoIChjb25uZWN0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgQ09OTkVDVF9UWVBFLkxFRlRfVE9fQk9UVE9NOiByZXR1cm4geyB4OiB4ICsgMSwgeTogeSArIDIgfTtcclxuICAgICAgICBjYXNlIENPTk5FQ1RfVFlQRS5SSUdIVF9UT19CT1RUT006IHJldHVybiB7IHg6IHggLSAxLCB5OiB5ICsgMiB9O1xyXG4gICAgICAgIGNhc2UgQ09OTkVDVF9UWVBFLkxFRlRfVE9fVE9QOiByZXR1cm4geyB4OiB4ICsgMSwgeTogeSAtIDIgfTtcclxuICAgICAgICBjYXNlIENPTk5FQ1RfVFlQRS5SSUdIVF9UT19UT1A6IHJldHVybiB7IHg6IHggLSAxLCB5OiB5IC0gMiB9O1xyXG4gICAgICAgIGNhc2UgQ09OTkVDVF9UWVBFLkxFRlRfTElORTogcmV0dXJuIHsgeDogeCAtIDIsIHk6IHkgfTtcclxuICAgICAgICBjYXNlIENPTk5FQ1RfVFlQRS5SSUdIVF9MSU5FOiByZXR1cm4geyB4OiB4ICsgMiwgeTogeSB9O1xyXG4gICAgICAgIGNhc2UgQ0VMTF9UWVBFLlJFQURZOiByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTUFUUklYX05BTUUgYXMgSEVYQUdPTjFfTUFUUklYX05BTUUgfSBmcm9tICcuL2hleGFnb24xJztcclxuaW1wb3J0IHsgTUFUUklYX05BTUUgYXMgU1FVQVJFMV9NQVRSSVhfTkFNRSAgfSBmcm9tICcuL3NxdWFyZTEnO1xyXG5cclxuZXhwb3J0IHsgZ2V0SGV4YWdvbk1hdHJpeDEsIGdldE5laWdoYm9yIGFzIGdldE5laWdoYm9ySGV4YWdvbjEgfSBmcm9tICcuL2hleGFnb24xJztcclxuZXhwb3J0IHsgZ2V0U3F1YXJlTWF0cml4MSB9IGZyb20gJy4vc3F1YXJlMSc7XHJcblxyXG5leHBvcnQgY29uc3QgTUFUUklYX05BTUVTID0ge1xyXG4gICAgSEVYQUdPTjFfTUFUUklYX05BTUUsXHJcbiAgICBTUVVBUkUxX01BVFJJWF9OQU1FLFxyXG59IiwiaW1wb3J0IHsgQ0VMTF9UWVBFLCBDT05ORUNUX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi4vVGlsZSc7XHJcblxyXG5leHBvcnQgY29uc3QgTUFUUklYX05BTUUgPSAnc2ltcGxlJztcclxuXHJcbi8qKlxyXG4gKiDQmtCy0LDQtNGA0LDRgiDRgSDQtNCy0YPQvNGPINGB0LLRj9C30Y/QvNC4LlxyXG4gKiDQn9C10YDQstGL0Lkg0YHQv9C+0YHQvtCxINGA0LXQsNC70LjQt9Cw0YbQuNC4INC00LvRjyDRgtC10YHRgtC40YDQvtCy0LDQvdC40Y8uXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBzaXplIC0geyB4LCB5IH0uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0U3F1YXJlTWF0cml4MSA9IChzaXplKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUueTsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHJvd1Jlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZS54OyBqKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGkgJSAyID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IGogJSAyID09PSAwID8gQ0VMTF9UWVBFLldBSVRJTkcgOiBDRUxMX1RZUEUuRU1QVFlcclxuICAgICAgICAgICAgICAgIDogaiAlIDIgPT09IDAgPyBDRUxMX1RZUEUuRU1QVFkgOiBDRUxMX1RZUEUuV0FJVElORztcclxuICAgICAgICAgICAgcm93UmVzdWx0LnB1c2gobmV3IFRpbGUoeyB4OiBqLCB5OiBpIH0sIHR5cGUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qINCf0YDQvtGB0YLQsNCy0LvRj9C10Lwg0LLQtdGA0YXQvdC40LUg0YHQstGP0LfQuCDRgdC70LXQstCwLiAqL1xyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJvd1Jlc3VsdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gQ0VMTF9UWVBFLldBSVRJTkcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c1JvdyA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzUm93W2luZGV4IC0gMV0/LnR5cGUgPT09IENFTExfVFlQRS5XQUlUSU5HKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY29ubmVjdExpc3QucHVzaChDT05ORUNUX1RZUEUuTEVGVF9UT1ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1Jvd1tpbmRleCAtIDFdLmNvbm5lY3RMaXN0LnB1c2goQ09OTkVDVF9UWVBFLlJJR0hUX0JPVFRPTSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdC5wdXNoKHJvd1Jlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufSIsImltcG9ydCB7IENFTExfVFlQRSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldFJhbmRvbU51bWJlciB9IGZyb20gJy4uLy4uLy4uL2xpYnJhcnkvdXRpbHMnO1xyXG5pbXBvcnQgeyBNQVRSSVhfRklFTERTIH0gZnJvbSAnLi4vVGlsZSc7XHJcblxyXG4vKipcclxuICog0J/RgNC+0LLQtdGA0LrQsCDRh9GR0YLQvdC+0LUg0LvQuCDRh9C40YHQu9C+LlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0V2ZW5OdW1iZXIgPSB2YWx1ZSA9PiB2YWx1ZSAlIDIgPT09IDA7XHJcblxyXG4vKipcclxuICog0J/RgNC+0LLQtdGA0LrQsCDQs9GA0LDQvdC40YYuINCU0YPQsdC70LjRgNGD0LXRgtGB0Y8uXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwb3NpdGlvbiAtIHsgeCwgeSB9LlxyXG4gKiBAcGFyYW0ge29iamVjdH0gbGltaXRzIC0geyBtYXhYLCBtYXhZIH0uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2hlY2tQb3NpdGlvbkxpbWl0cyA9ICh7IHgsIHkgfSwgeyBtYXhYLCBtYXhZIH0pID0+IHtcclxuICAgIGNvbnN0IGxpbWl0c01ldGhvZCA9ICh2YWx1ZSwgbWF4TGltaXQpID0+IHZhbHVlID49IDAgJiYgdmFsdWUgPD0gbWF4TGltaXQ7XHJcblxyXG4gICAgcmV0dXJuIGxpbWl0c01ldGhvZCh4LCBtYXhYKSAmJiBsaW1pdHNNZXRob2QoeSwgbWF4WSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQodC80YvRgdC7INC80LXRgtC+0LTQsDog0YHQtNC10LvQsNGC0Ywg0YDQsNC90LTQvtC80L3QvtC1INGA0LDRgdC/0L7Qu9C+0LbQtdC90LjQtSDQtNC70Y8g0LjQs9GA0L7QutC+0LIg0Lgg0LjRhSDQutC70LXRgtC+0LouXHJcbiAqINCk0L7RgNC80LjRgNGD0LXQvCDRgdC/0LjRgdC+0Log0YHQstC+0LHQvtC00L3Ri9GFINC60LvQtdGC0L7QuiAtPiDQstGL0LHQuNGA0LDQtdC8INGA0LDQvdC00L7QvNC90YPRjiDQuNC3INC90LjRhSAtPiDQv9C10YDQtdGB0YLRgNCw0LjQstCw0LXQvCDQvNCw0YHRgdC40LIuXHJcbiAqINCf0L4g0LjRgtC+0LPRgyDQuNC3INC80LDRgdGB0LjQstCwINGB0YLRgNC+0LjQvCDQvtGC0L7QsdGA0LDQttC10L3QuNC1LlxyXG4gKlxyXG4gKiBAcGFyYW0ge2FycmF5fSBtYXRyaXhcclxuICogQHBhcmFtIHthcnJheX0gcGxheWVySW5mb1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldFJhbmRvbVBvd2VySW5NYXRyaXggPSAobWF0cml4LCBwbGF5ZXJJbmZvKSA9PiB7XHJcbiAgICBjb25zdCB3YWl0aW5nTGlzdCA9IG1hdHJpeC5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBpdGVtLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gQ0VMTF9UWVBFLldBSVRJTkdfQUxMT0NBVElPTikubWFwKGl0ZW0gPT4gaXRlbS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBbLi4uYWNjLCAuLi5saXN0XTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGNlaWxCeUNvdW50ID0gTWF0aC5jZWlsKHdhaXRpbmdMaXN0Lmxlbmd0aCAvIHBsYXllckluZm8ubGVuZ3RoKTtcclxuXHJcbiAgICBwbGF5ZXJJbmZvLmZvckVhY2goaW5mbyA9PiB7XHJcbiAgICAgICAgY29uc3QgW3BsYXllck5hbWUsIHBsYXllckNvbG9yXSA9IGluZm87XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VpbEJ5Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAod2FpdGluZ0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UmFuZG9tID0gZ2V0UmFuZG9tTnVtYmVyKHdhaXRpbmdMaXN0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gd2FpdGluZ0xpc3RbY3VycmVudFJhbmRvbV07XHJcblxyXG4gICAgICAgICAgICAgICAgbWF0cml4W2N1cnJlbnRQb3NpdGlvbi55XVtjdXJyZW50UG9zaXRpb24ueF0uc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgICAgICAgICBbTUFUUklYX0ZJRUxEUy5QT1dFUl9WQUxVRV06IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgW01BVFJJWF9GSUVMRFMuQ09MT1JdOiBwbGF5ZXJDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBbTUFUUklYX0ZJRUxEUy5QTEFZRVJfTkFNRV06IHBsYXllck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgW01BVFJJWF9GSUVMRFMuVFlQRV06IENFTExfVFlQRS5SRUFEWSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHdhaXRpbmdMaXN0LnNwbGljZShjdXJyZW50UmFuZG9tLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBtYXRyaXg7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IENFTExfVEFSR0VUX1RZUEUgPSB7XHJcbiAgICBieVBsYXllck5hbWU6ICdieVBsYXllck5hbWUnLFxyXG4gICAgYnlQb3NpdGlvbjogJ2J5UG9zaXRpb24nLFxyXG59OyIsImV4cG9ydCB7IFBvd2VyRGF0YUFQSSB9IGZyb20gJy4vRGF0YUFQSSc7XHJcblxyXG5leHBvcnQgeyBNQVRSSVhfTkFNRVMgfSBmcm9tICcuL2NvbXBvbmVudHMnOyIsImltcG9ydCB7IEJhc2UgfSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgeyBDT05GSUdfRVJST1JfVEVYVCwgQ09ORklHX1JFUVVJUkVEX0ZJRUxEUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbmZpZ0hlbHBlciBleHRlbmRzIEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5SRVFVSVJFRF9GSUVMRFMgPSBDT05GSUdfUkVRVUlSRURfRklFTERTO1xyXG4gICAgICAgIHRoaXMuRVJST1JfVEVYVCA9IENPTkZJR19FUlJPUl9URVhUO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnKSB7XHJcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGNvbmZpZ1trZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja1JlcXVpcmVkRmllbGRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWUoZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tmaWVsZF07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWUoZmllbGQsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpc1tmaWVsZF0gPSB2YWx1ZTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDQntCx0YnQtdC1INC00LvRjyBEYXRhINC4IFJlbmRlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQvtCy0LXRgNC60LAg0YfRgtC+INC/0LXRgNC10LTQsNC90YsgLyDQvtC/0YDQtdC00LXQu9C10L3RiyDQvdC10L7QsdGF0L7QtNC40LzRi9C1INC/0L7Qu9GPLlxyXG4gICAgICovXHJcbiAgICBjaGVja1JlcXVpcmVkRmllbGRzKCkge1xyXG4gICAgICAgIGxldCBoYXNFcnJvciA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuUkVRVUlSRURfRklFTERTIHx8IHRoaXMuUkVRVUlSRURfRklFTERTPy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLlJFUVVJUkVEX0ZJRUxEUy5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzW2ZpZWxkTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuRVJST1JfVEVYVFtmaWVsZE5hbWUudG9VcHBlckNhc2UoKV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAhaGFzRXJyb3I7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog0JHQsNC30L7QstGL0LUg0YLQuNC/0Ysg0YHQvtCx0YvRgtC40LkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQkFTRV9IQU5ETEVSX1RZUEVTID0ge1xyXG4gICAgRUxFTUVOVF9DSEFOR0VEOiAnZWxlbWVudENoYW5nZWQnLFxyXG4gICAgVElMRV9DTElDSzogJ3RpbGVDbGljaycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDT05GSUdfUkVRVUlSRURfRklFTERTID0gWydDT1VOVF9QTEFZRVInLCAnTUFQJ107XHJcblxyXG5leHBvcnQgY29uc3QgQ09ORklHX0VSUk9SX1RFWFQgPSB7XHJcbiAgICBDT1VOVF9QTEFZRVI6ICfQndC1INC/0LXRgNC10LTQsNC9IENPVU5UX1BMQVlFUicsXHJcbiAgICBNQVA6ICfQndC1INC/0LXRgNC10LTQsNC9IE1BUCcsXHJcbn07IiwiZXhwb3J0IHsgQmFzZSB9IGZyb20gJy4vYmFzZSc7XHJcbmV4cG9ydCB7IEJBU0VfSEFORExFUl9UWVBFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuZXhwb3J0IHsgQ29uZmlnSGVscGVyIH0gZnJvbSAnLi9Db25maWdIZWxwZXInOyIsImltcG9ydCB7IEJhc2UsIENvbmZpZ0hlbHBlciwgQkFTRV9IQU5ETEVSX1RZUEVTIH0gZnJvbSAnLi4vYmFzZSc7XHJcbmltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gJy4vU3RhdGUnO1xyXG5pbXBvcnQgeyBCYXNlTWF0cml4IH0gZnJvbSAnLi9NYXRyaXgnO1xyXG5pbXBvcnQge1xyXG4gICAgUkVRVUlSRURfRklFTERTLFxyXG4gICAgRVJST1JfVEVYVCxcclxuICAgIERFRkFVTFRfUExBWUVSX05BTUUsXHJcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqINCj0L3QuNCy0LXRgNGB0LDQu9GM0L3Ri9C1INC80LXRgtC+0LTRiyDQtNC70Y8g0YDQsNCx0L7RgtGLINGBINC00LDQvdC90YvQvNC4LlxyXG4gKiDQlNCw0L3QvdGL0LUg0LIg0LLQuNC00LUg0LzQsNGC0YDQuNGG0Ysg0L/QviDQv9C10YDQtdC00LDQvdC90YvQvCDRgNCw0LfQvNC10YDQsNC8LlxyXG4gKlxyXG4gKiBjb25maWcgLSDRgNCw0LfQvNC10YAgbWF0cml4INC60L7RgtC+0YDRg9GOINC90LXQvtCx0YXQvtC00LjQvNC+INC/0L7RgdGC0YDQvtC40YLRjC5cclxuICogaGFuZGxlciAtINCy0YvQt9C+0LIg0L/RgNC4INC40LfQvNC10L3QtdC90LjQuCDQv9C+0LvQtdC5IG1hdHJpeC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEYXRhSGVscGVyIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyLCBjb25maWcsIGlzRGV2ID0gZmFsc2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLlJFUVVJUkVEX0ZJRUxEUyA9IFJFUVVJUkVEX0ZJRUxEUztcclxuICAgICAgICB0aGlzLkVSUk9SX1RFWFQgPSBFUlJPUl9URVhUO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gbmV3IENvbmZpZ0hlbHBlcihjb25maWcpO1xyXG4gICAgICAgIHRoaXMuaXNEZXYgPSBpc0RldjtcclxuXHJcbiAgICAgICAgY29uc3QgY2hlY2tSZXN1bHQgPSB0aGlzLmNoZWNrUmVxdWlyZWRGaWVsZHMoKTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrUmVzdWx0IHx8IGlzRGV2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntC/0YDQtdC00LXQu9C10L3QuNC1INC80LjQvdC40LzQsNC70YzQvdC+INC90LXQvtCx0YXQvtC00LjQvNGL0YUg0LTQsNC90L3Ri9GFLlxyXG4gICAgICovXHJcbiAgICBpbml0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IEJhc2VTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbmV3IEJhc2VNYXRyaXgodGhpcy5jb25maWcuTUFQKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZShwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGVQcm9wZXJ0eShwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmdldFN0YXRlUHJvcGVydHkocHJvcGVydHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LjQvNC10L3QsC/QutC70Y7Rh9C4INC40LPRgNC+0LrQvtCyINGB0LDQvNGL0Lwg0L/RgNC+0YHRgtGL0Lwg0YHQv9C+0YHQvtCx0L7QvC5cclxuICAgICAqL1xyXG4gICAgZ2V0UGxheWVyc05hbWUoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldE51bWJlck9mUGxheWVycygpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goREVGQVVMVF9QTEFZRVJfTkFNRSArIGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXROdW1iZXJPZlBsYXllcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLkNPVU5UX1BMQVlFUiB8fCAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/QvtC70YPRh9C40YLRjCDRjdC70LXQvNC10L3RgiDQvNCw0YLRgNC40YbRiyDQv9C+INC60L7QvtGA0LTQuNC90LDRgtCw0LwuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBvc2l0aW9uIC0geyB4LCB5IH0gLlxyXG4gICAgICovXHJcbiAgICBnZXRJdGVtQnlQb3NpdGlvbihwb3NpdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXRJdGVtKHBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCc0LXQvdGP0LXQvCDQvtC00L3QviDQv9C10YDQtdC00LDQvdC90L7QtSDQt9C90LDRh9C10L3QuNC1INC90LAg0LTRgNGD0LPQvtC1XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0ge2FueXxhcnJheX0gb2xkVmFsdWVcclxuICAgICAqIEBwYXJhbSB7YW55fSBuZXdWYWx1ZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1c2VIYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIGNoYW5nZVBhcmFtQnlQYXJhbShwcm9wZXJ0eSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCB1c2VIYW5kbGVyID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBjaGFuZ2VkTGlzdCA9IHRoaXMubWF0cml4LmNoYW5nZVBhcmFtQnlQYXJhbShwcm9wZXJ0eSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKHVzZUhhbmRsZXIpIHtcclxuICAgICAgICAgICAgY2hhbmdlZExpc3QuZm9yRWFjaChwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZUhhbmRsZXIocG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQodC+0LHRi9GC0LjQtSDQuNC30LzQtdC90LXQvdC40Y8g0Y3Qu9C10LzQtdC90YLQsC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcG9zaXRpb24gLSB7IHgsIHkgfSAuXHJcbiAgICAgKi9cclxuICAgIHVzZUhhbmRsZXIocG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnVzZUhhbmRsZXJXaXRoQ3VzdG9tKEJBU0VfSEFORExFUl9UWVBFUy5FTEVNRU5UX0NIQU5HRUQsIHBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCb0Y7QsdC+0LUg0YHQvtCx0YvRgtC40LUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgICAqIEBwYXJhbSB7YW55fSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHVzZUhhbmRsZXJXaXRoQ3VzdG9tKHR5cGUsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXIodHlwZSwgZGF0YSk7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog0KHQsNC80YvQtSDQv9GA0L7RgdGC0YvQtSDQvNC10YLQvtC00Ysg0LTQu9GPINGA0LDQsdC+0YLRiyDRgSDQtNCw0L3QvdGL0LzQuCDQsiDQstC40LTQtSDQvNCw0YLRgNC40YbRiy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNlTWF0cml4IGV4dGVuZHMgQXJyYXkge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuTUFYX1ggPSBjb25maWcuU0laRS54O1xyXG4gICAgICAgIHRoaXMuTUFYX1kgPSBjb25maWcuU0laRS55O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC40L3QuNC80LDQtdC8INC80LDRgtGA0LjRhtGDINC4INC/0L7RgdC70LXQtNC+0LLQsNGC0LXQu9GM0L3QviDQt9Cw0L/QuNGB0YvQstCw0LXRgiDQtdGRLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IG1hdHJpeC5cclxuICAgICAqL1xyXG4gICAgb3ZlcndyaXRlTWF0cml4KG1hdHJpeCkge1xyXG4gICAgICAgIG1hdHJpeC5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXNbaW5kZXhdID0gcm93O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/QvtC70YPRh9C40YLRjCDRjdC70LXQvNC10L3RgiDQvNCw0YLRgNC40YbRiy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcG9zaXRpb24gLSB7IHgsIHkgfSAuXHJcbiAgICAgKi9cclxuICAgIGdldEl0ZW0oeyB4LCB5IH0pIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tQb3NpdGlvbkxpbWl0cyh7IHgsIHkgfSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrUG9zaXRpb25MaW1pdHMgRVJST1InKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXNbeV1beF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQnNC10L3Rj9C10Lwg0L7QtNC90L4g0L/QtdGA0LXQtNCw0L3QvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQvdCwINC00YDRg9Cz0L7QtVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIHthbnl8YXJyYXl9IG9sZFZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gbmV3VmFsdWVcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gW3sgeCwgeSB9XS4g0JrQvtC+0YDQtNC40L3QsNGC0Ysg0LjQt9C80LXQvdGR0L3QvdGL0YUg0Y3Qu9C10LzQtdC90YLQvtCyLlxyXG4gICAgICovXHJcbiAgICBjaGFuZ2VQYXJhbUJ5UGFyYW0ocHJvcGVydHksIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZWRMaXN0ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICByb3cuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpc0VxdWFsO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9sZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRXF1YWwgPSBvbGRWYWx1ZS5zb21lKG9sZFZhbHVlSXRlbSA9PiBvbGRWYWx1ZUl0ZW0gPT09IGl0ZW1bcHJvcGVydHldKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNFcXVhbCA9IGl0ZW1bcHJvcGVydHldID09PSBvbGRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNFcXVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1bcHJvcGVydHldID0gbmV3VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWRMaXN0LnB1c2goaXRlbS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hhbmdlZExpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBnZXRFbXB0eU1hdHJpeCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuTUFYX1ggJiYgIXRoaXMuTUFYX1kpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtbXV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuTUFYX1k7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcm93UmVzdWx0ID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuTUFYX1g7IGorKykge1xyXG4gICAgICAgICAgICAgICAgcm93UmVzdWx0LnB1c2goeyB4OiBqLCB5OiBpIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChyb3dSZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQvtCy0LXRgNC60LAg0YHQvtC+0YLQstC10YLRgdGC0LLQuNGOINCz0YDQsNC90LjRhtGLINC80LDRgtGA0LjRhtGLLlxyXG4gICAgICovXHJcbiAgICBjaGVja1Bvc2l0aW9uTGltaXRzKHsgeCwgeSB9KSB7XHJcbiAgICAgICAgY29uc3QgbGltaXRzTWV0aG9kID0gKHZhbHVlLCBtYXhMaW1pdCkgPT4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSBtYXhMaW1pdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpbWl0c01ldGhvZCh4LCB0aGlzLk1BWF9YKSAmJiBsaW1pdHNNZXRob2QoeSwgdGhpcy5NQVhfWSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XHJcblxyXG4vKipcclxuICog0KHQsNC80YvQtSDQv9GA0L7RgdGC0YvQtSDQvNC10YLQvtC00Ysg0LTQu9GPINGA0LDQsdC+0YLRiyDRgSDRgdC+0YHRgtC+0Y/QvdC40LXQvCDQv9GA0LjQu9C+0LbQtdC90LjRjyDQuNC70Lgg0LXQs9C+INC+0YLQtNC10LvRjNC90YvRhSDRh9Cw0YHRgtC10LkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmFzZVN0YXRlIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzZXRTdGF0ZShwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAocHJvcGVydHkpIHtcclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGVQcm9wZXJ0eShwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW3Byb3BlcnR5XTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBFUlJPUl9URVhUID0ge1xyXG4gICAgSEFORExFUjogJ9Cd0LUg0L/QtdGA0LXQtNCw0L0gaGFuZGxlcicsXHJcbiAgICBDT05GSUc6ICfQndC1INC/0LXRgNC10LTQsNC9IGNvbmZpZycsXHJcbn1cclxuXHJcbi8vINCe0LHRj9C30LDRgtC10LvRjNC90YvQtSDQv9C+0LvRjyDQtNC70Y8gXCJEYXRhSGVscGVyXCIuXHJcbmV4cG9ydCBjb25zdCBSRVFVSVJFRF9GSUVMRFMgPSBbJ2hhbmRsZXInLCAnY29uZmlnJ107XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9QTEFZRVJfTkFNRSA9ICdwbGF5ZXInOyIsImV4cG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL3JlbmRlci9jb21wb25lbnRzL0Jhc2UnO1xyXG5leHBvcnQgeyBCQVNFX0hBTkRMRVJfVFlQRVMgfSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuZXhwb3J0IHsgUmVuZGVySGVscGVyIH0gZnJvbSAnLi9yZW5kZXIvUmVuZGVySGVscGVyJztcclxuZXhwb3J0IHsgRGF0YUhlbHBlciB9IGZyb20gJy4vZGF0YS9EYXRhSGVscGVyJztcclxuZXhwb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSAnLi9kYXRhL1N0YXRlJztcclxuZXhwb3J0IHsgQmFzZU1hdHJpeCB9IGZyb20gJy4vZGF0YS9NYXRyaXgnO1xyXG5cclxuaW1wb3J0IHsgZ2V0RW1wdHlEaXYsIGdldERpdiB9IGZyb20gJy4vcmVuZGVyL3V0aWxzJztcclxuaW1wb3J0IHsgQ09NTU9OX0NMQVNTX05BTUVTLCBDT01NT05fRE9NX0lEUyB9IGZyb20gJy4vcmVuZGVyL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyVXRpbHMgPSB7XHJcbiAgICBnZXRFbXB0eURpdixcclxuICAgIGdldERpdixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENPTU1PTiA9IHtcclxuICAgIENMQVNTX05BTUVTOiBDT01NT05fQ0xBU1NfTkFNRVMsXHJcbiAgICBET01fSURTOiBDT01NT05fRE9NX0lEUyxcclxufSIsImltcG9ydCB7IGdldERpdiwgZ2V0RW1wdHlEaXYgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgZ2V0SGVhZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCB7IENPTU1PTl9DTEFTU19OQU1FUywgQ09NTU9OX0RPTV9JRFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGJ1aWxkRGl2TWF0cml4IH0gZnJvbSAnLi9jb21wb25lbnRzL0Rpdk1hdHJpeCc7XHJcblxyXG4vKipcclxuICogVE9ETzog0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQvtCx0LDQstC40YLRjCDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINC30LDQvNC10L3Rj9GC0Ywg0LjQutC+0L3QutC4LlxyXG4gKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlbmRlckhlbHBlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUT0RPOiDQvdC10L7QsdGF0L7QtNC40LzQviDRgNC10LDQu9C40LfQvtCy0LDRgtGMINC60L7RgNGA0LXQutGC0L3QvtC1INC40LfQvNC10L3QtdC90LjQtSDQstGB0YLRgNC+0LXQvdC90YvRhSDQutC70LDRgdGB0L7Qsi/QuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgNC+0LIuXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgY29uZmlnLCBpc0RldiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5ET01fSURTID0gY29uZmlnLkRPTV9JRFM7XHJcbiAgICAgICAgdGhpcy5VU0VfVEFCTEUgPSBjb25maWcuVVNFX1RBQkxFO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgdGhpcy5pc0RldiA9IGlzRGV2O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JHQsNC30L7QstCw0Y8g0L/Rg9GB0YLQsNGPINGE0L7RgNC80LAg0YEgaWQ6XHJcbiAgICAgKiAg0L7RgdC90L7QstC90L7QtSDQv9C+0LvQtVxyXG4gICAgICogINCy0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90L7QtSDQv9C+0LvQtVxyXG4gICAgICogIGhlYWRlclxyXG4gICAgICovXHJcbiAgICBnZXRCYXNlRm9ybSgpIHtcclxuICAgICAgICBjb25zdCBhcHBOb2RlID0gZ2V0RGl2KENPTU1PTl9DTEFTU19OQU1FUy5BUFAsIHRoaXMuRE9NX0lEUy5yb290KTtcclxuICAgICAgICBjb25zdCBjb250ZW50Tm9kZSA9IGdldERpdihDT01NT05fQ0xBU1NfTkFNRVMuSlVTVElGWV9DRU5URVIpO1xyXG4gICAgICAgIGNvbnN0IG1haW5Ob2RlID0gZ2V0RGl2KENPTU1PTl9DTEFTU19OQU1FUy5GTEVYLCBDT01NT05fRE9NX0lEUy5NQUlOKTtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsTm9kZSA9IGdldERpdihudWxsLCBDT01NT05fRE9NX0lEUy5BRERJVElPTkFMKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVyTm9kZSA9IHRoaXMuZ2V0SGVhZGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnRlbnROb2RlLmFwcGVuZChtYWluTm9kZSwgYWRkaXRpb25hbE5vZGUpO1xyXG4gICAgICAgIGFwcE5vZGUuYXBwZW5kKGhlYWRlck5vZGUsIGNvbnRlbnROb2RlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFwcE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWRkaXRpb25hbE5vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudEJ5SWQoQ09NTU9OX0RPTV9JRFMuQURESVRJT05BTCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGVhZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRIZWFkZXIoQ09NTU9OX0NMQVNTX05BTUVTLkhFQURFUiwgQ09NTU9OX0NMQVNTX05BTUVTLkhFQURFUl9JTUcsIENPTU1PTl9ET01fSURTLkhFQURFUik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbWVudEJ5SWQoaWQpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpdihjbGFzc05hbWUsIGlkLCB0ZXh0LCBjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiBnZXREaXYoY2xhc3NOYW1lLCBpZCwgdGV4dCwgY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcHR5RGl2KCkge1xyXG4gICAgICAgIHJldHVybiBnZXRFbXB0eURpdigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LDRgtGA0LjQsdGD0YLRiyDQtNC70Y8g0LrQu9C10YLQutC4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0aWxlRWxlbWVudCAtIERPTS3RjdC70LXQvNC10L3RgiDQutC70LXRgtC60LguXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlIC0g0LDRgtGA0LjQsdGD0YLRiy5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggLVxyXG4gICAgICovXHJcbiAgICBzZXRBdHRyaWJ1dGVJblRpbGUodGlsZUVsZW1lbnQsIGF0dHJpYnV0ZSwgcHJlZml4KSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGF0dHJpYnV0ZVtrZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudFZhbHVlID09PSAnb2JqZWN0JyAmJiBjdXJyZW50VmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZUluVGlsZSh0aWxlRWxlbWVudCwgY3VycmVudFZhbHVlLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtJHtwcmVmaXggPyBwcmVmaXggKyAnLScgOiAnJ30ke2tleX1gLCBhdHRyaWJ1dGVba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ09NUE9ORU5UU1xyXG5cclxuICAgIGdldENvbnRlbnRNZXRob2RzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGdldERpdjogdGhpcy5nZXREaXYsXHJcbiAgICAgICAgICAgIGdldEVtcHR5RGl2OiB0aGlzLmdldEVtcHR5RGl2LFxyXG4gICAgICAgICAgICBnZXRUaWxlOiB0aGlzLmJ1aWxkRGl2VGlsZSxcclxuICAgICAgICAgICAgc2V0QXR0cmlidXRlSW5UaWxlOiB0aGlzLnNldEF0dHJpYnV0ZUluVGlsZSxcclxuICAgICAgICAgICAgdGlsZUhhbmRsZXI6IHRoaXMuaGFuZGxlcixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkRGl2TWF0cml4KG1hdHJpeCkge1xyXG4gICAgICAgIHJldHVybiBidWlsZERpdk1hdHJpeChtYXRyaXgsIHRoaXMuZ2V0Q29udGVudE1ldGhvZHMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGREaXZUaWxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERpdigpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgZ2V0RGl2IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqINCn0YLQvi3RgtC+INGB0LDQvNC+0LUg0L/RgNC+0YHRgtC+0LUsINGH0YLQvtCx0Ysg0YPQv9GA0L7RgdC40YLRjCDRgNCw0LHQvtGC0YMg0YEgRE9NLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQge1xyXG4gICAgZ2V0RGl2KGNsYXNzTmFtZSwgaWQsIHRleHQsIGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldERpdihjbGFzc05hbWUsIGlkLCB0ZXh0LCBjaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFzdEluKHBhcmVudE5vZGUpIHtcclxuICAgICAgICBpZiAocGFyZW50Tm9kZSAmJiB0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDT01NT05fQ0xBU1NfTkFNRVMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqINCh0L7Qt9C00LDRkdC8INC60LDRgNGC0YMg0LIg0LLQuNC00LUg0YLQsNCx0LvQuNGG0Ysg0LTQu9GPINC/0YDQuNC70L7QttC10L3QuNGPLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2FycmF5fSBtYXRyaXhcclxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRlbnRNZXRob2RzIC0g0LzQtdGC0L7QtNGLINGA0LXQvdC00LXRgNCwINC00LvRjyDQutC+0L3RgtC10L3RgtCwLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRGl2TWF0cml4KG1hdHJpeCwgY29udGVudE1ldGhvZHMpIHtcclxuICAgIGNvbnN0IHdyYXBFbGVtZW50ID0gY29udGVudE1ldGhvZHMuZ2V0RGl2KCk7XHJcblxyXG4gICAgd3JhcEVsZW1lbnQuY2xhc3NOYW1lID0gQ09NTU9OX0NMQVNTX05BTUVTLkZMRVhfQ09MVU1OO1xyXG5cclxuICAgIG1hdHJpeC5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm93RWxlbWVudCA9IGNvbnRlbnRNZXRob2RzLmdldERpdigpO1xyXG5cclxuICAgICAgICByb3dFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1vcmRlcicsIGluZGV4KTtcclxuICAgICAgICByb3dFbGVtZW50LmNsYXNzTmFtZSA9IENPTU1PTl9DTEFTU19OQU1FUy5GTEVYO1xyXG5cclxuICAgICAgICAvLyDQodC00LLQuNCzINGB0YLRgNC+0Log0YEgcG93ZXIg0YfQtdGA0LXQtyDQvtC00L3Rgy5cclxuICAgICAgICBpZiAoaW5kZXggJSAyICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJvd0VsZW1lbnQuY2xhc3NOYW1lID0gYCR7cm93RWxlbWVudC5jbGFzc05hbWV9IG1hcmdpbkxlZnRNaWRkbGVgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm93LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBjb250ZW50TWV0aG9kcy5nZXRUaWxlKGl0ZW0sIGNvbnRlbnRNZXRob2RzKTtcclxuXHJcbiAgICAgICAgICAgIHJvd0VsZW1lbnQuYXBwZW5kQ2hpbGQodGlsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd3JhcEVsZW1lbnQuYXBwZW5kQ2hpbGQocm93RWxlbWVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gd3JhcEVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgeyBnZXREaXYgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCBidXJnZXIgZnJvbSAnLi4vLi4vc3RhdGljL2ZyZWUtaWNvbi1mb250LW1lbnUtYnVyZ2VyLnN2Zyc7XHJcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuLi8uLi9zdGF0aWMvZnJlZS1pY29uLWZvbnQtc2V0dGluZ3Muc3ZnJztcclxuXHJcbi8qKlxyXG4gKiDQqNCw0L/QutCwINGBINC60L3QvtC/0LrQsNC80Lgg0LHRg9GC0LXRgNCx0YDQvtC00LAg0Lgg0YjQtdGB0YLQtdGA0ZHQvdC60L7QuS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGhlYWRlckNsYXNzTmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaW1nQ2xhc3NOYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhlYWRlcihoZWFkZXJDbGFzc05hbWUsIGltZ0NsYXNzTmFtZSwgaWQpIHtcclxuICAgIGNvbnN0IG5vZGUgPSBnZXREaXYoaGVhZGVyQ2xhc3NOYW1lLCBpZCwgKTtcclxuICAgIGNvbnN0IGJ1cmdlckljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNvbnN0IHNldHRpbmdzSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIGJ1cmdlckljb24uc3JjID0gYnVyZ2VyO1xyXG4gICAgc2V0dGluZ3NJY29uLnNyYyA9IHNldHRpbmdzO1xyXG5cclxuICAgIGJ1cmdlckljb24uY2xhc3NOYW1lID0gaW1nQ2xhc3NOYW1lO1xyXG4gICAgc2V0dGluZ3NJY29uLmNsYXNzTmFtZSA9IGltZ0NsYXNzTmFtZTtcclxuXHJcbiAgICBub2RlLmFwcGVuZChidXJnZXJJY29uLCBzZXR0aW5nc0ljb24pO1xyXG5cclxuICAgIHJldHVybiBub2RlO1xyXG59IiwiZXhwb3J0IGNvbnN0IENPTU1PTl9DTEFTU19OQU1FUyA9IHtcclxuICAgIEFQUDogJ2FwcGxpY2F0aW9uJyxcclxuXHJcbiAgICBGTEVYOiAnZmxleCcsXHJcbiAgICBKVVNUSUZZX0NFTlRFUjogJ2p1c3RpZnlDZW50ZXInLFxyXG4gICAgRkxFWF9DT0xVTU46ICdmbGV4Q29sdW1uJyxcclxuXHJcbiAgICBIRUFERVI6ICdoZWFkZXInLFxyXG4gICAgSEVBREVSX0lNRzogJ2hlYWRlcl9pbWcnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ09NTU9OX0RPTV9JRFMgPSB7XHJcbiAgICBNQUlOOiAnbWFpbkZpZWxkJyxcclxuICAgIEFERElUSU9OQUw6ICdhZGRpdGlvbmFsRmllbGQnLFxyXG4gICAgSEVBREVSOiAnaGVhZGVyJyxcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZ2V0RW1wdHlEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbi8qKlxyXG4gKiBEaXYg0YEg0L/RgNC+0YHRgtGL0Lwg0L3QsNC/0L7Qu9C90LXQvdC40LXQvC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXREaXYgPSAoY2xhc3NOYW1lLCBpZCwgdGV4dCwgY2hpbGQpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbXB0eURpdigpO1xyXG5cclxuICAgIGlmIChjbGFzc05hbWUpIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBlbGVtZW50LmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRleHQpIHtcclxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZChjaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07IiwiLyoqXHJcbiAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGA0LDQvdC00L7QvNC90L7QtSDRh9C40YHQu9C+INC/0L4g0L/QtdGA0LXQtNCw0L3QvdGL0Lwg0L/QsNGA0LDQvNC10YLRgNCw0LwuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXguXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4uXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRSYW5kb21OdW1iZXIgPSAobWF4ID0gMTAsIG1pbiA9IDApID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47IiwiaW1wb3J0IHsgSEFORExFUl9UWVBFLCBTVEVQX1RZUEUsIFRVUk5fQlVUVE9OX0VWRU5UX1RZUEVTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiDQndCw0LHQvtGAINC80LXRgtC+0LTQvtCyINC00LvRjyDQstGL0L/QvtC70L3QtdC90LjRjyDRgdC+0LHRi9GC0LjQuSDQv9GA0LjQu9C+0LbQtdC90LjRjy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQb3dlckxvZ2ljQVBJIHtcclxuICAgIGNvbnN0cnVjdG9yKGlzRGV2KSB7XHJcbiAgICAgICAgdGhpcy5pc0RldiA9IGlzRGV2O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqINCS0YvQv9C+0LvQvdGP0LXQvCDRgNCw0L3QtNC+0LzQvdGL0LUg0LDRgtCw0LrQuCDQv9C+INC/0LXRgNC10LTQsNC90L3QvtC80YMg0LjQs9GA0L7QutGDXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEBwYXJhbSB7UG93ZXJEYXRhQVBJfSBEYXRhQXBpIC1cclxuICAgICAqL1xyXG4gICAgZG9SYW5kb21BdHRhY2tzKG5hbWUsIERhdGFBcGkpIHtcclxuICAgICAgICBjb25zdCB0aWxlTGlzdCA9IERhdGFBcGkubWF0cml4LmdldFRpbGVMaXN0QnlDYW5BdHRhY2sobmFtZSk7XHJcblxyXG4gICAgICAgIHRpbGVMaXN0LmZvckVhY2godGlsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZVRpbGUgPSBEYXRhQXBpLmdldE9wcG9uZW50VGlsZUxpc3QodGlsZS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlVGlsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIERhdGFBcGkuZG9QQ0F0dGFjayh0aWxlLnBvc2l0aW9uLCBhdmFpbGFibGVUaWxlWzBdLnBvc2l0aW9uLCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZG9TaW1wbGVHaWZ0UG93ZXIobmFtZSwgRGF0YUFwaSkge1xyXG4gICAgICAgIGNvbnN0IHRpbGVMaXN0ID0gRGF0YUFwaS5tYXRyaXguZ2V0VGlsZUxpc3RCeVBsYXllcihuYW1lKTtcclxuXHJcbiAgICAgICAgdGlsZUxpc3QuZm9yRWFjaCh0aWxlID0+IHtcclxuICAgICAgICAgICAgRGF0YUFwaS5kb0dpdmVQb3dlclBDKG5hbWUsIHRpbGUucG9zaXRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7QsdGA0LDQsdC+0YLQutCwINC60LvQuNC60LAg0L/QviDQutC90L7Qv9C60LUg0YXQvtC00LAuXHJcbiAgICAgKiDQmtC90L7Qv9C60LAg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGCINGA0LDQt9C90YvQtSDRgdC+0YHRgtC+0Y/QvdC40Y8g0YEg0YDQsNC30L3QvtC5INGA0LXQsNC60YbQuNC10LkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtQb3dlckRhdGFBUEl9IERhdGFBUEkuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gUmVuZGVyQVBJLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGluZm8sIHsgdHlwZSB9IC0g0L3QsCDRgdC70YPRh9Cw0Lkg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0LTQvtC/LiDQuNC90YTQvtGA0LzQsNGG0LjQuC5cclxuICAgICAqL1xyXG4gICAgdHVybkJ1dHRvbkNsaWNrSGFuZGxlcihEYXRhQVBJLCBSZW5kZXJBUEksIGluZm8pIHtcclxuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGluZm87XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09PSBIQU5ETEVSX1RZUEUuVFVSTl9CVVRUT05fQ0xJQ0spIHtcclxuICAgICAgICAgICAgRGF0YUFQSS5hY3RpdmVHaXZlUG93ZXJTdGVwKHRydWUpO1xyXG4gICAgICAgICAgICBSZW5kZXJBUEkuc2hvd0RldkJ1dHRvbihEYXRhQVBJLnN0YXRlLmdldEN1cnJlbnRTdGVwVHlwZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09PSBIQU5ETEVSX1RZUEUuR0lGVF9FTkRfQlVUVE9OX0NMSUNLKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaW5mbzogbmV4dFBsYXllckluZm8sIG5hbWU6IG5leHRQbGF5ZXJOYW1lIH0gPSBEYXRhQVBJLmdldE5leHRQbGF5ZXJJbmZvKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV4dFBsYXllckluZm8uaXNQZW9wbGUpIHtcclxuICAgICAgICAgICAgICAgIERhdGFBUEkuc2V0U3RlcFR5cGUobmV4dFBsYXllck5hbWUsIFNURVBfVFlQRS5DSE9PU0VfRk9SX0FUVEFDSywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBSZW5kZXJBUEkuc2hvd0RldkJ1dHRvbihEYXRhQVBJLnN0YXRlLmdldEN1cnJlbnRTdGVwVHlwZSgpKTtcclxuICAgICAgICAgICAgICAgIFJlbmRlckFQSS5yZXJlbmRlclR1cm5CdXR0b24oVFVSTl9CVVRUT05fRVZFTlRfVFlQRVMuQUNUSVZFX1RVUk5fQlVUVE9OLCB7IGhpZ2hsaWdodDogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBEYXRhQVBJLmRvTmV4dFR1cm4obmV4dFBsYXllck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1JhbmRvbUF0dGFja3MobmV4dFBsYXllck5hbWUsIERhdGFBUEkpO1xyXG4gICAgICAgICAgICAgICAgRGF0YUFQSS5hY3RpdmVHaXZlUG93ZXJTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvU2ltcGxlR2lmdFBvd2VyKG5leHRQbGF5ZXJOYW1lLCBEYXRhQVBJKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHVybkJ1dHRvbkNsaWNrSGFuZGxlcihEYXRhQVBJLCBSZW5kZXJBUEksIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBIQU5ETEVSX1RZUEUuR0lGVF9FTkRfQlVUVE9OX0NMSUNLLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGV2SGFuZGxlcih0eXBlLCBkYXRhQVBJLCByZW5kZXJBUEkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEZXYpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IEhBTkRMRVJfVFlQRS5ERVZfRE9fUkFORE9NXzEpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFN0ZXBUeXBlID0gZGF0YUFQSS5zdGF0ZS5nZXRDdXJyZW50U3RlcFR5cGUoKTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFR1cm4gPSBkYXRhQVBJLnN0YXRlLmdldEN1cnJlbnRUdXJuKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudFN0ZXBUeXBlID09PSBTVEVQX1RZUEUuR0lWRV9QT1dFUikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1NpbXBsZUdpZnRQb3dlcihjdXJyZW50VHVybiwgZGF0YUFQSSk7XHJcbiAgICAgICAgICAgICAgICAvLyByZW5kZXJBUEkucmVyZW5kZXIoJ3R1cm5CdXR0b25BY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGVwVHlwZSA9PT0gU1RFUF9UWVBFLkNIT09TRV9GT1JfQVRUQUNLKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvUmFuZG9tQXR0YWNrcyhjdXJyZW50VHVybiwgZGF0YUFQSSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IHsgUG93ZXJMb2dpY0FQSSB9IGZyb20gJy4vTG9naWNBUEknOyIsImltcG9ydCB7IGdldFJhbmRvbUJvb2xlYW4gfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IENBTENfQVRUQUNLX1JFU1VMVFMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqINCb0L7Qs9C40LrQsCDRgNCw0YHRh9GR0YLQsCDQv9GA0Lgg0LDRgtCw0LrQtS5cclxuICogYWN0aXZlL2RlZmVuc2l2ZSAtINC30L3QsNGH0LXQvdC40Y8g0LjQtyBUaWxlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGFjdGl2ZVxyXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGRlZmVuc2l2ZVxyXG4gKlxyXG4gKiBAcmV0dXJuIHtvYmplY3R9IHdpbm5lciAvIGFjdGl2ZVZhbHVlIC8gZGVmZW5zaXZlVmFsdWVcclxuICovXHJcbmV4cG9ydCBjb25zdCBjYWxjQXR0YWNrUmVzdWx0ID0gKGFjdGl2ZSwgZGVmZW5zaXZlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICAgICAgd2lubmVyOiAnJyxcclxuICAgICAgICBhY3RpdmVWYWx1ZTogMSxcclxuICAgICAgICBkZWZlbnNpdmVWYWx1ZTogMSxcclxuICAgIH1cclxuICAgIGNvbnN0IGF0dGFja2luZ1ZhbHVlID0gYWN0aXZlIC0gMTtcclxuXHJcbiAgICBpZiAoYXR0YWNraW5nVmFsdWUgPT09IGRlZmVuc2l2ZSkge1xyXG4gICAgICAgIHJlc3VsdC5kZWZlbnNpdmVWYWx1ZSA9IDE7XHJcbiAgICAgICAgcmVzdWx0Lndpbm5lciA9IGdldFJhbmRvbUJvb2xlYW4oKSA/IENBTENfQVRUQUNLX1JFU1VMVFMuQVRUQUNLIDogQ0FMQ19BVFRBQ0tfUkVTVUxUUy5ERUZFTlNJVkU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGF0dGFja2luZ1ZhbHVlIDwgZGVmZW5zaXZlKSB7XHJcbiAgICAgICAgaWYgKGF0dGFja2luZ1ZhbHVlID09PSBkZWZlbnNpdmUgLSAxKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kZWZlbnNpdmVWYWx1ZSA9IDE7XHJcbiAgICAgICAgICAgIHJlc3VsdC53aW5uZXIgPSBnZXRSYW5kb21Cb29sZWFuKDI1KSA/IENBTENfQVRUQUNLX1JFU1VMVFMuREVGRU5TSVZFIDogQ0FMQ19BVFRBQ0tfUkVTVUxUUy5BVFRBQ0s7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0LmRlZmVuc2l2ZVZhbHVlID0gZGVmZW5zaXZlIC0gYXR0YWNraW5nVmFsdWU7XHJcbiAgICAgICAgICAgIHJlc3VsdC53aW5uZXIgPSBDQUxDX0FUVEFDS19SRVNVTFRTLkRFRkVOU0lWRTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGF0dGFja2luZ1ZhbHVlID4gZGVmZW5zaXZlKSB7XHJcbiAgICAgICAgcmVzdWx0LmRlZmVuc2l2ZVZhbHVlID0gYXR0YWNraW5nVmFsdWUgLSBkZWZlbnNpdmU7XHJcbiAgICAgICAgcmVzdWx0Lndpbm5lciA9IENBTENfQVRUQUNLX1JFU1VMVFMuQVRUQUNLO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn0iLCJpbXBvcnQgeyBTVEVQX1RZUEUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRQb3NpdGlvbk9iamVjdCwgc29tZUVxdWFsUG9zaXRpb24gfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbi8qKlxyXG4gKiDQntCx0YDQsNCx0L7RgtC60LAg0LrQu9C40LrQsCDQv9C+INC/0LvQuNGC0LrQtS5cclxuICog0J/Qu9C40YLQutC4INC80LXQvdGP0Y7RgiDRgdC+0YHRgtC+0Y/QvdC40Y8g0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINGC0LjQv9CwINGF0L7QtNCwLlxyXG4gKlxyXG4gKiBUT0RPOiDQv9GA0LjQstC10YHRgtC4INC6INC10LTQuNC90L7QvNGDINCy0LjQtNGDINGBIFwidHVybkJ1dHRvbkNsaWNrSGFuZGxlclwiLlxyXG4gKiBAcGFyYW0ge2V2ZW50fSBldmVudFxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxyXG4gKiBAcGFyYW0ge0RhdGFIZWxwZXJ9IGFwcERhdGFcclxuICovXHJcbmV4cG9ydCBjb25zdCB0aWxlQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBjb250ZXh0LCBhcHBEYXRhKSA9PiB7XHJcbiAgICBjb25zdCBhdHRyRGF0YXNldCA9IGNvbnRleHQuZGF0YXNldDtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50U3RlcFR5cGVTdGF0ZSA9IGFwcERhdGEuZ2V0U3RhdGVQcm9wZXJ0eSgnY3VycmVudFN0ZXBUeXBlJyk7XHJcbiAgICBjb25zdCBjdXJyZW50VHVyblN0YXRlID0gYXBwRGF0YS5nZXRTdGF0ZVByb3BlcnR5KCdjdXJyZW50VHVybicpO1xyXG5cclxuICAgIGNvbnN0IHRpbGVQbGF5ZXJOYW1lID0gYXR0ckRhdGFzZXQucGxheWVybmFtZTtcclxuICAgIGNvbnN0IHByZXNzZWRQb3NpdGlvbiA9IGdldFBvc2l0aW9uT2JqZWN0KGF0dHJEYXRhc2V0LnBvc2l0aW9uWCwgYXR0ckRhdGFzZXQucG9zaXRpb25ZKTtcclxuXHJcbiAgICAvLyDQntC20LjQtNCw0L3QuNC1INCy0YvQsdC+0YDQsCDRgdCy0L7QtdC5INC60LvQtdGC0LrQuCDQtNC70Y8g0LTQsNC70YzQvdC10LnRiNC10Lkg0LDRgtCw0LrQuC5cclxuICAgIGlmIChjdXJyZW50U3RlcFR5cGVTdGF0ZSA9PT0gU1RFUF9UWVBFLkNIT09TRV9GT1JfQVRUQUNLKSB7XHJcblxyXG4gICAgICAgIC8vINCc0L7QttC90L4g0L3QsNC20LDRgtGMINGC0L7Qu9GM0LrQviDQvdCwINGB0LLQvtGOINC60LvQtdGC0LrRgy5cclxuICAgICAgICBpZiAodGlsZVBsYXllck5hbWUgPT09IGN1cnJlbnRUdXJuU3RhdGUpIHtcclxuICAgICAgICAgICAgYXBwRGF0YS5kb1NlbGVjdEZvckF0dGFjayhwcmVzc2VkUG9zaXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQndCw0LbQvNC40YLQtSDQvdCwINGB0LLQvtGOINC60LvQtdGC0LrRgy4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0J7QttC40LTQsNC90LjQtSDQutC70LjQutCwINC/0L4g0L/Qu9C40YLQutC1INC+0L/Qv9C+0L3QtdC90YLQsCDQtNC70Y8g0YHQvtCy0LXRgNGI0LXQvdC40Y8g0LDRgtCw0LrQuC5cclxuICAgIGlmIChjdXJyZW50U3RlcFR5cGVTdGF0ZSA9PT0gU1RFUF9UWVBFLkFUVEFDSykge1xyXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZUxpc3QgPSBhcHBEYXRhLmdldEF2YWlsYWJsZVBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vINCS0YvQv9C+0LvQvdC40YLRjCDQsNGC0LDQutGDIC8g0YHQsdGA0L7RgdC40YLRjCDRhdC+0LQuXHJcbiAgICAgICAgaWYgKHNvbWVFcXVhbFBvc2l0aW9uKGF2YWlsYWJsZUxpc3QsIHByZXNzZWRQb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgYXBwRGF0YS5kb1Blb3BsZUF0dGFjayhwcmVzc2VkUG9zaXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFwcERhdGEuZG9SZXNldFNlbGVjdEZvckF0dGFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDQntC20LjQtNCw0L3QuNC1INCy0YvQsdC+0YDQsCDRgdCy0L7QuNGFINC60LvQtdGC0L7QuiDQtNC70Y8g0YDQsNC30LTQsNGH0LggcG93ZXIuXHJcbiAgICBpZiAoY3VycmVudFN0ZXBUeXBlU3RhdGUgPT09IFNURVBfVFlQRS5HSVZFX1BPV0VSKSB7XHJcbiAgICAgICAgYXBwRGF0YS5kb0dpdmVQb3dlcih0aWxlUGxheWVyTmFtZSwgcHJlc3NlZFBvc2l0aW9uKTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHhcclxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSB5XHJcbiAqIEByZXR1cm4ge29iamVjdH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRQb3NpdGlvbk9iamVjdCA9ICh4LCB5KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IE51bWJlcih4KSxcclxuICAgICAgICB5OiBOdW1iZXIoeSlcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqMVxyXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqMlxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVxdWFsUG9zaXRpb24gPSAob2JqMSwgb2JqMikgPT4gb2JqMS54ID09PSBvYmoyLnggJiYgb2JqMS55ID09PSBvYmoyLnk7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHthcnJheX0gcG9zaXRpb25MaXN0XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwb3NpdGlvblxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNvbWVFcXVhbFBvc2l0aW9uID0gKHBvc2l0aW9uTGlzdCwgcG9zaXRpb24pID0+IHtcclxuICAgIHJldHVybiBwb3NpdGlvbkxpc3Quc29tZShpdGVtID0+IGVxdWFsUG9zaXRpb24oaXRlbSwgcG9zaXRpb24pKTtcclxufSIsImltcG9ydCB7IFJlbmRlckhlbHBlciB9IGZyb20gJy4uL2xpYnJhcnknO1xyXG5pbXBvcnQgeyBDT01NT05fRE9NX0lEUyB9IGZyb20gJy4uL2xpYnJhcnkvcmVuZGVyL2NvbnN0YW50cyc7XHJcblxyXG5pbXBvcnQgeyBidWlsZEhleGFnb25UaWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL0hleGFnb25UaWxlJztcclxuaW1wb3J0IHsgQWRkaXRpb25hbEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL0FkZGl0aW9uYWxGaWVsZCc7XHJcbmltcG9ydCB7IFBPV0VSX0RPTV9JRFMsIFRFWFRTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBidWlsZFRhYmxlIH0gZnJvbSAnLi9jb21wb25lbnRzL1RhYmxlJztcclxuXHJcbi8qKlxyXG4gKiDQktGB0ZEg0YfRgtC+INGB0LLRj9C30LDQvdC+INGBINCy0LjQt9GD0LDQu9GM0L3Ri9C8INC+0YLQvtCx0YDQsNC20LXQvdC40LXQvCDQuNCz0YDRiy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQb3dlclJlbmRlciBleHRlbmRzIFJlbmRlckhlbHBlciB7XHJcblxyXG4gICAgY3JlYXRlQXBwKG1hdHJpeCkge1xyXG4gICAgICAgIGNvbnN0IGJhc2VGb3JtID0gdGhpcy5nZXRCYXNlRm9ybSgpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhc2VGb3JtKTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVNYXRyaXgobWF0cml4KTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUFkZGl0aW9uYWxJbmZvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQodC+0LfQtNCw0ZHRgiDRjdC70LXQvNC10L3RgiDQsiBET00uXHJcbiAgICAgKiDQrdC70LXQvNC10L3RgiDRj9Cy0LvRj9C10YLRgdGPINGC0LDQsdC70LjRhtC10Lkg0LrQvtGC0L7RgNCw0Y8g0YHRgtGA0L7QuNGC0YHRjyDQv9C+INC/0LXRgNC10LTQsNC90L3QvtC5INC80LDRgtGA0LjRhtC1LlxyXG4gICAgICovXHJcbiAgICBjcmVhdGVNYXRyaXgobWF0cml4KSB7XHJcbiAgICAgICAgaWYgKG1hdHJpeCkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRyaXhNYXAgPSB0aGlzLmJ1aWxkTWFwKG1hdHJpeCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLmdldEVsZW1lbnRCeUlkKFBPV0VSX0RPTV9JRFMuTUFJTl9GSUVMRCk7XHJcblxyXG4gICAgICAgICAgICByb290LmFwcGVuZENoaWxkKG1hdHJpeE1hcCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coVEVYVFMuTUFUUklYX0VSUk9SKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRNYXAobWF0cml4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuVVNFX1RBQkxFID8gYnVpbGRUYWJsZS5jYWxsKHRoaXMsIG1hdHJpeCkgOiB0aGlzLmJ1aWxkRGl2TWF0cml4KG1hdHJpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQndC1INGF0LLQsNGC0LjQu9C+INGE0LDQvdGC0LDQt9C40Lgg0L3QsCDQsdC+0LvQtdC1INC40L3RgtC10YDQtdGB0L3QvtC1INC90LDQt9Cy0LDQvdC40LUuXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUFkZGl0aW9uYWxJbmZvKCkge1xyXG4gICAgICAgIGNvbnN0IHJvb3ROb2RlID0gdGhpcy5nZXRBZGRpdGlvbmFsTm9kZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWxGaWVsZCA9IG5ldyBBZGRpdGlvbmFsRmllbGRDb21wb25lbnQodGhpcy5oYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWxGaWVsZC5wYXN0SW4ocm9vdE5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkRGl2VGlsZShpdGVtLCBjb250ZW50TWV0aG9kcykge1xyXG4gICAgICAgIHJldHVybiBidWlsZEhleGFnb25UaWxlKGl0ZW0sIGNvbnRlbnRNZXRob2RzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXJlbmRlckRpdlRpbGUodGlsZSkge1xyXG4gICAgICAgIGNvbnN0IHt4LCB5fSA9IHRpbGUucG9zaXRpb247XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbW1vbk1hcCA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoQ09NTU9OX0RPTV9JRFMuTUFJTik7XHJcbiAgICAgICAgY29uc3Qgcm93Tm9kZXMgPSBjb21tb25NYXAuZmlyc3RDaGlsZDtcclxuICAgICAgICBjb25zdCBvbGROb2RlID0gcm93Tm9kZXMuY2hpbGROb2Rlc1t5XS5jaGlsZE5vZGVzW3hdO1xyXG4gICAgICAgIGNvbnN0IHRpbGVOb2RlID0gdGhpcy5idWlsZERpdlRpbGUodGlsZSwgdGhpcy5nZXRDb250ZW50TWV0aG9kcygpKTtcclxuXHJcbiAgICAgICAgcm93Tm9kZXMuY2hpbGROb2Rlc1t5XS5yZXBsYWNlQ2hpbGQodGlsZU5vZGUsIG9sZE5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcmVuZGVyVGFibGVUaWxlKHRpbGUpIHtcclxuICAgICAgICBjb25zdCB0ZE5vZGUgPSBidWlsZFRELmNhbGwodGhpcywgdGlsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbW1vbk1hcCA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoQ09NTU9OX0RPTV9JRFMuTUFJTik7XHJcbiAgICAgICAgY29uc3QgdHJOb2RlID0gY29tbW9uTWFwLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0cicpW3RpbGUucG9zaXRpb24ueV07XHJcbiAgICAgICAgY29uc3Qgb2xkVGQgPSB0ck5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RkJylbdGlsZS5wb3NpdGlvbi54XTtcclxuXHJcbiAgICAgICAgdHJOb2RlLnJlcGxhY2VDaGlsZCh0ZE5vZGUsIG9sZFRkKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBvd2VyUmVuZGVyIH0gZnJvbSAnLi9SZW5kZXInO1xyXG5pbXBvcnQgeyBUVVJOX0JVVFRPTl9FVkVOVF9UWVBFUywgTUFUUklYX1RZUEVTLCBTVEVQX1RZUEUsIERFVl9CVVRUT05fQ0FQVElPTlMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqINCS0YHRkSDRh9GC0L4g0YHQstGP0LfQsNC90L4g0YEg0LLQuNC30YPQsNC70YzQvdGL0Lwg0L7RgtC+0LHRgNCw0LbQtdC90LjQtdC8INC40LPRgNGLLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvd2VyUmVuZGVyQVBJIGV4dGVuZHMgUG93ZXJSZW5kZXIge1xyXG5cclxuICAgIHJlcmVuZGVyVGlsZSh0aWxlLCBtYXRyaXhUeXBlKSB7XHJcbiAgICAgICAgaWYgKG1hdHJpeFR5cGUgPT09IE1BVFJJWF9UWVBFUy5IRVhBR09OKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVyZW5kZXJEaXZUaWxlKHRpbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1hdHJpeFR5cGUgPT09IE1BVFJJWF9UWVBFUy5TSU1QTEUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXJlbmRlclRhYmxlVGlsZSh0aWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVyZW5kZXJUdXJuQnV0dG9uKHR5cGUsIGRhdGEpIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gVFVSTl9CVVRUT05fRVZFTlRfVFlQRVMuQUNUSVZFX1RVUk5fQlVUVE9OKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbEZpZWxkLmFjdGl2ZVR1cm5WaWV3KGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFRVUk5fQlVUVE9OX0VWRU5UX1RZUEVTLkhJR0hMSUdIVCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxGaWVsZC5idXR0b25IaWdobGlnaHQoZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gVFVSTl9CVVRUT05fRVZFTlRfVFlQRVMuQUNUSVZFX0dJRlRfVklFVykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxGaWVsZC5hY3RpdmVHaWZ0VmlldyhkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qaWYgKHR5cGUgPT09ICdkZXZfQXV0b0dpZnRBY3RpdmUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbEZpZWxkLmRldkJ1dHRvbkNoYW5nZSh0eXBlLCBkYXRhKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgLyppZiAodHlwZSA9PT0gJ2RldjFfaGlnaGxpZ2h0Jykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxGaWVsZC5kZXZCdXR0b25IaWdobGlnaHQodHlwZSwgZGF0YSk7XHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RlcFR5cGUgLSDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIgc3RlcFR5cGUgZGV2LdC60L3QvtC/0LrQsCDQstGL0L/QvtC70L3Rj9C10YIg0YDQsNC30L3Ri9C1INC00LXQudGB0YLQstC40Y8uXHJcbiAgICAgKi9cclxuICAgIHNob3dEZXZCdXR0b24oc3RlcFR5cGUpIHtcclxuICAgICAgICBpZiAoc3RlcFR5cGUgPT09IFNURVBfVFlQRS5DSE9PU0VfRk9SX0FUVEFDSykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxGaWVsZC5zaG93RGV2QnV0dG9uKERFVl9CVVRUT05fQ0FQVElPTlMuTUFLRV9NT1ZFKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGVwVHlwZSA9PT0gU1RFUF9UWVBFLkdJVkVfUE9XRVIpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsRmllbGQuc2hvd0RldkJ1dHRvbihERVZfQlVUVE9OX0NBUFRJT05TLkdJVkVfUE9XRVIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9saWJyYXJ5JztcclxuXHJcbmltcG9ydCB7IFR1cm5CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL1R1cm5CdXR0b24nO1xyXG5pbXBvcnQgeyBMT0dfQ0xBU1MsIFRFWFRTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgSEFORExFUl9UWVBFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiDQlNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9C1INC/0L7Qu9GPINC00LvRjyDQuNCz0YDRiy5cclxuICog0JrQvdC+0L/QutCwINGB0LvQtdC00YPRjtGJ0LXQs9C+INGF0L7QtNCwLlxyXG4gKiDQm9C+0LPQuNGA0L7QstCw0L3QuNC1LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFkZGl0aW9uYWxGaWVsZENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaGFuZGxlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgdGhpcy50aWxlQ2xhc3NOYW1lID0gTE9HX0NMQVNTLlRJTEU7XHJcbiAgICAgICAgdGhpcy5idXR0b25DbGFzc05hbWUgPSBMT0dfQ0xBU1MuQlVUVE9OO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbkVsZW1lbnQgPSBuZXcgVHVybkJ1dHRvbkNvbXBvbmVudChoYW5kbGVyLCBIQU5ETEVSX1RZUEUuVFVSTl9CVVRUT05fQ0xJQ0ssIFRFWFRTLk5FWFRfVFVSTik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5nZXROZXdFbGVtZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV3RWxlbWVudCgpIHtcclxuICAgICAgICBjb25zdCBiYXNlTm9kZSA9IHRoaXMuZ2V0RGl2KCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uRWxlbWVudC5wYXN0SW4oYmFzZU5vZGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gYmFzZU5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXR1c1xyXG4gICAgICovXHJcbiAgICBidXR0b25IaWdobGlnaHQoc3RhdHVzKSB7XHJcbiAgICAgICAgc3RhdHVzID8gdGhpcy5idXR0b25FbGVtZW50LmhpZ2hsaWdodE9uKCkgOiB0aGlzLmJ1dHRvbkVsZW1lbnQuaGlnaGxpZ2h0T2ZmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXR1c1xyXG4gICAgICovXHJcbiAgICBkZXZCdXR0b25IaWdobGlnaHQoc3RhdHVzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2QnV0dG9uRWxlbWVudDEpIHtcclxuICAgICAgICAgICAgc3RhdHVzID8gdGhpcy5kZXZCdXR0b25FbGVtZW50MS5oaWdobGlnaHRPbigpIDogdGhpcy5kZXZCdXR0b25FbGVtZW50MS5oaWdobGlnaHRPZmYoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSB7IGhpZ2hsaWdodCwgYW1vdW50IH1cclxuICAgICAqL1xyXG4gICAgYWN0aXZlR2lmdFZpZXcoeyBoaWdobGlnaHQsIGFtb3VudCB9KSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25FbGVtZW50LmNoYW5nZVR1cm5JbmZvKGAke1RFWFRTLkVORF9HSUZUfSAtICR7YW1vdW50fWAsIEhBTkRMRVJfVFlQRS5HSUZUX0VORF9CVVRUT05fQ0xJQ0spO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uSGlnaGxpZ2h0KGhpZ2hsaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZlVHVyblZpZXcoeyBoaWdobGlnaHQgfSkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uRWxlbWVudC5jaGFuZ2VUdXJuSW5mbyhURVhUUy5ORVhUX1RVUk4sIEhBTkRMRVJfVFlQRS5UVVJOX0JVVFRPTl9DTElDSyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25IaWdobGlnaHQoaGlnaGxpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGRldkJ1dHRvbkNoYW5nZSh0eXBlLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kZXZCdXR0b25FbGVtZW50MS5zZXRUZXh0KCfQoNCw0LfQtNCw0YLRjCBwb3dlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JLRgtC+0YDQsNGPINC60L3QvtC/0LrQsC5cclxuICAgICAqL1xyXG4gICAgc2hvd0RldkJ1dHRvbih0ZXh0LCBpc0FjdGl2ZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXZCdXR0b25FbGVtZW50MS5zZXRUZXh0KHRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2QnV0dG9uRWxlbWVudDEgPSBuZXcgVHVybkJ1dHRvbkNvbXBvbmVudCh0aGlzLmhhbmRsZXIsIEhBTkRMRVJfVFlQRS5ERVZfRE9fUkFORE9NXzEsIHRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLmRldkJ1dHRvbkVsZW1lbnQxLnBhc3RJbih0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEhBTkRMRVJfVFlQRSwgQ0VMTF9UWVBFLCBDT05ORUNUX1RZUEUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBDRUxMX0NMQVNTX05BTUUsIENPTE9SLCBIRVhBR09OX0NMQVNTX05BTUVTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0Q2xhc3NCeUNlbGxUeXBlIH0gZnJvbSAnLi4vaGVscGVyJztcclxuaW1wb3J0IHsgQ09NTU9OX0NMQVNTX05BTUVTIH0gZnJvbSAnLi4vLi4vbGlicmFyeS9yZW5kZXIvY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBidWlsZEhleGFnb25UaWxlID0gKHRpbGUsIGNvbnRlbnRNZXRob2RzKSA9PiB7XHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGNvbnRlbnRNZXRob2RzLnRpbGVIYW5kbGVyKGV2ZW50LCB0aGlzLCBIQU5ETEVSX1RZUEUuVElMRV9DTElDSyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGlsZU5vZGUgPSBjb250ZW50TWV0aG9kcy5nZXREaXYoKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBnZXRUaWxlQ29udGVudCh0aWxlLCBjb250ZW50TWV0aG9kcyk7XHJcbiAgICBjb25zdCBwb3dlclZhbHVlID0gY29udGVudE1ldGhvZHMuZ2V0RGl2KCk7XHJcblxyXG4gICAgcG93ZXJWYWx1ZS50ZXh0Q29udGVudCA9IHRpbGUucG93ZXJWYWx1ZTtcclxuICAgIHBvd2VyVmFsdWUuY2xhc3NOYW1lID0gSEVYQUdPTl9DTEFTU19OQU1FUy5QT1dFUl9WQUxVRTtcclxuXHJcbiAgICB0aWxlTm9kZS5hcHBlbmQocG93ZXJWYWx1ZSwgY29udGVudCk7XHJcblxyXG4gICAgaWYgKHRpbGUudHlwZSAhPT0gdW5kZWZpbmVkICYmIHRpbGUudHlwZSAhPT0gQ0VMTF9UWVBFLkNPTk5FQ1RfTElORSkge1xyXG4gICAgICAgIHRpbGVOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICB0aWxlTm9kZS5jbGFzc05hbWUgPSBnZXRDbGFzc0ZvclRpbGVXcmFwKHRpbGUpO1xyXG4gICAgY29udGVudE1ldGhvZHMuc2V0QXR0cmlidXRlSW5UaWxlKHRpbGVOb2RlLCB0aWxlKTtcclxuXHJcbiAgICByZXR1cm4gdGlsZU5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IGdldFRpbGVDb250ZW50ID0gKHRpbGUsIGNvbnRlbnRNZXRob2RzKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwRWxlbSA9IGNvbnRlbnRNZXRob2RzLmdldERpdigpO1xyXG5cclxuICAgIGlmICh0aWxlLnR5cGUgPT09IENFTExfVFlQRS5DT05ORUNUX0xJTkUpIHtcclxuICAgICAgICBjb25zdCBsaW5lID0gY29udGVudE1ldGhvZHMuZ2V0RGl2KCk7XHJcblxyXG4gICAgICAgIGxpbmUuY2xhc3NOYW1lID0gZ2V0Q2xhc3NGb3JDb25uZWN0KHRpbGUuY29ubmVjdFR5cGUpO1xyXG5cclxuICAgICAgICB3cmFwRWxlbS5hcHBlbmQobGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFtDRUxMX1RZUEUuUkVBRFksIENFTExfVFlQRS5XQUlUSU5HX1NFTEVDVF0uaW5jbHVkZXModGlsZS50eXBlKSkge1xyXG4gICAgICAgIGNvbnN0IGhleGFnb24gPSBjb250ZW50TWV0aG9kcy5nZXREaXYoKTtcclxuICAgICAgICBjb25zdCBoZXhhZ29uU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgICAgICAgaGV4YWdvbi5jbGFzc05hbWUgPSBIRVhBR09OX0NMQVNTX05BTUVTLkhFWEFHT047XHJcblxyXG4gICAgICAgIGhleGFnb24uYXBwZW5kKGhleGFnb25TcGFuKTtcclxuICAgICAgICB3cmFwRWxlbS5hcHBlbmQoaGV4YWdvbik7XHJcbiAgICB9XHJcblxyXG4gICAgd3JhcEVsZW0uY2xhc3NOYW1lID0gYCR7SEVYQUdPTl9DTEFTU19OQU1FUy5USUxFX0hFWEFHT059ICR7Q09NTU9OX0NMQVNTX05BTUVTLkZMRVh9YDtcclxuXHJcbiAgICBpZiAodGlsZS5jb2xvcikge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yQ2xhc3MgPSBnZXRDbGFzc0J5Q29sb3IodGlsZS5jb2xvcik7XHJcblxyXG4gICAgICAgIHdyYXBFbGVtLmNsYXNzTmFtZSA9IGAke3dyYXBFbGVtLmNsYXNzTmFtZX0gJHtjb2xvckNsYXNzfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdyYXBFbGVtO1xyXG59XHJcblxyXG5jb25zdCBnZXRDbGFzc0ZvclRpbGVXcmFwID0gaXRlbSA9PiB7XHJcbiAgICBjb25zdCBieUNlbGxUeXBlID0gZ2V0Q2xhc3NCeUNlbGxUeXBlKGl0ZW0udHlwZSk7XHJcbiAgICBsZXQgcmVzdWx0ID0gQ0VMTF9DTEFTU19OQU1FLldSQVA7XHJcblxyXG4gICAgaWYgKGJ5Q2VsbFR5cGUpIHtcclxuICAgICAgICByZXN1bHQgPSBgJHtyZXN1bHR9ICR7YnlDZWxsVHlwZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldENsYXNzRm9yQ29ubmVjdCA9IGNvbm5lY3RUeXBlID0+IHtcclxuICAgIHN3aXRjaCAoY29ubmVjdFR5cGUpIHtcclxuICAgICAgICBjYXNlIENPTk5FQ1RfVFlQRS5MRUZUX1RPX0JPVFRPTTogcmV0dXJuIEhFWEFHT05fQ0xBU1NfTkFNRVMuTEVGVF9UT19CT1RUT007XHJcbiAgICAgICAgY2FzZSBDT05ORUNUX1RZUEUuUklHSFRfVE9fQk9UVE9NOiByZXR1cm4gSEVYQUdPTl9DTEFTU19OQU1FUy5SSUdIVF9UT19CT1RUT007XHJcbiAgICAgICAgY2FzZSBDT05ORUNUX1RZUEUuTElORTogcmV0dXJuIEhFWEFHT05fQ0xBU1NfTkFNRVMuTElORTtcclxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gQ09MT1IuREVGQVVMVDtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZ2V0Q2xhc3NCeUNvbG9yID0gY29sb3IgPT4ge1xyXG4gICAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgICAgIGNhc2UgQ09MT1IuR1JFRU46IHJldHVybiBIRVhBR09OX0NMQVNTX05BTUVTLlRJTEVfR1JFRU47XHJcbiAgICAgICAgY2FzZSBDT0xPUi5SRUQ6IHJldHVybiBIRVhBR09OX0NMQVNTX05BTUVTLlRJTEVfUkVEO1xyXG4gICAgICAgIGNhc2UgQ09MT1IuTUFHRU5UQTogcmV0dXJuIEhFWEFHT05fQ0xBU1NfTkFNRVMuVElMRV9NQUdFTlRBO1xyXG4gICAgICAgIGNhc2UgQ09MT1IuQkxVRTogcmV0dXJuIEhFWEFHT05fQ0xBU1NfTkFNRVMuVElMRV9CTFVFO1xyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBDT0xPUi5ERUZBVUxUO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgZ2V0UG93ZXJUaWxlUmVuZGVyRWxlbWVudCB9IGZyb20gJy4vcG93ZXJUaWxlJztcclxuaW1wb3J0IHsgQ0VMTF9DTEFTU19OQU1FIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgSEFORExFUl9UWVBFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0Q2xhc3NCeUNlbGxUeXBlIH0gZnJvbSAnLi4vaGVscGVyJztcclxuXHJcbi8qKlxyXG4gKiDQodC+0LfQtNCw0ZHQvCDRgtCw0LHQu9C40YbRgyDQtNC70Y8g0L/RgNC40LvQvtC20LXQvdC40Y8uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUYWJsZShtYXRyaXgpIHtcclxuICAgIGNvbnN0IHRhYmxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcblxyXG4gICAgbWF0cml4LmZvckVhY2goKHJvd0xpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgcm93RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JkZXInLCBpbmRleCk7XHJcblxyXG4gICAgICAgIHJvd0xpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2VsbEVsZW1lbnQgPSBidWlsZFRELmNhbGwodGhpcywgaXRlbSk7XHJcblxyXG4gICAgICAgICAgICByb3dFbGVtZW50LmFwcGVuZENoaWxkKGNlbGxFbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YWJsZUVsZW1lbnQuYXBwZW5kQ2hpbGQocm93RWxlbWVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGFibGVFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRURChpdGVtKSB7XHJcbiAgICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IHRoaXMuaGFuZGxlcjtcclxuICAgIGNvbnN0IHRkSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIG9uQ2xpY2tIYW5kbGVyKGV2ZW50LCB0aGlzLCBIQU5ETEVSX1RZUEUuVElMRV9DTElDSyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZ2V0UG93ZXJUaWxlUmVuZGVyRWxlbWVudChpdGVtKTtcclxuXHJcbiAgICBjZWxsRWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIGNlbGxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGRIYW5kbGVyKTtcclxuICAgIGNlbGxFbGVtZW50LmNsYXNzTmFtZSA9IGdldENsYXNzRm9yVEQoaXRlbSk7XHJcbiAgICBzZXRBdHRyaWJ1dGVJbkNlbGwoY2VsbEVsZW1lbnQsIGl0ZW0pO1xyXG5cclxuICAgIHJldHVybiBjZWxsRWxlbWVudDtcclxufVxyXG5cclxuY29uc3QgZ2V0Q2xhc3NGb3JURCA9IGl0ZW0gPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IENFTExfQ0xBU1NfTkFNRS5XUkFQO1xyXG4gICAgY29uc3QgYnlDZWxsVHlwZSA9IGdldENsYXNzQnlDZWxsVHlwZShpdGVtLnR5cGUpO1xyXG5cclxuICAgIGlmIChieUNlbGxUeXBlKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gYCR7cmVzdWx0fSAke2J5Q2VsbFR5cGV9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICog0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LDRgtGA0LjQsdGD0YLRiyDQtNC70Y8g0LrQu9C10YLQutC4LlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY2VsbEVsZW1lbnQgLSBET00t0Y3Qu9C10LzQtdC90YIg0LrQu9C10YLQutC4INGC0LDQsdC70LjRhtGLLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlIC0g0LDRgtGA0LjQsdGD0YLRiy5cclxuICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeCAtXHJcbiAqL1xyXG5jb25zdCBzZXRBdHRyaWJ1dGVJbkNlbGwgPSAoY2VsbEVsZW1lbnQsIGF0dHJpYnV0ZSwgcHJlZml4KSA9PiB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlKSB7XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGF0dHJpYnV0ZVtrZXldO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50VmFsdWUgPT09ICdvYmplY3QnICYmIGN1cnJlbnRWYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlSW5DZWxsKGNlbGxFbGVtZW50LCBjdXJyZW50VmFsdWUsIGtleSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsRWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtJHtwcmVmaXggPyBwcmVmaXggKyAnLScgOiAnJ30ke2tleX1gLCBhdHRyaWJ1dGVba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbGlicmFyeSc7XHJcblxyXG5pbXBvcnQgeyBMT0dfQ0xBU1MgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqINCa0L7QvNC/0L7QvdC10L3RgiDQutC90L7Qv9C60Lgg0LTQu9GPINGB0LzQtdC90Ysg0YHQvtGB0YLQvtGP0L3QuNGPINGF0L7QtNCwLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFR1cm5CdXR0b25Db21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIsIHR5cGUsIHRleHQpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlclR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMudGlsZUNsYXNzTmFtZSA9IExPR19DTEFTUy5USUxFO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ2xhc3NOYW1lID0gTE9HX0NMQVNTLkJVVFRPTjtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5nZXROZXdFbGVtZW50KHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5ld0VsZW1lbnQodGV4dCkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvblRpbGUgPSB0aGlzLmdldERpdih0aGlzLnRpbGVDbGFzc05hbWUpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbk5vZGUgPSB0aGlzLmdldERpdih0aGlzLmJ1dHRvbkNsYXNzTmFtZSwgbnVsbCwgdGV4dCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uTm9kZSA9IGJ1dHRvbk5vZGU7XHJcbiAgICAgICAgYnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMuY2xpY2tIYW5kbGVyKGV2ZW50KSk7XHJcbiAgICAgICAgYnV0dG9uVGlsZS5hcHBlbmQoYnV0dG9uTm9kZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBidXR0b25UaWxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcihldmVudCwgbnVsbCwgdGhpcy5oYW5kbGVyVHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlnaGxpZ2h0T24oKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25Ob2RlLmNsYXNzTmFtZSA9IGAke3RoaXMuYnV0dG9uQ2xhc3NOYW1lfSAke0xPR19DTEFTUy5CVVRUT05fU0VMRUNURUR9YDtcclxuICAgIH1cclxuXHJcbiAgICBoaWdobGlnaHRPZmYoKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25Ob2RlLmNsYXNzTmFtZSA9IHRoaXMuYnV0dG9uQ2xhc3NOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRleHQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbk5vZGUudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUdXJuSW5mbyhjYXB0aW9uLCB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRUZXh0KGNhcHRpb24pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlclR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgcmVuZGVyVXRpbHMgfSBmcm9tICcuLi8uLi9saWJyYXJ5JztcclxuaW1wb3J0IHsgZ2V0Q2xhc3NCeUNvbG9yIH0gZnJvbSAnLi4vaGVscGVyJztcclxuaW1wb3J0IHsgQ0VMTF9DTEFTU19OQU1FLCBDT05ORUNUX0NMQVNTX05BTUUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBDT05ORUNUX1RZUEUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgZ2V0Q29udGVudFdyYXAgPSAoKSA9PiByZW5kZXJVdGlscy5nZXREaXYoJ2NlbGxfcm93IGZsZXgganVzdGlmeVNwYWNlQmV0d2VlbicpO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtIC0g0YHQstC+0LnRgdGC0LLQsCBjb2xvciDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YPRgdGC0YvQvC5cclxuICovXHJcbmNvbnN0IGdldFdyYXBFbGVtZW50ID0gaXRlbSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gcmVuZGVyVXRpbHMuZ2V0RW1wdHlEaXYoKTtcclxuICAgIGxldCBlbGVtZW50Q2xhc3NOYW1lID0gYCR7Q0VMTF9DTEFTU19OQU1FLkNPTU1PTn0gZmxleGA7XHJcblxyXG4gICAgaWYgKGl0ZW0uY29sb3I/LnZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgY29sb3JDbGFzcyA9IGdldENsYXNzQnlDb2xvcihpdGVtLmNvbG9yLnZhbHVlKTtcclxuICAgICAgICBlbGVtZW50Q2xhc3NOYW1lID0gYCR7ZWxlbWVudENsYXNzTmFtZX0gJHtjb2xvckNsYXNzfWA7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50Q2xhc3NOYW1lO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICog0KDQtdC90LTQtdGAINCy0LXRgNGF0L3QtdC5INGH0LDRgdGC0Lgg0LrQu9C10YLQutC4LlxyXG4gKiDQndCwINC00LDQvdC90YvQuSDQvNC+0LzQtdC90YIg0LXRgdGC0Ywg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDRgtC+0LvRjNC60L4g0L/RgNC+0L/QuNGB0YvQstCw0YLRjCDQstC10YDRhdC90Y7RjiDQtNC10LLRg9GOINGB0LLQt9GP0YwuXHJcbiAqIFRPRE86INC90LAg0LTQsNC90L3Ri9C5INC80L7QvNC10L3RgiBtaWRkbGUgLSDRjdGC0L4g0LvQuNGI0L3QuNC5INGN0LvQtdC80LXQvdGCLiDQnNC+0LbQvdC+INGD0LHRgNCw0YLRjC5cclxuICogQHBhcmFtIHthcnJheX0gY29ubmVjdExpc3QgLSDRgdC/0LjRgdC+0Log0YHQvtC10LTQuNC90LXQvdC40LUg0YHRgtGA0L7QutCw0LzQuC5cclxuICovXHJcbmNvbnN0IGdldFRvcEVsZW1lbnQgPSAoeyBjb25uZWN0TGlzdCB9KSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZ2V0Q29udGVudFdyYXAoKTtcclxuICAgIGNvbnN0IGVtcHR5Q2xhc3MgPSBgJHtDT05ORUNUX0NMQVNTX05BTUUuQkFTRX0gJHtDT05ORUNUX0NMQVNTX05BTUUuRU1QVFl9YDtcclxuXHJcbiAgICBjb25zdCBsZWZ0ID0gcmVuZGVyVXRpbHMuZ2V0RGl2KENPTk5FQ1RfQ0xBU1NfTkFNRS5CQVNFKTtcclxuICAgIGNvbnN0IG1pZGRsZSA9IHJlbmRlclV0aWxzLmdldERpdihlbXB0eUNsYXNzKTtcclxuICAgIGNvbnN0IHJpZ2h0ID0gcmVuZGVyVXRpbHMuZ2V0RGl2KGVtcHR5Q2xhc3MpO1xyXG5cclxuICAgIGlmIChjb25uZWN0TGlzdC5pbmNsdWRlcyhDT05ORUNUX1RZUEUuTEVGVF9UT1ApKSB7XHJcbiAgICAgICAgbGVmdC5jbGFzc05hbWUgPSBgJHtsZWZ0LmNsYXNzTmFtZX0gJHtDT05ORUNUX0NMQVNTX05BTUUuRElBR09OQUxfTEVGVH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZWZ0LmNsYXNzTmFtZSA9IGAke2xlZnQuY2xhc3NOYW1lfSAke0NPTk5FQ1RfQ0xBU1NfTkFNRS5FTVBUWX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kKGxlZnQsIG1pZGRsZSwgcmlnaHQpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICog0JzQvtCz0YPRgiDQsiDRgtC+0Lwg0YfQuNGB0LvQtSDQv9GA0L7RgdGC0LDQstC70Y/RgtGM0YHRjyDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3Ri9C1INGB0LLRj9C30LguXHJcbiAqL1xyXG5jb25zdCBnZXRNaWRkbGVFbGVtZW50ID0gKHsgcG93ZXJWYWx1ZSwgY29ubmVjdExpc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGdldENvbnRlbnRXcmFwKCk7XHJcbiAgICBsZXQgY29udGVudENsYXNzID0gYCR7Q09OTkVDVF9DTEFTU19OQU1FLkJBU0V9ICR7Q09OTkVDVF9DTEFTU19OQU1FLkVNUFRZfWA7XHJcblxyXG4gICAgaWYgKGNvbm5lY3RMaXN0LmluY2x1ZGVzKENPTk5FQ1RfVFlQRS5MSU5FKSkge1xyXG4gICAgICAgIGNvbnRlbnRDbGFzcyA9IGAke2NvbnRlbnRDbGFzc30gJHtDT05ORUNUX0NMQVNTX05BTUUuTElORX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxlZnQgPSByZW5kZXJVdGlscy5nZXREaXYoY29udGVudENsYXNzKTtcclxuICAgIGNvbnN0IG1pZGRsZSA9IHJlbmRlclV0aWxzLmdldERpdihjb250ZW50Q2xhc3MpO1xyXG4gICAgY29uc3QgcmlnaHQgPSByZW5kZXJVdGlscy5nZXREaXYoY29udGVudENsYXNzKTtcclxuXHJcbiAgICBpZiAocG93ZXJWYWx1ZSkge1xyXG4gICAgICAgIG1pZGRsZS50ZXh0Q29udGVudCA9IHBvd2VyVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmQobGVmdCwgbWlkZGxlLCByaWdodCk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldEJvdHRvbUVsZW1lbnQgPSAoeyBjb25uZWN0TGlzdCB9KSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZ2V0Q29udGVudFdyYXAoKTtcclxuICAgIGNvbnN0IGVtcHR5Q2xhc3MgPSBgJHtDT05ORUNUX0NMQVNTX05BTUUuQkFTRX0gJHtDT05ORUNUX0NMQVNTX05BTUUuRU1QVFl9YFxyXG5cclxuICAgIGNvbnN0IGxlZnQgPSByZW5kZXJVdGlscy5nZXREaXYoZW1wdHlDbGFzcyk7XHJcbiAgICBjb25zdCBtaWRkbGUgPSByZW5kZXJVdGlscy5nZXREaXYoZW1wdHlDbGFzcyk7XHJcbiAgICBjb25zdCByaWdodCA9IHJlbmRlclV0aWxzLmdldERpdihDT05ORUNUX0NMQVNTX05BTUUuQkFTRSk7XHJcblxyXG4gICAgaWYgKGNvbm5lY3RMaXN0LmluY2x1ZGVzKENPTk5FQ1RfVFlQRS5SSUdIVF9CT1RUT00pKSB7XHJcbiAgICAgICAgcmlnaHQuY2xhc3NOYW1lID0gYCR7cmlnaHQuY2xhc3NOYW1lfSAke0NPTk5FQ1RfQ0xBU1NfTkFNRS5ESUFHT05BTF9SSUdIVH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByaWdodC5jbGFzc05hbWUgPSBgJHtyaWdodC5jbGFzc05hbWV9ICR7Q09OTkVDVF9DTEFTU19OQU1FLkVNUFRZfWA7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmQobGVmdCwgbWlkZGxlLCByaWdodCk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQkdCw0LfQvtCy0LDRjyBET00t0LrQu9C10YLQutCwINC00LvRjyDQuNCz0YDRiyDRgdC+INCy0YHQtdC8INC90LDQv9C+0LvQvdC10L3QuNC10LwuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtIC0gY2xhc3NOYW1lLCBjb2xvcj86IHsgc3RlcFR5cGUsIHZhbHVlKGNvbG9yKSB9LCBjb25uZWN0TGlzdDogW10sIHBvc2l0aW9uLCBwb3dlclZhbHVlLCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFBvd2VyVGlsZVJlbmRlckVsZW1lbnQgPSBpdGVtID0+IHtcclxuICAgIGNvbnN0IHdyYXAgPSBnZXRXcmFwRWxlbWVudChpdGVtKTtcclxuICAgIGNvbnN0IG1ldGhvZExpc3QgPSBbZ2V0VG9wRWxlbWVudCwgZ2V0TWlkZGxlRWxlbWVudCwgZ2V0Qm90dG9tRWxlbWVudF07XHJcblxyXG4gICAgbWV0aG9kTGlzdC5mb3JFYWNoKG1ldGhvZCA9PiB3cmFwLmFwcGVuZChtZXRob2QoaXRlbSkpKTtcclxuXHJcbiAgICByZXR1cm4gd3JhcDtcclxufSIsImV4cG9ydCBjb25zdCBDRUxMX0NMQVNTX05BTUUgPSB7XHJcbiAgICBDT01NT046ICdjZWxsJyxcclxuICAgIEVNUFRZOiAnY2VsbF9lbXB0eScsXHJcbiAgICBXQUlUSU5HOiAnY2VsbF93YWl0aW5nJyxcclxuICAgIFdSQVA6ICdjZWxsX3dyYXAnLFxyXG4gICAgR1JFRU46ICdjZWxsX2dyZWVuJyxcclxuICAgIFJFRDogJ2NlbGxfcmVkJyxcclxuICAgIE1BR0VOVEE6ICdjZWxsX21hZ2VudGEnLFxyXG4gICAgQkxVRTogJ2NlbGxfYmx1ZScsXHJcbiAgICBXQUlUSU5HX1NFTEVDVDogJ2NlbGxfd2FpdGluZ1NlbGVjdCcsXHJcbiAgICBTRUxFQ1RFRDogJ2NlbGxfc2VsZWN0ZWQnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEhFWEFHT05fQ0xBU1NfTkFNRVMgPSB7XHJcbiAgICBUSUxFX0hFWEFHT046ICd0aWxlX2hleGFnb24nLFxyXG4gICAgSEVYQUdPTjogJ2hleGFnb24nLFxyXG4gICAgUE9XRVJfVkFMVUU6ICdoZXhhZ29uX3Bvd2VyVmFsdWUnLFxyXG5cclxuICAgIFRJTEVfQkxVRTogJ3RpbGVfYmx1ZScsXHJcbiAgICBUSUxFX01BR0VOVEE6ICd0aWxlX21hZ2VudGEnLFxyXG4gICAgVElMRV9SRUQ6ICd0aWxlX3JlZCcsXHJcbiAgICBUSUxFX0dSRUVOOiAndGlsZV9ncmVlbicsXHJcblxyXG4gICAgTEVGVF9UT19CT1RUT006ICd0aWxlX2hleGFnb25fbGluZV8xJyxcclxuICAgIFJJR0hUX1RPX0JPVFRPTTogJ3RpbGVfaGV4YWdvbl9saW5lXzInLFxyXG4gICAgTElORTogJ3RpbGVfaGV4YWdvbl9saW5lXzMnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ09OTkVDVF9DTEFTU19OQU1FID0ge1xyXG4gICAgQkFTRTogJ2NlbGxfY29ubmVjdCcsXHJcbiAgICBESUFHT05BTF9MRUZUOiAnY2VsbF9jb25uZWN0X2RpYWdvbmFsTGVmdCcsXHJcbiAgICBESUFHT05BTF9SSUdIVDogJ2NlbGxfY29ubmVjdF9kaWFnb25hbFJpZ2h0JyxcclxuICAgIExJTkU6ICdjZWxsX2Nvbm5lY3RfbGluZScsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUiA9IHtcclxuICAgIEdSRUVOOiAnZ3JlZW4nLFxyXG4gICAgUkVEOiAncmVkJyxcclxuICAgIE1BR0VOVEE6ICdtYWdlbnRhJyxcclxuICAgIEJMVUU6ICdibHVlJyxcclxuICAgIERFRkFVTFQ6ICcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19DTEFTUyA9IHtcclxuICAgIC8vIFdSQVA6ICdsb2dfd3JhcCcsXHJcbiAgICBUSUxFOiAnbG9nX3RpbGUnLFxyXG4gICAgQlVUVE9OOiAnbG9nX2J1dHRvbicsXHJcbiAgICBCVVRUT05fU0VMRUNURUQ6ICdsb2dfYnV0dG9uX3NlbGVjdGVkJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRFWFRTID0ge1xyXG4gICAgTkVYVF9UVVJOOiAn0JfQsNCy0LXRgNGI0LjRgtGMINGF0L7QtCcsXHJcbiAgICBFTkRfR0lGVDogJ9CX0LDQstC10YDRiNC40YLRjCDRgNCw0LfQtNCw0YfRgycsXHJcbiAgICBNQVRSSVhfRVJST1I6ICfQntGI0LjQsdC60LAg0LIg0L/QtdGA0LXQtNCw0L3QvdC+0Lkg0LzQsNGC0YDQuNGG0LUuJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBPV0VSX0RPTV9JRFMgPSB7XHJcbiAgICBUVVJOX0JVVFRPTjogJ3R1cm5CdXR0b24nLCAgICAgIC8vIFRPRE86INC80L7QttC10YIg0L7QutCw0LfQsNGC0YzRgdGPINC70LjRiNC90LjQvC5cclxuICAgIE1BSU5fRklFTEQ6ICdtYWluRmllbGQnLFxyXG59IiwiaW1wb3J0IHsgQ0VMTF9UWVBFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQ0VMTF9DTEFTU19OQU1FLCBDT0xPUiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDbGFzc0J5Q2VsbFR5cGUgPSAodHlwZSkgPT4ge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBDRUxMX1RZUEUuRU1QVFk6IHJldHVybiBDRUxMX0NMQVNTX05BTUUuRU1QVFk7XHJcbiAgICAgICAgY2FzZSBDRUxMX1RZUEUuV0FJVElORzogcmV0dXJuIENFTExfQ0xBU1NfTkFNRS5XQUlUSU5HO1xyXG4gICAgICAgIGNhc2UgQ0VMTF9UWVBFLldBSVRJTkdfU0VMRUNUOiByZXR1cm4gQ0VMTF9DTEFTU19OQU1FLldBSVRJTkdfU0VMRUNUO1xyXG4gICAgICAgIGNhc2UgQ0VMTF9UWVBFLlNFTEVDVEVEOiByZXR1cm4gQ0VMTF9DTEFTU19OQU1FLlNFTEVDVEVEO1xyXG4gICAgICAgIGNhc2UgQ0VMTF9UWVBFLlJFQURZOiByZXR1cm4gJyc7XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIENFTExfQ0xBU1NfTkFNRS5FTVBUWTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvclxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0Q2xhc3NCeUNvbG9yID0gY29sb3IgPT4ge1xyXG4gICAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgICAgIGNhc2UgQ09MT1IuR1JFRU46IHJldHVybiBDRUxMX0NMQVNTX05BTUUuR1JFRU47XHJcbiAgICAgICAgY2FzZSBDT0xPUi5SRUQ6IHJldHVybiBDRUxMX0NMQVNTX05BTUUuUkVEO1xyXG4gICAgICAgIGNhc2UgQ09MT1IuTUFHRU5UQTogcmV0dXJuIENFTExfQ0xBU1NfTkFNRS5NQUdFTlRBO1xyXG4gICAgICAgIGNhc2UgQ09MT1IuQkxVRTogcmV0dXJuIENFTExfQ0xBU1NfTkFNRS5CTFVFO1xyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBDT0xPUi5ERUZBVUxUO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHsgUG93ZXJSZW5kZXJBUEkgfSBmcm9tICcuL1JlbmRlckFQSSc7IiwiLyoqXHJcbiAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGA0LDQvdC00L7QvNC90L7QtSDRh9C40YHQu9C+INC/0L4g0L/QtdGA0LXQtNCw0L3QvdGL0Lwg0L/QsNGA0LDQvNC10YLRgNCw0LwuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXguXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4uXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRSYW5kb21OdW1iZXIgPSAobWF4ID0gMTAsIG1pbiA9IDApID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcblxyXG4vKipcclxuICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YDQsNC90LTQvtC80L3QviB0cnVlL2ZhbHNlO1xyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gY2hhbmNlXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tQm9vbGVhbiA9IChjaGFuY2UpID0+IHtcclxuICAgIGxldCBwYXJhbSA9IDE7XHJcblxyXG4gICAgaWYgKGNoYW5jZSA9PT0gMjUpIHtcclxuICAgICAgICBwYXJhbSA9IDM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICEhZ2V0UmFuZG9tTnVtYmVyKHBhcmFtKTtcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgUE9XRVJfQ09ORklHIH0gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgUG93ZXJHYW1lQXBwIGZyb20gJy4vUG93ZXJHYW1lJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBBUFBfTkFNRSA9ICdwb3dlclZhbHVlJztcclxuY29uc3QgaXNEZXYgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFwcCgpIHtcclxuICAgIGNvbnN0IERPTV9JRFMgPSB7IHJvb3Q6IEFQUF9OQU1FIH07XHJcbiAgICBjb25zdCBwb3dlckdhbWUgPSBuZXcgUG93ZXJHYW1lQXBwKFBPV0VSX0NPTkZJRywgRE9NX0lEUywgaXNEZXYpO1xyXG5cclxuICAgIHBvd2VyR2FtZS5zdGFydCgpO1xyXG59XHJcblxyXG5jcmVhdGVBcHAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=