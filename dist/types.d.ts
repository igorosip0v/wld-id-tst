export declare type ABIEncodedValue = string;
export declare enum ErrorCodes {
    ConnectionFailed = "connection_failed",
    VerificationRejected = "verification_rejected",
    AlreadySigned = "already_signed",
    InvalidActionID = "invalid_action_id",
    InvalidSignal = "invalid_signal",
    UnexpectedResponse = "unexpected_response",
    GenericError = "generic_error"
}
export interface EndUserErrorDisplay {
    title?: string;
    caption: string;
    noRetry?: boolean;
}
export interface AppProps {
    action_id: string;
    signal?: string;
    theme?: 'light' | 'dark';
    enable_telemetry?: boolean;
    app_name?: string;
    signal_description?: string;
    disable_remote_fonts?: boolean;
    advanced_use_raw_signal?: boolean;
    advanced_use_raw_action_id?: boolean;
}
export interface CallbackInterface {
    successCallback: (result: VerificationResponse) => void;
    failureCallback: (error: VerificationErrorResponse) => void;
}
export declare enum ModalView {
    VerificationFlow = 0,
    LearnMore = 1
}
export declare enum VerificationState {
    AwaitingConnection = 0,
    AwaitingVerification = 1,
    Confirmed = 2,
    Failed = 3
}
export interface VerificationRequestParams {
    action_id: string;
    signal: string;
    app_name?: string;
    signal_description?: string;
}
export interface VerificationRequest {
    id: number;
    jsonrpc: '2.0';
    method: 'wld_worldIDVerification';
    params: VerificationRequestParams[];
}
export interface VerificationResponse {
    merkle_root: ABIEncodedValue;
    nullifier_hash: ABIEncodedValue;
    proof: ABIEncodedValue;
}
export interface VerificationErrorResponse {
    code: ErrorCodes;
    detail: string;
}
export interface ExpectedErrorResponse {
    message: string;
    stack: string;
}
export declare enum CTAShownState {
    Undisplayed = 0,
    Show = 1,
    Hide = 2
}
