/* 
输入整数数组，判断数组是不是某二叉搜索树的后序遍历。
如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 */
/* 
BST后序遍历的合法序列: 对于序列S，最后一个元素是根x，去掉最后一个元素的序列为T，
T满足：T分成两段，前一段（左子树）小于x，后一段（右子树）大于x，且这两段（子树）都是合法的后序序列。递归解决。
 */

function VerifySquenceOfBST(sequence) {
  if (sequence.length === 0) return false
  return judge(sequence, 0, sequence.length - 1)
}

function judge(s, start, end) {
  if (start >= end) return true
  var idx = end
  for (var i = end - 1; i >= 0; i--) {
    if (s[i] < s[end]) {
      idx = i
      break;
    }
  }
  for (var i = idx - 1; i >= 1; i--) {
    if (s[i] > s[end]) return false
  }
  return judge(s, start, idx - 1) && judge(s, idx, end - 1)
}

// 5, 6, 7, 8, 9, 10, 11
// 后序: 5, 7, 6, 9, 11, 10, 8
var arr = [5, 7, 6, 9, 11, 10, 8]
var arr2 = [5, 4, 3, 2, 1]
console.log(VerifySquenceOfBST(arr2))
