import { AppProps } from "../types";
import { styled } from "@stitches/react";
import { useActions } from "kea";
import { widgetLogic } from "./widgetLogic";
import { Modal } from "react-widget/Modal";
import { useValues } from "kea";

const WidgetBox = styled("div", {
  border: "1px solid black",
  padding: "8px 16px",
});

export const Widget = (props: AppProps): JSX.Element => {
  console.log(props);
  const { setModalVisibility } = useActions(widgetLogic);
  const { modalVisibility } = useValues(widgetLogic);
  return (
    <div>
      <WidgetBox onClick={() => setModalVisibility(true)}>
        I’m a unique person
      </WidgetBox>
      <Modal visible={modalVisibility} />
    </div>
  );
};
