import {
  buildVerificationRequest,
  hashBytes,
  keccak256,
  randomNumber,
  validateABILikeEncoding,
  validateInputParams,
  verifyVerificationResponse,
} from "./utils";

import { init } from "./widget";

export * from "./react-widget";

export const utils = {
  buildVerificationRequest,
  hashBytes,
  keccak256,
  randomNumber,
  validateABILikeEncoding,
  validateInputParams,
  verifyVerificationResponse,
};

export default { init };
