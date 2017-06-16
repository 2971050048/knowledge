# RegExp对象方法

>使用: `/pattern/.test|exec(string)`

## test(): 
返回值是布尔值

```
//验证手机号
let pattern = /\d{11}/
if(pettern.test('12345678901')) {
  console.log('yes')
}
```

## exec(): 
返回一个数组,数组中的第一个条目是第一个匹配,其他的是反向引用
还包括两额外属性: index和input。index表匹配在字符串中的位置，input表输入的字符串

```
let pattern = /zly (and lizi( and foo)?)?/gi
let g = pattern.exec('hello, zly and lizi and foo, welcome')
console.log(g.index, g.input, g[0], g[1], g[2])
//7 'hello, zly and lizi and foo, welcome' 'zly and lizi and foo' 'and lizi and foo' 'and foo'
```

# RegExp对象属性
基于执行的最近一次正则表达式，将有下列属性

- input 输入的字符串
- lastMatch 匹配项
- lastParen 捕获组, 以上opera都不支持
- leftContext 输入字符串中lastMatch前的文本
- rightContext
- multiline 返回布尔值，是否使用了多行模式，ie和opera不支持

```
let pattern = /(.)izi/gi
let r = RegExp
if(pattern.test('hello, zly and lizi and foo, welcome')) {
  console.log(r.input, r.lastMatch, r.lastParen)
  //'hello, zly and lizi and foo, welcome' 'lizi' l
  console.log(r.leftContext, r.rightContext, r.multiline)
  //'hello, zly and' 'and foo, welcome' underfined
}
```

String正则:
  match(pattern)  返回pattern中的子串或 null
  replace(pattern, replacement)
  search(pattern) 返回pattern开始位置
  split(pattern)  返回字符串按pattern拆分的数组
    eg.  str.match(/pattern/);

exec()和match()的区别
  exec:返回数组,包括第一个匹配的字串,所有分组的反向引用
  match:没有g属性时同exec(); 有g属性时,返回所有匹配字符串合成的数组

> /pattern/flags

# flags:

- i: 大小写不敏感
- g: global, find all matches
- m: multiline

# pattern:

## 基本

```
.   character except newline
a   character a
ab  string ab
a|b a or b
a*  0 or more a's
\   Escapes a special character
```

## 量词

```
?       0 or 1
+       1 or more
*       0 or more
{2}     Exactly 2
{2, 5}  Between 2 and 5
{2,}    2 or more
```

##　组

```
(...)   Capturing group
(?:...) Non-capturing group
\Y      Match the Y'th captured group
```

## 类

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

## 声明

```
^ Start of string
$ End of string
\b  Word boundary
\B  Non-word boundary
(?=...) Positive lookahead
(?!...) Negative lookahead    
```

## 特殊字符

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

## replacement:

```
$$  Inserts $
$&  Insert entire match
$`  Insert preceding string
$'  Insert following string
$Y  Insert Y'th captured group
```

> 参考文档: javascript高级程序设计