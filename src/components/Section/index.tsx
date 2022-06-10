import React from "react";
import css from "./index.module.css";

interface Props {
  children: React.ReactNode;
  title?: React.ReactNode;
  responsive?: boolean;
}

const Section = (props: Props) => {
  const { title, responsive = true } = props;

  return (
    <section className={css[responsive ? "section-responsive" : "section"]}>
      {title ? <div className={css.title}>{title}</div> : null}
      <div className={css.content}>{props.children}</div>
    </section>
  );
};

export default Section;
