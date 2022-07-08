/// <reference types="node" />
/**
 * Partial implementation of `keccak256` hash from @ethersproject/solidity; only supports hashing a single BytesLike value
 * @param value value to hash
 * @returns
 */
export declare function keccak256(value: Buffer): string;
