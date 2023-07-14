import { Post, getAPIUrl } from "../../../../services/apiMethod"
import { endpoint } from "../../../../services/global"

export const GetFundRequests=(data,param="")=>{
    const url=getAPIUrl(endpoint.fundRequests,param)
    return Post(url,data)
} 