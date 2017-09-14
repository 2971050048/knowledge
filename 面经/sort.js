/**
 * 快排函数
 * @param {*Array} arr 待排序的数组
 * @param {*Number} left 待排序的左边界
 * @param {*Number} right 右边界
 */
function quickSort(arr, left, right) {
  if(left >= right) return arr;
  var key = arr[left]; // 取最左边为基准数
  var lp = left, rp = right;
  var tmp;
  while(lp < rp) {
    while(lp < rp && arr[rp] >= key) {
      rp--;
    }
    while(lp < rp && arr[lp] <= key) {
      lp++;
    }
    tmp = arr[lp];
    arr[lp] = arr[rp];
    arr[rp] = tmp;
  }
  tmp = arr[left];
  arr[left] = arr[lp];
  arr[lp] = tmp;
  // console.log(1)
  quickSort(arr, left, lp - 1);
  quickSort(arr, rp + 1, right);
  return arr;
}

var a = quickSort([5,4,6,2,1,7,8,3,2,1], 0, 4);
console.log(a.join(''));
