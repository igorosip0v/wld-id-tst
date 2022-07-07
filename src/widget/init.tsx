import { render } from "react-dom";
import { ReactWidget } from "components";

export const init = (elementInput: string | HTMLElement) => {
  let mountNode: HTMLElement | null = null;

  if (typeof elementInput !== "string") {
    mountNode = elementInput;
  }

  if (typeof elementInput === "string") {
    mountNode = document.getElementById(elementInput);
  }

  if (mountNode !== null) {
    render(<ReactWidget />, mountNode);
  }
};
