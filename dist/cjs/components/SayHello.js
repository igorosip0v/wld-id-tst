"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SayHello = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function SayHello(name) {
    return (0, jsx_runtime_1.jsxs)("div", { children: ["`Hey $", name, ", say hello to TypeScript.`"] });
}
exports.SayHello = SayHello;
