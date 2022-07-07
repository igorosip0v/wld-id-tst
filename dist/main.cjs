var $b4te3$reactjsxruntime = require("react/jsx-runtime");
var $b4te3$react = require("react");
var $b4te3$reactdom = require("react-dom");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $a196c1ed25598f0e$export$2e2bcd8739ae039; });


function $cbb6a26f2ddcae9f$export$b999473040af7d92(props) {
    const [name, setName] = (0, $b4te3$react.useState)(props.name);
    (0, $b4te3$react.useEffect)(()=>{
        setName(props.name);
    }, [
        props
    ]);
    return /*#__PURE__*/ (0, $b4te3$reactjsxruntime.jsxs)("div", {
        children: [
            "Hey ",
            name,
            ", say hello to TypeScript."
        ]
    });
}



const $eb50fefaea28bf9f$export$329c003aa6b744f8 = ()=>{
    return /*#__PURE__*/ (0, $b4te3$reactjsxruntime.jsx)("div", {
        children: "I am React Widget"
    });
};




const $f5619f0a0f3d506a$export$42bfa9b2d4dad91a = (a, b)=>a + b;


const $0df06050474ce45f$export$e0969da9b8fb378d = ()=>"test";







const $f3424e8cc89f9945$export$2cd8252107eb640b = (elementInput)=>{
    let mountNode = null;
    if (typeof elementInput !== "string") mountNode = elementInput;
    if (typeof elementInput === "string") mountNode = document.getElementById(elementInput);
    if (mountNode !== null) (0, $b4te3$reactdom.render)(/*#__PURE__*/ (0, $b4te3$reactjsxruntime.jsx)((0, $eb50fefaea28bf9f$export$329c003aa6b744f8), {}), mountNode);
};




const $a196c1ed25598f0e$var$utils = {
    calc: $f5619f0a0f3d506a$export$42bfa9b2d4dad91a,
    test: $0df06050474ce45f$export$e0969da9b8fb378d
};
var $a196c1ed25598f0e$export$2e2bcd8739ae039 = {
    init: $f3424e8cc89f9945$export$2cd8252107eb640b,
    ReactWidget: $eb50fefaea28bf9f$export$329c003aa6b744f8,
    SayHello: $cbb6a26f2ddcae9f$export$b999473040af7d92,
    utils: $a196c1ed25598f0e$var$utils
};


//# sourceMappingURL=main.cjs.map
