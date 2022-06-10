import { AxiosRequestConfig } from "axios";

const api: AxiosRequestConfig = {
  baseURL: "http://localhost:9000/iservice-biz-customer",
};

export const branchAccountDetail: AxiosRequestConfig = {
  ...api,
  method: "POST",
  baseURL: `${api.baseURL}/v1/api/branch/account/detail`,
};
