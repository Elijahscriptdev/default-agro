import axios from "axios";
import config from "../../config";

let token = JSON.parse(localStorage.getItem("agroapitk") || "");

const requestHeader = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const getVerificationList = (
  limit: number,
  page: number,
  selectedTenant: string,
  selectedStatus: string,
  selectedPartner: string,
  selectedProvider: string,
  selectedState: string,
  selectedCrop: string,
  query: string | number
) =>
  axios
    .get(
      `${config.baseUrl}/data?page=${page}&limit=${limit}&tenant=${selectedTenant}&partner=${selectedPartner}&provider=${selectedProvider}&state=${selectedState}&crop=${selectedCrop}&overall_status=${selectedStatus}&query=${query}`,
      requestHeader
    )
    .then((res) => res.data);

export const getSummary = () =>
  axios.get(`${config.baseUrl}/summary`, requestHeader).then((res) => res.data);

export const getEntities = () =>
  axios
    .get(`${config.baseUrl}/entities`, requestHeader)
    .then((res) => res.data);
