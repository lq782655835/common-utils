/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/common-utils/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "034f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("64a9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3a39":
/***/ (function(module, exports) {

module.exports = [{
  fn: 'bytesToSize',
  title: '通用字节转换',
  example: [1024]
}, {
  fn: 'dateFormater',
  title: '通用日期格式转换',
  example: ['YYYY年MM月DD日 hh:mm:ss']
}, {
  fn: 'timeView',
  title: '日期展示',
  example: ['1567738721718']
}, {
  fn: 'copyData',
  title: '拷贝字符',
  example: ['拷贝后可粘贴查看']
}, {
  fn: 'getExplorerInfo',
  title: '获取浏览器信息',
  example: []
}, {
  fn: 'isPCBroswer',
  title: '是否为PC端浏览器模式',
  example: []
}, {
  fn: 'toFullScreen',
  title: '全屏',
  example: []
}, {
  fn: 'exitFullScreen',
  title: '退出全屏',
  example: []
}, {
  fn: 'disabledBrowserEvent',
  title: '禁用右键',
  example: ['contextmenu']
}, {
  fn: 'random',
  title: '指定范围随机数',
  example: [5, 99]
}, // {
//     fn: 'downloadImage',
//     title: '下载',
//     example: ['https://github.com/lq782655835/common-utils/blob/master/vscode-logo.png']
// },
{
  fn: 'validURL',
  title: '网址正则',
  example: ['http://www.baidu.com']
}, {
  fn: 'validEmail',
  title: '邮箱正则',
  example: ['123@163.com']
}, {
  fn: 'camelize',
  title: '横线转驼峰命名',
  example: ['ab-cd-ef']
}, {
  fn: 'hyphenate',
  title: '驼峰转横线命名',
  example: ['abCdEf']
}, {
  fn: 'uppercaseFirst',
  title: '首字母大写',
  example: ['abCdEf']
}, {
  fn: 'getQueryValueByName',
  title: '获取location指定值',
  example: ['a']
}, {
  fn: 'getQueryParam',
  title: '获取location所有参数',
  example: []
}];

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var common_utils_es_namespaceObject = {};
__webpack_require__.r(common_utils_es_namespaceObject);
__webpack_require__.d(common_utils_es_namespaceObject, "EventEmitter", function() { return EventEmitter; });
__webpack_require__.d(common_utils_es_namespaceObject, "bytesToSize", function() { return bytesToSize; });
__webpack_require__.d(common_utils_es_namespaceObject, "camelize", function() { return camelize; });
__webpack_require__.d(common_utils_es_namespaceObject, "copyData", function() { return copyData; });
__webpack_require__.d(common_utils_es_namespaceObject, "dateFormater", function() { return dateFormater; });
__webpack_require__.d(common_utils_es_namespaceObject, "debounce", function() { return debounce; });
__webpack_require__.d(common_utils_es_namespaceObject, "deepClone", function() { return deepClone; });
__webpack_require__.d(common_utils_es_namespaceObject, "disabledBrowserEvent", function() { return disabledBrowserEvent; });
__webpack_require__.d(common_utils_es_namespaceObject, "disabledKeyEvent", function() { return disabledKeyEvent; });
__webpack_require__.d(common_utils_es_namespaceObject, "downloadImage", function() { return downloadImage; });
__webpack_require__.d(common_utils_es_namespaceObject, "exitFullScreen", function() { return exitFullScreen; });
__webpack_require__.d(common_utils_es_namespaceObject, "flatDeep", function() { return flatDeep; });
__webpack_require__.d(common_utils_es_namespaceObject, "getExplorerInfo", function() { return getExplorerInfo; });
__webpack_require__.d(common_utils_es_namespaceObject, "getQueryParam", function() { return getQueryParam; });
__webpack_require__.d(common_utils_es_namespaceObject, "getQueryValueByName", function() { return getQueryValueByName; });
__webpack_require__.d(common_utils_es_namespaceObject, "getRawType", function() { return getRawType; });
__webpack_require__.d(common_utils_es_namespaceObject, "hyphenate", function() { return hyphenate; });
__webpack_require__.d(common_utils_es_namespaceObject, "isArray", function() { return isArray; });
__webpack_require__.d(common_utils_es_namespaceObject, "isDate", function() { return isDate; });
__webpack_require__.d(common_utils_es_namespaceObject, "isFunction", function() { return isFunction; });
__webpack_require__.d(common_utils_es_namespaceObject, "isObject", function() { return isObject; });
__webpack_require__.d(common_utils_es_namespaceObject, "isPCBroswer", function() { return isPCBroswer; });
__webpack_require__.d(common_utils_es_namespaceObject, "isPlainObject", function() { return isPlainObject; });
__webpack_require__.d(common_utils_es_namespaceObject, "isRegExp", function() { return isRegExp; });
__webpack_require__.d(common_utils_es_namespaceObject, "max", function() { return max; });
__webpack_require__.d(common_utils_es_namespaceObject, "min", function() { return min; });
__webpack_require__.d(common_utils_es_namespaceObject, "random", function() { return random; });
__webpack_require__.d(common_utils_es_namespaceObject, "timeView", function() { return timeView; });
__webpack_require__.d(common_utils_es_namespaceObject, "toFullScreen", function() { return toFullScreen; });
__webpack_require__.d(common_utils_es_namespaceObject, "uppercaseFirst", function() { return uppercaseFirst; });
__webpack_require__.d(common_utils_es_namespaceObject, "validEmail", function() { return validEmail; });
__webpack_require__.d(common_utils_es_namespaceObject, "validURL", function() { return validURL; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.promise.finally.js
var es7_promise_finally = __webpack_require__("097d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7df1fffb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=05f78146&
var Appvue_type_template_id_05f78146_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_vm._m(0),_c('section',{staticClass:"list"},[_c('ul',{staticClass:"list"},_vm._l((_vm.mapping),function(ref,index){
var fn = ref.fn;
var title = ref.title;
var example = ref.example;
return _c('li',{key:fn},[_c('i',{staticClass:"border"}),_c('h2',[_vm._v(_vm._s(title))]),_vm._v("\n        输入参数："),_c('el-input',{attrs:{"disabled":_vm.list[index].disabled},model:{value:(_vm.list[index].value),callback:function ($$v) {_vm.$set(_vm.list[index], "value", $$v)},expression:"list[index].value"}}),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.exec(fn, index)}}},[_vm._v(_vm._s(fn))]),_c('br'),(_vm.list[index].result)?[_vm._v("\n          输出结果："),_c('span',[_vm._v(_vm._s(_vm.list[index].result))])]:_vm._e(),_c('pre',{staticClass:"code-container"},[_vm._v("          "),_c('code',{staticClass:"javascript"},[_vm._v("\n            "+_vm._s(_vm.list[index].code)+"\n          ")]),_vm._v("\n          "),_c('el-tooltip',{staticClass:"code-btn copy",attrs:{"effect":"dark","content":"拷贝","placement":"top"}},[_vm._v("\n            "),_c('i',{staticClass:"el-icon-document",on:{"click":function($event){return _vm.copy(fn)}}}),_vm._v("\n          ")]),_vm._v("\n        ")],1)],2)}),0)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__("8c42")}}),_c('h1',{staticClass:"title"},[_vm._v("常用函数大全")])])}]


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=05f78146&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("75fc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.freeze.js
var es6_object_freeze = __webpack_require__("0d6d");

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/highlight.js
var highlight = __webpack_require__("a70e");
var highlight_default = /*#__PURE__*/__webpack_require__.n(highlight);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/languages/javascript.js
var javascript = __webpack_require__("4dd1");
var javascript_default = /*#__PURE__*/__webpack_require__.n(javascript);

// EXTERNAL MODULE: ./node_modules/highlight.js/styles/github.css
var github = __webpack_require__("2c43");

// EXTERNAL MODULE: ./src/MAPPING.js
var MAPPING = __webpack_require__("3a39");
var MAPPING_default = /*#__PURE__*/__webpack_require__.n(MAPPING);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("3b2b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("386d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("20d6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("7618");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("ac4d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ../dist/common-utils.es.js













/*!
 * common-utils.js v0.0.1
 * (c) 2019-2019 Russell
 * https://github.com/lq782655835/common-utils
 * Released under the MIT License.
 */

/**
 * B to KB/MB...
 * @param {*} bytes
 */
function bytesToSize(bytes) {
  if (bytes === 0) return "0 B";
  var k = 1024;
  var sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
}
/**
 * 通用格式转换
 * @param {*} formater 格式模板
 * @param {*} t 支持number和date，默认是当前时间
 * expample: dateFormater('YYYY-MM-DD hh:mm:ss')
 */


function dateFormater(formater, t) {
  var date = t ? new Date(t) : new Date(),
      Y = date.getFullYear() + "",
      M = date.getMonth() + 1,
      D = date.getDate(),
      H = date.getHours(),
      m = date.getMinutes(),
      s = date.getSeconds();
  return formater.replace(/YYYY|yyyy/g, Y).replace(/YY|yy/g, Y.substr(2, 2)).replace(/MM/g, (M < 10 ? "0" : "") + M).replace(/DD|dd/g, (D < 10 ? "0" : "") + D).replace(/HH|hh/g, (H < 10 ? "0" : "") + H).replace(/mm/g, (m < 10 ? "0" : "") + m).replace(/ss/g, (s < 10 ? "0" : "") + s);
}
/**
 * 日期展示
 * @param {*} val
 */


function timeView(val) {
  var now = +new Date(); // 当时时间

  var timeStamp = +new Date(val); // 需要处理的时间

  var result = now - timeStamp; // 相差的时间戳

  var min = 60 * 1000; // 分钟的毫秒数

  var hour = 60 * 60 * 1000; // 小时的毫秒数

  var day = 60 * 60 * 1000 * 24; // 日的毫秒数

  if (result / min < 1) {
    return "刚刚发布";
  } else if (result / min < 60) {
    return Math.floor(result / min) + "分钟前";
  } else if (result / hour > 1 && result / hour < 24) {
    return Math.floor(result / hour) + "小时前";
  } else if (result / day > 1 && result / day < 7) {
    return Math.floor(result / day) + "天前";
  } else if (dateFormater("YYYY", now) === dateFormater("YYYY", timeStamp)) {
    return dateFormater("MM月DD日", timeStamp);
  } else {
    return dateFormater("YYYY年MM月DD日", timeStamp);
  }
}

function common_utils_es_typeof(obj) {
  if (typeof Symbol === "function" && Object(esm_typeof["a" /* default */])(Symbol.iterator) === "symbol") {
    common_utils_es_typeof = function _typeof(obj) {
      return Object(esm_typeof["a" /* default */])(obj);
    };
  } else {
    common_utils_es_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : Object(esm_typeof["a" /* default */])(obj);
    };
  }

  return common_utils_es_typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this._eventStore = {};
  }
  /**
   * 绑定事件
   * @param {String|Symbol} 事件名
   * @param {Function} 回调函数
   */


  _createClass(EventEmitter, [{
    key: "on",
    value: function on(eventName, listener) {
      (this._eventStore[eventName] || (this._eventStore[eventName] = [])).push(listener);
      return this;
    }
    /**
     * 添加单次监听器 listener 到名为 eventName 的事件。
     * 当 eventName 事件下次触发时，监听器会先被移除，然后再调用。
     * @param {String|Symbol} 事件名
     * @param {Function} 回调函数
     */

  }, {
    key: "once",
    value: function once(eventName, listener) {
      function on() {
        this.off(eventName, listener);
        listener.apply(this, arguments);
      }

      this.on(eventName, on);
      return this;
    }
    /**
     * 按照监听器注册的顺序，同步地调用每个注册到名为 eventName 的事件的监听器，并传入提供的参数。
     * @param {String|Symbol} 事件名
     * @param {Any} 载荷数据
     * @returns this
     */

  }, {
    key: "emit",
    value: function emit(eventName) {
      var _this = this;

      for (var _len = arguments.length, payload = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        payload[_key - 1] = arguments[_key];
      }

      var cbs = this._eventStore[eventName];

      if (cbs) {
        cbs.forEach(function (cb) {
          return cb.apply(_this, payload);
        });
      }

      return this;
    }
    /**
     * 解除绑定
     * 如果不指定listener, 那么解除所有eventName对应回调
     * @param {String|Symbol} 事件名
     * @param {Function} 回调函数
     */

  }, {
    key: "off",
    value: function off(eventName, listener) {
      var cbs = this._eventStore[eventName];

      if (cbs) {
        // 清空事件
        if (!listener) {
          this._eventStore[eventName] = null;
        } else {
          // 清空指定回调
          var delIndex = cbs.findIndex(function (fn) {
            return fn === listener;
          });
          cbs.splice(delIndex, 1);
        }
      }

      return this;
    }
  }, {
    key: "eventNames",
    value: function eventNames() {
      console.log(this._eventStore, 123);
      return Object.keys(this._eventStore);
    }
  }, {
    key: "count",
    value: function count(eventName) {
      var cbs = this._eventStore[eventName];
      return cbs && cbs.length || 0;
    }
    /**
     * 销毁实例
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._eventStore = {};
    }
  }]);

  return EventEmitter;
}();
/**
 * @param {string} url
 * @returns {Boolean}
 */


function validURL(url) {
  var reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
}
/**
 * @param {string} email
 * @returns {Boolean}
 */


function validEmail(email) {
  var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}
/**
 * 横线转驼峰命名
 * @param {*} str
 * example: camelize('ab-cd-ef') // abCdEf
 */


function camelize(str) {
  var camelizeRE = /-(\w)/g;
  return str.replace(camelizeRE, function ($0, $1) {
    return $1 ? $1.toUpperCase() : "";
  });
}
/**
 * 驼峰转横线命名
 * @param {*} str
 * example: hyphenate('abCdEf') // ab-cd-ef
 */


function hyphenate(str) {
  var hyphenateRE = /\B([A-Z])/g;
  return str.replace(hyphenateRE, "-$1").toLowerCase();
}
/**
 * 首字母大写
 * @param {String} string
 */


function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
/**
 * 知识点：
 * // js基本类型
 * 值类型：null/undefined/string/boolean/number/symbol
 * 引用类型：object（细分的话有：Object/Function/Array/Date/RegExp等）
 * // typeof(没有null): object/function/undefined/string/boolean/number
 * typeof null === 'object'
 * typeof undefined === 'undefined'
 * typeof window.console.log === 'function'
 * // toString() 返回 "[object type]"，其中type是对象的类型
 * Object.prototype.toString.call(null)==='[object Null]'
 * Object.prototype.toString.call(undefined)==='[object Undefined]'
 * Object.prototype.toString.call(window.console.log)==='[object Function]'
 * // instanceOf是根据原型链判断
 * window.console.log instanceOf Function // true
 * window.console.log instanceOf Object // true
 */

/**
 * 判断数据是不是引用类型的数据
 * (例如： arrays, functions, objects, regexes, new Number(0),以及 new String(''))
 */


function isObject(value) {
  var type = common_utils_es_typeof(value);

  return value != null && (type == "object" || type == "function");
}
/**
 * 判断数据是不是Object类型的数据
 */


function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
/**
 * 是否是数组
 * @param {Array} arg
 * @returns {Boolean}
 */


function isArray(arg) {
  Array.isArray = Array.isArray || Object.prototype.toString.call(arg) === "[object Array]";
  return Array.isArray(arg);
} // 获取数据类型，返回结果为 Number、String、Object、Array等


function getRawType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
} // 判断数据是不是时间对象


function isDate(value) {
  return Object.prototype.toString.call(value) === "[object Date]";
} // 判断数据是不是正则对象


function isRegExp(value) {
  return Object.prototype.toString.call(value) === "[object RegExp]";
} // 判断数据是不是函数


function isFunction(value) {
  return Object.prototype.toString.call(value) === "[object Function]";
}
/**
 * 获取url query参数值
 * @param {*} name 参数
 * example: getQueryParam('a'); // returns '1' on page http://domain.com/page.html?a=1&b=2
 */


function getQueryValueByName(name) {
  var q = window.location.search.match(new RegExp("[?&]" + name + "=([^&#]*)"));
  return q && q[1];
}
/**
 * 获取所有参数。
 * 利用replace的正则以及处理函数，一行解决
 * example ?a=1&b=2&c=3 ==> {a: "1", b: "2", c: "3"}
 */


function getQueryParam() {
  var q = {};
  location.search.replace(/([^?&=]+)=([^&]+)/g, function (_, k, v) {
    return q[k] = v;
  });
  return q;
}
/**
 * 通用图片下载
 * @param {*} url
 */


function downloadImage(url) {
  var _$exec = /\/(.*?)(\?|$)/g.exec(url),
      _$exec2 = _slicedToArray(_$exec, 2),
      filename = _$exec2[1];

  var a = document.createElement("a");
  a.href = url;
  a.download = filename || true;
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
/**
 * 浏览器复制
 * @param {*} value 要复制的值
 */


function copyData(value) {
  var inputDom = document.createElement("input");
  inputDom.value = value;
  document.body.appendChild(inputDom);
  inputDom.select(); // 选择对象

  document.execCommand("Copy"); // 执行浏览器复制命令

  document.body.removeChild(inputDom); // 删除DOM
}
/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */


function deepClone(source) {
  if (!source && common_utils_es_typeof(source) !== "object") {
    throw new Error("error arguments", "deepClone");
  }

  var targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach(function (keys) {
    if (source[keys] && common_utils_es_typeof(source[keys]) === "object") {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
} // 展平


function flatDeep(arr) {
  return arr.reduce(function (pre, val) {
    return pre.concat(Array.isArray(val) ? flatDeep(val) : val);
  }, []);
} // 防抖


function debounce(fn, wait) {
  var tId;
  return function () {
    var that = this;
    var args = arguments;
    tId && clearTimeout(tId);
    tId = setTimeout(function () {
      fn.apply(that, args);
    }, wait);
  };
} // https://github.com/hfhan/tools/blob/master/util.js
// 获取浏览器信息


function getExplorerInfo() {
  var t = navigator.userAgent.toLowerCase();
  return 0 <= t.indexOf("msie") ? {
    //ie < 11
    type: "IE",
    version: Number(t.match(/msie ([\d]+)/)[1])
  } : !!t.match(/trident\/.+?rv:(([\d.]+))/) ? {
    // ie 11
    type: "IE",
    version: 11
  } : 0 <= t.indexOf("edge") ? {
    type: "Edge",
    version: Number(t.match(/edge\/([\d]+)/)[1])
  } : 0 <= t.indexOf("firefox") ? {
    type: "Firefox",
    version: Number(t.match(/firefox\/([\d]+)/)[1])
  } : 0 <= t.indexOf("chrome") ? {
    type: "Chrome",
    version: Number(t.match(/chrome\/([\d]+)/)[1])
  } : 0 <= t.indexOf("opera") ? {
    type: "Opera",
    version: Number(t.match(/opera.([\d]+)/)[1])
  } : 0 <= t.indexOf("Safari") ? {
    type: "Safari",
    version: Number(t.match(/version\/([\d]+)/)[1])
  } : {
    type: t,
    version: -1
  };
} // 检测是否为PC端浏览器模式


function isPCBroswer() {
  var e = navigator.userAgent.toLowerCase(),
      t = "ipad" == e.match(/ipad/i),
      i = "iphone" == e.match(/iphone/i),
      r = "midp" == e.match(/midp/i),
      n = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i),
      a = "ucweb" == e.match(/ucweb/i),
      o = "android" == e.match(/android/i),
      s = "windows ce" == e.match(/windows ce/i),
      l = "windows mobile" == e.match(/windows mobile/i);
  return !(t || i || r || n || a || o || s || l);
} // 全屏


function toFullScreen() {
  var elem = document.body;
  elem.webkitRequestFullScreen ? elem.webkitRequestFullScreen() : elem.mozRequestFullScreen ? elem.mozRequestFullScreen() : elem.msRequestFullscreen ? elem.msRequestFullscreen() : elem.requestFullScreen ? elem.requestFullScreen() : alert("浏览器不支持全屏");
} // 退出全屏


function exitFullScreen() {
  var elem = document.body;
  elem.webkitCancelFullScreen ? elem.webkitCancelFullScreen() : elem.mozCancelFullScreen ? elem.mozCancelFullScreen() : elem.cancelFullScreen ? elem.cancelFullScreen() : elem.msExitFullscreen ? elem.msExitFullscreen() : elem.exitFullscreen ? elem.exitFullscreen() : alert("切换失败,可尝试Esc退出");
} // 'contextmenu', 'selectstart', 'copy' 禁止右键、选择、复制


function disabledBrowserEvent(ev) {
  document.addEventListener(ev, function (event) {
    return event.returnValue = false;
  });
}

function disabledKeyEvent() {
  document.addEventListener("keydown", function (event) {
    return !(112 == event.keyCode || //F1
    123 == event.keyCode || //F12
    event.ctrlKey && 82 == event.keyCode || //ctrl + R
    event.ctrlKey && 78 == event.keyCode || //ctrl + N
    event.shiftKey && 121 == event.keyCode || //shift + F10
    event.altKey && 115 == event.keyCode || //alt + F4
    "A" == event.srcElement.tagName && event.shiftKey) || (event.returnValue = false) //shift + 点击a标签
    ;
  });
} // 数组中最大值


function max(arr) {
  arr = arr.filter(function (item) {
    return !_isNaN(item);
  });
  return arr.length ? Math.max.apply(null, arr) : undefined;
} // 数组中最小值


function min(arr) {
  arr = arr.filter(function (item) {
    return !_isNaN(item);
  });
  return arr.length ? Math.min.apply(null, arr) : undefined;
} // 随机数


function random(lower, upper) {
  lower = +lower || 0;
  upper = +upper || 0;
  return Math.random() * (upper - lower) + lower;
}

function _isNaN(v) {
  return !(typeof v === "string" || typeof v === "number") || isNaN(v);
}


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


highlight_default.a.registerLanguage('javascript', javascript_default.a);



/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'app',
  data: function data() {
    Object.freeze(MAPPING_default.a);
    return {
      mapping: MAPPING_default.a,
      list: MAPPING_default.a.map(function (_ref) {
        var fn = _ref.fn,
            example = _ref.example;
        return {
          value: example.join(','),
          result: '',
          disabled: example.length === 0,
          code: common_utils_es_namespaceObject[fn]
        };
      })
    };
  },
  mounted: function mounted() {
    highlight_default.a.initHighlightingOnLoad();
  },
  methods: {
    exec: function exec(fnName, index) {
      var params = this.list[index].value.split(',');
      var result = common_utils_es_namespaceObject[fnName].apply(common_utils_es_namespaceObject, Object(toConsumableArray["a" /* default */])(params));
      this.list[index].result = result;
      this.$notify.success({
        title: "".concat(fnName),
        message: '执行成功'
      });
    },
    copy: function copy(fnName) {
      copyData(common_utils_es_namespaceObject[fnName].toString());
      this.$message.success('复制成功');
    }
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__("034f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_05f78146_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__("5c96");
var element_ui_common_default = /*#__PURE__*/__webpack_require__.n(element_ui_common);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/index.css
var theme_chalk = __webpack_require__("0fae");

// CONCATENATED MODULE: ./src/main.js








vue_runtime_esm["default"].use(element_ui_common_default.a);
vue_runtime_esm["default"].config.productionTip = false;
new vue_runtime_esm["default"]({
  render: function render(h) {
    return h(App);
  }
}).$mount('#app');

/***/ }),

/***/ "64a9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8c42":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vscode-logo.aea790b0.png";

/***/ })

/******/ });
//# sourceMappingURL=app.6c4ecc0b.js.map