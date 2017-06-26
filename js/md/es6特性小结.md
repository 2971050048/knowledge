ES6总体上来说：添加了块级作用域，增加了一些语法糖，增强了字符串的处理，引入Generator函数控制函数内部状态的变化，原生提供Promise对象，引入Class的概念，并在语言规格层面上实现了模块功能

<!--more-->

ES6是是一种新的javascript规范, 2015年出现，因此也称为ECMAScript2015

** js发展历史 **

- 1995：JavaScript诞生，它的初始名叫LiveScript
- 1997：ECMAScript标准确立。
- 1999：ES3出现，与此同时IE5风靡一时。
- 2000–2005： XMLHttpRequest又名AJAX， 在Outlook Web Access (2000)、Oddpost (2002)，Gmail (2004)和Google Maps (2005)大受重用
- 2009： ES5出现，（就是我们大多数人现在使用的）例如foreach，Object.keys，Object.create和JSON标准。
- 2015：ES6/ECMAScript2015出现。

## 默认参数

可以直接把默认值放在函数申明里

```javascript
var link = function(height = 50, color = 'red', url = 'http://azat.co') {
  ...
}
```

## 模板文本

使用新的语法${NAME}，并放在反引号里

```javascript
var first = 'zly'
var last = 'lizi'
var id = 'js'
var name = `Your name is ${first} ${last}. `
var url = `http://localhost:3000/api/messages/${id}`
console.log(name, url) // Your name is zly lizi.  http://localhost:3000/api/messages/js
```

## 多行字符串

反引号来表示字符串，且可以表示多行字符串

```javascript
// 省略了'+'
var roadPoem = `Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same,`;
var fourAgreements = `You have the right to be you.
    You can only be you when you do your best.`;
```

## 解构赋值

```javascript
// es5，对象属性
var data = $('body').data() // data有house和mouse属性
var house = data.house
var mouse = data.mouse
var jsonMiddleware = require('body-parser').jsonMiddleware
// es6，对象属性
var { house, mouse } = $('body').data()
var { jsonMiddleware } = require('body-parser')
// 数组
var n = [1, 2, 3]
var [q, w] = n
console.log(q, w) // 1 2
```

## 增强的对象文本

```javascript
var serviceBase = { port: 3000, url: 'azat.co' }
var accountService = {
  __proto__: serviceBase, //定义原型对象
  getAccounts() { return [1,2,3] }, //省略了'function'
  toString() { return JSON.stringify((super.valueOf())) },
  getUrl() { return 'http://' + this.url + ':' + this.port },
  [ 'valueOf_' + getAccounts().join('_') ]: getAccounts() //valueOf_1_2_3: [1, 2, 3]
};
console.log(accountService)
```

## 箭头函数

身处箭头函数里面，this还是原来的this

```javascript
var ids = ['563','df9']
// es5
var messages = ids.map(function (value) {
  return "ID is " + value;
})
// es6
var messages = ids.map(value => `ID is ${value}`)
```

## Promises


## 块作用域构造Let and Const

在ES5中，块级作用域起不了任何作用,var只是限制函数作用域
ES6中，大括号定义的代码块，用let和const限制块级作用域

```javascript
// es5
function amount (vip) {
  var amount = 0;
  if (vip) {
    var amount = 1;
  }
  { var amount = 100; }
  return amount;
}
console.log(amount(true)); // 100

// es6
function amount (vip) {
  let amount = 0;
  if (vip) {
    let amount = 1;
  }
  { let amount = 100; }
  return amount;
}
console.log(amount(true)); // 0
```

## 类

```javascript
class baseModel {
  constructor(options, data) {
    this.name = `Base`;
    this.url = `http://azat.co/api`;
    this.data = data;
    this.options = options;
  }
  getName() { // 类方法
    console.log(`Class name: ${this.name}`);
  }
}
class LiziModel extends baseModel {
  constructor(options, data) {
    super({ lizi: true }, [`123`, `345`]) // 用super调用父类的constructor方法
    this.name = `zly`
    this.url += `/accounts/`
  }
  get accountsData() { //calculated attribute getter
    // ... make XHR
    return this.data
  }
}
let lizi = new LiziModel(5)
lizi.getName(); // Class name: zly
console.log(`Data is ${lizi.accountsData}`) // Data is 123,345
```

## 模块

```javascript
// module.js
export var port = 3000
export function getAccounts(url) {
  ...
}
// main.js
import {port, getAccounts} from 'module'
console.log(port) // 3000
// main2.js
import * as service from 'module'
console.log(service.port) // 3000
```

> 参考文档

> [http://www.alloyteam.com/2016/03/es6-front-end-developers-will-have-to-know-the-top-ten-properties/](http://www.alloyteam.com/2016/03/es6-front-end-developers-will-have-to-know-the-top-ten-properties/)

> [http://web.jobbole.com/87140/](http://web.jobbole.com/87140/)
