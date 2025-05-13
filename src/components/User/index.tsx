import { ReactNode } from "react";

interface UserProps {
  name: string;
  children?: ReactNode;
}

const User = (props: UserProps) => {
  return (
    <div>
      <p>Usuario:{props.name}</p>
      {props.children && <div>{props.children}</div>}
    </div>
  );
};

export default User;
