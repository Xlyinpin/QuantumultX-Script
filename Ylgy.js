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
^https?:\/\/cat\-match\.easygame2021\.com\/sheep\/v1\/game\/map\_info(.*) url script-response-body https://raw.githubusercontent.com/Xlyinpin/QuantumultX-Script/Vip-Crack/Ylgy.js

[mitm] 
hostname = *.easygame2021.com

*******************************

var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  obj.data.map_data =
    '{"widthNum":8,"heightNum":10,"levelKey":80001,"blockTypeData":{"1":2,"4":1,"13":2},"levelData":{"1":[{"id":"1-16-16","type":0,"rolNum":16,"rowNum":16,"layerNum":1,"moldType":1,"blockNode":null},{"id":"1-28-16","type":0,"rolNum":28,"rowNum":16,"layerNum":1,"moldType":1,"blockNode":null},{"id":"1-40-16","type":0,"rolNum":40,"rowNum":16,"layerNum":1,"moldType":1,"blockNode":null},{"id":"1-16-32","type":0,"rolNum":16,"rowNum":32,"layerNum":1,"moldType":1,"blockNode":null},{"id":"1-28-32","type":0,"rolNum":28,"rowNum":32,"layerNum":1,"moldType":1,"blockNode":null},{"id":"1-40-32","type":0,"rolNum":40,"rowNum":32,"layerNum":1,"moldType":1,"blockNode":null},{"id":"1-16-48","type":0,"rolNum":16,"rowNum":48,"layerNum":1,"moldType":2,"blockNode":null},{"id":"1-28-48","type":0,"rolNum":28,"rowNum":48,"layerNum":1,"moldType":2,"blockNode":null},{"id":"1-40-48","type":0,"rolNum":40,"rowNum":48,"layerNum":1,"moldType":2,"blockNode":null}],"2":[{"id":"2-16-49","type":0,"rolNum":16,"rowNum":49,"layerNum":2,"moldType":2,"blockNode":null},{"id":"2-28-49","type":0,"rolNum":28,"rowNum":49,"layerNum":2,"moldType":2,"blockNode":null},{"id":"2-40-49","type":0,"rolNum":40,"rowNum":49,"layerNum":2,"moldType":2,"blockNode":null},{"id":"2-16-20","type":1,"rolNum":16,"rowNum":20,"layerNum":2,"moldType":1,"blockNode":null},{"id":"2-28-20","type":1,"rolNum":28,"rowNum":20,"layerNum":2,"moldType":1,"blockNode":null},{"id":"2-40-20","type":1,"rolNum":40,"rowNum":20,"layerNum":2,"moldType":1,"blockNode":null},{"id":"2-16-36","type":0,"rolNum":16,"rowNum":36,"layerNum":2,"moldType":1,"blockNode":null},{"id":"2-28-36","type":0,"rolNum":28,"rowNum":36,"layerNum":2,"moldType":1,"blockNode":null},{"id":"2-40-36","type":0,"rolNum":40,"rowNum":36,"layerNum":2,"moldType":1,"blockNode":null}]}}'

  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}
