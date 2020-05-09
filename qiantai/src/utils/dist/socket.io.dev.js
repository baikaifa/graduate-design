"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableDataSocket = tableDataSocket;

var _socket = _interopRequireDefault(require("socket.io-client"));

var _config = require("../../../components/config/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var socketBGP = _socket["default"].connect('/bgp_events');

function tableDataSocket(cb) {
  socketBGP.on('bgp_events', function (timestamp) {
    cb(null, timestamp);
  });
}