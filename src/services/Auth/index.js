import {  getAPIUrl, Post } from '../apiMethod';
import { Auth } from '../global';

export const adminLogin = (data,param="") => {
  const url = getAPIUrl(Auth.login,param);
  return Post(url, data,false);
};

  export const Logout = (data,param="") => {
    const url = getAPIUrl(Auth.logout,param);
    return Post(url, data);
  };
 