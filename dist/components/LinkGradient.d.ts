/// <reference types="react" />
interface LinkGradientInterface {
    children: string;
    href: string;
    target?: '_blank';
    size?: 'md' | 'sm';
}
export declare function LinkGradient({ children, size, ...restOfProps }: LinkGradientInterface): JSX.Element;
export {};
