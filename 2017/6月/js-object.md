<!-- 2017/6/1  -->

# js学习笔记-Object

## 一、属性的枚举

- `Object.keys(obj|arr)` 返回属性名数组, 自身可枚举属性
- `Object.getOwnPropertyNames(obj|arr)` 返回属性名数组, 自身属性
- `Object.getOwnPropertySymbols(obj)` 返回属性名数组，symbol属性
- `for(var key in obj)` 遍历obj的可枚举属性,包括原型对象,配合`Object.prototype.hasOwnProperty(prop)`一起使用可遍历自身可枚举属性
- `for(let val of obj)` 遍历collection对象的属性值

```js
var obj = { 100: 'a', 2: 'b', 7: 'c' };
Object.keys(obj); // ['2', '7', '100'], 注意里面是string
Object.getOwnPropertyNames(obj); //['2', '7', '100']
var arr = ['a', 'b', 'c'];
Object.keys(arr); // ['0', '1', '2']
Object.getOwnPropertyNames(arr); //['0', '1', '2', 'length']
obj[Symbol('a')] = 'hello';
Object.getOwnPropertySymbols(obj); //[Symbol(a)], a没有引号
```

## 二、属性的创建

- `Object.assign(target, ...sources)` 返回target, 将sources的可枚举属性复制到target。
- `Object.create(proto, [propertiesObject])` 指定原型对象及属性去创建新对象
- `Object.defineProperties(obj, props)` 定义新属性或修改现有属性
- `Object.getOwnPropertyDescriptor(obj, prop)` 返回属性描述符

```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };
Object.assign(o1, o2, o3); // { a: 1, b: 2, c: 3 }
Object.defineProperties(o1, {
  a: {
    value: 2,
    writable: true,
    configurable: true,
    enumerable: false
  }
});
Object.keys(o1); //['b', 'c']
```

## 三、原型对象

- `Object.getPrototypeOf(obj)` 返回原型对象
- `Object.prototype.constructor` 返回原型对象的函数
- `obj1.isPrototypeOf(obj2)` 返回boolean, obj1是obj2的原型对象吗

## 四、参考文档

- [MDN: Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)
