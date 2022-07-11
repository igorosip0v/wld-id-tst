import { App } from "App";
import { render } from "react-dom";
import { AppProps } from "types";

export const init = (elementInput: string | HTMLElement, options: AppProps) => {
  let mountNode: HTMLElement | null = null;

  if (typeof elementInput !== "string") {
    mountNode = elementInput;
  }

  if (typeof elementInput === "string") {
    mountNode = document.getElementById(elementInput);
  }

  if (mountNode !== null) {
    render(<App action_id={options.action_id} />, mountNode);
  }
};
