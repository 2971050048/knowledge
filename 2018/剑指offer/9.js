/* 
青蛙一次可以跳1级或跳n级台阶。求跳上n级台阶有多少种跳法 
 */
// f(n) = f(n - 1) + ... + f(1) = 2 * f(n - 1), f(1) = 1, f(n) = 2 * (n - 1)
function jumpFloorII(number) {
  return Math.pow(2, number - 1)
}
// console.log(jumpFloorII(3))
// 19ms 5212k
