通过学习[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)文档和js高程，总结了Number对象的属性和方法
<!--more-->

代码测试都是chrome58的测试结果

## 属性

### Number.MAX_VALUE|MIN_VALUE

`Number.MAX_VALUE` 表示在 JavaScript 里所能表示的最大数值,接近于 1.79E+308。大于 MAX_VALUE 的值代表 "Infinity"

`Number.MIN_VALUE` 表示在 JavaScript 中所能表示的最小的正值,约为 5e-324。小于 MIN_VALUE 的值将会转换为 0

```javascript
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MAX_VALUE + 10000 // 同上
Number.MAX_VALUE * 2 // 'Infinity'
Number.MIN_VALU // 5e-324
```

### Number.NEGATIVE_INFINITY|POSITIVE_INFINITY

分别表示负无穷大和正无穷大

```javascript
let p = Number.POSITIVE_INFINITY
let n = Number.NEGATIVE_INFINITY
p * n // -Infinity
n * n // Infinity
0 * n // NaN
n / n // NaN
n / p // NaN
100 / n // -0
n / 100 // -Infinity
n === -p // true
```

### Number.NaN

表示"非数字"

## 方法

### Numver.isFinite(value)

es6的方法，检测传入的参数是否是一个有穷数,该方法不会强制将非数值参数转换成数值

```javascript
Number.isFinite(0)      // true
Number.isFinite(2e64)    // true
Number.isFinite('0')     // false，非数值
Number.isFinite(NaN)      // false
Number.isFinite(Infinity) // false，无穷
```

### Number.isInteger(value)|isNaN(value)

都为es6的方法，分别表示：判断参数是否为整数，检测给定的值是否是NaN

`Number.isFinite()|isNaN()` 与 `isFinite()|isNaN()` 区别: 
传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，非数值一律返回false

```javascript
Number.isInteger(0)         // true
Number.isInteger(Math.PI)   // false，小数
Number.isInteger(Infinity)  // false，无穷
Number.isInteger("10")      // false，字符串
Number.isInteger(true)      // false，布尔
Number.isInteger([1])       // false，数组

Number.isNaN(0 / 0)     // true
// 下面这几个如果使用isNaN()会返回true
Number.isNaN("NaN")     // false，字符串
Number.isNaN(undefined) // false
Number.isNaN({})        // false
Number.isNaN("blabla")  // false

isNaN("NaN")     // true
isNaN(undefined) // true
isNaN({})        // true
isNaN("blabla")  // true

// 下面的都返回false
Number.isNaN(true)
Number.isNaN(37)
Number.isNaN("37.37")
Number.isNaN("")
Number.isNaN(" ")
```

```javascript
// Polyfill
Number.isNaN = Number.isNaN || function(value) {
    return typeof value === "number" && isNaN(value);
}
```

### Number.prototype.toFixed(digits)|toPrecision(digits)
指定小数位数返回数值字符串|指定数值位数返回数值字符串

```javascript
let num = 12.345
num.toFixed() // '12'
num.toFixed(5) // '12.34500'
num.toPrecision() // '12.345'
num.toPrecision(3) // '12.3'
num.toPrecision(1) // '1e+1',自动转为指数
```

### Number.prototype.toExponential(digits)
指定小数位数的指数表示法返回数值字符串

```javascript
let num = 12.345
num.toExponential() // '1.2345e+1'
num.toExponential(5) // '1.23450e+1'
```

### Number.prototype.toString(radix)
返回指定基数的数值字符串

```javascript
(12.345).toString() // '12.345'
(-0xff).toString(2) // '-11111111'
(10).toString(16) //'a'
```

## 其他

### parseInt(string, radix)
指定基数解析string, 返回10进制整数
如果parseInt遇到不属于radix指定基数的字符, 则该字符和其后字符将被忽略，返回已经解析的部分

```javascript
parseInt('f', 16) // 15
parseInt('1111', 2) // 15
parseInt('12.345', 16) // 18, 小数点后面的不解析
parseInt('FXX112', 16) // 15, X后面的不解析
```

### parseFloat(string)
解析字符串，返回浮点数

```javascript
parseFloat('314e-2') // 3.14
parseFloat('12.345hello lizi') // 3.14
```


> 参考文档

>  [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)

> javascript高级程序设计
