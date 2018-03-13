/* 
二维数组中，每行从左到右递增，每列从上到下递增。完成函数，输入二维数组和一个整数，判断数组是否含有该整数。
time: 1s, space: 32768k
*/

// 从二维数组的左下角开始，大于target的话，i++，小于的话，j--
function Find(target, array) {
  var row = array[0].length
  var col = array.length
  var i = 0
  var j = col - 1
  while (1) {
    if (i >= row || j < 0) break;
    if (target > array[i][j]) {
      i++
    } else if (target < array[i][j]) {
      j--
    } else {
      return true
    }
  }
  return false;
}

var result = Find(7, [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15]
])

console.log(result.toString())
// 50ms 7652k
