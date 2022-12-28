
// this function is not neccessary. If it is not defined, input request parameters will be just passed to reqest without preprocesing.
export function requestProcess(input) {
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

export default {
  baseURL: "",
  basePath: "/api",
  version: "v2",
  requestProcess: requestProcess
};
