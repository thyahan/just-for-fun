import React from "react";
import css from "./index.module.css";

interface Props {
  checked?: boolean;
  disabled?: boolean;
  intermediate?: boolean;
}

const Checkbox = (props: Props) => {
  const { checked, intermediate } = props;

  return (
    <div className="cs-checkbox">
      <input {...props} type="checkbox" className={intermediate ? "cs-checkbox-intermediate" : ""} />
      <span className={`cs-checkbox-inner ${checked ? "cs-checkbox-inner-checked" : ""}`}></span>
    </div>
  );
};

export default Checkbox;
