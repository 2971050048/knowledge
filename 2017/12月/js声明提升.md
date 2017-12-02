<!-- 2017/12/1 -->

# js声明提升

js代码在编译时会先找到所有的声明，然后关联其作用域。因此，在代码执行前，会先处理变量和函数的声明，即声明提升。

声明在编译阶段进行，赋值在执行阶段进行。

<!--more-->

## 一、变量提升

变量提升：提升声明

```js
n = 1
var n
// 被解释为
var n
n = 1
```

let和const没有变量提升

```js
(function() {
  console.log(nVar) // undefined
  var nVar
})()

(function() {
  console.log(nLet) // ReferenceError: nLet is not defined
  let nLet
})()
```

## 二、函数提升

１、函数声明：将整个函数提升

```js
b() // 1
c() // ReferenceError: c is not defined
function b() { console.log(1) }
```

2、函数表达式：只提升变量

```js
d() // TypeError: d is not a function
var d = function () {}
// 相当于
var d
d()
d = function () {}
```

## 三、面试题例子

1、考点：变量提升，函数提升，先提升变量

```js
foo();
function foo(){ console.log(1); }
var foo = function(){ console.log(2); }
foo();
```

相当于

```js
var foo
function foo() {console.log(1)}
foo()
foo = function() {console.log(2)}
foo()
```

所以答案为: `1` `2`

2、考点：变量提升、函数提升

```js
console.log(foo)    // ?
console.log(bar)    // ?
var foo = function() {}
function bar() {}
```

答案：`undefined` `function bar() {}`

3、考点：全局污染，变量提升

```js
function foo(){
  a = 5;
  console.log(window.a);  //  ?
  console.log(a);         //  ?
  var a = 10;
  console.log(a);         //  ?
}
foo();
```

答案：`undefined` `5` `10`

4、考点：污染，提升，作用域

```js
function foo() {
  var a = 1
  function b() {
    a = 10
    return a
    function a() {}
  }
  console.log(b()) // ?
  console.log(a)  // ?
}
foo();
```

函数b相当于

```js
function b() {
  function a() {}
  a = 10 // a已经声明，所以不会污染上层作用域
  return a
}
```

所以答案：`10` `1`

## 四、参考文档

- [segmentfault:js声明提升](https://segmentfault.com/a/1190000011126068)
