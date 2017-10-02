// 实时渲染
var timeago3 = timeago();
timeago3.render(document.querySelectorAll('.need_to_be_rendered'), 'zh_CN');

//不能清除渲染的定时器效果？？？？
document.querySelector('.button1').addEventListener('click', function() {
    alert('1');
    timeago3.cancel();
})