import { Post, getAPIUrl } from "../../../services/apiMethod"
import { endpoint } from "../../../services/global"

export const GetRoles=(data,param="")=>{
    const url=getAPIUrl(endpoint.allroles,param)
    return Post(url,data)
} 
export const GetMenuPermission=(data,param="")=>{
    const url=getAPIUrl(endpoint.menuPermission,param)
    return Post(url,data)
}
export const allowPermissions=(data,param="")=>{
    const url=getAPIUrl(endpoint.saveMenuRight,param)
    return Post(url,data)
}