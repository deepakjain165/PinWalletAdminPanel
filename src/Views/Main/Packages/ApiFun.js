import { Delete, Get, Post, Put, getAPIUrl } from "../../../services/apiMethod"
import { endpoint } from "../../../services/global"

export const changePackageStatuseById=(param="")=>{
    const url=getAPIUrl(endpoint.changeStatus,param)
    return Post(url)
}
export const deletePackage=(param="")=>{
    const url=getAPIUrl(endpoint.Packagefun,param)
    return Delete(url)
}
export const getPackageList=(data,param="")=>{
    const url=getAPIUrl(endpoint.packages,param)
    return Post(url,data)
}
export const addPackage=(data,param="")=>{
    const url=getAPIUrl(endpoint.Packagefun,param)
    return Post(url,data)
}

export const getPackageById=(param="")=>{
    const url=getAPIUrl(endpoint.Packagefun,param)
    return Get(url)
}
export const updatePackageById=(data,param="")=>{
    const url=getAPIUrl(endpoint.Packagefun,param)
    return Put(url,data)
}