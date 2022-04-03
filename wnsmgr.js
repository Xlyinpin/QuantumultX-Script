/*
 *
 *


公众号：搞鸡玩家

苹果商店下载: 蜗牛睡眠

修改内容：解锁永久会员 

注意事项：每次解锁需启动圈叉

[rewrite_local] 
^https:\/\/community\.snailsleep\.net\/community\/user\/homepage url script-response-body 
 
[mitm]
hostname = challenge.snailsleep.net
*
*
*/
var objc = JSON.parse($response.body);

objc.data["vip"] = true;
objc.data["name"] = "公众号搞鸡玩家";
objc.data["visible"] = true;
objc.data["avatar"] = "https://qnimage.snailsleep.net/FnBsvuDbCl3bf9laK_akDA6ihvxE";

$done({body : JSON.stringify(objc)});
