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

function performRequest(headers, params, authorize, authType = null) {
  return new Promise(async (resolve, reject) => {
    const fetchParams = {
      method: this.method,
      headers
    };

    if (_.size(params) > 0) {
      switch (this.method) {
        case APIConstants.HTTPMethod.GET:
        case APIConstants.HTTPMethod.DELETE:
          this.url = `${this.url}?${convertQueryString(params)}`;

          break;
        case APIConstants.HTTPMethod.PATCH:
        case APIConstants.HTTPMethod.POST:
        case APIConstants.HTTPMethod.PUT:
          fetchParams.body = JSON.stringify(params);

          break;
        default:
          break;
      }
    }

    if (authorize) {
      APIUtils.getSession().then(session => {
        fetchParams.headers.Authorization = `${authType} ${
          session.access_token
        }`;

        fetchRequest(this.url, fetchParams, resolve, reject);
      });
    } else {
      fetchRequest(this.url, fetchParams, resolve, reject);
    }
  });
}

class APIClient {
  constructor(url, method) {
    this.url = url;
    this.method = method;
  }

  sendAuthenticatedRequest(authType, headers = {}, params = {}) {
    return performRequest.bind(this)(headers, params, true, authType);
  }

  sendRequest(headers = {}, params = {}) {
    return performRequest.bind(this)(headers, params, false);
  }
}

/* Export ==================================================================== */

module.exports = APIClient;
module.exports.details = {
  title: "APIClient"
};
