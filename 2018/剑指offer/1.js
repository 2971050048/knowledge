/* 
二维数组中，每行从左到右递增，每列从上到下递增。完成函数，输入二维数组和一个整数，判断数组是否含有该整数。
time: 1s, space: 32768k
*/
function Find(target, array) {
  var min = array[0][0]
  var len = array.length
  var max = array[len - 1].slice(-1).pop()
  if (target < min || target > max) return false
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i].indexOf(target) !== -1) return true
  }
  return false
}
console.log(Find(7, [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15]
]))
// 118ms 7660k

/* 
// 从二维数组的左下角开始，大于target的话，i++，小于的话，j--
function Find(target, array) {
  var i = 0
  var j = array.length - 1
  while (1) {
    if (i >= array.length || j < 0) break;
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
// 50ms 7652k
 */
