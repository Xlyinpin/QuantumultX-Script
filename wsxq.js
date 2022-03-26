/*


公众号：搞鸡玩家

苹果商店下载: 微商星球

修改内容：解锁永久会员 

注意事项：每次解锁需启动圈叉


*******************************
[rewrite_local]
# > 微商星球解锁vip
^https:\/\/api\.momosyb\.com\/v6\/user\/index url script-response-body https://raw.githubusercontent.com/Xlyinpin/QuantumultX-Script/main/wsxq.js
[mitm] 
hostname = api.momosyb.com
*
*
*/
var obj = JSON.parse($response.body);
    obj.data.isvip = "1";
    obj.data.balance = "9985";
  

$done({body:JSON.stringify(obj)});
