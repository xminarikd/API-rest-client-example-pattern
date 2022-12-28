import { pipe } from "../helper";
import { requestProcess } from "../AxiosClient";

function replaceIds(obj) {
    // MAGIC
  return obj;
}

export default {
  baseURL: "",
  basePath: "/api",
  version: "v2",
  requestMiddleware: pipe(requestProcess, replaceIds),
};
