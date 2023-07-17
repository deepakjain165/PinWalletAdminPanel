import { getAPIUrl, Post } from "../../../../services/apiMethod";
const endpoint = {
  updateBBPScommission: "api/settings/updateBbpsServiceComm",
  getBBPSCommission: "api/settings/getBbpsService",
};
export const getBBPSCommission = (data, param = "") => {
  const url = getAPIUrl(endpoint.getBBPSCommission, param);
  return Post(url, data);
};
export const updateBBPScommission = (data, param = "") => {
  const url = getAPIUrl(endpoint.updateBBPScommission, param);
  return Post(url, data);
};
