/* 
定义栈的数据结构，实现能够得到栈最小元素的min函数。
 */
var stack = []

function push(node) {
  return stack.push(node)
}

function pop() {
  return stack.length === 0 ? null : stack.pop()
}

function top() {
  return stack[0]
}

function min() {
  return Math.min(...stack)
}
/* 
push(1, 2)
console.log(min())
 */
