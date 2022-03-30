/*


公众号：搞鸡玩家

苹果商店下载: 铁牛爱经

修改内容：解锁永久会员 

注意事项：每次解锁需启动圈叉



本地重写
#铁牛爱经VIP A+
^http:\/\/admin\.tieniupro\.com\/rest\/getUserById url script-response-body tnaj.js



主机名MITM

admin.tieniupro.com


*/


 
var obj = JSON.parse($response.body); 
// 

obj ={"code":"200","data":[{"id":"31150","loginName":"公众号搞鸡玩家","payPassword":"","userGestures":"","openUserGestures":"0","name":"公众号搞鸡玩家","userType":"1","photo":"","qrCode":"http://admin.tieniupro.com/userfiles/qr_img/.jpg/2022/2/1648646725163.JPG","sex":"","birthday":"","userSign":"","userEducation":"","userEducationLabel":"","userIndustry":"","userIndustryLabel":"","userProfession":"","userProfessionLabel":"","userCity":"","userQuanzi":0,"userFocus":0,"userFans":0,"userThumb":0,"userPost":0,"userPoint":9999,"userDongtai":0,"userAlbum":0,"userComment":0,"userCoin":"9999","inviteCode":"279AAVU9","inviteUserId":"","trueName":"","idCard":"","partnerLevelId":"","totalIncomeMoney":"0","totalIncomeInviteMoney":"0","totalIncomeGoodsMoney":"0","totalInviteUserCount":"0","totalInviteUserOrderCount":"0","zfbAcount":"","wxAcount":"","bankName":"","bankNo":"","bankPhone":"","tixMoney":"0","signDate":"","signContinueDay":0,"wxBindId":"oVO2txC7O7wsJk8aT9hQNp9AZ6-s","zfbBindId":"","qqBindId":"","openSignMsg":"1","openSysMsg":"1","openThumbMsg":"1","openPostMsg":"1","openReplyPostMsg":"1","openPinglunMsg":"1","openHotPostMsg":"1","appleBindId":"","vipFlag":"1","vipBeginDate":"","vipEndDate":"2222-02-22 03:30:30","userImg":"1","vipDayCount":"999"}],"message":"查询成功","timestamp":1648646725686}

$done({body:JSON.stringify(obj)});
