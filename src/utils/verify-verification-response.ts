import { validateABILikeEncoding } from "./validate-abi-like-encoding";

/**
 * Verifies that the response from the WLD app is valid
 * @param result expects a valid `VerificationResponse`
 */
export const verifyVerificationResponse = (
  result: Record<string, string | undefined>
): boolean => {
  const merkle_root = "merkle_root" in result ? result.merkle_root : undefined;
  const nullifier_hash =
    "nullifier_hash" in result ? result.nullifier_hash : undefined;
  const proof = "proof" in result ? result.proof : undefined;

  for (const attr of [merkle_root, nullifier_hash, proof]) {
    if (!attr || !validateABILikeEncoding(attr)) {
      return false;
    }
  }

  return true;
};
