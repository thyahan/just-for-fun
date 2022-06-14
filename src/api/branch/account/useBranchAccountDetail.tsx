import { useCallback, useState } from "react";
import axios, { AxiosError } from "axios";
import { branchAccountDetail } from "api";

export interface IAccount {
  accountId: string;
  accountName: string;
  businessLine: string;
  cancelledAcc: string;
  cycleCode: string;
  status: string;
  checked?: boolean;
}

export interface IBranch {
  accSize: number;
  accounts: IAccount[];
  branchName: string;
  branchNo: string;
}

interface IData {
  branches: IBranch[];
}

interface IError {
  status: number;
  statusText: string;
}

interface IState {
  status: "success" | "idle" | "error" | "loading";
  error?: IError;
  data?: IBranch[];
}

const useBrannchAccountDetail = (): [IState, () => void] => {
  const [state, setState] = useState<IState>({
    status: "idle",
    data: [],
  });

  const onSuccess = (data: IData) => {
    const branches: IBranch[] = data?.branches || [];
    setState((prev) => ({ ...prev, status: "success", data: branches, error: undefined }));
  };

  const onFailed = (error: IError) => {
    setState((prev) => ({ ...prev, status: "error", error, data: [] }));
  };

  const fetch = useCallback(() => {
    if (state.status === "loading") return;

    setState((prev) => ({ ...prev, status: "loading" }));

    axios(branchAccountDetail)
      .then((res) => {
        if (res.status === 200) onSuccess(res.data);
        else {
          const response: IError = {
            status: res.status,
            statusText: res.statusText?.toString(),
          };

          onFailed(response);
        }
      })
      .catch((error: AxiosError) => {
        const response = error?.response as IError;
        onFailed(response);
      });
  }, [state.status]);

  return [state, fetch];
};

export default useBrannchAccountDetail;
