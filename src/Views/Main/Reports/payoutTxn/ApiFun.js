import { Post, getAPIUrl } from "../../../../services/apiMethod";
import { endpoint } from "../../../../services/global";

export const getPayoutTransactions=(data,param="")=>{
    const url = getAPIUrl(endpoint.payoutTransaction,param);
    return Post(url, data);
}
