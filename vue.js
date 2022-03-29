/*

公众号：搞鸡玩家

苹果商店下载:vuevideo

修改内容：解锁pro会员

注意事项：每次解锁需启动圈叉


[rewrite_local]
^https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) url script-response-body vue.js

[mitm]
api.vuevideo.net


*/

var body = $response.body
    .replace(/\"isPremium\":false/, "\"isPremium\":true")
    .replace(/\"valid\":false/, "\"valid\":true");
$done({ body });