/* 
正则
实现函数，将字符串的空格替换成“%20”。如，字符串为We Are Happy.替换为We%20Are%20Happy。
 */
function replaceSpace(str) {
  var pattern = /\s/g
  return str.replace(pattern, '%20')
}
// 16ms, 5212k
