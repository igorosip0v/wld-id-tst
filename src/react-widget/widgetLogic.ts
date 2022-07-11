import { actions, reducers, kea, path } from "kea";

import type { widgetLogicType } from "./widgetLogicType";

export const widgetLogic = kea<widgetLogicType>([
  path(["worldId", "widgetLogic"]),
  actions({
    setModalVisibility: (visible: boolean) => visible,
  }),

  reducers({
    modalVisibility: [
      false,
      {
        setModalVisibility: (_: boolean, visible: boolean) =>
          visible,
      },
    ],
  }),
]);
