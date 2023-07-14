import { Post, getAPIUrl } from "../../../../services/apiMethod"
import { endpoint } from "../../../../services/global"

export const getDynamicupiGen=(data,param="")=>{
    const url=getAPIUrl(endpoint.dynamicUpiGenerated,param)
    return Post(url,data)
}