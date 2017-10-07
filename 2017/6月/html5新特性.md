<!-- 2017/6/5  -->

# html5新特性

HTML5是HTML第五代标准，小结了7个特性和一些新标签，还storage的使用

## 一、新特性

- 语意特性,添加 `<header><nav>` 等标签
- 多媒体,  用于媒介回放的 `video` 和 `audio` 元素
- 图像效果, 用于绘画的 `canvas` 元素, `svg` 元素等
- 离线存储, 对本地离线存储的更好的支持, `localStorage` 和 `sessionStorage`
- 新的表单控件
- 连接特性, 更有效的连接工作效率, 更快速的网页游戏体验, 更优化的在线交流和实时聊天。HTML5拥有更有效的服务器推送技术, `Server-Sent Event` 和 `WebSockets` 能 实现服务器将数据"推送"到客户端
- 新的跨域通信机制 `window.postMessage`

## 二、新增标签

- 多媒体：`<audio>,<video>,<source>,<embed>,<track>`
- 新表单元素：`<datalist>,<output>,<keygen>`
- 新文档节段和纲要: `<header>,<section>,<aside>,<article>,<footer>`

## 三、input新特性

- color 选择颜色
- date 选择日期
- email 用于检测输入的是否为email格式的地址
- month 选择月份
- number 用于应该包含数值的输入域，可以设定对输入值的限定
- range 用于定义一个滑动条，表示范围
- search 用于搜索，比如站点搜索或 Google 搜索
- tel 输入电话号码
- time 选择时间
- url 输入网址
- week 选择周和年

## 四、兼容ie9

```html
<head>
  <!--[if lt IE 9]>
  <script src='http://apps.bdimg.com/libs/html5shiv/3.7/html5shiv.min.js'></script>
  <![endif]-->
</head>
```

## 五、cookie、localStorage、sessionStorage和indexedDB的区别

1、cookies

- 概念: 文档内存储字符串数据，服务端发cookies给客户端，客户端存储下来在请求中发回给服务端，管理用户会话。
- 优点: 服务器通信，过期时可以重新设置
- 缺点: 增加传输负载，只存储少量字符串，安全问题
- 使用:

```javascript
document.cookie = "user_name=perhaps;user_age=21;secure"; // create
console.log(document.cookie); // read(all)
document.cookie = "user_name=perhaps;user_age=0;secure"; // update
document.cookie = "user_name=perhaps;expires=Thu,01 Jan 1970 00:00:01 GMT"; // delete
```

2、local storage

- IE8+
- 概念:  在浏览器端存储键值对数据，代替cookies存储数据，更安全直观。只存字符串，可用 `JSON.stringify()` 和 `JSON.parse()` 存储JSON数据
- 优点: 相比cookies,接口更直观，数据更多更安全
- 缺点: 只存储字符串数据,存储时需进行数据序列化，读取时需反序列化
- 使用:

```javascript
let user = {"user_name": "perhaps","user_age": 21}
localStorage.setItem('user',JSON.stringify(user)) // 创建'user'
localStorage.getItem(JSON.parse(user)) // 读取'user'
let updateUser = {"user_name": "perhaps","user_age": 0}
localStorage.setItem('user',JSON.stringify(user))// 更新
localStorage.removeItem('user') // 删除
```

3、session storage

- 概念: 类似local storage，区别是只存储当前会话页，用户关闭当前页则数据被清除

4、indexedDB

- IE10+
- 概念: 基于javascript，面向对象和数据库，易存储检索关键字索引的数据
- 优点: 处理更复杂和结构化数据，更大存储空间，更多交互控制
- 缺点: 更难于应用

## 六、参考文档

- [简书: HTML5新特性](http://www.jianshu.com/p/c435f52fb95f)
