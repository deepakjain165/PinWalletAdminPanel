import { Post, getAPIUrl } from "../../../../services/apiMethod"
import { endpoint } from "../../../../services/global"

export const getCreditCardTransactions=(data,param="")=>{
    const url=getAPIUrl(endpoint.creditCardtxn,param)
    return Post(url,data)
}