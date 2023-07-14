import { Post, getAPIUrl } from "../../../../services/apiMethod"
import { endpoint } from "../../../../services/global"

export const getAccountVerification=(data,param="")=>{
    const url=getAPIUrl(endpoint.accountverification,param)
    return Post(url,data)
}