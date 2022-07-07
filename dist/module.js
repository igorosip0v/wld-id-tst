import {jsx as $6cSDl$jsx, jsxs as $6cSDl$jsxs} from "react/jsx-runtime";
import {render as $6cSDl$render} from "react-dom";
import {useState as $6cSDl$useState, useEffect as $6cSDl$useEffect} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $31b9c2b20e72f367$exports = {};

$parcel$export($31b9c2b20e72f367$exports, "init", function () { return $31b9c2b20e72f367$export$2cd8252107eb640b; });




function $f8a9d2f20f06cb4e$export$b999473040af7d92(props) {
    const [name, setName] = (0, $6cSDl$useState)(props.name);
    (0, $6cSDl$useEffect)(()=>{
        setName(props.name);
    }, [
        props
    ]);
    return /*#__PURE__*/ (0, $6cSDl$jsxs)("div", {
        children: [
            "Hey ",
            name,
            ", say hello to TypeScript."
        ]
    });
}



const $3dbd16f1671f3864$export$329c003aa6b744f8 = ()=>{
    return /*#__PURE__*/ (0, $6cSDl$jsx)("div", {
        children: "I am React Widget"
    });
};




const $31b9c2b20e72f367$export$2cd8252107eb640b = (elementInput)=>{
    let mountNode = null;
    if (typeof elementInput !== "string") mountNode = elementInput;
    if (typeof elementInput === "string") mountNode = document.getElementById(elementInput);
    if (mountNode !== null) (0, $6cSDl$render)(/*#__PURE__*/ (0, $6cSDl$jsx)((0, $3dbd16f1671f3864$export$329c003aa6b744f8), {}), mountNode);
};




export {$31b9c2b20e72f367$export$2cd8252107eb640b as init};
//# sourceMappingURL=module.js.map
