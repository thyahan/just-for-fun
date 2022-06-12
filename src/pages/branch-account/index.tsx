import React from "react";
import BranchAccountModule from "modules/branch-account";
import { MainLayout } from "components/Layout";

interface Props {}

const BranchAccountPage = (props: Props) => {
  return (
    <MainLayout>
      <BranchAccountModule />
      <BranchAccountModule />
      <BranchAccountModule />
    </MainLayout>
  );
};

export default BranchAccountPage;
