import {  Delete, FormData, Get, getAPIUrl, Post, Put } from './apiMethod'
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

/////////////////// REPORT API FUNCTION ENDED /////////////////////

/////////////////// PARTNER SECTION API STARTED /////////////////////
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
export const getPackageListdata=(param="")=>{
    const url=getAPIUrl(endpoint.packageListDropData,param)
    return Get(url)
}
export const updatePartnerDetail=(data,param="")=>{
    const url=getAPIUrl(endpoint.editPartner,param)
    return FormData(url,data)
}
////////////////////// PARTNER API FUNCTION ENDED ///////////////////

///////////////////// PACKAGE API FUNCTION STARTED ///////////////////
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

//////////////////// PACKAGE API FUNCTION ENDED ///////////////////

//////////////////// SERVICE API FUNCTION STARTED ////////////////
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

////////////////// SERVICE API FUNCTION ENDED ///////////////////////

////////////////// USER API FUNCTION STARTED ///////////////////////////
export const getUsers=(data,param="")=>{
    const url=getAPIUrl(endpoint.users,param)
    return Post(url,data)
}
export const changeUserStatus=(param="")=>{
    const url=getAPIUrl(endpoint.changeUserStatus,param)
    return Post(url)
}
export const addUser=(data,param="")=>{
    const url=getAPIUrl(endpoint.addUser,param)
    return Post(url,data)
}
export const EditUser=(data,param="")=>{
    const url=getAPIUrl(endpoint.userfun,param)
    return Put(url,data)
}
export const DeleteUser=(param="")=>{
    const url=getAPIUrl(endpoint.userfun,param)
    return Delete(url)
}
export const getUserById=(param="")=>{
    const url=getAPIUrl(endpoint.userfun,param)
    return Get(url)
}
export const GetUserRoles=(param="")=>{
    const url=getAPIUrl(endpoint.getUserRoles,param)
    return Get(url)
}

///////////////////// USER API FUNCTION ENDED ////////////////

//////////////////// BUSINESS API FUNCTION STARTED /////////////
export const GetFundRequests=(data,param="")=>{
    const url=getAPIUrl(endpoint.fundRequests,param)
    return Post(url,data)
} 
export const GetPartnerTxn=(data,param="")=>{
    const url=getAPIUrl(endpoint.partnerTxn,param)
    return Post(url,data)
} 
export const GetPartnerTxnbyId=(data,param="")=>{
    const url=getAPIUrl(endpoint.txnById,param)
    return Post(url,data)
} 
//////////////////// BUSINES API FUNCTION ENDED/////////////////////

////////////////// ACCESS RIGHT API FUNCTION STARTED ///////////////
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

///////////////// ACCESS RIGHT API FUNCTION ENDED ///////////////////
export const getExcelSheetOfTxn=(data,param="",endpoint)=>{
    const url=getAPIUrl(endpoint,param)
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



