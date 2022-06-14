import React from "react";
import css from "./index.module.css";
import { omit } from "lodash";

export type IAccountStatus = "active" | "cancel" | "soft-suspend" | "full-suspend";

type Props = React.HTMLAttributes<HTMLParagraphElement> & {
  status?: IAccountStatus;
};

const AccountStatus = (props: Props) => {
  const { status, className } = props;
  const cls = `${css["account-status"]} ${status ? css[status] : ""} ${className ? className : ""}`;

  return <p {...omit(props, "type")} className={cls} />;
};

export default AccountStatus;
