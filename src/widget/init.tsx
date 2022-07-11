import { App } from "App";
import { render } from "react-dom";

export const init = (elementInput: string | HTMLElement) => {
  let mountNode: HTMLElement | null = null;

  if (typeof elementInput !== "string") {
    mountNode = elementInput;
  }

  if (typeof elementInput === "string") {
    mountNode = document.getElementById(elementInput);
  }

  if (mountNode !== null) {
    render(<App />, mountNode);
  }
};
