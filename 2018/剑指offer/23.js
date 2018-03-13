/* 
输入整数数组，判断数组是不是某二叉搜索树的后序遍历。
如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 */
/* 
BST后序遍历的合法序列: 对于序列S，最后一个元素是根x，去掉最后一个元素的序列为T，
T满足：T分成两段，前一段（左子树）小于x，后一段（右子树）大于x，且这两段（子树）都是合法的后序序列。递归解决。
              先找这前一段(end-1到start遍历)，判断后一段是否为都大于x
 */

function VerifySquenceOfBST(sequence) {
  if (sequence.length === 0) return false
  return judge(sequence)
}

function judge(sequence) {
  var len = sequence.length
  var temp = sequence[len - 1]
  var idx = len - 1
  if (len <= 3) return true
  sequence.some((val, i) => {
    if (val > temp) {
      idx = i
      return true
    }
  })
  for (var i = idx; i <= len - 2; i++) {
    if (sequence[i] < temp) return false
  }
  return judge(sequence.slice(0, idx)) && judge(sequence.slice(idx, len - 1))
}

// 5, 6, 7, 8, 9, 10, 11
// 后序: 5, 7, 6, 9, 11, 10, 8
var arr = [5, 7, 6, 9, 11, 10, 8] // true
var arr2 = [5, 4, 3, 2, 1] // true
var arr3 = [1, 2, 3, 4, 5] // true
var arr4 = [7, 4, 6, 5] // false
console.log(VerifySquenceOfBST(arr))

// 15ms 5204k
