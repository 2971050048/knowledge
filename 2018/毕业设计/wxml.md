<!-- 2018/4/18 -->

# WXML

## 一、数据绑定

双大括号将变量包起来，里面还可以做运算

## 二、列表渲染：

```html
<view wx:for="{{[1,2,3]}}" wx:for-index="idx" wx:for-item="i">
  {{idx}}: {{i}}
</view>
```

## 三、条件渲染

```html
<view wx:if="{{arr.length < 5}}">5</view>
<view wx:elif="{{arr.length == 5}}">4</view>
<view wx:else>3</view>
```

用`block`标签可以包装多个组件
跟`hidden`属性对比：wx-if只有条件为真时才局部渲染，hidden始终被渲染。若频繁切换则用hidden较好

## 四、模板

- name：模板名字
- is：使用的模板
- data：传入的数据，不是object

```html
<template name="test">
  <view>
    <text> {{a}} </text>
    <text> {{b}} </text>
  </view>
</template>
<template is="test" data="{{...obj}}" />
```

```js
Page({
  data: {obj: {a: 1, b: 2}}
})
```

## 五、事件

1、事件类型

- 冒泡事件
  - touchstart, touchmove, touchend, touchcancel(被来电等打算),
  - tap(碰一下), longpress(长按350ms)
  - transitionend, animationstart, animationiteration(一次迭代结束), animationend
- 非冒泡事件：除了上面的，剩余的都是
  - input, submit(表单提交), scroll

2、事件绑定，`key: value`形式

- key
  - 冒泡：bind, catch
  - 捕获：capture-bind, capture-catch
- value：事件类型

3、event对象

```json
{
  "type":"tap", // 事件类型
  "timeStamp":895, // 打开页面到触发事件经历的时间
  // 源组件以及`data-`数据
  "target": { "id": "tapTest", "dataset":  { "hi":"WeChat" } },
  // 当前组件以及`data-`数据
  "currentTarget":  { "id": "tapTest", "dataset": { "hi":"WeChat" } },
  // 额外信息
  "detail": { "x":53, "y":14 },
  // 触摸点信息数组
  "touches":[{ "identifier":0, "pageX":53, "pageY":14, "clientX":53, "clientY":14 }],
  "changedTouches":[{ "identifier":0, "pageX":53, "pageY":14, "clientX":53, "clientY":14 }]
}
```

## 六、引用

`import` 或 `include`标签

区别：import只是简单的引用，有作用域，而include是复制代码。但都不能引入`wxs`模块

```html
<!-- index.wxml -->
<template name="item">
  <text>{{text}}</text>
</template>
<!-- hello.wxml -->
<import src="index.wxml" />
<template is="item" data="{{text: 'hello perhaps'}}"/>
```
