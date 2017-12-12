<!-- 2017/8/8  -->

# css 布局

水平居中，垂直居中，flex布局，响应式布局的代码实现
<!--more-->

## 一、水平居中布局

```html
<!-- html  -->
<div class='parent'>
  <span class='inline'>hello</span>
  <div class='block'></div>
</div>
```

1、行内元素：父元素设为 `text-align: center`

2、定宽块级元素：子元素设为 `margin: auto`

3、不定宽块级元素

```css
/* 方法1 */
.parent { text-align: center; }
.block { display: inline-block;}
/* 方法2, 绝对布局 */
.parent { position: relative; }
.block { position: absolute; left: 50%; transform: translate(50%); }
```

4、通用方案：父设为 `display: flex; justify-content: center`

## 二、垂直居中布局

1、父元素一定，子单行内联：子设为 `height: line-height`

2、父元素一定，子多行内联

```css
.inline {
  line-height: 20px;
  display: inline-block;
  verticle-align: middle;
}
```

3、子为块级元素，用绝对定位 (ie9+)

```css
.parent { display: relative; }
.block { display: absolute; top: 50%; transform: translate(0, 50%); }
```

4、通用：父设为 `display: flex; align-items: center;`

## 三、flex布局

```css
/* 常用容器属性 */
.box {
  flex-direction: row|row-reverse|column|column-reverse;
  flex-wrap: nowrap|wrap|wrap-reverse;
  justify-content: flex-start|flex-end|center|space-between|space-around;
  align-items: stretch|flex-start|flex-end|center|baseline;
}
/* 常用项目属性 */
.item {
  order: <int>;
  flex: <flex-grow> <flex-shrink> <flex-basis>;
  /* auto(1 1 auto) 或 none(0 0 auto)*/
  align-self: auto|stretch|flex-start|flex-end|center|baseline;
}
```

## 四、响应式布局

```html
<meta name="viewport" content="width=device-width,initial-scale=1">
```

```css
@media screen and (max-width: 960px) {...}
```

## 五、多列等分布局

```html
<div class="parent">
  <div class="column">1</div>
  <div class="column">1</div>
  <div class="column">1</div>
  <div class="column">1</div>
</div>
```

```css
/* float 实现 */
.parent { margin-left: -20px; }
.column {
  box-sizing: border-box;
  float: left;
  width: 25%;
  padding-left: 20px;
}
/* flex 实现*/
.parent { display: flex; }
.column { flex: 1;}
.column + .column { margin-left: 20px; }
```

## 六、参考文档

- [CSS布局](http://web.jobbole.com/90844/)
- [CSS布局技巧](http://www.imooc.com/article/2235)
- [阮：flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
