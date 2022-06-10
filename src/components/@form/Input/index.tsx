import { omit, uniqueId } from "lodash";
import React from "react";
import css from "./index.module.css";
import Input, { Props as InputProps } from "components/Input";

interface Props extends InputProps {
  label?: React.ReactNode;
  helper?: React.ReactNode;
}

const FormInput = (props: Props) => {
  const { label, id = uniqueId(), helper, required } = props;

  const labelCls = required ? css.required : "";

  return (
    <div className={css["form-input"]}>
      {label && (
        <label className={labelCls} htmlFor={id}>
          {label}
        </label>
      )}
      <Input {...omit(props, ["label", "errorMessage"])} />
      <span id={`${id}_helper`}>{helper}</span>
    </div>
  );
};

export default FormInput;
