import { jsx as _jsx } from "react/jsx-runtime";
import { ReactWidget } from "@components";
import { render } from "react-dom";
export var init = function (elementInput) {
    var mountNode = null;
    if (typeof elementInput !== "string") {
        mountNode = elementInput;
    }
    if (typeof elementInput === "string") {
        mountNode = document.getElementById(elementInput);
    }
    if (mountNode !== null) {
        render(_jsx(ReactWidget, {}), mountNode);
    }
};
