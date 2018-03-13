/* 
连续子序列最大和
如:{6,-3,-2,7,-15,1,2,2},连续子序列的最大和为8(从第0个开始,到第3个为止)(子序列的长度至少是1)
 */

function FindGreatestSumOfSubArray(array) {
  var result = array[0]
  var temp = array[0]
  array.slice(1).forEach((val) => {
    if (temp < 0) {
      temp = val
    } else {
      temp += val
    }
    if (temp > result) result = temp
  })
  return result
}
/* 
var arr = [6, -3, -2, 7, -15, 1, 2, 2]
var arr2 = [-2, -8, -1, -5, -9]
console.log(FindGreatestSumOfSubArray(arr).toString())
 */
