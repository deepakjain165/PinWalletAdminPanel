import { Post, getAPIUrl } from "../../../../services/apiMethod"
import { endpoint } from "../../../../services/global"

export const getRechargeTransactions=(data,param="")=>{
    const url=getAPIUrl(endpoint.rechargeTxn,param)
    return Post(url,data)
}