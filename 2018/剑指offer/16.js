/* 
输入两个单调递增的链表，输出合成链表，满足单调不减规则
 */

// 3个指针，一个结果指针，两个链表指针

function Merge(pHead1, pHead2) {
  var result = {}
  var p1 = pHead1
  var p2 = pHead2
  if (p1 === null) {
    return p2
  } else if (p2 === null) {
    return p1
  }
  if (p1.val < p2.val) {
    result.val = p1.val
    result.next = Merge(p1.next, p2)
  } else {
    result.val = p2.val
    result.next = Merge(p1, p2.next)
  }
  return result
}
/* 
var head = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 5,
      next: null
    }
  }
}

var head2 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 6,
      next: null
    }
  }
}

var result = Merge(head, head2)
console.log(result)
 */
// 15ms 5212k
