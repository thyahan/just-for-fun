import React from "react";
import { omit } from "lodash";

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  intermediate?: boolean;
  size?: "lg" | "sm";
};

const Checkbox = (props: Props) => {
  const { checked, intermediate, size } = props;

  return (
    <div className={size === "lg" ? "cs-checkbox cs-checkbox-lg" : "cs-checkbox"}>
      <input {...omit(props, ["intermediate", "size"])} type="checkbox" className={intermediate ? "cs-checkbox-intermediate" : ""} />
      <span className={`cs-checkbox-inner ${checked ? "cs-checkbox-inner-checked" : ""}`}></span>
    </div>
  );
};

export default Checkbox;
