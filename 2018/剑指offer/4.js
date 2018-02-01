/* 
树
输入二叉树的前序遍历和中序遍历结果，重建二叉树。假设输入的前序遍历和中序遍历都不含重复数字。
如，输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 */
// 可以由前中，得到后；也可以由后中，得到前

// 由前的第一个元素，确定根节点，再由中得到左右子树，不断递推。结束条件: 前长度为0
// function TreeNode(x) {
//   this.val = x;
//   this.left = null;
//   this.right = null;
// }

function reConstructBinaryTree(pre, vin) {
  var tree = {}
  if (pre.length === 0 || !pre) return null
  tree.val = pre[0]
  vin.some((val, index) => {
    if (val === pre[0]) {
      tree.left = reConstructBinaryTree(pre.slice(1, index + 1), vin.slice(0, index))
      tree.right = reConstructBinaryTree(pre.slice(index + 1), vin.slice(index + 1))
      return true
    }
  })
  return tree
}
console.log(reConstructBinaryTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6]))
// 39ms 7852k


// 衍生1: 由后中得到二叉树
function reConstructBinaryTree2(post, vin) {
  var tree = {}
  var len = post.length
  if (len === 0 || !post) return null
  tree.val = post[len - 1]
  vin.some((val, i) => {
    if (val === post[len - 1]) {
      tree.left = reConstructBinaryTree2(post.slice(0, i), vin.slice(0, i))
      tree.right = reConstructBinaryTree2(post.slice(i, len - 1), vin.slice(i + 1))
      return true
    }
  })
  return tree
}



// 衍生2: 由树得到前中后序遍历
var arr = []

function post(tree) {
  if (!tree) return
  // 下面三个的顺序可以变成中序或前序的遍历
  post(tree.left)
  post(tree.right)
  arr.push(tree.val)
}
// post(reConstructBinaryTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6])) // 由前中得到后
post(reConstructBinaryTree2([7, 4, 2, 5, 8, 6, 3, 1], [4, 7, 2, 1, 5, 3, 8, 6])) // 由后中得到前
console.log(arr)
