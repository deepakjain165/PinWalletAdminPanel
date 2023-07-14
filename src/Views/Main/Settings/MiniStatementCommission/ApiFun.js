import { Delete, FormData, Get, getAPIUrl, Post, Put  } from "../../../../services/apiMethod"
const endpoint={
    getMiniStatement:"api/settings/getMiniStmtComm/",
    getupdatedMiniStatement:"api/settings/submitMiniStmtComm",
}
export const getMiniStatement=(param="")=>{
    const url=getAPIUrl(endpoint.getMiniStatement,param)
    return Get(url)
}
export const getupdatedMiniStatement=(data,param="")=>{
    const url=getAPIUrl(endpoint.getupdatedMiniStatement,param)
    return Post(url,data)
}
