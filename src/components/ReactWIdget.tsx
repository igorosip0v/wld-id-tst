import { useState } from "react";

export const ReactWidget = (): JSX.Element => {
  const [name, _setName] = useState('Name')
  return <div>{`I am ${name}`}</div>;
};
