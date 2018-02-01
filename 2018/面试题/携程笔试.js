// 1. 树遍历
var nArr = []
var arr = [0,'A','B','C','D','E','F','G','H','I','J','K']
var i = 1
function preOrder(i) {
  var len = arr.length
  if(i < len) {
    // 先序遍历，如果是中序或者后序，换下位置就行了
    nArr.push(arr[i])
    if(2 * i < len) preOrder(2 * i)
    if((2 * i + 1) < len) preOrder(2 * i + 1)
  }
}
preOrder(i)

// 2. json的key首字母变为大写
function toUpperCase(data) {
  var nVal = '', nData = {}
  for(var val in data) {
    var nVal = val.replace(/^[a-z]/, function(char) {
      var codeAt = char.charCodeAt() - 32
      return String.fromCharCode(codeAt)
    })
    if(data[val]) {
      nData[nVal] = data[val]
    }
    // var codeAt = val.charAt().charCodeAt()
    // if(codeAt >=97 && codeAt <= 122) {
    //   codeAt -= 32
    //   nVal = String.fromCharCode(codeAt) + val.slice(1)
    // } else {
    //   nVal = val
    // }
    // nData[nVal] = data[val]
  }
  return nData
}
var data = {'abc': 'abc', 'hello': 'wordl', 'ab': 1}
var nData = toUpperCase(data)
console.log(JSON.stringify(nData))

// 3. 去重
var n = read_line()
n = n.split(',')
var result = [];
for(var i = 0, len = n.length; i < len; i++) {
  if(result.indexOf(n[i]) === -1) {
    result.push(n[i]);
  }
}
print(result.join(','))
