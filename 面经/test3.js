// // 迅雷笔试，括号匹配
// var parens = '([{<>}])'

// function t(parens) {
//   var arr = [];
//   var str = parens;
//   if(str.length % 2 === 1) {
//     return false;
//   }
//   for(var i = 0, len = str.length; i < len; i++) {
//     var n = leftBrace(str[i])
//     if(n !== -1) {
//       arr.push(n);
//     } else {
//       var r = rightBrace(str[i]);
//       var l = arr.pop();
//       if(r !== l) {
//         return false;
//       }
//     }
//     if(i == len - 1) {
//       return true;
//     }
//   }
// }

// function leftBrace(char) {
//   var str = '([{<';
//   return str.indexOf(char);
// }

// function rightBrace(char) {
//   var str = ')]}>';
//   return str.indexOf(char);
// }

// console.log(t(parens))

// // 迅雷笔试，数组去重

// Array.prototype.unique = function(){
//   var n = [];
//   for(var i = 0, len = this.length; i < len; i++) {
//     if(n.indexOf(this[i]) === -1) {
//       n.push(this[i]);
//     }
//   }
//   return n;
// }

// baidu, 最大字典字符串

// var s = 'fdbaaa', t = 'ee', result = '';
// var lenS = s.length, lenT = t.length;
// var i = 0, j = 0;
// s = s.split('')
// t = t.split('').sort().reverse(); // 降序排序
// while(i < lenS && j < lenT) {
//   if(s[i] >= t[j]) {
//     i++;
//   } else {
//     s[i++] = t[j++]
//   }
// }
// console.log(s.join(''))

// 葵花
var a = {}
var b = { 'key': 'b' }
var c = { 'key': 'c' }
a[b] = 123
a[c] = 456
console.log(a[b])
console.log(a)
