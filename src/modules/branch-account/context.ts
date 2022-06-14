import React from "react";

export type IBranchAccountContext = {
  onAccountCheckboxChange: (branchNo: string, accountIndex: number, checked: boolean) => void;
};

export const BranchAccountContext = React.createContext<IBranchAccountContext>({
  onAccountCheckboxChange: () => null,
});
