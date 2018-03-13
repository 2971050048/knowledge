/* 
浅克隆：只复制一层对象属性，如果对象属性'world'的值为对象，则'world'和原对象的'world'指向同一个对象
深克隆：递归复制对象的所有层级
 */

function shallowCopy(obj) {
  var nObj = obj.constructor === Array ? [] : {}
  for (const key in obj) {
    nObj[key] = obj[key]
  }
  return nObj
}

function deepCopy(obj) {
  var nObj = obj.constructor === Array ? [] : {}
  if (global.JSON) {
    return JSON.parse(JSON.stringify(obj))
  } else {
    for (const key in obj) {
      const value = obj[key]
      nObj[key] = typeof value === 'object' ? deepCopy(value) : value
    }
  }
  return nObj
}

var arr = [1, 2, 3, 4]
var obj = {
  'hello': 1,
  'world': [3, 4, 5]
}

var result = shallowCopy(obj)
console.log(JSON.stringify(result))
// 共享引用
result['world'].push(6)
console.log(obj['world'])

/* 
var result = deepCopy(obj)
console.log(JSON.stringify(result))
// 不存在共享引用
result['world'].push(6)
console.log(obj['world'])
 */
