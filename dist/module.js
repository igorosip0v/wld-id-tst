import {jsxs as $6PEjo$jsxs, jsx as $6PEjo$jsx} from "react/jsx-runtime";
import {useState as $6PEjo$useState, useEffect as $6PEjo$useEffect} from "react";
import {render as $6PEjo$render} from "react-dom";



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



const $3dbd16f1671f3864$export$329c003aa6b744f8 = ()=>{
    return /*#__PURE__*/ (0, $6PEjo$jsx)("div", {
        children: "I am React Widget"
    });
};




const $18c8fdf29a985438$export$42bfa9b2d4dad91a = (a, b)=>a + b;


const $a726fa4a3e600747$export$e0969da9b8fb378d = ()=>"test";







const $31b9c2b20e72f367$export$2cd8252107eb640b = (elementInput)=>{
    let mountNode = null;
    if (typeof elementInput !== "string") mountNode = elementInput;
    if (typeof elementInput === "string") mountNode = document.getElementById(elementInput);
    if (mountNode !== null) (0, $6PEjo$render)(/*#__PURE__*/ (0, $6PEjo$jsx)((0, $3dbd16f1671f3864$export$329c003aa6b744f8), {}), mountNode);
};




const $643fcf18b2d2e76f$var$utils = {
    calc: $18c8fdf29a985438$export$42bfa9b2d4dad91a,
    test: $a726fa4a3e600747$export$e0969da9b8fb378d
};
var $643fcf18b2d2e76f$export$2e2bcd8739ae039 = {
    init: $31b9c2b20e72f367$export$2cd8252107eb640b,
    ReactWidget: $3dbd16f1671f3864$export$329c003aa6b744f8,
    SayHello: $f8a9d2f20f06cb4e$export$b999473040af7d92,
    utils: $643fcf18b2d2e76f$var$utils
};


export {$643fcf18b2d2e76f$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
