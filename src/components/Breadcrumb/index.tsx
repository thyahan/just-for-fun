import React from "react";
import css from "./index.module.css";

export interface IBreadcrumb {
  label: string;
  href?: string;
}

export interface Props {
  value: IBreadcrumb[];
}

const Breadcrumb = (props: Props) => {
  const { value = [] } = props;
  return (
    <ul className={css.breadcrumb}>
      {value.map((bc: IBreadcrumb, index) => (
        <li key={index}>{bc.href ? <a href={bc.href}>{bc.label}</a> : <span>{bc.label}</span>}</li>
      ))}
    </ul>
  );
};

export default Breadcrumb;
