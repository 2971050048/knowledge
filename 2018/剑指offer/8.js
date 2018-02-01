/* 
dp
青蛙一次可以跳1级或2级台阶。跳n级台阶有多少种跳法。
*/
// f(n) = f(n - 1) + f(n - 2), f(1) = 1, f(2) = 2, 故[1, 1, 2, 3]
function jumpFloor(number) {
  if (number <= 1) return number
  var one = 1
  var two = 1
  var f = 2
  for (var i = 2; i <= number; i++) {
    f = one + two
    one = two
    two = f
  }
  return f
}
// console.log(jumpFloor(5))
// 15ms 5212k
