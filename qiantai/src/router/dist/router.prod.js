"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.routers=void 0;var _loadable=_interopRequireDefault(require("utils/loadable"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(t,o,i):t[o]=e[o]}return t.default=e,r&&r.set(e,t),t}var Login=(0,_loadable.default)(function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("containers/Login/Login"))})}),Registers=(0,_loadable.default)(function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("containers/Register/Register"))})}),Home=(0,_loadable.default)(function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("containers/Home"))})}),Test=(0,_loadable.default)(function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("../store/Test"))})}),PersonalInfo=(0,_loadable.default)(function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("containers/PersonalInfo"))})}),TieZi=(0,_loadable.default)(function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("components/TieZi"))})}),New=(0,_loadable.default)(function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("components/New"))})}),routeConfig=[{path:"/New",exact:!0,render:New},{path:"/TieZi",exact:!0,render:TieZi},{path:"/PersonalInfo",exact:!0,render:PersonalInfo},{path:"/Test",exact:!0,render:Test},{path:"/Register",exact:!0,render:Registers}],routers=[{path:"/Home",exact:!0,render:Home},{path:"/Login",exact:!0,render:Login}].concat(routeConfig);exports.routers=routers;