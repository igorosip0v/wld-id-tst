/// <reference types="react" />
import { CSSProperties } from 'styled-components';
interface LinkButtonInterface {
    style?: CSSProperties;
    disabled?: boolean;
    onClick?: () => void;
    children?: string | JSX.Element | JSX.Element[];
}
export declare function LinkButton(props: LinkButtonInterface): JSX.Element;
export {};
