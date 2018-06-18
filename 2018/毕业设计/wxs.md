<!-- 2018/4/19 -->

# wxs模块

wxs相当于js的es5

## 一、基础知识

1、概念：wxs可在`<wxs>`标签中，也可在`.wxs`文件中，通过`module.exports`来暴露内部的变量和函数

2、使用

```js
// test.wxs
var foo = "hello wxs"
var bar = function(d) {return d}
module.exports = { FOO: foo, bar: bar}
```

```js
// test2.wxs 同样是wxs，则用require
var tools = require("./test.wxs")
module.exports = { FOO: tools.FOO, bar: tools.bar }
```

```html
<!-- test.wxml 中的使用-->
<wxs src="./test2.wxs" module="tools">
<view>{{tools.FOO}}</view>
<view>{{tools.bar('hello perhaps')}}</view>
```

3、注意：

- `<wxs>`标签的module是必要属性，src是用相对路径
- `require`只能引用wxs模块

## 二、其他

变量声明只有`var`，函数可用`arguments`
