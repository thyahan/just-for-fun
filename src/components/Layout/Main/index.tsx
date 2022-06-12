import React from "react";
import css from "./index.module.css";
import Header from "components/Header";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = (props: Props) => {
  const { children } = props;
  return (
    <div className={css["main-layout"]}>
      <Header />
      <main>{children}</main>
    </div>
  );
};
