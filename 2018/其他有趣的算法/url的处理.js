/* 
有这样一个URL，http://mail.163.com/?a=1&b=2&c=3&d=xxx&e。
完成函数QuerySearch()，输入参数name，输出其对应的value
 */
function QuerySearch(name) {
  var url = "http://mail.163.com/?a=1&b=2&c=3&d=xxx&e"
  var arr = url.split('?')[1].split('&')
  var result = undefined
  name = name + `=`
  arr.some((val) => {
    if (val.includes(name)) {
      result = val.slice(name.length)
      return true
    }
  })
  return result
}
var result = QuerySearch('d')
console.log(result)
