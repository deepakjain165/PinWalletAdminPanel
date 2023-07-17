import { Get, getAPIUrl } from "../../../../services/apiMethod"

const settlementEndpoint={
    settlement:"api/settings/settlementProcessSetting/getPartners",
    getService:"api/settings/settlementProcessSetting/getServices/"
}
export const getpartner=(param="")=>{
    const url=getAPIUrl(settlementEndpoint.settlement,param)
    return Get(url)
} 
export const getService=(param="")=>{
    const url=getAPIUrl(settlementEndpoint.getService,param)
    return Get(url)
} 
// export const GetPartnerTxnbyId=(data,param="")=>{
//     const url=getAPIUrl(endpoint.txnById,param)
//     return Post(url,data)
// } 