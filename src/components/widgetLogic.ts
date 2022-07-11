import { actions, reducers, kea, path } from "kea";
import type { widgetLogicType } from "./widgetLogicType";
export const widgetLogic = kea<widgetLogicType>([
  path(["worldId", "widgetLogic"]),
  actions({
    setName: (name: string) => ({ name }),
  }),

  reducers({
    name: [
      "Default Name",
      { setName: (_: string, { name }: { name: string }) => name },
    ],
  }),
]);
