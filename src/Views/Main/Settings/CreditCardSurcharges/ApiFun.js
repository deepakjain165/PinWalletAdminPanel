import { Delete, Post, Put, getAPIUrl } from "../../../../services/apiMethod"

export const creditEndpoint={
    creditCardSurcharge:"api/settings/creditCardSurchargeSetting/grid",
    addsurchargeForCredit:"api/settings/creditCardSurchargeSetting",
    creditCardSurchargeFun:"api/settings/creditCardSurchargeSetting"
}
export const getCreditCardSurcharge=(data,param="")=>{
    const url=getAPIUrl(creditEndpoint.creditCardSurcharge,param)
    return Post(url,data)
}
export const addsurcharge=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Post(url,data)
}
export const deleteCreditsurcharge=(param="")=>{
    const url=getAPIUrl(creditEndpoint.creditCardSurchargeFun,param)
    return Delete(url)
}
export const updatesurcharge=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Put(url,data)
}
