/*
 *
 *
脚本功能：微信小程序-羊了个羊破解通关次数
脚本作者：耳丶听爱情
更新时间：2022.09.15
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
^http[s]s:\/\/cat-match\.easygame2021\.com\/sheep\/v1\/game\/personal_info url script-response-body https://raw.githubusercontent.com/Xlyinpin/QuantumultX-Script/Vip-Crack/Ylgy.js

*
*
*/
var objc = JSON.parse($response.body);

objc.data["daily_count"] = "9999999999999999999";
objc.data["topic_count"] = "9999999999999999999";

$done({body : JSON.stringify(objc)});
