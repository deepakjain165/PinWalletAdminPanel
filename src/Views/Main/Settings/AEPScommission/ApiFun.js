import { Delete, Post, Put, getAPIUrl } from "../../../../services/apiMethod"

export const aepsEndpoint={
    aepsCommission:"api/settings/aepsCommissionSetting/grid",
    addsurchargeForAeps:"api/settings/aepsCommissionSetting",
}
export const getAepsSurcharge=(data,param="")=>{
    const url=getAPIUrl(aepsEndpoint.aepsCommission,param)
    return Post(url,data)
}
export const addsurcharge=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Post(url,data)
}
export const deleteAepssurcharge=(param="")=>{
    const url=getAPIUrl(aepsEndpoint.addsurchargeForAeps,param)
    return Delete(url)
}
export const updatesurcharge=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Put(url,data)
}
