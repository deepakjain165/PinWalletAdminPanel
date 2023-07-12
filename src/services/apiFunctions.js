import {  getAPIUrl, Post } from './apiMethod'
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