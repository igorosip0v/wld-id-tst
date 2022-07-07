function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirece17"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirece17"] = parcelRequire;
}
parcelRequire.register("8CTSJ", function(module, exports) {

$parcel$export(module.exports, "Fragment", function () { return $647d384ca535a759$export$ffb0004e005737fa; }, function (v) { return $647d384ca535a759$export$ffb0004e005737fa = v; });
$parcel$export(module.exports, "jsx", function () { return $647d384ca535a759$export$34b9dba7ce09269b; }, function (v) { return $647d384ca535a759$export$34b9dba7ce09269b = v; });
$parcel$export(module.exports, "jsxs", function () { return $647d384ca535a759$export$25062201e9e25d76; }, function (v) { return $647d384ca535a759$export$25062201e9e25d76 = v; });
var $647d384ca535a759$export$ffb0004e005737fa;
var $647d384ca535a759$export$34b9dba7ce09269b;
var $647d384ca535a759$export$25062201e9e25d76;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";

var $6geiF = parcelRequire("6geiF");
var $647d384ca535a759$var$k = Symbol.for("react.element"), $647d384ca535a759$var$l = Symbol.for("react.fragment"), $647d384ca535a759$var$m = Object.prototype.hasOwnProperty, $647d384ca535a759$var$n = $6geiF.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $647d384ca535a759$var$p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $647d384ca535a759$var$q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)$647d384ca535a759$var$m.call(a, b) && !$647d384ca535a759$var$p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: $647d384ca535a759$var$k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: $647d384ca535a759$var$n.current
    };
}
$647d384ca535a759$export$ffb0004e005737fa = $647d384ca535a759$var$l;
$647d384ca535a759$export$34b9dba7ce09269b = $647d384ca535a759$var$q;
$647d384ca535a759$export$25062201e9e25d76 = $647d384ca535a759$var$q;

});
parcelRequire.register("6geiF", function(module, exports) {
"use strict";

module.exports = (parcelRequire("dNS6q"));

});
parcelRequire.register("dNS6q", function(module, exports) {

$parcel$export(module.exports, "Children", function () { return $a0c9d19b21d08234$export$dca3b0875bd9a954; }, function (v) { return $a0c9d19b21d08234$export$dca3b0875bd9a954 = v; });
$parcel$export(module.exports, "Component", function () { return $a0c9d19b21d08234$export$16fa2f45be04daa8; }, function (v) { return $a0c9d19b21d08234$export$16fa2f45be04daa8 = v; });
$parcel$export(module.exports, "Fragment", function () { return $a0c9d19b21d08234$export$ffb0004e005737fa; }, function (v) { return $a0c9d19b21d08234$export$ffb0004e005737fa = v; });
$parcel$export(module.exports, "Profiler", function () { return $a0c9d19b21d08234$export$e2c29f18771995cb; }, function (v) { return $a0c9d19b21d08234$export$e2c29f18771995cb = v; });
$parcel$export(module.exports, "PureComponent", function () { return $a0c9d19b21d08234$export$221d75b3f55bb0bd; }, function (v) { return $a0c9d19b21d08234$export$221d75b3f55bb0bd = v; });
$parcel$export(module.exports, "StrictMode", function () { return $a0c9d19b21d08234$export$5f8d39834fd61797; }, function (v) { return $a0c9d19b21d08234$export$5f8d39834fd61797 = v; });
$parcel$export(module.exports, "Suspense", function () { return $a0c9d19b21d08234$export$74bf444e3cd11ea5; }, function (v) { return $a0c9d19b21d08234$export$74bf444e3cd11ea5 = v; });
$parcel$export(module.exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function () { return $a0c9d19b21d08234$export$ae55be85d98224ed; }, function (v) { return $a0c9d19b21d08234$export$ae55be85d98224ed = v; });
$parcel$export(module.exports, "cloneElement", function () { return $a0c9d19b21d08234$export$e530037191fcd5d7; }, function (v) { return $a0c9d19b21d08234$export$e530037191fcd5d7 = v; });
$parcel$export(module.exports, "createContext", function () { return $a0c9d19b21d08234$export$fd42f52fd3ae1109; }, function (v) { return $a0c9d19b21d08234$export$fd42f52fd3ae1109 = v; });
$parcel$export(module.exports, "createElement", function () { return $a0c9d19b21d08234$export$c8a8987d4410bf2d; }, function (v) { return $a0c9d19b21d08234$export$c8a8987d4410bf2d = v; });
$parcel$export(module.exports, "createFactory", function () { return $a0c9d19b21d08234$export$d38cd72104c1f0e9; }, function (v) { return $a0c9d19b21d08234$export$d38cd72104c1f0e9 = v; });
$parcel$export(module.exports, "createRef", function () { return $a0c9d19b21d08234$export$7d1e3a5e95ceca43; }, function (v) { return $a0c9d19b21d08234$export$7d1e3a5e95ceca43 = v; });
$parcel$export(module.exports, "forwardRef", function () { return $a0c9d19b21d08234$export$257a8862b851cb5b; }, function (v) { return $a0c9d19b21d08234$export$257a8862b851cb5b = v; });
$parcel$export(module.exports, "isValidElement", function () { return $a0c9d19b21d08234$export$a8257692ac88316c; }, function (v) { return $a0c9d19b21d08234$export$a8257692ac88316c = v; });
$parcel$export(module.exports, "lazy", function () { return $a0c9d19b21d08234$export$488013bae63b21da; }, function (v) { return $a0c9d19b21d08234$export$488013bae63b21da = v; });
$parcel$export(module.exports, "memo", function () { return $a0c9d19b21d08234$export$7c73462e0d25e514; }, function (v) { return $a0c9d19b21d08234$export$7c73462e0d25e514 = v; });
$parcel$export(module.exports, "startTransition", function () { return $a0c9d19b21d08234$export$7568632d0d33d16d; }, function (v) { return $a0c9d19b21d08234$export$7568632d0d33d16d = v; });
$parcel$export(module.exports, "unstable_act", function () { return $a0c9d19b21d08234$export$88948ce120ea2619; }, function (v) { return $a0c9d19b21d08234$export$88948ce120ea2619 = v; });
$parcel$export(module.exports, "useCallback", function () { return $a0c9d19b21d08234$export$35808ee640e87ca7; }, function (v) { return $a0c9d19b21d08234$export$35808ee640e87ca7 = v; });
$parcel$export(module.exports, "useContext", function () { return $a0c9d19b21d08234$export$fae74005e78b1a27; }, function (v) { return $a0c9d19b21d08234$export$fae74005e78b1a27 = v; });
$parcel$export(module.exports, "useDebugValue", function () { return $a0c9d19b21d08234$export$dc8fbce3eb94dc1e; }, function (v) { return $a0c9d19b21d08234$export$dc8fbce3eb94dc1e = v; });
$parcel$export(module.exports, "useDeferredValue", function () { return $a0c9d19b21d08234$export$6a7bc4e911dc01cf; }, function (v) { return $a0c9d19b21d08234$export$6a7bc4e911dc01cf = v; });
$parcel$export(module.exports, "useEffect", function () { return $a0c9d19b21d08234$export$6d9c69b0de29b591; }, function (v) { return $a0c9d19b21d08234$export$6d9c69b0de29b591 = v; });
$parcel$export(module.exports, "useId", function () { return $a0c9d19b21d08234$export$f680877a34711e37; }, function (v) { return $a0c9d19b21d08234$export$f680877a34711e37 = v; });
$parcel$export(module.exports, "useImperativeHandle", function () { return $a0c9d19b21d08234$export$d5a552a76deda3c2; }, function (v) { return $a0c9d19b21d08234$export$d5a552a76deda3c2 = v; });
$parcel$export(module.exports, "useInsertionEffect", function () { return $a0c9d19b21d08234$export$aaabe4eda9ed9969; }, function (v) { return $a0c9d19b21d08234$export$aaabe4eda9ed9969 = v; });
$parcel$export(module.exports, "useLayoutEffect", function () { return $a0c9d19b21d08234$export$e5c5a5f917a5871c; }, function (v) { return $a0c9d19b21d08234$export$e5c5a5f917a5871c = v; });
$parcel$export(module.exports, "useMemo", function () { return $a0c9d19b21d08234$export$1538c33de8887b59; }, function (v) { return $a0c9d19b21d08234$export$1538c33de8887b59 = v; });
$parcel$export(module.exports, "useReducer", function () { return $a0c9d19b21d08234$export$13e3392192263954; }, function (v) { return $a0c9d19b21d08234$export$13e3392192263954 = v; });
$parcel$export(module.exports, "useRef", function () { return $a0c9d19b21d08234$export$b8f5890fc79d6aca; }, function (v) { return $a0c9d19b21d08234$export$b8f5890fc79d6aca = v; });
$parcel$export(module.exports, "useState", function () { return $a0c9d19b21d08234$export$60241385465d0a34; }, function (v) { return $a0c9d19b21d08234$export$60241385465d0a34 = v; });
$parcel$export(module.exports, "useSyncExternalStore", function () { return $a0c9d19b21d08234$export$306c0aa65ff9ec16; }, function (v) { return $a0c9d19b21d08234$export$306c0aa65ff9ec16 = v; });
$parcel$export(module.exports, "useTransition", function () { return $a0c9d19b21d08234$export$7b286972b8d8ccbf; }, function (v) { return $a0c9d19b21d08234$export$7b286972b8d8ccbf = v; });
$parcel$export(module.exports, "version", function () { return $a0c9d19b21d08234$export$83d89fbfd8236492; }, function (v) { return $a0c9d19b21d08234$export$83d89fbfd8236492 = v; });
var $a0c9d19b21d08234$export$dca3b0875bd9a954;
var $a0c9d19b21d08234$export$16fa2f45be04daa8;
var $a0c9d19b21d08234$export$ffb0004e005737fa;
var $a0c9d19b21d08234$export$e2c29f18771995cb;
var $a0c9d19b21d08234$export$221d75b3f55bb0bd;
var $a0c9d19b21d08234$export$5f8d39834fd61797;
var $a0c9d19b21d08234$export$74bf444e3cd11ea5;
var $a0c9d19b21d08234$export$ae55be85d98224ed;
var $a0c9d19b21d08234$export$e530037191fcd5d7;
var $a0c9d19b21d08234$export$fd42f52fd3ae1109;
var $a0c9d19b21d08234$export$c8a8987d4410bf2d;
var $a0c9d19b21d08234$export$d38cd72104c1f0e9;
var $a0c9d19b21d08234$export$7d1e3a5e95ceca43;
var $a0c9d19b21d08234$export$257a8862b851cb5b;
var $a0c9d19b21d08234$export$a8257692ac88316c;
var $a0c9d19b21d08234$export$488013bae63b21da;
var $a0c9d19b21d08234$export$7c73462e0d25e514;
var $a0c9d19b21d08234$export$7568632d0d33d16d;
var $a0c9d19b21d08234$export$88948ce120ea2619;
var $a0c9d19b21d08234$export$35808ee640e87ca7;
var $a0c9d19b21d08234$export$fae74005e78b1a27;
var $a0c9d19b21d08234$export$dc8fbce3eb94dc1e;
var $a0c9d19b21d08234$export$6a7bc4e911dc01cf;
var $a0c9d19b21d08234$export$6d9c69b0de29b591;
var $a0c9d19b21d08234$export$f680877a34711e37;
var $a0c9d19b21d08234$export$d5a552a76deda3c2;
var $a0c9d19b21d08234$export$aaabe4eda9ed9969;
var $a0c9d19b21d08234$export$e5c5a5f917a5871c;
var $a0c9d19b21d08234$export$1538c33de8887b59;
var $a0c9d19b21d08234$export$13e3392192263954;
var $a0c9d19b21d08234$export$b8f5890fc79d6aca;
var $a0c9d19b21d08234$export$60241385465d0a34;
var $a0c9d19b21d08234$export$306c0aa65ff9ec16;
var $a0c9d19b21d08234$export$7b286972b8d8ccbf;
var $a0c9d19b21d08234$export$83d89fbfd8236492;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
var $a0c9d19b21d08234$var$l = Symbol.for("react.element"), $a0c9d19b21d08234$var$n = Symbol.for("react.portal"), $a0c9d19b21d08234$var$p = Symbol.for("react.fragment"), $a0c9d19b21d08234$var$q = Symbol.for("react.strict_mode"), $a0c9d19b21d08234$var$r = Symbol.for("react.profiler"), $a0c9d19b21d08234$var$t = Symbol.for("react.provider"), $a0c9d19b21d08234$var$u = Symbol.for("react.context"), $a0c9d19b21d08234$var$v = Symbol.for("react.forward_ref"), $a0c9d19b21d08234$var$w = Symbol.for("react.suspense"), $a0c9d19b21d08234$var$x = Symbol.for("react.memo"), $a0c9d19b21d08234$var$y = Symbol.for("react.lazy"), $a0c9d19b21d08234$var$z = Symbol.iterator;
function $a0c9d19b21d08234$var$A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = $a0c9d19b21d08234$var$z && a[$a0c9d19b21d08234$var$z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var $a0c9d19b21d08234$var$B = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, $a0c9d19b21d08234$var$C = Object.assign, $a0c9d19b21d08234$var$D = {};
function $a0c9d19b21d08234$var$E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $a0c9d19b21d08234$var$D;
    this.updater = e || $a0c9d19b21d08234$var$B;
}
$a0c9d19b21d08234$var$E.prototype.isReactComponent = {};
$a0c9d19b21d08234$var$E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
};
$a0c9d19b21d08234$var$E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function $a0c9d19b21d08234$var$F() {}
$a0c9d19b21d08234$var$F.prototype = $a0c9d19b21d08234$var$E.prototype;
function $a0c9d19b21d08234$var$G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $a0c9d19b21d08234$var$D;
    this.updater = e || $a0c9d19b21d08234$var$B;
}
var $a0c9d19b21d08234$var$H = $a0c9d19b21d08234$var$G.prototype = new $a0c9d19b21d08234$var$F;
$a0c9d19b21d08234$var$H.constructor = $a0c9d19b21d08234$var$G;
$a0c9d19b21d08234$var$C($a0c9d19b21d08234$var$H, $a0c9d19b21d08234$var$E.prototype);
$a0c9d19b21d08234$var$H.isPureReactComponent = !0;
var $a0c9d19b21d08234$var$I = Array.isArray, $a0c9d19b21d08234$var$J = Object.prototype.hasOwnProperty, $a0c9d19b21d08234$var$K = {
    current: null
}, $a0c9d19b21d08234$var$L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $a0c9d19b21d08234$var$M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)$a0c9d19b21d08234$var$J.call(b, d) && !$a0c9d19b21d08234$var$L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
        for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
        c.children = f;
    }
    if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
    return {
        $$typeof: $a0c9d19b21d08234$var$l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: $a0c9d19b21d08234$var$K.current
    };
}
function $a0c9d19b21d08234$var$N(a, b) {
    return {
        $$typeof: $a0c9d19b21d08234$var$l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function $a0c9d19b21d08234$var$O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === $a0c9d19b21d08234$var$l;
}
function $a0c9d19b21d08234$var$escape(a1) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a1.replace(/[=:]/g, function(a) {
        return b[a];
    });
}
var $a0c9d19b21d08234$var$P = /\/+/g;
function $a0c9d19b21d08234$var$Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? $a0c9d19b21d08234$var$escape("" + a.key) : b.toString(36);
}
function $a0c9d19b21d08234$var$R(a2, b, e, d, c) {
    var k = typeof a2;
    if ("undefined" === k || "boolean" === k) a2 = null;
    var h = !1;
    if (null === a2) h = !0;
    else switch(k){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a2.$$typeof){
                case $a0c9d19b21d08234$var$l:
                case $a0c9d19b21d08234$var$n:
                    h = !0;
            }
    }
    if (h) return h = a2, c = c(h), a2 = "" === d ? "." + $a0c9d19b21d08234$var$Q(h, 0) : d, $a0c9d19b21d08234$var$I(c) ? (e = "", null != a2 && (e = a2.replace($a0c9d19b21d08234$var$P, "$&/") + "/"), $a0c9d19b21d08234$var$R(c, b, e, "", function(a) {
        return a;
    })) : null != c && ($a0c9d19b21d08234$var$O(c) && (c = $a0c9d19b21d08234$var$N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace($a0c9d19b21d08234$var$P, "$&/") + "/") + a2)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if ($a0c9d19b21d08234$var$I(a2)) for(var g = 0; g < a2.length; g++){
        k = a2[g];
        var f = d + $a0c9d19b21d08234$var$Q(k, g);
        h += $a0c9d19b21d08234$var$R(k, b, e, f, c);
    }
    else if (f = $a0c9d19b21d08234$var$A(a2), "function" === typeof f) for(a2 = f.call(a2), g = 0; !(k = a2.next()).done;)k = k.value, f = d + $a0c9d19b21d08234$var$Q(k, g++), h += $a0c9d19b21d08234$var$R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
}
function $a0c9d19b21d08234$var$S(a3, b, e) {
    if (null == a3) return a3;
    var d = [], c = 0;
    $a0c9d19b21d08234$var$R(a3, d, "", "", function(a) {
        return b.call(e, a, c++);
    });
    return d;
}
function $a0c9d19b21d08234$var$T(a) {
    if (-1 === a._status) {
        var b1 = a._result;
        b1 = b1();
        b1.then(function(b) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
        }, function(b) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
        });
        -1 === a._status && (a._status = 0, a._result = b1);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
