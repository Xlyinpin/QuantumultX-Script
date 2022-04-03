/*
 *
 *


公众号：搞鸡玩家

苹果商店下载: 千千配音

修改内容：解锁永久会员 

注意事项：每次解锁需启动圈叉

[rewrite_local] 
^https:\/\/qianqianapi\.chanwind\.com\/v1\/user/* url script-response-body https://raw.githubusercontent.com/Xlyinpin/QuantumultX-Script/Vip-Crack/qqpy.js 
[mitm]
hostname = qianqianapi.chanwind.com
*
*
*/
var objc = JSON.parse($response.body);

objc.data["username"] = "公众号搞鸡玩家";
objc.data["isVip"] = 1;

$done({body : JSON.stringify(objc)});
