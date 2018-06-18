<!-- 2018/4/19 -->

# wxss

在css基础上添加新特性

## 一、尺寸单位

1、rpx：根据屏幕宽度进行自适应

对于iphone6，`1rpx=1物理像素=0.5px`
开发时以iphone6作为标准

2、样式导入：`@import`，相对路径

```css
@import "test.wxss";
.hello {padding: 15px;}
```

3、组件样式

- `style`属性：会影响渲染速度
- `class`属性

```html
<view style="color: #f00">
<view class="red-color">
```
