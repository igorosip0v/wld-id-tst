var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export function SayHello(props) {
    var _a = __read(useState(props.name), 2), name = _a[0], _setName = _a[1];
    return _jsxs("div", { children: ["Hey ", name, ", say hello to TypeScript."] });
}
