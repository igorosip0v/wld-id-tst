import { AppProps } from "../types";
/**
 * Validates the input parameters passed to the package when initializing.
 * @param params `AppProps`
 * @returns `true` if parameters are valid; error is raised otherwise.
 */
export declare const validateInputParams: (params: AppProps) => {
    valid: boolean;
    error?: string;
};
