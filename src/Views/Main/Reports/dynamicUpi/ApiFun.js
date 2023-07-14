import { Post, getAPIUrl } from "../../../../services/apiMethod";
import { endpoint } from "../../../../services/global";

export const getDynamicUoiTrxReport=(data,param="")=>{
    const url = getAPIUrl(endpoint.dynamicUpiTrxReport,param);
    return Post(url, data);
}