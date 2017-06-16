js function的属性和方法小结
<!--more-->
# 属性
## Function.length
- 支持: 浏览器支持未知
- 作用: 指明函数形参的个数
- 例子: (function(a, b){}).length //2

# 方法
## Function.prototype.apply(作用域, [可选]参数数组或类数组对象) 
- 支持: 浏览器支持未知
- 作用: 指定作用域调用某个函数，作用域为this时表调用该函数的对象
- 例子: 
```
//找数组最小值
var nums = [1,2,3,4];
Math.min.apply(null, nums);// 1
//防止参数越界，参数个数限制65536
function minOfArray(arr) {
  var min = Infinity, quantum = 32768;
  for(var i = 0, len = arr.length; i < len; i += quantum) {
    var submin = Math.min.apply(null, arr.slice(i, Math.min(len, i + quantum)));
    min = Math.min(min, submin);
  }
  return min;
}
```

## Function.prototype.call(作用域, [可选]参数列表)
- 作用: 指定作用域调用某个函数(跟apply方法的区别是第二个参数为参数列表)
- 例子: 
```
//调用匿名函数
var animals = [
  {species: 'Lion', name: 'King'},
  {species: 'Whale', name: 'Fail'}
];
for(var i = 0, len = animals.length; i < len; i++) {
  (function(i) {
    console.log(this.species, this.name);
  }).call(animals[i], i);
}
```

## Function.prototype.bind(作用域, [可选]参数列表)
- 作用: 返回新函数，当绑定函数被调用时，作用域会作为原函数运行时的this指向。当使用new操作符调用绑定函数时，作用域无效。
- 例子: 配合setTimeout，一秒钟后显示文字 'I love (1,13] flower'

```
function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;//(1, 13]
}
//实现1，闭包
LateBloomer.prototype.bloom = function() {
  var that = this; //此时this为实例对象
  setTimeout(function() {
    //console.log(this);//闭包，this为window对象
    console.log('I love ' + that.petalCount + ' flower');
  }, 1000);
}
//实现2,bind
LateBloomer.prototype.bloom = function() {
  setTimeout(this.declare.bind(this), 1000);//第二个this，使得函数作用域为实例对象
}
LateBloomer.prototype.declare = function () {
  console.log('I love ' + this.petalCount + ' flower');
}
//结果
var flower = new LateBloomer();
flower.bloom(); //一秒钟后显示文字 'I love (1,13] flower'
    
//快捷调用，类参数数组变成数组
var slice = Array.prototype.slice;
slice.apply(arguments);
//或者
slice2 = Function.prototype.apply.bind(slice);
slice2(arguments);
```

## Function.prototype.toString()
返回当前函数源代码的字符串
​    
> 参考文档: [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)
