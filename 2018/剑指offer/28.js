/* 
数组中有一个数字出现次数超过数组长度一半，找出这个数字。
如输入长度为9的数组{1,2,3,2,2,2,5,4,2}。数字2出现5次，超过数组长度一半，因此输出2。否则输出0。
 */

/* 
思路一：将数组排序后，中间的数就是所得的结果(中位数)。这个方法对于不存在的数无法弄吧！
思路二：将数组数字出现的次数放到一个对象中，再遍历对象的key，判断哪个值是大于数组的一半
思路三：次数count开始为1，第一个数为保存数。下个数与保存数相同则count加一，否则减一并更换保存数。原理：该数至少有两个相邻。再验算，因为得到的保存数有可能只是最后一个数
 */

/* 
// 思路二
function MoreThanHalfNum_Solution(numbers) {
  if (!numbers) return 0
  var obj = {}
  var len = numbers.length
  var result = 0
  numbers.forEach((val) => {
    if (!obj[val]) {
      obj[val] = 1
    } else {
      obj[val]++
    }
  })
  Object.keys(obj).some((val) => {
    if (obj[val] > len / 2) {
      result = val
      return true
    }
  })
  return result
}
 */

// 思路三
function MoreThanHalfNum_Solution(numbers) {
  if (!numbers) return 0
  var count = 1
  var save = numbers[0]
  var len = numbers.length
  numbers.slice(1, len).forEach((val) => {
    if (save === val) {
      count++
    } else {
      count--
    }
    if (count === 0) {
      save = val
      count = 1
    }
  })
  count = 0
  numbers.forEach((val) => {
    if (save === val) count++
  })
  if (count > len / 2) return save
  return 0
}

/* 
var arr = [1, 2, 3, 2, 2, 2, 5, 4, 2]
var arr2 = [2, 1, 2, 3, 2]
var result = MoreThanHalfNum_Solution(arr)
console.log(result)
 */
