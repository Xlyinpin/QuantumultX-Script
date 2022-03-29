/* Quantumult X 脚本: 斑马海报vip❤
[rewrite_local] 
#斑马海报vip
^https:\/\/zebra\.maka\.im\/api\/user\/info url script-response-body bmhb.js
[mitm] hostname = zebra.maka.im,
*/


 
var obj = JSON.parse($response.body); 
// 

obj ={
  "data": {
    "business": {
      "wool": 999999,
      "is_lifelong_vip": true
    },
    "profile": {
      "uid": 601887683,
      "nickname": "耳丶听爱情",
      "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/gXkdul55hQJ5ahqgJkpnERAUAianIstIeXjF0dol1Hv6Q0WI4lnLvOKIWCfgArboWpOZLtfeaaugDu8Sz6PKLuw/132"
    }
  },
  "error": "",
  "resultCode": 0
}

$done({body:JSON.stringify(obj)});
