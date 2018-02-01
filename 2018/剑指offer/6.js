/* 
二分
把数组若干个开始元素搬到末尾，为数组旋转。 
输入递增排序数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 
NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
*/
// function minNumberInRotateArray(rotateArray) {
//   return Math.min(...rotateArray)
// }
// 192ms 10008k，这么做是拿不到offer的

// 二分查找
function minNumberInRotateArray(rotateArray) {
  var low = 0
  var high = rotateArray.length - 1
  var mid
  var arr = rotateArray
  while (1) {
    if (low > high) break
    mid = parseInt((low + high) / 2)
    if (arr[mid] > arr[high]) {
      low = mid + 1
    } else if (arr[mid] < arr[high]) {
      high = mid
    } else {
      high -= 1
    }
  }
  return arr[mid]
}
console.log(minNumberInRotateArray([6501, 6828, 6963, 7036, 7422, 7674, 8146, 8468, 8704, 8717, 9170, 9359, 9719, 9895, 9896, 9913, 9962, 154, 293, 334, 492, 1323, 1479, 1539, 1727, 1870, 1943, 2383, 2392, 2996, 3282, 3812, 3903, 4465, 4605, 4665, 4772, 4828, 5142, 5437, 5448, 5668, 5706, 5725, 6300, 6335]))
// 282ms 9868k
