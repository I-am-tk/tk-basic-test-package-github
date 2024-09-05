import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {}
const Button = ({ children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children || "V1"}</button>;
};

export default Button;
