import React, { useContext } from "react";
import css from "./index.module.css";
import { omit, get } from "lodash";
import Checkbox from "components/Checkbox";
import { BranchAccountContext } from "../context";
import Icon from "components/Icon";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  checkbox?: boolean;
  checked?: boolean;
  branchNo: string;
  index: number;
  disabled?: boolean;
  icon?: "mobile" | "online" | "paytv" | React.ReactNode;
};

const Account = (props: Props) => {
  const { checkbox, children, branchNo, index, className, disabled, icon } = props;
  const cls = `${css.account} ${className ? className : ""}`;
  const { onAccountCheckboxChange } = useContext(BranchAccountContext);

  const renderCheckbox = () => {
    const { checked } = props;

    return (
      <div className="px-4">
        <Checkbox checked={checked} disabled={disabled} intermediate onChange={(e) => onAccountCheckboxChange(branchNo, index, e.target.checked)} />
      </div>
    );
  };

  const renderIcon = () => {
    if (typeof icon === "string") {
      const color = {
        mobile: "bg-yellow-400",
        online: "bg-sky-400",
        paytv: "bg-pink-400",
      };
      const name = `${icon}-icon`;

      return (
        <div className={`w-10 h-full flex justify-center items-center ${get(color, icon, "")}`}>
          <Icon name={name} alt={name} width={24} height={24} />
        </div>
      );
    }

    return icon;
  };

  return (
    <div className={cls} {...omit(props, ["checkbox", "checked", "children", "branchNo", "index", "className", "icon"])}>
      {icon && renderIcon()}
      {checkbox && renderCheckbox()}
      {children}
    </div>
  );
};

export default Account;
