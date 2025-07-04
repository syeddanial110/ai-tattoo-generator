import axios from "axios";
import { getToken } from "./Auth";
import { pathLocations } from "@/utils/navigation";

const BASEURL = "https://sports-new-production.up.railway.app/api";
// const BASEURL = "https://wcx78p18-5000.inc1.devtunnels.ms/api";
const API = axios.create({ baseURL: BASEURL });

API.interceptors.request.use(
  async (config) => {
    const tokenId = getToken();
    if (tokenId) {
      config.headers["Authorization"] = `Bearer ${tokenId}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      window.location.href = pathLocations.login;
    }
    return Promise.reject(error);
  }
);

export default API;
