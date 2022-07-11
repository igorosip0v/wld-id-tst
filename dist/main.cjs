'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sha3 = require('js-sha3');
var bytes = require('@ethersproject/bytes');
var jsxRuntime = require('react/jsx-runtime');
var react = require('@stitches/react');
var kea = require('kea');
var reactDom = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var sha3__default = /*#__PURE__*/_interopDefaultLegacy(sha3);

/**
 * Partial implementation of `keccak256` hash from @ethersproject/solidity; only supports hashing a single BytesLike value
 * @param value value to hash
 * @returns
 */
function keccak256(value) {
    var tight = [bytes.arrayify(value)];
    var data = bytes.hexlify(bytes.concat(tight));
    return "0x" + sha3__default["default"].keccak_256(bytes.arrayify(data));
}

/**
 * Hashes an input using the `keccak256` hashing function used across the World ID protocol, to be used as
 * a ZKP input.
 * @param input - Input to hash (if it's a string, it'll be converted to bytes first)
 * @returns hash
 */
function hashBytes(input) {
    var bytesInput = Buffer.isBuffer(input) ? input : Buffer.from(input);
    var hash = BigInt(keccak256(bytesInput)) >> BigInt(8);
    var rawDigest = hash.toString(16);
    return { hash: hash, digest: "0x".concat(rawDigest.padStart(64, "0")) };
}

/**
 * Generates a random integer between a specified range
 * @param min Minimum number in range (inclusive)
 * @param max Maximum number in range (inclusive)
 * @returns Number between range
 */
var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

var buildVerificationRequest = function (props) {
    if (!props.signal) {
        throw new Error("Unexpectedly trying to build verification request without a `signal`.");
    }
    var params = {
        signal: props.advanced_use_raw_signal
            ? props.signal
            : hashBytes(props.signal).digest,
        action_id: props.advanced_use_raw_action_id
            ? props.action_id
            : hashBytes(props.action_id).digest,
    };
    if (props.app_name) {
        params.app_name = props.app_name;
    }
    if (props.signal_description) {
        params.signal_description = props.signal_description;
    }
    return {
        id: randomNumber(100000, 9999999),
        jsonrpc: "2.0",
        method: "wld_worldIDVerification",
        params: [params],
    };
};

/**
 * Validates that an string looks like an ABI-encoded string. Very basic format-like check.
 * The WLD app validates the actual values.
 * @param value string to validate
 * @returns `true` if the value looks like an ABI-encoded string; `false` otherwise
 */
var validateABILikeEncoding = function (value) {
    var ABI_REGEX = /^0x[\dabcdef]+$/;
    return !!value.toString().match(ABI_REGEX) && value.length >= 66; // Because `0` contains 66 characters
};

/**
 * Validates the input parameters passed to the package when initializing.
 * @param params `AppProps`
 * @returns `true` if parameters are valid; error is raised otherwise.
 */
