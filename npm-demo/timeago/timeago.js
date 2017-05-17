/**
 * https://www.npmjs.com/package/timeago.js
 * 将datetime时间转化成类似于'***时间前'的描述字符串
 */

// import timeago from 'timeago.js';
var timeago = require('timeago.js');

//基本用法
var timeago1 = timeago();
console.log(timeago1.format('2016-06-12'));//10 months ago

//设置相对时间
var timeago2 = timeago('2016-06-10 12:12:12');
console.log(timeago2.format('2016-06-12 13:00', 'zh_CN'));//2天后
console.log(Object.getPrototypeOf(timeago2));

// 格式化时间戳
console.log(timeago().format(new Date() - 10 * 60 * 60 * 1000, 'zh_CN')); //10小时前

// 自动实时渲染
// 被渲染的节点必须要有datetime或者data-timeago属性，属性值为日期格式的字符串。
//html:    <div class="need_to_be_rendered" data-timeago="2017-5-9 7:16:00">1</div>
// var timeago3 = timeago();
// timeago3.render(document.querySelectorAll('.need_to_be_rendered'), 'zh_CN');

// 本地化的字典样式
var cht_dict = function(number, index, total_sec) {
  // number：xxx 时间前 / 后的数字；
  // index：下面数组的索引号；
  // total_sec：时间间隔的总秒数；
  return [
    ['剛剛', 'a while'],
    ['%s秒前', 'in %s seconds'],
    ['1分鐘前', 'in 1 minute'],
    ['%s分鐘前', 'in %s minutes'],
    ['1小時前', 'in 1 hour'],
    ['%s小時前', 'in %s hours'],
    ['1天前', 'in 1 day'],
    ['%s天前', 'in %s days'],
    ['1周前', 'in 1 week'],
    ['%s周前', 'in %s weeks'],
    ['1月前', 'in 1 month'],
    ['%s月前', 'in %s months'],
    ['1年前', 'in 1 year'],
    ['%s年前', 'in %s years']
  ][index];
};

timeago.register('cht', cht_dict);
var timeago4 = timeago();
console.log('Traditional Chinese',timeago4.format('2016-06-12', 'cht'));