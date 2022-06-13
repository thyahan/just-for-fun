import React from "react";
import css from "./index.module.css";
import Checkbox from "components/Checkbox";

interface Props {}

const TestPage = (props: Props) => {
  return (
    <div className={"w-full h-96 flex justify-evenly items-center"}>
      <div className="relative">
        <Checkbox />
        <p>normal</p>
      </div>
      <div>
        <Checkbox checked />
        <p>checked</p>
      </div>
      <div>
        <Checkbox disabled />
        <p>disabled</p>
      </div>
      <div>
        <Checkbox disabled checked />
        <p>disabled + checked</p>
      </div>
      <div>
        <Checkbox checked intermediate />
        <p>intermediate + checked</p>
      </div>
      <div>
        <Checkbox checked intermediate disabled />
        <p>intermediate + checked + disabled</p>
      </div>
    </div>
  );
};

export default TestPage;
