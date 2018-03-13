/* 
最大公约数算法：辗转相除法
1、a%b得余数c
2、若c=0，则b为最大公约数
3、若c≠0，则a=b，b=c，执行1

最小公倍数：a * b / 最大公约数
 */

// 最大公约数
function GCD(a, b) {
  var c = a % b
  while (1) {
    if (c === 0) break;
    a = b
    b = c
    c = a % b
  }
  return b
}

function LCM(a, b) {
  return a * b / GCD(15, 2)
}

var result = GCD(15, 2)
var result2 = LCM(15, 4)
console.log(result.toString(), result2.toString())
