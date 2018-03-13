/* 
输入一个链表，反转链表后，输出新链表
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/


function ReverseList(pHead) {
  if (!pHead) return false
  var p1 = pHead
  var p2 = null
  var temp = null
  while (1) {
    if (!p1) break;
    temp = p1.next
    p1.next = p2
    p2 = p1
    p1 = temp
  }
  return p2
}
// 16ms 5204k

var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}
console.log(ReverseList(head), head)
