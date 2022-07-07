export function SayHello(props: { name: string }): JSX.Element {
  return <div>`Hey ${props.name}, say hello to TypeScript.`</div>;
}
