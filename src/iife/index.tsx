import { ReactWidget } from "components";
import { render } from "react-dom";

const worldID = (elementInput: string | HTMLElement) => {
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

export default worldID;
