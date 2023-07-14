import { Delete, Post, Put, getAPIUrl } from "../../../../services/apiMethod"

export const UpidmtEndpoint={
    upiDmt:"api/settings/upiDmtSurchargeSetting/grid",
    upiDmtfun:"api/settings/upiDmtSurchargeSetting",
}
export const getUpidmtSurcharge=(data,param="")=>{
    const url=getAPIUrl(UpidmtEndpoint.upiDmt,param)
    return Post(url,data)
}
export const addsurcharge=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Post(url,data)
}
export const deleteUpidmtsurcharge=(param="")=>{
    const url=getAPIUrl(UpidmtEndpoint.upiDmtfun,param)
    return Delete(url)
}
export const updatesurcharge=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Put(url,data)
}
