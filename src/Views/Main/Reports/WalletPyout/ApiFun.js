import { Post, getAPIUrl } from "../../../../services/apiMethod"
import { endpoint } from "../../../../services/global"


export const getWalletPayoutData=(data,param="")=>{
    const url=getAPIUrl(endpoint.walletPayout,param)
    return Post(url,data)
}