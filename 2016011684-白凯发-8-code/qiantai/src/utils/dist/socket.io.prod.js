"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tableDataSocket=tableDataSocket;var _socket=_interopRequireDefault(require("socket.io-client")),_config=require("../../../components/config/config");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var socketBGP=_socket.default.connect("/bgp_events");function tableDataSocket(t){socketBGP.on("bgp_events",function(e){t(null,e)})}