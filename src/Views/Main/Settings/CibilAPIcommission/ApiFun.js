import { Post, getAPIUrl } from "../../../../services/apiMethod"

const cibilEndPoint={
    cibilapicomm:"api/settings/getCibilApiComm/"
}
export const GetCibilApiComm=(param="")=>{
    const url=getAPIUrl(cibilEndPoint.cibilapicomm,param)
    return Post(url)
} 
// export const GetPartnerTxnbyId=(data,param="")=>{
//     const url=getAPIUrl(endpoint.txnById,param)
//     return Post(url,data)
// } 