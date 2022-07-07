"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var _components_1 = require("@components");
var react_dom_1 = require("react-dom");
var init = function (elementInput) {
    var mountNode = null;
    if (typeof elementInput !== "string") {
        mountNode = elementInput;
    }
    if (typeof elementInput === "string") {
        mountNode = document.getElementById(elementInput);
    }
    if (mountNode !== null) {
        (0, react_dom_1.render)((0, jsx_runtime_1.jsx)(_components_1.ReactWidget, {}), mountNode);
    }
};
exports.init = init;
