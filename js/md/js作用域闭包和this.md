小结了js的作用域、作用域链、闭包和this的概念，具体用法可以查看'查考文档'
<!--more-->

## 作用域

- 作用域就是变量与函数的可访问范围。
- 在JS中，变量的作用域分为全局作用域和局部作用域
- 最外层函数和变量拥有全局作用域
- 函数内部拥有局部作用域，也称函数作用域

## 作用域链

当代码进入到某执行环境，准备执行时，会为该执行环境对应的变量对象创建作用域链。作用域链是变量对象的集合，第一个元素是当前执行环境的变量对象，最后一个元素是全局执行环境的变量对象。

当JavaScript需要查询一个变量x时，先查找作用域链第一个对象，如果没有定义x变量，继续查找第二个对象有没有定义x变量，以此类推。

## 闭包

- 函数内部可以直接读取全局变量; 函数外部不能读取函数内局部变量；此为"链式作用域"结构
- 闭包能够读取函数内部变量的函数；
- 本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁
- 用处有两个，可以读取函数内部变量，让这些变量值始终保持在内存中。
- 为什么可以保存在内存中？因为闭包被赋给全局变量，导致闭包始终在内存中，从而导致闭包依赖的那些变量也始终在内存中

## this

一句话: this指的是，调用函数的那个对象

- 构造函数的 this 指向了一个新的对象；严格模式下的函数的 this 值为 undefined
- 如果函数是作为对象的方法被调用的,则其 this 指向了那个调用它的对象
- 闭包里的this指向全局对象

> 参考文档

> [https://gaohaoyang.github.io/2015/05/20/scope/](https://gaohaoyang.github.io/2015/05/20/scope/)

> [http://www.jianshu.com/p/6f6be8797c2b](http://www.jianshu.com/p/6f6be8797c2b)

> [http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

> [http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)

> [https://leohxj.gitbooks.io/front-end-database/javascript-advance/scope-chain.html](https://leohxj.gitbooks.io/front-end-database/javascript-advance/scope-chain.html)
