<!-- 2017/8/18 -->

# 按位和逻辑运算符

## 一、按位运算符

将其操作数当作32位的比特序列进行运算。

1、按位与，或，非，异或：`& | ~ ^`

```js
var a = 1;
var b = 2;
var c = 4;
var d = 8;
a | d; // 9
8 | 9; // 1
```

2、按位左移，有符号右移，无符号左移：`<<` `>>` `>>>`

```js
d << 1; // 16
11 >> 2; // 2
```

3、进制转换：`parseInt` `toString`

```js
parseInt('1011', 2); // 11，以二进制解析1011
(11).toString(2); // '1011' ,将11转为二进制
```

## 二、逻辑运算符

逻辑与，或，非：`&& || !`

```js
a || b; // 相当于 `if(!a) { b }`
a && b; // 相当于 `if(a) { b }`
```

## 三、参考文档

- [MDN: 逻辑运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
- [MDN: 按位运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
