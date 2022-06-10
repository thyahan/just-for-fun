import React, { useEffect } from "react";
import { FaSync } from "react-icons/fa";
import useBranchAccountDetail from "api/branch/account/useBranchAccountDetail";
import Section from "components/Section";

interface Props {}

const name = (name?: string) => {
  return name ? name : "no-name";
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
          <FaSync className={`inline mx-2 ${is.loading ? "animate-spin-fast" : ""}`} />
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
          {data.map((branch) => (
            <li key={branch.branchNo}>
              <p>{`${branch.branchNo}:${name(branch.branchName)}`}</p>
              <div className="px-10">
                {branch.accounts.map((account, i) => (
                  <p key={i}>{`${account.accountId}:${name(account.accountName)}`}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
};

export default BranchAccountModule;
