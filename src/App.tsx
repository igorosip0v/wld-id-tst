import { ReactWidget, SayHello } from "./components";

export const App = (): JSX.Element => {
  return (
    <div>
      <ReactWidget />
      <SayHello name="ME" />
    </div>
  );
};
