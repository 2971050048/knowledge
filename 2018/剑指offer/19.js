/* 

输入矩阵，从外向里以顺时针依次打印每个数字
例如，输入矩阵： 
1  2  3  4
5  6  7  8
9  10 11 12
13 14 15 16
则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 */

// 分成left, right, top, bottom四个边界，每次循环left++, right--, top++, bottom--
function printMatrix(matrix) {
  var row = matrix.length
  var col = matrix[0].length
  var result = []
  if (row === 0 || col === 0) return result
  var left = 0
  var right = col - 1
  var top = 0
  var bottom = row - 1
  while (1) {
    if (left > right || top > bottom) break;
    for (var i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    for (var i = top + 1; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    if (bottom !== top) {
      for (var i = right - 1; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
    }
    if (left !== right) {
      for (var i = bottom - 1; i >= top + 1; i--) {
        result.push(matrix[i][left])
      }
    }
    left++
    right--
    top++
    bottom--
  }
  return result
}
/* 
var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]
var matrix2 = [
  [1],
  [2],
  [3],
  [4],
  [5]
]
var result = printMatrix(matrix2)
console.log(result)
 */
