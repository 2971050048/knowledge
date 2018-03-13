/* 
输入链表，从尾到头打印链表每个节点值
*/

/* function ListNode(x) {
  this.val = x;
  this.next = null;
}*/

function printListFromTailToHead(head) {
  var arr = []
  while (1) {
    if (!head) break;
    arr.push(head.val)
    head = head.next
  }
  return arr.reverse()
}
// console.log(printListFromTailToHead({}))
// 16ms 5212k
