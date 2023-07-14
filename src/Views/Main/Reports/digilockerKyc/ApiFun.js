import { Post, getAPIUrl } from "../../../../services/apiMethod"
import { endpoint } from "../../../../services/global"

export const getDigiLockerKycReport=(data,param="")=>{
    const url=getAPIUrl(endpoint.digilockerKyc,param)
    return Post(url,data)
}