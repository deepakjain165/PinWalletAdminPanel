import { Post, getAPIUrl } from "../../../../services/apiMethod"
import { endpoint } from "../../../../services/global"

export const getBbpsTxn=(data,param="")=>{
    const url=getAPIUrl(endpoint.bbpsTxn,param)
    return Post(url,data)
}