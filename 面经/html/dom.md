<!-- 2017/12/6 -->

# dom

- [dom](#dom)
  - [一、元素的增删改查](#%E4%B8%80%E3%80%81%E5%85%83%E7%B4%A0%E7%9A%84%E5%A2%9E%E5%88%A0%E6%94%B9%E6%9F%A5)
  - [二、属性的增删改查](#%E4%BA%8C%E3%80%81%E5%B1%9E%E6%80%A7%E7%9A%84%E5%A2%9E%E5%88%A0%E6%94%B9%E6%9F%A5)
  - [三、文本](#%E4%B8%89%E3%80%81%E6%96%87%E6%9C%AC)
  - [四、事件](#%E5%9B%9B%E3%80%81%E4%BA%8B%E4%BB%B6)
  - [五、element和node](#%E4%BA%94%E3%80%81element%E5%92%8Cnode)
  - [六、参考文档](#%E5%85%AD%E3%80%81%E5%8F%82%E8%80%83%E6%96%87%E6%A1%A3)

## 一、元素的增删改查

1、增

- 创建：`document.createElement(name)`
- 添加：`parentElement.appendChild(element)` `parentElement.insertBefore(new, old)`

2、删

- `element.parentNode.removeChild(node)`

3、改

- `parentElement.replaceChild(new, old)`

4、查

- `element.parentNode|children|firstElementChild|lastElementChild`
- `noelementde.nextElementSibling|previousElementSibling`

## 二、属性的增删改查

1、增,改

- `element.setArrtibute(name, value)`

2、删

- `element.removeAttribute(name)`

3、查

- `element.hasAttribute(name)`
- `element.getAttribute(name)`
- `element.attributes`

4、其他重要属性

- `element.color='#000'`
- `element.className|id='bar'`
- `element.nodeName.toLowerCase()`

## 三、文本

`outerHTML` `innerHTML` `innerText` 区别

栗子: `<div>hello<br/></div>`

- outerHTML: `<div>hello<br/></div>`
- innerHTML: `hello<br/>`
- innerText: `hello`

## 四、事件

1、概念

- 事件代理：当需要对很多元素添加事件时，把事件委托给dom的父节点
- 事件处理流程：捕获阶段，目标阶段，冒泡阶段

2、api

- 事件监听：`target.addEventListener(type, listener[, useCapture])`
- 阻止事件传播 `e.stopProprgation()`
- 阻止默认行为 `e.preventDefault()`
- 事件目标 `e.target` `e.currentTarget`

![js-event](../../2017/images/js-event.jpg)

3、stopProgration

阻止事件的传播, 看上图，那些框框就是`stopProgation`的意思，在哪一层设置了，那么就不能再碰线了。而事件就是空白的部分吧。

## 五、element和node

node是dom层次结构中，任何类型对象的通用名称。node包括element节点，attr节点，文本节点等

| type    | nodeType |
| ------- | -------- |
| element | 1        |
| attr    | 2        |
| text    | 3        |

## 六、参考文档

- [原生js的dom操作汇总](http://harttle.land/2015/10/01/javascript-dom-api.html)
- [element和node区别](http://www.cnblogs.com/jscode/archive/2012/09/04/2670819.html)
