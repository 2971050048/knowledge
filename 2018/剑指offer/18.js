/* 
输出源二叉树的镜像。
二叉树的镜像定义：源二叉树
      8
    /  \
   6   10
  / \  / \
 5   7 9 11
镜像二叉树
      8
    /  \
  10   6
  / \  / \
11  9 7  5
 */

function Mirror(root) {
  if (!root) return false
  var temp = root.left
  root.left = root.right
  root.right = temp
  Mirror(root.left)
  Mirror(root.right)
  return root
}
/* 
var tree = {
  val: 8,
  left: {
    val: 6,
    left: {
      val: 5,
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
    val: 10,
    left: {
      val: 9,
      left: null,
      right: null
    },
    right: {
      val: 11,
      left: null,
      right: null
    }
  }
}

var nTree = Mirror(tree)
console.log(nTree)
 */
// 15ms 5212k
