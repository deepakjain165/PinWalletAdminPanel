import { getAPIUrl,Get,Post,Put,Delete } from "../../../services/apiMethod"
import { endpoint } from "../../../services/global"

export const getServicesList=(data,param="")=>{
    const url=getAPIUrl(endpoint.services,param)
    return Post(url,data)
}
export const getServiceById=(param="")=>{
    const url=getAPIUrl(endpoint.servicefun,param)
    return Get(url)
}
export const addService=(data,param="")=>{
    const url=getAPIUrl(endpoint.servicefun,param)
    return Post(url,data)
}
export const updateServiceById=(data,param="")=>{
    const url=getAPIUrl(endpoint.servicefun,param)
    return Put(url,data)
}
export const deleteService=(param="")=>{
    const url=getAPIUrl(endpoint.servicefun,param)
    return Delete(url)
}
export const changeServiceStatuseById=(param="")=>{
    const url=getAPIUrl(endpoint.changeServiceStatus,param)
    return Post(url)
}