var $a0c9d19b21d08234$var$U = {
    current: null
}, $a0c9d19b21d08234$var$V = {
    transition: null
}, $a0c9d19b21d08234$var$W = {
    ReactCurrentDispatcher: $a0c9d19b21d08234$var$U,
    ReactCurrentBatchConfig: $a0c9d19b21d08234$var$V,
    ReactCurrentOwner: $a0c9d19b21d08234$var$K
};
$a0c9d19b21d08234$export$dca3b0875bd9a954 = {
    map: $a0c9d19b21d08234$var$S,
    forEach: function(a, b, e) {
        $a0c9d19b21d08234$var$S(a, function() {
            b.apply(this, arguments);
        }, e);
    },
    count: function(a) {
        var b = 0;
        $a0c9d19b21d08234$var$S(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a4) {
        return $a0c9d19b21d08234$var$S(a4, function(a) {
            return a;
        }) || [];
    },
    only: function(a) {
        if (!$a0c9d19b21d08234$var$O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
    }
};
$a0c9d19b21d08234$export$16fa2f45be04daa8 = $a0c9d19b21d08234$var$E;
$a0c9d19b21d08234$export$ffb0004e005737fa = $a0c9d19b21d08234$var$p;
$a0c9d19b21d08234$export$e2c29f18771995cb = $a0c9d19b21d08234$var$r;
$a0c9d19b21d08234$export$221d75b3f55bb0bd = $a0c9d19b21d08234$var$G;
$a0c9d19b21d08234$export$5f8d39834fd61797 = $a0c9d19b21d08234$var$q;
$a0c9d19b21d08234$export$74bf444e3cd11ea5 = $a0c9d19b21d08234$var$w;
$a0c9d19b21d08234$export$ae55be85d98224ed = $a0c9d19b21d08234$var$W;
$a0c9d19b21d08234$export$e530037191fcd5d7 = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = $a0c9d19b21d08234$var$C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = $a0c9d19b21d08234$var$K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(f in b)$a0c9d19b21d08234$var$J.call(b, f) && !$a0c9d19b21d08234$var$L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
        g = Array(f);
        for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
        d.children = g;
    }
    return {
        $$typeof: $a0c9d19b21d08234$var$l,
        type: a.type,
        key: c,
        ref: k,
        props: d,
        _owner: h
    };
};
$a0c9d19b21d08234$export$fd42f52fd3ae1109 = function(a) {
    a = {
        $$typeof: $a0c9d19b21d08234$var$u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    };
    a.Provider = {
        $$typeof: $a0c9d19b21d08234$var$t,
        _context: a
    };
    return a.Consumer = a;
};
$a0c9d19b21d08234$export$c8a8987d4410bf2d = $a0c9d19b21d08234$var$M;
$a0c9d19b21d08234$export$d38cd72104c1f0e9 = function(a) {
    var b = $a0c9d19b21d08234$var$M.bind(null, a);
    b.type = a;
    return b;
};
$a0c9d19b21d08234$export$7d1e3a5e95ceca43 = function() {
    return {
        current: null
    };
};
$a0c9d19b21d08234$export$257a8862b851cb5b = function(a) {
    return {
        $$typeof: $a0c9d19b21d08234$var$v,
        render: a
    };
};
$a0c9d19b21d08234$export$a8257692ac88316c = $a0c9d19b21d08234$var$O;
$a0c9d19b21d08234$export$488013bae63b21da = function(a) {
    return {
        $$typeof: $a0c9d19b21d08234$var$y,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: $a0c9d19b21d08234$var$T
    };
};
$a0c9d19b21d08234$export$7c73462e0d25e514 = function(a, b) {
    return {
        $$typeof: $a0c9d19b21d08234$var$x,
        type: a,
        compare: void 0 === b ? null : b
    };
};
$a0c9d19b21d08234$export$7568632d0d33d16d = function(a) {
    var b = $a0c9d19b21d08234$var$V.transition;
    $a0c9d19b21d08234$var$V.transition = {};
    try {
        a();
    } finally{
        $a0c9d19b21d08234$var$V.transition = b;
    }
};
$a0c9d19b21d08234$export$88948ce120ea2619 = function() {
    throw Error("act(...) is not supported in production builds of React.");
};
$a0c9d19b21d08234$export$35808ee640e87ca7 = function(a, b) {
    return $a0c9d19b21d08234$var$U.current.useCallback(a, b);
};
$a0c9d19b21d08234$export$fae74005e78b1a27 = function(a) {
    return $a0c9d19b21d08234$var$U.current.useContext(a);
};
$a0c9d19b21d08234$export$dc8fbce3eb94dc1e = function() {};
$a0c9d19b21d08234$export$6a7bc4e911dc01cf = function(a) {
    return $a0c9d19b21d08234$var$U.current.useDeferredValue(a);
};
$a0c9d19b21d08234$export$6d9c69b0de29b591 = function(a, b) {
    return $a0c9d19b21d08234$var$U.current.useEffect(a, b);
};
$a0c9d19b21d08234$export$f680877a34711e37 = function() {
    return $a0c9d19b21d08234$var$U.current.useId();
};
$a0c9d19b21d08234$export$d5a552a76deda3c2 = function(a, b, e) {
    return $a0c9d19b21d08234$var$U.current.useImperativeHandle(a, b, e);
};
$a0c9d19b21d08234$export$aaabe4eda9ed9969 = function(a, b) {
    return $a0c9d19b21d08234$var$U.current.useInsertionEffect(a, b);
};
$a0c9d19b21d08234$export$e5c5a5f917a5871c = function(a, b) {
    return $a0c9d19b21d08234$var$U.current.useLayoutEffect(a, b);
};
$a0c9d19b21d08234$export$1538c33de8887b59 = function(a, b) {
    return $a0c9d19b21d08234$var$U.current.useMemo(a, b);
};
$a0c9d19b21d08234$export$13e3392192263954 = function(a, b, e) {
    return $a0c9d19b21d08234$var$U.current.useReducer(a, b, e);
};
$a0c9d19b21d08234$export$b8f5890fc79d6aca = function(a) {
    return $a0c9d19b21d08234$var$U.current.useRef(a);
};
$a0c9d19b21d08234$export$60241385465d0a34 = function(a) {
    return $a0c9d19b21d08234$var$U.current.useState(a);
};
$a0c9d19b21d08234$export$306c0aa65ff9ec16 = function(a, b, e) {
    return $a0c9d19b21d08234$var$U.current.useSyncExternalStore(a, b, e);
};
$a0c9d19b21d08234$export$7b286972b8d8ccbf = function() {
    return $a0c9d19b21d08234$var$U.current.useTransition();
};
$a0c9d19b21d08234$export$83d89fbfd8236492 = "18.2.0";

});



