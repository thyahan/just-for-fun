import React from "react";
import css from "./index.module.css";
import { omit } from "lodash";
import Checkbox from "components/Checkbox";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  checkbox?: boolean;
  checked?: boolean;
};

const Account = (props: Props) => {
  const { checkbox, children } = props;

  const renderCheckbox = () => {
    // const { checked } = props;

    return (
      <div className="px-4">
        <Checkbox />
      </div>
    );
  };

  return (
    <div className={css.account} {...omit(props, ["checkbox", "checked", "children"])}>
      {checkbox && renderCheckbox()}
      {children}
    </div>
  );
};

export default Account;
