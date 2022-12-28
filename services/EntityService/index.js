import { paramsSerializer } from "../helper";
import { routes } from "../Routes";
import { get, post } from "../AxiosClient";
import CONFIG from "./config";

export function retrieve(params = {}) {
  return get(CONFIG, routes.provideRoute, params, { paramsSerializer }).then(
    (res) => res.data
  );
}

export function count(params) {
  return get(CONFIG, `${routes.provideRoute}/count`, params, {
    paramsSerializer,
  }).then((res) => res.data);
}

export function deleteSingle(itemID) {
  return post(CONFIG, `${routes.deleteRoute}/${itemID}`, {
    _method: "delete",
  }).then((res) => res.data);
}

export function deleteMultiple(items) {
  return post(CONFIG, routes.deleteMultipleRoute, {
    ids: items,
    _method: "delete",
  }).then((res) => res.data);
}

export default {
  retrieve,
  count,
  deleteSingle,
  deleteMultiple,
};
