import React, { useEffect, useMemo, useState } from "react";
import { FaSync } from "react-icons/fa";
import useBranchAccountDetail, { IBranch } from "api/branch/account/useBranchAccountDetail";
import Section from "components/Section";
import List from "components/List";
import { BranchAccountContext } from "./context";
import Account from "./Account";
import Button from "components/Button";
import AccountStatus, { IAccountStatus } from "components/AccountStatus";

const ROW_HEIGHT = 80;
const MAX_ROW = 5;
const MAX_LIST_HEIGHT = ROW_HEIGHT * MAX_ROW;
const TABLE_HEADER_HEIGHT = 48;

interface Props {}

const name = (name?: string) => {
  return name ? name : "no-name";
};

const getListHeight = (size: number): string => {
  const height = (size > MAX_ROW ? MAX_LIST_HEIGHT : size * ROW_HEIGHT) + TABLE_HEADER_HEIGHT;

  return `${height}px`;
};

const BranchAccountModule = (props: Props) => {
  const [{ status, data, error }, fetchBranchAccountDetail] = useBranchAccountDetail();
  const [branches, setBranches] = useState<IBranch[] | undefined>([]);

  const is = {
    allowReload: status === "error" || data?.length === 0,
    loading: status === "loading",
    empty: data?.length === 0,
    error: !!error,
    status204: error?.status === 204,
  };

  const [countCheckedAccount, countAccount] = useMemo(() => {
    // count checked account
    const checked = branches?.reduce((prev, branch) => {
      return prev + branch.accounts.reduce((total, account) => total + (account.checked ? 1 : 0), 0);
    }, 0);

    // count total account
    const total = branches?.reduce((prev, branch) => prev + branch.accounts.length, 0);

    return [checked, total];
  }, [branches]);

  const onAccountCheckboxChange = (branchNo: string, accountIndex: number, checked: boolean) => {
    setBranches((prev) => {
      return prev?.map((branch) => {
        const { accounts } = branch;
        if (branch.branchNo === branchNo) {
          return {
            ...branch,
            accounts: accounts.map((account, index) => {
              if (index === accountIndex) return { ...account, checked };
              return account;
            }),
          };
        }

        return branch;
      });
    });
  };

  useEffect(() => {
    setBranches(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.length]);

  useEffect(() => {
    if (status === "idle" && data?.length === 0) fetchBranchAccountDetail();
  }, [data, status, fetchBranchAccountDetail]);

  return (
    <Section title="Branch Account Module" responsive>
      <p className="text-sky-500">{`Select ${countCheckedAccount}/${countAccount} account(s)`}</p>
      <BranchAccountContext.Provider value={{ onAccountCheckboxChange }}>
        {is.empty && (
          <div className="flex items-center text-sky-400">
            <FaSync className={`relative inline mx-2 ${is.loading ? "animate-spin-fast" : ""}`} />
            {is.allowReload && (
              <p className="cursor-pointer hover:underline" onClick={fetchBranchAccountDetail}>
                reload
              </p>
            )}
          </div>
        )}

        {is.status204 && (
          <div className="h-64 flex flex-col justify-center items-center text-4xl p-12 w-full bg-sky-50 text-sky-300">
            <p className="text-sky-500 text-6xl mb-4">204</p>
            <p>No data found</p>
          </div>
        )}

        {branches && (
          <ul className=" min-w-[640px]">
            {branches.map((branch: IBranch) => (
              <li key={branch.branchNo}>
                <p>{`${branch.branchNo}:${name(branch.branchName)}`}</p>
                <div
                  className={`border border-gray-100 rounded-md shadow-lg overflow-hidden`}
                  style={{
                    height: getListHeight(branch?.accounts?.length || 0),
                  }}
                >
                  <div className="w-full h-12 flex bg-gray-100 text-gray-400 border-b border-transparent">
                    <span className="w-10"></span>
                    <ul className="flex-grow flex justify-between items-center ">
                      <li className="w-1/3 lg:w-2/5 pl-4">บัญชี</li>
                      <li className="w-1/6 lg:w-1/5 text-center">สถานะ</li>
                      <li className="w-1/6 lg:w-1/5 text-center">วันที่รอบบิล</li>
                      <li className="w-1/3 lg:w-1/5 text-right pr-[42px]"></li>
                    </ul>
                  </div>
                  <List
                    rowCount={branch.accounts.length}
                    rowHeight={ROW_HEIGHT}
                    rowRenderer={({ index, style, key }) => {
                      const account = branch.accounts[index];

                      return (
                        <Account
                          className={index % 2 ? "bg-sky-50" : ""}
                          branchNo={branch.branchNo}
                          index={index}
                          style={style}
                          key={key}
                          icon={account.businessLine?.toLowerCase()}
                        >
                          <ul className="w-full flex justify-between items-center ">
                            <li className="w-1/3 lg:w-2/5 pl-4">
                              <p className="truncate-two-line">{account.accountName}</p>
                              <p className="text-gray-400 text-sm">{account.accountId}</p>
                            </li>
                            <li className="w-1/6 lg:w-1/5 text-center">
                              <AccountStatus status={account.status?.toLowerCase() as IAccountStatus}>{account.status}</AccountStatus>
                            </li>
                            <li className="w-1/6 lg:w-1/5 text-center">{account.cycleCode}</li>
                            <li className="w-1/3 lg:w-1/5 text-right pr-[42px]">
                              <Button color="transparent-sky">ดูหมายเลขบริการ</Button>
                            </li>
                          </ul>
                        </Account>
                      );
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </BranchAccountContext.Provider>
    </Section>
  );
};

export default BranchAccountModule;
