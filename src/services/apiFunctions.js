import {  Delete, Get, getAPIUrl, Post, Put } from './apiMethod'
import {  endpoint } from './global'

export const getPackageListdata=(param="")=>{
    const url=getAPIUrl(endpoint.packageListDropData,param)
    return Get(url)
}

export const getExcelSheetOfTxn=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Post(url,data)
}
export const getRechargeCommission=(data,param="")=>{
    const url=getAPIUrl(endpoint.rechargeCommission,param)
    return Post(url,data)
}
export const getRechargeOpertatorsApi=(data,param="")=>{
    const url=getAPIUrl(endpoint.rechargeOperators,param)
    return Post(url,data)
}
export const getRechargeApiList=(param="")=>{
    const url=getAPIUrl(endpoint.rechargeApiList,param)
    return Get(url)
}
export const updateRechargeOperator=(data,param="")=>{
    const url=getAPIUrl(endpoint.updateRechargeOperator,param)
    return Put(url,data)
}
export const getdmtsurcharg=(data,param="")=>{
    const url=getAPIUrl(endpoint.getDmtsurcharge,param)
    return Post(url,data)
}

export const addsurcharge=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Post(url,data)
}
export const deletedmtsurcharge=(param="")=>{
    const url=getAPIUrl(endpoint.updateDmtsurchargeFun,param)
    return Delete(url)
}
export const updatesurcharge=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Put(url,data)
}
export const getsurchargeById=(param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Get(url)
}
export const getupdateRechargeCommission=(data,param="")=>{
    const url=getAPIUrl(endpoint.updaterechargeCommission,param)
    return Post(url,data)
}


