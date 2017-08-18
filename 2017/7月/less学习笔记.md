<!-- 2017/7/20  -->

# less学习笔记

## 一、安装

Less是CSS预处理语言，增加变量、混合、函数等功能。

```shell
# 安装
yarn add less-loader less
# webpack.config.js配置
module.rules[{
  test: '\.less$',
  use: [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader',
    options: {sourceMap: true}
  }, {
    loader: 'less-loader',
    options: {sourceMap: true}
  }]
}]
```

## 二、变量

将常用的值定义在一个地方

```less
@mySelector: a; // 选择器
@bgi: background-images; // 变量名
@link-color: #428bca; // 变量值
@images: './img'; // url

.@{mySelector} {
  color: @link-color;
  @{bgi}: url('@{images}/hello.png');
}

@import '@{images}/test.less'
```

## 三、嵌套规则

```less
#button {
  .button(@radius) {
    color: green;
    border-radius: @radius;
    &:hover {
      background-color: white;
    }
  }
}

#header {
  color: @link-color;
  #button > .button(4px);
  .logo {
    font-size: 12px;
  }
  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

## 四、运算和范围

```less
@num: 1px + 5; // 6px
#footer {
  color: #888 / 4;
  margin: @num; // 2px, 懒加载
  @num: 2px;
}
```

## 五、函数

Less 内置多种函数用于转换颜色、处理字符串、算术运算等

```less
@base: #f04615;
@width: 0.5;

.hello {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%); // 饱和度增加5%
  background-color: spin(lighten(@base, 25%), 8); // 亮度降低25%
}
```

1、data-uri

资源内联进样式表

```less
@images: './img/hello.png';
.logo {
  background: data-uri('${images}');
}
// 输出
.logo {
  background: url('data:image/png;base64,bm90IGFjdHVhbGx5IGEganBlZyBmaWxlCg==');
}
```

2、列表函数

```less
@list: 'green', 'blue', 'yellow', 'red';
.logo {
  color: extract(@list, 3); // yellow
  border: unit(length(@list), 'px'); // 4px
}
```

## 六、条件和循环

```less
// 条件语句
button when (@my-option = true) {
  color: white;
}
& when (@my-option = true) {
  button {
    color: white;
  }
  a {
    color: blue;
  }
}

// 循环语句
.g(@n, @i: 1) when (@i <= @n) {
  .column-@{i} {
    width: (@i * 100% / @n);
  }
  .g(@n, (@i + 1));
}
.g(4);
// 输出结果为
.column-1 {
  width: 25%;
}
.column-2 {
  width: 50%;
}
.column-3 {
  width: 75%;
}
.column-4 {
  width: 100%;
}
```

## 七、合并和父选择器

需要合并的属性后添加'+'标示。聚合多个属性形成逗号分隔的单一属性。

```less
// 合并
.mixin() {
  box-shadow+: inset 0 0 10px #555;
}
.myclass {
  .mixin();
  box-shadow+: 0 0 20px black;
}
// 输出
.myclass {
  box-shadow: inset 0 0 10px #555, 0 0 20px black;
}

// 父选择器
.button {
  &-ok {
    background: green;
  }
  &-cancel {
    background: red;
  }
  &-custom {
    background: blue;
  }
}
// 输出
.button-ok { background: green }
.button-cancel { background: red }
.button-custom { background: blue }
```

## 八、参考文档

- [官网教程](http://less.bootcss.com/features/#variables-feature)</br>
