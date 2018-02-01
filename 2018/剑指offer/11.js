/* 
输入整数，输出数的二进制中1的个数。负数用补码表示。
 */
function NumberOf1(n) {
  var count = 0
  while (1) {
    if (n === 0) break;
    count++
    n = n & (n - 1)
  }
  return count
}
console.log(NumberOf1(-7))

// 衍生: 16进制的数变2进制
function hex2binary(n) {
  return (parseInt(n, 16)).toString(2)
}
console.log(hex2binary(10))
console.log((24).toString(25))
