import axios from "axios";
import CONFIG from "./config";

/* ----GLOBAL-FUNCTION-TO-PROCESS-REQUEST------------------------------------------------------ */

function requestProcess(input) {
  const config = this;
  const output = input;

  if (config.baseURL) {
    output.baseURL = config.baseURL;
  }

  /*
   *
   * MAGIC
   *
   */
  return output;
}

const requestMiddleware = (customConfig, requestAttrs) => {
  const useConfig = { ...CONFIG, requestProcess, ...customConfig };

  if (!useConfig.requestProcess) {
    return requestAttrs;
  }

  return useConfig.requestProcess(requestAttrs);
};

/* -----REST-FUNCTIONS--------------------------------------------------------------- */

function get(config, url, params, options = {}) {
  return axios.request({
    method: "GET",
    ...requestMiddleware(config, { url, params, ...options }),
  });
}

const post = (config, url, data, options = {}) => {
  return axios.request({
    method: "POST",
    ...requestMiddleware(config, { url, data, ...options }),
  });
};

export { get, post, requestProcess };
