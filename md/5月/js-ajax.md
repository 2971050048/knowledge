<!-- 2017/5/23  -->

# js学习笔记-ajax

利用浏览器创建的XMLHttpRequest对象实现ajax技术，小结了些XMLHttpRequest对象的方法属性，以及http协议中post，get方法的优缺点

## 一、XMLHttpRequest方法

---

- new XMLHttpRequest()
- send()  //发送GET请求给服务端
- send(string) //发送POST请求给服务端
- abort() //取消当前请求
- setRequestHeader()  //添加请求头
- getResponseHeader()
- getAllResponseHeaders() 
- open(GET|POST, url, async(true|false), user, psw)

## 二、XMLHttpRequest属性

---

1、onreadystatechange //当readyState状态变化时执行函数

2、readyState //XMLHttpRequest请求状态

```shell
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
```

3、status  //返回的状态码

```shell
1xx：指示信息– 表示请求已接收,继续处理。
2xx：成功– 表示请求已被成功接收。
  200: 成功
3xx：重定向– 要完成请求必须进行更进一步的操作
  301：永久重定向
  302：暂时重定向
  304：请求内容未更改
4xx：客户端错误– 请求有语法错误或请求无法实现
  400：请求语法错误,不被服务器理解
  401：请求未经授权
  403：服务器拒绝提供服务
  404：请求资源不存在
5xx：服务器端错误– 服务器未能实现合法的请求
  500: 内部服务器错误
  503: 服务器当前不能处理请求
  504: 网关超时, 服务器正在作为一个网关或代理来完成客户访问所需网址的请求
```

4、responseText  //回应字符串数据

5、responseXML   //回应XML数据

6、statusText    //"OK"|"Not Found"

```js
// 举个例子
function myAjax(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET","test.php",true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status = 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  }
}
```
## 三、HTTP协议

---

1、POST与GET区别

GET优点:

- GET减少不必要的带宽浪费
- GET可被缓存,可被收藏为书签,会保留在浏览器历史记录中,POST不会。
- GET常查询、获取数据,POST发送数据
  GET缺点:
- GET参数在URL中,不能传输敏感数据。
- GET请求长度有限制,URL数据是ASCII字符,POST请求没有限制。
  POST优点: POST请求数据写在HTTP请求头,安全性略高于GET请求

2、cookie与session区别

使用原因: HTTP是无状态连接,客户端每次读取web页面,服务器都认为是新会话,Cookie和Session持久保存某些信息。
区别: 

- cookie保存在客户端,session在服务器
- 单个cookie的大小为4kb,每站点cookie数量一般为20个
- session可设置超时时间,以免长期占用服务端内存

3、https

- 客户端发送随机数和支持的加密方式列表
- 服务端将证书、公钥和另一随机数发送给客户端
- 客户端用公钥将信息加密,密文发送给服务端
- 服务端用私钥解密,再将返回数据用私钥加密发回客户端
- 客户端用公钥解密

4、JS跨域

同源策略存在原因: 

- 协议和端口造成的跨域"前台"没办法
- 只识别URL首部，不判断是否同ip
- URL首部 = window.location.protocol + window.location.host

5、相对协议URL

- 原理: 浏览器遇到相对URL，会根据当前的网页协议，自动在//前面加上相同的协议。如果省略协议，就需要保证引用的外部资源也采用和网页相同的协议，或者保证资源可以同时通过http和https访问。这种用法几乎所有的浏览器都能支持，只有在IE7/8下会有一点小问题
- 作用: 解决混合内容问题。通常是在浏览https网页的时候出现，原因是网页里引用了http协议的外部资源，由于http被认为是不安全的，IE才会给出提示。如果引用的时候写成相对URL，浏览器就会自动采用 https 协议下载，这样就解决了问题
