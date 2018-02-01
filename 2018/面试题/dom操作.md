<!-- 2017/10/3 -->

# dom操作题

## 一、倒计时，百度笔试题

输入某个时间(单位为秒)，然后实现倒计时，当’天‘为0时，隐藏

```html
<style>
  .hind {
    display:none;
  }
</style>
<div id="jsCountdown">
  <span>01天</span>
  <span>02:</span>
  <span>03:</span>
  <span>04</span>
</div>
<script>
  // 对输入时间的处理
  function second(input) {
    var time = input
    var obj = {};
    return (function() {
      var timer = setTimeInterval(function() {
        time--
      }, 1000)
      obj.second = time % 60;
      obj.min = Math.floor(time / 60) % 60;
      obj.hour = Math.floor(time / 3600) % 24;
      obj.day = Math.floor(time / 86400);
      return obj;
    })()
  }
  // 个位数转为两个数的字符串
  function addZero(val) {
    if(val < 10) {
      return '0' + val;
    }
    return val.toString();
  }
  function render(data) {
    var spanArr = document.querySelector('#jsCountdown').querySelectorAll('span');
    if(data.day == 0) {
      spanArr[0].className = 'hide';
    }
    spanArr[0].innerHTML = addZero(data.day) + '天';
    spanArr[1].innerHTML = addZero(data.hour) + ':';
    spanArr[2].innerHTML = addZero(data.min) + ':';
    spanArr[3].innerHTML = addZero(data.second);
  }
  render(second(86400))
</script>
```

```html
<!-- 列表的dom操作 -->
<ul class="list">
  <li class="class1">hello1</li>
  <li class="class2">hello2</li>
  <li class="class3">hello3</li>
  <li class="class4">hello4</li>
  <li class="class5">hello5</li>
  <li class="class6">hello6</li>
  <li class="class7">hello7</li>
  <li class="class8">hello8</li>
  <li class="class9">hello9</li>
  <li class="class10">hello10</li>
</ul>
<script>
  // 添加类
  var list = document.querySelector('.list');
  var bar = list.classList.add('bar');
  // 删除第10个li
  var ten = document.querySelectorAll('li')[9];
  ten.parentNode.removeChild(ten);
  // 第5个li后添加li，内容为 <hello.com />
  var tag = document.createElement('li');
  tag.innerText = '<hello.com />';
  var li5 = document.querySelectorAll('li')[5];
  li5.parentNode.insertBefore(tag, li5);
  // 点击li显示第几项
  var li = document.querySelectorAll('li');
  li.forEach((val, index) => {
    val.addEventListener('click', (event) => {
      event.stopPropagation();
      window.alert(index);
    })
  })
</script>
```
