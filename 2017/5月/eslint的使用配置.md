<!-- 2017/5/10  -->

# eslint的配置

eslint是代码风格检测工具。是在JS代码中识别模式匹配的工具，目标是保证代码的一致性和避免错误。

配置文件: .eslintrc.js</br>
忽略特定文件和目录: .eslintignore

配置：vscode安装 `eslint` , 全局安装eslint `npm i -g eslint`，然后 `命令面板->eslint:create .eslintrc.json`

## 一、通过注释来禁止规则出现警告

1、块注释: `eslint-disable`

```javascript
/* eslint-disable no-alert */
alert("foo");
/* eslint-enable no-alert*/
```

2、行注释: `eslint-disable-line` 或 `eslint-disable-next-line`

```javascript
alert("foo"); // eslint-disable-line no-alert
```

## 二、具体规则和中文解释

vscode命令端：`eslint: create ".eslintrc.json" file` 

```json
// .eslintrc.json
{
  "root": true, // 停止在父级目录中寻找
  "parser": "babel-eslint", //设置解析器(需先npm安装)，ESLint默认使用Espree为解析器
  "parserOptions": {
    "ecmaVersion": 6, //支持es6语法
    "sourceType": "module", //script(默认)|module
    "ecmaFeatures": { //额外的语言特性
      "jsx": true, //启用jax
      "globalReturn": true, //允许在全球作用域用return语句 
      "impliedStrict": true //启动全局"strict mode"
    }
  },
  "env": { //预定义的全局变量
    "browser": true,
    "mocha": true, //添加所有mocha测试的全局变量
    "node": true, //nodejs全局变量和作用域
    "es6": true //自动设置parserOptions.ecmaVersion值为6
  },
  "globals": { //定义全局变量
    "var1": true, //允许被重写
    "var2": false, //只读
    "example/custiom": true //添加插件环境
  },
  // 规则继承，使用npm包，"eslint-config-standard",其中"eslint-config-"可省略;
  // eslint:recommended 则启用打钩的核心规则;
  // eslint:all启动所有核心规则
  "extends": "standard",
  // extends: ["standard", "plugin: react/recommended"],//添加插件的规则
  "plugins": [ //插件列表，可以省略"eslint-plugin-"前缀
    "html",
    "eslint-plugin-react",
    "example"
  ],
  //"off"或0关闭规则,"warn"或1开启规则，不会导致程序退出,"error"或2-开启规则,被触发时程序退出
  "rules": {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  }
}
```

## 三、react-native的eslint配置

```json
// .eslintrc.json
{
  // 需要 `yarn add eslint eslint-plugin-react babel-eslint -D`
  "parser": "babel-eslint",
  "extends": "eslint:recommended",
  "plugins": [
    "react"
  ],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
}
```

## 四、参考文档

- [官网：eslint使用规则](http://eslint.cn/docs/rules/)
- [standard扩展规则详解](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md)
- [eslint官网](http://eslint.cn/docs/user-guide/configuring)
