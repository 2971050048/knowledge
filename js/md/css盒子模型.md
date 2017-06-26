页面中的每一个元素都会形成一个矩形盒子，渲染引擎根据给定的样式确定这个盒子的呈现

<!--more-->

## 基本概念

HTML的大多数元素都是块级(block)元素或行内(inline)元素

块级元素

- 会另起一行, 并尽可能的充满整个容器
- 可以包含行内元素和其他块级元素
- 可以设置width, height, margin, padding, border属性
- 默认宽度是容器的100%

行内元素

- 行内元素不会另起一行, 只占据它对应标签的边框所包含的内容空间
- 只能包含数据和其他行内元素
- 高度和宽度就是内容的高度和宽度
- 可以设置margin-left|right属性, 无法设置margin-top|bottom属性
- border和padding可以设置, 但是border-top和padding-top到页面顶部后就不再增加

正常流

- 从左到右, 从上到下显示。要让一个元素不在正常流中, 唯一的办法是让元素浮动或定位

非替换元素

- 如果元素内容包含在文档中, 则为非替换元素
- 比如一个段落的文本都在该元素本身之内, 段落就是非替换元素。

替换元素

- 作为其他内容占位符的元素称为替换元素
- 比如img元素, 它只是指向一个图像文件, 这个文件插入到文档流中
- 大多数表单元素(input, 根据type属性来显示内容)也是替换元素


## 盒模型

概念

- html文档中的每个元素都被描绘成矩形盒子, 用来描述其占用空间, 这个模型称为盒模型。
- 盒模型通过四个边界来描述: `margin(外边距), border(边框), padding(内边距), content(内容区域)`

box-sizing

- CSS3属性box-sizing 。有两个可选值, `content-box(默认)|border-box`
- content-box, 则 `width = 内容宽度`
- border-box, 则 `width = border + padding + 内容的width`

其他常用属性

- overflow: visible(可见不裁剪)|hidden(隐藏)|scroll(滚动：滚动条占据盒子内容的宽高)|auto(如果内容需被裁剪, 则浏览器以滚动条显示其余内容);
- text-overflow: clip(裁剪)|ellipsis(省略);


> 参考文档

> [详解CSS盒模型](http://web.jobbole.com/84092/)

> [简书: css盒模型](http://www.jianshu.com/p/1c191d7da08a)

> [MDN: box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)
