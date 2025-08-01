"use strict";
exports.__esModule = true;
var react_1 = require("react");
var home_1 = require("./home");
var logo1_jpeg_1 = require("./images/logo1.jpeg");
require("./styles.scss");
var InventoryIndex = function () {
    var _a = react_1["default"].useState(true), input = _a[0], setInput = _a[1];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("img", { src: logo1_jpeg_1["default"], alt: "logo" }))),
        react_1["default"].createElement("div", { className: "inventoryIndexExterior" },
            react_1["default"].createElement(home_1["default"], null))));
};
exports["default"] = InventoryIndex;
