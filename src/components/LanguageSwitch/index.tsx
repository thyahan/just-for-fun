import React from "react";
import css from "./index.module.css";
import Icon from "components/Icon";
import useLanguage from "hooks/useLanguage";

interface Props {}

const LanguageSwitch = (props: Props) => {
  const [language, setLanguage] = useLanguage("th");

  return (
    <div className={css["language-switch"]}>
      <div className={language === "th" ? "opacity-50" : ""} onClick={() => setLanguage("en")}>
        <Icon name="en-icon" alt="en flag icon" width={20} height={20} />
        <p>English</p>
      </div>
      <div className={language === "en" ? "opacity-50" : ""} onClick={() => setLanguage("th")}>
        <Icon name="th-icon" alt="th flag icon" width={20} height={20} />
        <p>ภาษาไทย</p>
      </div>
    </div>
  );
};

export default LanguageSwitch;
