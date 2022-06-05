import React from "react";
import css from "./index.module.css";
import { omit } from "lodash";

type IColor = "red" | "yellow";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: IColor;
  block?: boolean;
}

const Button = (props: Props) => {
  const { color = "", block, className } = props;

  const cls = `
    ${css.button} 
    ${color ? css[color] : ""} 
    ${block ? css.block : ""} 
    ${className ? className : ""}
  `.trim();

  return <button {...omit(props, ["className", "color", "block"])} className={cls} />;
};

export default Button;
