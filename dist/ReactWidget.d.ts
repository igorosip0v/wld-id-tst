/// <reference types="react" />
import { AppProps } from './types';
declare type Props = AppProps & {
    className?: string;
    onSuccess?: () => void;
    onError?: () => void;
    enabled?: boolean;
    debug?: boolean;
};
export declare function ReactWidget(props: Props): JSX.Element;
export {};
