import { AppProps } from "../types";
import { validateABILikeEncoding } from "./validate-abi-like-encoding";

/**
 * Validates the input parameters passed to the package when initializing.
 * @param params `AppProps`
 * @returns `true` if parameters are valid; error is raised otherwise.
 */
export const validateInputParams = (
  params: AppProps
): { valid: boolean; error?: string } => {
  if (!params.action_id) {
    return {
      valid: false,
      error: "The `action_id` parameter is always required.",
    };
  }

  if (
    params.advanced_use_raw_action_id &&
    !validateABILikeEncoding(params.action_id)
  ) {
    return {
      valid: false,
      error: `You enabled 'advanced_use_raw_action_id' which uses the action ID raw (without any additional hashing or encoding),
        but the action ID you provided does not look to be validly hashed or encoded. Please check
        https://id.worldcoin.org/docs/js/reference#parameters for details.`,
    };
  }

  if (
    params.advanced_use_raw_signal &&
    params.signal &&
    !validateABILikeEncoding(params.signal)
  ) {
    return {
      valid: false,
      error: `You enabled 'advanced_use_raw_signal' which uses the signal raw (without any additional hashing or encoding),
        but the signal you provided does not look to be validly hashed or encoded. Please check
        https://id.worldcoin.org/docs/js/reference#parameters for details.`,
    };
  }

  return { valid: true };
};
