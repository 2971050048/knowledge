<!-- 2017/7/30  -->

# stylelint

## 一、使用

安装vscode插件 `stylelint` , 当前目录新建文件 `.stylelintrc.json`。

```json
// .stylelintrc.json 举例
{
  "rules": {
    "indentation": 2,
    "block-no-empty": null,
    "color-no-invalid-hex": true,
    "declaration-colon-space-after": "always",
    "max-empty-lines": 2,
    "rule-empty-line-before": [ "always", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    } ],
    "unit-whitelist": ["em", "rem", "%", "s", "vh", "px", "deg"]
  }
}
```

## 二、参考文档

- [github: stylelint](https://github.com/stylelint/stylelint/)
- [github: 规则配置](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/example-config.md)
