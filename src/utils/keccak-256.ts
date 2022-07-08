import sha3 from "js-sha3";
import { arrayify, concat, hexlify } from "@ethersproject/bytes";

/**
 * Partial implementation of `keccak256` hash from @ethersproject/solidity; only supports hashing a single BytesLike value
 * @param value value to hash
 * @returns
 */
export function keccak256(value: Buffer): string {
  const tight: Array<Uint8Array> = [arrayify(value)];
  const data = hexlify(concat(tight));
  return "0x" + sha3.keccak_256(arrayify(data));
}
