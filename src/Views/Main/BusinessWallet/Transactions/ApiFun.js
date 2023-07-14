import { Post, getAPIUrl } from "../../../../services/apiMethod"
import { endpoint } from "../../../../services/global"

export const GetPartnerTxn=(data,param="")=>{
    const url=getAPIUrl(endpoint.partnerTxn,param)
    return Post(url,data)
} 
export const GetPartnerTxnbyId=(data,param="")=>{
    const url=getAPIUrl(endpoint.txnById,param)
    return Post(url,data)
} 