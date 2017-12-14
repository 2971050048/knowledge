<!-- 2017/11/30 -->

# react复习

学习react也有一段时间，今天对react做个小结。
<!--more-->

- [react复习](#react%E5%A4%8D%E4%B9%A0)
  - [一、react 注意的点](#%E4%B8%80%E3%80%81react-%E6%B3%A8%E6%84%8F%E7%9A%84%E7%82%B9)
  - [二、JSX](#%E4%BA%8C%E3%80%81jsx)
  - [三、prop的类型检查](#%E4%B8%89%E3%80%81prop%E7%9A%84%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5)
  - [四、ref](#%E5%9B%9B%E3%80%81ref)
  - [五、form表单](#%E4%BA%94%E3%80%81form%E8%A1%A8%E5%8D%95)
  - [六、参考文档](#%E5%85%AD%E3%80%81%E5%8F%82%E8%80%83%E6%96%87%E6%A1%A3)

## 一、react 注意的点

１、JSX: 所有的元素在渲染前都被转化为字符串，可防止XSS攻击

２、react只渲染该更新的元素

３、组件：命名时开头大写，props参数是只读的，单向数据流

４、状态:

- 只有使用`this.setState()`方法才能在更新状态后重新执行`render()`方法
- `this.setState()`得到的状态会和原状态进行合并
- 使用：`this.setState({})` 或 `this.setState((prevState, props) => ({}))`

５、事件:

- 事件名采用camelCase方法，比如`onclick`改为`onClick`, 接受的是函数`{haddleClick}`，而不是字符串`"handleClick()"`。
- 阻止默认行为不能用`return false`，而需要`e.preventDefault()`。
- 需要在constructor里声明`this.handdleClick=this.haddleClick.bind(this)`

6、条件渲染: `&&`操作符和`?`操作符。组件返回`null`则不会渲染

７、列表: `map()`方法。每个列表项都需要`key`属性，key属性帮助react分辨哪个列表项改变了。计算完用map得到的元素，放到数组中，再用`return`返回。

８、表单: `input, textarea, select`通过`value`属性实现控制组件

９、状态提升:　当几个组件共享同一个可变数据时，让该共享数据提升到最近的共同祖先

10、组成: `props.children`或者自定义的`props.title` `props.message`

11、构造react组件：等级制度，建立静态版本时用`props`，`state`是为了交互才用的，单向数据流(根据等级制度从上到下的数据流)

- 建立UI等级制度, 构造静态版本的界面，只有`render()`和`props`
- 确定哪些才是`state`，确定state的位置
- 添加逆向数据流，用事件监听

## 二、JSX

1、jsx能嵌入的js表达式有：`string`, `react component`, `列表`

```js
<MyComponent>{ 'foo' }</MyComponent>
<MyComponent>{ <SubComponent /> }</MyComponent>
<MyComponent>{ ['hello', 'world'] }</MyComponent>
```

2、展开运算符能对object使用

```js
const props = {value: 1, placeholder: 'hello'}
const nProps = {...props, value: 2} // 对象内使用
// 当作元素属性来用
return <input {...nProps} />
```

3、运行时指定组件名

```js
const components = {photo: PhotoStory, video: VideoStory}
function story(props) {
  const SpecifyStory = components[props.storyType]
  return <SpecifyStory />
}
```

4、props.children

`props.children` 可以是任何数据类型

```js
function Repeat(props) {
  let items = []
  for(let i = 0, len = props.numTimes; i < len; i++) {
    items.push(props.children(i))
  }
  return <div>{items]</div>
}
function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>this is item {index}</div>}>
    </Repeat>
  )
}
```

## 三、prop的类型检查

1、需要先引入包`prop-types`

```js
import PropTypes from 'prop-types'
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}
Greeting.propTypes = {
  name: PropTypes.string
}
```

2、可选的种类

```js
import PropTypes from 'prop-types'
MyComponent.propTypes = {
  option1: PropTypes.number, // 可选 string, bool, func, object, symbol, node, element, any
  option2: PropTypes.number.isRequired,
  option3: PropTypes.arrayOf(PropTypes.number), // 可选 objectOf
  option4: PropTypes.oneOf(['hello', 'world']),
  option5: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Greeting)])
  option6: PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}) // 指定object形状
}
```

3、默认prop的值

```js
Greeting.defaultProps = {name: 'perhaps'}
```

## 四、ref

1、使用ref的情况：

- `focus` `text selection` `media playback`
- 触发必要的动画
- 跟第三方dom库交互

2、使用

```js
// 管理dom元素，可调用原dom的方法
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.focusTextInput = this.focusTextInput.bind(this)
  }
  focusTextInput() {
    this.textInput.focus()
  }
  render() {
    return (
      <div>
        <input type='text' ref={input => {this.textInput = input}} />
        <input type='button' onClick={this.focusTextInput} />
      </div>
    )
  }
}
```

```js
// 管理react组件，可调用子组件的方法
class AutoFocusTextInput extends React.Component {
  componentDidMount() {
    this.textInput.focusTextInput()
  }
  render() {
    return (
      <CustomTextInput ref={input = {this.textInput = input}}/>
    )
  }
}
```

## 五、form表单

1、非控制组件: 用`ref`获得组件的`value`，用`defaultValue|defaultChecked`定义默认值

```js
handleSubmit(e) {
  window.alert(this.inputText.value)
  e.preventDefault()
}
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <input defaultValue='hello' type='text' ref={input => {this.inputText = input}} />
      <input type='submit' />
    </form>
  )
}
```

2、控制组件：用`onChange`属性监听组件值的变化，用`state`作为组件的默认值并交互

```js
constructor(props) {
  super(props)
  this.state({value: 'world'})
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleInputChange = this.handleInputChange.bind(this)
}
handleSubmit(e) {
  window.alert(this.state.value)
  e.preventDefault()
}
handleInputChange(e) {
  this.setState({value: e.target.value})
}
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <input value={this.state.value} type='text' onChange={this.handleInputChange} />
      <input type='submit' />
    </form>
  )
}
```

## 六、参考文档

- [官网教程](https://reactjs.org/docs/hello-world.html)
