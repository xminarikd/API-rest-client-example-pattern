import { routes } from "../Routes";
import { get } from "../client";
import CONFIG from "./config";

export function retrieve() {
  return get(CONFIG, routes.tagsRoute).then((res) => res.data);
}

export default {
  retrieve,
};
