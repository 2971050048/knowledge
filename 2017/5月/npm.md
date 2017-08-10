<!-- 2017/5/18  -->

# npm学习笔记

## 一、nvm的安装配置

---

node version management

1、windows安装

[nvm-win下载](https://github.com/coreybutler/nvm-windows/releases)

2、linux安装

```shell
# 安装nvm:
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
source ~/.bashrc
command -v nvm #得到nvm表示安装成功
nvm install node #安装node
nvm use node #使用node
```

3、配置

```shell
nvm node_mirror https://npm.taobao.org/mirrors/node/ # node镜像
nvm npm_mirror https://npm.taobao.org/mirrors/npm/ # npm镜像
nvm install latest|v6.10.3 # 安装nodejs
nvm ls # 显示node安装列表
nvm use 6.10.3 # 使用对应的nodejs
npm config set registry "https://registry.npm.taobao.org/"
```

## 二、yarn的安装

---

1、原理

概念: 用于代替npm的包管理器

架构设计：把安装依赖锁定在固定版上，确保每次安装所产生的 node_modules 目录的文件结构在不同机器上总是一致

2、下载

[win下载](https://yarnpkg.com/zh-Hans/docs/install#windows-tab)

ubuntu下载

```shell
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install yarn
```

centos下载

```shell
sudo wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo
sudo yum install yarn
```

3、配置

```shell
yarn config set registry 'https://registry.npm.taobao.org'
```

## 三、常用命令

---

1、npm常用命令

```shell
npm i <Module> (-g) # 安装
  npm i # 根据package.json安装
  npm i vue-rooter@v0.7.13 -S # 安装指定版本
npm un <Module> (-g) # 卸载
npm up <Module> (-g) # 更新
  npm up # 更新package.json全部
  npm i npm -g # 更新npm
npm ls (-g) # 查看已安装模块
npm show <Module> # 显示模块
npm s <Module> # 搜索
npm cache clear # 清空缓存
npm init # 初始化文件夹
npm test # 等同于npm run test
npm run # 运行自定义脚本
任意命令 -h # 查看帮助，eg. 'npm i -h' 可查看i命令的帮助
```

2、yarn常用命令

```shell
yarn init == npm init
yarn == npm i
yarn add pkg == npm i pkg -S
yarn global add pkg == npm i pkg -g
yarn add pkg -D == npm i pkg -D
yarn remove pkg == npm un pkg -S|-D
yarn upgrade pkg@[version] == npm update pkg@[version]
```

## 四、安装包地址

---

1、windows

- 本地安装: 当前目录
- 全局安装: C:\Users\Administrator\AppData\Roaming\npm\node_modules
- 缓存目录: C:\Users\Administrator\AppData\Roaming\npm-cache

## 五、package.json

---

新建package.json： `npm init | yarn init`</br>
每个项目的根目录，都有package.json文件，定义项目所需模块，以及项目配置信息。

Package.json

```shell
name - 包名
version - 版本号
description - 描述
homepage - 官网 url
author - 作者姓名
contributors - 其他贡献者
dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下
repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上
main -
模块ID,指向程序主要项目。若包名叫express,用户安装它,然后require("express")
keywords - 关键字
```

`npm i <Module>` 添加后缀

```shell
-S, --save: 模块写入dependencies属性.
-D, --save-dev: 模块写入devDependencies属性
-O, --save-optional: 模块写入optionalDependencies属性
```

[node包的测试和使用](https://runkit.com/home)

## 六、参考文档

---

- [nvm-win下载](https://github.com/coreybutler/nvm-windows/releases)
- [nvm教程](https://github.com/coreybutler/nvm-windows)
- [yarn官网](https://yarnpkg.com/zh-Hans/docs)
- [npm教程](http://coloration.cc/npmjs-documentation/2016/03/29/creatingNodejsModules.html)
