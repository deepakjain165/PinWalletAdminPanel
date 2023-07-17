import { Get,getAPIUrl  } from "../../../../services/apiMethod";
const endpoint={
    getWalletCapping:"api/settings/getWalletCappingSetting/",
 
}
export const getWalletCapping=(param="")=>{
    const url=getAPIUrl(endpoint.getWalletCapping,param)
    return Get(url)
}
