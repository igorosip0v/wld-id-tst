var $b4te3$reactjsxruntime = require("react/jsx-runtime");
var $b4te3$react = require("react");
var $b4te3$reactdom = require("react-dom");

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
var $be8240ea0d7c4a94$exports = {};
var $cbb6a26f2ddcae9f$exports = {};

$parcel$export($cbb6a26f2ddcae9f$exports, "SayHello", function () { return $cbb6a26f2ddcae9f$export$b999473040af7d92; });


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


var $eb50fefaea28bf9f$exports = {};

$parcel$export($eb50fefaea28bf9f$exports, "ReactWidget", function () { return $eb50fefaea28bf9f$export$329c003aa6b744f8; });

const $eb50fefaea28bf9f$export$329c003aa6b744f8 = ()=>{
    return /*#__PURE__*/ (0, $b4te3$reactjsxruntime.jsx)("div", {
        children: "I am React Widget"
    });
};


$parcel$exportWildcard($be8240ea0d7c4a94$exports, $cbb6a26f2ddcae9f$exports);
$parcel$exportWildcard($be8240ea0d7c4a94$exports, $eb50fefaea28bf9f$exports);


var $0b3e125eada488ae$exports = {};
var $f5619f0a0f3d506a$exports = {};

$parcel$export($f5619f0a0f3d506a$exports, "calc", function () { return $f5619f0a0f3d506a$export$42bfa9b2d4dad91a; });
const $f5619f0a0f3d506a$export$42bfa9b2d4dad91a = (a, b)=>a + b;


var $0df06050474ce45f$exports = {};

$parcel$export($0df06050474ce45f$exports, "test", function () { return $0df06050474ce45f$export$e0969da9b8fb378d; });
const $0df06050474ce45f$export$e0969da9b8fb378d = ()=>"test";


$parcel$exportWildcard($0b3e125eada488ae$exports, $f5619f0a0f3d506a$exports);
$parcel$exportWildcard($0b3e125eada488ae$exports, $0df06050474ce45f$exports);


var $16627e03c7b02029$exports = {};
var $f3424e8cc89f9945$exports = {};

$parcel$export($f3424e8cc89f9945$exports, "init", function () { return $f3424e8cc89f9945$export$2cd8252107eb640b; });



const $f3424e8cc89f9945$export$2cd8252107eb640b = (elementInput)=>{
    let mountNode = null;
    if (typeof elementInput !== "string") mountNode = elementInput;
    if (typeof elementInput === "string") mountNode = document.getElementById(elementInput);
    if (mountNode !== null) (0, $b4te3$reactdom.render)(/*#__PURE__*/ (0, $b4te3$reactjsxruntime.jsx)((0, $eb50fefaea28bf9f$export$329c003aa6b744f8), {}), mountNode);
};


$parcel$exportWildcard($16627e03c7b02029$exports, $f3424e8cc89f9945$exports);


$parcel$exportWildcard(module.exports, $be8240ea0d7c4a94$exports);
$parcel$exportWildcard(module.exports, $16627e03c7b02029$exports);
$parcel$exportWildcard(module.exports, $0b3e125eada488ae$exports);


//# sourceMappingURL=main.cjs.map
