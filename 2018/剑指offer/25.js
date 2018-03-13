/* 
输入复杂链表（节点：节点值和两指针，分别指向下一节点和任意节点）
返回结果为复制后复杂链表的head
 */

/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/

function Clone(pHead) {
  if (!pHead) return null
  var result = {}
  result.label = pHead.label
  result.random = pHead.random // 所谓的任意节点，就是直接传指针的吗。。
  result.next = Clone(pHead.next)
  return result
}

var head = {
  label: 1,
  next: {
    label: 2,
    next: {
      label: 3,
      next: null,
      random: null
    }
  },
  random: {
    label: 'haha',
    next: null,
    random: null
  }
}

var result = Clone(head)
console.log(JSON.stringify(result))
