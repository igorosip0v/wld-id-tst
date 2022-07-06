import { AppProps, VerificationResponse } from './types';
import * as utils from './utils';
export * from './types';
/**
 * Initializes World ID, will render the World ID box on the provided element. The box will be
 * disabled until `.activate()` is called.
 * @param elementInput ID of HTML element or DOM node to mount World ID on
 * @param props See `AppProps` for details
 */
export declare const init: (elementInput: string | HTMLElement, props: AppProps) => void;
/**
 * Updates the parameters used for World ID (e.g. `signal` or `action_id`).
 * @param propsToUpdate
 */
export declare const update: (propsToUpdate: Partial<AppProps>) => void;
/**
 * Enables World ID so the end user can go through the flow. Promise is returned with proof results. If the process fails,
 * (e.g. because the user declined the request), an error code will be returned instead.
 * @returns Promise with proof details. Review documentation for details.
 */
export declare const enable: () => Promise<VerificationResponse>;
export declare const isInitialized: () => boolean;
export declare const isEnabled: () => boolean;
declare const _default: {
    init: (elementInput: string | HTMLElement, props: AppProps) => void;
    update: (propsToUpdate: Partial<AppProps>) => void;
    enable: () => Promise<VerificationResponse>;
    isEnabled: () => boolean;
    isInitialized: () => boolean;
    utils: typeof utils;
};
export default _default;
