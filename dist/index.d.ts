/// <reference types="node" />
/// <reference types="react" />
interface AppProps {
    action_id: string;
    signal?: string;
    theme?: "light" | "dark";
    enable_telemetry?: boolean;
    app_name?: string;
    signal_description?: string;
    disable_remote_fonts?: boolean;
    advanced_use_raw_signal?: boolean;
    advanced_use_raw_action_id?: boolean;
}
interface VerificationRequestParams {
    action_id: string;
    signal: string;
    app_name?: string;
    signal_description?: string;
}
interface VerificationRequest {
    id: number;
    jsonrpc: "2.0";
    method: "wld_worldIDVerification";
    params: VerificationRequestParams[];
}

/**
 * Hashes an input using the `keccak256` hashing function used across the World ID protocol, to be used as
 * a ZKP input.
 * @param input - Input to hash (if it's a string, it'll be converted to bytes first)
 * @returns hash
 */
declare function hashBytes(input: string | Buffer): {
    hash: BigInt;
    digest: string;
};

/**
 * Partial implementation of `keccak256` hash from @ethersproject/solidity; only supports hashing a single BytesLike value
 * @param value value to hash
 * @returns
 */
declare function keccak256(value: Buffer): string;

declare function SayHello(props: {
    name: string;
}): JSX.Element;

declare const ReactWidget: () => JSX.Element;

declare const utils: {
    buildVerificationRequest: (props: AppProps) => VerificationRequest;
    hashBytes: typeof hashBytes;
    keccak256: typeof keccak256;
    randomNumber: (min: number, max: number) => number;
    validateABILikeEncoding: (value: string) => boolean;
    validateInputParams: (params: AppProps) => {
        valid: boolean;
        error?: string | undefined;
    };
    verifyVerificationResponse: (result: Record<string, string | undefined>) => boolean;
};
declare const _default: {
    init: (elementInput: string | HTMLElement) => void;
};

export { ReactWidget, SayHello, _default as default, utils };
