import { render } from "react-dom";
import { ReactWidget } from "components";
import { init } from "widget";

const worldID = (elementInput: string | HTMLElement) => {
  init;
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

if (typeof window !== "undefined") {
  window["worldID"] = worldID;
}
