import { AppProps } from "types";
import { styled } from "@stitches/react";
import { Widget } from "react-widget";

const AppBox = styled("div", {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const App = (props: AppProps): JSX.Element => {
  return (
    <AppBox>
      <Widget {...props} />
    </AppBox>
  );
};
