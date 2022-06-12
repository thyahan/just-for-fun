import React from "react";
import css from "./index.module.css";
import Breadcrumb from "components/Breadcrumb";
import { HiChevronDown, HiMenu, HiOutlineChevronLeft } from "react-icons/hi";

interface Props {}

const Header = (props: Props) => {
  const breadcrumb = [
    { label: "Branchess & Accounts", href: "/branch-account" },
    { label: "Branchess & Accounts", href: "/branch-account" },
    { label: "Accounts" },
  ];

  const [showSideBar, setShowSidebar] = React.useState<boolean>(false);

  return (
    <div className={css.header}>
      <div className={css["login-info-sm"]}>
        <a onClick={() => setShowSidebar((prev) => !prev)}>
          <HiMenu size={32} className="text-red-500" />
        </a>
        <div className="overflow-auto">
          <p>บริษัท ทรู บิสิเนสบิสิเนส บิสิเนสบิสิเนสบิสิเนส จำกัด</p>
          <p>Lennert Nijenbijvank</p>
        </div>
      </div>
      <div className={css["login-info"]}>
        <div className={css["company-info"]}>
          <p>บริษัท ทรู บิสิเนส จำกัด</p>
          <p>
            <a>เปลี่ยนบริษัท</a>
          </p>
        </div>

        <div className={css["user-info"]}>
          <p>Lennert Nijenbijvank</p>
          <p>Head Admin</p>
        </div>

        <div className={css["user-menu"]}>
          <a>
            <HiChevronDown size={32} className="text-red-500" />
          </a>
        </div>
      </div>

      <Breadcrumb value={breadcrumb} />

      <div
        className={`${showSideBar ? "blog md:hidden" : "hidden md:hidden"} ${css["sidebar-wrapper"]}`}
        onClick={() => setShowSidebar((prev) => !prev)}
      ></div>
      <div className={`${showSideBar ? "blog md:hidden" : "hidden md:hidden"} ${css.sidebar}`}>
        <HiOutlineChevronLeft size={32} className="text-red-500" />
      </div>
    </div>
  );
};

export default Header;
