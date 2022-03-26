/*
 *
 *
脚本功能：解锁vip
软件版本：8.4
下载地址：http://share.momosyb.com/?id=9627063
脚本作者：凉意
更新时间：2022.03.26
电报频道：https://t.me/liangyiA
问题反馈：https://t.me/LiangYi66
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
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
    obj.data.balance = 9985;
    obj.data.neednums = "8563";
    obj.data.is_identify = 1;
    obj.data.username = "公众号搞鸡玩家";
    obj.data.vipqq = "公众号搞鸡玩家";
    obj.data.uid = "888888";

$done({body:JSON.stringify(obj)});
