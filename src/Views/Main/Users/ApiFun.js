import { Delete, getAPIUrl,Get,Post,Put } from "../../../services/apiMethod"
import { endpoint } from "../../../services/global"

export const DeleteUser=(param="")=>{
    const url=getAPIUrl(endpoint.userfun,param)
    return Delete(url)
}
export const changeUserStatus=(param="")=>{
    const url=getAPIUrl(endpoint.changeUserStatus,param)
    return Post(url)
}
export const getUsers=(data,param="")=>{
    const url=getAPIUrl(endpoint.users,param)
    return Post(url,data)
}
export const addUser=(data,param="")=>{
    const url=getAPIUrl(endpoint.addUser,param)
    return Post(url,data)
}
export const EditUser=(data,param="")=>{
    const url=getAPIUrl(endpoint.userfun,param)
    return Put(url,data)
}

export const getUserById=(param="")=>{
    const url=getAPIUrl(endpoint.userfun,param)
    return Get(url)
}
export const GetUserRoles=(param="")=>{
    const url=getAPIUrl(endpoint.getUserRoles,param)
    return Get(url)
}