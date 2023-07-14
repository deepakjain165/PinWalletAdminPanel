import { Post, getAPIUrl } from "../../../../services/apiMethod"
import { endpoint } from "../../../../services/global"

export const getDmtTransactions=(data,param="")=>{
    const url=getAPIUrl(endpoint.DmtTxnReport,param)
    return Post(url,data)
}