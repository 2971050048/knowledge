/* 
输入链表，输出该链表倒数第k个结点
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 用两个链表
function FindKthToTail(head, k) {
  var count = 0
  var head1 = head
  var head2 = head
  while (1) {
    if (head1 === null) break;
    if (count >= k) head2 = head2.next
    count++
    head1 = head1.next
  }
  if (k > count) return null
  return head2
}
// 18ms 5212k

// 法二：用数组来存储值
function FindKthToTail2(head, k) {
  var arr = []
  while (1) {
    if (head === null) break;
    arr.push(head)
    head = head.next
  }
  return arr[arr.length - k]
}
// 16ms 5096k

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
console.log(FindKthToTail2(null, 4))
