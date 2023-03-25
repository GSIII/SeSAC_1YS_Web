import { useState } from "react";

interface ButtonProps {
  onClick(): void;
  children: string;
}
interface User {
  name: string;
  age: number;
}
const Button = (props: ButtonProps) => {
  const [name, setName] = useState("");
  const [list, setList] = useState<Array<User>>([]); //타입 명시 가능
  const a: string = "a";
  return <button onClick={props.onClick}>{props.children}</button>;
};
export default Button;
