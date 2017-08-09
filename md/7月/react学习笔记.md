<!-- 2017/7/18 -->

# react学习小结

## 一、webpack配置

---

```js
// webpack.config.js
module.export {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env','react'],
          plugins: ['transform-runtime']
        }
      }]
    }]
  }
}
```

## 二、组件

---

1、生命周期

首次实例化

- getDefaultProps： 只调用一次，返回props
- getInitialState：初始化实例的state
- componentWillMount：首次渲染之前调用，仍可以修改组件的state
- render：创建虚拟DOM
- componentDidMount：真实的DOM被渲染后调用

组件存在时的状态改变

- componentWillReceiveProps：接收到新的props时调用
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

销毁

- componentWillUnmount

2、使用

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // 设置初始状态
      date: new Date(),
      text: 'haha'
    };
  }
  handleClick() { // setState参数为对象或函数
    // this.setState({text: 'hello world'})
    this.setState(prevState => ({
      data: new Date(),
      text: prevState.text
    }))
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  componentDidMount() { // 第一次渲染后调用
    this.timerID = setInterval(() => this.tick(),1000);
  }
  componentWillUnmount() { // 渲染前调用
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleClick.bind(this)}>{this.state.text}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <p>hello, {this.props.name}</p> // props是指参数
      </div>
    );
  }
}
ReactDOM.render(<Clock name='perhaps'/>, document.getElementById('app'));
```

## 三、参考文档

---

- [React入门教程](https://hulufei.gitbooks.io/react-tutorial/introduction.html)
- [react官网](https://facebook.github.io/react/docs/components-and-props.html)
- [阮一峰: react技术栈系列教程](http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html)
- [组件的生命周期](http://react-china.org/t/react/1740)
