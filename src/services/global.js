
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
 dynamicUpiTrxReport:"api/transactionReports/getDynamicUpiTrxReport",
 rechargeTxn:"api/rechargeReport/getTrxbyDate",
 DmtTxnReport:"api/transactionReports/getDmtTransactions",
 creditCardtxn:"api/transactionReports/getCreditCardTransactions",
 bbpsbillfetch:"api/transactionReports/getBbpsBillFetchData",
 bbpsTxn:"api/transactionReports/getBbpsTransactions",
 rechargeCommission:"api/settings/getRechargeComm",
 rechargeOperators:"api/settings/getRechargeOperators",
}