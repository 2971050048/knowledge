响应http请求,根据路由表执行http请求动作,动态渲染html页面,安装和使用
<!--more-->
# 特性
响应http请求,根据路由表执行http请求动作,动态渲染html页面

# 安装
```
npm i express body-parser cookie-parser multer -S
```
-`body-parser`能处理json,raw,text,url编码的数据
-`cookie-parser`解析cookie
-`multer`处理enctype='multipart/form-data'的表单数据

# 使用

```
// 路由demo
var express = require('express');
var app = express();
app.get('/', function (req, res) {
   console.log("主页 GET 请求");
   res.send('Hello GET');
})
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})
app.get('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('删除页面');
})
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
})
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
```
```
// index.js
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'))
app.listen(8080);
// node index就可以在127.0.0.1:8080端口访问/public/index.html
```
路由中回调函数参数对象的属性和方法:
```
app.get|post('/', function(req,res){})
  req对象属性方法
    req.app：当callback为外部文件时,用req.app访问express的实例
    req.baseUrl|originalUrl：路由当前安装的URL|原始请求url
    req.body/req.cookies：获得「请求主体」/Cookies
    req.fresh/req.stale：判断请求是否还「新鲜」
    req.hostname/ip|path|query：获取主机名|IP地址|请求路径|查询参数串
    req.params：获取路由的parameters
    req.protocol：获取协议类型
    req.route：获取当前匹配的路由
    req.subdomains：获取子域名
    req.accepts()：检查可接受的请求的文档类型
    req.acceptsCharsets/acceptsEncodings/acceptsLanguages
    req.get()：指定的HTTP请求头
    req.is()：判断请求头Content-Type的MIME类型
  res对象属性方法
    res.app：
    res.append()：追加指定HTTP头
    res.set()在res.append()后将重置之前设置的头
    res.cookie(name,value [,option])：opition: domain/expires/httpOnly/maxAge/path/secure/signed
    res.clearCookie()：清除Cookie
    res.download()：传送指定路径的文件
    res.get()：返回指定的HTTP头
    res.json()|jsonp()：传送JSON|JSONP响应
    res.location()：只设置响应的Location HTTP头,不设置状态码或者close response
    res.redirect()：设置响应的Location HTTP头,并且设置状态码302
    res.send()：传送HTTP响应
    res.sendFile(path [,options] [,fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
    res.set()|status()|type()：设置HTTP头|HTTP状态码|Content-Type的MIME类型
```

>参考文档
>[http://www.runoob.com/nodejs/nodejs-express-framework.html](http://www.runoob.com/nodejs/nodejs-express-framework.html)
>[http://javascript.ruanyifeng.com/nodejs/express.html](http://javascript.ruanyifeng.com/nodejs/express.html)
