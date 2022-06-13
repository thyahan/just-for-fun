import React, { useEffect } from "react";
import { FaSync } from "react-icons/fa";
import useBranchAccountDetail, { IBranch } from "api/branch/account/useBranchAccountDetail";
import Section from "components/Section";
import List from "components/List";
// import css from "./index.module.css";
import Account from "./Account";

const ROW_HEIGHT = 80;
const MAX_ROW = 5;
const MAX_LIST_HEIGHT = ROW_HEIGHT * MAX_ROW;

interface Props {}

const name = (name?: string) => {
  return name ? name : "no-name";
};

const getListHeight = (size: number): string => {
  const height = size > MAX_ROW ? MAX_LIST_HEIGHT : size * ROW_HEIGHT;

  return `${height}px`;
};

const BranchAccountModule = (props: Props) => {
  const [{ status, data, error }, fetchBranchAccountDetail] = useBranchAccountDetail();

  const is = {
    allowReload: status === "error" || data?.length === 0,
    loading: status === "loading",
    empty: data?.length === 0,
    error: !!error,
    status204: error?.status === 204,
  };

  useEffect(() => {
    if (status === "idle" && data?.length === 0) fetchBranchAccountDetail();
  }, [data, status, fetchBranchAccountDetail]);

  return (
    <Section title="Branch Account Module" responsive>
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
      {data && (
        <ul>
          {data.map((branch: IBranch) => (
            <li key={branch.branchNo}>
              <p>{`${branch.branchNo}:${name(branch.branchName)}`}</p>
              <div
                className={`border border-gray-100 rounded-md overflow-auto shadow-lg`}
                style={{
                  height: getListHeight(branch?.accounts?.length || 0),
                }}
              >
                <List
                  rowCount={branch.accounts.length}
                  rowHeight={ROW_HEIGHT}
                  rowRenderer={({ index, style, key }) => {
                    return (
                      <Account checkbox checked={index === 2} style={style} key={key}>{`[${index + 1}] - [${branch.accounts[index].accountId}] ${name(
                        branch.accounts[index].accountName
                      )}`}</Account>
                    );
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
};

export default BranchAccountModule;
