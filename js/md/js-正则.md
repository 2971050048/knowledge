# js正则小结

小结了javascript的RegExp对象方法和属性，String正则的方法，以及pattern所有语法

<!--more-->

## 一、RegExp对象方法

---

`/pattern/.test|exec(string)`

`test()`: 返回值是布尔值

```javascript
//验证手机号
var pattern = /\d{11}/;
if(pettern.test('12345678901')) {
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

---

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

---

包括4个方法 `match, replace, search, split`

- `str.match(pattern)`

正则表达式没有g标志，则str.match()返回和RegExp.exec()相同的结果。还包括两额外属性: index和input。index表匹配在字符串中的索引，input表输入的字符串。
如果正则表达式包含g标志，则返回一个Array，它包含所有匹配的子字符串而不是匹配对象

```javascript
var str = 'hello, zly and lizi and foo, welcome';
var re = /zly (and lizi( and foo)?)?/;
var found = str.match(re);
console.log(found);
// logs [ 'zly and lizi and foo',
//        ' and lizi and foo',
//        ' and foo',
//        index: 7,
//        input: 'hello, zly and lizi and foo, welcome' ]
```

### str.replace(pattern, replacement|function)

返回由替换值替换pattern后的新字符串

字符串为第二个参数时

```javascript
//所有'apples'变为'oranges'
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(/apples/gi, "oranges");
```

```javascript
//交换两个单词
var newstr = "John Smith".replace(/(\w+)\s(\w+)/re, "$2, $1");//'Smith John'
```

函数为第二个参数时: function(match, p1, p2, offset, string), 分别为匹配的子串; 对应$1,$2; 子串在原字符串的偏移量，原字符串

```javascript
//分割不同类型的字符
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);//'abc - 12345 - #$*%'
```

```javascript
var f2c = (x) => String(x).replace(/(\d+(?:\.\d*)?)[F|f]\b/g, (str, p1, offset, s) => ((p1-32) * 5/9) + "C")
f2c('98F')//36.666666666666664C
```

### str.search(pattern)
如果匹配成功，返回pattern在字符串中首次匹配项的索引。否则返回-1

### str.split(pattern)  
返回字符串按pattern拆分的数组

```javascript
//移除分号前后的空格
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
var nameList = names.split(/\s*;\s*/);//["Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand "]
```

## exec()和match()的区别

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

---

### flags:

- i: 大小写不敏感
- g: global, find all matches
- m: multiline

### pattern:

#### 基本

```
.   character except newline
a   character a
ab  string ab
a|b a or b
a*  0 or more a's
\   Escapes a special character
```

#### 量词

```
?       0 or 1
+       1 or more
*       0 or more
{2}     Exactly 2
{2, 5}  Between 2 and 5
{2,}    2 or more
```

#### 组

```
(...)   Capturing group
(?:...) Non-capturing group
\Y      Match the Y'th captured group
```

#### 类

```
[ab-d]  One character of: a, b, c, d
[^ab-d] One character except: a, b, c, d
[\b]    Backspace character
\d  One digit
\D  One non-digit
\s  One whitespace
\S  One non-whitespace
\w  One word character
\W  One non-word character
```

#### 声明

```
^ Start of string
$ End of string
\b  Word boundary
\B  Non-word boundary
(?=...) Positive lookahead
(?!...) Negative lookahead    
```

#### 特殊字符

```
\n  Newline
\r  Carriage return
\t  Tab
\0  Null character
\YYY    Octal character YYY
\xYY    Hexadecimal character YY
\uYYYY  Hexadecimal character YYYY
\cY     Control character Y
```

#### replacement:

```
$$  Inserts $
$&  Insert entire match
$`  Insert preceding string
$'  Insert following string
$Y  Insert Y'th captured group
```

## 五、参考文档

---

- javascript高级程序设计</br>
- [领悟javascript中的exec与match方法](http://www.cnblogs.com/xiehuiqi220/archive/2008/12/01/1327487.html)</br>
- [MDN: String.prototype.match()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)</br>
- [正则表达式规则](http://www.regexlab.com/zh/regref.htm)</br>
- [正则可视化Regulex](https://jex.im/regulex/)</br>
