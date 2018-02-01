/* 
输入整数n，输出斐波那契数列第n项。n<=39
1, 1, 2, 3
相当于数组: [0, 1, 1, 2, 3]
 */
function Fibonacci(n) {
  if (n <= 1) return n
  var one = 0
  var two = 1
  var f = 1
  for (var i = 2; i <= n; i++) {
    f = one + two
    one = two
    two = f
  }
  return f
}
console.log(Fibonacci(39))
// 13ms 5212k

/* 
// 递归
var arr = [0, 1]

function Fibonacci(n) {
  if (arr[n] !== undefined) return arr[n]
  arr[n] = Fibonacci(n - 1) + Fibonacci(n - 2)
  return arr[n]
}
// console.log(Fibonacci(39))
// 13ms 5084k
 */
