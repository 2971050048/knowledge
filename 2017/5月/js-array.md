<!-- 2017/5/26  -->

# js学习笔记-Array

从MDN文档和js高程小结了js数组的属性和方法

## 一、属性

Array.length: 表示数组中元素个数

## 二、方法

1、Array.from(arrayLike)

es6语法，从类数组或可迭代对象创建数组实例

```javascript
Array.from('foo') // ['f', 'o', 'o']
function f() { //这里不用箭头函数，因为需要arguments对象
  return Array.from(arguments)
}
f(1, 2, 3) // [1, 2, 3]
// 类数组转为实例数组也可以用slice方法
function f2() {
  return Array.prototype.slice.call(arguments)
}
f2(1, 2, 3) // [1, 2, 3]
```

2、Array.of(ele0,ele1...)

返回参数构成的数组

```javascript
Array.of(1, 2, 3) //[1, 2, 3]
Array.of(7) //[7]
Array(7) //[ , , , , , , ]
```

跟Array.from()的区别: 两者都返回数组，from方法的参数是类数组或对象，of方法的枚举的参数。二者的区别类似Function.prototype.call()与apply方法的区别。

3、Array.isArray(obj)

```javascript
// 判断传入的值是否为数组
var is = Array.isArray
is([1, 2, 3]) // true
is({foo: 123}) // false
is(1) //false
```

## 三、Array原型对象的方法

1、concat(arr1, arr2...)

合并两个或多个数组。返回一个新数组，不改变原数组

```javascript
var arr = [1, 2, 3]
arr.concat([4, 5], [6]) // [1, 2, 3, 4, 5, 6]
```

2、join()

将所有元素连接为字符串，不改变原数组

```javascript
var arr = [1, 2, 3]
arr.join() // '1,2,3', 默认为','
arr.join('-') // '1-2-3'
```

3、slice(start, end)

返回从start到end的数组，不改变原数组

```javascript
var arr = [1, 2, 3]
arr.slice() // [1, 2, 3]
arr.slice(1, 3) // [1, 2]
```

4、splice(start, count, item1, item2..)

从shart删除count个元素，并添加item1,item2元素，返回删除的元素组成的数组

```javascript
var arr = [1, 2, 3]
arr.splice(1, 1, 'f', 'o') // [2]
arr // [1, 'f', 'o', 3]
```

5、reverse()

```javascript
// 将数组元素的位置颠倒
var arr = [1, 2, 3]
arr.reverse() // [3, 2, 1]
```

6、forEach|every|some|filter|map(callback)

- 对每个元素执行一次函数操作
- 返回布尔值，判断是否所有元素通过函数测试
- 返回布尔值，判断是否存在元素通过函数测试
- 返回新数组, 包含通过函数测试的元素
- 返回新数组，每个元素调用函数后的结果

var callback = (val, index, array) => {}

```javascript
var arr = [1, 2, 3, 4, 5]
arr.every((val) => (val > 3)) // false, 每个都要
arr.some((val) => (val > 3)) // true, 有就行
arr.filter((val) => (val > 3)) // [4, 5]
arr.map((val) => (val + 1)) // [2, 3, 4, 5, 6]
```

7、reduce(callback(acc, val, index, array))

对数组每个元素应用函数，将其减少为单个值

```javascript
let list1 = [[0, 1], [2, 3], [4, 5]]
let list2 = [0, [1, [2, [3, [4, [5, [6]]]]]]]
const flatten = (arr) => {
  return arr.reduce(
    (acc, val) => {
      return acc.concat(Array.isArray(val) ? flatten(val) : val)
    }, []
  )
}
flatten(list1) // [0, 1, 2, 3, 4, 5]
flatten(list2) // [ 0, 1, 2, 3, 4, 5, 6]
```

8、push|pop|shift|unshift(val)

作用如下图

```bash
unshift ==> <== push
  shift <== ==> pop
```

```javascript
var arr = [1, 3, 5]
arr.push(7) // 4, 返回arr长度
arr.pop() // 7,返回取出的元素
arr.unshift(7, 8) // 5, 返回arr长度
arr.shift() // 7, 因为8先进去，从右边进去
```

9、copyWithin(target, start, end)方法

es6语法，复制数组[start,end)的值到target位置，但不修改原数组大小

```javascript
var arr = [1, 2, 3, 4]
arr.copyWithin(0, 1, 3) // [2, 3, 3 ,4]
arr // [2, 3, 3 ,4]
```

10、entries()方法

es6语法，返回Array Iterator对象，包含数组中每个索引的键值对

```javascript
var arr = ["a", "b", "c"]
var iterator = arr.entries() // undefined
console.log(iterator) // Array Iterator {}
console.log(iterator.next().value) // [0, "a"]
console.log(iterator.next().value) // [1, "b"]
console.log(iterator.next().value) // [2, "c"]
for (let e of iterator) {
  console.log(e)
}
// [0, "a"]
// [1, "b"]
// [2, "c"]
```

## 四、参考文档

- [MDN：Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
