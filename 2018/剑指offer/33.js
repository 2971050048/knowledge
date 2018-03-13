/* 
在字符串中找到第一个只出现一次的字符,返回它的位置
1<=字符串长度<=10000，全部由字母组成
 */

/* 
思路一：用对象存储每个字符出现的次数(最好)
思路二：从头遍历字符串，对于每个字符，从后开始判断是否出现了相同的字符
 */

// 思路一
function FirstNotRepeatingChar(str) {
  var obj = {}
  var result = 0
  for (var i = 0, len = str.length; i < len; i++) {
    if (!obj[str.charAt(i)]) {
      obj[str.charAt(i)] = 1
    } else {
      obj[str.charAt(i)]++
    }
  }
  Object.keys(obj).some((val) => {
    if (obj[val] === 1) {
      result = val
      return true
    }
  })
  return str.indexOf(result)
}

// 思路二

function FirstNotRepeatingChar2(str) {
  for (var i = 0, len = str.length; i < len; i++) {
    if (str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))) {
      return i
    }
  }
  return -1
}


var result = FirstNotRepeatingChar('google')
console.log(result.toString())
