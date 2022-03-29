/*


公众号：搞鸡玩家

苹果商店下载: 卡通相机

修改内容：解锁永久会员 

注意事项：每次解锁需启动圈叉



本地重写

^http:\/\/vstou\.faxingwu\.com\/huihua\/user\/getUser url script-response-body https://raw.githubusercontent.com/Xlyinpin/QuantumultX-Script/Vip-Crack/ktxj.js



主机名MITM

vstou.faxingwu.com


*/


 
var obj = JSON.parse($response.body); 
// 

obj ={
  "secret": "WVRNNU1XTTBOVGN3TmpFeVpXVXlORGsw",
  "code": "101",
  "msg": "获取成功",
  "data": {
    "uid": "3148646",
    "username": "耳丶听爱情",
    "head_photo": "https://thirdwx.qlogo.cn/mmopen/vi_32/gXkdul55hQJ5ahqgJkpnERAUAianIstIeXjF0dol1Hv6Q0WI4lnLvOKIWCfgArboWpOZLtfeaaugDu8Sz6PKLuw/132",
    "out_time": "1871699328",
    "vip": "1"
  }
}

$done({body:JSON.stringify(obj)});
