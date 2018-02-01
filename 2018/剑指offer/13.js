/* 
输入整数数组，实现函数:调整数组顺序，使所有奇数位于所有偶数前面，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */
function reOrderArray(array) {
  var arr1 = []
  var arr2 = []
  array.forEach((val) => {
    if (val % 2 === 1) {
      arr1.push(val)
    } else {
      arr2.push(val)
    }
  })
  return arr1.concat(arr2)
}
// console.log(reOrderArray([3, 4, 5, 6, 7, 8]))
// 16ms 5084k
