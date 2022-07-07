import { useState } from "react";

export function SayHello(props: { name: string }): JSX.Element {
  const [name, _setName] = useState(props.name);
  return <div>Hey {name}, say hello to TypeScript.</div>;
}
