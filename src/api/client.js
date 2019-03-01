import _ from "lodash";
import qs from "qs";

import APIConstants from "./constants";
import APIUtils from "./utils";

function convertQueryString(queryParams = {}) {
  return qs.stringify(queryParams, { encode: true });
}

function fetchRequest(url, fetchParams, resolve, reject) {
  fetch(url, fetchParams)
    .then(response => {
      if (!response.ok) {
        return reject(JSON.parse(response._bodyText).errors);
      }

      return response;
    })
    .then(response => response.json())
    .then(responseData => {
      resolve(responseData);
    })
    .catch(error => {
      reject(error);
    });
}


class APIClient {
  constructor(url, method) {
    this.url = url;
    this.method = method;
  }

  sendRequest(headers = {}, params = {}) {
    return fetchRequest.bind(this)(headers, params, false);
  }
}

/* Export ==================================================================== */
export default APIClient;
