/* 
丑数：只包含因子2、3和5的数。
1是第一个丑数，求按从小到大的顺序的第N个丑数
 */

/* 
思路：
数组的丑数都乘2,3,5得到3组值，每组值得最小数分别为M2,M3,M5，求这三个数的最小值
如果M2是最小值，则该组值得指针往右移，再比较三个数的最小值
原数组：1 2 3 4 5
乘2：  2  4  6  8  10
乘3：  3  6  9  12 15
乘5：  5  10 15 20 25
 */

function GetUglyNumber_Solution(index) {
  if (index === 0) return 0
  var arr = [1]
  var two = 0
  var three = 0
  var five = 0
  for (var i = 1; i < index; i++) {
    arr[i] = Math.min(arr[two] * 2, arr[three] * 3, arr[five] * 5)
    if (arr[two] * 2 === arr[i]) {
      two++
    }
    if (arr[three] * 3 === arr[i]) {
      three++
    }
    if (arr[five] * 5 === arr[i]) {
      five++
    }
  }
  return arr[index - 1]
}
/* 
var result = GetUglyNumber_Solution(7)
console.log(result.toString())
 */
