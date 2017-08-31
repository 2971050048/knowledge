<!-- 2017/8/15  -->

# mobx

`redux` 是严格的单向数据流框架，适于大型项目。`mobx` 是灵活的、适合于中小型应用的数据层框架。

`mobx` 原则：当应用状态更新时，所有依赖于应用状态的监听者，都自动细粒度更新。

## 一. 配置

1.mobx-react

```shell
yarn add mobx mobx-react
```

2.使用装饰器

```shell
yarn add babel-plugin-transform-decorators-legacy
```

```json
// .brbelrc
{
  "presets": [
    "react-native"
  ],
  "sourceMaps": true,
  "plugins": [
    "transform-decorators-legacy",
    [
      "import",
      {
        "libraryName": "antd-mobile"
      }
    ]
  ]
}
```

## 二. 使用

- `observable` 需要被监听的应用状态
- `computed` 计算属性
- `autorun, observer` 应用状态监听者

```js
import { observable, computed, autorun, action } from 'mobx';

const person = observable({
  username: 'lizi',
  num: 5
})
person.num = 8;

class Foo {
  // 不用设置 let
  @observable num1 = 1,
  @observable num2 = 2,
  constructor(price) {
    this.price = price;
  }
  @computed get squared () {
    return this.num1 * this.num2;
  }
  // get 之后才设置 set
  set squared(val) {
    this.num1 = val;
  }
  autorun(() => console.log(this.squared) // 计算属性相当于变量而不是函数
}

let foo = new Foo();
foo.squared(2);
```

```js
import { observer } from 'mobx-react/native';

@observer
class TimeViewer from Component {
  render() {
    return(
      <button onclick={this.onReset.bind(this)}>
        this.props.appState.timer
      </button>
    )
  }
  onReset() {
    this.props.appState.resetTimer();
  }
}
ReactDOM.render(<TimerViewer appState={appstate}, element />)
```

如果函数应该自动运行，但不产生新值，使用`autorun`。 其余情况使用 `computed`

## 三、参考文档

- [中文官网](http://cn.mobx.js.org/)
- [官网例子](https://mobx.js.org/getting-started.html)
