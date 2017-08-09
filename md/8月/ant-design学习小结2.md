<!-- 2017/8/2  -->

# ant-design 2

对于IE系列浏览器,使用`babel-polyfill`和`babel-plugin-transform-runtime`

## 一、dva

---

1、简介

dva是轻量应用框架，基于react和redux。支持side effects、热替换、动态加载、react-native、SSR。

2、dva-cli的使用

```shell
npm i dva-cli -g
dva new dva-demo
cd dva-demo
npm start
```

3、使用antd

```shell
npm i antd babel-plugin-import -S
```

babel-plugin-import是用来按需加载antd脚本和样式

4、编辑`.roadhogrc`，使`babel-plugin-import`插件生效。

```js
"extraBabelPlugins": [
  "transform-runtime",
  ["import", { "libraryName": "antd", "style": "css" }]
],
```

## 二、参考文档

---

- [官网教程](https://ant.design/docs/spec/colors-cn)
