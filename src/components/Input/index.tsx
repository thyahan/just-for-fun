import React from "react";
import css from "./index.module.css";
import omit from "lodash/omit";

type IType = "number" | "text" | "password";
type ISize = "sm";
type IColor = "red" | "yellow" | "blue";
type IError = "error" | "warning";

export type Props = {
  type?: IType;
  size?: ISize;
  color?: IColor;
  error?: IError;
  selectOnFocus?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size">;

const Input = (props: Props) => {
  const { className, type, size, error, color } = props;
  const cls = `
    ${css.input}
    ${type === "number" ? css.number : ""}
    ${size === "sm" ? css.sm : ""}
    ${error === "error" ? css.red : ""}
    ${error === "warning" ? css.yellow : ""}
    ${color ? css[`text-${color}`] : ""}
    ${className ? className : ""}
  `
    .replace(/\s\s+/g, " ")
    .trim();

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (props?.selectOnFocus) e.target.select();

    props?.onFocus?.(e);
  };

  return <input {...omit(props, ["size", "color", "error", "selectOnFocus"])} className={cls} onFocus={onFocus} />;
};

export default Input;
