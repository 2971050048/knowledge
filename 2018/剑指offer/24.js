/* 
输入二叉树和一整数，打印二叉树中结点和为整数的所有路径。
路径：从根结点开始往下直到叶结点所经过的结点
每个路径就是一个数组，最终结果为二维数组
 */

function FindPath(root, expectNumber) {
  var result = []
  var path = []
  if (!root) return result // 注意为空的情况，否则会报错：返回的结果值不对
  dfsFind(root, expectNumber, result, path)
  return result
}

function dfsFind(root, expectNumber, result, path) {
  expectNumber -= root.val
  path.push(root.val)
  if (root.left === null && root.right === null) {
    if (expectNumber === 0) {
      result.push(path.slice())
    }
    // path = [] // 这个操作只是影响当前的引用，不影响整个递归过程的真正的值
  }
  if (root.left !== null) {
    dfsFind(root.left, expectNumber, result, path)
  }
  if (root.right !== null) {
    dfsFind(root.right, expectNumber, result, path)
  }
  path.pop() // 这里才会引用path的值
}
/* 
// 10,5,12,4,7
var tree = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  },
  right: {
    val: 12,
    left: null,
    right: null
  }
}
var result = FindPath(tree, 22)
console.log(result.toString())
 */