var validateInputParams = function (params) {
    if (!params.action_id) {
        return {
            valid: false,
            error: "The `action_id` parameter is always required.",
        };
    }
    if (params.advanced_use_raw_action_id &&
        !validateABILikeEncoding(params.action_id)) {
        return {
            valid: false,
            error: "You enabled 'advanced_use_raw_action_id' which uses the action ID raw (without any additional hashing or encoding),\n        but the action ID you provided does not look to be validly hashed or encoded. Please check\n        https://id.worldcoin.org/docs/js/reference#parameters for details.",
        };
    }
    if (params.advanced_use_raw_signal &&
        params.signal &&
        !validateABILikeEncoding(params.signal)) {
        return {
            valid: false,
            error: "You enabled 'advanced_use_raw_signal' which uses the signal raw (without any additional hashing or encoding),\n        but the signal you provided does not look to be validly hashed or encoded. Please check\n        https://id.worldcoin.org/docs/js/reference#parameters for details.",
        };
    }
    return { valid: true };
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

/**
 * Verifies that the response from the WLD app is valid
 * @param result expects a valid `VerificationResponse`
 */
var verifyVerificationResponse = function (result) {
    var e_1, _a;
    var merkle_root = "merkle_root" in result ? result.merkle_root : undefined;
    var nullifier_hash = "nullifier_hash" in result ? result.nullifier_hash : undefined;
    var proof = "proof" in result ? result.proof : undefined;
    try {
        for (var _b = __values([merkle_root, nullifier_hash, proof]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var attr = _c.value;
            if (!attr || !validateABILikeEncoding(attr)) {
                return false;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return true;
};

var widgetLogic = kea.kea([
    kea.path(["worldId", "widgetLogic"]),
    kea.actions({
        setModalVisibility: function (visible) { return visible; },
    }),
    kea.reducers({
        modalVisibility: [
            false,
            {
                setModalVisibility: function (_, visible) {
                    return visible;
                },
            },
        ],
    }),
]);

// import logo from "assets/worldcoin-logo.svg";
// console.log(logo);
var ModalOverlay = react.styled("div", {
    width: "100%",
    height: "100vh",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#FFFFFF",
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
    transition: "opacity, visibility ease-out 1s",
    opacity: "0",
    pointerEvents: "none",
    visibility: "hidden",
    variants: {
        visible: {
            true: { opacity: "1", pointerEvents: "all", visibility: "visible" },
            false: { opacity: "0", pointerEvents: "none", visibility: "hidden" },
        },
    },
});
var ModalBox = react.styled("div", {
    display: "grid",
    rowGap: "6px",
});
var MainModalBox = react.styled("div", {
    background: "#FFFFFF",
    borderRadius: "12px",
    boxShadow: "0px 8px 64px rgba(0, 0, 0, 0.08);",
    padding: "32px",
    color: "#191C20",
});
var InfoModalBox = MainModalBox;
var Modal = function (props) {
    var setModalVisibility = kea.useActions(widgetLogic).setModalVisibility;
    return (jsxRuntime.jsx(ModalOverlay, __assign({ visible: props.visible, onClick: function (e) {
            return e.currentTarget === e.target ? setModalVisibility(false) : undefined;
        } }, { children: jsxRuntime.jsxs(ModalBox, { children: [jsxRuntime.jsx(MainModalBox, { children: "test" }), jsxRuntime.jsx(InfoModalBox, { children: "test2" })] }) })));
};

var WidgetBox = react.styled("div", {
    border: "1px solid black",
    padding: "8px 16px",
});
var Widget = function (props) {
    console.log(props);
    var setModalVisibility = kea.useActions(widgetLogic).setModalVisibility;
    var modalVisibility = kea.useValues(widgetLogic).modalVisibility;
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(WidgetBox, __assign({ onClick: function () { return setModalVisibility(true); } }, { children: "I\u2019m a unique person" })), jsxRuntime.jsx(Modal, { visible: modalVisibility })] }));
};

var AppBox = react.styled("div", {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});
var App = function (props) {
    return (jsxRuntime.jsx(AppBox, { children: jsxRuntime.jsx(Widget, __assign({}, props)) }));
};

var init = function (elementInput, options) {
    var mountNode = null;
    if (typeof elementInput !== "string") {
        mountNode = elementInput;
    }
    if (typeof elementInput === "string") {
        mountNode = document.getElementById(elementInput);
    }
    if (mountNode !== null) {
        reactDom.render(jsxRuntime.jsx(App, { action_id: options.action_id }), mountNode);
    }
};

var utils = {
    buildVerificationRequest: buildVerificationRequest,
    hashBytes: hashBytes,
    keccak256: keccak256,
    randomNumber: randomNumber,
    validateABILikeEncoding: validateABILikeEncoding,
    validateInputParams: validateInputParams,
    verifyVerificationResponse: verifyVerificationResponse,
};
var index = { init: init };

exports.Widget = Widget;
exports["default"] = index;
exports.utils = utils;
//# sourceMappingURL=main.cjs.map
