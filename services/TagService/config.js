import { pipe } from "../helper";
import { requestProcess } from "../AxiosClient/config";

// example of extdending default preprocessing function with aditional preprocessing, for example replecing ids in url,...
function replaceIds(obj) {
    // MAGIC
  return obj;
}

export default {
  baseURL: "",
  basePath: "/api",
  version: "v2",
  requestProcess: pipe(requestProcess, replaceIds),
};
