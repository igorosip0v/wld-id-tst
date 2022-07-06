/// <reference types="react" />
interface SquareButtonInterface {
    disabled?: boolean;
    onClick: () => void;
    icon?: JSX.Element;
    noBorder?: boolean;
    active?: boolean;
}
export declare function SquareButton({ icon, ...props }: SquareButtonInterface): JSX.Element;
export {};
