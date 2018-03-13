/* 
数字规律题
求任意非负整数区间中1的出现次数
*/

/* 
// 思路一：找规律
取第i位左边数字high，乘以p = Math.pow(10,i−1) ，得到基础值a = high * p
取第i位数字，计算修正值：
  若大于1，则结果为 a+p
  若小于1，则结果为 a
  若等于1，则取第i位右边数字low，结果为 a+low+1
http://www.cnblogs.com/nailperry/p/4752987.html
 */

function NumberOf1Between1AndN_Solution(n) {
  if (n <= 0) return 0
  var high = n
  var result = 0
  var low, temp, cur, p, i
  i = 1
  while (1) {
    if (high === 0) break;
    p = Math.pow(10, i - 1)
    high = Math.floor(n / (p * 10))
    temp = n % (p * 10)
    cur = Math.floor(temp / p)
    low = temp % p
    if (cur < 1) {
      result += high * p
    } else if (cur === 1) {
      result += high * p + low + 1
    } else {
      result += (high + 1) * p
    }
    i++
  }
  return result
}

// 思路二：遍历n内的所有数字，得到每个数字1的个数，再相加

function NumberOf1Between1AndN_Solution2(n) {
  if (n <= 0) return 0
  var result = 0
  var cur, temp
  for (var i = 1; i <= n; i++) {
    temp = i
    while (1) {
      if (temp <= 0) break;
      cur = temp % 10
      temp = Math.floor(temp / 10)
      if (cur === 1) result++
    }
  }
  return result
}

var result = NumberOf1Between1AndN_Solution(100)
console.log(result)
