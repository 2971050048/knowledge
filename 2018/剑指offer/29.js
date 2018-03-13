/* 
考点：排序算法
输入n个整数，找出其中最小的K个数。
如输入4,5,1,6,2,7,3,8，最小的4个数字是1,2,3,4 
 */

/* 
思路一：V8引擎的sort函数，数量小于10用插入排序，大于10用快排
思路二：手动快排
*/

/* 
// sort函数
function GetLeastNumbers_Solution(input, k) {
  if (k > input.length) return []
  input.sort((a, b) => a - b)
  return input.slice(0, k)
}
 */

// 快排
function GetLeastNumbers_Solution(input, k) {
  if (k > input.length) return []
  var sort = quickSort(input)
  return sort.slice(0, k)
}

function quickSort(arr) {
  if (arr.length <= 1) return arr
  var pivot = arr.splice((arr.length >> 1), 1)[0]
  var left = []
  var right = []
  arr.forEach((val) => {
    if (val > pivot) {
      right.push(val)
    } else {
      left.push(val)
    }
  })
  return quickSort(left).concat(pivot, quickSort(right))
}
/* 
var result = GetLeastNumbers_Solution([4, 5, 1, 6, 2, 7, 3, 8], 4)
console.log(result.toString())
 */
