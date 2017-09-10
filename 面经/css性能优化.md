<!-- 2017/7/13  -->

# css性能优化

浏览器打开URL到渲染页面过程中的发生的事情，浏览器对CSS的匹配原理和css优化

## 一、浏览器打开URL到渲染页面

六步：DNS域名解析，TCP连接，HTTP请求，处理请求返回HTTP响应，页面渲染，关闭连接

1、域名解析：将域名还原为IP地址的过程。两种方法：迭代查询和递归查询。

2、TCP连接：三次握手

3、请求报文包括：请求行，请求头，请求正文

4、响应报文：状态码，响应头，响应正文。

状态码：

- 1xx：指示信息–表示请求已接收，继续处理。
- 2xx：成功–表示请求已被成功接收、理解、接受。
- 3xx：重定向–要完成请求必须进行更进一步的操作。
- 4xx：客户端错误–请求有语法错误或请求无法实现。
- 5xx：服务器端错误–服务器未能实现合法的请求。

5、页面渲染

- 下载HTML，CSS，JS
- 执行JS脚本，下载其他资源
- 构建DOM树：解析HTML构建DOM树，解析CSS构建CSSOM
- 构建render树：通过DOM与CSSOM计算render树
- 排列render树：根据render树计算各个元素位置大小(Layout)
- 绘制render树：渲染为最终显示的像素(Paint)

6、关闭连接：TCP四次挥手

## 二、浏览器对CSS的匹配原理

浏览器CSS匹配是从右到左进行查找。比如 `#box > p > span.red` ，浏览器查找顺序：先查找html中所有 `class=’red’` 的span元素，找到后再查找其父元素是否有p元素，再判断p的父元素是否有id为box的元素，如果都存在则CSS匹配上。

浏览器从右到左进行查找的好处是为了尽早过滤掉一些无关的样式规则和元素

## 三、CSS 优化

主要是四个方面：加载、选择器、渲染、健壮性

3.1 加载性能优化

（1）、减少文件体积、减少http请求。

压缩，雪碧图，充分利用css继承属性，抽象提取公共样式以减少代码量

（2）、减少阻塞加载、提高并发

- 引入的资源，哪怕被阻塞，浏览器会预先加载但不执行
- CSS加载会阻塞Js执行。CSS文件未加载解析完成前，js文件不会得到执行。因为js有可能会修改CSSOM。带有async和defer属性的script不受限制。
- 解析HTML的过程是增量的，因此浏览器可以边下载HTML边构建DOM树
- "CSS加载"会阻塞"Layout"。若页面有正在加载的CSS文件，在CSS加载完之前，浏览器不会对页面进行Layout，这是为了防止样式突变带来的抖动
- "Js加载"会阻塞"HTML Parse"
- "Js文件执行"会几乎会阻塞所有东西，包括Layout

3.2 选择器性能优化

选择器优化嵌套，尽量避免层级过深

selector对整体性能的影响可以忽略不计，selector更多是在规范化和可维护性、健壮性方面

3.3 渲染性能优化(待编辑...)

渲染性能是CSS优化最重要的关注对象。

尽量减少页面重排、重绘
页面渲染junky过多？
看看是不是大量使用了text-shadow？
是不是开了字体抗锯齿？
CSS动画怎么实现的？
合理利用GPU加速了吗？
用了Flexible Box Model？
有没有测试换个layout策略对render performance的影响？
搜索一下CSS render performance或者CSS animation performance也会有一堆一堆的资料可供参考。

3.4 代码可维护性和健壮性

命名合理，结构层次设计健壮，对样式进行抽象复用。</br>
多找些OOCSS等不同CSS Strategy的信息，取长补短。

去除空规则：｛｝；
属性值为0时，不加单位；
属性值为浮动小数0.**，可以省略小数点之前的0；
css规则顺序
位置：positon、top、left、z-index、float、dispay
大小：width、height、margin、padding
文字系列： font、line-height、color、letter-spacing   背景边框：background、 border
其它：animation、transition
重绘:border、outline、background、box-shadow，能使用background-color，就尽量不要使用background;

## 四、参考文档

- [知乎: CSS优化、提高性能的方法有哪些](https://www.zhihu.com/question/19886806)
- [segmentfault: 从输入URL到页面加载完成的过程中都发生了什么事情？](https://segmentfault.com/q/1010000000489803)
- [博客: 不简单的前端性能优化](http://www.bijishequ.com/detail/379404?p=61)
- [地址栏输入URL到页面加载完成发生了什么](https://kknews.cc/other/vmv9kqy.html)