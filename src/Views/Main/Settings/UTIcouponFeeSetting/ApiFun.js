import { Get, getAPIUrl } from "../../../../services/apiMethod"

const utiEndpoint={
    utiCouponFee:"api/settings/getUTICouponFee/"
}
export const getutiCouponFee=(param="")=>{
    const url=getAPIUrl(utiEndpoint.utiCouponFee,param)
    return Get(url)
} 
// export const GetPartnerTxnbyId=(data,param="")=>{
//     const url=getAPIUrl(endpoint.txnById,param)
//     return Post(url,data)
// } 