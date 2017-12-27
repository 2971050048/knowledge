<!-- 2017/8/9  -->

# ubuntu学习笔记一

电脑换成了ubuntu系统，前期有点不适应，各种配置和脚本都完成后，我才算慢慢的体会到ubuntu的优雅。文章包括常用快捷键，快捷命令以及最常用的软件。
<!--more-->

- [ubuntu学习笔记](#ubuntu%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0)
  - [一、快捷键](#%E4%B8%80%E3%80%81%E5%BF%AB%E6%8D%B7%E9%94%AE)
  - [二、快捷命令和命令免密](#%E4%BA%8C%E3%80%81%E5%BF%AB%E6%8D%B7%E5%91%BD%E4%BB%A4%E5%92%8C%E5%91%BD%E4%BB%A4%E5%85%8D%E5%AF%86)
  - [三、必备软件](#%E4%B8%89%E3%80%81%E5%BF%85%E5%A4%87%E8%BD%AF%E4%BB%B6)

## 一、快捷键

1、 通用

- `super`: 长按后得到快捷键大全
- `alt+f1`: 左侧任务栏
- `alt+space|f10`: 窗口菜单|指示器菜单
- `alt+f4`: 退出程序
- `ctrl+shift+f1|f7`: 首个虚拟终端，当前登录会话
- `super+w`: 展开所有窗口
- `super+ctrl+allow`: 窗口变形
- `alt+leftMouse|middleMouse`: 拖动窗口|调整大小

2、 终端

- `ctr+alt+t`: 打开终端
- `ctrl+shift+v`: 粘贴
- `ctrl+shift+t|ctrl+d|alt+num`: 新建|关闭|选择标签页
- `ctrl+d`: 清屏
- `tab+tab`: 显示所有命令

3、工作区

- `super+s`: 所有工作区
- `ctrl+alt+allow`: 切换工作区
- `ctrl+alt+shift+allow`: 当前程序到另一个工作区

## 二、快捷命令和命令免密

1、快捷方式: `vim ~/.bash_aliases`

```shell
alias vim='sudo vim'
alias apt='sudo apt-fast -y'
alias apti='sudo apt-fast install -y'
alias apt-get='sudo apt-fast -y'
alias apt-fast='sudo apt-fast -y'
alias dpkg='sudo dpkg'
alias dpkgi='sudo dpkg -i'
alias kcpstart='~/Documents/overwall/kcpstart.sh'
alias sshstart='ssh root@138.128.207.165 -p 29487 -i ~/.ssh/id_rsa'
```

2、免密登录: `sudo visudo -f /etc/sudoers.d/mysudoers`,

```shell
perhaps ALL=(ALL) NOPASSWD: /usr/bin/apt-get
perhaps ALL=(ALL) NOPASSWD: /usr/sbin/apt-fast
perhaps ALL=(ALL) NOPASSWD: /usr/bin/dpkg
perhaps ALL=(ALL) NOPASSWD: /usr/bin/vim
perhaps ALL=(ALL) NOPASSWD: /home/perhaps/Documents/script/kcptun/client_linux_amd64
```

改权限: `sudo chmod 0440 /etc/sudoers.d/mysudoers`

## 三、必备软件

1、基本软件

```shell
sudo apt-get install -y vim git curl python-pip
```

2、apt-fast

```shell
sudo add-apt-repository ppa:saiarcot895/myppa
sudo apt-get update
sudo apt-get install -y apt-fast
```

3、shadowsocks

(1) 安裝 shadowsocks-qt5

```shell
sudo add-apt-repository ppa:hzwhuang/ss-qt5 -y
sudo apt update
sudo apt install shadowsocks-qt5 -y
```

(2) 安裝 genpac

```shell
pip install genpac
pip install --upgrade genpac
genpac -p="SOCKS5 127.0.0.1:1080" -o=~/Documents/overwall/gfwoutput.txt
```

配置: network -> proxy -> automatic-> `file:///home/perhaps/Documents/overwall/gfwoutput.txt`

(3) 安装 kcptun

```shell
cd ~/Documents/overwall
wget https://github.com/xtaci/kcptun/releases/download/v20171201/kcptun-linux-amd64-20171201.tar.gz -e use_proxy=yes -e http_proxy=127.0.0.1:1080
tar -zxvf kcptun-linux-amd64-20171201.tar.gz
rm kcptun-linux-amd64-20171201.tar.gz
```

(4) 启动脚本 `vim ~/Documents/overwall/kcpstart.sh`

```shell
cd /home/perhaps/Documents/overwall
sudo ./client_linux_amd64 -r "138.128.207.165:6001" -l ":0202" -mode fast2
echo 'kcptun start success'
```

赋予权限：`chmod a+x kcpstart.sh`

4、chrome

官网下载deb包: [chrome](https://www.google.com/chrome/browser/desktop/index.html)

`dpkgi google-chrome-stable_current_amd64.deb`

5、vscode

官网下载deb包: [vscode](https://code.visualstudio.com/Download)

`dpkgi code_1.18.0-1510145176_amd64.deb`

6、sogou输入法

- 官网下载deb包: [sogou](https://pinyin.sogou.com/linux/?r=pinyin)
  - `dpkgi sogoupinyin_2.2.0.0102_amd64.deb`
- 使用fcitx框架: "language support" -> "input method: fcitx"
- 添加sogou输入法: `fcitx configuration` -> "+"

7、wps

(1) 安装

官网下载deb包: [wps](http://wps-community.org/downloads)

`dpkgi wps-office_10.1.0.5707_a21_amd64.deb`

(2) 字体

- [缺失的字体](https://pan.baidu.com/s/1o8ujqhc)
- [github:yahei consolas hybrid](https://github.com/yakumioto/YaHei-Consolas-Hybrid-1.12)
  - 安装：`wget -qO- https://raw.githubusercontent.com/yakumioto/YaHei-Consolas-Hybrid-1.12/master/install.sh | sudo sh`
- [字体天下官网](http://www.fonts.net.cn/)
  - 微软雅黑字体: msyhbd.ttf
  - 汉仪全唐诗： HanYiQuanTangShiJian-1.ttf
  - 文泉驿字体： WenQuanWeiMiHei-1.ttf

(3) 字体的安装

```shell
sudo mkdir /usr/share/fonts/myfont
sudo cp * /usr/share/fonts/myfont/*
sudo chmod 644 /usr/share/fonts/myfont/*
sudo mkfontscale
sudo mkfontdir
sudo fc-cache
```

(4) 支持中文输入法

`vim /usr/bin/wps` 还有wpp和et

```shell
#!/bin/bash 后添加
export XMODIFIERS="@im=fcitx"
export QT_IM_MODULE="fcitx"
```

`vim etc/environment`

```shell
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx
```

(5) 问题: 缺失`libpng12-0`

```shell
sudo apt-add-repository "deb http://us.archive.ubuntu.com/ubuntu/ xenial main universe"
apt update
apti -f
```
