import { Delete, Post, Put, getAPIUrl } from "../../../../services/apiMethod"

export const DynamicUpiEndpoint={
    DynamicUpiSurcharge:"api/settings/dynamicUpiSurchargeSetting/grid",
    DynamicUpiSurchargeFun:"api/settings/dynamicUpiSurchargeSetting"
}
export const getDynamicUpiSurcharge=(data,param="")=>{
    const url=getAPIUrl(DynamicUpiEndpoint.DynamicUpiSurcharge,param)
    return Post(url,data)
}
export const addsurcharge=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Post(url,data)
}
export const deleteDynamicUpisurcharge=(param="")=>{
    const url=getAPIUrl(DynamicUpiEndpoint.DynamicUpiSurchargeFun,param)
    return Delete(url)
}
export const updatesurcharge=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Put(url,data)
}
