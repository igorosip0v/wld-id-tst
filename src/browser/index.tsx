import { init } from "widget";

const worldID = (elementInput: string | HTMLElement) => {
  init(elementInput);
};

if (typeof window !== "undefined") {
  window["worldID"] = worldID;
}
