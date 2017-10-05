// 剑指offer 2017/9/20
// https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6?tpId=13&tqId=11158&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

// 1、二维数组的查找，从左下角开始遍历
// function Find(target, array) {
//   var rowCount = array.length;
//   var colCount = array[0].length;
//   for (var i = rowCount - 1, j = 0; i >= 0 && j < colCount;) {
//     var middle = array[i][j]
//     if (target == middle) {
//       return true;
//     } else if (target < middle) {
//       i--;
//     } else {
//       j++;
//     }
//   }
//   return false;
// }
// var array = [
//   [1, 2],
//   [2, 3]
// ]
// console.log(Find(3, array))

// 2、空格变'%20'，正则
// function replaceSpace(str) {
//   return str.replace(/\s/g, '%20')
// }
// console.log(replaceSpace('hello world'))

// 3、输入链表，从尾到头打印链表
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// function printListFromTailToHead(head)
// {
//     var arr = [];
//     while(head) {
//         arr.push(head.val);
//         head = head.next;
//     }
//     return arr.reverse();
// }

// 4、重建二叉树，输入先序遍历和中序遍历
// function TreeNode (x) {
//   this.val = x;
//   this.left = null;
//   this.right = null;
// }
// function reConstructBinaryTree (pre, vin) {
//   if (pre.length == 0 || vin.length.length) {
//     return null
//   }
//   var binaryTree = new TreeNode(pre[0])
//   var preLeft = [], preRight = [], vinLeft = [], vinRight = []
//   var index = vin.indexOf(binaryTree.val) // 节点
//   preLeft = pre.slice(1, index + 1)
//   vinLeft = vin.slice(0, index)
//   preRight = pre.slice(index + 1)
//   vinRight = vin.slice(index + 1)
//   binaryTree.left = reConstructBinaryTree(preLeft, vinLeft) // 左子树
//   binaryTree.right = reConstructBinaryTree(preRight, vinRight) // 右子树
//   return binaryTree
// }
// var pre = [1,2,4,7,3,5,6,8]
// var vin = [4,7,2,1,5,3,8,6]
// console.log(reConstructBinaryTree(pre, vin))

// 5、用两个栈模拟队列
/* 思路
入队：将元素进栈A
出队：判断栈B是否为空，如果为空，则将栈A中所有元素pop，并push进栈B，栈B出栈；
如果不为空，栈B直接出栈。
*/
// var stack1 = []
// var stack2 = []
// function push(node)
// {
//   stack1.push(node)
// }
// function pop()
// {
//   if(stack2.length === 0) {
//     while(stack1.length !== 0) {
//       stack2.push(stack1.pop())
//     }
//   }
//   return stack2.pop()
// }
// push(1);push(2);push(3);
// console.log(pop()); // 1

// 6. 旋转数组的最小数字。二分法查找
// function minNumberInRotateArray(rotateArray) {
//   var arr = rotateArray
//   var left = 0, middle = 0
//   var right = rotateArray.length - 1
//   while(arr[left] >= arr[right]) {
//     middle = left + parseInt((right - left) / 2);
//     if(right - left == 1) { // 取右边
//       return arr[right]
//     }
//     if(arr[left] > arr[middle]) { // 等号在下方
//       right = middle
//     } else {
//       left = middle
//     }
//   }  
// }
// // var arr1 = minNumberInRotateArray([3,4,5,2,2,3])
// // var arr2 = minNumberInRotateArray([1,1,0,1,1])
// // console.log(arr1, arr2)

// 7. 斐波那契
// function Fibonacci(n) {
//   if(n == 0) return 0
//   if(n == 1) return 1
//   if(n == 2) return 1
//   return Fibonacci(n - 1) + Fibonacci(n - 2)
// }
// console.log(Fibonacci(39))

var arr = [0,1]
function fibonacci(n) {
  if(arr[n] !== undefined) return arr[n]
  arr[n] = fibonacci(n - 1) + fibonacci(n - 2)
  return arr[n]
}

// 8、青蛙跳台阶:青蛙一次跳上1或2级台阶。跳n级台阶有几种跳法？
function jumpFloor(n) {

}