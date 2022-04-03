/*
 *
 *


公众号：搞鸡玩家

苹果商店下载: 蜗牛睡眠

修改内容：解锁永久会员 

注意事项：每次解锁需启动圈叉

[rewrite_local] 
^https:\/\/snailsleep\.net\/snail\/v1\/profile\/get url script-response-body 
[mitm]
hostname = snailsleep.net
*
*
*/
var obj = JSON.parse($response.body); 
// 

obj ={
  "status": 200,
  "message": "OK",
  "result": {
    "unique": "",
    "expires": 2800000000000,
    "expiresRAD": 2800000000000,
    "dreamsTotal": 10,
    "dreamsUsed": 0,
    "updated": 1648977374317,
    "points": 999,
    "level": 3,
    "offerPeriod": true,
    "type": "SNAIL",
    "lifelong": true,
    "expired": false,
    "radexpired": false,
    "links": []
  },
  "links": []
}

$done({body:JSON.stringify(obj)});
