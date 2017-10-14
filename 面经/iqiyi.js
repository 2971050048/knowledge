// <!-- 2017/10/14 -->

// # 爱奇艺笔试

// var n = 3
// var arr = [3,2,1]
var n = readline()
var arr = readline().split(' ')
var nArr = arr.slice()
var count = 0
nArr.sort((a, b) => a - b)
arr.forEach((val, index) => {
  if(val !== nArr[index]) {
    count++
  }
})
print(count)
// console.log(count)

// 回文素数
// 判断num是否为素数
function prime(num) {
  var sqrt = Math.floor(Math.sqrt(num))
  if(num === 1) return false
  for(var i = 2; i <= sqrt; i++) {
    if(num % i === 0) return false
  }
  return true
}

// 判断num是否为回文数
function pd(num) {
  var arr = num.toString().split('')
  var len = arr.length
  var end = Math.floor(len / 2)
  for(var i = 0; i < end; i++) {
    if(arr[i] !== arr[len - i - 1]) return false
  }
  return true
}

var arr = [100, 150]
// var arr = readline().split(' ')
var count = 0
for(var i = arr[0], end = arr[1]; i <= end; i++) {
  if(pd(i) && prime(i)) count++
}
console.log(count)
// print(count)

var db = [2, 3, 5, 7, 11, 101, 131, 151, 181, 191, 313, 353, 373, 383, 727, 757, 787, 797, 919, 929, 10301, 10501, 10601, 11311]
// var arr = [100, 150]
var arr= readline().split(' ')
var count = 0
for(var i = arr[0], end = arr[1]; i <= end; i++) {
  if(db.indexOf(i) !== -1) {
    count++
  }
}
// console.log(count)
print(count)

// 最小价值
// var str = 'aba'
// var n = 1
var str = readline()
var n = parseInt(readline())
var arr = worse(str)
var result = 0
// 计算每种字符出现的次数，并返回次数的数组
function worse(str) {
  var obj = {}
  for(var i = 0, len = str.length; i < len; i++) {
    if(obj[str[i]] !== undefined) {
      obj[str[i]]++
    } else {
      obj[str[i]] = 1
    }
  }
  return Object.values(obj)
}
for(var i = 0; i < n; i++) {
  var max = Math.max(...arr) // 找到数组的最大值
  arr[arr.indexOf(max)] = max - 1 // 最大值减一
}
for(var i = 0, len = arr.length; i < len; i++) {
  result += arr[i] * arr[i]
}
// console.log(result)
print(result)
