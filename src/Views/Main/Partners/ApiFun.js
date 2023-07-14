import { getAPIUrl,Get,Post,Delete,Put, FormData } from "../../../services/apiMethod"
import { endpoint } from "../../../services/global"

export const getPartnerList=(data,param="")=>{
    const url=getAPIUrl(endpoint.partnerList,param)
    return Post(url,data)
}
export const changePartnerStatus=(param="")=>{
    const url=getAPIUrl(endpoint.changePartnerStatus,param)
    return Post(url)
}
export const getPartnerIpsList=(data,param="")=>{
    const url=getAPIUrl(endpoint.partnerIps,param)
    return Post(url,data)
}
export const generatePartnerKey=(param="")=>{
    const url=getAPIUrl(endpoint.generateKey,param)
    return Get(url)
}
export const addIp=(data,param="")=>{
    const url=getAPIUrl(endpoint.addIp,param)
    return Post(url,data)
}
export const deleteIp=(param="")=>{
    const url=getAPIUrl(endpoint.deleteIp,param)
    return Delete(url)
}
export const updateIpDetail=(data,param="")=>{
    const url=getAPIUrl(endpoint.updateIp,param)
    return Put(url,data)
}
export const changeIpstatusDetail=(param="")=>{
    const url=getAPIUrl(endpoint.changeIpStatus,param)
    return Post(url)
}
export const getDocstatus=(param="")=>{
    const url=getAPIUrl(endpoint.getDocStatus,param)
    return Get(url)
}
export const getPartnerDoc=(param="")=>{
    const url=getAPIUrl(endpoint.getDocuments,param)
    return Get(url)
}
export const getPartnercallbackDetail=(param="")=>{
    const url=getAPIUrl(endpoint.partneCallback,param)
    return Get(url)
}
export const getpartnerEvents=(param="")=>{
    const url=getAPIUrl(endpoint.callbackEventmaster,param)
    return Get(url)
}
export const updatePartnerCallback=(data,param="")=>{
    const url=getAPIUrl(endpoint.updatePartnerCallback,param)
    return Post(url,data)
}
export const agreementUpload=(data,param="")=>{
    const url=getAPIUrl(endpoint.docUpload,param)
    return FormData(url,data)
}
export const getPartnerServiceList=(param="")=>{
    const url=getAPIUrl(endpoint.partnerServiceList,param)
    return Get(url)
}
export const getPartnerDetail=(param="")=>{
    const url=getAPIUrl(endpoint.partnerfun,param)
    return Get(url)
}

export const updatePartnerDetail=(data,param="")=>{
    const url=getAPIUrl(endpoint.editPartner,param)
    return FormData(url,data)
}