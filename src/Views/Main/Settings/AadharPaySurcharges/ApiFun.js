import { Delete, Post, Put, getAPIUrl } from "../../../../services/apiMethod"

export const aadharPayEndpoint={
    aadharpay:"api/settings/aepsCommissionSetting/grid",
    aadharpayfun:"api/settings/aepsCommissionSetting",
}
export const getAadharPaySurcharge=(data,param="")=>{
    const url=getAPIUrl(aadharPayEndpoint.aadharpay,param)
    return Post(url,data)
}
export const addsurcharge=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Post(url,data)
}
export const deleteAadharsurcharge=(param="")=>{
    const url=getAPIUrl(aadharPayEndpoint.aadharpayfun,param)
    return Delete(url)
}
export const updatesurcharge=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Put(url,data)
}
