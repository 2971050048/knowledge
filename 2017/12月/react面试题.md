<!-- 2017/12/04 -->

# react面试题

## 1、React解决了什么问题

1、实现了虚拟dom。dom操作很耗性能，虚拟dom在内存进行操作，当数据变化时，通过diff算法比较两颗树的变化，对必要的dom进行更新。

2、组件化。大的应用分割成小组件。好处：开发人员并行开发组件，提高效率；组件的复用性让团队可以沉淀工具库；可读性高。

3、单向数据流。数据由父节点流向子节点，父的props发生变化，react会重新渲染所有使用该属性的子节点。

4、声明式编程。关注于得到的结果，比如"目前的状态是什么"，而命令式编程，关注于怎么做，比如"需要做什么让页面变成目前的状态"

## 2、如何设计一个好的组件

遵循原则：高内聚低耦合。高内聚，即采用单一责任原则；低耦合，即模块间尽可能相互独立

1、单一责任原则可以开发高复用的组件，设计大组件时，尽可能分割成若干单一功能的组件。

2、容器组件处理逻辑，展示组件来展示数据，实现逻辑和数据的分离。

3、代码符合规范，总之要：可读性强，复用性高，可维护性好。

## 3、组件的render函数在何时被调用

1、组件state改变时。比如用setState函数改变自身state

2、继承的props属性改变时。

3、重写生命周期函数`componentShouldUpdate`，来判断是否应该调用render函数

## 4、调用render时DOM就一定会被更新吗

不一定。render函数被调用后，react会根据state和props重新构成虚拟dom，再根据diff算法分析虚拟dom和真实dom的差别，这时真实dom才会更新。

## 5、组件的生命周期

三种阶段：初始化(mount)、更新(update)、卸载(unmount)

1、四个初始化：constructor, componentWillMount, render, componentDidMount

2、五个更新：shouldComponentUpdate(nextProps, nextState), componentWillReceiveProps(nextProps), componentWillUpdate(), render(), componentDidUpdate()

3、两个卸载: componentWillMount(), componentDidMount()

## 6、进行远程数据加载时，应该在哪个周期中完成

componentDidMount。这个阶段render函数执行完了，能对dom进行操作，能用setState函数触发重新渲染。

## 7、在哪些生命周期中可以修改组件的state

componentDidMount和componentDidUpdate。

## 8、不同父节点的组件需要对彼此的状态进行改变时应该怎么实现

1、事件机制。缺点：需求增多时，事件和回调会很乱。

2、第三方库进行状态管理：flux, redux, mobx

## 9、state里应该有什么

应该有：事件函数中会导致重新渲染UI的数据

不应该有：计算得到的值，react组件，复制props的数据

## 10、如何对组件进行优化

1、上线构建，即`production build`。会移除报错，减少文件体积。

2、避免重绘。重写`shouldComponentUpdate`

3、尽可能给组件添加`key`属性。方便虚拟dom的对比

## 11、组件中的key属性有什么用

react使用`key`来识别组件，是一种身份标识，一个key对应一个组件。

若key相同，则更新对应属性，若key不同，则销毁组件，构建新组件。

## 12、Element、Component、Instance的区别

1、element：dom节点，object对象，包括type、props、key、ref属性。

2、component: 类或函数，接受参数返回react元素。

3、instance：调用ReactDom.render函数后的返回值。

## 13、调用setState时，发生了什么事

1、将传递给该函数的state和当前state合并，得到新state构建虚拟dom

2、用diff算法比较新树和老树的区别，按需更新相应页面。

## 14、diff算法(调和过程)

react比较虚拟dom和真实dom时，从根节点开始递归往下对比。

1、根节点类型不同，react会认为这是两颗不同的dom树，会重新构建所有节点。

2、根节点类型相同，且是组件元素，则根据props去更新组件实例。

3、根节点类型相同，且是dom元素，则只更新改变的属性，再递归比较子节点。

4、递归子节点，开发者最好给列表项添加key属性。

## 15、什么时候使用类组件(class)和功能组件(function)

若组件需要state和生命周期，则用类组件，否则用功能组件

## 16、什么是React的ref，为什么它们很重要

ref就是reference, 引用，是组件的一个属性，当组件被调用时会新建组件实例，而ref指向这个实例。

比如：把ref属性放到dom中，可得到dom节点，把ref属性放到react组件中，可获得组件实例，调用组件的实例方法。

## 17、受控组件(controlled)和非受控组件(uncontrolled)的区别

1、受控组件：根据state和props来改变ui表现形式。比如input元素，通过设置value属性来控制该元素。优点：可对用户输入进行实时交互。

2、非受控组件：不受state和props的状态控制。比如input元素，不设置value属性，但可用`defaultValue`属性来设置初始值，然后用`ref`属性访问该元素。

## 18、react对事件的处理方式

react在虚拟dom基础上实现了合成事件层，所有事件都绑定在组件最上层。

事件委托：react不把事件处理函数绑定在真实节点上，而是把所有事件绑定到组件最上层，使用统一的事件监听器来处理事件。

自动绑定：使用`React.createClass`会自动绑定每个方法的this到当前组件。

手动绑定：使用es6的`class`关键字，需要手动绑定this

- 构造函数中手动绑定: `constructor(){this.handleClick = this.handleClick.bind(this)}`
- 在回调中手动绑定: `<div onClick={this.handleClick.bind(this)}></div>`
- 采用箭头函数: `<div onClick={() => this.handleClick()}></div>`

## 参考文档

- [react相关面试题](http://hu33.tech/2017/07/31/React%E7%9B%B8%E5%85%B3%E9%9D%A2%E8%AF%95%E9%A2%98/)
- [调和过程](http://www.jianshu.com/p/c5b0db669fa0?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation)
