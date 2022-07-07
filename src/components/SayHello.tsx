import { useEffect, useState } from "react";

export function SayHello(props: { name: string }): JSX.Element {
  const [name, setName] = useState(props.name);

  useEffect(() => {
    setName(props.name);
  }, [props]);

  return <div>Hey {name}, say hello to TypeScript.</div>;
}
