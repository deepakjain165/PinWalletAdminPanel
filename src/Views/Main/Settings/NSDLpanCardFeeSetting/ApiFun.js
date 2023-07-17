import { Get, getAPIUrl } from "../../../../services/apiMethod"

const nsdlendpoint={
    nsdlPanFee:"api/settings/getNSDLPanCardFee/"
}
export const getNsdlPanfee=(param="")=>{
    const url=getAPIUrl(nsdlendpoint.nsdlPanFee,param)
    return Get(url)
} 
// export const GetPartnerTxnbyId=(data,param="")=>{
//     const url=getAPIUrl(endpoint.txnById,param)
//     return Post(url,data)
// } 