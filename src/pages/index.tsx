import type { NextPage } from "next";
import { LoginLayout } from "components/Layout";
import Icon from "components/Icon";
import Button, { Props as ButtonProps } from "components/Button";

const btns: ButtonProps[] = [
  {
    children: "Primary",
    disabled: false,
  },
  {
    children: "Primary",
    disabled: false,
    color: "red",
  },
  {
    children: "Primary",
    disabled: false,
    color: "yellow",
  },
  {
    children: "Primary",
    disabled: true,
  },
  {
    children: "Primary",
    disabled: true,
    color: "red",
  },
  {
    children: "Primary",
    disabled: true,
    color: "yellow",
  },
];

const Home: NextPage = () => {
  return (
    <LoginLayout title="login iservice">
      <span className="text-gray-700 dark:text-gray-200">Settings</span>
      <div className="flex flex-col justify-evenly items-center h-[800px]">
        {btns.map((bt, index) => {
          return <Button {...bt} key={index} />;
        })}
        {btns.map((bt, index) => {
          return <Button {...bt} key={index} block />;
        })}
      </div>
    </LoginLayout>
  );
};

export default Home;
