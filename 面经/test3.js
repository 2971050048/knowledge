// 迅雷笔试，括号匹配
var parens = '([{<>}])'

function t(parens) {
  var arr = [];
  var str = parens;
  if(str.length % 2 === 1) {
    return false;
  }
  for(var i = 0, len = str.length; i < len; i++) {
    var n = leftBrace(str[i])
    if(n !== -1) {
      arr.push(n);
    } else {
      var r = rightBrace(str[i]);
      var l = arr.pop();
      if(r !== l) {
        return false;
      }
    }
    if(i == len - 1) {
      return true;
    }
  }
}

function leftBrace(char) {
  var str = '([{<';
  return str.indexOf(char);
}

function rightBrace(char) {
  var str = ')]}>';
  return str.indexOf(char);
}

console.log(t(parens))

// 迅雷笔试，数组去重

Array.prototype.unique = function(){
  var n = [];
  for(var i = 0, len = this.length; i < len; i++) {
    if(n.indexOf(this[i]) === -1) {
      n.push(this[i]);
    }
  }
  return n;
}