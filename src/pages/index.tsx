import type { NextPage } from "next";
import { LoginLayout } from "components/Layout";
import Icon from "components/Icon";
import Button, { Props as ButtonProps } from "components/Button";
import { HiOutlineSun } from "react-icons/hi";
import dynamic from "next/dynamic";
import Input from "components/@form/Input";
import { useState } from "react";
import { identity, pickBy } from "lodash";

const Section = dynamic(() => import("components/Section"), { ssr: false });

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
  const [state, setState] = useState({
    username: "",
  });

  const getUsetError = (): object => {
    const { username } = state;
    const error = username.length === 0 ? "error" : username.length < 4 ? "warning" : undefined;
    const helper =
      error === "error" ? (
        <span className="text-red-500">กรุณากรอกรหัสผู้ใช้</span>
      ) : error === "warning" ? (
        <span className="text-yellow-400">กรุณากรอกรหัสผู้ใช้ 4 หลัก</span>
      ) : undefined;

    return pickBy({ error, helper }, identity);
  };

  return (
    <LoginLayout title="login iservice" responsive={false}>
      <span className="text-gray-700 dark:text-gray-200">Settings</span>
      <Section
        responsive
        title={
          <div className="w-full flex justify-between">
            <span>Settings</span>
            <HiOutlineSun />
          </div>
        }
      >
        <Input label={<span>Username</span>} defaultValue={133} type="text" required />
        <Input
          label="Password"
          defaultValue={133}
          type="password"
          required
          placeholder="Password"
          value={state.username}
          onChange={(e) => setState((prev) => ({ ...prev, username: e.target.value }))}
          {...getUsetError()}
        />
        <Input label="Firstname" defaultValue={133} type="text" />
        <Input label="Lastname" defaultValue={133} type="text" />
        <Input label="Address" defaultValue={133} type="text" />
      </Section>
    </LoginLayout>
  );
};

export default Home;
