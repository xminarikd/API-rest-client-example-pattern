import axios from "axios";
import CONFIG from "./config";

/* ----GLOBAL-FUNCTION-TO-PROCESS-REQUEST------------------------------------------------------ */

const requestMiddleware = (customConfig, requestAttrs) => {
  const useConfig = { ...CONFIG, ...customConfig };

  if (!useConfig.requestProcess) {
    return requestAttrs;
  }

  return useConfig.requestProcess(requestAttrs);
};

/* -----REST-FUNCTIONS--------------------------------------------------------------- */

export function get(config, url, params, options = {}) {
  return axios.request({
    method: "GET",
    ...requestMiddleware(config, { url, params, ...options }),
  });
}

export function post(config, url, data, options = {}){
  return axios.request({
    method: "POST",
    ...requestMiddleware(config, { url, data, ...options }),
  });
};

export function put(config, url, data, options = {}){
  return axios.request({
    method: "PUT",
    ...requestMiddleware(config, { url, data, ...options }),
  });
};

export function delete(config, url, data, options = {}){
  return axios.request({
    method: "DELETE",
    ...requestMiddleware(config, { url, data, ...options }),
  });
};

export default { get, post, put, delete, requestProcess };
