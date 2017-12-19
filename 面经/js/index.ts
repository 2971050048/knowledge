function shallowCopy(obj) {
  var newObj = {}
  Object.keys(obj).forEach((val) => {
    newObj[val] = obj[val]
  })
  return newObj
}
