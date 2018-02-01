/* 
dp
用2*1小矩形横着或竖着覆盖大矩形。用n个2*1矩形覆盖2*n矩形，有多少种方法？
f(n) = f(n - 1) + f(n - 2), f(1) = 1, f(2) = 2, 故[1,1,2,3]
 */
function rectCover(number) {
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
// console.log(rectCover(3))
// 15ms 5212k
