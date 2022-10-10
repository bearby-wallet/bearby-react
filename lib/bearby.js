"use strict";
exports.__esModule = true;
exports.useBearby = void 0;
var react_1 = require("react");
var context_1 = require("./context");
var errors_1 = require("./errors");
function useBearby() {
    var context = react_1["default"].useContext(context_1.BearbyContext);
    if (!context) {
        throw new Error(errors_1.USE_BEARBY_PROVIDER);
    }
    return context;
}
exports.useBearby = useBearby;