var $cca0bea821819e29$exports = {};

$parcel$export($cca0bea821819e29$exports, "SayHello", function () { return $cca0bea821819e29$export$b999473040af7d92; });
var $6c92bf26e39c449b$exports = {};
"use strict";

$6c92bf26e39c449b$exports = (parcelRequire("8CTSJ"));



var $6geiF = parcelRequire("6geiF");
function $cca0bea821819e29$export$b999473040af7d92(props) {
    const [name, setName] = (0, $6geiF.useState)(props.name);
    (0, $6geiF.useEffect)(()=>{
        setName(props.name);
    }, [
        props
    ]);
    return /*#__PURE__*/ (0, $6c92bf26e39c449b$exports.jsxs)("div", {
        children: [
            "Hey ",
            name,
            ", say hello to TypeScript."
        ]
    });
}


var $9225e69c01942862$exports = {};

$parcel$export($9225e69c01942862$exports, "ReactWidget", function () { return $9225e69c01942862$export$329c003aa6b744f8; });

const $9225e69c01942862$export$329c003aa6b744f8 = ()=>{
    return /*#__PURE__*/ (0, $6c92bf26e39c449b$exports.jsx)("div", {
        children: "I am React Widget"
    });
};




export {$cca0bea821819e29$export$b999473040af7d92 as SayHello, $9225e69c01942862$export$329c003aa6b744f8 as ReactWidget};
//# sourceMappingURL=index.js.map
