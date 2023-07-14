import { Get, getAPIUrl } from "../../../../services/apiMethod"
import { endpoint } from "../../../../services/global"

export const getLiveRecharge=(data,param="")=>{
    const url=getAPIUrl(endpoint.liveRecharge,param)
    return Get(url)
}