import { Post, getAPIUrl } from "../../../../services/apiMethod"
import { endpoint } from "../../../../services/global"

export const getVerificationApiData=(data,param="")=>{
    const url=getAPIUrl(endpoint.verificationApi,param)
    return Post(url,data)
}