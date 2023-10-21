import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp(){
    let target_url = "https://asia-southeast2-argon-fire-401902.cloudfunctions.net/postLoginProyek3";
    let tokenkey = "token";
    let tokenvalue = "c0928b8efec94d5aaeb16dd5a15ed14efa9aa73bc7565ebef701aa1628774b66";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);
    
}

function responseData(result){
    setInner("pesan",result.message);
    setCookieWithExpireHour("token",result.token,2);
}