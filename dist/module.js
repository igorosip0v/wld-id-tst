import {jsxs as $6PEjo$jsxs, jsx as $6PEjo$jsx} from "react/jsx-runtime";
import {useState as $6PEjo$useState, useEffect as $6PEjo$useEffect} from "react";
import {render as $6PEjo$render} from "react-dom";

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $ee197dfdceb09b19$exports = {};
var $f8a9d2f20f06cb4e$exports = {};

$parcel$export($f8a9d2f20f06cb4e$exports, "SayHello", function () { return $f8a9d2f20f06cb4e$export$b999473040af7d92; });


function $f8a9d2f20f06cb4e$export$b999473040af7d92(props) {
    const [name, setName] = (0, $6PEjo$useState)(props.name);
    (0, $6PEjo$useEffect)(()=>{
        setName(props.name);
    }, [
        props
    ]);
    return /*#__PURE__*/ (0, $6PEjo$jsxs)("div", {
        children: [
            "Hey ",
            name,
            ", say hello to TypeScript."
        ]
    });
}


var $3dbd16f1671f3864$exports = {};

$parcel$export($3dbd16f1671f3864$exports, "ReactWidget", function () { return $3dbd16f1671f3864$export$329c003aa6b744f8; });

const $3dbd16f1671f3864$export$329c003aa6b744f8 = ()=>{
    return /*#__PURE__*/ (0, $6PEjo$jsx)("div", {
        children: "I am React Widget"
    });
};


$parcel$exportWildcard($ee197dfdceb09b19$exports, $f8a9d2f20f06cb4e$exports);
$parcel$exportWildcard($ee197dfdceb09b19$exports, $3dbd16f1671f3864$exports);


var $2680f0eb1c5c8a5b$exports = {};
var $8e640c20d4b5c1b4$exports = {};

$parcel$export($8e640c20d4b5c1b4$exports, "calc", function () { return $8e640c20d4b5c1b4$export$42bfa9b2d4dad91a; });
const $8e640c20d4b5c1b4$export$42bfa9b2d4dad91a = (a, b)=>a + b;


var $31b9c2b20e72f367$exports = {};

$parcel$export($31b9c2b20e72f367$exports, "init", function () { return $31b9c2b20e72f367$export$2cd8252107eb640b; });



const $31b9c2b20e72f367$export$2cd8252107eb640b = (elementInput)=>{
    let mountNode = null;
    if (typeof elementInput !== "string") mountNode = elementInput;
    if (typeof elementInput === "string") mountNode = document.getElementById(elementInput);
    if (mountNode !== null) (0, $6PEjo$render)(/*#__PURE__*/ (0, $6PEjo$jsx)((0, $3dbd16f1671f3864$export$329c003aa6b744f8), {}), mountNode);
};


$parcel$exportWildcard($2680f0eb1c5c8a5b$exports, $8e640c20d4b5c1b4$exports);
$parcel$exportWildcard($2680f0eb1c5c8a5b$exports, $31b9c2b20e72f367$exports);




export {$f8a9d2f20f06cb4e$export$b999473040af7d92 as SayHello, $3dbd16f1671f3864$export$329c003aa6b744f8 as ReactWidget, $8e640c20d4b5c1b4$export$42bfa9b2d4dad91a as calc, $31b9c2b20e72f367$export$2cd8252107eb640b as init};
//# sourceMappingURL=module.js.map
