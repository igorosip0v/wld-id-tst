/// <reference types="react" />
interface StatefulIconInterface {
    state?: 'success' | 'failure';
    color?: 'primary';
}
export declare function StatefulIcon({ state, color }: StatefulIconInterface): JSX.Element;
export {};
