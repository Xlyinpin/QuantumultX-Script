/*




[rewrite_local]
^https:\/\/(commerce-.*api|pay)\.(faceu|wecut)\.(com|mobi)\/(commerce|apple)\/(iosAppVerifyReceipt.php|v1\/subscription\/user_info) url script-response-body https://raw.githubusercontent.com/Xlyinpin/QuantumultX-Script/Vip-Crack/qyxj.js




[mitm]
hostname = commerce-i18n-api.faceu.mobi,commerce-api.faceu.mobi, pay.wecut.com


*/

const path1 = "/commerce/v1/subscription/user_info";
const path2 = "/apple/iosAppVerifyReceipt.php";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.data.start_time = 1584674770;
obj.data.end_time = 4077660370;
obj.data.is_cancel_subscribe = true;
obj.data.flag = true;
}
if ($request.url.indexOf(path2) != -1){
 obj.data = {
    "isValid": 1,
    "expiresTs": 4077660370
}
}
$done({body: JSON.stringify(obj)});

