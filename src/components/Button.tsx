import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {}
const Button = (props: ButtonProps) => {
  return <button>{props.children || "V1"}</button>;
};

export default Button;
