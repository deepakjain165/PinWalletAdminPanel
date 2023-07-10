import {  Delete, Get, getAPIUrl, Post, Put } from './apiMethod'
import {  endpoint } from './global'


export const getPayoutTransactions=(data,param="")=>{
    const url = getAPIUrl(endpoint.payoutTransaction,param);
    return Post(url, data);
}
export const getDynamicUoiTrxReport=(data,param="")=>{
    const url = getAPIUrl(endpoint.dynamicUpiTrxReport,param);
    return Post(url, data);
}
export const getRechargeTransactions=(data,param="")=>{
    const url=getAPIUrl(endpoint.rechargeTxn,param)
    return Post(url,data)
}
export const getDmtTransactions=(data,param="")=>{
    const url=getAPIUrl(endpoint.DmtTxnReport,param)
    return Post(url,data)
}
export const getCreditCardTransactions=(data,param="")=>{
    const url=getAPIUrl(endpoint.creditCardtxn,param)
    return Post(url,data)
}
export const getBbpsBillFetchTxn=(data,param="")=>{
    const url=getAPIUrl(endpoint.bbpsbillfetch,param)
    return Post(url,data)
}
export const getBbpsTxn=(data,param="")=>{
    const url=getAPIUrl(endpoint.bbpsTxn,param)
    return Post(url,data)
}
export const getAccountVerification=(data,param="")=>{
    const url=getAPIUrl(endpoint.accountverification,param)
    return Post(url,data)
}
export const getDigiLockerKycReport=(data,param="")=>{
    const url=getAPIUrl(endpoint.digilockerKyc,param)
    return Post(url,data)
}
export const getVerificationApiData=(data,param="")=>{
    const url=getAPIUrl(endpoint.verificationApi,param)
    return Post(url,data)
}
export const getWalletPayoutData=(data,param="")=>{
    const url=getAPIUrl(endpoint.walletPayout,param)
    return Post(url,data)
}
export const getUPIDmtData=(data,param="")=>{
    const url=getAPIUrl(endpoint.upiDmtTxn,param)
    return Post(url,data)
}
export const getDynamicupiGen=(data,param="")=>{
    const url=getAPIUrl(endpoint.dynamicUpiGenerated,param)
    return Post(url,data)
}
export const getChargeBackAdded=(data,param="")=>{
    const url=getAPIUrl(endpoint.chargeBackAdded,param)
    return Post(url,data)
}
export const getLiveRecharge=(data,param="")=>{
    const url=getAPIUrl(endpoint.liveRecharge,param)
    return Get(url)
}
export const getChargeBackrrnDetails=(param="")=>{
    const url=getAPIUrl(endpoint.rrnDetails,param)
    return Get(url)
}
export const getPartnerList=(data,param="")=>{
    const url=getAPIUrl(endpoint.partnerList,param)
    return Post(url,data)
}
export const getPartnerIpsList=(data,param="")=>{
    const url=getAPIUrl(endpoint.partnerIps,param)
    return Post(url,data)
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
export const getPackageList=(data,param="")=>{
    const url=getAPIUrl(endpoint.packages,param)
    return Post(url,data)
}
export const addPackage=(data,param="")=>{
    const url=getAPIUrl(endpoint.Packagefun,param)
    return Post(url,data)
}
export const deletePackage=(param="")=>{
    const url=getAPIUrl(endpoint.Packagefun,param)
    return Delete(url)
}
export const getPackageById=(param="")=>{
    const url=getAPIUrl(endpoint.Packagefun,param)
    return Get(url)
}
export const updatePackageById=(data,param="")=>{
    const url=getAPIUrl(endpoint.Packagefun,param)
    return Put(url,data)
}
export const changePackageStatuseById=(param="")=>{
    const url=getAPIUrl(endpoint.changeStatus,param)
    return Post(url)
}
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
export const getExcelSheetOfTxn=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
    return Post(url,data)
}