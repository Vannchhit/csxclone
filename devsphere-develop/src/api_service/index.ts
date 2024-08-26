/* eslint-disable @typescript-eslint/ban-types */
import { handleAxiosError } from "@src/util/errorUtil";
import { useAuthStore } from "@src/zustand/auth";
import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.APP_API_URL,
  timeout: 60000,
});

export const get = async <Query = {}>(url: string, query?: Query) => {
  try {
    const token = useAuthStore.getState().auth.token;
    const response = await instance({
      method: "get",
      url: url,
      params: query,
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    }).then((response) => response?.data);
    return response;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const post = <Body = {}, Query = {}>(
  url: string,
  body?: Body,
  query?: Query
) => {
  try {
    const token = useAuthStore.getState().auth.token;
    const response = instance
      .post(url, body, {
        params: query,
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      })
      .then((response) => response?.data);
    return response;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const put = <Body>(url: string, body: Body) => {
  try {
    const token = useAuthStore.getState().auth.token;
    const response = instance
      .put(url, body, {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      })
      .then((response) => response?.data);

    return response;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const remove = (url: string) => {
  try {
    const token = useAuthStore.getState().auth.token;
    const response = instance
      .delete(url, {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      })
      .then((response) => response?.data);
    return response;
  } catch (error) {
    handleAxiosError(error);
  }
};
