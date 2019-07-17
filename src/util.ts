import qs from "query-string";

export const getParsedUrlQuery = (params: {}) => {
  return "?" + qs.stringify(params).replace(/%2C/g, ",");
};

export const { parse: parseQueryToObj } = qs;
