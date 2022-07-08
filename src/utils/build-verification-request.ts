import {
  AppProps,
  VerificationRequest,
  VerificationRequestParams,
} from "../types";
import { hashBytes } from "./hash-bytes";
import { randomNumber } from "./random-number";

export const buildVerificationRequest = (
  props: AppProps
): VerificationRequest => {
  if (!props.signal) {
    throw new Error(
      "Unexpectedly trying to build verification request without a `signal`."
    );
  }

  const params: VerificationRequestParams = {
    signal: props.advanced_use_raw_signal
      ? props.signal
      : hashBytes(props.signal).digest,
    action_id: props.advanced_use_raw_action_id
      ? props.action_id
      : hashBytes(props.action_id).digest,
  };

  if (props.app_name) {
    params.app_name = props.app_name;
  }

  if (props.signal_description) {
    params.signal_description = props.signal_description;
  }

  return {
    id: randomNumber(100000, 9999999),
    jsonrpc: "2.0",
    method: "wld_worldIDVerification",
    params: [params],
  };
};
