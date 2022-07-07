var $kdA3F$reactjsxruntime = require("react/jsx-runtime");
var $kdA3F$reactdom = require("react-dom");
var $kdA3F$react = require("react");

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
var $f3424e8cc89f9945$exports = {};

$parcel$export($f3424e8cc89f9945$exports, "init", function () { return $f3424e8cc89f9945$export$2cd8252107eb640b; });




function $cbb6a26f2ddcae9f$export$b999473040af7d92(props) {
    const [name, setName] = (0, $kdA3F$react.useState)(props.name);
    (0, $kdA3F$react.useEffect)(()=>{
        setName(props.name);
    }, [
        props
    ]);
    return /*#__PURE__*/ (0, $kdA3F$reactjsxruntime.jsxs)("div", {
        children: [
            "Hey ",
            name,
            ", say hello to TypeScript."
        ]
    });
}



const $eb50fefaea28bf9f$export$329c003aa6b744f8 = ()=>{
    return /*#__PURE__*/ (0, $kdA3F$reactjsxruntime.jsx)("div", {
        children: "I am React Widget"
    });
};




const $f3424e8cc89f9945$export$2cd8252107eb640b = (elementInput)=>{
    let mountNode = null;
    if (typeof elementInput !== "string") mountNode = elementInput;
    if (typeof elementInput === "string") mountNode = document.getElementById(elementInput);
    if (mountNode !== null) (0, $kdA3F$reactdom.render)(/*#__PURE__*/ (0, $kdA3F$reactjsxruntime.jsx)((0, $eb50fefaea28bf9f$export$329c003aa6b744f8), {}), mountNode);
};


$parcel$exportWildcard(module.exports, $f3424e8cc89f9945$exports);


//# sourceMappingURL=main.cjs.map
