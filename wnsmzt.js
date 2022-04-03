/*
 *
 *


公众号：搞鸡玩家

苹果商店下载: 蜗牛睡眠

修改内容：解锁永久会员 

注意事项：每次解锁需启动圈叉

[rewrite_local] 
^https:\/\/challenge\.snailsleep\.net\/snail-challenge\/vipActive\/canJoin url script-response-body https://raw.githubusercontent.com/Xlyinpin/QuantumultX-Script/Vip-Crack/wnsmzt.js 
^https:\/\/*.*.*.*\/snail\/v1\/profile\/get url script-response-body https://raw.githubusercontent.com/Xlyinpin/QuantumultX-Script/Vip-Crack/wnsmzt.js
[mitm]
hostname = challenge.snailsleep.net
*
*
*/
var objc = JSON.parse($response.body);

objc.data["status"] = "405";
objc.data["message"] = "active-not-exists";

$done({body : JSON.stringify(objc)});
