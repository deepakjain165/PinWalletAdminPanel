import { Post,getAPIUrl } from "../../../../services/apiMethod"
const endpoint={
    updaterechargeCommission:"api/settings/updateRechargeComm",
    rechargeCommission:"api/settings/getRechargeComm",
}
export const getRechargeCommission=(data,param="")=>{
    const url=getAPIUrl(endpoint.rechargeCommission,param)
    return Post(url,data)
}
export const getupdateRechargeCommission=(data,param="")=>{
    const url=getAPIUrl(endpoint.updaterechargeCommission,param)
    return Post(url,data)
}
