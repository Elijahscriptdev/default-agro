import axios from "axios";
import config from "../../config";

let token = JSON.parse(localStorage.getItem("agroapitk") || "");

const requestHeader = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const getUsers = (limit: number, page: number, query: string | number) =>
  axios
    .get(
      `${config.baseUrl}/viewusers?page=${page}&limit=${limit}&query=${query}`,
      requestHeader
    )
    .then((res) => res.data);

export const getTenants = () =>
  axios
    .get(`${config.baseUrl}/viewtenants`, requestHeader)
    .then((res) => res.data);
