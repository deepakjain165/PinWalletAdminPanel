import { Get, Post, getAPIUrl } from "../../../../services/apiMethod"
import { endpoint } from "../../../../services/global"

export const getChargeBackAdded=(data,param="")=>{
    const url=getAPIUrl(endpoint.chargeBackAdded,param)
    return Post(url,data)
}
export const getChargeBackrrnDetails=(param="")=>{
    const url=getAPIUrl(endpoint.rrnDetails,param)
    return Get(url)
}