import { useEffect } from "react";
import { useActions, useValues } from "kea";
import { widgetLogic } from "./widgetLogic";

export function SayHello(props: { name: string }): JSX.Element {
  const { name } = useValues(widgetLogic);
  const { setName } = useActions(widgetLogic);

  useEffect(() => {
    setName(props.name);
  }, [props]);

  return (
    <div>
      <button onClick={() => setName(crypto.randomUUID())}>{name}</button>
      <div>Hey {name}, say hello to TypeScript.</div>
    </div>
  );
}
