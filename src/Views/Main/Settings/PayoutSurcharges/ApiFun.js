import { Delete, Post, Put, getAPIUrl } from "../../../../services/apiMethod"

export const PayoutEndpoint={
    PayoutSurcharge:"api/settings/payoutSurchargeSetting/grid",
    PayoutSurchargefun:"api/settings/payoutSurchargeSetting",
}
export const getPayoutSurcharge=(data,param="")=>{
    const url=getAPIUrl(PayoutEndpoint.PayoutSurcharge,param)
    return Post(url,data)
}
export const addsurcharge=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Post(url,data)
}
export const deletePayoutSurcharge=(param="")=>{
    const url=getAPIUrl(PayoutEndpoint.PayoutSurchargefun,param)
    return Delete(url)
}
export const updatesurcharge=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Put(url,data)
}
