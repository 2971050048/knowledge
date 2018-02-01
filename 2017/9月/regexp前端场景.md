<!-- 2017/9/1 -->

# regexp前端常见场景

## 一、千位分隔符

```javascript
// 正则的实现
function milliFormat (num) {
  const DIGIT_PATTERN = /^\d+/g; // 取整数
  const MILLI_PATTERN = /(?=(?!^)(\d{3})+$)/g; // 识别千分位
  let str = num ? num.toString() : '';
  return str.replace(DIGIT_PATTERN, (m) => {
    return m.replace(MILLI_PATTERN,  ',')
  })
}
```

```javascript
// 普通实现
const milliFormat = (num) => {
  let arr = num ? num.toString().split('') : [];
  let count = 0;
  let arr2 = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    count++;
    arr2.push(arr[i])
    if(count == 3) {
      arr2.push(',');
      count = 0;
    }
  }
  return arr2.join('');
}
```

## 参考文档

- [千位分隔符的完整攻略](https://segmentfault.com/a/1190000002884224)
