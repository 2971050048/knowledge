<!-- 2017/5/16  -->

# vscode

- [vscode](#vscode)
  - [一、快捷键](#%E4%B8%80%E3%80%81%E5%BF%AB%E6%8D%B7%E9%94%AE)
  - [二、问题解决](#%E4%BA%8C%E3%80%81%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3)
  - [三、插件](#%E4%B8%89%E3%80%81%E6%8F%92%E4%BB%B6)
  - [四、调试](#%E5%9B%9B%E3%80%81%E8%B0%83%E8%AF%95)
  - [五、自定义代码段](#%E4%BA%94%E3%80%81%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BB%A3%E7%A0%81%E6%AE%B5)
  - [五、参考文档](#%E4%BA%94%E3%80%81%E5%8F%82%E8%80%83%E6%96%87%E6%A1%A3)

## 一、快捷键

1、文件

```shell
ctrl+alt+n 指定目录新建文件
ctrl+shift+n 新建窗口
ctrl+w 关闭编辑器
ctrl+shift+w 关闭窗口
```

2、编辑

```shell
ctrl+f|h 查找|替换
ctrl+shift+f|h 在文件中国查找|替换
ctrl+/ 行注释
ctrl+shift+a 块注释
```

3、选择

```shell
alt+up 代码向上一行
ctrl+m 添加下一个匹配项
ctrl+k ctrl+m 取消下一个的匹配
ctrl+shift+l 选择所有的匹配
```

4、查看

```shell
ctrl+shift+p 命令面板
ctrl+shift+e|f|g|d|x 资源|find|git|debug|扩展
ctrl+j 切换面板
ctrl+m|y message|调试控制台
f11 全屏
ctrl+k z zen模式
ctrl+\ 拆分编辑器
alt+shift+1 切换编辑器布局
alt+z 切换自动换行
```

5、转到

```shell
ctrl+tab 切换编辑器
ctrl+p 转到文件
ctrl+shift+o 转到文件中的符号
```

6、调试

```shell
f5 调试
ctrl+f5 非调试启动
shift+f5 停止调试
ctrl+shift+f5 重启调试
f10|f11|shift+f11|f5 单步|进入|跳出|继续
ctrl+shift+b 运行生成任务
```

```shell
代码折叠 ctrl+shift+[
  全部打开 ctrl+k ctrl+0
  全部折叠 ctrl+k ctrl+9(自己定义的)
```

## 二、问题解决

1、终端设置："terminal.integrated.shell.windows": "C:\\WINDOWS\\Sysnative\\WindowsPowerShell\\v1.0\\powershell.exe",

2、集成终端错位：打开命令行，右键属性->使用旧版控制台

3、查找时正则的使用，

- 去掉中文大括号：`（(.+?)）`替换成 `$1`
- 去掉`---和一行`：`---\n\n`

## 三、插件

1、theme

- dracula official 漂亮的theme color
- one dark pro 漂亮的theme color
- markdown preview github styling

2、lint

- stylelint
  - .stylelintrc.json
- eslint
  - .eslintrc.js
- markdownlint
  - `markdown:open preview to the side`：打开侧边预览
  - `markdown:open preview`：打开预览
- prettify json
  - 命令面板 -> prettify json即可, 要求是json文件里不能有注释，不然用不了这个插件
- tslint

3、function

- advanced new file
  - 新建文件，`ctrl+alt+n`
  - 设置："newFile.showFullPath": false
- auto rename tag
  - 自动重命名html标签
- beautify - 代码格式化，`ctrl+alt+c` (自)
  - 设置文件: .jsbeautifyrc，[参考](https://github.com/victorporof/Sublime-HTMLPrettify/blob/master/.jsbeautifyrc)
  - 设置快捷键: `open keyboard shortcuts files` -> `{ "key": "ctrl+alt+c", "command": "HookyQR.beautify", "when": "editorFocus" }`
- color highlight
  - 颜色自动高亮
- document this
  - 生成ts的函数注释
  - 快捷键：`ctrl+alt+d` 两次
- filesize: 左下角显示文件大小，点击可显示详细信息
- GBKtoUTF8: 自动把文件编码方式换成utf8
- git history: view file|git|line history
- settings sync
  - 同步vscode的设置，
  - 设置权限：`chmod a+x /home/perhaps/.vscode/extensions/Shan.code-settings-sync-2.8.2/node_modules/opn/xdg-open`
  - 使用：先在github gist中得到token值，vscode命令面板 `sync:upload settings` 上传设置，另一电脑 `sync:download settings` 输入gist值获取设置
  - GitHub Token: a22fd147a42adec966dd044f08f5bcb1bdbb82d5
  - gist id: f08bf2164e53d3e010c2cb1928cdaffb
  - 出错的话: `sync:reset extension settings`
- view in browser
- vim
- debugger for chrome

4、snippet

- html snippets
  - 设置user: 允许在其他哪些文件使用html代码提醒
- markdown all in one
  - `alt+b|i|c` toggle bold|italic|taskList
  - `ctrl+shift+]` uplevel heading
- reactjs code snippets
  - 1
  - rcc → 标准样式
  - rccp → 标+propType
  - rcfc → 标+生命周期
  - rsc → 函数样式
  - con → constructor函数
  - conc → +context
  - est → state对象
  - 2
  - cwm → componentWillMount
  - cdm → componentDidMount
  - cwr → componentWillReceiveProps
  - scu → shouldComponentUpdate
  - cwup → componentWillUpdate
  - cdup → componentDidUpdate
  - cwun → componentWillUnmount
  - 3
  - sst → setState函数
  - ssf → setState函数+回调函数
  - ren → render函数
  - 4
  - props→this.props
  - state→this.state
  - bnd → binds一个函数

## 四、调试

```js
// launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "启动程序",
      "program": "${file}"//基于当前文件调试
      // "program": "${workspaceRoot}\\src\\main.js"
    }
  ]
}
```

configurations的属性

基本配置

- type - 配置类型
- request - 请求配置类型,值为"launch"或"attach"
- name - 配置名称,在启动配置下拉菜单显示

可选择的配置

- preLaunchTask - 调试会话开始前需运行的任务, 任务在tasks.json里
- internalConsoleOptions - 内部调试控制台的控制行为
- debugServer - 仅用于调试扩展开发: 如果执行端口，则尝试连接到服务器模式中的调试适配器

很多debug调试器用到的属性

- program - 程序的绝对路径: 通过查看package.json的值
- args - 传递给program的参数
- env - 传递给program的环境变量
- cwd - 工作目录的绝对路径current working directory
- port - 调试要附加的端口
- stopOnEntry - 启动后自动停止程序
- console - 启动调试控制台的位置, 值为internalConsole, integratedTerminal,  externalTerminal.

## 五、自定义代码段

1、javascript

```json
"while1": {
  "prefix": "while1",
  "body": [
    "while(1) {",
    "  if($1) break;",
    "  $2",
    "}"
  ]
},
"for": {
  "prefix": "for",
  "body": [
    "for(var ${1:i} = 0${2:, len = ${3:arr}.length}; ${1:i} < ${4:len}; ${1:i}++) {",
    "  $5",
    "}"
  ]
},
"some": {
  "prefix": "some",
  "body": [
    "${1:array}.some((val${2:, index}) => {",
    "  $3",
    "})"
  ]
},
"foreach": {
  "prefix": "foreach",
  "body": [
    "${1:array}.forEach((val${2:, index}) => {",
    "  $3",
    "})"
  ]
},
"ifelse": {
  "prefix": "ifelse",
  "body": [
    "if($1) {",
    "  $2",
    "} else {",
    "  $3",
    "}"
  ]
},
"ifelseif": {
  "prefix": "ifelseif",
  "body": [
    "if($1) {",
    "  $2",
    "} else if($3) {",
    "  $4",
    "} else {",
    "  $5",
    "}"
  ]
},
"binary": {
  "prefix": "binary",
  "body": [
    "while(1) {",
    "  if(low > high) break",
    "  mid = parseInt((low + high) / 2)",
    "  if(arr[mid] > ${1:target}) {",
    "    $2",
    "  } else if(arr[mid] < ${3:target}) {",
    "    $4",
    "  } else {",
    "    $5",
    "  }",
    "}"
  ]
}
```

## 五、参考文档

- [官方文档](https://code.visualstudio.com/docs#vscode)
- [中文文档](https://jeasonstudio.gitbooks.io/vscode-cn-doc/content/)
- [debug参考](https://code.visualstudio.com/docs/editor/debugging)
