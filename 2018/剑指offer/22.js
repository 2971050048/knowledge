/* 
从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 */

// 2个数组，一个数组放节点，另一个数组放val数据。总之要一次while循环要处理val, left,right
function PrintFromTopToBottom(root) {
  var arr = []
  var nodeArr = []
  if (!root) return arr
  nodeArr.push(root)
  while (1) {
    if (nodeArr.length === 0) break;
    var node = nodeArr.shift()
    arr.push(node.val)
    if (!node.left) nodeArr.push(node.left)
    if (!node.right) nodeArr.push(node.right)
  }
  return arr
}
/* 
// 8, 6, 10, 5, 7, 9, 11
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

var arr = PrintFromTopToBottom(tree)
console.log(arr)
 */
