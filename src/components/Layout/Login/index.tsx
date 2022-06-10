import React from "react";
import css from "./index.module.css";
import Head from "next/head";
import DarkModeSwitch from "components/DarkModeSwitch";
import dynamic from "next/dynamic";

const LanguageSwitch = dynamic(() => import("components/LanguageSwitch"), { ssr: false });

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
  responsive?: boolean;
}

export const LoginLayout = (props: Props) => {
  const { children, title = "iService", description = "iService", responsive = true } = props;

  const cls = `${css["login-layout"]} ${responsive ? "overflow-hidden": "overflow-auto"}`;

  return (
    <div className={cls}>
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
