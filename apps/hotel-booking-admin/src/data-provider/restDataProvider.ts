import { fetchUtils, Admin, Resource, Options } from "react-admin";
import amplicationRestProvider from "ra-data-rest-amplication";
import { CREDENTIALS_LOCAL_STORAGE_ITEM } from "../constants";

const httpClient = (url: any, options: Options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem(CREDENTIALS_LOCAL_STORAGE_ITEM);

  options.headers.set("Authorization", token);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = amplicationRestProvider(
  `${import.meta.env.VITE_REACT_APP_SERVER_URL}/api`,
  httpClient
);

export default dataProvider;
