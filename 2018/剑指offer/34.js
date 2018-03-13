/* 
数组中的任意两数，若前数大于后数，则为一个逆序对。
输入数组(没有相同项),求数组逆序对的总数P。并将P对1000000007取模的结果输出
 */

function InversePairs(data) {
  if (data.length === 0) return []
  var arr = data
  var len = arr.length
  var result = 0
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        result++
      }
      if (result >= 1000000007) {
        result %= 1000000007
      }
    }
  }
  return result
}
/* 
var result = InversePairs([1, 2, 3, 4, 5, 6, 7, 0])
console.log(result.toString())
 */
