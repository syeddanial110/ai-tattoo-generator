import axios from "axios";
import { getToken } from "./Auth";
import API from "./interceptor";

export const BASEURL = "https://sports-new-production.up.railway.app/api";
// export const BASEURL = "https://wcx78p18-5000.inc1.devtunnels.ms/api";
// export const ImageBaseUrl = "https://wcx78p18-5000.inc1.devtunnels.ms/";
export const ImageBaseUrl = "https://sports-new-production.up.railway.app/";
export const apiBaseUrl = `${BASEURL}`;

export function getCommonHeaders(h) {
  var token = getToken();

  var headers = {
    "Content-Type": "application/json",
  };
  if (token) headers.Authorization = `Bearer ${getToken()}`;
  if (h) headers = { ...h, ...headers };
  return headers;
}

export function getCommonHeadersFormData(h, noDefaultHeaders = false) {
  var token = getToken();

  var myHeaders = new Headers();
  myHeaders.append("accept", "*/*");
  myHeaders.append("Authorization", "Bearer " + getToken());
  var headers = {
    method: "PUT",
    headers: myHeaders,
    redirect: "follow",
  };
  if (!noDefaultHeaders)
    Object.assign(headers, { "Content-Type": "multipart/form-data" });
  if (token) headers.Authorization = `Bearer ${token}`;
  if (h) headers = { ...h, ...headers };
  return headers;
}

export function getCommonCustomHeaders(customHeaders = {}) {
  const token = getToken();

  const defaultHeaders = {
    "Content-Type": "application/json", // default
  };

  if (token) {
    defaultHeaders.Authorization = `Bearer ${token}`;
  }

  // Merge custom headers (like multipart/form-data) over default
  return { ...defaultHeaders, ...customHeaders };
}

export function apiPost(endpoint, body, onSuccess, onFailure, headers) {
  API.post(apiBaseUrl + endpoint, body, {
    headers: getCommonCustomHeaders(headers),
  })
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error) => {
      return onFailure(error);
    });
}

export function apiGet(endpoint, onSuccess, onFailure, headers) {
  API.get(apiBaseUrl + endpoint, {
    headers: getCommonHeaders(headers),
  })
    .then((response) => {
      if (onSuccess) onSuccess(response.data);
    })
    .catch((error) => {
      console.log("error", error);
      if (onFailure) onFailure(error);
    });
}

export function apiPut(endPoint, body, onSuccess, onFailure, headers) {
  API.put(apiBaseUrl + endPoint, body, {
    headers: getCommonCustomHeaders(headers),
  })
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error) => {
      if (onFailure) onFailure(error);
    });
}

export function apiDelete(endpoint, onSuccess, onFailure, headers) {
  API.delete(apiBaseUrl + endpoint, {
    headers: getCommonHeaders(headers),
  })
    .then((response) => {
      if (onSuccess) onSuccess(response.data);
    })
    .catch((error) => {
      if (onFailure) onFailure(error);
    });
}

export async function fileUpload(endpoint, file) {
  var token = getToken();

  var myHeaders = new Headers();
  myHeaders.append("accept", "*/*");
  myHeaders.append("Contect-Type", "multipart/form-data");
  myHeaders.append("Authorization", "Bearer " + token);
  var formdata = new FormData();
  formdata.append("image", file);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return fetch(apiBaseUrl + endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
}
