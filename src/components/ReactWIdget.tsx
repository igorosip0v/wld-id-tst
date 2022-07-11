import { useState } from "react";
import { styled } from "@stitches/react";

const Container = styled("div", {
  backgroundColor: "Aquamarine",
  fontSize: "20px",
});

export const ReactWidget = (): JSX.Element => {
  const [name, _setName] = useState("Name");
  return <Container>{`I am ${name}`}</Container>;
};
