/*
 *
 *
脚本功能：微信小程序-羊了个羊破解通关次数
脚本作者：凉意
更新时间：2022.09.15
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local] 
^https:\/\/api\.8897815\.com\/long_video\/user\/info url script-response-body https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/jysp.js
[mitm]
hostname = api.8897815.com
*
*
*/
var objc = JSON.parse($response.body);

objc.data["nickName"] = "凉意";
objc.data["vipEndTime"] = "2099-09-28";
objc.data["userType"] = 1;

$done({body : JSON.stringify(objc)});
