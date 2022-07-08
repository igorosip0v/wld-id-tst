import sha3 from 'js-sha3';
import { arrayify, hexlify, concat } from '@ethersproject/bytes';
import { jsxs, jsx } from 'react/jsx-runtime';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';

/**
 * Partial implementation of `keccak256` hash from @ethersproject/solidity; only supports hashing a single BytesLike value
 * @param value value to hash
 * @returns
 */
function keccak256(value) {
    const tight = [arrayify(value)];
    const data = hexlify(concat(tight));
    return "0x" + sha3.keccak_256(arrayify(data));
}

/**
 * Hashes an input using the `keccak256` hashing function used across the World ID protocol, to be used as
 * a ZKP input.
 * @param input - Input to hash (if it's a string, it'll be converted to bytes first)
 * @returns hash
 */
function hashBytes(input) {
    const bytesInput = Buffer.isBuffer(input) ? input : Buffer.from(input);
    const hash = BigInt(keccak256(bytesInput)) >> BigInt(8);
    const rawDigest = hash.toString(16);
    return { hash, digest: `0x${rawDigest.padStart(64, "0")}` };
}

/**
 * Generates a random integer between a specified range
 * @param min Minimum number in range (inclusive)
 * @param max Maximum number in range (inclusive)
 * @returns Number between range
 */
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const buildVerificationRequest = (props) => {
    if (!props.signal) {
        throw new Error("Unexpectedly trying to build verification request without a `signal`.");
    }
    const params = {
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
const validateABILikeEncoding = (value) => {
    const ABI_REGEX = /^0x[\dabcdef]+$/;
    return !!value.toString().match(ABI_REGEX) && value.length >= 66; // Because `0` contains 66 characters
};

/**
 * Validates the input parameters passed to the package when initializing.
 * @param params `AppProps`
 * @returns `true` if parameters are valid; error is raised otherwise.
 */
const validateInputParams = (params) => {
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
            error: `You enabled 'advanced_use_raw_action_id' which uses the action ID raw (without any additional hashing or encoding),
        but the action ID you provided does not look to be validly hashed or encoded. Please check
        https://id.worldcoin.org/docs/js/reference#parameters for details.`,
        };
    }
    if (params.advanced_use_raw_signal &&
        params.signal &&
        !validateABILikeEncoding(params.signal)) {
        return {
            valid: false,
            error: `You enabled 'advanced_use_raw_signal' which uses the signal raw (without any additional hashing or encoding),
        but the signal you provided does not look to be validly hashed or encoded. Please check
        https://id.worldcoin.org/docs/js/reference#parameters for details.`,
        };
    }
    return { valid: true };
};

/**
 * Verifies that the response from the WLD app is valid
 * @param result expects a valid `VerificationResponse`
 */
const verifyVerificationResponse = (result) => {
    const merkle_root = "merkle_root" in result ? result.merkle_root : undefined;
    const nullifier_hash = "nullifier_hash" in result ? result.nullifier_hash : undefined;
    const proof = "proof" in result ? result.proof : undefined;
    for (const attr of [merkle_root, nullifier_hash, proof]) {
        if (!attr || !validateABILikeEncoding(attr)) {
            return false;
        }
    }
    return true;
};

function SayHello(props) {
    const [name, setName] = useState(props.name);
    useEffect(() => {
        setName(props.name);
    }, [props]);
    return jsxs("div", { children: ["Hey ", name, ", say hello to TypeScript."] });
}

const ReactWidget = () => {
    return jsx("div", { children: "I am React Widget" });
};

const init = (elementInput) => {
    let mountNode = null;
    if (typeof elementInput !== "string") {
        mountNode = elementInput;
    }
    if (typeof elementInput === "string") {
        mountNode = document.getElementById(elementInput);
    }
    if (mountNode !== null) {
        render(jsx(ReactWidget, {}), mountNode);
    }
};

const utils = {
    buildVerificationRequest,
    hashBytes,
    keccak256,
    randomNumber,
    validateABILikeEncoding,
    validateInputParams,
    verifyVerificationResponse,
};
var index = { init };

export { ReactWidget, SayHello, index as default, utils };
//# sourceMappingURL=module.js.map
