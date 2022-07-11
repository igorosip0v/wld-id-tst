import sha3 from 'js-sha3';
import { arrayify, hexlify, concat } from '@ethersproject/bytes';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { kea, path, actions, reducers, useValues, useActions } from 'kea';
import { styled } from '@stitches/react';
import { render } from 'react-dom';

/**
 * Partial implementation of `keccak256` hash from @ethersproject/solidity; only supports hashing a single BytesLike value
 * @param value value to hash
 * @returns
 */
function keccak256(value) {
    var tight = [arrayify(value)];
    var data = hexlify(concat(tight));
    return "0x" + sha3.keccak_256(arrayify(data));
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

function __read(o, n) {
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

var widgetLogic = kea([
    path(["worldId", "widgetLogic"]),
    actions({
        setName: function (name) { return ({ name: name }); },
    }),
    reducers({
        name: [
            "Default Name",
            { setName: function (_, _a) {
                    var name = _a.name;
                    return name;
                } },
        ],
    }),
]);

function SayHello(props) {
    var name = useValues(widgetLogic).name;
    var setName = useActions(widgetLogic).setName;
    useEffect(function () {
        setName(props.name);
    }, [props]);
    return (jsxs("div", { children: [jsx("button", __assign({ onClick: function () { return setName(crypto.randomUUID()); } }, { children: name })), jsxs("div", { children: ["Hey ", name, ", say hello to TypeScript."] })] }));
}

var Container = styled("div", {
    backgroundColor: "Aquamarine",
    fontSize: "20px",
});
var ReactWidget = function () {
    var _a = __read(useState("Name"), 2), name = _a[0]; _a[1];
    return jsx(Container, { children: "I am ".concat(name) });
};

var App = function () {
    return (jsxs("div", { children: [jsx(ReactWidget, {}), jsx(SayHello, { name: "ME" })] }));
};

var init = function (elementInput) {
    var mountNode = null;
    if (typeof elementInput !== "string") {
        mountNode = elementInput;
    }
    if (typeof elementInput === "string") {
        mountNode = document.getElementById(elementInput);
    }
    if (mountNode !== null) {
        render(jsx(App, {}), mountNode);
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

export { ReactWidget, SayHello, index as default, utils };
//# sourceMappingURL=module.js.map
