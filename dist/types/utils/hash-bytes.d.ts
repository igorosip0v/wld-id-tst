/// <reference types="node" />
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
