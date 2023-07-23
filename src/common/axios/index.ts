"use client";
import axios from "axios";
import config from "../config";
import handleResponse from "./handleResponse";

const instance: any = axios.create({
  baseURL: config.apiUrl + "/",
});

instance.interceptors.request.use(
  (configReq: any) => {
    if (
      localStorage.getItem("token") != null &&
      localStorage.getItem("token") != undefined
    ) {
      configReq.headers.Authorization = `JWT ${localStorage.getItem("token")}`;
    }

    return configReq;
  },
  function (error: any) {
    const err = error.response ? error.response.data : "";
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res: any) => handleResponse(res),
  (err: any) => handleResponse(err.response)
);

export default instance;
