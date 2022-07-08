/**
 * Validates that an string looks like an ABI-encoded string. Very basic format-like check.
 * The WLD app validates the actual values.
 * @param value string to validate
 * @returns `true` if the value looks like an ABI-encoded string; `false` otherwise
 */
export const validateABILikeEncoding = (value: string): boolean => {
  const ABI_REGEX = /^0x[\dabcdef]+$/;
  return !!value.toString().match(ABI_REGEX) && value.length >= 66; // Because `0` contains 66 characters
};
