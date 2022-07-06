/// <reference types="node" />
import { AppProps, VerificationRequest } from './types';
/**
 * Generates a random integer between a specified range
 * @param min Minimum number in range (inclusive)
 * @param max Maximum number in range (inclusive)
 * @returns Number between range
 */
export declare const randomNumber: (min: number, max: number) => number;
export declare const buildVerificationRequest: (props: AppProps) => VerificationRequest;
/**
 * Verifies that the response from the WLD app is valid
 * @param result expects a valid `VerificationResponse`
 */
export declare const verifyVerificationResponse: (result: Record<string, string | undefined>) => boolean;
/**
 * Validates that an string looks like an ABI-encoded string. Very basic format-like check.
 * The WLD app validates the actual values.
 * @param value string to validate
 * @returns `true` if the value looks like an ABI-encoded string; `false` otherwise
 */
export declare const validateABILikeEncoding: (value: string) => boolean;
/**
 * Validates the input parameters passed to the package when initializing.
 * @param params `AppProps`
 * @returns `true` if parameters are valid; error is raised otherwise.
 */
export declare const validateInputParams: (params: AppProps) => {
    valid: boolean;
    error?: string;
};
/**
 * Hashes an input using the `keccak256` hashing function used across the World ID protocol, to be used as
 * a ZKP input.
 * @param input - Input to hash (if it's a string, it'll be converted to bytes first)
 * @returns hash
 */
export declare function hashBytes(input: string | Buffer): {
    hash: BigInt;
    digest: string;
};
/**
 * Partial implementation of `keccak256` hash from @ethersproject/solidity; only supports hashing a single BytesLike value
 * @param value value to hash
 * @returns
 */
export declare function keccak256(value: Buffer): string;
