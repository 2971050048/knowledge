// http://es6.ruanyifeng.com/#docs/promise
var g = function* () {
  try {
    var foo = yield Promise.resolve('foo');
    console.log(1, foo);
  } catch (e) {
    console.log(2, e);
  }
};
var it = g();
function go(result) {
  if (result.done) return result.value;
  return result.value.then(
    (value) =>  go( it.next(value) ), 
    (error) =>  go( it.throw(error) )
  )
}
go(it.next());
