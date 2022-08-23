import axios from "axios";
import config from "../../config";

let token = JSON.parse(localStorage.getItem("agroapitk") || "");

const requestHeader = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const getTenants = (limit: number, page: number, query: string | number) =>
axios.get(`${config.baseUrl}/viewtenants?page=${page}&limit=${limit}&query=${query}`, requestHeader).then((res) => res.data);
