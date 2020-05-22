"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastTime = exports.storage_this_time = exports.getUser = void 0;

var _fetch = _interopRequireDefault(require("xhr/fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getUser = function getUser() {
  return _fetch["default"].get('/api/users/current');
};

exports.getUser = getUser;

var storage_this_time = function storage_this_time(time) {
  return _fetch["default"].post('api/users/this_time', time);
};

exports.storage_this_time = storage_this_time;

var getLastTime = function getLastTime() {
  return _fetch["default"].get('api/users/this_time');
};

exports.getLastTime = getLastTime;