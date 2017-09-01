<!-- 2017/5/20  -->

# js正则小结

小结了javascript的RegExp对象方法和属性，String正则的方法，以及pattern所有语法

## 一、RegExp对象方法

`/pattern/.test|exec(string)`

`test()`: 返回值是布尔值

```javascript
//验证手机号
var pattern = /\d{11}/;
if(pattern.test('12345678901')) {
  console.log('yes');
}
```

`exec()`: 返回数组, 包括匹配项和反向引用。额外属性: index和input。index表匹配项在字符串的位置，input表输入的字符串</br>

```javascript
var pattern = /2,(3,(4)?)?/;
var g = pattern.exec('1,2,3,4,5');
console.log(g[0], g[1], g[2]); // '2,3,4' '3,4' '4'
console.log(g.index, g.input); // 2 '1,2,3,4,5,'
```

## 二、RegExp对象属性

基于执行的最近一次正则表达式，`Regexp` 将有下列属性

- input 输入的字符串
- lastMatch 匹配项
- lastParen 捕获组, 以上opera都不支持
- leftContext 输入字符串中lastMatch前的文本
- rightContext
- multiline 返回布尔值，是否使用了多行模式，ie和opera不支持

```javascript
var pattern = /(,)3/gi;
if(pattern.test('1,2,3,4,5')) {
  var r = RegExp;
  console.log(r.input); // '1,2,3,4,5'
  console.log(r.lastMatch, r.lastParen); // ',3' ','
  console.log(r.leftContext, r.rightContext, r.multiline);
  //'1,2' ',4,5' undefined
}
```

## 三、String正则

包括4个方法 `match, replace, search, split`

1、`str.match(pattern)`

若pattern没有g标志，则str.match()返回和RegExp.exec()相同的结果。还包括两额外属性: index和input。</br>
若pattern有g标志，则返回Array，包含所有匹配的子字符串而不是匹配对象。

```javascript
var str = '1,2,3,4,3,5';
str.match(/(,)3/g); // [",3", ",3"]
str.match(/(,)3/);
// logs [ ',3', ',', index: 3, input: '1,2,3,4,3,5' ]
```

2、`str.replace(pattern, string|function)`

返回替换后的新字符串

第二个参数为string时

```javascript
//所有'apples'变为'oranges'
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(/apples/gi, "oranges");
```

```javascript
//交换两个单词
var newstr = "John Smith".replace(/(\w+)\s(\w+)/re, "$2, $1");//'Smith John'
```

第二个参数为函数时: `function(match, p1, p2, index, input)`。 分别为匹配的子串; 对应$1,$2; 子串在原字符串的偏移量，原字符串

```javascript
//分割不同类型的字符
function replacer(match, p1, p2, p3, index, input) {
  return [p1, p2, p3].join(' - ');
}
// p1非数字, p2数字, p3非单词。
var newString = 'abc12345#$*%'.replace(/(\D*)(\d*)(\W*)/, replacer);
// abc - 12345 - #$*%
```

```javascript
// 华氏度转为摄氏度
var f2c = (x) => String(x).replace(/(\d+(?:\.\d*)?)[F|f]\b/g, (match, p1, index, input) => ((p1-32) * 5/9) + "C")
f2c('98F')//36.666666666666664C
```

3、`str.search(pattern)`

如果匹配成功，返回pattern在字符串中首次匹配项的索引。否则返回-1

4、`str.split(pattern)`

返回字符串按pattern拆分的数组

```javascript
//移除分号前后的空格
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
var nameList = names.split(/\s*;\s*/);//["Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand "]
```

5、exec()和match()的区别

- exec:返回数组,与第一个匹配相关的信息
- match:没有g属性时同exec(); 有g属性时,返回所有匹配字符串合成的数组

```javascript
var someText="web2.0 .net2.0";
var pattern=/(\w+)(\d)\.(\d)/g;
var outCome_exec=pattern.exec(someText);//['web2.0','web',2,0]
var outCome_matc=someText.match(pattern);//['web2.0','net2.0']
What is outCome_exec[1] and outCome_matc[1]? //'web','net2.0
```

## 四、/pattern/flags

flags

- i: 大小写不敏感
- g: global, find all matches
- m: multiline

pattern

1、基本

```shell
.   character except newline
a   character a
ab  string ab
a|b a or b
a*  0 or more a's
\   Escapes a special character
```

2、量词

```shell
?       0 or 1
+       1 or more
*       0 or more
{2}     Exactly 2
{2, 5}  Between 2 and 5
{2,}    2 or more
```

3、组

```shell
(...)   Capturing group
(?:...) Non-capturing group
$Y      Match the Y'th captured group
```
4、类

```shell
[a-d]  One character of: a, b, c, d
[^a-d] One character except: a, b, c, d
[\b]    Backspace character
\d  One digit
\D  One non-digit
\s  One whitespace
\S  One non-whitespace
\w  One word character
\W  One non-word character
```

5、声明

```shell
^ Start of string
$ End of string
\b  Word boundary
\B  Non-word boundary
(?=...) Positive lookahead
(?!...) Negative lookahead
```

6、特殊字符

```shell
\n  Newline
\r  Carriage return
\t  Tab
\0  Null character
\YYY    Octal character YYY
\xYY    Hexadecimal character YY
\uYYYY  Hexadecimal character YYYY
\cY     Control character Y
```

7、replacement

```shell
$$  Inserts $
$&  Insert entire match
$`  Insert preceding string
$'  Insert following string
$Y  Insert Y'th captured group
```

## 五、参考文档

- javascript高级程序设计
- [领悟javascript中的exec与match方法](http://www.cnblogs.com/xiehuiqi220/archive/2008/12/01/1327487.html)
- [MDN: String.prototype.match()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [正则表达式规则](http://www.regexlab.com/zh/regref.htm)
- [正则可视化Regulex](https://jex.im/regulex/)
