/* 
输入两个整数序列，第一个序列表示栈的压入顺序，判断第二个序列是否为栈的弹出顺序。假设压入栈的所有数字均不相等。
例如序列1,2,3,4,5是某栈的压入顺序，序列4，5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
 */

// 用辅助栈，遍历pushV, 压辅助栈，
// 判断栈顶元素是否等于popV.pop()元素，是的话，出辅助栈
// 若辅助栈不为空，则否
function IsPopOrder(pushV, popV) {
  if (pushV.length === 0 || popV.length === 0) return false
  var stack = []
  var popI = 0
  for (var i = 0, len = pushV.length; i < len; i++) {
    stack.push(pushV[i])
    while (1) {
      if (stack.length === 0 || stack[stack.length - 1] !== popV[popI]) break;
      stack.pop()
      popI++
    }
  }
  return stack.length === 0
}
/* 
console.log(IsPopOrder([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))
console.log(IsPopOrder([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]))
 */
