var n = 2
var a = [
  [1, 2],
  [2, 3],
  [3, 4]
]
var count = 0

function distance(a1, a2) {
  return Math.abs(a1[0] - a2[0]) + Math.abs(a1[1] - a2[1]) - 1
}

function minDist(a1, a) {
  var min = distance(a1, a[0])
  var temp
  a.forEach(val => {
    temp = distance(a1, val)
    if (temp < min) min = temp
  })
  return min
}
for (var i = 0, len = a.length; i < len; i++) {
  count += minDist(a[i], a.slice(0, i).concat(a.slice(i + 1)))
}
count /= 2
console.log(count)
// print(count)


// 2

// var n = 3
// var a1 = [15, 4, 10, 7]
// var a2 = [1, 2, 2, 1]
// var a3 = [1, 1, 2, 2]
// var a = [a1, a2, a3]

// var db1 = []
// var db2 = []

// function fullDb(a, db) {
//   var a0 = a[0]
//   var a1 = a[1]
//   db.push(a)
//   while (a0 !== 0 && a1 !== 0) {
//     if (a0 >= a1) a0 -= a1
//     else a1 -= a0
//     db.push([a0, a1])
//   }
// }

// for (var i = 0; i < n; i++) {
//   var left = a[i].slice(0, 2)
//   var right = a[i].slice(2)
//   var count = -1
//   fullDb(left, db1)
//   fullDb(right, db2)
//   db1.forEach(val1 => {
//     db2.some(val2 => {
//       if (val1.toString() === val2.toString()) {
//         count = val1[0] + val1[1]
//       }
//       return count !== -1
//     })
//   })
//   console.log(count)
//   db1 = []
//   db2 = []
// }
