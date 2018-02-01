/* 
输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
  if (!pRoot1 || !pRoot2) return false;
  return isSubtree(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2)
}

function isSubtree(root1, root2) {
  if (root2 === null) return true
  if (root1 === null) return false
  if (root1.val === root2.val)
    return isSubtree(root1.left, root2.left) && isSubtree(root1.right, root2.right)
  else return false
}
/* 
var tree = {
  val: 8,
  left: {
    val: 8,
    left: {
      val: 9,
      left: null,
      right: null
    },
    right: {
      val: 2,
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
    }
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
}

var tree2 = {
  val: 8,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
}
console.log(HasSubtree(tree, tree2))
 */

// 17ms 5212k
