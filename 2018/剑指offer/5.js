/* 
用两个栈来实现队列，完成队列的Push和Pop操作。队列元素为int
 */
// 一个栈用来push，另一个栈用来pop
var stack1 = []
var stack2 = []

function push(node) {
  return stack1.push(node)
}

function pop() {
  if (stack2.length === 0) {
    while (1) {
      if (stack1.length === 0) break;
      stack2.push(stack1.pop())
    }
  }
  return stack2.pop()
}
// 17ms 5340k
