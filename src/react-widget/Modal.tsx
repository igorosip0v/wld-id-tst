import { styled } from "@stitches/react";
import { useActions } from "kea";
import { widgetLogic } from "./widgetLogic";
// import logo from "assets/worldcoin-logo.svg";
// console.log(logo);

const ModalOverlay = styled("div", {
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "rgba(0,0,0,0.6)",
  color: "#FFFFFF",
  display: "grid",
  justifyContent: "center",
  alignContent: "center",
  transition: "opacity, visibility ease-out 1s",
  opacity: "0",
  pointerEvents: "none",
  visibility: "hidden",

  variants: {
    visible: {
      true: { opacity: "1", pointerEvents: "all", visibility: "visible" },
      false: { opacity: "0", pointerEvents: "none", visibility: "hidden" },
    },
  },
});

const ModalBox = styled("div", {
  display: "grid",
  rowGap: "6px",
});

const MainModalBox = styled("div", {
  background: "#FFFFFF",
  borderRadius: "12px",
  boxShadow: "0px 8px 64px rgba(0, 0, 0, 0.08);",
  padding: "32px",
  color: "#191C20",
});

const InfoModalBox = MainModalBox;

export const Modal = (props: { visible?: boolean }) => {
  const { setModalVisibility } = useActions(widgetLogic);

  return (
    <ModalOverlay
      visible={props.visible}
      onClick={(e) =>
        e.currentTarget === e.target ? setModalVisibility(false) : undefined
      }
    >
      <ModalBox>
        <MainModalBox>test</MainModalBox>
        <InfoModalBox>test2</InfoModalBox>
      </ModalBox>
    </ModalOverlay>
  );
};
