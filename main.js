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
            x: 7,
            y: 7,
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

module.exports = __webpack_require__.p + "8a51fcfff71d1da107f6.svg";

/***/ }),

/***/ "./src/library/static/free-icon-font-settings.svg":
/*!********************************************************!*\
  !*** ./src/library/static/free-icon-font-settings.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2174c489981fe33f624.svg";

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
const isDev = true;

function createApp() {
    const DOM_IDS = { root: APP_NAME };
    const powerGame = new _PowerGame__WEBPACK_IMPORTED_MODULE_1__["default"](_config__WEBPACK_IMPORTED_MODULE_0__.POWER_CONFIG, DOM_IDS, isDev);

    powerGame.start();
}

createApp();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9Qb3dlckdhbWUuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9kYXRhL0RhdGEuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvZGF0YS9EYXRhQVBJLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2RhdGEvY29tcG9uZW50cy9NYXRyaXguanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvZGF0YS9jb21wb25lbnRzL1N0YXRlLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2RhdGEvY29tcG9uZW50cy9UaWxlLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2RhdGEvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9kYXRhL2NvbXBvbmVudHMvbWF0cml4R2VuZXJhdG9ycy9oZXhhZ29uMS5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9kYXRhL2NvbXBvbmVudHMvbWF0cml4R2VuZXJhdG9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9kYXRhL2NvbXBvbmVudHMvbWF0cml4R2VuZXJhdG9ycy9zcXVhcmUxLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2RhdGEvY29tcG9uZW50cy9tYXRyaXhHZW5lcmF0b3JzL3V0aWxzLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2RhdGEvY29uc3RhbnRzLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2RhdGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvbGlicmFyeS9iYXNlL0NvbmZpZ0hlbHBlci5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L2Jhc2UvYmFzZS5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L2Jhc2UvY29uc3RhbnRzLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2xpYnJhcnkvYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L2RhdGEvRGF0YUhlbHBlci5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L2RhdGEvTWF0cml4LmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2xpYnJhcnkvZGF0YS9TdGF0ZS5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L2RhdGEvY29uc3RhbnRzLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2xpYnJhcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvbGlicmFyeS9yZW5kZXIvUmVuZGVySGVscGVyLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL2xpYnJhcnkvcmVuZGVyL2NvbXBvbmVudHMvQmFzZS5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L3JlbmRlci9jb21wb25lbnRzL0Rpdk1hdHJpeC5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L3JlbmRlci9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9saWJyYXJ5L3JlbmRlci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvbGlicmFyeS9yZW5kZXIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvbGlicmFyeS91dGlscy5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9wb3dlci9Mb2dpY0FQSS5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9wb3dlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9wb3dlci9tYWluLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL3Bvd2VyL3Bvd2VyVHVybi5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9wb3dlci91dGlscy5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9yZW5kZXIvUmVuZGVyLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL3JlbmRlci9SZW5kZXJBUEkuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvcmVuZGVyL2NvbXBvbmVudHMvQWRkaXRpb25hbEZpZWxkLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL3JlbmRlci9jb21wb25lbnRzL0hleGFnb25UaWxlLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL3JlbmRlci9jb21wb25lbnRzL1RhYmxlLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL3JlbmRlci9jb21wb25lbnRzL1R1cm5CdXR0b24uanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvcmVuZGVyL2NvbXBvbmVudHMvcG93ZXJUaWxlLmpzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkLy4vc3JjL3JlbmRlci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvcmVuZGVyL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbnVtYmVycy1kZXN0cm95ZWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL251bWJlcnMtZGVzdHJveWVkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9udW1iZXJzLWRlc3Ryb3llZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qINCi0LDQsdC70LjRhtCwINC40YHQv9C+0LvRjNC30YPQtdC80YvRhSDRhtCy0LXRgtC+0LIgKi9cXHJcXG5cXHJcXG4vKiAjMjgyRTMzIC0g0YHQstC10YLQu9GL0Lkg0YTQvtC9INC00LvRjyDRgtGR0LzQvdC+0Lkg0YLQtdC80YsgKi9cXHJcXG4vKiAjMjcyODIyIC0gbW9ub2thaSDRhNC+0L0gKi9cXHJcXG4vKiAjMTgxOTFEIC0g0KLRkdC80L3Ri9C5INGE0L7QvSAqL1xcclxcbi8qICM2NUFBREQgLSDRgdC40L3QuNC5INGG0LLQtdGCICovXFxyXFxuLyogI0Y5MjY3MiAtIG1vbm9rYWkg0YDQvtC30L7QstC5ICovXFxyXFxuLyogI0E2RTIyRSAtIG1vbm9rYWkg0LfQtdC70ZHQvdGL0LkgKi9cXHJcXG4vKiAjRjhGOEYwIC0gbW9ub2thaSDQsdC10LvRi9C5ICovXFxyXFxuLyogIzAwQ0M5OSAtINC/0YDQuNGP0YLQvdGL0Lkg0LfQtdC70ZHQvdGL0LkgKi9cXHJcXG4vKiAjRkYwMDY2IC0g0YDQvtC30L7QstGL0LkgMiAqL1xcclxcbi8qICNGRjk5OTkgLSDRgNC+0LfQvtCy0LDRjyDRgtC10L3RjCAvINCw0LrRhtC10L3RgiAqL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMTgxOTFEO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwbGljYXRpb24ge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjb2xvcjogI0Y4RjhGMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9pbWcge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGVfaGV4YWdvbiB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1oZXgtc2lkZTogMjJweDtcXHJcXG4gICAgLS1oZXgtcm90YXRlOiAzMGRlZztcXHJcXG59XFxyXFxuXFxyXFxuLmhleGFnb24ge1xcclxcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1oZXgtc2lkZSkgKiAxLjczMik7XFxyXFxuICAgIGhlaWdodDogdmFyKC0taGV4LXNpZGUpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKHZhcigtLWhleC1yb3RhdGUpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfd2FpdGluZ1NlbGVjdCAuaGV4YWdvbiB7XFxyXFxuICAgIGJveC1zaGFkb3c6MCAwIDE4cHggI0ZGOTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLmhleGFnb246aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OjAgMCAyNXB4ICNGOEY4RjA7XFxyXFxufVxcclxcblxcclxcbi5jZWxsX3NlbGVjdGVkIC5oZXhhZ29uIHtcXHJcXG4gICAgYm94LXNoYWRvdzowIDAgMTBweCAjRkYwMDY2O1xcclxcbn1cXHJcXG5cXHJcXG4uaGV4YWdvbjpiZWZvcmUsXFxyXFxuLmhleGFnb246YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5oZXhhZ29uX3Bvd2VyVmFsdWUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDM3cHg7XFxyXFxuICAgIHdpZHRoOiAzN3B4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZXhhZ29uOmJlZm9yZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhleGFnb246YWZ0ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZV9ibHVlIC5oZXhhZ29uOmJlZm9yZSxcXHJcXG4udGlsZV9ibHVlIC5oZXhhZ29uOmFmdGVyLFxcclxcbi50aWxlX2JsdWUgLmhleGFnb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNjVBQUREO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZV9tYWdlbnRhIC5oZXhhZ29uOmJlZm9yZSxcXHJcXG4udGlsZV9tYWdlbnRhIC5oZXhhZ29uOmFmdGVyLFxcclxcbi50aWxlX21hZ2VudGEgLmhleGFnb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRjkyNjcyO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZV9yZWQgLmhleGFnb246YmVmb3JlLFxcclxcbi50aWxlX3JlZCAuaGV4YWdvbjphZnRlcixcXHJcXG4udGlsZV9yZWQgLmhleGFnb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBkYXJrcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZV9ncmVlbiAuaGV4YWdvbjpiZWZvcmUsXFxyXFxuLnRpbGVfZ3JlZW4gLmhleGFnb246YWZ0ZXIsXFxyXFxuLnRpbGVfZ3JlZW4gLmhleGFnb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjQTZFMjJFO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDM1cHg7XFxyXFxuICAgIG1pbi13aWR0aDogMzVweDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbF9yb3cge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUT0RPOiDQstGB0ZEg0YfRgtC+IGNlbGwg0LfQsNC80LXQvdC40YLRjCDQvdCwIHNxdWFyZSwg0LjQt9C90LDRh9Cw0LvRjNC90L4g0LTQtdC70LDQuyDQv9C+0LQg0LrQstCw0LTRgNCw0YIuICovXFxyXFxuLyogVE9ETzog0LLRgNC10LzQtdC90L3Ri9C5INC60L7QvNC80LXQvdGCLdC60L7RgdGC0YvQu9GMICovXFxyXFxuLmNlbGxfZW1wdHkgeyAvKmJhY2tncm91bmQ6ICMyODJFMzM7Ki8gfVxcclxcbi5jZWxsX3dhaXRpbmcgeyBiYWNrZ3JvdW5kOiAjRjkyNjcyOyB9XFxyXFxuXFxyXFxuLmNlbGxfd3JhcCB7XFxyXFxuICAgIC8qcGFkZGluZzogNXB4OyovXFxyXFxuICAgIC8qIFRPRE86INCy0YDQtdC80LXQvdC90YvQuSDQutC+0LzQvNC10L3Rgi3QutC+0YHRgtGL0LvRjCAqL1xcclxcbiAgICAvKmJhY2tncm91bmQ6ICMyNzI4MjI7Ki9cXHJcXG4gICAgLyptaW4taGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDQwcHg7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfd3JhcDpob3ZlcixcXHJcXG4uY2VsbF93YWl0aW5nU2VsZWN0IHtcXHJcXG4gICAgLyotbW96LWJveC1zaGFkb3c6MCAwIDEwcHggIzAwMDsqL1xcclxcbiAgICAvKi13ZWJraXQtYm94LXNoYWRvdzowIDAgMTBweCAjMDAwOyovXFxyXFxuICAgIC8qYm94LXNoYWRvdzowIDAgMTBweCAjRjhGOEYwOyovXFxyXFxufVxcclxcblxcclxcbi5jZWxsX3NlbGVjdGVkIHtcXHJcXG4gICAgLyotbW96LWJveC1zaGFkb3c6MCAwIDEwcHggIzAwMDsqL1xcclxcbiAgICAvKi13ZWJraXQtYm94LXNoYWRvdzowIDAgMTBweCAjMDAwOyovXFxyXFxuICAgIC8qYm94LXNoYWRvdzowIDAgMTBweCAjRkYwMDY2OyovXFxyXFxufVxcclxcblxcclxcblxcclxcbi5jZWxsX2dyZWVuIHsgYmFja2dyb3VuZDogI0E2RTIyRTsgfVxcclxcbi5jZWxsX3JlZCB7IGJhY2tncm91bmQ6IGRhcmtyZWQ7IH1cXHJcXG4uY2VsbF9tYWdlbnRhIHsgYmFja2dyb3VuZDogI0Y5MjY3MjsgfVxcclxcbi5jZWxsX2JsdWUgeyBiYWNrZ3JvdW5kOiAjNjVBQUREOyB9XFxyXFxuXFxyXFxuLnRpbGVfaGV4YWdvbl9saW5lXzEsXFxyXFxuLnRpbGVfaGV4YWdvbl9saW5lXzIsXFxyXFxuLnRpbGVfaGV4YWdvbl9saW5lXzMge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4RjA7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3LjVkZWcpO1xcclxcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3LjVkZWcpO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcuNWRlZyk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3LjVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZV9oZXhhZ29uX2xpbmVfMSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDY0ZGVnKTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XFxyXFxufVxcclxcblxcclxcbi50aWxlX2hleGFnb25fbGluZV8yIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTE2ZGVnKTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxyXFxufVxcclxcblxcclxcbi50aWxlX2hleGFnb25fbGluZV8zIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ0VMTF9DT05ORUNUOiAqL1xcclxcblxcclxcbi5jZWxsX2Nvbm5lY3Qge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbF9jb25uZWN0X2RpYWdvbmFsTGVmdCxcXHJcXG4uY2VsbF9jb25uZWN0X2RpYWdvbmFsUmlnaHQsXFxyXFxuLmNlbGxfY29ubmVjdF9saW5lIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEYwO1xcclxcbiAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNy41ZGVnKTtcXHJcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNy41ZGVnKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3LjVkZWcpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNy41ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfY29ubmVjdF9kaWFnb25hbExlZnQge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsX2Nvbm5lY3RfZGlhZ29uYWxSaWdodCB7XFxyXFxuICAgIC8qdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyovXFxyXFxufVxcclxcblxcclxcbi5jZWxsX2Nvbm5lY3RfbGluZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBRERJVElPTkFML0xPRyBTVEFSVDogKi9cXHJcXG4vKiDQmNGB0L/QvtC70YzQt9GD0LXQvCBcXFwibG9nXFxcIiDRgi7Qui4g0YLQsNC6INC60L7RgNC+0YfQtS4gKi9cXHJcXG5cXHJcXG4vKi5sb2dfd3JhcCB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMjcyODIyO1xcclxcbiAgICBjb2xvcjogI0Y4RjhGMDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59Ki9cXHJcXG5cXHJcXG4ubG9nX3RpbGUge1xcclxcbiAgICBtYXJnaW46IDAgMTBweCAxMHB4IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyNzI4MjI7XFxyXFxuICAgIGNvbG9yOiAjRjhGOEYwO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nX2J1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDE2MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMTgxOTFEO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nX2J1dHRvbl9zZWxlY3RlZCB7XFxyXFxuICAgIGJveC1zaGFkb3c6MCAwIDEwcHggI0ZGMDA2NjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQURESVRJT05BTC9MT0cgRU5ELiAqL1xcclxcblxcclxcbi8qIENPTU1PTiBTVEFSVDogKi9cXHJcXG4uanVzdGlmeUNlbnRlcixcXHJcXG4uZmxleENvbHVtbixcXHJcXG4uZmxleCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5mbGV4Q29sdW1uIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmp1c3RpZnlTcGFjZUJldHdlZW4ge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5jZWxsX3dyYXAsXFxyXFxuLmp1c3RpZnlDZW50ZXIge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ09NTU9OIEVORC4gKi9cXHJcXG5cXHJcXG4vKiDQktCg0JXQnNCV0J3QndCr0JUg0JrQntCh0KLQq9Cb0JggKi9cXHJcXG5cXHJcXG4ubWFyZ2luTGVmdE1pZGRsZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdDQUFnQzs7QUFFaEMsMENBQTBDO0FBQzFDLDBCQUEwQjtBQUMxQix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsNEJBQTRCO0FBQzVCLCtCQUErQjtBQUMvQix3QkFBd0I7QUFDeEIsb0NBQW9DOztBQUVwQztJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtLQUNmLGdCQUFnQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBOzs7SUFHSSxtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLHlFQUF5RTtBQUN6RSxvQ0FBb0M7QUFDcEMsY0FBYyx1QkFBdUIsRUFBRTtBQUN2QyxnQkFBZ0IsbUJBQW1CLEVBQUU7O0FBRXJDO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkI7OztpQkFHYTtBQUNqQjs7QUFFQTs7SUFFSSxpQ0FBaUM7SUFDakMsb0NBQW9DO0lBQ3BDLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsK0JBQStCO0FBQ25DOzs7QUFHQSxjQUFjLG1CQUFtQixFQUFFO0FBQ25DLFlBQVksbUJBQW1CLEVBQUU7QUFDakMsZ0JBQWdCLG1CQUFtQixFQUFFO0FBQ3JDLGFBQWEsbUJBQW1CLEVBQUU7O0FBRWxDOzs7SUFHSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUEsa0JBQWtCOztBQUVsQjtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7OztJQUdJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUEsMEJBQTBCO0FBQzFCLHNDQUFzQzs7QUFFdEM7Ozs7Ozs7RUFPRTs7QUFFRjtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBLHdCQUF3Qjs7QUFFeEIsa0JBQWtCO0FBQ2xCOzs7SUFHSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQSxnQkFBZ0I7O0FBRWhCLHNCQUFzQjs7QUFFdEI7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyog0KLQsNCx0LvQuNGG0LAg0LjRgdC/0L7Qu9GM0LfRg9C10LzRi9GFINGG0LLQtdGC0L7QsiAqL1xcclxcblxcclxcbi8qICMyODJFMzMgLSDRgdCy0LXRgtC70YvQuSDRhNC+0L0g0LTQu9GPINGC0ZHQvNC90L7QuSDRgtC10LzRiyAqL1xcclxcbi8qICMyNzI4MjIgLSBtb25va2FpINGE0L7QvSAqL1xcclxcbi8qICMxODE5MUQgLSDQotGR0LzQvdGL0Lkg0YTQvtC9ICovXFxyXFxuLyogIzY1QUFERCAtINGB0LjQvdC40Lkg0YbQstC10YIgKi9cXHJcXG4vKiAjRjkyNjcyIC0gbW9ub2thaSDRgNC+0LfQvtCy0LkgKi9cXHJcXG4vKiAjQTZFMjJFIC0gbW9ub2thaSDQt9C10LvRkdC90YvQuSAqL1xcclxcbi8qICNGOEY4RjAgLSBtb25va2FpINCx0LXQu9GL0LkgKi9cXHJcXG4vKiAjMDBDQzk5IC0g0L/RgNC40Y/RgtC90YvQuSDQt9C10LvRkdC90YvQuSAqL1xcclxcbi8qICNGRjAwNjYgLSDRgNC+0LfQvtCy0YvQuSAyICovXFxyXFxuLyogI0ZGOTk5OSAtINGA0L7Qt9C+0LLQsNGPINGC0LXQvdGMIC8g0LDQutGG0LXQvdGCICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxODE5MUQ7XFxyXFxufVxcclxcblxcclxcbi5hcHBsaWNhdGlvbiB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiAjRjhGOEYwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX2ltZyB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZV9oZXhhZ29uIHtcXHJcXG4gICAgbWluLWhlaWdodDogNDBweDtcXHJcXG4gICAgbWluLXdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWhleC1zaWRlOiAyMnB4O1xcclxcbiAgICAtLWhleC1yb3RhdGU6IDMwZGVnO1xcclxcbn1cXHJcXG5cXHJcXG4uaGV4YWdvbiB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWhleC1zaWRlKSAqIDEuNzMyKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZXgtc2lkZSk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUodmFyKC0taGV4LXJvdGF0ZSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbF93YWl0aW5nU2VsZWN0IC5oZXhhZ29uIHtcXHJcXG4gICAgYm94LXNoYWRvdzowIDAgMThweCAjRkY5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uaGV4YWdvbjpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6MCAwIDI1cHggI0Y4RjhGMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfc2VsZWN0ZWQgLmhleGFnb24ge1xcclxcbiAgICBib3gtc2hhZG93OjAgMCAxMHB4ICNGRjAwNjY7XFxyXFxufVxcclxcblxcclxcbi5oZXhhZ29uOmJlZm9yZSxcXHJcXG4uaGV4YWdvbjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhleGFnb25fcG93ZXJWYWx1ZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMzdweDtcXHJcXG4gICAgd2lkdGg6IDM3cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhleGFnb246YmVmb3JlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGV4YWdvbjphZnRlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi50aWxlX2JsdWUgLmhleGFnb246YmVmb3JlLFxcclxcbi50aWxlX2JsdWUgLmhleGFnb246YWZ0ZXIsXFxyXFxuLnRpbGVfYmx1ZSAuaGV4YWdvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM2NUFBREQ7XFxyXFxufVxcclxcblxcclxcbi50aWxlX21hZ2VudGEgLmhleGFnb246YmVmb3JlLFxcclxcbi50aWxlX21hZ2VudGEgLmhleGFnb246YWZ0ZXIsXFxyXFxuLnRpbGVfbWFnZW50YSAuaGV4YWdvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGOTI2NzI7XFxyXFxufVxcclxcblxcclxcbi50aWxlX3JlZCAuaGV4YWdvbjpiZWZvcmUsXFxyXFxuLnRpbGVfcmVkIC5oZXhhZ29uOmFmdGVyLFxcclxcbi50aWxlX3JlZCAuaGV4YWdvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi50aWxlX2dyZWVuIC5oZXhhZ29uOmJlZm9yZSxcXHJcXG4udGlsZV9ncmVlbiAuaGV4YWdvbjphZnRlcixcXHJcXG4udGlsZV9ncmVlbiAuaGV4YWdvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNBNkUyMkU7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gICAgbWluLWhlaWdodDogMzVweDtcXHJcXG4gICAgbWluLXdpZHRoOiAzNXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jZWxsX3JvdyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIFRPRE86INCy0YHRkSDRh9GC0L4gY2VsbCDQt9Cw0LzQtdC90LjRgtGMINC90LAgc3F1YXJlLCDQuNC30L3QsNGH0LDQu9GM0L3QviDQtNC10LvQsNC7INC/0L7QtCDQutCy0LDQtNGA0LDRgi4gKi9cXHJcXG4vKiBUT0RPOiDQstGA0LXQvNC10L3QvdGL0Lkg0LrQvtC80LzQtdC90YIt0LrQvtGB0YLRi9C70YwgKi9cXHJcXG4uY2VsbF9lbXB0eSB7IC8qYmFja2dyb3VuZDogIzI4MkUzMzsqLyB9XFxyXFxuLmNlbGxfd2FpdGluZyB7IGJhY2tncm91bmQ6ICNGOTI2NzI7IH1cXHJcXG5cXHJcXG4uY2VsbF93cmFwIHtcXHJcXG4gICAgLypwYWRkaW5nOiA1cHg7Ki9cXHJcXG4gICAgLyogVE9ETzog0LLRgNC10LzQtdC90L3Ri9C5INC60L7QvNC80LXQvdGCLdC60L7RgdGC0YvQu9GMICovXFxyXFxuICAgIC8qYmFja2dyb3VuZDogIzI3MjgyMjsqL1xcclxcbiAgICAvKm1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDBweDsqL1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbF93cmFwOmhvdmVyLFxcclxcbi5jZWxsX3dhaXRpbmdTZWxlY3Qge1xcclxcbiAgICAvKi1tb3otYm94LXNoYWRvdzowIDAgMTBweCAjMDAwOyovXFxyXFxuICAgIC8qLXdlYmtpdC1ib3gtc2hhZG93OjAgMCAxMHB4ICMwMDA7Ki9cXHJcXG4gICAgLypib3gtc2hhZG93OjAgMCAxMHB4ICNGOEY4RjA7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfc2VsZWN0ZWQge1xcclxcbiAgICAvKi1tb3otYm94LXNoYWRvdzowIDAgMTBweCAjMDAwOyovXFxyXFxuICAgIC8qLXdlYmtpdC1ib3gtc2hhZG93OjAgMCAxMHB4ICMwMDA7Ki9cXHJcXG4gICAgLypib3gtc2hhZG93OjAgMCAxMHB4ICNGRjAwNjY7Ki9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNlbGxfZ3JlZW4geyBiYWNrZ3JvdW5kOiAjQTZFMjJFOyB9XFxyXFxuLmNlbGxfcmVkIHsgYmFja2dyb3VuZDogZGFya3JlZDsgfVxcclxcbi5jZWxsX21hZ2VudGEgeyBiYWNrZ3JvdW5kOiAjRjkyNjcyOyB9XFxyXFxuLmNlbGxfYmx1ZSB7IGJhY2tncm91bmQ6ICM2NUFBREQ7IH1cXHJcXG5cXHJcXG4udGlsZV9oZXhhZ29uX2xpbmVfMSxcXHJcXG4udGlsZV9oZXhhZ29uX2xpbmVfMixcXHJcXG4udGlsZV9oZXhhZ29uX2xpbmVfMyB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGMDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDcuNWRlZyk7XFxyXFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDcuNWRlZyk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNy41ZGVnKTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDcuNWRlZyk7XFxyXFxufVxcclxcblxcclxcbi50aWxlX2hleGFnb25fbGluZV8xIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjRkZWcpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGVfaGV4YWdvbl9saW5lXzIge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTZkZWcpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGVfaGV4YWdvbl9saW5lXzMge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDRUxMX0NPTk5FQ1Q6ICovXFxyXFxuXFxyXFxuLmNlbGxfY29ubmVjdCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jZWxsX2Nvbm5lY3RfZGlhZ29uYWxMZWZ0LFxcclxcbi5jZWxsX2Nvbm5lY3RfZGlhZ29uYWxSaWdodCxcXHJcXG4uY2VsbF9jb25uZWN0X2xpbmUge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4RjA7XFxyXFxuICAgIGhlaWdodDogNHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3LjVkZWcpO1xcclxcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3LjVkZWcpO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcuNWRlZyk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3LjVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbF9jb25uZWN0X2RpYWdvbmFsTGVmdCB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfY29ubmVjdF9kaWFnb25hbFJpZ2h0IHtcXHJcXG4gICAgLyp0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfY29ubmVjdF9saW5lIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxufVxcclxcblxcclxcbi8qIEFERElUSU9OQUwvTE9HIFNUQVJUOiAqL1xcclxcbi8qINCY0YHQv9C+0LvRjNC30YPQtdC8IFxcXCJsb2dcXFwiINGCLtC6LiDRgtCw0Log0LrQvtGA0L7Rh9C1LiAqL1xcclxcblxcclxcbi8qLmxvZ193cmFwIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyNzI4MjI7XFxyXFxuICAgIGNvbG9yOiAjRjhGOEYwO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn0qL1xcclxcblxcclxcbi5sb2dfdGlsZSB7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4IDEwcHggMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzI3MjgyMjtcXHJcXG4gICAgY29sb3I6ICNGOEY4RjA7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dfYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMTYwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxODE5MUQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dfYnV0dG9uX3NlbGVjdGVkIHtcXHJcXG4gICAgYm94LXNoYWRvdzowIDAgMTBweCAjRkYwMDY2O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBRERJVElPTkFML0xPRyBFTkQuICovXFxyXFxuXFxyXFxuLyogQ09NTU9OIFNUQVJUOiAqL1xcclxcbi5qdXN0aWZ5Q2VudGVyLFxcclxcbi5mbGV4Q29sdW1uLFxcclxcbi5mbGV4IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXhDb2x1bW4ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeVNwYWNlQmV0d2VlbiB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfd3JhcCxcXHJcXG4uanVzdGlmeUNlbnRlciB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDT01NT04gRU5ELiAqL1xcclxcblxcclxcbi8qINCS0KDQldCc0JXQndCd0KvQlSDQmtCe0KHQotCr0JvQmCAqL1xcclxcblxcclxcbi5tYXJnaW5MZWZ0TWlkZGxlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUG93ZXJEYXRhQVBJIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHsgUG93ZXJSZW5kZXJBUEkgfSBmcm9tICcuL3JlbmRlcic7XHJcbmltcG9ydCB7IFBvd2VyTG9naWNBUEkgfSBmcm9tICcuL3Bvd2VyJztcclxuXHJcbmltcG9ydCB7IEJBU0VfSEFORExFUl9UWVBFUyB9IGZyb20gJy4vbGlicmFyeSc7XHJcblxyXG5pbXBvcnQgeyB0aWxlQ2xpY2tIYW5kbGVyIH0gZnJvbSAnLi9wb3dlci9wb3dlclR1cm4nO1xyXG5pbXBvcnQgeyBIQU5ETEVSX1RZUEUsIFRVUk5fQlVUVE9OX0VWRU5UX1RZUEVTLCBUVVJOX0JVVFRPTl9FVkVOVFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICog0JjQs9GA0LAgUG93ZXJOdW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3dlckdhbWVBcHAge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBkb21JZHMsIGlzRGV2KSB7XHJcbiAgICAgICAgY29uc3QgUkVOREVSX0NPTkZJRyA9IHtcclxuICAgICAgICAgICAgVVNFX1RBQkxFOiBjb25maWcuVVNFX1RBQkxFLFxyXG4gICAgICAgICAgICBET01fSURTOiBkb21JZHMsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvZ2ljQVBJID0gbmV3IFBvd2VyTG9naWNBUEkoaXNEZXYpO1xyXG4gICAgICAgIHRoaXMuZGF0YUFQSSA9IG5ldyBQb3dlckRhdGFBUEkodGhpcy5kYXRhSGFuZGxlci5iaW5kKHRoaXMpLCBjb25maWcsIGlzRGV2KTtcclxuICAgICAgICB0aGlzLnJlbmRlckFQSSA9IG5ldyBQb3dlclJlbmRlckFQSSh0aGlzLmRvbUhhbmRsZXIuYmluZCh0aGlzKSwgUkVOREVSX0NPTkZJRywgaXNEZXYpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICAgICAgdGhpcy5pc0RldiA9IGlzRGV2O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyQVBJLmNyZWF0ZUFwcCh0aGlzLmRhdGFBUEkubWF0cml4KTtcclxuICAgICAgICB0aGlzLmRhdGFBUEkuc2V0Rmlyc3RUdXJuKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRGV2KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQVBJLnNob3dEZXZCdXR0b24odGhpcy5kYXRhQVBJLnN0YXRlLmdldEN1cnJlbnRTdGVwVHlwZSgpKTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy50ZXN0RGF0YUFQSSA9IHRoaXMuZGF0YUFQSTtcclxuICAgICAgICAgICAgd2luZG93LnRlc3RSZW5kZXJBUEkgPSB0aGlzLnJlbmRlckFQSTtcclxuICAgICAgICAgICAgd2luZG93LnRlc3RMb2dpY0FQSSA9IHRoaXMubG9naWNBUEk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGFIYW5kbGVyKHR5cGUsIGRhdGEpIHtcclxuICAgICAgICBpZiAoQkFTRV9IQU5ETEVSX1RZUEVTLkVMRU1FTlRfQ0hBTkdFRCA9PT0gdHlwZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aWxlID0gdGhpcy5kYXRhQVBJLmdldEl0ZW1CeVBvc2l0aW9uKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJBUEkucmVyZW5kZXJUaWxlKHRpbGUsIHRoaXMuY29uZmlnLk1BVFJJWF9UWVBFKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChUVVJOX0JVVFRPTl9FVkVOVF9UWVBFUy5ISUdITElHSFQgPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJBUEkucmVyZW5kZXJUdXJuQnV0dG9uKHR5cGUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFRVUk5fQlVUVE9OX0VWRU5UX1RZUEVTLkFDVElWRV9HSUZUX1ZJRVcgPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJBUEkucmVyZW5kZXJUdXJuQnV0dG9uKHR5cGUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb21IYW5kbGVyKGV2ZW50LCB0YXJnZXRFbGVtZW50LCB0eXBlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZXYpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQsIHRhcmdldEVsZW1lbnQsIHR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEJBU0VfSEFORExFUl9UWVBFUy5USUxFX0NMSUNLID09PSB0eXBlKSB7XHJcbiAgICAgICAgICAgIHRpbGVDbGlja0hhbmRsZXIoZXZlbnQsIHRhcmdldEVsZW1lbnQsIHRoaXMuZGF0YUFQSSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoVFVSTl9CVVRUT05fRVZFTlRTLmluY2x1ZGVzKHR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naWNBUEkudHVybkJ1dHRvbkNsaWNrSGFuZGxlcih0aGlzLmRhdGFBUEksIHRoaXMucmVuZGVyQVBJLCB7IHR5cGUgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gSEFORExFUl9UWVBFLkRFVl9ET19SQU5ET01fMSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2ljQVBJLmRldkhhbmRsZXIodHlwZSwgdGhpcy5kYXRhQVBJLCB0aGlzLnJlbmRlckFQSSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTUFUUklYX1RZUEVTLCBTT1JUSU5HX1RZUEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqINCR0LDQt9C+0LLRi9C5INC60L7QvdGE0LjQsyDQtNC70Y8g0L/QvtGB0YLRgNC+0LXQvdC40Y8g0L/RgNC40LvQvtC20LXQvdC40Y8uXHJcbiAqL1xyXG5cclxuLy8g0JzQvtC20L3QviDQv9C+0LzQtdC90Y/RgtGMINGH0LXRgNC10Lcg0L3QsNGB0YLRgNC+0LnQutC4LiDQndC10L7QsdGF0L7QtNC40LzQviDQtNC70Y8g0LTQtdGE0L7Qu9GC0L3QvtC5INC+0YLRgNC40YHQvtCy0LrQuC5cclxuZXhwb3J0IGNvbnN0IFBPV0VSX0NPTkZJRyA9IHtcclxuICAgIE1BUDoge1xyXG4gICAgICAgIFNJWkU6IHtcclxuICAgICAgICAgICAgeDogNyxcclxuICAgICAgICAgICAgeTogNyxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgQ09VTlRfUExBWUVSOiA0LFxyXG4gICAgRklSU1RfVFVSTl9JTkRFWDogMCxcclxuICAgIE1BWF9QT1dFUl9WQUxVRTogOCxcclxuICAgIE1BVFJJWF9UWVBFOiBNQVRSSVhfVFlQRVMuSEVYQUdPTixcclxuICAgIFNPUlRJTkdfVFlQRTogU09SVElOR19UWVBFUy5SQU5ET00sXHJcbiAgICBVU0VfVEFCTEU6IGZhbHNlLFxyXG59OyIsImltcG9ydCB7IE1BVFJJWF9OQU1FUyB9IGZyb20gJy4vZGF0YSc7XHJcblxyXG4vKipcclxuICog0KLQviDRh9GC0L4g0LzQvtC20LXRgiDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YzRgdGPINCy0LXQt9C00LUuXHJcbiAqL1xyXG5cclxuLy8g0JLQvtC30LzQvtC20L3Ri9C1INCy0LDRgNC40LDQvdGC0Ysg0YHQvtGB0YLQvtGP0L3QuNGPINC60LvQtdGC0LrQuFxyXG5leHBvcnQgY29uc3QgQ0VMTF9UWVBFID0ge1xyXG4gICAgRU1QVFk6IG51bGwsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgV0FJVElORzogJ3dhaXRpbmcnLCAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgV0FJVElOR19BTExPQ0FUSU9OOiAnd2FpdGluZ0FsbG9jYXRpb24nLCAgICAvLyDQutC70LXRgtC60LAg0L/QvtC0IHBvd2VyLCDQvdC+INC90LUg0LjQvNC10LXRgiDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4LlxyXG4gICAgUkVBRFk6ICdyZWFkeScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgQ09OTkVDVF9MSU5FOiAnY29ubmVjdExpbmUnLCAgICAgICAgICAgICAgICAvL1xyXG4gICAgV0FJVElOR19TRUxFQ1Q6ICd3YWl0aW5nU2VsZWN0JywgICAgICAgICAgICAvLyDQvtC20LjQtNCw0L3QuNC1INCy0YvQsdC+0YDQsCwg0L/QvtC00YHQstC10YLQutCwLlxyXG4gICAgU0VMRUNURUQ6ICdzZWxlY3RlZCcsICAgICAgICAgICAgICAgICAgICAgICAvLyDQstGL0LHRgNCw0L3QvdCw0Y8v0LDQutGC0LjQstC90LDRjyDQv9C70LjRgtC60LBcclxufTtcclxuXHJcbi8vXHJcbmV4cG9ydCBjb25zdCBDT05ORUNUX1RZUEUgPSB7XHJcbiAgICBMSU5FOiAnbGluZScsXHJcbiAgICBMRUZUX0xJTkU6ICdsZWZ0TGluZScsXHJcbiAgICBSSUdIVF9MSU5FOiAncmlnaHRMaW5lJyxcclxuICAgIExFRlRfVE9QOiAnbGVmdFRvcCcsXHJcbiAgICBSSUdIVF9CT1RUT006ICdyaWdodEJvdHRvbScsXHJcblxyXG4gICAgTEVGVF9UT19CT1RUT006ICdsZWZ0VG9Cb3R0b20nLFxyXG4gICAgUklHSFRfVE9fQk9UVE9NOiAncmlnaHRUb0JvdHRvbScsXHJcbiAgICBMRUZUX1RPX1RPUDogJ2xlZnRUb1RvcCcsXHJcbiAgICBSSUdIVF9UT19UT1A6ICdyaWdodFRvVG9wJyxcclxufTtcclxuXHJcbi8vXHJcbmV4cG9ydCBjb25zdCBDT0xPUl9MSVNUID0gWydyZWQnLCAnbWFnZW50YScsICdncmVlbicsICdibHVlJ107XHJcblxyXG4vLyDQktC+0LfQvNC+0LbQvdGL0LUg0LLQsNGA0LjQsNC90YLRiyDRgdC+0YHRgtC+0Y/QvdC40Y8g0YXQvtC00LAuXHJcbmV4cG9ydCBjb25zdCBTVEVQX1RZUEUgPSB7XHJcbiAgICBHSVZFX1BPV0VSOiAnZ2l2ZVBvd2VyJywgICAgICAgICAgICAgICAgLy8g0YDQsNC30LTQsNGC0YwgcG93ZXIg0L/QviDQt9Cw0LLQtdGA0YjQtdC90LjRjiDRhdC+0LTQsC5cclxuICAgIENIT09TRV9GT1JfQVRUQUNLOiAnY2hvb3NlRm9yQXR0YWNrJywgICAvLyDQstGL0LHQvtGAINGB0LLQvtC10Lkg0LrQu9C10YLQutC4INC00LvRjyDQsNGC0LDQutC4LlxyXG4gICAgQVRUQUNLOiAnYXR0YWNrJywgICAgICAgICAgICAgICAgICAgICAgIC8vINCy0YvQsdC+0YAg0LrQu9C10YLQutC4INC+0L/Qv9C+0L3QtdC90YLQsCDQtNC70Y8g0LDRgtCw0LrQuC5cclxuICAgIFdBSVRJTkc6ICd3YWl0aW5nJywgICAgICAgICAgICAgICAgICAgICAvLyDQvtC20LjQtNCw0L3QuNC1INC+0L/Qv9C+0L3QtdC90YLQsC5cclxufVxyXG5cclxuLy9cclxuZXhwb3J0IGNvbnN0IEhBTkRMRVJfVFlQRSA9IHtcclxuICAgIFRVUk5fQlVUVE9OX0NMSUNLOiAndHVybkJ1dHRvbkNsaWNrJywgICAgICAgICAgIC8vINC60LvQuNC6INC/0L4gXCLQodC70LXQtNGD0Y7RidC40Lkg0YXQvtC0XCIuXHJcbiAgICBHSUZUX0VORF9CVVRUT05fQ0xJQ0s6ICdnaWZ0RW5kQnV0dG9uQ2xpY2snLCAgICAvLyDQutC70LjQuiDQv9C+IFwi0JfQsNCy0LXRgNGI0LjRgtGMINGA0LDQt9C00LDRh9GDXCIuXHJcbiAgICBUSUxFX0NMSUNLOiAndGlsZUNsaWNrJywgICAgICAgICAgICAgICAgICAgICAgICAvLyDQutC70LjQuiDQv9C+INC/0LvQuNGC0LrQtS5cclxuICAgIENIQU5HRV9UVVJOX0JVVFRPTjogJ2NoYW5nZVR1cm5CdXR0b24nLCAgICAgICAgIC8vXHJcblxyXG4gICAgREVWX0RPX1JBTkRPTV8xOiAnZGV2RG9SYW5kb20xJywgICAgICAgICAgICAgICAgLy8g0LrQu9C40Log0L/QviDQsNCy0YLQvtCy0YvQv9C+0LvQvdC10L3QuNGOINGH0LXQs9C+INC70LjQsdC+LlxyXG59XHJcblxyXG4vL1xyXG5leHBvcnQgY29uc3QgQ0FMQ19BVFRBQ0tfUkVTVUxUUyA9IHtcclxuICAgIEFUVEFDSzogJ2F0dGFjaycsXHJcbiAgICBERUZFTlNJVkU6ICdkZWZlbnNpdmUnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVFVSTl9CVVRUT05fRVZFTlRTID0gW1xyXG4gICAgSEFORExFUl9UWVBFLlRVUk5fQlVUVE9OX0NMSUNLLFxyXG4gICAgSEFORExFUl9UWVBFLkdJRlRfRU5EX0JVVFRPTl9DTElDS1xyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRVUk5fQlVUVE9OX0VWRU5UX1RZUEVTID0ge1xyXG4gICAgSElHSExJR0hUOiAnaGlnaGxpZ2h0JyxcclxuICAgIEFDVElWRV9HSUZUX1ZJRVc6ICdhY3RpdmVHaWZ0VmlldycsXHJcbiAgICBBQ1RJVkVfVFVSTl9CVVRUT046ICdhY3RpdmVUdXJuQnV0dG9uJyxcclxufVxyXG5cclxuLy8g0KLQuNC/INC60LDRgNGC0YsgLyDRgtC40L8g0Y3Qu9C10LzQtdC90YLQvtCyINC90LAg0LrQsNGA0YLQtS5cclxuZXhwb3J0IGNvbnN0IE1BVFJJWF9UWVBFUyA9IHtcclxuICAgIFNJTVBMRTogTUFUUklYX05BTUVTLlNRVUFSRTFfTUFUUklYX05BTUUsICAgLy8g0JrQstCw0LTRgNCw0YIg0YEg0LTQstGD0LzRjyDRgdCy0Y/Qt9GP0LzQuC4g0J3Rg9C20LXQvSDRgtC+0LvRjNC60L4g0LTQu9GPINGC0LXRgdGC0LjRgNC+0LLQsNC90LjRjy4g0KDQtdCw0LvQuNC30L7QstCw0L0g0YfQtdGA0LXQtyDRgtCw0LHQu9C40YbRgy5cclxuICAgIEhFWEFHT046IE1BVFJJWF9OQU1FUy5IRVhBR09OMV9NQVRSSVhfTkFNRSwgLy8g0JHQsNC30L7QstGL0Lkg0YLQuNC/INGBINGI0LXRgdGC0YzRjiDRgdCy0Y/Qt9GP0LzQuC5cclxufVxyXG5cclxuLy8g0KLQuNC/INGA0LDRgdC/0YDQtdC00LXQu9C10L3QuNGPIFBvd2VyICjQutC+0LzRgyDQutCw0LrQsNGPINC60LvQtdGC0LrQsCDQv9GA0LjQvdCw0LTQu9C10LbQuNGCKS5cclxuZXhwb3J0IGNvbnN0IFNPUlRJTkdfVFlQRVMgPSB7XHJcbiAgICBSQU5ET006ICdyYW5kb20nLFxyXG4gICAgRlJPTV9GSVJTVDogJ2Zyb21GaXJzdCcsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBERVZfQlVUVE9OX0NBUFRJT05TID0ge1xyXG4gICAgTUFLRV9NT1ZFOiAn0KHQtNC10LvQsNGC0Ywg0YXQvtC00YsnLFxyXG4gICAgR0lWRV9QT1dFUjogJ9Cg0LDQt9C00LDRgtGMIHBvd2VyJyxcclxufSIsImltcG9ydCB7IENFTExfVEFSR0VUX1RZUEUgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFNURVBfVFlQRSwgQ0VMTF9UWVBFLCBDQUxDX0FUVEFDS19SRVNVTFRTLCBUVVJOX0JVVFRPTl9FVkVOVF9UWVBFUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IERhdGFIZWxwZXIgfSBmcm9tICcuLi9saWJyYXJ5JztcclxuaW1wb3J0IHsgUG93ZXJNYXRyaXggfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBQb3dlclN0YXRlLCBTVEFURV9GSUVMRFMgfSBmcm9tICcuL2NvbXBvbmVudHMvU3RhdGUnO1xyXG5pbXBvcnQgeyBNQVRSSVhfRklFTERTIH0gZnJvbSAnLi9jb21wb25lbnRzL1RpbGUnO1xyXG5cclxuLyoqXHJcbiAqINCh0L7Qt9C00LDQvdC40LUg0LTQsNC90L3Ri9GFLCDQvNC10YLQvtC00Ysg0YDQsNCx0L7RgtGLINGBINC00LDQvdC90YvQvNC4INCx0LXQtyDQv9GA0LjQstGP0LfQutC4INC6INC70L7Qs9C40LrQtSDQuNCz0YDRiy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQb3dlckRhdGEgZXh0ZW5kcyBEYXRhSGVscGVyIHtcclxuXHJcbiAgICBpbml0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLnBsYXllcnNOYW1lID0gdGhpcy5nZXRQbGF5ZXJzTmFtZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgUG93ZXJTdGF0ZSh0aGlzLnBsYXllcnNOYW1lKTtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG5ldyBQb3dlck1hdHJpeCh0aGlzLmNvbmZpZywgdGhpcy5zdGF0ZS5nZXRTaG90SW5mbygpKTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzog0YDQtdCw0LvQuNC30L7QstCw0YLRjCDQvdC+0YDQvNCw0LvRjNC90YvQuSDRhNGD0L3QutGG0LjQvtC90LDQuyDQv9C+0YHQu9C1INGA0LDQt9C00LXQu9CwIFwi0L3QsNGB0YLRgNC+0LnQutC4XCIuXHJcbiAgICAgICAgY29uc3QgaXNQZW9wbGVGbGFnID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgIGlmIChpc1Blb3BsZUZsYWcgPT09ICdkZWZhdWx0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldElzUGVvcGxlRmxhZ1RydWUoW3RoaXMucGxheWVyc05hbWVbMF1dKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVhc2VBdmFpbGFibGVQb3dlcihuYW1lKSB7XHJcbiAgICAgICAgLS10aGlzLnN0YXRlW25hbWVdLmF2YWlsYWJsZVBvd2VyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvd2VyVmFsdWUocG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy5nZXRJdGVtQnlQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHRpbGUuZ2V0UG93ZXJWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0YHRgtCw0LLQuNGC0YwgYXZhaWxhYmxlUG93ZXIg0LIgc3RhdGVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBzZXRBdmFpbGFibGVQb3dlcihuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5tYXRyaXguZ2V0Q291bnRUaWxlc0J5TmFtZShuYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0QXZhaWxhYmxlUG93ZXIobmFtZSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVE9ETzog0L/QtdGA0LXQv9C40YHQsNGC0Ywg0LvQvtCz0LjQutGDLiDQn9GA0Lgg0L/RgNC10LLRi9GI0LXQvdC40Lgg0LfQvdCw0YfQtdC90LjRjyDRgdC90LjQvNCw0YLRjCDQv9C+0LTRgdCy0LXRgtC60YMg0Lgg0L3QtSDQvtCx0YDQsNCx0LDRgtGL0LLQsNGC0Ywg0LrQu9C40LouXHJcbiAgICAgKi9cclxuICAgIGluY3JlYXNlUG93ZXJWYWx1ZShwb3NpdGlvbikge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJdGVtQnlQb3NpdGlvbihwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIGlmIChpdGVtLnBvd2VyVmFsdWUgPCB0aGlzLmNvbmZpZy5NQVhfUE9XRVJfVkFMVUUpIHtcclxuICAgICAgICAgICAgKytpdGVtLnBvd2VyVmFsdWU7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpcnN0VHVybk5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc05hbWVbdGhpcy5jb25maWcuRklSU1RfVFVSTl9JTkRFWF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUT0RPOiDRjdGC0L4g0L3Rg9C20L3QviDRgNC10YTQsNC60YLQvtGA0LjRgtGMINC90LAg0LHQvtC70LXQtSDQs9C+0LLQvtGA0Y/RidC40LUg0YTRg9C90LrRhtC40LguINCh0L7QutGA0LDRgtC40YLRjCDQv9C+INC80LDQutGB0LjQvNGD0LzRgyDQstGL0LfQvtCyINC80LXRgtC+0LTQsCDQuCDRg9C00LDQu9C40YLRjCDQv9C+0YLQvtC8LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlUmVyZW5kZXJcclxuICAgICAqL1xyXG4gICAgc2V0U3RlcFR5cGUobmFtZSwgdmFsdWUsIHVzZVJlcmVuZGVyID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmNoYW5nZVN0ZXBUeXBlKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldEN1cnJlbnRTdGVwVHlwZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRDdXJyZW50VHVybihuYW1lKTtcclxuXHJcbiAgICAgICAgLy8g0J/QvtC00YHQstC10YfQuNCy0LDQtdC8INC60LvQtdGC0LrQuCDQsiDQutC+0YLQvtGA0YvQtSDQvNC+0LbQvdC+INGA0LDQt9C00LDRgtGMIHBvd2VyLlxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gU1RFUF9UWVBFLkdJVkVfUE9XRVIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDZWxsVHlwZUZvckFsbChDRUxMX1RBUkdFVF9UWVBFLmJ5UGxheWVyTmFtZSwgbmFtZSwgQ0VMTF9UWVBFLldBSVRJTkdfU0VMRUNULCB1c2VSZXJlbmRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQn9C+0LTRgdCy0LXRh9C40LLQsNC10Lwg0LrQu9C10YLQutC4INC60L7RgtC+0YDRi9C1INC80L7QttC90L4g0LLRi9Cx0YDQsNGC0Ywg0LTQu9GPINCw0YLQsNC60LguXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBTVEVQX1RZUEUuQ0hPT1NFX0ZPUl9BVFRBQ0spIHtcclxuICAgICAgICAgICAgY29uc3QgdGlsZUxpc3QgPSB0aGlzLm1hdHJpeC5nZXRUaWxlTGlzdEJ5Q2FuQXR0YWNrKG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRDZWxsVHlwZUluTGlzdCh0aWxlTGlzdCwgQ0VMTF9UWVBFLldBSVRJTkdfU0VMRUNULCB1c2VSZXJlbmRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0YHRgtCw0LLQuNGC0Ywgc3RlcFR5cGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFR5cGUgLSDRgtC40L8g0L/RgNC+0YHRgtCw0L3QvtCy0LrQuC4g0J3QsCDQstGB0LUsINC/0L4gaWQsINC10YnRkSDQutCw0LrQuNC1LdGC0L4g0LLRi9Cx0L7RgNC60LguXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlUmVyZW5kZXJcclxuICAgICAqL1xyXG4gICAgc2V0Q2VsbFR5cGVGb3JBbGwodGFyZ2V0VHlwZSwgdGFyZ2V0LCB2YWx1ZSwgdXNlUmVyZW5kZXIgPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChDRUxMX1RBUkdFVF9UWVBFLmJ5UGxheWVyTmFtZSA9PT0gdGFyZ2V0VHlwZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aWxlTGlzdCA9IHRoaXMubWF0cml4LmdldFRpbGVMaXN0QnlQbGF5ZXIodGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIHRpbGVMaXN0LmZvckVhY2godGlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aWxlLnNldFR5cGUodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh1c2VSZXJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVyZW5kZXJCeVBvc2l0aW9uKHRpbGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDRUxMX1RBUkdFVF9UWVBFLmJ5UG9zaXRpb24gPT09IHRhcmdldFR5cGUpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMubWF0cml4LmdldEl0ZW0odGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtPy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHVzZVJlcmVuZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcmVuZGVyQnlQb3NpdGlvbih0YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0YHRgtCw0LLQuNGC0Ywgc3RlcFR5cGUg0LTQu9GPINC/0LXRgNC10LTQsNC90L3QvtCz0L4g0YHQv9C40YHQutCwLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGxpc3RcclxuICAgICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1c2VSZXJlbmRlclxyXG4gICAgICovXHJcbiAgICBzZXRDZWxsVHlwZUluTGlzdChsaXN0LCB2YWx1ZSwgdXNlUmVyZW5kZXIgPSBmYWxzZSkge1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCh0aWxlID0+IHtcclxuICAgICAgICAgICAgdGlsZS5zZXRUeXBlKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1c2VSZXJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXJlbmRlckJ5UG9zaXRpb24odGlsZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50U3RlcFR5cGUodHlwZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0Q3VycmVudFN0ZXBUeXBlKHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9wcG9uZW50VGlsZUxpc3QobXlQb3NpdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXRPcHBvbmVudExpbmtlZFRpbGUobXlQb3NpdGlvbiwgdGhpcy5jb25maWcuTUFUUklYX1RZUEUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0V2FpdGluZ1NlbGVjdCgpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhcmFtQnlQYXJhbShNQVRSSVhfRklFTERTLlRZUEUsIENFTExfVFlQRS5XQUlUSU5HX1NFTEVDVCwgQ0VMTF9UWVBFLlJFQURZLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWdobGlnaHRBY3RpdmVUaWxlKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDZWxsVHlwZUZvckFsbChDRUxMX1RBUkdFVF9UWVBFLmJ5UG9zaXRpb24sIHBvc2l0aW9uLCBDRUxMX1RZUEUuU0VMRUNURUQsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoaWdobGlnaHRPcHBvbmVudChteVBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgbGlua2VkTGlzdCA9IHRoaXMuZ2V0T3Bwb25lbnRUaWxlTGlzdChteVBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgbGlua2VkTGlzdC5mb3JFYWNoKCh7IHBvc2l0aW9uIH0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDZWxsVHlwZUZvckFsbChDRUxMX1RBUkdFVF9UWVBFLmJ5UG9zaXRpb24sIHBvc2l0aW9uLCBDRUxMX1RZUEUuV0FJVElOR19TRUxFQ1QsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbGlua2VkTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEhpZ2hsaWdodCgpIHtcclxuICAgICAgICBjb25zdCBoaWdobGlnaHRMaXN0ID0gW0NFTExfVFlQRS5XQUlUSU5HX1NFTEVDVCwgQ0VMTF9UWVBFLlNFTEVDVEVEXTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXJhbUJ5UGFyYW0oTUFUUklYX0ZJRUxEUy5UWVBFLCBoaWdobGlnaHRMaXN0LCBDRUxMX1RZUEUuUkVBRFksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KHQsNC80YvQuSDQv9GA0LjQvNC40YLQuNCy0L3Ri9C5INGB0L/QvtGB0L7QsSDQv9C+0LvRg9GH0LXQvdC40Y8g0YHQu9C10LTRg9GO0YnQtdCz0L4g0LjQs9GA0L7QutCwINC/0L4g0L7Rh9C10YDQtdC00L3QvtGB0YLQuC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWVyTmFtZVxyXG4gICAgICovXHJcbiAgICBnZXROZXh0UGxheWVyTmFtZShwbGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyc0xpc3QgPSB0aGlzLnN0YXRlLmdldFBsYXllcnNMaXN0KCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gcGxheWVyc0xpc3QuaW5kZXhPZihwbGF5ZXJOYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBsYXllcnNMaXN0W2N1cnJlbnRJbmRleCArIDFdIHx8IHBsYXllcnNMaXN0WzBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge29iamVjdH0geyBpbmZvLCBuYW1lIH1cclxuICAgICAqL1xyXG4gICAgZ2V0TmV4dFBsYXllckluZm8oKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkTmFtZSA9IHRoaXMuc3RhdGUuZ2V0Q3VycmVudFR1cm4oKTtcclxuICAgICAgICBjb25zdCBuZXh0TmFtZSA9IHRoaXMuZ2V0TmV4dFBsYXllck5hbWUob2xkTmFtZSk7XHJcbiAgICAgICAgY29uc3QgcGxheWVySW5mbyA9IHRoaXMuc3RhdGUuZ2V0UGxheWVySW5mbyhuZXh0TmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluZm86IHsgLi4ucGxheWVySW5mbyB9LFxyXG4gICAgICAgICAgICBuYW1lOiBuZXh0TmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF2YWlsYWJsZVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmdldEF2YWlsYWJsZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXZhaWxhYmxlUG9zaXRpb24ocG9zaXRpb25MaXN0KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRBdmFpbGFibGVQb3NpdGlvbihwb3NpdGlvbkxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZVRpbGVQb3NpdGlvbihwb3NpdGlvbiwgaXNQZW9wbGUgPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChpc1Blb3BsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodEFjdGl2ZVRpbGUocG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFNUQVRFX0ZJRUxEUy5BQ1RJVkVfVElMRV9QT1NJVElPTiwgeyAuLi5wb3NpdGlvbiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmVUaWxlUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZ2V0U3RhdGVQcm9wZXJ0eShTVEFURV9GSUVMRFMuQUNUSVZFX1RJTEVfUE9TSVRJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVE9ETzog0LLQtdGA0L7Rj9GC0L3QviDQvdGD0LbQvdC+INC/0LXRgNC10LzQtdGB0YLQuNGC0Ywg0YfQsNGB0YLRjCDQu9C+0LPQuNC60Lgg0LIgVGlsZSDRh9GC0L7QsdGLINC90LUg0LfQsNGC0LDRgdC60LjQstCw0YLRjCBNQVRSSVhfRklFTERTLlxyXG4gICAgICovXHJcbiAgICBjaGFuZ2VUaWxlQWZ0ZXJBdHRhY2soYXR0YWNrUG9zaXRpb24sIGRlZmVuc2l2ZVBvc2l0aW9uLCByZXN1bHQpIHtcclxuICAgICAgICBjb25zdCBhdHRhY2tUaWxlID0gdGhpcy5nZXRJdGVtQnlQb3NpdGlvbihhdHRhY2tQb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgZGVmZW5zaXZlVGlsZSA9IHRoaXMuZ2V0SXRlbUJ5UG9zaXRpb24oZGVmZW5zaXZlUG9zaXRpb24pO1xyXG5cclxuICAgICAgICBhdHRhY2tUaWxlLnNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgIFtNQVRSSVhfRklFTERTLlBPV0VSX1ZBTFVFXTogcmVzdWx0LmFjdGl2ZVZhbHVlLFxyXG4gICAgICAgICAgICBbTUFUUklYX0ZJRUxEUy5UWVBFXTogQ0VMTF9UWVBFLlJFQURZLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRlZmVuc2l2ZVRpbGVJc0NoYW5nZXMgPSBkZWZlbnNpdmVUaWxlLnNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgIFtNQVRSSVhfRklFTERTLlBPV0VSX1ZBTFVFXTogcmVzdWx0LmRlZmVuc2l2ZVZhbHVlLFxyXG4gICAgICAgICAgICBbTUFUUklYX0ZJRUxEUy5QTEFZRVJfTkFNRV06IHJlc3VsdC53aW5uZXIgPT09IENBTENfQVRUQUNLX1JFU1VMVFMuQVRUQUNLID8gYXR0YWNrVGlsZS5nZXRQbGF5ZXJOYW1lKCkgOiBkZWZlbnNpdmVUaWxlLmdldFBsYXllck5hbWUoKSxcclxuICAgICAgICAgICAgW01BVFJJWF9GSUVMRFMuQ09MT1JdOiByZXN1bHQud2lubmVyID09PSBDQUxDX0FUVEFDS19SRVNVTFRTLkFUVEFDSyA/IGF0dGFja1RpbGUuZ2V0Q29sb3IoKSA6IGRlZmVuc2l2ZVRpbGUuZ2V0Q29sb3IoKSxcclxuICAgICAgICAgICAgW01BVFJJWF9GSUVMRFMuVFlQRV06IENFTExfVFlQRS5SRUFEWSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXJlbmRlckJ5UG9zaXRpb24oYXR0YWNrUG9zaXRpb24pO1xyXG5cclxuICAgICAgICAvLyDQvNC+0LbQtdGCINC90LUg0LjQt9C80LXQvdC40YLRjNGB0Y8g0LXRgdC70LggcG93ZXIgMiDQvdCw0L/QsNC00LXRgiDQvdCwIHBvd2VyIDEuXHJcbiAgICAgICAgaWYgKGRlZmVuc2l2ZVRpbGVJc0NoYW5nZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXJlbmRlckJ5UG9zaXRpb24oZGVmZW5zaXZlUG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHBsYXllck5hbWUuXHJcbiAgICAgKi9cclxuICAgIGNoYW5nZVN0ZXBBZnRlckF0dGFjayhuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5yZXNldEFjdGl2ZVRpbGVQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUucmVzZXRBdmFpbGFibGVQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RlcFR5cGUobmFtZSwgU1RFUF9UWVBFLkNIT09TRV9GT1JfQVRUQUNLLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQvtCy0LXRgNC60LAg0L3QsCDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINGB0L7QstC10YDRiNC40YLRjCDQtNCw0LvRjNC90LXQudGI0LjQuSDRhdC+0LQuXHJcbiAgICAgKiDQldGB0LvQuCDRh9C10LvQvtCy0LXQuiAtINC/0L7QtNGB0LLQtdGC0LjRgtGMINC60L3QvtC/0LrRgyBcItCX0LDQstC10YDRiNC40YLRjCDRhdC+0LRcIi5cclxuICAgICAqINCV0YHQu9C4INC60L7QvNC/0YzRjtGC0LXRgCAtINC/0LXRgNC10LnRgtC4INC6INGB0LvQtdC0LiDQuNCz0YDQvtC60YMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBwbGF5ZXJOYW1lLlxyXG4gICAgICovXHJcbiAgICBjaGVja01vdmVJc0NvbXBsZXRlZChuYW1lKSB7XHJcbiAgICAgICAgY29uc3QgY2FuQXR0YWNrTGlzdCA9IHRoaXMubWF0cml4LmdldFRpbGVMaXN0QnlDYW5BdHRhY2sobmFtZSk7XHJcbiAgICAgICAgY29uc3QgaXNQZW9wbGUgPSB0aGlzLnN0YXRlLmdldElzUGVvcGxlRmxhZyhuYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGNhbkF0dGFja0xpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1Blb3BsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXJlbmRlcihUVVJOX0JVVFRPTl9FVkVOVF9UWVBFUy5ISUdITElHSFQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g0KHQu9C10LQuINGF0L7QtC5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNuJ3QgcGVvcGxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoZWNrVmljdG9yeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVmljdG9yeSgpIHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5tYXRyaXguZ2V0TGlzdFdpdGhPbmx5UGxheWVycygpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gbGlzdC5maWx0ZXIoKHBsYXllciwgaW5kZXgsIGxpc3QpID0+IHBsYXllciA9PT0gbGlzdFswXSk7XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPT09IGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfQmtGC0L4t0YLQviDQv9C+0LHQtdC00LjQuyEg0J3QviDRjyDQv9C+0LrQsCDQvdC1INGD0LzQtdGOINC+0L/RgNC10LTQtdC70Y/RgtGMINC60YLQvi4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9HaXZlUG93ZXJCYXNlKHBsYXllck5hbWUsIHBvc2l0aW9uLCB1c2VSZXJlbmRlciA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlUG93ZXIgPSB0aGlzLnN0YXRlLmdldEF2YWlsYWJsZVBvd2VyKHBsYXllck5hbWUpO1xyXG5cclxuICAgICAgICAvLyDRg9C80LXQvdGM0YjQsNC10Lwg0LIgc3RhdGUgLyDQvNC10L3Rj9C10Lwg0L7RgtC+0LHRgNCw0LbQtdC90LjQtS5cclxuICAgICAgICBpZiAoYXZhaWxhYmxlUG93ZXIgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluY3JlYXNlUmVzdWx0ID0gdGhpcy5pbmNyZWFzZVBvd2VyVmFsdWUocG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluY3JlYXNlUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3dlciA9IGF2YWlsYWJsZVBvd2VyIC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlY3JlYXNlQXZhaWxhYmxlUG93ZXIocGxheWVyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcmVuZGVyQnlQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUdpZnRWaWV3KG5ld1Bvd2VyLCB1c2VSZXJlbmRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0JXRgdC70Lgg0L3QtdGCINCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0YDQsNC30LTQsNCy0LDRgtGMIC0g0L/QvtC00YHQstC10YfQuNCy0LDQtdC8INC60L3QvtC/0LrRgy5cclxuICAgIGFjdGl2ZUdpZnRWaWV3KGFtb3VudCwgdXNlUmVyZW5kZXIgPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodCA9IGFtb3VudCA9PT0gMDtcclxuICAgICAgICBjb25zdCBpc1JlcmVuZGVyQ2FzZSA9IHVzZVJlcmVuZGVyIHx8IGhpZ2hsaWdodDtcclxuXHJcbiAgICAgICAgaWYgKGlzUmVyZW5kZXJDYXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlSGFuZGxlcldpdGhDdXN0b20oVFVSTl9CVVRUT05fRVZFTlRfVFlQRVMuQUNUSVZFX0dJRlRfVklFVywgeyBoaWdobGlnaHQsIGFtb3VudCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVyZW5kZXJCeVBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy51c2VIYW5kbGVyKHBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiDQtNC70Y8g0LHRi9GB0YLRgNC+0Lkg0YHQvtCy0LzQtdGB0YLQuNC80L7RgdGC0LguINCf0LXRgNC10LnRgtC4INC90LAgXCJ1c2VIYW5kbGVyXCIuXHJcbiAgICByZXJlbmRlcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy51c2VIYW5kbGVyV2l0aEN1c3RvbSh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiDRg9Cx0YDQsNGC0Ywg0LTRg9Cx0LvQuNGA0L7QstCw0L3QuNC1XHJcbiAgICBjaGVja1Bvc2l0aW9uTGltaXRzKHsgeCwgeSB9KSB7XHJcbiAgICAgICAgY29uc3QgbGltaXRzTWV0aG9kID0gKHZhbHVlLCBtYXhMaW1pdCkgPT4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSBtYXhMaW1pdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpbWl0c01ldGhvZCh4LCB0aGlzLmNvbmZpZy5NQVAuU0laRS54KSAmJiBsaW1pdHNNZXRob2QoeSwgdGhpcy5jb25maWcuTUFQLlNJWkUueSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQb3dlckRhdGEgfSBmcm9tICcuL0RhdGEnO1xyXG5pbXBvcnQgeyBDRUxMX1RZUEUsIFNURVBfVFlQRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFNUQVRFX0ZJRUxEUyB9IGZyb20gJy4vY29tcG9uZW50cy9TdGF0ZSc7XHJcbmltcG9ydCB7IGNhbGNBdHRhY2tSZXN1bHQgfSBmcm9tICcuLi9wb3dlci9tYWluJztcclxuXHJcbi8qKlxyXG4gKiDQoNCw0YHRiNC40YDRj9C10Lwg0LTQsNC90L3Ri9C1IFwiUG93ZXJEYXRhXCIg0LzQtdGC0L7QtNCw0LzQuCDQtNC70Y8g0YHQvtCy0LXRgNGI0LXQvdC40Y8g0YXQvtC00L7Qsi5cclxuICog0KEg0L/QvtGB0YLRhNC40LrQvtGB0LwgXCJQQ1wiINC90LUg0LLRi9C/0L7Qu9C90Y/RjtGC0YHRjyDQv9GA0L7QvNC10LbRg9GC0L7Rh9C90YvQtSDQv9C10YDQtdGA0LjRgdC+0LLQutC4LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvd2VyRGF0YUFQSSBleHRlbmRzIFBvd2VyRGF0YSB7XHJcblxyXG4gICAgc2V0Rmlyc3RUdXJuKCkge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldEZpcnN0VHVybk5hbWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGVwVHlwZShuYW1lLCBTVEVQX1RZUEUuQ0hPT1NFX0ZPUl9BVFRBQ0ssIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENIQU5HRSBUVVJOXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9C+0LzQtdC90Y/RgtGMINGB0YLQsNGC0YPRgdGLINC00LvRjyDRgdC+0LLQtdGA0YjQtdC90LjRjyDRgdC70LXQtC4g0YXQvtC00LAuINCj0LHRgNCw0YLRjCDQv9C+0LTRgdCy0LXRgtC60LguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BsYXllck5hbWVcclxuICAgICAqL1xyXG4gICAgZG9OZXh0VHVybihuZXdQbGF5ZXJOYW1lKSB7XHJcblxyXG4gICAgICAgIC8vINCh0LHRgNC+0YEg0L/RgNC10LTRi9C00YPRidC40YUg0YHQvtGB0YLQvtGP0L3QuNC5LlxyXG4gICAgICAgIHRoaXMucmVzZXRIaWdobGlnaHQoKTtcclxuICAgICAgICB0aGlzLnJlcmVuZGVyKCd0dXJuQnV0dG9uSW5hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgLy8g0KPRgdGC0LDQvdC+0LLQutCwINC90L7QstGL0YUg0YHQvtGB0YLQvtGP0L3QuNC5LlxyXG4gICAgICAgIHRoaXMuc2V0U3RlcFR5cGUobmV3UGxheWVyTmFtZSwgQ0VMTF9UWVBFLldBSVRJTkdfU0VMRUNUKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGT1IgQVRUQUNLXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQktGL0LTQtdC70Y/QtdC8INC60LvQtdGC0LrRgyDRh9GC0L7QsdGLINGB0L7QstC10YDRiNC40YLRjCDQsNGC0LDQutGDLiDQktGL0LTQtdC70LXQvCDQutC70LXRgtC60Lgg0LrQvtGC0L7RgNGL0LUg0LzQvtC20L3QviDQsNGC0LDQutC+0LLQsNGC0YwuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZVJlcmVuZGVyIC0g0LTQu9GPINGF0L7QtNCwINC60L7QvNC/0YzRjtGC0LXRgNCwINC90LUg0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0LvQuNGI0L3QuNC1INC/0LXRgNC10YDQuNGB0L7QstC60LguXHJcbiAgICAgKi9cclxuICAgIGRvU2VsZWN0Rm9yQXR0YWNrKHBvc2l0aW9uLCB1c2VSZXJlbmRlciA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldFdhaXRpbmdTZWxlY3QoKTtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZVRpbGVQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3Qgb3Bwb25lbnRMaXN0ID0gdGhpcy5oaWdobGlnaHRPcHBvbmVudChwb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3Qgb3Bwb25lbnRQb3NpdGlvbkxpc3QgPSBvcHBvbmVudExpc3QubWFwKGl0ZW0gPT4gaXRlbS5wb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50U3RlcFR5cGUoU1RFUF9UWVBFLkFUVEFDSyk7XHJcbiAgICAgICAgdGhpcy5zZXRBdmFpbGFibGVQb3NpdGlvbihvcHBvbmVudFBvc2l0aW9uTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0LzQtdC90LAgXCJkb1NlbGVjdEZvckF0dGFja1wiLCDQvNC+0LbQvdC+INC30LDQvdC+0LLQviDQstGL0LHRgNCw0YLRjCDQutC70LXRgtC60YMg0LTQu9GPINCw0YLQsNC60LguXHJcbiAgICAgKi9cclxuICAgIGRvUmVzZXRTZWxlY3RGb3JBdHRhY2soKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0U3RhdGVQcm9wZXJ0eShTVEFURV9GSUVMRFMuQ1VSUkVOVF9UVVJOKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNldEhpZ2hsaWdodCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RlcFR5cGUobmFtZSwgU1RFUF9UWVBFLkNIT09TRV9GT1JfQVRUQUNLLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGRvUGVvcGxlQXR0YWNrKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUG9zaXRpb24gPSB0aGlzLmdldEFjdGl2ZVRpbGVQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVBvd2VyID0gdGhpcy5nZXRQb3dlclZhbHVlKGFjdGl2ZVBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBkZWZlbnNpdmVQb3dlciA9IHRoaXMuZ2V0UG93ZXJWYWx1ZShwb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFR1cm4gPSB0aGlzLnN0YXRlLmdldEN1cnJlbnRUdXJuKCk7XHJcbiAgICAgICAgY29uc3QgYXR0YWNrUmVzdWx0ID0gY2FsY0F0dGFja1Jlc3VsdChhY3RpdmVQb3dlciwgZGVmZW5zaXZlUG93ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZVRpbGVBZnRlckF0dGFjayhhY3RpdmVQb3NpdGlvbiwgcG9zaXRpb24sIGF0dGFja1Jlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5yZXNldEhpZ2hsaWdodCgpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU3RlcEFmdGVyQXR0YWNrKGN1cnJlbnRUdXJuKTtcclxuICAgICAgICB0aGlzLmNoZWNrTW92ZUlzQ29tcGxldGVkKGN1cnJlbnRUdXJuKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYWN0aXZlIC0ge3gsIHl9XHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGVmZW5zaXZlIC0ge3gsIHl9XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWVyTmFtZVxyXG4gICAgICovXHJcbiAgICBkb1BDQXR0YWNrKGFjdGl2ZSwgZGVmZW5zaXZlLCBwbGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUG93ZXIgPSB0aGlzLmdldFBvd2VyVmFsdWUoYWN0aXZlKTtcclxuICAgICAgICBjb25zdCBkZWZlbnNpdmVQb3dlciA9IHRoaXMuZ2V0UG93ZXJWYWx1ZShkZWZlbnNpdmUpO1xyXG4gICAgICAgIGNvbnN0IGF0dGFja1Jlc3VsdCA9IGNhbGNBdHRhY2tSZXN1bHQoYWN0aXZlUG93ZXIsIGRlZmVuc2l2ZVBvd2VyKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VUaWxlQWZ0ZXJBdHRhY2soYWN0aXZlLCBkZWZlbnNpdmUsIGF0dGFja1Jlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5yZXNldEhpZ2hsaWdodCgpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tNb3ZlSXNDb21wbGV0ZWQocGxheWVyTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRk9SIEdJVkUgUE9XRVI6XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9C10YDQtdCy0LXRgdGC0Lgg0YXQvtC0INCyINGB0YLQsNC00LjRjiDRgNCw0LfQtNCw0YfQuCBwb3dlci5cclxuICAgICAqINCe0YLQvtCx0YDQsNC20LDQtdC8INC60L7Quy3QstC+INC00L7RgdGC0YPQv9C90YvRhSBwb3dlci5cclxuICAgICAqL1xyXG4gICAgYWN0aXZlR2l2ZVBvd2VyU3RlcChpc1Blb3BsZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IHRoaXMuc3RhdGUuZ2V0Q3VycmVudFR1cm4oKTtcclxuICAgICAgICBjb25zdCB0aWxlTGlzdCA9IHRoaXMubWF0cml4LmdldFRpbGVMaXN0QnlQbGF5ZXIocGxheWVyTmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RlcFR5cGUocGxheWVyTmFtZSwgU1RFUF9UWVBFLkdJVkVfUE9XRVIsIGlzUGVvcGxlKTtcclxuICAgICAgICB0aGlzLnNldEF2YWlsYWJsZVBvd2VyKHBsYXllck5hbWUsIHRpbGVMaXN0Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGlmIChpc1Blb3BsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUdpZnRWaWV3KHRpbGVMaXN0Lmxlbmd0aCwgaXNQZW9wbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCg0LDQt9C00LDRkdC8IHBvd2VyLCDQv9GA0L7QstC10YDQutC4INC90LAg0LLQvtC30LzQvtC20L3QvtGB0YLRjCwg0YHQvNC10L3QsCDRgdGC0LDRgtGD0YHQsCwg0LjQt9C80LXQvdC10LjQvdGPINC/0YDQvtC80LXQttGD0YLQvtGH0L3QvtCz0L4g0L7RgtC+0LHRgNCw0LbQtdC90LjRjy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWVyTmFtZS5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwb3NpdGlvbiB7IHgsIHkgfS5cclxuICAgICAqL1xyXG4gICAgZG9HaXZlUG93ZXIocGxheWVyTmFtZSwgcG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmRvR2l2ZVBvd2VyQmFzZShwbGF5ZXJOYW1lLCBwb3NpdGlvbiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQoNCw0LfQtNCw0YLRjCBwb3dlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWVyTmFtZS5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwb3NpdGlvbiB7IHgsIHkgfS5cclxuICAgICAqL1xyXG4gICAgZG9HaXZlUG93ZXJQQyhwbGF5ZXJOYW1lLCBwb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuZG9HaXZlUG93ZXJCYXNlKHBsYXllck5hbWUsIHBvc2l0aW9uKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhc2VNYXRyaXggfSBmcm9tICcuLi8uLi9saWJyYXJ5JztcclxuaW1wb3J0IHsgQ09OTkVDVF9UWVBFLCBTT1JUSU5HX1RZUEVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vVGlsZSc7XHJcbmltcG9ydCB7IE1BVFJJWF9UWVBFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldFNxdWFyZU1hdHJpeDEsIGdldEhleGFnb25NYXRyaXgxLCBnZXROZWlnaGJvckhleGFnb24xIH0gZnJvbSAnLi9tYXRyaXhHZW5lcmF0b3JzJztcclxuaW1wb3J0IHsgc2V0UmFuZG9tUG93ZXJJbk1hdHJpeCB9IGZyb20gJy4vbWF0cml4R2VuZXJhdG9ycy91dGlscyc7XHJcblxyXG4vKipcclxuICog0JTQsNC90L3Ri9C1INC00LvRjyDQutCw0YDRgtGLLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvd2VyTWF0cml4IGV4dGVuZHMgQmFzZU1hdHJpeCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBwbGF5ZXJJbmZvIC0gWyBbbmFtZSwgY29sb3JdLCAuLi4gXSAuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgcGxheWVySW5mbykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZy5NQVApO1xyXG5cclxuICAgICAgICBjb25zdCBlbXB0eU1hdHJpeCA9IHRoaXMuZ2V0RW1wdHlNYXRyaXgoY29uZmlnLk1BVFJJWF9UWVBFLCBjb25maWcuTUFQLlNJWkUpO1xyXG4gICAgICAgIGNvbnN0IGZpbGxlZE1hdHJpeCA9IHRoaXMuZ2V0RmlsbGVkTWF0cml4KGNvbmZpZy5TT1JUSU5HX1RZUEUsIGVtcHR5TWF0cml4LCBwbGF5ZXJJbmZvKTtcclxuXHJcbiAgICAgICAgdGhpcy5vdmVyd3JpdGVNYXRyaXgoZmlsbGVkTWF0cml4KTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNpemUgLSB7IHgsIHkgfS5cclxuICAgICAqL1xyXG4gICAgZ2V0RW1wdHlNYXRyaXgodHlwZSwgc2l6ZSkge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIE1BVFJJWF9UWVBFUy5TSU1QTEU6IHJldHVybiBnZXRTcXVhcmVNYXRyaXgxKHNpemUpO1xyXG4gICAgICAgICAgICBjYXNlIE1BVFJJWF9UWVBFUy5IRVhBR09OOiByZXR1cm4gZ2V0SGV4YWdvbk1hdHJpeDEoc2l6ZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBbW11dO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQvtGB0YLQsNCy0LjRgtGMINC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0YwgcG93ZXIgdGlsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1NPUlRJTkdfVFlQRVN9IHR5cGUgLSDRgtC40L8g0LfQsNC/0L7Qu9C90LXQvdC40Y8gTWF0cml4LlxyXG4gICAgICogQHBhcmFtIHthcnJheX0gZW1wdHlNYXRyaXguXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBwbGF5ZXJJbmZvIC0gWyBbbmFtZSwgY29sb3JdLCAuLi4gXSAuXHJcbiAgICAgKi9cclxuICAgIGdldEZpbGxlZE1hdHJpeCh0eXBlLCBlbXB0eU1hdHJpeCwgcGxheWVySW5mbykge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFNPUlRJTkdfVFlQRVMuUkFORE9NOiByZXR1cm4gc2V0UmFuZG9tUG93ZXJJbk1hdHJpeChlbXB0eU1hdHJpeCwgcGxheWVySW5mbyk7XHJcbiAgICAgICAgICAgIC8vIGNhc2UgU09SVElOR19UWVBFUy5GUk9NX0ZJUlNUOiByZXR1cm4gc2V0UmFuZG9tUG93ZXJJbk1hdHJpeChlbXB0eU1hdHJpeCwgcGxheWVySW5mbyk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBlbXB0eU1hdHJpeDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQp9C10YDQtdC3INC/0YDQvtC80LXQttGD0YLQvtGH0L3Ri9C5INC80LDRgdGB0LjQsiwg0YIu0LouIG1hcCDQv9C+0L/Ri9GC0LDQtdGC0YHRjyDRgdC+0LfQtNCw0YLRjCDQvdC+0LLRi9C5INGN0LrQt9C10LzQv9C70Y/RgCBQb3dlck1hdHJpeC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHBsYXllck5hbWUuXHJcbiAgICAgKi9cclxuICAgIGdldFRpbGVMaXN0QnlQbGF5ZXIobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKHJvdy5maWx0ZXIodGlsZSA9PiB0aWxlLnBsYXllck5hbWUgPT09IG5hbWUpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkLmZsYXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb3VudFRpbGVzQnlOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUaWxlTGlzdEJ5UGxheWVyKG5hbWUpLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXN0V2l0aE9ubHlQbGF5ZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2godGlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISF0aWxlLnBsYXllck5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aWxlLnBsYXllck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0L/QuNGB0L7QuiB0aWxlLCDQutC+0YLQvtGA0YvQtSDQvNC+0LPRg9GCINCw0YLQsNC60L7QstCw0YLRjC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHBsYXllck5hbWUuXHJcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cclxuICAgICAqL1xyXG4gICAgZ2V0VGlsZUxpc3RCeUNhbkF0dGFjayhuYW1lKSB7XHJcbiAgICAgICAgY29uc3QgdGlsZUxpc3QgPSB0aGlzLmdldFRpbGVMaXN0QnlQbGF5ZXIobmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aWxlTGlzdC5maWx0ZXIodGlsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5laWdoYm9ycyA9IHRoaXMuZ2V0TmVpZ2hib3JzKHRpbGUpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyDQldGB0YLRjCDRgdC+0YHQtdC00L3QuNC1INC60LvQtdGC0LrQuCDQuCDQtdGB0YLRjCBwb3dlclZhbHVlINC00LvRjyDQsNGC0LDQutC4LlxyXG4gICAgICAgICAgICBpZiAobmVpZ2hib3JzLmxlbmd0aCAmJiB0aWxlLnBvd2VyVmFsdWUgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZWlnaGJvcnMuc29tZShuZWlnaGJvclRpbGUgPT4gbmVpZ2hib3JUaWxlLnBsYXllck5hbWUgIT09IG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YHQv9C40YHQvtC6INC00L7RgdGC0YPQv9C90YvRhSDQutC70LXRgtC+0Log0YfQtdGA0LXQtyBjb25uZWN0TGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1RpbGV9IHRpbGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzY2hlbWUgLSDRgdGF0LXQvNCwIC8g0YLQuNC/INC60LDRgNGC0YsuXHJcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cclxuICAgICAqL1xyXG4gICAgZ2V0TmVpZ2hib3JzKHsgY29ubmVjdExpc3QsIHBvc2l0aW9uIH0sIHNjaGVtZSA9IE1BVFJJWF9UWVBFUy5IRVhBR09OKSB7XHJcbiAgICAgICAgY29uc3QgeyB4OiBYLCB5OiBZIH0gPSBwb3NpdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKHNjaGVtZSA9PT0gTUFUUklYX1RZUEVTLlNJTVBMRSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvbm5lY3RMaXN0LmZvckVhY2godHlwZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmVpZ2hib3JQb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gQ09OTkVDVF9UWVBFLkxFRlRfVE9QKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JQb3NpdGlvbiA9IHsgeDogWCAtIDEsIHk6IFkgLSAxIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IENPTk5FQ1RfVFlQRS5SSUdIVF9CT1RUT00pIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvclBvc2l0aW9uID0geyB4OiBYICsgMSwgeTogWSArIDEgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmdldEl0ZW0obmVpZ2hib3JQb3NpdGlvbikpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2NoZW1lID09PSBNQVRSSVhfVFlQRVMuSEVYQUdPTikge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvbm5lY3RMaXN0LmZvckVhY2godHlwZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZWlnaGJvclBvc2l0aW9uID0gZ2V0TmVpZ2hib3JIZXhhZ29uMSh0eXBlLCBwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5nZXRJdGVtKG5laWdoYm9yUG9zaXRpb24pKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmZpbHRlcih0aWxlID0+ICEhdGlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE9wcG9uZW50TGlua2VkVGlsZShwb3NpdGlvbiwgc2NoZW1lKSB7XHJcbiAgICAgICAgY29uc3QgaXNPcHBvbmVudENvbmRpdGlvbiA9IChuYW1lMSwgbmFtZTIpID0+IG5hbWUxICE9PSBuYW1lMjtcclxuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy5nZXRJdGVtKHBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBuZWlnaGJvcnMgPSB0aGlzLmdldE5laWdoYm9ycyh0aWxlLCBzY2hlbWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmVpZ2hib3JzLmZpbHRlcihsaW5rZWRUaWxlID0+IGlzT3Bwb25lbnRDb25kaXRpb24oXHJcbiAgICAgICAgICAgIGxpbmtlZFRpbGUuZ2V0UGxheWVyTmFtZSgpLFxyXG4gICAgICAgICAgICB0aWxlLmdldFBsYXllck5hbWUoKVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ09MT1JfTElTVCwgU1RFUF9UWVBFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSAnLi4vLi4vbGlicmFyeSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUG93ZXJTdGF0ZSBleHRlbmRzIEJhc2VTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXNbU1RBVEVfRklFTERTLlBMQVlFUlNfTElTVF0gPSBbIC4uLm5hbWVzIF07XHJcbiAgICAgICAgdGhpc1tTVEFURV9GSUVMRFMuQ1VSUkVOVF9UVVJOXSA9IG51bGw7XHJcbiAgICAgICAgdGhpc1tTVEFURV9GSUVMRFMuQ1VSUkVOVF9TVEVQX1RZUEVdID0gbnVsbDtcclxuICAgICAgICB0aGlzW1NUQVRFX0ZJRUxEUy5BQ1RJVkVfVElMRV9QT1NJVElPTl0gPSB7fTtcclxuICAgICAgICB0aGlzW1NUQVRFX0ZJRUxEUy5BVkFJTEFCTEVfUE9TSVRJT05dID0gW107XHJcblxyXG4gICAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUobmFtZSwgdGhpcy5jcmVhdGVQbGF5ZXJTdGF0ZU9iaihDT0xPUl9MSVNUW2luZGV4XSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBsYXllclN0YXRlT2JqKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQbGF5ZXJTdGF0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudFN0ZXBUeXBlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShTVEFURV9GSUVMRFMuQ1VSUkVOVF9TVEVQX1RZUEUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50U3RlcFR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdGVQcm9wZXJ0eShTVEFURV9GSUVMRFMuQ1VSUkVOVF9TVEVQX1RZUEUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRUdXJuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0YXRlUHJvcGVydHkoU1RBVEVfRklFTERTLkNVUlJFTlRfVFVSTik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudFR1cm4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFNUQVRFX0ZJRUxEUy5DVVJSRU5UX1RVUk4sIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGF5ZXJzTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGF0ZVByb3BlcnR5KFNUQVRFX0ZJRUxEUy5QTEFZRVJTX0xJU1QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVN0ZXBUeXBlKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGVwVHlwZUJ5TmFtZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXJzTGlzdCgpLmZvckVhY2gob3RoZXJOYW1lID0+IHtcclxuICAgICAgICAgICAgaWYgKG90aGVyTmFtZSAhPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGVwVHlwZUJ5TmFtZShvdGhlck5hbWUsIFNURVBfVFlQRS5XQUlUSU5HKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0ZXBUeXBlQnlOYW1lKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpc1tuYW1lXS5zZXRTdGVwVHlwZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXZhaWxhYmxlUG93ZXIocGxheWVyTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW3BsYXllck5hbWVdW1NUQVRFX0ZJRUxEUy5BVkFJTEFCTEVfUE9XRVJdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF2YWlsYWJsZVBvd2VyKHBsYXllck5hbWUsIHBvd2VyKSB7XHJcbiAgICAgICAgdGhpc1twbGF5ZXJOYW1lXVtTVEFURV9GSUVMRFMuQVZBSUxBQkxFX1BPV0VSXSA9IHBvd2VyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF2YWlsYWJsZVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0YXRlUHJvcGVydHkoU1RBVEVfRklFTERTLkFWQUlMQUJMRV9QT1NJVElPTik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXZhaWxhYmxlUG9zaXRpb24odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFNUQVRFX0ZJRUxEUy5BVkFJTEFCTEVfUE9TSVRJT04sIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEF2YWlsYWJsZVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoU1RBVEVfRklFTERTLkFWQUlMQUJMRV9QT1NJVElPTiwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0QWN0aXZlVGlsZVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoU1RBVEVfRklFTERTLkFDVElWRV9USUxFX1BPU0lUSU9OLCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXNQZW9wbGVGbGFnVHJ1ZShwZW9wbGVOYW1lTGlzdCkge1xyXG4gICAgICAgIHBlb3BsZU5hbWVMaXN0LmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXNbbmFtZV0uc2V0SXNQZW9wbGVGbGFnKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElzUGVvcGxlRmxhZyhwbGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbcGxheWVyTmFtZV0uZ2V0SXNQZW9wbGVGbGFnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVySW5mbyhwbGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbcGxheWVyTmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVyQ29sb3IocGxheWVyTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBsYXllckluZm8ocGxheWVyTmFtZSkudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gWyBbbmFtZSwgY29sb3JdLCAuLi4gXSAuXHJcbiAgICAgKi9cclxuICAgIGdldFNob3RJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBsYXllcnNMaXN0KCkubWFwKG5hbWUgPT4gW25hbWUsIHRoaXMuZ2V0UGxheWVyQ29sb3IobmFtZSldKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGxheWVyU3RhdGUgZXh0ZW5kcyBCYXNlU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzW1NUQVRFX0ZJRUxEUy5TVEVQX1RZUEVdID0gbnVsbDtcclxuICAgICAgICB0aGlzW1NUQVRFX0ZJRUxEUy5WQUxVRV0gPSB2YWx1ZSB8fCAnJztcclxuICAgICAgICB0aGlzW1NUQVRFX0ZJRUxEUy5BVkFJTEFCTEVfUE9XRVJdID0gMDtcclxuICAgICAgICB0aGlzW1NUQVRFX0ZJRUxEUy5JU19QRU9QTEVdID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RlcFR5cGUodHlwZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoU1RBVEVfRklFTERTLlNURVBfVFlQRSwgdHlwZSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRJc1Blb3BsZUZsYWcodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFNUQVRFX0ZJRUxEUy5JU19QRU9QTEUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJc1Blb3BsZUZsYWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdGVQcm9wZXJ0eShTVEFURV9GSUVMRFMuSVNfUEVPUExFKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVRFX0ZJRUxEUyA9IHtcclxuICAgIFNURVBfVFlQRTogJ3N0ZXBUeXBlJywgICAgICAgICAgICAgICAgICAvLyDRiNCw0LMv0YLQuNC/INC00LXQudGB0YLQstC40Y8g0L3QsCDQutC70LXRgtC60LUuXHJcbiAgICBWQUxVRTogJ3ZhbHVlJywgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0YbQstC10YIuXHJcbiAgICBBVkFJTEFCTEVfUE9XRVI6ICdhdmFpbGFibGVQb3dlcicsICAgICAgLy8g0LTQvtGB0YLRg9C/0L3QviBwb3dlci5cclxuICAgIFBMQVlFUlNfTElTVDogJ3BsYXllcnNMaXN0JywgICAgICAgICAgICAvLyDRgdC/0LjRgdC+0Log0LjQs9GA0L7QutC+0LIuXHJcbiAgICBDVVJSRU5UX1RVUk46ICdjdXJyZW50VHVybicsICAgICAgICAgICAgLy8g0YLQtdC60YPRidC40Lkg0YXQvtC0LCDQsNC60YLQuNCy0L3Ri9C5INC40LPRgNC+0LouXHJcbiAgICBDVVJSRU5UX1NURVBfVFlQRTogJ2N1cnJlbnRTdGVwVHlwZScsICAgLy8g0Y3RgtCw0L8g0YLQtdC60YPRidC10LPQviDRhdC+0LTQsC5cclxuICAgIEFDVElWRV9USUxFX1BPU0lUSU9OOiAnYWN0aXZlVGlsZVBvc2l0aW9uJywgLy8g0LrQvtC+0YDQtNC40L3QsNGC0Ysg0LDQutGC0LjQstC90L7QuSDQv9C70LjRgtC60LguXHJcbiAgICBBVkFJTEFCTEVfUE9TSVRJT046ICdhdmFpbGFibGVQb3NpdGlvbicsICAgIC8vINC00L7RgdGC0YPQv9C90YvQtSDQtNC70Y8g0LDQutGC0LjQstC90L7QuSDQutC70LXRgtC60Lgg0YXQvtC00YsuXHJcbiAgICBJU19QRU9QTEU6ICdpc1Blb3BsZScsICAgICAgICAgICAgICAgICAgLy8g0YTQu9Cw0LMsINGH0LXQu9C+0LLQtdC6LlxyXG59IiwiaW1wb3J0IHsgQ0VMTF9UWVBFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH0sIHR5cGUgPSBDRUxMX1RZUEUuRU1QVFksIGNvbm5lY3RUeXBlKSB7XHJcbiAgICAgICAgdGhpc1tNQVRSSVhfRklFTERTLlBPV0VSX1ZBTFVFXSA9IG51bGw7XHJcbiAgICAgICAgdGhpc1tNQVRSSVhfRklFTERTLlBPU0lUSU9OXSA9IHsgLi4ucG9zaXRpb24gfTtcclxuICAgICAgICB0aGlzW01BVFJJWF9GSUVMRFMuVFlQRV0gPSB0eXBlO1xyXG4gICAgICAgIHRoaXNbTUFUUklYX0ZJRUxEUy5DT05ORUNUX0xJU1RdID0gW107XHJcblxyXG4gICAgICAgIGlmIChjb25uZWN0VHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzW01BVFJJWF9GSUVMRFMuQ09OTkVDVF9UWVBFXSA9IGNvbm5lY3RUeXBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvd2VyVmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbTUFUUklYX0ZJRUxEUy5QT1dFUl9WQUxVRV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29sb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbTUFUUklYX0ZJRUxEUy5DT0xPUl07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVyTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tNQVRSSVhfRklFTERTLlBMQVlFUl9OQU1FXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW01BVFJJWF9GSUVMRFMuVFlQRV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtNQVRSSVhfRklFTERTfSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBzZXRUeXBlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShNQVRSSVhfRklFTERTLlRZUEUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXNcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGlzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgc2V0VmFsdWVzKHZhbHVlcyA9IHt9KSB7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBPYmplY3QudmFsdWVzKE1BVFJJWF9GSUVMRFMpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xyXG4gICAgICAgICAgICBpZiAocHJvcGVydHkuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNba2V5XSAhPT0gdmFsdWVzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgdmFsdWVzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGFkZFRvQ29ubmVjdExpc3QodmFsdWUpIHtcclxuICAgICAgICBpZiAoIXRoaXNbTUFUUklYX0ZJRUxEUy5DT05ORUNUX0xJU1RdLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzW01BVFJJWF9GSUVMRFMuQ09OTkVDVF9MSVNUXS5wdXNoKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNQVRSSVhfRklFTERTID0ge1xyXG4gICAgVFlQRTogJ3R5cGUnLFxyXG4gICAgUE9XRVJfVkFMVUU6ICdwb3dlclZhbHVlJyxcclxuICAgIFBPU0lUSU9OOiAncG9zaXRpb24nLFxyXG4gICAgQ09OTkVDVF9MSVNUOiAnY29ubmVjdExpc3QnLFxyXG4gICAgUExBWUVSX05BTUU6ICdwbGF5ZXJOYW1lJyxcclxuICAgIENPTE9SOiAnY29sb3InLFxyXG4gICAgQ09OTkVDVF9UWVBFOiAnY29ubmVjdFR5cGUnLFxyXG59OyIsImV4cG9ydCB7IFBvd2VyTWF0cml4IH0gZnJvbSAnLi9NYXRyaXgnO1xyXG5leHBvcnQgeyBQb3dlclN0YXRlIH0gZnJvbSAnLi9TdGF0ZSc7XHJcbmV4cG9ydCB7IFRpbGUgfSBmcm9tICcuL1RpbGUnO1xyXG5cclxuZXhwb3J0IHsgTUFUUklYX05BTUVTIH0gZnJvbSAnLi9tYXRyaXhHZW5lcmF0b3JzJztcclxuXHJcbiIsImltcG9ydCB7IENFTExfVFlQRSwgQ09OTkVDVF9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4uL1RpbGUnO1xyXG5pbXBvcnQgeyBpc0V2ZW5OdW1iZXIsIGNoZWNrUG9zaXRpb25MaW1pdHMgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBNQVRSSVhfTkFNRSA9ICdoZXhhZ29uMSc7XHJcblxyXG4vKipcclxuICog0JPQtdC60YHQsNCz0L7QvSDQutC+0YLQvtGA0YvQuSDQvNCw0LrRgdC40LzQsNC70YzQvdC+INC30LDQv9C+0LvQvdC10L0g0Y3Qu9C10LzQtdC90YLQsNC80LguXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBzaXplIHsgeCwgeSB9LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEhleGFnb25NYXRyaXgxID0gKHNpemUpID0+IHtcclxuICAgIGNvbnN0IG1hdHJpeCA9IFtdO1xyXG5cclxuICAgIC8vINCg0LDRgdGB0YLQsNCy0LvRj9C10Lwg0Y3Qu9C10LzQtdC90YLRiy5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZS55OyBpKyspIHtcclxuICAgICAgICBjb25zdCByb3cgPSBbXTtcclxuICAgICAgICBjb25zdCBpc1Bvd2VyUm93ID0gaXNFdmVuTnVtYmVyKGkpOyAgICAgLy8g0KfQtdGA0LXQtyDQvtC00L3RgyDQuNC00YPRgiDRgdGC0YDQvtC60Lgg0YEgcG93ZXIuXHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZS54OyBqKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaXNFdmVuVGlsZSA9IGlzRXZlbk51bWJlcihqKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBvd2VyUm93IC0g0LzQvtC20L3QviDRgdGC0LDQstC40YLRjCBQb3dlci3QutC70LXRgtC60Lgg0Lgg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvQtSDRgdCy0Y/Qt9C4LlxyXG4gICAgICAgICAgICBpZiAoaXNQb3dlclJvdykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNPZmZzZXRSb3cgPSAoaSArIDIpICUgNCA9PT0gMDsgIC8vINCn0LXRgNC10Lcg0L7QtNC90YMg0YHRgtGA0L7QutCwINGBIFBvd2VyLdC60LvQtdGC0LrQsNC80LgoUG93ZXJSb3cpINC40LTRg9GCINGB0L4g0YHQtNCy0LjQs9C+0Lwg0LTQu9GPINGB0LLRj9C30LXQuS5cclxuICAgICAgICAgICAgICAgIGxldCB0eXBlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCh0LzQtdGJ0LDQtdC8IFBvd2VyLdGN0LvQtdC80LXQvdGCINCz0LTQtSDRjdGC0L4g0L3QtdC+0LHRhdC+0LTQuNC80L4uXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNPZmZzZXRSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDQmtGA0LDQudC90LjQtSDQutC70LXRgtC60Lgg0L3QtSDQuNC80LXRjtGCINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdGL0YUg0YHQstGP0LfQtdC5LlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBpc0V2ZW5UaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gaiAhPT0gMCAmJiBqICE9PSBzaXplLnggLSAxID8gQ0VMTF9UWVBFLkNPTk5FQ1RfTElORSA6IENFTExfVFlQRS5FTVBUWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IENFTExfVFlQRS5XQUlUSU5HX0FMTE9DQVRJT047XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBpc0V2ZW5UaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gQ0VMTF9UWVBFLldBSVRJTkdfQUxMT0NBVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGogIT09IDAgfHwgaiAhPT0gc2l6ZS54IC0gMSA/IENFTExfVFlQRS5DT05ORUNUX0xJTkUgOiBDRUxMX1RZUEUuRU1QVFk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29ubmVjdFR5cGUgPSB0eXBlID09PSBDRUxMX1RZUEUuQ09OTkVDVF9MSU5FID8gQ09OTkVDVF9UWVBFLkxJTkUgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgcm93LnB1c2gobmV3IFRpbGUoeyB4OiBqLCB5OiBpIH0sIHR5cGUsIGNvbm5lY3RUeXBlKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0VuZFJvdyA9IGkgPT09IChzaXplLnkgLSAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzRW5kVGlsZSA9IGogPT09IChzaXplLnggLSAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzRnVubmVsUm93ID0gKGkgKyAzKSAlIDQgPT09IDA7ICAgIC8vINGB0LLRj9C30Lgg0L7QsdGA0LDQt9GD0Y7RgiDQstC40LfRg9Cw0LvRjNC90YPRjiDQstC+0YDQvtC90LrRgy5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxIC0g0J3QtdGH0LXQs9C+INCy0LXRgNGC0LjQutCw0LvRjNC90L4g0YHQstGP0LfRi9Cy0LDRgtGMLlxyXG4gICAgICAgICAgICAgICAgLy8gMiAtINCSINGC0LDQutC+0Lwg0YHQu9GD0YfQsNC1INC90LUg0LHRg9C00LXRgiDQvdC40LbQvdC10LPQviBQb3dlci1Sb3cuXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiDQv9GA0LXQtNGD0L/RgNC10LbQtNCw0YLRjCDQvdCwINGN0YLQsNC/0LUg0L/QvtC70YPRh9C10L3QuNGPINC60L7QvdGE0LjQs9CwLlxyXG4gICAgICAgICAgICAgICAgaWYgKGlzRW5kVGlsZSB8fCBpc0VuZFJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5wdXNoKG5ldyBUaWxlKHsgeDogaiwgeTogaSB9LCBDRUxMX1RZUEUuRU1QVFkpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb25uZWN0VHlwZSA9IGlzRnVubmVsUm93XHJcbiAgICAgICAgICAgICAgICAgICAgPyBpc0V2ZW5UaWxlID8gQ09OTkVDVF9UWVBFLkxFRlRfVE9fQk9UVE9NIDogQ09OTkVDVF9UWVBFLlJJR0hUX1RPX0JPVFRPTVxyXG4gICAgICAgICAgICAgICAgICAgIDogaXNFdmVuVGlsZSA/IENPTk5FQ1RfVFlQRS5SSUdIVF9UT19CT1RUT00gOiBDT05ORUNUX1RZUEUuTEVGVF9UT19CT1RUT007XHJcblxyXG4gICAgICAgICAgICAgICAgcm93LnB1c2gobmV3IFRpbGUoeyB4OiBqLCB5OiBpIH0sIENFTExfVFlQRS5DT05ORUNUX0xJTkUsIGNvbm5lY3RUeXBlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hdHJpeC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0JfQsNC/0L7Qu9C90Y/QtdC8INC/0L7Qu9C1IFRpbGUgY29ubmVjdFR5cGUuXHJcbiAgICBtYXRyaXguZm9yRWFjaCgocm93LCB5SW5kZXgpID0+IHtcclxuICAgICAgICByb3cuZm9yRWFjaCgodGlsZSwgeEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aWxlLnR5cGUgPT09IENFTExfVFlQRS5XQUlUSU5HX0FMTE9DQVRJT04pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5laWdoYm9yc1Bvc2l0aW9uTGlzdCA9IFtcclxuICAgICAgICAgICAgICAgICAgICBbe3k6IHlJbmRleCwgeDogeEluZGV4IC0gMn0sIENPTk5FQ1RfVFlQRS5MRUZUX0xJTkVdLFxyXG4gICAgICAgICAgICAgICAgICAgIFt7eTogeUluZGV4LCB4OiB4SW5kZXggKyAyfSwgQ09OTkVDVF9UWVBFLlJJR0hUX0xJTkVdLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBbe3k6IHlJbmRleCAtIDIsIHg6IHhJbmRleCAtIDF9LCBDT05ORUNUX1RZUEUuUklHSFRfVE9fVE9QXSxcclxuICAgICAgICAgICAgICAgICAgICBbe3k6IHlJbmRleCAtIDIsIHg6IHhJbmRleCArIDF9LCBDT05ORUNUX1RZUEUuTEVGVF9UT19UT1BdLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBbe3k6IHlJbmRleCArIDIsIHg6IHhJbmRleCAtIDF9LCBDT05ORUNUX1RZUEUuUklHSFRfVE9fQk9UVE9NXSxcclxuICAgICAgICAgICAgICAgICAgICBbe3k6IHlJbmRleCArIDIsIHg6IHhJbmRleCArIDF9LCBDT05ORUNUX1RZUEUuTEVGVF9UT19CT1RUT01dLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnNQb3NpdGlvbkxpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbcG9zaXRpb24sIHR5cGVdID0gaXRlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja1Bvc2l0aW9uTGltaXRzKHBvc2l0aW9uLCB7IG1heFg6IHNpemUueCwgbWF4WTogc2l6ZS55IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIG1hdHJpeFt5SW5kZXhdW3hJbmRleF0udHlwZSA9PT0gQ0VMTF9UWVBFLldBSVRJTkdfQUxMT0NBVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLmFkZFRvQ29ubmVjdExpc3QodHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBtYXRyaXg7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXROZWlnaGJvciA9IChjb25uZWN0VHlwZSwgeyB4LCB5IH0pID0+IHtcclxuICAgIHN3aXRjaCAoY29ubmVjdFR5cGUpIHtcclxuICAgICAgICBjYXNlIENPTk5FQ1RfVFlQRS5MRUZUX1RPX0JPVFRPTTogcmV0dXJuIHsgeDogeCArIDEsIHk6IHkgKyAyIH07XHJcbiAgICAgICAgY2FzZSBDT05ORUNUX1RZUEUuUklHSFRfVE9fQk9UVE9NOiByZXR1cm4geyB4OiB4IC0gMSwgeTogeSArIDIgfTtcclxuICAgICAgICBjYXNlIENPTk5FQ1RfVFlQRS5MRUZUX1RPX1RPUDogcmV0dXJuIHsgeDogeCArIDEsIHk6IHkgLSAyIH07XHJcbiAgICAgICAgY2FzZSBDT05ORUNUX1RZUEUuUklHSFRfVE9fVE9QOiByZXR1cm4geyB4OiB4IC0gMSwgeTogeSAtIDIgfTtcclxuICAgICAgICBjYXNlIENPTk5FQ1RfVFlQRS5MRUZUX0xJTkU6IHJldHVybiB7IHg6IHggLSAyLCB5OiB5IH07XHJcbiAgICAgICAgY2FzZSBDT05ORUNUX1RZUEUuUklHSFRfTElORTogcmV0dXJuIHsgeDogeCArIDIsIHk6IHkgfTtcclxuICAgICAgICBjYXNlIENFTExfVFlQRS5SRUFEWTogcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IE1BVFJJWF9OQU1FIGFzIEhFWEFHT04xX01BVFJJWF9OQU1FIH0gZnJvbSAnLi9oZXhhZ29uMSc7XHJcbmltcG9ydCB7IE1BVFJJWF9OQU1FIGFzIFNRVUFSRTFfTUFUUklYX05BTUUgIH0gZnJvbSAnLi9zcXVhcmUxJztcclxuXHJcbmV4cG9ydCB7IGdldEhleGFnb25NYXRyaXgxLCBnZXROZWlnaGJvciBhcyBnZXROZWlnaGJvckhleGFnb24xIH0gZnJvbSAnLi9oZXhhZ29uMSc7XHJcbmV4cG9ydCB7IGdldFNxdWFyZU1hdHJpeDEgfSBmcm9tICcuL3NxdWFyZTEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BVFJJWF9OQU1FUyA9IHtcclxuICAgIEhFWEFHT04xX01BVFJJWF9OQU1FLFxyXG4gICAgU1FVQVJFMV9NQVRSSVhfTkFNRSxcclxufSIsImltcG9ydCB7IENFTExfVFlQRSwgQ09OTkVDVF9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4uL1RpbGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BVFJJWF9OQU1FID0gJ3NpbXBsZSc7XHJcblxyXG4vKipcclxuICog0JrQstCw0LTRgNCw0YIg0YEg0LTQstGD0LzRjyDRgdCy0Y/Qt9GP0LzQuC5cclxuICog0J/QtdGA0LLRi9C5INGB0L/QvtGB0L7QsSDRgNC10LDQu9C40LfQsNGG0LjQuCDQtNC70Y8g0YLQtdGB0YLQuNGA0L7QstCw0L3QuNGPLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gc2l6ZSAtIHsgeCwgeSB9LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFNxdWFyZU1hdHJpeDEgPSAoc2l6ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLnk7IGkrKykge1xyXG4gICAgICAgIGxldCByb3dSZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemUueDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBpICUgMiA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBqICUgMiA9PT0gMCA/IENFTExfVFlQRS5XQUlUSU5HIDogQ0VMTF9UWVBFLkVNUFRZXHJcbiAgICAgICAgICAgICAgICA6IGogJSAyID09PSAwID8gQ0VMTF9UWVBFLkVNUFRZIDogQ0VMTF9UWVBFLldBSVRJTkc7XHJcbiAgICAgICAgICAgIHJvd1Jlc3VsdC5wdXNoKG5ldyBUaWxlKHsgeDogaiwgeTogaSB9LCB0eXBlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiDQn9GA0L7RgdGC0LDQstC70Y/QtdC8INCy0LXRgNGF0L3QuNC1INGB0LLRj9C30Lgg0YHQu9C10LLQsC4gKi9cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByb3dSZXN1bHQuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IENFTExfVFlQRS5XQUlUSU5HKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNSb3cgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1Jvd1tpbmRleCAtIDFdPy50eXBlID09PSBDRUxMX1RZUEUuV0FJVElORykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbm5lY3RMaXN0LnB1c2goQ09OTkVDVF9UWVBFLkxFRlRfVE9QKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNSb3dbaW5kZXggLSAxXS5jb25uZWN0TGlzdC5wdXNoKENPTk5FQ1RfVFlQRS5SSUdIVF9CT1RUT00pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXN1bHQucHVzaChyb3dSZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn0iLCJpbXBvcnQgeyBDRUxMX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21OdW1iZXIgfSBmcm9tICcuLi8uLi8uLi9saWJyYXJ5L3V0aWxzJztcclxuaW1wb3J0IHsgTUFUUklYX0ZJRUxEUyB9IGZyb20gJy4uL1RpbGUnO1xyXG5cclxuLyoqXHJcbiAqINCf0YDQvtCy0LXRgNC60LAg0YfRkdGC0L3QvtC1INC70Lgg0YfQuNGB0LvQvi5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNFdmVuTnVtYmVyID0gdmFsdWUgPT4gdmFsdWUgJSAyID09PSAwO1xyXG5cclxuLyoqXHJcbiAqINCf0YDQvtCy0LXRgNC60LAg0LPRgNCw0L3QuNGGLiDQlNGD0LHQu9C40YDRg9C10YLRgdGPLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcG9zaXRpb24gLSB7IHgsIHkgfS5cclxuICogQHBhcmFtIHtvYmplY3R9IGxpbWl0cyAtIHsgbWF4WCwgbWF4WSB9LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNoZWNrUG9zaXRpb25MaW1pdHMgPSAoeyB4LCB5IH0sIHsgbWF4WCwgbWF4WSB9KSA9PiB7XHJcbiAgICBjb25zdCBsaW1pdHNNZXRob2QgPSAodmFsdWUsIG1heExpbWl0KSA9PiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IG1heExpbWl0O1xyXG5cclxuICAgIHJldHVybiBsaW1pdHNNZXRob2QoeCwgbWF4WCkgJiYgbGltaXRzTWV0aG9kKHksIG1heFkpO1xyXG59XHJcblxyXG4vKipcclxuICog0KHQvNGL0YHQuyDQvNC10YLQvtC00LA6INGB0LTQtdC70LDRgtGMINGA0LDQvdC00L7QvNC90L7QtSDRgNCw0YHQv9C+0LvQvtC20LXQvdC40LUg0LTQu9GPINC40LPRgNC+0LrQvtCyINC4INC40YUg0LrQu9C10YLQvtC6LlxyXG4gKiDQpNC+0YDQvNC40YDRg9C10Lwg0YHQv9C40YHQvtC6INGB0LLQvtCx0L7QtNC90YvRhSDQutC70LXRgtC+0LogLT4g0LLRi9Cx0LjRgNCw0LXQvCDRgNCw0L3QtNC+0LzQvdGD0Y4g0LjQtyDQvdC40YUgLT4g0L/QtdGA0LXRgdGC0YDQsNC40LLQsNC10Lwg0LzQsNGB0YHQuNCyLlxyXG4gKiDQn9C+INC40YLQvtCz0YMg0LjQtyDQvNCw0YHRgdC40LLQsCDRgdGC0YDQvtC40Lwg0L7RgtC+0LHRgNCw0LbQtdC90LjQtS5cclxuICpcclxuICogQHBhcmFtIHthcnJheX0gbWF0cml4XHJcbiAqIEBwYXJhbSB7YXJyYXl9IHBsYXllckluZm9cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRSYW5kb21Qb3dlckluTWF0cml4ID0gKG1hdHJpeCwgcGxheWVySW5mbykgPT4ge1xyXG4gICAgY29uc3Qgd2FpdGluZ0xpc3QgPSBtYXRyaXgucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gaXRlbS5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09IENFTExfVFlQRS5XQUlUSU5HX0FMTE9DQVRJT04pLm1hcChpdGVtID0+IGl0ZW0ucG9zaXRpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gWy4uLmFjYywgLi4ubGlzdF07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBjZWlsQnlDb3VudCA9IE1hdGguY2VpbCh3YWl0aW5nTGlzdC5sZW5ndGggLyBwbGF5ZXJJbmZvLmxlbmd0aCk7XHJcblxyXG4gICAgcGxheWVySW5mby5mb3JFYWNoKGluZm8gPT4ge1xyXG4gICAgICAgIGNvbnN0IFtwbGF5ZXJOYW1lLCBwbGF5ZXJDb2xvcl0gPSBpbmZvO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlaWxCeUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHdhaXRpbmdMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFJhbmRvbSA9IGdldFJhbmRvbU51bWJlcih3YWl0aW5nTGlzdC5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHdhaXRpbmdMaXN0W2N1cnJlbnRSYW5kb21dO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hdHJpeFtjdXJyZW50UG9zaXRpb24ueV1bY3VycmVudFBvc2l0aW9uLnhdLnNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgW01BVFJJWF9GSUVMRFMuUE9XRVJfVkFMVUVdOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFtNQVRSSVhfRklFTERTLkNPTE9SXTogcGxheWVyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgW01BVFJJWF9GSUVMRFMuUExBWUVSX05BTUVdOiBwbGF5ZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFtNQVRSSVhfRklFTERTLlRZUEVdOiBDRUxMX1RZUEUuUkVBRFksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB3YWl0aW5nTGlzdC5zcGxpY2UoY3VycmVudFJhbmRvbSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbWF0cml4O1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBDRUxMX1RBUkdFVF9UWVBFID0ge1xyXG4gICAgYnlQbGF5ZXJOYW1lOiAnYnlQbGF5ZXJOYW1lJyxcclxuICAgIGJ5UG9zaXRpb246ICdieVBvc2l0aW9uJyxcclxufTsiLCJleHBvcnQgeyBQb3dlckRhdGFBUEkgfSBmcm9tICcuL0RhdGFBUEknO1xyXG5cclxuZXhwb3J0IHsgTUFUUklYX05BTUVTIH0gZnJvbSAnLi9jb21wb25lbnRzJzsiLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgQ09ORklHX0VSUk9SX1RFWFQsIENPTkZJR19SRVFVSVJFRF9GSUVMRFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb25maWdIZWxwZXIgZXh0ZW5kcyBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuUkVRVUlSRURfRklFTERTID0gQ09ORklHX1JFUVVJUkVEX0ZJRUxEUztcclxuICAgICAgICB0aGlzLkVSUk9SX1RFWFQgPSBDT05GSUdfRVJST1JfVEVYVDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZykge1xyXG4gICAgICAgICAgICB0aGlzW2tleV0gPSBjb25maWdba2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tSZXF1aXJlZEZpZWxkcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlKGZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbZmllbGRdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlKGZpZWxkLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXNbZmllbGRdID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog0J7QsdGJ0LXQtSDQtNC70Y8gRGF0YSDQuCBSZW5kZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmFzZSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9GA0L7QstC10YDQutCwINGH0YLQviDQv9C10YDQtdC00LDQvdGLIC8g0L7Qv9GA0LXQtNC10LvQtdC90Ysg0L3QtdC+0LHRhdC+0LTQuNC80YvQtSDQv9C+0LvRjy5cclxuICAgICAqL1xyXG4gICAgY2hlY2tSZXF1aXJlZEZpZWxkcygpIHtcclxuICAgICAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLlJFUVVJUkVEX0ZJRUxEUyB8fCB0aGlzLlJFUVVJUkVEX0ZJRUxEUz8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5SRVFVSVJFRF9GSUVMRFMuZm9yRWFjaChmaWVsZE5hbWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpc1tmaWVsZE5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkVSUk9SX1RFWFRbZmllbGROYW1lLnRvVXBwZXJDYXNlKCldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gIWhhc0Vycm9yO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqINCR0LDQt9C+0LLRi9C1INGC0LjQv9GLINGB0L7QsdGL0YLQuNC5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJBU0VfSEFORExFUl9UWVBFUyA9IHtcclxuICAgIEVMRU1FTlRfQ0hBTkdFRDogJ2VsZW1lbnRDaGFuZ2VkJyxcclxuICAgIFRJTEVfQ0xJQ0s6ICd0aWxlQ2xpY2snLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ09ORklHX1JFUVVJUkVEX0ZJRUxEUyA9IFsnQ09VTlRfUExBWUVSJywgJ01BUCddO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTkZJR19FUlJPUl9URVhUID0ge1xyXG4gICAgQ09VTlRfUExBWUVSOiAn0J3QtSDQv9C10YDQtdC00LDQvSBDT1VOVF9QTEFZRVInLFxyXG4gICAgTUFQOiAn0J3QtSDQv9C10YDQtdC00LDQvSBNQVAnLFxyXG59OyIsImV4cG9ydCB7IEJhc2UgfSBmcm9tICcuL2Jhc2UnO1xyXG5leHBvcnQgeyBCQVNFX0hBTkRMRVJfVFlQRVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmV4cG9ydCB7IENvbmZpZ0hlbHBlciB9IGZyb20gJy4vQ29uZmlnSGVscGVyJzsiLCJpbXBvcnQgeyBCYXNlLCBDb25maWdIZWxwZXIsIEJBU0VfSEFORExFUl9UWVBFUyB9IGZyb20gJy4uL2Jhc2UnO1xyXG5pbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tICcuL1N0YXRlJztcclxuaW1wb3J0IHsgQmFzZU1hdHJpeCB9IGZyb20gJy4vTWF0cml4JztcclxuaW1wb3J0IHtcclxuICAgIFJFUVVJUkVEX0ZJRUxEUyxcclxuICAgIEVSUk9SX1RFWFQsXHJcbiAgICBERUZBVUxUX1BMQVlFUl9OQU1FLFxyXG59IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiDQo9C90LjQstC10YDRgdCw0LvRjNC90YvQtSDQvNC10YLQvtC00Ysg0LTQu9GPINGA0LDQsdC+0YLRiyDRgSDQtNCw0L3QvdGL0LzQuC5cclxuICog0JTQsNC90L3Ri9C1INCyINCy0LjQtNC1INC80LDRgtGA0LjRhtGLINC/0L4g0L/QtdGA0LXQtNCw0L3QvdGL0Lwg0YDQsNC30LzQtdGA0LDQvC5cclxuICpcclxuICogY29uZmlnIC0g0YDQsNC30LzQtdGAIG1hdHJpeCDQutC+0YLQvtGA0YPRjiDQvdC10L7QsdGF0L7QtNC40LzQviDQv9C+0YHRgtGA0L7QuNGC0YwuXHJcbiAqIGhhbmRsZXIgLSDQstGL0LfQvtCyINC/0YDQuCDQuNC30LzQtdC90LXQvdC40Lgg0L/QvtC70LXQuSBtYXRyaXguXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGF0YUhlbHBlciBleHRlbmRzIEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgY29uZmlnLCBpc0RldiA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5SRVFVSVJFRF9GSUVMRFMgPSBSRVFVSVJFRF9GSUVMRFM7XHJcbiAgICAgICAgdGhpcy5FUlJPUl9URVhUID0gRVJST1JfVEVYVDtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBDb25maWdIZWxwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLmlzRGV2ID0gaXNEZXY7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrUmVzdWx0ID0gdGhpcy5jaGVja1JlcXVpcmVkRmllbGRzKCk7XHJcblxyXG4gICAgICAgIGlmIChjaGVja1Jlc3VsdCB8fCBpc0Rldikge1xyXG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7Qv9GA0LXQtNC10LvQtdC90LjQtSDQvNC40L3QuNC80LDQu9GM0L3QviDQvdC10L7QsdGF0L7QtNC40LzRi9GFINC00LDQvdC90YvRhS5cclxuICAgICAqL1xyXG4gICAgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBCYXNlU3RhdGUoKTtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG5ldyBCYXNlTWF0cml4KHRoaXMuY29uZmlnLk1BUCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGUocHJvcGVydHksIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRlUHJvcGVydHkocHJvcGVydHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5nZXRTdGF0ZVByb3BlcnR5KHByb3BlcnR5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC40LzQtdC90LAv0LrQu9GO0YfQuCDQuNCz0YDQvtC60L7QsiDRgdCw0LzRi9C8INC/0YDQvtGB0YLRi9C8INGB0L/QvtGB0L7QsdC+0LwuXHJcbiAgICAgKi9cclxuICAgIGdldFBsYXllcnNOYW1lKCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXROdW1iZXJPZlBsYXllcnMoKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKERFRkFVTFRfUExBWUVSX05BTUUgKyBpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TnVtYmVyT2ZQbGF5ZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5DT1VOVF9QTEFZRVIgfHwgMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0L7Qu9GD0YfQuNGC0Ywg0Y3Qu9C10LzQtdC90YIg0LzQsNGC0YDQuNGG0Ysg0L/QviDQutC+0L7RgNC00LjQvdCw0YLQsNC8LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwb3NpdGlvbiAtIHsgeCwgeSB9IC5cclxuICAgICAqL1xyXG4gICAgZ2V0SXRlbUJ5UG9zaXRpb24ocG9zaXRpb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXguZ2V0SXRlbShwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQnNC10L3Rj9C10Lwg0L7QtNC90L4g0L/QtdGA0LXQtNCw0L3QvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQvdCwINC00YDRg9Cz0L7QtVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIHthbnl8YXJyYXl9IG9sZFZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gbmV3VmFsdWVcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlSGFuZGxlclxyXG4gICAgICovXHJcbiAgICBjaGFuZ2VQYXJhbUJ5UGFyYW0ocHJvcGVydHksIG9sZFZhbHVlLCBuZXdWYWx1ZSwgdXNlSGFuZGxlciA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlZExpc3QgPSB0aGlzLm1hdHJpeC5jaGFuZ2VQYXJhbUJ5UGFyYW0ocHJvcGVydHksIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgICAgIGlmICh1c2VIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZWRMaXN0LmZvckVhY2gocG9zaXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VIYW5kbGVyKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KHQvtCx0YvRgtC40LUg0LjQt9C80LXQvdC10L3QuNGPINGN0LvQtdC80LXQvdGC0LAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBvc2l0aW9uIC0geyB4LCB5IH0gLlxyXG4gICAgICovXHJcbiAgICB1c2VIYW5kbGVyKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy51c2VIYW5kbGVyV2l0aEN1c3RvbShCQVNFX0hBTkRMRVJfVFlQRVMuRUxFTUVOVF9DSEFOR0VELCBwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQm9GO0LHQvtC1INGB0L7QsdGL0YLQuNC1LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gZGF0YVxyXG4gICAgICovXHJcbiAgICB1c2VIYW5kbGVyV2l0aEN1c3RvbSh0eXBlLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyKHR5cGUsIGRhdGEpO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqINCh0LDQvNGL0LUg0L/RgNC+0YHRgtGL0LUg0LzQtdGC0L7QtNGLINC00LvRjyDRgNCw0LHQvtGC0Ysg0YEg0LTQsNC90L3Ri9C80Lgg0LIg0LLQuNC00LUg0LzQsNGC0YDQuNGG0YsuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmFzZU1hdHJpeCBleHRlbmRzIEFycmF5IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLk1BWF9YID0gY29uZmlnLlNJWkUueDtcclxuICAgICAgICB0aGlzLk1BWF9ZID0gY29uZmlnLlNJWkUueTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQuNC90LjQvNCw0LXQvCDQvNCw0YLRgNC40YbRgyDQuCDQv9C+0YHQu9C10LTQvtCy0LDRgtC10LvRjNC90L4g0LfQsNC/0LjRgdGL0LLQsNC10YIg0LXRkS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBtYXRyaXguXHJcbiAgICAgKi9cclxuICAgIG92ZXJ3cml0ZU1hdHJpeChtYXRyaXgpIHtcclxuICAgICAgICBtYXRyaXguZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzW2luZGV4XSA9IHJvdztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0L7Qu9GD0YfQuNGC0Ywg0Y3Qu9C10LzQtdC90YIg0LzQsNGC0YDQuNGG0YsuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBvc2l0aW9uIC0geyB4LCB5IH0gLlxyXG4gICAgICovXHJcbiAgICBnZXRJdGVtKHsgeCwgeSB9KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrUG9zaXRpb25MaW1pdHMoeyB4LCB5IH0pKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVja1Bvc2l0aW9uTGltaXRzIEVSUk9SJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzW3ldW3hdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JzQtdC90Y/QtdC8INC+0LTQvdC+INC/0LXRgNC10LTQsNC90L3QvtC1INC30L3QsNGH0LXQvdC40LUg0L3QsCDQtNGA0YPQs9C+0LVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSB7YW55fGFycmF5fSBvbGRWYWx1ZVxyXG4gICAgICogQHBhcmFtIHthbnl9IG5ld1ZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7YXJyYXl9IFt7IHgsIHkgfV0uINCa0L7QvtGA0LTQuNC90LDRgtGLINC40LfQvNC10L3RkdC90L3Ri9GFINGN0LvQtdC80LXQvdGC0L7Qsi5cclxuICAgICAqL1xyXG4gICAgY2hhbmdlUGFyYW1CeVBhcmFtKHByb3BlcnR5LCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcclxuICAgICAgICBjb25zdCBjaGFuZ2VkTGlzdCA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNFcXVhbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbGRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0VxdWFsID0gb2xkVmFsdWUuc29tZShvbGRWYWx1ZUl0ZW0gPT4gb2xkVmFsdWVJdGVtID09PSBpdGVtW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRXF1YWwgPSBpdGVtW3Byb3BlcnR5XSA9PT0gb2xkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzRXF1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtW3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkTGlzdC5wdXNoKGl0ZW0ucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoYW5nZWRMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZ2V0RW1wdHlNYXRyaXgoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLk1BWF9YICYmICF0aGlzLk1BWF9ZKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbW11dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLk1BWF9ZOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvd1Jlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLk1BWF9YOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHJvd1Jlc3VsdC5wdXNoKHsgeDogaiwgeTogaSB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gocm93UmVzdWx0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9GA0L7QstC10YDQutCwINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjRjiDQs9GA0LDQvdC40YbRiyDQvNCw0YLRgNC40YbRiy5cclxuICAgICAqL1xyXG4gICAgY2hlY2tQb3NpdGlvbkxpbWl0cyh7IHgsIHkgfSkge1xyXG4gICAgICAgIGNvbnN0IGxpbWl0c01ldGhvZCA9ICh2YWx1ZSwgbWF4TGltaXQpID0+IHZhbHVlID49IDAgJiYgdmFsdWUgPD0gbWF4TGltaXQ7XHJcblxyXG4gICAgICAgIHJldHVybiBsaW1pdHNNZXRob2QoeCwgdGhpcy5NQVhfWCkgJiYgbGltaXRzTWV0aG9kKHksIHRoaXMuTUFYX1kpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xyXG5cclxuLyoqXHJcbiAqINCh0LDQvNGL0LUg0L/RgNC+0YHRgtGL0LUg0LzQtdGC0L7QtNGLINC00LvRjyDRgNCw0LHQvtGC0Ysg0YEg0YHQvtGB0YLQvtGP0L3QuNC10Lwg0L/RgNC40LvQvtC20LXQvdC40Y8g0LjQu9C4INC10LPQviDQvtGC0LTQtdC70YzQvdGL0YUg0YfQsNGB0YLQtdC5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJhc2VTdGF0ZSBleHRlbmRzIEJhc2Uge1xyXG4gICAgc2V0U3RhdGUocHJvcGVydHksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRlUHJvcGVydHkocHJvcGVydHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1twcm9wZXJ0eV07XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgRVJST1JfVEVYVCA9IHtcclxuICAgIEhBTkRMRVI6ICfQndC1INC/0LXRgNC10LTQsNC9IGhhbmRsZXInLFxyXG4gICAgQ09ORklHOiAn0J3QtSDQv9C10YDQtdC00LDQvSBjb25maWcnLFxyXG59XHJcblxyXG4vLyDQntCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LUg0L/QvtC70Y8g0LTQu9GPIFwiRGF0YUhlbHBlclwiLlxyXG5leHBvcnQgY29uc3QgUkVRVUlSRURfRklFTERTID0gWydoYW5kbGVyJywgJ2NvbmZpZyddO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUExBWUVSX05BTUUgPSAncGxheWVyJzsiLCJleHBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9yZW5kZXIvY29tcG9uZW50cy9CYXNlJztcclxuZXhwb3J0IHsgQkFTRV9IQU5ETEVSX1RZUEVTIH0gZnJvbSAnLi9iYXNlJztcclxuXHJcbmV4cG9ydCB7IFJlbmRlckhlbHBlciB9IGZyb20gJy4vcmVuZGVyL1JlbmRlckhlbHBlcic7XHJcbmV4cG9ydCB7IERhdGFIZWxwZXIgfSBmcm9tICcuL2RhdGEvRGF0YUhlbHBlcic7XHJcbmV4cG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gJy4vZGF0YS9TdGF0ZSc7XHJcbmV4cG9ydCB7IEJhc2VNYXRyaXggfSBmcm9tICcuL2RhdGEvTWF0cml4JztcclxuXHJcbmltcG9ydCB7IGdldEVtcHR5RGl2LCBnZXREaXYgfSBmcm9tICcuL3JlbmRlci91dGlscyc7XHJcbmltcG9ydCB7IENPTU1PTl9DTEFTU19OQU1FUywgQ09NTU9OX0RPTV9JRFMgfSBmcm9tICcuL3JlbmRlci9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlclV0aWxzID0ge1xyXG4gICAgZ2V0RW1wdHlEaXYsXHJcbiAgICBnZXREaXYsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDT01NT04gPSB7XHJcbiAgICBDTEFTU19OQU1FUzogQ09NTU9OX0NMQVNTX05BTUVTLFxyXG4gICAgRE9NX0lEUzogQ09NTU9OX0RPTV9JRFMsXHJcbn0iLCJpbXBvcnQgeyBnZXREaXYsIGdldEVtcHR5RGl2IH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IGdldEhlYWRlciB9IGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgeyBDT01NT05fQ0xBU1NfTkFNRVMsIENPTU1PTl9ET01fSURTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBidWlsZERpdk1hdHJpeCB9IGZyb20gJy4vY29tcG9uZW50cy9EaXZNYXRyaXgnO1xyXG5cclxuLyoqXHJcbiAqIFRPRE86INC90LXQvtCx0YXQvtC00LjQvNC+INC00L7QsdCw0LLQuNGC0Ywg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQt9Cw0LzQtdC90Y/RgtGMINC40LrQvtC90LrQuC5cclxuICpcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJIZWxwZXIge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVE9ETzog0L3QtdC+0LHRhdC+0LTQuNC80L4g0YDQtdCw0LvQuNC30L7QstCw0YLRjCDQutC+0YDRgNC10LrRgtC90L7QtSDQuNC30LzQtdC90LXQvdC40LUg0LLRgdGC0YDQvtC10L3QvdGL0YUg0LrQu9Cw0YHRgdC+0LIv0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YDQvtCyLlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIsIGNvbmZpZywgaXNEZXYgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuRE9NX0lEUyA9IGNvbmZpZy5ET01fSURTO1xyXG4gICAgICAgIHRoaXMuVVNFX1RBQkxFID0gY29uZmlnLlVTRV9UQUJMRTtcclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgIHRoaXMuaXNEZXYgPSBpc0RldjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCR0LDQt9C+0LLQsNGPINC/0YPRgdGC0LDRjyDRhNC+0YDQvNCwINGBIGlkOlxyXG4gICAgICogINC+0YHQvdC+0LLQvdC+0LUg0L/QvtC70LVcclxuICAgICAqICDQstGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdC+0LUg0L/QvtC70LVcclxuICAgICAqICBoZWFkZXJcclxuICAgICAqL1xyXG4gICAgZ2V0QmFzZUZvcm0oKSB7XHJcbiAgICAgICAgY29uc3QgYXBwTm9kZSA9IGdldERpdihDT01NT05fQ0xBU1NfTkFNRVMuQVBQLCB0aGlzLkRPTV9JRFMucm9vdCk7XHJcbiAgICAgICAgY29uc3QgY29udGVudE5vZGUgPSBnZXREaXYoQ09NTU9OX0NMQVNTX05BTUVTLkpVU1RJRllfQ0VOVEVSKTtcclxuICAgICAgICBjb25zdCBtYWluTm9kZSA9IGdldERpdihDT01NT05fQ0xBU1NfTkFNRVMuRkxFWCwgQ09NTU9OX0RPTV9JRFMuTUFJTik7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbE5vZGUgPSBnZXREaXYobnVsbCwgQ09NTU9OX0RPTV9JRFMuQURESVRJT05BTCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRlck5vZGUgPSB0aGlzLmdldEhlYWRlcigpO1xyXG5cclxuICAgICAgICBjb250ZW50Tm9kZS5hcHBlbmQobWFpbk5vZGUsIGFkZGl0aW9uYWxOb2RlKTtcclxuICAgICAgICBhcHBOb2RlLmFwcGVuZChoZWFkZXJOb2RlLCBjb250ZW50Tm9kZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBhcHBOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFkZGl0aW9uYWxOb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRCeUlkKENPTU1PTl9ET01fSURTLkFERElUSU9OQUwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhlYWRlcigpIHtcclxuICAgICAgICByZXR1cm4gZ2V0SGVhZGVyKENPTU1PTl9DTEFTU19OQU1FUy5IRUFERVIsIENPTU1PTl9DTEFTU19OQU1FUy5IRUFERVJfSU1HLCBDT01NT05fRE9NX0lEUy5IRUFERVIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVsZW1lbnRCeUlkKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXYoY2xhc3NOYW1lLCBpZCwgdGV4dCwgY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gZ2V0RGl2KGNsYXNzTmFtZSwgaWQsIHRleHQsIGNoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbXB0eURpdigpIHtcclxuICAgICAgICByZXR1cm4gZ2V0RW1wdHlEaXYoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INCw0YLRgNC40LHRg9GC0Ysg0LTQu9GPINC60LvQtdGC0LrQuC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGlsZUVsZW1lbnQgLSBET00t0Y3Qu9C10LzQtdC90YIg0LrQu9C10YLQutC4LlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZSAtINCw0YLRgNC40LHRg9GC0YsuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IC1cclxuICAgICAqL1xyXG4gICAgc2V0QXR0cmlidXRlSW5UaWxlKHRpbGVFbGVtZW50LCBhdHRyaWJ1dGUsIHByZWZpeCkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBhdHRyaWJ1dGVba2V5XTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRWYWx1ZSA9PT0gJ29iamVjdCcgJiYgY3VycmVudFZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVJblRpbGUodGlsZUVsZW1lbnQsIGN1cnJlbnRWYWx1ZSwga2V5KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLSR7cHJlZml4ID8gcHJlZml4ICsgJy0nIDogJyd9JHtrZXl9YCwgYXR0cmlidXRlW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENPTVBPTkVOVFNcclxuXHJcbiAgICBnZXRDb250ZW50TWV0aG9kcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBnZXREaXY6IHRoaXMuZ2V0RGl2LFxyXG4gICAgICAgICAgICBnZXRFbXB0eURpdjogdGhpcy5nZXRFbXB0eURpdixcclxuICAgICAgICAgICAgZ2V0VGlsZTogdGhpcy5idWlsZERpdlRpbGUsXHJcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZUluVGlsZTogdGhpcy5zZXRBdHRyaWJ1dGVJblRpbGUsXHJcbiAgICAgICAgICAgIHRpbGVIYW5kbGVyOiB0aGlzLmhhbmRsZXIsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZERpdk1hdHJpeChtYXRyaXgpIHtcclxuICAgICAgICByZXR1cm4gYnVpbGREaXZNYXRyaXgobWF0cml4LCB0aGlzLmdldENvbnRlbnRNZXRob2RzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkRGl2VGlsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXYoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGdldERpdiB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbi8qKlxyXG4gKiDQp9GC0L4t0YLQviDRgdCw0LzQvtC1INC/0YDQvtGB0YLQvtC1LCDRh9GC0L7QsdGLINGD0L/RgNC+0YHQuNGC0Ywg0YDQsNCx0L7RgtGDINGBIERPTS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGdldERpdihjbGFzc05hbWUsIGlkLCB0ZXh0LCBjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiBnZXREaXYoY2xhc3NOYW1lLCBpZCwgdGV4dCwgY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhc3RJbihwYXJlbnROb2RlKSB7XHJcbiAgICAgICAgaWYgKHBhcmVudE5vZGUgJiYgdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ09NTU9OX0NMQVNTX05BTUVTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiDQodC+0LfQtNCw0ZHQvCDQutCw0YDRgtGDINCyINCy0LjQtNC1INGC0LDQsdC70LjRhtGLINC00LvRjyDQv9GA0LjQu9C+0LbQtdC90LjRjy5cclxuICpcclxuICogQHBhcmFtIHthcnJheX0gbWF0cml4XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZW50TWV0aG9kcyAtINC80LXRgtC+0LTRiyDRgNC10L3QtNC10YDQsCDQtNC70Y8g0LrQvtC90YLQtdC90YLQsC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZERpdk1hdHJpeChtYXRyaXgsIGNvbnRlbnRNZXRob2RzKSB7XHJcbiAgICBjb25zdCB3cmFwRWxlbWVudCA9IGNvbnRlbnRNZXRob2RzLmdldERpdigpO1xyXG5cclxuICAgIHdyYXBFbGVtZW50LmNsYXNzTmFtZSA9IENPTU1PTl9DTEFTU19OQU1FUy5GTEVYX0NPTFVNTjtcclxuXHJcbiAgICBtYXRyaXguZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvd0VsZW1lbnQgPSBjb250ZW50TWV0aG9kcy5nZXREaXYoKTtcclxuXHJcbiAgICAgICAgcm93RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JkZXInLCBpbmRleCk7XHJcbiAgICAgICAgcm93RWxlbWVudC5jbGFzc05hbWUgPSBDT01NT05fQ0xBU1NfTkFNRVMuRkxFWDtcclxuXHJcbiAgICAgICAgLy8g0KHQtNCy0LjQsyDRgdGC0YDQvtC6INGBIHBvd2VyINGH0LXRgNC10Lcg0L7QtNC90YMuXHJcbiAgICAgICAgaWYgKGluZGV4ICUgMiAhPT0gMCkge1xyXG4gICAgICAgICAgICByb3dFbGVtZW50LmNsYXNzTmFtZSA9IGAke3Jvd0VsZW1lbnQuY2xhc3NOYW1lfSBtYXJnaW5MZWZ0TWlkZGxlYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJvdy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0aWxlID0gY29udGVudE1ldGhvZHMuZ2V0VGlsZShpdGVtLCBjb250ZW50TWV0aG9kcyk7XHJcblxyXG4gICAgICAgICAgICByb3dFbGVtZW50LmFwcGVuZENoaWxkKHRpbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdyYXBFbGVtZW50LmFwcGVuZENoaWxkKHJvd0VsZW1lbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHdyYXBFbGVtZW50O1xyXG59IiwiaW1wb3J0IHsgZ2V0RGl2IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgYnVyZ2VyIGZyb20gJy4uLy4uL3N0YXRpYy9mcmVlLWljb24tZm9udC1tZW51LWJ1cmdlci5zdmcnO1xyXG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi4vLi4vc3RhdGljL2ZyZWUtaWNvbi1mb250LXNldHRpbmdzLnN2Zyc7XHJcblxyXG4vKipcclxuICog0KjQsNC/0LrQsCDRgSDQutC90L7Qv9C60LDQvNC4INCx0YPRgtC10YDQsdGA0L7QtNCwINC4INGI0LXRgdGC0LXRgNGR0L3QutC+0LkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBoZWFkZXJDbGFzc05hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9IGltZ0NsYXNzTmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRIZWFkZXIoaGVhZGVyQ2xhc3NOYW1lLCBpbWdDbGFzc05hbWUsIGlkKSB7XHJcbiAgICBjb25zdCBub2RlID0gZ2V0RGl2KGhlYWRlckNsYXNzTmFtZSwgaWQsICk7XHJcbiAgICBjb25zdCBidXJnZXJJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBjb25zdCBzZXR0aW5nc0ljb24gPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICBidXJnZXJJY29uLnNyYyA9IGJ1cmdlcjtcclxuICAgIHNldHRpbmdzSWNvbi5zcmMgPSBzZXR0aW5ncztcclxuXHJcbiAgICBidXJnZXJJY29uLmNsYXNzTmFtZSA9IGltZ0NsYXNzTmFtZTtcclxuICAgIHNldHRpbmdzSWNvbi5jbGFzc05hbWUgPSBpbWdDbGFzc05hbWU7XHJcblxyXG4gICAgbm9kZS5hcHBlbmQoYnVyZ2VySWNvbiwgc2V0dGluZ3NJY29uKTtcclxuXHJcbiAgICByZXR1cm4gbm9kZTtcclxufSIsImV4cG9ydCBjb25zdCBDT01NT05fQ0xBU1NfTkFNRVMgPSB7XHJcbiAgICBBUFA6ICdhcHBsaWNhdGlvbicsXHJcblxyXG4gICAgRkxFWDogJ2ZsZXgnLFxyXG4gICAgSlVTVElGWV9DRU5URVI6ICdqdXN0aWZ5Q2VudGVyJyxcclxuICAgIEZMRVhfQ09MVU1OOiAnZmxleENvbHVtbicsXHJcblxyXG4gICAgSEVBREVSOiAnaGVhZGVyJyxcclxuICAgIEhFQURFUl9JTUc6ICdoZWFkZXJfaW1nJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENPTU1PTl9ET01fSURTID0ge1xyXG4gICAgTUFJTjogJ21haW5GaWVsZCcsXHJcbiAgICBBRERJVElPTkFMOiAnYWRkaXRpb25hbEZpZWxkJyxcclxuICAgIEhFQURFUjogJ2hlYWRlcicsXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGdldEVtcHR5RGl2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4vKipcclxuICogRGl2INGBINC/0YDQvtGB0YLRi9C8INC90LDQv9C+0LvQvdC10L3QuNC10LwuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0RGl2ID0gKGNsYXNzTmFtZSwgaWQsIHRleHQsIGNoaWxkKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZ2V0RW1wdHlEaXYoKTtcclxuXHJcbiAgICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmQoY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59OyIsIi8qKlxyXG4gKiDQktC+0LfQstGA0LDRidCw0LXRgiDRgNCw0L3QtNC+0LzQvdC+0LUg0YfQuNGB0LvQviDQv9C+INC/0LXRgNC10LTQsNC90L3Ri9C8INC/0LDRgNCw0LzQtdGC0YDQsNC8LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWluLlxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tTnVtYmVyID0gKG1heCA9IDEwLCBtaW4gPSAwKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyIsImltcG9ydCB7IEhBTkRMRVJfVFlQRSwgU1RFUF9UWVBFLCBUVVJOX0JVVFRPTl9FVkVOVF9UWVBFUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICog0J3QsNCx0L7RgCDQvNC10YLQvtC00L7QsiDQtNC70Y8g0LLRi9C/0L7Qu9C90LXQvdC40Y8g0YHQvtCx0YvRgtC40Lkg0L/RgNC40LvQvtC20LXQvdC40Y8uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG93ZXJMb2dpY0FQSSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihpc0Rldikge1xyXG4gICAgICAgIHRoaXMuaXNEZXYgPSBpc0RldjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQktGL0L/QvtC70L3Rj9C10Lwg0YDQsNC90LTQvtC80L3Ri9C1INCw0YLQsNC60Lgg0L/QviDQv9C10YDQtdC00LDQvdC90L7QvNGDINC40LPRgNC+0LrRg1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcGFyYW0ge1Bvd2VyRGF0YUFQSX0gRGF0YUFwaSAtXHJcbiAgICAgKi9cclxuICAgIGRvUmFuZG9tQXR0YWNrcyhuYW1lLCBEYXRhQXBpKSB7XHJcbiAgICAgICAgY29uc3QgdGlsZUxpc3QgPSBEYXRhQXBpLm1hdHJpeC5nZXRUaWxlTGlzdEJ5Q2FuQXR0YWNrKG5hbWUpO1xyXG5cclxuICAgICAgICB0aWxlTGlzdC5mb3JFYWNoKHRpbGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVUaWxlID0gRGF0YUFwaS5nZXRPcHBvbmVudFRpbGVMaXN0KHRpbGUucG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZVRpbGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBEYXRhQXBpLmRvUENBdHRhY2sodGlsZS5wb3NpdGlvbiwgYXZhaWxhYmxlVGlsZVswXS5wb3NpdGlvbiwgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGRvU2ltcGxlR2lmdFBvd2VyKG5hbWUsIERhdGFBcGkpIHtcclxuICAgICAgICBjb25zdCB0aWxlTGlzdCA9IERhdGFBcGkubWF0cml4LmdldFRpbGVMaXN0QnlQbGF5ZXIobmFtZSk7XHJcblxyXG4gICAgICAgIHRpbGVMaXN0LmZvckVhY2godGlsZSA9PiB7XHJcbiAgICAgICAgICAgIERhdGFBcGkuZG9HaXZlUG93ZXJQQyhuYW1lLCB0aWxlLnBvc2l0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0LHRgNCw0LHQvtGC0LrQsCDQutC70LjQutCwINC/0L4g0LrQvdC+0L/QutC1INGF0L7QtNCwLlxyXG4gICAgICog0JrQvdC+0L/QutCwINC/0L7QtNC00LXRgNC20LjQstCw0LXRgiDRgNCw0LfQvdGL0LUg0YHQvtGB0YLQvtGP0L3QuNGPINGBINGA0LDQt9C90L7QuSDRgNC10LDQutGG0LjQtdC5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UG93ZXJEYXRhQVBJfSBEYXRhQVBJLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFJlbmRlckFQSS5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpbmZvLCB7IHR5cGUgfSAtINC90LAg0YHQu9GD0YfQsNC5INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4INC00L7Qvy4g0LjQvdGE0L7RgNC80LDRhtC40LguXHJcbiAgICAgKi9cclxuICAgIHR1cm5CdXR0b25DbGlja0hhbmRsZXIoRGF0YUFQSSwgUmVuZGVyQVBJLCBpbmZvKSB7XHJcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBpbmZvO1xyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gSEFORExFUl9UWVBFLlRVUk5fQlVUVE9OX0NMSUNLKSB7XHJcbiAgICAgICAgICAgIERhdGFBUEkuYWN0aXZlR2l2ZVBvd2VyU3RlcCh0cnVlKTtcclxuICAgICAgICAgICAgUmVuZGVyQVBJLnNob3dEZXZCdXR0b24oRGF0YUFQSS5zdGF0ZS5nZXRDdXJyZW50U3RlcFR5cGUoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gSEFORExFUl9UWVBFLkdJRlRfRU5EX0JVVFRPTl9DTElDSykge1xyXG4gICAgICAgICAgICBjb25zdCB7IGluZm86IG5leHRQbGF5ZXJJbmZvLCBuYW1lOiBuZXh0UGxheWVyTmFtZSB9ID0gRGF0YUFQSS5nZXROZXh0UGxheWVySW5mbygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5leHRQbGF5ZXJJbmZvLmlzUGVvcGxlKSB7XHJcbiAgICAgICAgICAgICAgICBEYXRhQVBJLnNldFN0ZXBUeXBlKG5leHRQbGF5ZXJOYW1lLCBTVEVQX1RZUEUuQ0hPT1NFX0ZPUl9BVFRBQ0ssIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgUmVuZGVyQVBJLnNob3dEZXZCdXR0b24oRGF0YUFQSS5zdGF0ZS5nZXRDdXJyZW50U3RlcFR5cGUoKSk7XHJcbiAgICAgICAgICAgICAgICBSZW5kZXJBUEkucmVyZW5kZXJUdXJuQnV0dG9uKFRVUk5fQlVUVE9OX0VWRU5UX1RZUEVTLkFDVElWRV9UVVJOX0JVVFRPTiwgeyBoaWdobGlnaHQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRGF0YUFQSS5kb05leHRUdXJuKG5leHRQbGF5ZXJOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9SYW5kb21BdHRhY2tzKG5leHRQbGF5ZXJOYW1lLCBEYXRhQVBJKTtcclxuICAgICAgICAgICAgICAgIERhdGFBUEkuYWN0aXZlR2l2ZVBvd2VyU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1NpbXBsZUdpZnRQb3dlcihuZXh0UGxheWVyTmFtZSwgRGF0YUFQSSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5CdXR0b25DbGlja0hhbmRsZXIoRGF0YUFQSSwgUmVuZGVyQVBJLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogSEFORExFUl9UWVBFLkdJRlRfRU5EX0JVVFRPTl9DTElDSyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRldkhhbmRsZXIodHlwZSwgZGF0YUFQSSwgcmVuZGVyQVBJKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRGV2KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09PSBIQU5ETEVSX1RZUEUuREVWX0RPX1JBTkRPTV8xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdGVwVHlwZSA9IGRhdGFBUEkuc3RhdGUuZ2V0Q3VycmVudFN0ZXBUeXBlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUdXJuID0gZGF0YUFQSS5zdGF0ZS5nZXRDdXJyZW50VHVybigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGVwVHlwZSA9PT0gU1RFUF9UWVBFLkdJVkVfUE9XRVIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9TaW1wbGVHaWZ0UG93ZXIoY3VycmVudFR1cm4sIGRhdGFBUEkpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyQVBJLnJlcmVuZGVyKCd0dXJuQnV0dG9uQWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3RlcFR5cGUgPT09IFNURVBfVFlQRS5DSE9PU0VfRk9SX0FUVEFDSykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1JhbmRvbUF0dGFja3MoY3VycmVudFR1cm4sIGRhdGFBUEkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB7IFBvd2VyTG9naWNBUEkgfSBmcm9tICcuL0xvZ2ljQVBJJzsiLCJpbXBvcnQgeyBnZXRSYW5kb21Cb29sZWFuIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBDQUxDX0FUVEFDS19SRVNVTFRTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiDQm9C+0LPQuNC60LAg0YDQsNGB0YfRkdGC0LAg0L/RgNC4INCw0YLQsNC60LUuXHJcbiAqIGFjdGl2ZS9kZWZlbnNpdmUgLSDQt9C90LDRh9C10L3QuNGPINC40LcgVGlsZS5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBhY3RpdmVcclxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBkZWZlbnNpdmVcclxuICpcclxuICogQHJldHVybiB7b2JqZWN0fSB3aW5uZXIgLyBhY3RpdmVWYWx1ZSAvIGRlZmVuc2l2ZVZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2FsY0F0dGFja1Jlc3VsdCA9IChhY3RpdmUsIGRlZmVuc2l2ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICAgIHdpbm5lcjogJycsXHJcbiAgICAgICAgYWN0aXZlVmFsdWU6IDEsXHJcbiAgICAgICAgZGVmZW5zaXZlVmFsdWU6IDEsXHJcbiAgICB9XHJcbiAgICBjb25zdCBhdHRhY2tpbmdWYWx1ZSA9IGFjdGl2ZSAtIDE7XHJcblxyXG4gICAgaWYgKGF0dGFja2luZ1ZhbHVlID09PSBkZWZlbnNpdmUpIHtcclxuICAgICAgICByZXN1bHQuZGVmZW5zaXZlVmFsdWUgPSAxO1xyXG4gICAgICAgIHJlc3VsdC53aW5uZXIgPSBnZXRSYW5kb21Cb29sZWFuKCkgPyBDQUxDX0FUVEFDS19SRVNVTFRTLkFUVEFDSyA6IENBTENfQVRUQUNLX1JFU1VMVFMuREVGRU5TSVZFO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhdHRhY2tpbmdWYWx1ZSA8IGRlZmVuc2l2ZSkge1xyXG4gICAgICAgIGlmIChhdHRhY2tpbmdWYWx1ZSA9PT0gZGVmZW5zaXZlIC0gMSkge1xyXG4gICAgICAgICAgICByZXN1bHQuZGVmZW5zaXZlVmFsdWUgPSAxO1xyXG4gICAgICAgICAgICByZXN1bHQud2lubmVyID0gZ2V0UmFuZG9tQm9vbGVhbigyNSkgPyBDQUxDX0FUVEFDS19SRVNVTFRTLkRFRkVOU0lWRSA6IENBTENfQVRUQUNLX1JFU1VMVFMuQVRUQUNLO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kZWZlbnNpdmVWYWx1ZSA9IGRlZmVuc2l2ZSAtIGF0dGFja2luZ1ZhbHVlO1xyXG4gICAgICAgICAgICByZXN1bHQud2lubmVyID0gQ0FMQ19BVFRBQ0tfUkVTVUxUUy5ERUZFTlNJVkU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhdHRhY2tpbmdWYWx1ZSA+IGRlZmVuc2l2ZSkge1xyXG4gICAgICAgIHJlc3VsdC5kZWZlbnNpdmVWYWx1ZSA9IGF0dGFja2luZ1ZhbHVlIC0gZGVmZW5zaXZlO1xyXG4gICAgICAgIHJlc3VsdC53aW5uZXIgPSBDQUxDX0FUVEFDS19SRVNVTFRTLkFUVEFDSztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59IiwiaW1wb3J0IHsgU1RFUF9UWVBFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0UG9zaXRpb25PYmplY3QsIHNvbWVFcXVhbFBvc2l0aW9uIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG4vKipcclxuICog0J7QsdGA0LDQsdC+0YLQutCwINC60LvQuNC60LAg0L/QviDQv9C70LjRgtC60LUuXHJcbiAqINCf0LvQuNGC0LrQuCDQvNC10L3Rj9GO0YIg0YHQvtGB0YLQvtGP0L3QuNGPINCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDRgtC40L/QsCDRhdC+0LTQsC5cclxuICpcclxuICogVE9ETzog0L/RgNC40LLQtdGB0YLQuCDQuiDQtdC00LjQvdC+0LzRgyDQstC40LTRgyDRgSBcInR1cm5CdXR0b25DbGlja0hhbmRsZXJcIi5cclxuICogQHBhcmFtIHtldmVudH0gZXZlbnRcclxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcclxuICogQHBhcmFtIHtEYXRhSGVscGVyfSBhcHBEYXRhXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdGlsZUNsaWNrSGFuZGxlciA9IChldmVudCwgY29udGV4dCwgYXBwRGF0YSkgPT4ge1xyXG4gICAgY29uc3QgYXR0ckRhdGFzZXQgPSBjb250ZXh0LmRhdGFzZXQ7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFN0ZXBUeXBlU3RhdGUgPSBhcHBEYXRhLmdldFN0YXRlUHJvcGVydHkoJ2N1cnJlbnRTdGVwVHlwZScpO1xyXG4gICAgY29uc3QgY3VycmVudFR1cm5TdGF0ZSA9IGFwcERhdGEuZ2V0U3RhdGVQcm9wZXJ0eSgnY3VycmVudFR1cm4nKTtcclxuXHJcbiAgICBjb25zdCB0aWxlUGxheWVyTmFtZSA9IGF0dHJEYXRhc2V0LnBsYXllcm5hbWU7XHJcbiAgICBjb25zdCBwcmVzc2VkUG9zaXRpb24gPSBnZXRQb3NpdGlvbk9iamVjdChhdHRyRGF0YXNldC5wb3NpdGlvblgsIGF0dHJEYXRhc2V0LnBvc2l0aW9uWSk7XHJcblxyXG4gICAgLy8g0J7QttC40LTQsNC90LjQtSDQstGL0LHQvtGA0LAg0YHQstC+0LXQuSDQutC70LXRgtC60Lgg0LTQu9GPINC00LDQu9GM0L3QtdC50YjQtdC5INCw0YLQsNC60LguXHJcbiAgICBpZiAoY3VycmVudFN0ZXBUeXBlU3RhdGUgPT09IFNURVBfVFlQRS5DSE9PU0VfRk9SX0FUVEFDSykge1xyXG5cclxuICAgICAgICAvLyDQnNC+0LbQvdC+INC90LDQttCw0YLRjCDRgtC+0LvRjNC60L4g0L3QsCDRgdCy0L7RjiDQutC70LXRgtC60YMuXHJcbiAgICAgICAgaWYgKHRpbGVQbGF5ZXJOYW1lID09PSBjdXJyZW50VHVyblN0YXRlKSB7XHJcbiAgICAgICAgICAgIGFwcERhdGEuZG9TZWxlY3RGb3JBdHRhY2socHJlc3NlZFBvc2l0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0J3QsNC20LzQuNGC0LUg0L3QsCDRgdCy0L7RjiDQutC70LXRgtC60YMuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vINCe0LbQuNC00LDQvdC40LUg0LrQu9C40LrQsCDQv9C+INC/0LvQuNGC0LrQtSDQvtC/0L/QvtC90LXQvdGC0LAg0LTQu9GPINGB0L7QstC10YDRiNC10L3QuNGPINCw0YLQsNC60LguXHJcbiAgICBpZiAoY3VycmVudFN0ZXBUeXBlU3RhdGUgPT09IFNURVBfVFlQRS5BVFRBQ0spIHtcclxuICAgICAgICBjb25zdCBhdmFpbGFibGVMaXN0ID0gYXBwRGF0YS5nZXRBdmFpbGFibGVQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAvLyDQktGL0L/QvtC70L3QuNGC0Ywg0LDRgtCw0LrRgyAvINGB0LHRgNC+0YHQuNGC0Ywg0YXQvtC0LlxyXG4gICAgICAgIGlmIChzb21lRXF1YWxQb3NpdGlvbihhdmFpbGFibGVMaXN0LCBwcmVzc2VkUG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgIGFwcERhdGEuZG9QZW9wbGVBdHRhY2socHJlc3NlZFBvc2l0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhcHBEYXRhLmRvUmVzZXRTZWxlY3RGb3JBdHRhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0J7QttC40LTQsNC90LjQtSDQstGL0LHQvtGA0LAg0YHQstC+0LjRhSDQutC70LXRgtC+0Log0LTQu9GPINGA0LDQt9C00LDRh9C4IHBvd2VyLlxyXG4gICAgaWYgKGN1cnJlbnRTdGVwVHlwZVN0YXRlID09PSBTVEVQX1RZUEUuR0lWRV9QT1dFUikge1xyXG4gICAgICAgIGFwcERhdGEuZG9HaXZlUG93ZXIodGlsZVBsYXllck5hbWUsIHByZXNzZWRQb3NpdGlvbik7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0geVxyXG4gKiBAcmV0dXJuIHtvYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0UG9zaXRpb25PYmplY3QgPSAoeCwgeSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBOdW1iZXIoeCksXHJcbiAgICAgICAgeTogTnVtYmVyKHkpXHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IG9iajFcclxuICogQHBhcmFtIHtvYmplY3R9IG9iajJcclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBlcXVhbFBvc2l0aW9uID0gKG9iajEsIG9iajIpID0+IG9iajEueCA9PT0gb2JqMi54ICYmIG9iajEueSA9PT0gb2JqMi55O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7YXJyYXl9IHBvc2l0aW9uTGlzdFxyXG4gKiBAcGFyYW0ge29iamVjdH0gcG9zaXRpb25cclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBzb21lRXF1YWxQb3NpdGlvbiA9IChwb3NpdGlvbkxpc3QsIHBvc2l0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcG9zaXRpb25MaXN0LnNvbWUoaXRlbSA9PiBlcXVhbFBvc2l0aW9uKGl0ZW0sIHBvc2l0aW9uKSk7XHJcbn0iLCJpbXBvcnQgeyBSZW5kZXJIZWxwZXIgfSBmcm9tICcuLi9saWJyYXJ5JztcclxuaW1wb3J0IHsgQ09NTU9OX0RPTV9JRFMgfSBmcm9tICcuLi9saWJyYXJ5L3JlbmRlci9jb25zdGFudHMnO1xyXG5cclxuaW1wb3J0IHsgYnVpbGRIZXhhZ29uVGlsZSB9IGZyb20gJy4vY29tcG9uZW50cy9IZXhhZ29uVGlsZSc7XHJcbmltcG9ydCB7IEFkZGl0aW9uYWxGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9BZGRpdGlvbmFsRmllbGQnO1xyXG5pbXBvcnQgeyBQT1dFUl9ET01fSURTLCBURVhUUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgYnVpbGRUYWJsZSB9IGZyb20gJy4vY29tcG9uZW50cy9UYWJsZSc7XHJcblxyXG4vKipcclxuICog0JLRgdGRINGH0YLQviDRgdCy0Y/Qt9Cw0L3QviDRgSDQstC40LfRg9Cw0LvRjNC90YvQvCDQvtGC0L7QsdGA0LDQttC10L3QuNC10Lwg0LjQs9GA0YsuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG93ZXJSZW5kZXIgZXh0ZW5kcyBSZW5kZXJIZWxwZXIge1xyXG5cclxuICAgIGNyZWF0ZUFwcChtYXRyaXgpIHtcclxuICAgICAgICBjb25zdCBiYXNlRm9ybSA9IHRoaXMuZ2V0QmFzZUZvcm0oKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYXNlRm9ybSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlTWF0cml4KG1hdHJpeCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVBZGRpdGlvbmFsSW5mbygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KHQvtC30LTQsNGR0YIg0Y3Qu9C10LzQtdC90YIg0LIgRE9NLlxyXG4gICAgICog0K3Qu9C10LzQtdC90YIg0Y/QstC70Y/QtdGC0YHRjyDRgtCw0LHQu9C40YbQtdC5INC60L7RgtC+0YDQsNGPINGB0YLRgNC+0LjRgtGB0Y8g0L/QviDQv9C10YDQtdC00LDQvdC90L7QuSDQvNCw0YLRgNC40YbQtS5cclxuICAgICAqL1xyXG4gICAgY3JlYXRlTWF0cml4KG1hdHJpeCkge1xyXG4gICAgICAgIGlmIChtYXRyaXgpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF0cml4TWFwID0gdGhpcy5idWlsZE1hcChtYXRyaXgpO1xyXG4gICAgICAgICAgICBjb25zdCByb290ID0gdGhpcy5nZXRFbGVtZW50QnlJZChQT1dFUl9ET01fSURTLk1BSU5fRklFTEQpO1xyXG5cclxuICAgICAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChtYXRyaXhNYXApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFRFWFRTLk1BVFJJWF9FUlJPUik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkTWFwKG1hdHJpeCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlVTRV9UQUJMRSA/IGJ1aWxkVGFibGUuY2FsbCh0aGlzLCBtYXRyaXgpIDogdGhpcy5idWlsZERpdk1hdHJpeChtYXRyaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J3QtSDRhdCy0LDRgtC40LvQviDRhNCw0L3RgtCw0LfQuNC4INC90LAg0LHQvtC70LXQtSDQuNC90YLQtdGA0LXRgdC90L7QtSDQvdCw0LfQstCw0L3QuNC1LlxyXG4gICAgICovXHJcbiAgICBjcmVhdGVBZGRpdGlvbmFsSW5mbygpIHtcclxuICAgICAgICBjb25zdCByb290Tm9kZSA9IHRoaXMuZ2V0QWRkaXRpb25hbE5vZGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsRmllbGQgPSBuZXcgQWRkaXRpb25hbEZpZWxkQ29tcG9uZW50KHRoaXMuaGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsRmllbGQucGFzdEluKHJvb3ROb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZERpdlRpbGUoaXRlbSwgY29udGVudE1ldGhvZHMpIHtcclxuICAgICAgICByZXR1cm4gYnVpbGRIZXhhZ29uVGlsZShpdGVtLCBjb250ZW50TWV0aG9kcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVyZW5kZXJEaXZUaWxlKHRpbGUpIHtcclxuICAgICAgICBjb25zdCB7eCwgeX0gPSB0aWxlLnBvc2l0aW9uO1xyXG5cclxuICAgICAgICBjb25zdCBjb21tb25NYXAgPSB0aGlzLmdldEVsZW1lbnRCeUlkKENPTU1PTl9ET01fSURTLk1BSU4pO1xyXG4gICAgICAgIGNvbnN0IHJvd05vZGVzID0gY29tbW9uTWFwLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgY29uc3Qgb2xkTm9kZSA9IHJvd05vZGVzLmNoaWxkTm9kZXNbeV0uY2hpbGROb2Rlc1t4XTtcclxuICAgICAgICBjb25zdCB0aWxlTm9kZSA9IHRoaXMuYnVpbGREaXZUaWxlKHRpbGUsIHRoaXMuZ2V0Q29udGVudE1ldGhvZHMoKSk7XHJcblxyXG4gICAgICAgIHJvd05vZGVzLmNoaWxkTm9kZXNbeV0ucmVwbGFjZUNoaWxkKHRpbGVOb2RlLCBvbGROb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXJlbmRlclRhYmxlVGlsZSh0aWxlKSB7XHJcbiAgICAgICAgY29uc3QgdGROb2RlID0gYnVpbGRURC5jYWxsKHRoaXMsIHRpbGUpO1xyXG5cclxuICAgICAgICBjb25zdCBjb21tb25NYXAgPSB0aGlzLmdldEVsZW1lbnRCeUlkKENPTU1PTl9ET01fSURTLk1BSU4pO1xyXG4gICAgICAgIGNvbnN0IHRyTm9kZSA9IGNvbW1vbk1hcC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndHInKVt0aWxlLnBvc2l0aW9uLnldO1xyXG4gICAgICAgIGNvbnN0IG9sZFRkID0gdHJOb2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZCcpW3RpbGUucG9zaXRpb24ueF07XHJcblxyXG4gICAgICAgIHRyTm9kZS5yZXBsYWNlQ2hpbGQodGROb2RlLCBvbGRUZCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQb3dlclJlbmRlciB9IGZyb20gJy4vUmVuZGVyJztcclxuaW1wb3J0IHsgVFVSTl9CVVRUT05fRVZFTlRfVFlQRVMsIE1BVFJJWF9UWVBFUywgU1RFUF9UWVBFLCBERVZfQlVUVE9OX0NBUFRJT05TIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiDQktGB0ZEg0YfRgtC+INGB0LLRj9C30LDQvdC+INGBINCy0LjQt9GD0LDQu9GM0L3Ri9C8INC+0YLQvtCx0YDQsNC20LXQvdC40LXQvCDQuNCz0YDRiy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQb3dlclJlbmRlckFQSSBleHRlbmRzIFBvd2VyUmVuZGVyIHtcclxuXHJcbiAgICByZXJlbmRlclRpbGUodGlsZSwgbWF0cml4VHlwZSkge1xyXG4gICAgICAgIGlmIChtYXRyaXhUeXBlID09PSBNQVRSSVhfVFlQRVMuSEVYQUdPTikge1xyXG4gICAgICAgICAgICB0aGlzLnJlcmVuZGVyRGl2VGlsZSh0aWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXRyaXhUeXBlID09PSBNQVRSSVhfVFlQRVMuU0lNUExFKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVyZW5kZXJUYWJsZVRpbGUodGlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcmVuZGVyVHVybkJ1dHRvbih0eXBlLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFRVUk5fQlVUVE9OX0VWRU5UX1RZUEVTLkFDVElWRV9UVVJOX0JVVFRPTikge1xyXG4gICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxGaWVsZC5hY3RpdmVUdXJuVmlldyhkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09PSBUVVJOX0JVVFRPTl9FVkVOVF9UWVBFUy5ISUdITElHSFQpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsRmllbGQuYnV0dG9uSGlnaGxpZ2h0KGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFRVUk5fQlVUVE9OX0VWRU5UX1RZUEVTLkFDVElWRV9HSUZUX1ZJRVcpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsRmllbGQuYWN0aXZlR2lmdFZpZXcoZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKmlmICh0eXBlID09PSAnZGV2X0F1dG9HaWZ0QWN0aXZlJykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxGaWVsZC5kZXZCdXR0b25DaGFuZ2UodHlwZSwgZGF0YSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIC8qaWYgKHR5cGUgPT09ICdkZXYxX2hpZ2hsaWdodCcpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsRmllbGQuZGV2QnV0dG9uSGlnaGxpZ2h0KHR5cGUsIGRhdGEpO1xyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ZXBUeXBlIC0g0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCIHN0ZXBUeXBlIGRldi3QutC90L7Qv9C60LAg0LLRi9C/0L7Qu9C90Y/QtdGCINGA0LDQt9C90YvQtSDQtNC10LnRgdGC0LLQuNGPLlxyXG4gICAgICovXHJcbiAgICBzaG93RGV2QnV0dG9uKHN0ZXBUeXBlKSB7XHJcbiAgICAgICAgaWYgKHN0ZXBUeXBlID09PSBTVEVQX1RZUEUuQ0hPT1NFX0ZPUl9BVFRBQ0spIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsRmllbGQuc2hvd0RldkJ1dHRvbihERVZfQlVUVE9OX0NBUFRJT05TLk1BS0VfTU9WRSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RlcFR5cGUgPT09IFNURVBfVFlQRS5HSVZFX1BPV0VSKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbEZpZWxkLnNob3dEZXZCdXR0b24oREVWX0JVVFRPTl9DQVBUSU9OUy5HSVZFX1BPV0VSKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbGlicmFyeSc7XHJcblxyXG5pbXBvcnQgeyBUdXJuQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9UdXJuQnV0dG9uJztcclxuaW1wb3J0IHsgTE9HX0NMQVNTLCBURVhUUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEhBTkRMRVJfVFlQRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICog0JTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQtSDQv9C+0LvRjyDQtNC70Y8g0LjQs9GA0YsuXHJcbiAqINCa0L3QvtC/0LrQsCDRgdC70LXQtNGD0Y7RidC10LPQviDRhdC+0LTQsC5cclxuICog0JvQvtCz0LjRgNC+0LLQsNC90LjQtS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBZGRpdGlvbmFsRmllbGRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgIHRoaXMudGlsZUNsYXNzTmFtZSA9IExPR19DTEFTUy5USUxFO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ2xhc3NOYW1lID0gTE9HX0NMQVNTLkJVVFRPTjtcclxuXHJcbiAgICAgICAgdGhpcy5idXR0b25FbGVtZW50ID0gbmV3IFR1cm5CdXR0b25Db21wb25lbnQoaGFuZGxlciwgSEFORExFUl9UWVBFLlRVUk5fQlVUVE9OX0NMSUNLLCBURVhUUy5ORVhUX1RVUk4pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZ2V0TmV3RWxlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5ld0VsZW1lbnQoKSB7XHJcbiAgICAgICAgY29uc3QgYmFzZU5vZGUgPSB0aGlzLmdldERpdigpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbkVsZW1lbnQucGFzdEluKGJhc2VOb2RlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJhc2VOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzdGF0dXNcclxuICAgICAqL1xyXG4gICAgYnV0dG9uSGlnaGxpZ2h0KHN0YXR1cykge1xyXG4gICAgICAgIHN0YXR1cyA/IHRoaXMuYnV0dG9uRWxlbWVudC5oaWdobGlnaHRPbigpIDogdGhpcy5idXR0b25FbGVtZW50LmhpZ2hsaWdodE9mZigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzdGF0dXNcclxuICAgICAqL1xyXG4gICAgZGV2QnV0dG9uSGlnaGxpZ2h0KHN0YXR1cykge1xyXG4gICAgICAgIGlmICh0aGlzLmRldkJ1dHRvbkVsZW1lbnQxKSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA/IHRoaXMuZGV2QnV0dG9uRWxlbWVudDEuaGlnaGxpZ2h0T24oKSA6IHRoaXMuZGV2QnV0dG9uRWxlbWVudDEuaGlnaGxpZ2h0T2ZmKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0geyBoaWdobGlnaHQsIGFtb3VudCB9XHJcbiAgICAgKi9cclxuICAgIGFjdGl2ZUdpZnRWaWV3KHsgaGlnaGxpZ2h0LCBhbW91bnQgfSkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uRWxlbWVudC5jaGFuZ2VUdXJuSW5mbyhgJHtURVhUUy5FTkRfR0lGVH0gLSAke2Ftb3VudH1gLCBIQU5ETEVSX1RZUEUuR0lGVF9FTkRfQlVUVE9OX0NMSUNLKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkhpZ2hsaWdodChoaWdobGlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2ZVR1cm5WaWV3KHsgaGlnaGxpZ2h0IH0pIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuY2hhbmdlVHVybkluZm8oVEVYVFMuTkVYVF9UVVJOLCBIQU5ETEVSX1RZUEUuVFVSTl9CVVRUT05fQ0xJQ0spO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uSGlnaGxpZ2h0KGhpZ2hsaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBkZXZCdXR0b25DaGFuZ2UodHlwZSwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGV2QnV0dG9uRWxlbWVudDEuc2V0VGV4dCgn0KDQsNC30LTQsNGC0YwgcG93ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCS0YLQvtGA0LDRjyDQutC90L7Qv9C60LAuXHJcbiAgICAgKi9cclxuICAgIHNob3dEZXZCdXR0b24odGV4dCwgaXNBY3RpdmUgPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2QnV0dG9uRWxlbWVudDEuc2V0VGV4dCh0ZXh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRldkJ1dHRvbkVsZW1lbnQxID0gbmV3IFR1cm5CdXR0b25Db21wb25lbnQodGhpcy5oYW5kbGVyLCBIQU5ETEVSX1RZUEUuREVWX0RPX1JBTkRPTV8xLCB0ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5kZXZCdXR0b25FbGVtZW50MS5wYXN0SW4odGhpcy5lbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBIQU5ETEVSX1RZUEUsIENFTExfVFlQRSwgQ09OTkVDVF9UWVBFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQ0VMTF9DTEFTU19OQU1FLCBDT0xPUiwgSEVYQUdPTl9DTEFTU19OQU1FUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldENsYXNzQnlDZWxsVHlwZSB9IGZyb20gJy4uL2hlbHBlcic7XHJcbmltcG9ydCB7IENPTU1PTl9DTEFTU19OQU1FUyB9IGZyb20gJy4uLy4uL2xpYnJhcnkvcmVuZGVyL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGRIZXhhZ29uVGlsZSA9ICh0aWxlLCBjb250ZW50TWV0aG9kcykgPT4ge1xyXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBjb250ZW50TWV0aG9kcy50aWxlSGFuZGxlcihldmVudCwgdGhpcywgSEFORExFUl9UWVBFLlRJTEVfQ0xJQ0spO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpbGVOb2RlID0gY29udGVudE1ldGhvZHMuZ2V0RGl2KCk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZ2V0VGlsZUNvbnRlbnQodGlsZSwgY29udGVudE1ldGhvZHMpO1xyXG4gICAgY29uc3QgcG93ZXJWYWx1ZSA9IGNvbnRlbnRNZXRob2RzLmdldERpdigpO1xyXG5cclxuICAgIHBvd2VyVmFsdWUudGV4dENvbnRlbnQgPSB0aWxlLnBvd2VyVmFsdWU7XHJcbiAgICBwb3dlclZhbHVlLmNsYXNzTmFtZSA9IEhFWEFHT05fQ0xBU1NfTkFNRVMuUE9XRVJfVkFMVUU7XHJcblxyXG4gICAgdGlsZU5vZGUuYXBwZW5kKHBvd2VyVmFsdWUsIGNvbnRlbnQpO1xyXG5cclxuICAgIGlmICh0aWxlLnR5cGUgIT09IHVuZGVmaW5lZCAmJiB0aWxlLnR5cGUgIT09IENFTExfVFlQRS5DT05ORUNUX0xJTkUpIHtcclxuICAgICAgICB0aWxlTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdGlsZU5vZGUuY2xhc3NOYW1lID0gZ2V0Q2xhc3NGb3JUaWxlV3JhcCh0aWxlKTtcclxuICAgIGNvbnRlbnRNZXRob2RzLnNldEF0dHJpYnV0ZUluVGlsZSh0aWxlTm9kZSwgdGlsZSk7XHJcblxyXG4gICAgcmV0dXJuIHRpbGVOb2RlO1xyXG59XHJcblxyXG5jb25zdCBnZXRUaWxlQ29udGVudCA9ICh0aWxlLCBjb250ZW50TWV0aG9kcykgPT4ge1xyXG4gICAgY29uc3Qgd3JhcEVsZW0gPSBjb250ZW50TWV0aG9kcy5nZXREaXYoKTtcclxuXHJcbiAgICBpZiAodGlsZS50eXBlID09PSBDRUxMX1RZUEUuQ09OTkVDVF9MSU5FKSB7XHJcbiAgICAgICAgY29uc3QgbGluZSA9IGNvbnRlbnRNZXRob2RzLmdldERpdigpO1xyXG5cclxuICAgICAgICBsaW5lLmNsYXNzTmFtZSA9IGdldENsYXNzRm9yQ29ubmVjdCh0aWxlLmNvbm5lY3RUeXBlKTtcclxuXHJcbiAgICAgICAgd3JhcEVsZW0uYXBwZW5kKGxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChbQ0VMTF9UWVBFLlJFQURZLCBDRUxMX1RZUEUuV0FJVElOR19TRUxFQ1RdLmluY2x1ZGVzKHRpbGUudHlwZSkpIHtcclxuICAgICAgICBjb25zdCBoZXhhZ29uID0gY29udGVudE1ldGhvZHMuZ2V0RGl2KCk7XHJcbiAgICAgICAgY29uc3QgaGV4YWdvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gICAgICAgIGhleGFnb24uY2xhc3NOYW1lID0gSEVYQUdPTl9DTEFTU19OQU1FUy5IRVhBR09OO1xyXG5cclxuICAgICAgICBoZXhhZ29uLmFwcGVuZChoZXhhZ29uU3Bhbik7XHJcbiAgICAgICAgd3JhcEVsZW0uYXBwZW5kKGhleGFnb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHdyYXBFbGVtLmNsYXNzTmFtZSA9IGAke0hFWEFHT05fQ0xBU1NfTkFNRVMuVElMRV9IRVhBR09OfSAke0NPTU1PTl9DTEFTU19OQU1FUy5GTEVYfWA7XHJcblxyXG4gICAgaWYgKHRpbGUuY29sb3IpIHtcclxuICAgICAgICBjb25zdCBjb2xvckNsYXNzID0gZ2V0Q2xhc3NCeUNvbG9yKHRpbGUuY29sb3IpO1xyXG5cclxuICAgICAgICB3cmFwRWxlbS5jbGFzc05hbWUgPSBgJHt3cmFwRWxlbS5jbGFzc05hbWV9ICR7Y29sb3JDbGFzc31gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3cmFwRWxlbTtcclxufVxyXG5cclxuY29uc3QgZ2V0Q2xhc3NGb3JUaWxlV3JhcCA9IGl0ZW0gPT4ge1xyXG4gICAgY29uc3QgYnlDZWxsVHlwZSA9IGdldENsYXNzQnlDZWxsVHlwZShpdGVtLnR5cGUpO1xyXG4gICAgbGV0IHJlc3VsdCA9IENFTExfQ0xBU1NfTkFNRS5XUkFQO1xyXG5cclxuICAgIGlmIChieUNlbGxUeXBlKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gYCR7cmVzdWx0fSAke2J5Q2VsbFR5cGV9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5jb25zdCBnZXRDbGFzc0ZvckNvbm5lY3QgPSBjb25uZWN0VHlwZSA9PiB7XHJcbiAgICBzd2l0Y2ggKGNvbm5lY3RUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBDT05ORUNUX1RZUEUuTEVGVF9UT19CT1RUT006IHJldHVybiBIRVhBR09OX0NMQVNTX05BTUVTLkxFRlRfVE9fQk9UVE9NO1xyXG4gICAgICAgIGNhc2UgQ09OTkVDVF9UWVBFLlJJR0hUX1RPX0JPVFRPTTogcmV0dXJuIEhFWEFHT05fQ0xBU1NfTkFNRVMuUklHSFRfVE9fQk9UVE9NO1xyXG4gICAgICAgIGNhc2UgQ09OTkVDVF9UWVBFLkxJTkU6IHJldHVybiBIRVhBR09OX0NMQVNTX05BTUVTLkxJTkU7XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIENPTE9SLkRFRkFVTFQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldENsYXNzQnlDb2xvciA9IGNvbG9yID0+IHtcclxuICAgIHN3aXRjaCAoY29sb3IpIHtcclxuICAgICAgICBjYXNlIENPTE9SLkdSRUVOOiByZXR1cm4gSEVYQUdPTl9DTEFTU19OQU1FUy5USUxFX0dSRUVOO1xyXG4gICAgICAgIGNhc2UgQ09MT1IuUkVEOiByZXR1cm4gSEVYQUdPTl9DTEFTU19OQU1FUy5USUxFX1JFRDtcclxuICAgICAgICBjYXNlIENPTE9SLk1BR0VOVEE6IHJldHVybiBIRVhBR09OX0NMQVNTX05BTUVTLlRJTEVfTUFHRU5UQTtcclxuICAgICAgICBjYXNlIENPTE9SLkJMVUU6IHJldHVybiBIRVhBR09OX0NMQVNTX05BTUVTLlRJTEVfQkxVRTtcclxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gQ09MT1IuREVGQVVMVDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGdldFBvd2VyVGlsZVJlbmRlckVsZW1lbnQgfSBmcm9tICcuL3Bvd2VyVGlsZSc7XHJcbmltcG9ydCB7IENFTExfQ0xBU1NfTkFNRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEhBTkRMRVJfVFlQRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGdldENsYXNzQnlDZWxsVHlwZSB9IGZyb20gJy4uL2hlbHBlcic7XHJcblxyXG4vKipcclxuICog0KHQvtC30LTQsNGR0Lwg0YLQsNCx0LvQuNGG0YMg0LTQu9GPINC/0YDQuNC70L7QttC10L3QuNGPLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVGFibGUobWF0cml4KSB7XHJcbiAgICBjb25zdCB0YWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG5cclxuICAgIG1hdHJpeC5mb3JFYWNoKChyb3dMaXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIHJvd0VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW9yZGVyJywgaW5kZXgpO1xyXG5cclxuICAgICAgICByb3dMaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGxFbGVtZW50ID0gYnVpbGRURC5jYWxsKHRoaXMsIGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgcm93RWxlbWVudC5hcHBlbmRDaGlsZChjZWxsRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFibGVFbGVtZW50LmFwcGVuZENoaWxkKHJvd0VsZW1lbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRhYmxlRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVEQoaXRlbSkge1xyXG4gICAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSB0aGlzLmhhbmRsZXI7XHJcbiAgICBjb25zdCB0ZEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIHJldHVybiBvbkNsaWNrSGFuZGxlcihldmVudCwgdGhpcywgSEFORExFUl9UWVBFLlRJTEVfQ0xJQ0spO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGdldFBvd2VyVGlsZVJlbmRlckVsZW1lbnQoaXRlbSk7XHJcblxyXG4gICAgY2VsbEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICBjZWxsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRkSGFuZGxlcik7XHJcbiAgICBjZWxsRWxlbWVudC5jbGFzc05hbWUgPSBnZXRDbGFzc0ZvclREKGl0ZW0pO1xyXG4gICAgc2V0QXR0cmlidXRlSW5DZWxsKGNlbGxFbGVtZW50LCBpdGVtKTtcclxuXHJcbiAgICByZXR1cm4gY2VsbEVsZW1lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldENsYXNzRm9yVEQgPSBpdGVtID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBDRUxMX0NMQVNTX05BTUUuV1JBUDtcclxuICAgIGNvbnN0IGJ5Q2VsbFR5cGUgPSBnZXRDbGFzc0J5Q2VsbFR5cGUoaXRlbS50eXBlKTtcclxuXHJcbiAgICBpZiAoYnlDZWxsVHlwZSkge1xyXG4gICAgICAgIHJlc3VsdCA9IGAke3Jlc3VsdH0gJHtieUNlbGxUeXBlfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INCw0YLRgNC40LHRg9GC0Ysg0LTQu9GPINC60LvQtdGC0LrQuC5cclxuICogQHBhcmFtIHtvYmplY3R9IGNlbGxFbGVtZW50IC0gRE9NLdGN0LvQtdC80LXQvdGCINC60LvQtdGC0LrQuCDRgtCw0LHQu9C40YbRiy5cclxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZSAtINCw0YLRgNC40LHRg9GC0YsuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggLVxyXG4gKi9cclxuY29uc3Qgc2V0QXR0cmlidXRlSW5DZWxsID0gKGNlbGxFbGVtZW50LCBhdHRyaWJ1dGUsIHByZWZpeCkgPT4ge1xyXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBhdHRyaWJ1dGVba2V5XTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudFZhbHVlID09PSAnb2JqZWN0JyAmJiBjdXJyZW50VmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZUluQ2VsbChjZWxsRWxlbWVudCwgY3VycmVudFZhbHVlLCBrZXkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2VsbEVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLSR7cHJlZml4ID8gcHJlZml4ICsgJy0nIDogJyd9JHtrZXl9YCwgYXR0cmlidXRlW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2xpYnJhcnknO1xyXG5cclxuaW1wb3J0IHsgTE9HX0NMQVNTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiDQmtC+0LzQv9C+0L3QtdC90YIg0LrQvdC+0L/QutC4INC00LvRjyDRgdC80LXQvdGLINGB0L7RgdGC0L7Rj9C90LjRjyDRhdC+0LTQsC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUdXJuQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyLCB0eXBlLCB0ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICB0aGlzLmhhbmRsZXJUeXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLnRpbGVDbGFzc05hbWUgPSBMT0dfQ0xBU1MuVElMRTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzTmFtZSA9IExPR19DTEFTUy5CVVRUT047XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZ2V0TmV3RWxlbWVudCh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXdFbGVtZW50KHRleHQpIHtcclxuICAgICAgICBjb25zdCBidXR0b25UaWxlID0gdGhpcy5nZXREaXYodGhpcy50aWxlQ2xhc3NOYW1lKTtcclxuICAgICAgICBjb25zdCBidXR0b25Ob2RlID0gdGhpcy5nZXREaXYodGhpcy5idXR0b25DbGFzc05hbWUsIG51bGwsIHRleHQpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbk5vZGUgPSBidXR0b25Ob2RlO1xyXG4gICAgICAgIGJ1dHRvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLmNsaWNrSGFuZGxlcihldmVudCkpO1xyXG4gICAgICAgIGJ1dHRvblRpbGUuYXBwZW5kKGJ1dHRvbk5vZGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gYnV0dG9uVGlsZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXIoZXZlbnQsIG51bGwsIHRoaXMuaGFuZGxlclR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZ2hsaWdodE9uKCkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTm9kZS5jbGFzc05hbWUgPSBgJHt0aGlzLmJ1dHRvbkNsYXNzTmFtZX0gJHtMT0dfQ0xBU1MuQlVUVE9OX1NFTEVDVEVEfWA7XHJcbiAgICB9XHJcblxyXG4gICAgaGlnaGxpZ2h0T2ZmKCkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTm9kZS5jbGFzc05hbWUgPSB0aGlzLmJ1dHRvbkNsYXNzTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUZXh0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25Ob2RlLnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVHVybkluZm8oY2FwdGlvbiwgdHlwZSkge1xyXG4gICAgICAgIHRoaXMuc2V0VGV4dChjYXB0aW9uKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJUeXBlID0gdHlwZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHJlbmRlclV0aWxzIH0gZnJvbSAnLi4vLi4vbGlicmFyeSc7XHJcbmltcG9ydCB7IGdldENsYXNzQnlDb2xvciB9IGZyb20gJy4uL2hlbHBlcic7XHJcbmltcG9ydCB7IENFTExfQ0xBU1NfTkFNRSwgQ09OTkVDVF9DTEFTU19OQU1FIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQ09OTkVDVF9UWVBFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IGdldENvbnRlbnRXcmFwID0gKCkgPT4gcmVuZGVyVXRpbHMuZ2V0RGl2KCdjZWxsX3JvdyBmbGV4IGp1c3RpZnlTcGFjZUJldHdlZW4nKTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbSAtINGB0LLQvtC50YHRgtCy0LAgY29sb3Ig0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LwuXHJcbiAqL1xyXG5jb25zdCBnZXRXcmFwRWxlbWVudCA9IGl0ZW0gPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHJlbmRlclV0aWxzLmdldEVtcHR5RGl2KCk7XHJcbiAgICBsZXQgZWxlbWVudENsYXNzTmFtZSA9IGAke0NFTExfQ0xBU1NfTkFNRS5DT01NT059IGZsZXhgO1xyXG5cclxuICAgIGlmIChpdGVtLmNvbG9yPy52YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yQ2xhc3MgPSBnZXRDbGFzc0J5Q29sb3IoaXRlbS5jb2xvci52YWx1ZSk7XHJcbiAgICAgICAgZWxlbWVudENsYXNzTmFtZSA9IGAke2VsZW1lbnRDbGFzc05hbWV9ICR7Y29sb3JDbGFzc31gO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudENsYXNzTmFtZTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqINCg0LXQvdC00LXRgCDQstC10YDRhdC90LXQuSDRh9Cw0YHRgtC4INC60LvQtdGC0LrQuC5cclxuICog0J3QsCDQtNCw0L3QvdGL0Lkg0LzQvtC80LXQvdGCINC10YHRgtGMINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0YLQvtC70YzQutC+INC/0YDQvtC/0LjRgdGL0LLQsNGC0Ywg0LLQtdGA0YXQvdGO0Y4g0LTQtdCy0YPRjiDRgdCy0LfRj9GMLlxyXG4gKiBUT0RPOiDQvdCwINC00LDQvdC90YvQuSDQvNC+0LzQtdC90YIgbWlkZGxlIC0g0Y3RgtC+INC70LjRiNC90LjQuSDRjdC70LXQvNC10L3Rgi4g0JzQvtC20L3QviDRg9Cx0YDQsNGC0YwuXHJcbiAqIEBwYXJhbSB7YXJyYXl9IGNvbm5lY3RMaXN0IC0g0YHQv9C40YHQvtC6INGB0L7QtdC00LjQvdC10L3QuNC1INGB0YLRgNC+0LrQsNC80LguXHJcbiAqL1xyXG5jb25zdCBnZXRUb3BFbGVtZW50ID0gKHsgY29ubmVjdExpc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGdldENvbnRlbnRXcmFwKCk7XHJcbiAgICBjb25zdCBlbXB0eUNsYXNzID0gYCR7Q09OTkVDVF9DTEFTU19OQU1FLkJBU0V9ICR7Q09OTkVDVF9DTEFTU19OQU1FLkVNUFRZfWA7XHJcblxyXG4gICAgY29uc3QgbGVmdCA9IHJlbmRlclV0aWxzLmdldERpdihDT05ORUNUX0NMQVNTX05BTUUuQkFTRSk7XHJcbiAgICBjb25zdCBtaWRkbGUgPSByZW5kZXJVdGlscy5nZXREaXYoZW1wdHlDbGFzcyk7XHJcbiAgICBjb25zdCByaWdodCA9IHJlbmRlclV0aWxzLmdldERpdihlbXB0eUNsYXNzKTtcclxuXHJcbiAgICBpZiAoY29ubmVjdExpc3QuaW5jbHVkZXMoQ09OTkVDVF9UWVBFLkxFRlRfVE9QKSkge1xyXG4gICAgICAgIGxlZnQuY2xhc3NOYW1lID0gYCR7bGVmdC5jbGFzc05hbWV9ICR7Q09OTkVDVF9DTEFTU19OQU1FLkRJQUdPTkFMX0xFRlR9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGVmdC5jbGFzc05hbWUgPSBgJHtsZWZ0LmNsYXNzTmFtZX0gJHtDT05ORUNUX0NMQVNTX05BTUUuRU1QVFl9YDtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZChsZWZ0LCBtaWRkbGUsIHJpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqINCc0L7Qs9GD0YIg0LIg0YLQvtC8INGH0LjRgdC70LUg0L/RgNC+0YHRgtCw0LLQu9GP0YLRjNGB0Y8g0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvQtSDRgdCy0Y/Qt9C4LlxyXG4gKi9cclxuY29uc3QgZ2V0TWlkZGxlRWxlbWVudCA9ICh7IHBvd2VyVmFsdWUsIGNvbm5lY3RMaXN0IH0pID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRDb250ZW50V3JhcCgpO1xyXG4gICAgbGV0IGNvbnRlbnRDbGFzcyA9IGAke0NPTk5FQ1RfQ0xBU1NfTkFNRS5CQVNFfSAke0NPTk5FQ1RfQ0xBU1NfTkFNRS5FTVBUWX1gO1xyXG5cclxuICAgIGlmIChjb25uZWN0TGlzdC5pbmNsdWRlcyhDT05ORUNUX1RZUEUuTElORSkpIHtcclxuICAgICAgICBjb250ZW50Q2xhc3MgPSBgJHtjb250ZW50Q2xhc3N9ICR7Q09OTkVDVF9DTEFTU19OQU1FLkxJTkV9YDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsZWZ0ID0gcmVuZGVyVXRpbHMuZ2V0RGl2KGNvbnRlbnRDbGFzcyk7XHJcbiAgICBjb25zdCBtaWRkbGUgPSByZW5kZXJVdGlscy5nZXREaXYoY29udGVudENsYXNzKTtcclxuICAgIGNvbnN0IHJpZ2h0ID0gcmVuZGVyVXRpbHMuZ2V0RGl2KGNvbnRlbnRDbGFzcyk7XHJcblxyXG4gICAgaWYgKHBvd2VyVmFsdWUpIHtcclxuICAgICAgICBtaWRkbGUudGV4dENvbnRlbnQgPSBwb3dlclZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kKGxlZnQsIG1pZGRsZSwgcmlnaHQpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5jb25zdCBnZXRCb3R0b21FbGVtZW50ID0gKHsgY29ubmVjdExpc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGdldENvbnRlbnRXcmFwKCk7XHJcbiAgICBjb25zdCBlbXB0eUNsYXNzID0gYCR7Q09OTkVDVF9DTEFTU19OQU1FLkJBU0V9ICR7Q09OTkVDVF9DTEFTU19OQU1FLkVNUFRZfWBcclxuXHJcbiAgICBjb25zdCBsZWZ0ID0gcmVuZGVyVXRpbHMuZ2V0RGl2KGVtcHR5Q2xhc3MpO1xyXG4gICAgY29uc3QgbWlkZGxlID0gcmVuZGVyVXRpbHMuZ2V0RGl2KGVtcHR5Q2xhc3MpO1xyXG4gICAgY29uc3QgcmlnaHQgPSByZW5kZXJVdGlscy5nZXREaXYoQ09OTkVDVF9DTEFTU19OQU1FLkJBU0UpO1xyXG5cclxuICAgIGlmIChjb25uZWN0TGlzdC5pbmNsdWRlcyhDT05ORUNUX1RZUEUuUklHSFRfQk9UVE9NKSkge1xyXG4gICAgICAgIHJpZ2h0LmNsYXNzTmFtZSA9IGAke3JpZ2h0LmNsYXNzTmFtZX0gJHtDT05ORUNUX0NMQVNTX05BTUUuRElBR09OQUxfUklHSFR9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmlnaHQuY2xhc3NOYW1lID0gYCR7cmlnaHQuY2xhc3NOYW1lfSAke0NPTk5FQ1RfQ0xBU1NfTkFNRS5FTVBUWX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kKGxlZnQsIG1pZGRsZSwgcmlnaHQpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICog0JHQsNC30L7QstCw0Y8gRE9NLdC60LvQtdGC0LrQsCDQtNC70Y8g0LjQs9GA0Ysg0YHQviDQstGB0LXQvCDQvdCw0L/QvtC70L3QtdC90LjQtdC8LlxyXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbSAtIGNsYXNzTmFtZSwgY29sb3I/OiB7IHN0ZXBUeXBlLCB2YWx1ZShjb2xvcikgfSwgY29ubmVjdExpc3Q6IFtdLCBwb3NpdGlvbiwgcG93ZXJWYWx1ZSwgdHlwZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRQb3dlclRpbGVSZW5kZXJFbGVtZW50ID0gaXRlbSA9PiB7XHJcbiAgICBjb25zdCB3cmFwID0gZ2V0V3JhcEVsZW1lbnQoaXRlbSk7XHJcbiAgICBjb25zdCBtZXRob2RMaXN0ID0gW2dldFRvcEVsZW1lbnQsIGdldE1pZGRsZUVsZW1lbnQsIGdldEJvdHRvbUVsZW1lbnRdO1xyXG5cclxuICAgIG1ldGhvZExpc3QuZm9yRWFjaChtZXRob2QgPT4gd3JhcC5hcHBlbmQobWV0aG9kKGl0ZW0pKSk7XHJcblxyXG4gICAgcmV0dXJuIHdyYXA7XHJcbn0iLCJleHBvcnQgY29uc3QgQ0VMTF9DTEFTU19OQU1FID0ge1xyXG4gICAgQ09NTU9OOiAnY2VsbCcsXHJcbiAgICBFTVBUWTogJ2NlbGxfZW1wdHknLFxyXG4gICAgV0FJVElORzogJ2NlbGxfd2FpdGluZycsXHJcbiAgICBXUkFQOiAnY2VsbF93cmFwJyxcclxuICAgIEdSRUVOOiAnY2VsbF9ncmVlbicsXHJcbiAgICBSRUQ6ICdjZWxsX3JlZCcsXHJcbiAgICBNQUdFTlRBOiAnY2VsbF9tYWdlbnRhJyxcclxuICAgIEJMVUU6ICdjZWxsX2JsdWUnLFxyXG4gICAgV0FJVElOR19TRUxFQ1Q6ICdjZWxsX3dhaXRpbmdTZWxlY3QnLFxyXG4gICAgU0VMRUNURUQ6ICdjZWxsX3NlbGVjdGVkJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBIRVhBR09OX0NMQVNTX05BTUVTID0ge1xyXG4gICAgVElMRV9IRVhBR09OOiAndGlsZV9oZXhhZ29uJyxcclxuICAgIEhFWEFHT046ICdoZXhhZ29uJyxcclxuICAgIFBPV0VSX1ZBTFVFOiAnaGV4YWdvbl9wb3dlclZhbHVlJyxcclxuXHJcbiAgICBUSUxFX0JMVUU6ICd0aWxlX2JsdWUnLFxyXG4gICAgVElMRV9NQUdFTlRBOiAndGlsZV9tYWdlbnRhJyxcclxuICAgIFRJTEVfUkVEOiAndGlsZV9yZWQnLFxyXG4gICAgVElMRV9HUkVFTjogJ3RpbGVfZ3JlZW4nLFxyXG5cclxuICAgIExFRlRfVE9fQk9UVE9NOiAndGlsZV9oZXhhZ29uX2xpbmVfMScsXHJcbiAgICBSSUdIVF9UT19CT1RUT006ICd0aWxlX2hleGFnb25fbGluZV8yJyxcclxuICAgIExJTkU6ICd0aWxlX2hleGFnb25fbGluZV8zJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENPTk5FQ1RfQ0xBU1NfTkFNRSA9IHtcclxuICAgIEJBU0U6ICdjZWxsX2Nvbm5lY3QnLFxyXG4gICAgRElBR09OQUxfTEVGVDogJ2NlbGxfY29ubmVjdF9kaWFnb25hbExlZnQnLFxyXG4gICAgRElBR09OQUxfUklHSFQ6ICdjZWxsX2Nvbm5lY3RfZGlhZ29uYWxSaWdodCcsXHJcbiAgICBMSU5FOiAnY2VsbF9jb25uZWN0X2xpbmUnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ09MT1IgPSB7XHJcbiAgICBHUkVFTjogJ2dyZWVuJyxcclxuICAgIFJFRDogJ3JlZCcsXHJcbiAgICBNQUdFTlRBOiAnbWFnZW50YScsXHJcbiAgICBCTFVFOiAnYmx1ZScsXHJcbiAgICBERUZBVUxUOiAnJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfQ0xBU1MgPSB7XHJcbiAgICAvLyBXUkFQOiAnbG9nX3dyYXAnLFxyXG4gICAgVElMRTogJ2xvZ190aWxlJyxcclxuICAgIEJVVFRPTjogJ2xvZ19idXR0b24nLFxyXG4gICAgQlVUVE9OX1NFTEVDVEVEOiAnbG9nX2J1dHRvbl9zZWxlY3RlZCcsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBURVhUUyA9IHtcclxuICAgIE5FWFRfVFVSTjogJ9CX0LDQstC10YDRiNC40YLRjCDRhdC+0LQnLFxyXG4gICAgRU5EX0dJRlQ6ICfQl9Cw0LLQtdGA0YjQuNGC0Ywg0YDQsNC30LTQsNGH0YMnLFxyXG4gICAgTUFUUklYX0VSUk9SOiAn0J7RiNC40LHQutCwINCyINC/0LXRgNC10LTQsNC90L3QvtC5INC80LDRgtGA0LjRhtC1LicsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQT1dFUl9ET01fSURTID0ge1xyXG4gICAgVFVSTl9CVVRUT046ICd0dXJuQnV0dG9uJywgICAgICAvLyBUT0RPOiDQvNC+0LbQtdGCINC+0LrQsNC30LDRgtGM0YHRjyDQu9C40YjQvdC40LwuXHJcbiAgICBNQUlOX0ZJRUxEOiAnbWFpbkZpZWxkJyxcclxufSIsImltcG9ydCB7IENFTExfVFlQRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IENFTExfQ0xBU1NfTkFNRSwgQ09MT1IgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2xhc3NCeUNlbGxUeXBlID0gKHR5cGUpID0+IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgQ0VMTF9UWVBFLkVNUFRZOiByZXR1cm4gQ0VMTF9DTEFTU19OQU1FLkVNUFRZO1xyXG4gICAgICAgIGNhc2UgQ0VMTF9UWVBFLldBSVRJTkc6IHJldHVybiBDRUxMX0NMQVNTX05BTUUuV0FJVElORztcclxuICAgICAgICBjYXNlIENFTExfVFlQRS5XQUlUSU5HX1NFTEVDVDogcmV0dXJuIENFTExfQ0xBU1NfTkFNRS5XQUlUSU5HX1NFTEVDVDtcclxuICAgICAgICBjYXNlIENFTExfVFlQRS5TRUxFQ1RFRDogcmV0dXJuIENFTExfQ0xBU1NfTkFNRS5TRUxFQ1RFRDtcclxuICAgICAgICBjYXNlIENFTExfVFlQRS5SRUFEWTogcmV0dXJuICcnO1xyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBDRUxMX0NMQVNTX05BTUUuRU1QVFk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3JcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldENsYXNzQnlDb2xvciA9IGNvbG9yID0+IHtcclxuICAgIHN3aXRjaCAoY29sb3IpIHtcclxuICAgICAgICBjYXNlIENPTE9SLkdSRUVOOiByZXR1cm4gQ0VMTF9DTEFTU19OQU1FLkdSRUVOO1xyXG4gICAgICAgIGNhc2UgQ09MT1IuUkVEOiByZXR1cm4gQ0VMTF9DTEFTU19OQU1FLlJFRDtcclxuICAgICAgICBjYXNlIENPTE9SLk1BR0VOVEE6IHJldHVybiBDRUxMX0NMQVNTX05BTUUuTUFHRU5UQTtcclxuICAgICAgICBjYXNlIENPTE9SLkJMVUU6IHJldHVybiBDRUxMX0NMQVNTX05BTUUuQkxVRTtcclxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gQ09MT1IuREVGQVVMVDtcclxuICAgIH1cclxufSIsImV4cG9ydCB7IFBvd2VyUmVuZGVyQVBJIH0gZnJvbSAnLi9SZW5kZXJBUEknOyIsIi8qKlxyXG4gKiDQktC+0LfQstGA0LDRidCw0LXRgiDRgNCw0L3QtNC+0LzQvdC+0LUg0YfQuNGB0LvQviDQv9C+INC/0LXRgNC10LTQsNC90L3Ri9C8INC/0LDRgNCw0LzQtdGC0YDQsNC8LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWluLlxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tTnVtYmVyID0gKG1heCA9IDEwLCBtaW4gPSAwKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cclxuLyoqXHJcbiAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGA0LDQvdC00L7QvNC90L4gdHJ1ZS9mYWxzZTtcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGNoYW5jZVxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFJhbmRvbUJvb2xlYW4gPSAoY2hhbmNlKSA9PiB7XHJcbiAgICBsZXQgcGFyYW0gPSAxO1xyXG5cclxuICAgIGlmIChjaGFuY2UgPT09IDI1KSB7XHJcbiAgICAgICAgcGFyYW0gPSAzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAhIWdldFJhbmRvbU51bWJlcihwYXJhbSk7XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFBPV0VSX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IFBvd2VyR2FtZUFwcCBmcm9tICcuL1Bvd2VyR2FtZSc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgQVBQX05BTUUgPSAncG93ZXJWYWx1ZSc7XHJcbmNvbnN0IGlzRGV2ID0gdHJ1ZTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFwcCgpIHtcclxuICAgIGNvbnN0IERPTV9JRFMgPSB7IHJvb3Q6IEFQUF9OQU1FIH07XHJcbiAgICBjb25zdCBwb3dlckdhbWUgPSBuZXcgUG93ZXJHYW1lQXBwKFBPV0VSX0NPTkZJRywgRE9NX0lEUywgaXNEZXYpO1xyXG5cclxuICAgIHBvd2VyR2FtZS5zdGFydCgpO1xyXG59XHJcblxyXG5jcmVhdGVBcHAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=