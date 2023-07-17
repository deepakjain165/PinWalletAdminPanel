import {
  Get,
  getAPIUrl,
  Post,
  
} from "../../../../services/apiMethod";
const endpoint = {
  getMoveServiceMemberSetting: "api/settings/moveServiceMembers/get",
  getPartnerIdServiceMoveTo: "api/settings/moveServiceMembers/grid",
  getupdatedMoveServiceMemberSetting:"updateMoveServiceMemberSetting",
};

export const getPartnerIdServiceMoveTo = (param = "") => {
  const url = getAPIUrl(endpoint.getPartnerIdServiceMoveTo, param);
  return Get(url);
};
export const getMoveServiceMemberSetting = (data, param = "") => {
  const url = getAPIUrl(endpoint.getMoveServiceMemberSetting, param);
  return Post(url, data);
};
export const getupdatedMoveServiceMemberSetting = (data, param = "") => {
    const url = getAPIUrl(endpoint.getupdatedMoveServiceMemberSetting, param);
    return Post(url, data);
  };
