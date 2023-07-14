import { Get, Post, getAPIUrl } from "../../../../services/apiMethod"

const addfundp={
    getPartnerDropdown:"api/businessWallet/getPartnersDropdown",
    doTransaction:"api/businessWallet/doTransaction"
}
export const getPartnerDropdown=(param="")=>{
    const url=getAPIUrl(addfundp.getPartnerDropdown,param)
    return Get(url)
}
export const DoTransaction=(data,param="")=>{
    const url=getAPIUrl(addfundp.doTransaction,param)
    return Post(url,data)
}