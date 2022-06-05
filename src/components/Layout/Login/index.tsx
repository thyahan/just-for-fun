import React from "react";
import css from "./index.module.css";
import Head from "next/head";
import DarkModeSwitch from "components/DarkModeSwitch";
import LanguageSwitch from "components/LanguageSwitch";

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const LoginLayout = (props: Props) => {
  const { children, title = "iService", description = "iService" } = props;

  return (
    <div className={css["login-layout"]}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DarkModeSwitch />
      <LanguageSwitch />

      <main>{children}</main>

      <footer></footer>
    </div>
  );
};
