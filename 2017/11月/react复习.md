<!-- 2017/11/30 -->

# react复习

<!-- more -->

## 一、react 注意的点

１、JSX: 所有的元素在渲染前都被转化位字符串，可防止XSS攻击

２、react只渲染该更新的元素

３、组件：命名时开头大写，props参数是只读的，单向数据流

４、状态: 只有使用`this.setState()`方法才能再更新状态后重新执行`render()`方法，`this.setState()`得到的状态会和原状态进行合并。

５、事件:

- 事件名采用camelCase方法，比如`onclick`改为`onClick`, 接受的是函数`{haddleClick}`，而不是字符串`"handleClick()"`。
- 阻止默认行为不能用`return false`，而需要`e.preventDefault()`。
- 需要在constructor里声明`this.handdleClick=this.haddleClick.bind(this)`

6、条件渲染: `&&`操作符和`?`操作符。组件返回`null`则不会渲染

７、列表: `map()`方法。每个列表项都需要`key`属性。key属性帮助react分辨哪个列表项改变了。

８、表单: `input, textarea, select`通过`value`属性实现控制组件

９、状态提升:　当几个组件共享同一个可变数据时，让该共享数据提升到最近的共同祖先

10、组成: `props.children`或者自定义的`props.title` `props.message`

## 参考文档

- [官网教程](https://reactjs.org/docs/hello-world.html)
