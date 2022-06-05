import React from "react";
import css from "./index.module.css";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = (props: Props) => {
  const { children } = props;
  return <div className={css["login-layout"]}>{children}</div>;
};

