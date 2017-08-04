# babel 学习小结

Babel用于将es6代码转为es5

## 配置文件

---

`yarn add babel-loader babel-core babel-preset-env`
`yarn add babel-runtime babel-plugin-transform-runtime`
`yarn add babel-preset-react babel-eslint`
`yarn add babel-plugin-import`

```js
// 配置文件是.babelrc，存放在项目根目录
// stage-2 是es7转码规则
{
  "presets": ['env','react','stage-2'],
  "plugins": [
    'transform-runtime',
    ["import", { "libraryName": "antd", "style": "css" }],
    ["antd", {"style": true}]
  ],
  "parser": "babel-eslint"
}

// 或者package.json
module.rules: [{
  test: /\.js$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
    options: {
      presets: ['env','react'],
      plugins: ['transform-runtime']
    }
  }]
}]
```

## babel-cli 命令行转码

---

```shell
# 全局
npm i -g babel-cli
babel example.js -o compiled.js # 转码结果写入一个文件
babel src -d lib # 整个目录转码
babel src -d lib -s # -s 参数生成source map文件
```

```shell
# 本地
npm i babel-cli -D
# package.json文件
{
  "scripts": {
    "build": "babel src -d lib"
  }
}
# 转码时: npm run build
```

babel-node是babel-cli的自带命令, 提供支持ES6的REPL环境

```shell
babel-node
> (x => x * 2)(1)
2
```

## babel-register 改写ruquire

```npm i babel-register -D``` </br>
使用require加载.js、.jsx、.es和.es6文件时，先Babel转码

```js
// 文件头加上
require("babel-register");
require("./index.js");
```

## babel-core API转码

---

`$ npm i babel-core -D`</br>
调用Babel的API转码前，需引用babel-core模块。比如使用`babel-plugin-transform-runtime`插件时需先安装`babel-core`模块。

```js
var babel = require('babel-core');
// 字符串转码
babel.transform('code();', options);
// => { code, map, ast }
// 文件转码(异步)
babel.transformFile('filename.js', options, function(err, result) {
  result; // => { code, map, ast }
});
// 文件转码(同步)
babel.transformFileSync('filename.js', options);
// => { code, map, ast }
// Babel AST转码
babel.transformFromAst(ast, code, options);
// => { code, map, ast }
```

## babel-polyfill 转换新的API

---

`$ npm i babel-polyfill -D`</br>

Babel默认只转换新JS句法，而不转换新API。如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，


```js
// 脚本头部加代码
import 'babel-polyfill';
```

## babel-eslint

---

`$ npm i eslint eslint-babel -D`</br>

```js
// .babelrc
{
  "presets": [
    "env",
    "react",
    "stage-2",
  ],
  "plugins": ['transform-runtime'],
  "parser": "babel-eslint",
  "rule": {
  }
}

// package.json
{
  "scripts": {
    "test": "mocha --ui qunit --compilers js:babel-core/register",
    "lint": "eslint my-file.js",
    "build": "babel src -d lib"
  }
}
```

## mocha测试框架

---

```js
// package.json
"scripts": {
  "test": "mocha --ui qunit --compilers js:babel-core/register"
}
// --compilers指定脚本转码器，后缀名为js文件，都需用babel-core/register先转码
```

## 插件

- babel-plugin-transform-runtime

`yarn add babel-runtime babel-plugin-transform-runtime`

用于代替`babel-polyfill`

- babel-plugin-import

```js
// .babelrc
"plugins": [
  ["import", { "libraryName": "antd", "style": "css" }]
]
```

- babel-plugin-dva-hmr

```js
// .babelrc
"plugins": ["dva-hmr"]
```

- babel-plugin-antd

```js
// .babelrc
"plugins": [
  ["antd", {"style": true}]
]
```

## 参考文档

---

[阮一峰：babel入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html)</br>
[babel官网](https://babeljs.io/docs/core-packages/)</br>
[webpack官网 babel-loader](https://doc.webpack-china.org/loaders/babel-loader/)</br>
[github: 如何使用babel-plugin-antd](https://github.com/ant-design/babel-plugin-import/issues/17)</br>
[github: tranform-runtime插件转码的函数](https://github.com/babel/babel/blob/master/packages/babel-plugin-transform-runtime/src/definitions.js)</br>
