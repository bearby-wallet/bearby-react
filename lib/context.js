"use strict";
exports.__esModule = true;
exports.BearbyContext = void 0;
var react_1 = require("react");
var bearby_js_1 = require("@hicaru/bearby.js");
exports.BearbyContext = react_1["default"].createContext({
    connected: bearby_js_1.web3.wallet.connected,
    enabled: bearby_js_1.web3.wallet.enabled,
    base58: bearby_js_1.web3.wallet.account.base58,
    net: bearby_js_1.web3.wallet.network.net,
    massa: bearby_js_1.web3.massa,
    wallet: bearby_js_1.web3.wallet
});
