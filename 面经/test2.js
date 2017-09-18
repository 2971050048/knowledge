Object.prototype.clone = function() {
  var newObj = Object.create(Object.getPrototypeOf(this)); // 原型保持一致
  var propNames = Object.getOwnPropertyNames(this); // 自身属性保持一致
  propNames.forEach(function(item) {
    var des = Object.getOwnPropertyDescriptor(this, item); // 属性特性保持一致
    Object.defineProperty(newObj, item, des);
  }, this)
  return newObj;
}

var a = [1,2,3]
console.log(a, a.clone());