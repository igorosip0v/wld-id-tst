(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react/jsx-runtime'), require('react-dom'), require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react/jsx-runtime', 'react-dom', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.worldID = {}, global.jsxRuntime, global.reactDom));
})(this, (function (exports, jsxRuntime, reactDom) { 'use strict';

    var ReactWidget = function () {
        return jsxRuntime.jsx("div", { children: "I am React Widget" });
    };

    var init = function (elementInput) {
        var mountNode = null;
        if (typeof elementInput !== "string") {
            mountNode = elementInput;
        }
        if (typeof elementInput === "string") {
            mountNode = document.getElementById(elementInput);
        }
        if (mountNode !== null) {
            reactDom.render(jsxRuntime.jsx(ReactWidget, {}), mountNode);
        }
    };

    exports.init = init;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
