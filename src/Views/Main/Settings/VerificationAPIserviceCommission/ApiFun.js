import { Post,getAPIUrl  } from "../../../../services/apiMethod";
const endpoint={
    getVerificationApiServiceCommission:"api/settings/getVerificationAPIService",
    getupdateVerificationApiServiceCommission:"api/settings/updateVerificationAPIServiceComm"
}
export const getVerificationApiServiceCommission=(data,param="")=>{
    const url=getAPIUrl(endpoint.getVerificationApiServiceCommission,param)
    return Post(url,data)
}
export const getupdateVerificationApiServiceCommission=(data,param="")=>{
    const url=getAPIUrl(endpoint.getupdateVerificationApiServiceCommission,param)
    return Post(url,data)
}