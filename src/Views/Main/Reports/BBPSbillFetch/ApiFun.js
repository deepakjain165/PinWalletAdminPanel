import { Post, getAPIUrl } from "../../../../services/apiMethod"
import { endpoint } from "../../../../services/global"

export const getBbpsBillFetchTxn=(data,param="")=>{
    const url=getAPIUrl(endpoint.bbpsbillfetch,param)
    return Post(url,data)
}