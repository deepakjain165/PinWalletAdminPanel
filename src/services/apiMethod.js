import ApiService from "./Axios";

export const getHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
    // 'Access-Control-Allow-Origin': '*',
  };
  return headers;
};

export const Get = (url) =>
  ApiService.get(url, { headers: getHeaders() });

export const Post = (url, data) =>
  ApiService.post(url, data, { headers: getHeaders()});

export const Patch = (url, data) =>
  ApiService.patch(url, data, { headers: getHeaders() });

  export const Put = (url, data) =>
  ApiService.put(url, data, { headers: getHeaders() }); 
  
export const Delete = (url) =>
  ApiService.delete(url, { headers: getHeaders() });

export const getAPIUrl = (url, params = "") => {
  return url + `${params}`;
};
export const getErrors = (error) => {
  const errorData = error.response.data.error;
  const errors = {};
  Object.keys(errorData).forEach((key) => {
    errors[key] = errorData[key];
  });
  return errors;
};
