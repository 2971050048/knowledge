// // var str = read_line()
// var str = '3 2 1'
// var arr = str.split(' ')
// var result = 0
// var count = 0
// arr.forEach(function(val, index) {
//   if(index < 2) {
//     result += Math.pow(2, parseInt(val))
//   } else {
//   	result -= Math.pow(2, parseInt(val))
//   }
// })
// while(result) {
//   count++
//   result = result&(result - 1)
// }
// // print(count)
// console.log(count)

var n = readInt()
function tranfrom(num, j) {
  var arr = []
  while(num) {
    arr.push(num % j)
    num = Math.floor(num / j)
  }
  return parseInt(arr.reverse.join())
}