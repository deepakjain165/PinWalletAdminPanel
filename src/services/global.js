
export const Auth = {
 login:"api/accountPanel/adminlogin",
 logout:"api/accountPanel/logOff"
 }
export const endpoint={
 payoutTransaction:"api/transactionReports/getPayoutTransactions",
 exportToExcelpayout:"api/exportToExcel/PayoutTransactions",
 exportToExcelDynamicUpi:"api/exportToExcel/DynamicUpiTransactions",
 exportToExcelRecharge:"api/exportToExcel/RechargeTransactionsReport",
 exportToExcelDmt:"api/exportToExcel/DmtTransactions",
 exportToExcelCreditcard:"api/exportToExcel/CreditCardTransactionReport",
 exportToExcelBbpsBillFetch:"api/exportToExcel/BbpsBillFetchDataReport",
 exportToExcelBbpsData:"api/exportToExcel/BbpsBillPayDataReport",
 exportToExcelAccVer:"api/exportToExcel/AccountVerificationReport",
 exportToExcelVerAPIData:"api/exportToExcel/VerificationApiReport",
 exportToExcelWalletPayData:"api/exportToExcel/WalletPayoutTransactions",
 exportToExcelUPIDmt:"api/exportToExcel/UpiDmtTransactions",
exportToExceldynamicupiGenerated:"api/exportToExcel/DynamicUpiGenerated",




 dynamicUpiTrxReport:"api/transactionReports/getDynamicUpiTrxReport",
 rechargeTxn:"api/rechargeReport/getTrxbyDate",
 DmtTxnReport:"api/transactionReports/getDmtTransactions",
 creditCardtxn:"api/transactionReports/getCreditCardTransactions",
 bbpsbillfetch:"api/transactionReports/getBbpsBillFetchData",
 bbpsTxn:"api/transactionReports/getBbpsTransactions",
 accountverification:"api/transactionReports/getAccountVerificationReport",
 digilockerKyc:"api/transactionReports/getDigiLockerKycReport",
 verificationApi:"api/transactionReports/getVerificationApiReport",
 walletPayout:"api/transactionReports/getWalletPayoutReport",
 upiDmtTxn:"api/transactionReports/getUpiDmtTrxReport",
 dynamicUpiGenerated:"api/transactionReports/getDynamicUpiGeneratedReport",
 chargeBackAdded:"api/transactionReports/getChargeBackAddedReport",
 liveRecharge:"api/rechargeReport/getTopRechTrx",
 rrnDetails:"api/transactionReports/chargeBackCheckRrnDetails/",

// REPORT END

partnerList:"api/partner/grid",
partnerIps:"api/partner/ipsList/",
changePartnerStatus:"api/partner/change-status/",
updateIp:"api/partner/updateIp",
addIp:"api/partner/saveIp",
deleteIp:"api/partner/deleteIp/",
changeIpStatus:"api/partner/change-status-ip/",
generateKey:"api/partner/generatekey/",
getDocStatus:"api/partner/document/get-status/",
getDocuments:"api/partner/get-documents/",
docUpload:"api/partner/document/upload-agreement",
partneCallback:"api/partner/getPartnersCallBack/",
callbackEventmaster:"api/partner/getCallBackEventMaster",
updatePartnerCallback:"api/partner/updatePartnerCallBack",
partnerServiceList:"api/service/servicesListDrp",
partnerfun:"api/partner/",
packageListDropData:"api/package/packagesListDrp",
editPartner:"api/partner/update",
// PARTNERS END
packages:"api/package/grid",
Packagefun:"api/package/",
changeStatus:"api/package/change-status/",

// PACKAGES END
services:"api/service/grid",
servicefun:"api/service/",
changeServiceStatus:"api/service/change-status/",

// SERVICES END

users:"api/users/grid",
changeUserStatus:"api/users/change-status/",
addUser:"api/users/register",
userfun:"api/users/",
getUserRoles:"api/roles",

//USERS END

fundRequests:"api/businessWallet/getFundRequests",
partnerTxn:"api/businessWallet/getBusinessPartners",
txnById:"api/businessWallet/getTrxbyDate/",
exportTxn:"exportToExcel/WalletTransactions/",
//ALL ROLES
allroles:"api/roles/grid",
menuPermission:"api/roles/menuspermission/",
saveMenuRight:"api/roles/saveMenuRight",


// SETTINGS API
 rechargeCommission:"api/settings/getRechargeComm",
 rechargeOperators:"api/settings/getRechargeOperators",
 rechargeApiList:"api/settings/rechApiList",
 updateRechargeOperator:"api/settings/updateRechargeOperator/",
 getDmtsurcharge:"api/settings/dmtSurchargeSetting/grid",
 updaterechargeCommission:"api/settings/updateRechargeComm",
}