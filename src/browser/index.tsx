import { AppProps } from "types";
import { init as worldIdInit } from "widget";

export const init = (elementInput: string | HTMLElement, options: AppProps) => {
  worldIdInit(elementInput, options);
};
