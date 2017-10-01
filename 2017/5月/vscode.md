<!-- 2017/5/16  -->

# vscode

## 一、快捷键

1、默认快捷键

```shell
切换自动换行 alt+z
多行编辑 ctrl+alt+箭头|alt+f3
多列选择 alt+shift+鼠标或箭头
复制该行 ctrl+shift+d,删除行 ctrl+shift+k
注释 ctrl+/ 或者 ctrl+shift+/
f2可以重命名一个变量，右键也行
代码折叠 ctrl+shift+[, 点击'-'也行
  全部打开 ctrl+k ctrl+0
  全部折叠 ctrl+k ctrl+9(自己定义的)
移动代码 ctrl+[
代码错误警告 ctrl+k n
转化为小写 ctrl+k ctrl+l
关闭当前文件 alt+f4
全屏模式: f11
zen模式：shift+f11 (只看代码)
多行代码变成一行: ctrl+j
切换侧边栏可见性: ctrl+b
定位到指定行数: ctrl+g
搜索整个工作区文件，找到指定代码: ctrl+shift+f
```

2、自定义快捷键

```shell
全部折叠: ctrl+k ctrl+9
emmet: tab改成了'alt+c e'
新建文件: ctrl+alt+n
代码格式化: alt+c b
color picker: alt+c p|c
代码提醒细节显示: ctrl+alt+space
```

## 二、问题解决

1、终端设置："terminal.integrated.shell.windows": "C:\\WINDOWS\\Sysnative\\WindowsPowerShell\\v1.0\\powershell.exe",

2、集成终端错位：打开命令行，右键属性->使用旧版控制台

3、查找时正则的使用，

- 去掉中文大括号：`（(.+?)）`替换成 `$1`
- 去掉`---和一行`：`---\n\n`

## 三、插件

> 亲测有用的

- advanced new file

  - 新建文件，`ctrl+alt+n`
  - 设置："newFile.showFullPath": false

- auto rename tag

  - 自动重命名html标签

- beautify

  - 代码格式化，`alt+c b` (自)
  - 设置方法: open keyboard shortcuts ->搜索HookyQR.beautify
  - 设置文件: .jsbeautifyrc，[参考](https://github.com/victorporof/Sublime-HTMLPrettify/blob/master/.jsbeautifyrc)

- color highlight

  - 颜色自动高亮

- color picker

  - `alt+c p|c`(自)
  - 设置："colorHelper.pickerForm": "simple" //面板设为简单模式

- eslint

  - .eslintrc.js

- filesize: 左下角显示文件大小，点击可显示详细信息

- GBKtoUTF8: 自动把文件编码方式换成utf8

- git history: view file|git|line history

- html snippets

- HTML Snippets

设置user: 允许在其他哪些文件使用html代码提醒

```js
"files.associations": {
  "*.ejs": "html",
  "*.js": "html"
}
```

- markdown preview github styling

- markdownlint

  - `markdown:open preview to the side`：打开侧边预览
  - `markdown:open preview`：打开预览

- prettify json

  - 命令面板 -> prettify json即可, 要求是json文件里不能有注释，不然用不了这个插件

- reactjs code snippets

  - rcc → 标准样式
  - rccp → 标+propType
  - rcfc → 标+生命周期
  - rsc → 函数样式
  - con → constructor函数
  - conc → +context
  - est → state对象

  - cwm → componentWillMount
  - cdm → componentDidMount
  - cwr → componentWillReceiveProps
  - scu → shouldComponentUpdate
  - cwup → componentWillUpdate
  - cdup → componentDidUpdate
  - cwun → componentWillUnmount

  - sst → setState函数
  - ssf → setState函数+回调函数
  - ren → render函数

  - props→this.props
  - state→this.state
  - bnd → binds一个函数

- settings sync

  - 同步vscode的设置，
  - 设置权限：`chmod a+x /home/perhaps/.vscode/extensions/Shan.code-settings-sync-2.8.2/node_modules/opn/xdg-open`
  - 先在github gist中得到token值，vscode命令面板 `sync:upload settings` 上传设置，另一电脑 `sync:download settings` 输入gist值获取设置
  - github token: 63b24465c362d768ea0dbffa12b9907b242c4f84
  - github gist: 5a60a18a38b5ec12456cf18bdfa68358 (lattop)

- stylelint

  - .stylelintrc.json

- sublime text keymap

- view in browser

- vim

- vscode-icons

  - 在每个文件前添加图标
  - 使用: `命令面板 -> preferences: file icon theme -> vscode icon`

> 暂时没用到

- debugger for chrome
- intellisense for css class name
- powershell
- vetur，vue，vue2 snippets，vue-beautify

## 四、setting

1、基本设置

- 用户设置：命令面板 -> preferences: open user setting ->  点击行前面那只笔就能设置
- 工作区设置：命令面板 -> preferences: open workspace setting
- 特定语言设置：命令面板 -> preferences: configure language special setting
- 界面语言: 命令面板 -> configure language

2、调试

- 断点: f9
- step into|out|over: f11|shift+f11|f10
- 启动|停止|重启: f5|shift+f5|ctrl+shift+f5

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

## 五、参考文档

- [官方文档](https://code.visualstudio.com/docs#vscode)
- [中文文档](https://jeasonstudio.gitbooks.io/vscode-cn-doc/content/)
- [debug参考](https://code.visualstudio.com/docs/editor/debugging)
