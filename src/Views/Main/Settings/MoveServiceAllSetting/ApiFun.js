import { Get,Post,getAPIUrl } from "../../../../services/apiMethod";
const endpoint ={
    getMoveServiceAll: "api/settings/moveServiceAllMembers/get",
    getServiceMoveTo: "api/settings/moveServiceMembers/grid",
    getupdatedMoveServiceMemberSetting:"updateMoveServiceMemberSetting",
}
export const getServiceMoveTo = (param = "") => {
    const url = getAPIUrl(endpoint.getServiceMoveTo, param);
    return Get(url);
  };
  export const getMoveServiceAll = (param = "") => {
    const url = getAPIUrl(endpoint.getMoveServiceAll, param);
    return Get(url);
  };
  export const getupdatedMoveServiceMemberSetting = (data, param = "") => {
      const url = getAPIUrl(endpoint.getupdatedMoveServiceMemberSetting, param);
      return Post(url, data);
    };