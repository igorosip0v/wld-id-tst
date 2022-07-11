import { hashBytes, keccak256 } from "./utils";
export * from "./react-widget";
export declare const utils: {
    buildVerificationRequest: (props: import("./types").AppProps) => import("./types").VerificationRequest;
    hashBytes: typeof hashBytes;
    keccak256: typeof keccak256;
    randomNumber: (min: number, max: number) => number;
    validateABILikeEncoding: (value: string) => boolean;
    validateInputParams: (params: import("./types").AppProps) => {
        valid: boolean;
        error?: string | undefined;
    };
    verifyVerificationResponse: (result: Record<string, string | undefined>) => boolean;
};
declare const _default: {
    init: (elementInput: string | HTMLElement, options: import("./types").AppProps) => void;
};
export default _default;
