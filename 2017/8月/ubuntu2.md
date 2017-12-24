<!-- 2017/8/11  -->

# linux使用小结2

## 一. 帮助

- ubuntu桌面指南: `super+a`，再输入`help`
- 改密码：`sudo passwd perhaps` lizi Poi12345
- 去掉密码环：`super+a` -> `seahorse`, 右键`密码`，更改密码为空
- 查看对应进程：`ps -aux | grep '程序名'` -> `sudo kill <pidNumber>`
- 修改主机名：`sudo vim /etc/hosts` 改第二行,再重启电脑
- 耳机没有声音：`sudo apt-fast install pavucontrol` -> `pavucontrol` -> 配置的hda关了，输出设备改为模拟耳机

## 二. 有用的软件

2.1 redshift

护眼

`sudo apt-get install redshift gtk-redshift`

配置文件: `~/.config/redshift.conf`

[github:配置文件参考](https://github.com/Arondight/profile/blob/master/redshift/redshift.conf)

2.2 fishshell

```shell
sudo apt-add-repository ppa:fish-shell/release-2
sudo apt-get update
sudo apt-get install fish
```

配置：`fish_config`</br>
设置`prompt`为`minimalist`

- [阮：入门教程](http://www.ruanyifeng.com/blog/2017/05/fish_shell.html)

函数实现.bash_aliases

`vim ~/.config/fish/config.fish`

```shell
function apt
  sudo apt-fast -y $argv
end

function apti
  sudo apt-fast install -y $argv
end

function apt-get
  sudo apt-fast -y $argv
end

function apt-fast
  sudo apt-fast -y $argv
end

function dpkg
  sudo dpkg $argv
end

function dpkgi
  sudo dpkg -i $argv
end

function vim
  sudo vim $argv
end
```

2.3 wine

- 安装

```shell
# wine
sudo dpkg --add-architecture i386
wget -nc https://dl.winehq.org/wine-builds/Release.key
sudo apt-key add Release.key
sudo apt-add-repository https://dl.winehq.org/wine-builds/ubuntu/
sudo apt-get update
sudo apt-get install --install-recommends winehq-stable -y
```

```shell
# winetricks
wget https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks
chmod +x winetricks
sudo mv winetricks /usr/local/bin
```

- 配置

```shell
winecfg # 配置环境
```

- wine支持中文

`vim ~/Documents/zh.reg`

```shell
REGEDIT4

[HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\FontLink\SystemLink]
"Lucida Sans Unicode"="msyh.ttf"
"Microsoft Sans Serif"="msyh.ttf"
"MS Sans Serif"="msyh.ttf"
"Tahoma"="msyh.ttf"
"Tahoma Bold"="msyh.ttf"
"SimSun"="msyh.ttf"
"Arial"="msyh.ttf"
"Arial Black"="msyh.ttf"
```

`regedit zh.reg`

重启wine后搞定

- 目录: `home/perhaps/.wine`

- [wine安装官网](https://wiki.winehq.org/Ubuntu)
- [winetricks](https://github.com/Winetricks/winetricks)

2.4 apt-fast

```shell
sudo add-apt-repository ppa:saiarcot895/myppa
sudo apt-get update
sudo apt-get -y install apt-fast
# apt-fast代替apt-get
sudo echo "alias apt-get='apt-fast'" >> ~/.bash_aliases
```

- [github:apt-fast](https://github.com/ilikenwf/apt-fast/blob/master/README.md)

2.5 必备

`sudo apt-get install guake vim`

- sogou 官网下载
- chrome 官网
- vscode appstore

2.6 vitualbox

```shell
sudo sh -c 'echo "deb http://download.virtualbox.org/virtualbox/debian xenial contrib" >> /etc/apt/sources.list.d/virtualbox.list'
wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
sudo apt update
sudo apt install virtualbox-5.1
```

- [UbuntuHandbook](http://ubuntuhandbook.org/index.php/2016/07/virtualbox-5-1-released/)

2.7 shutter

```shell
sudo da
```

2.8 vlc视频播放器

```shell
sudo add-apt-repository ppa:videolan/master-daily
sudo apt-get update
sudo apt-get install vlc
```

对于ubuntu17.10, 用原声的视频播放器

添加解码器： `sudo apt-get install ubuntu-restricted-extras`

2.9 wps

- [wps deb包](http://wps-community.org/)

问题：

1、缺失`libpng12-0`

```shell
sudo apt-add-repository "deb http://us.archive.ubuntu.com/ubuntu/ xenial main universe"
apt-fast update
apt-fast install -f
```

2、字体

- [缺失的字体](https://pan.baidu.com/s/1o8ujqhc)
- [github:yahei consolas hybrid](https://github.com/yakumioto/YaHei-Consolas-Hybrid-1.12)
- [微软雅黑](http://www.pc6.com/mac/116742.html)
- [参考](https://my.oschina.net/renwofei423/blog/635798)

(1) 缺失的字体

```shell
sudo cp * /usr/share/fonts
sudo mkfontscale
sudo mkfontdir
sudo fc-cache
```

(2) 微软雅黑字体: `msyhbd.ttf`

```shell
cd /usr/share/fonts
mkdir msyh # 将msyhdb.ttf放到该目录
sudo chmod 644 /usr/share/fonts/msyh/*
cd msyh
sudo mkfontscale
sudo mkfontdir
sudo fc-cache
```

(3) YaHei Consolas Hybrid

```shell
wget -qO- https://raw.githubusercontent.com/yakumioto/YaHei-Consolas-Hybrid-1.12/master/install.sh | sudo sh
```

3、支持中文输入法

`vim /usr/bin/wps`

```shell
#!/bin/bash 后添加
export XMODIFIERS="@im=fcitx"
export QT_IM_MODULE="fcitx"
```

同理在`/usr/bin/wpp` 和 `usr/bin/et` 也添加

`vim etc/environment`

```shell
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx
```

2.10 爱壁纸

```shell
# python-support
wget http://launchpadlibrarian.net/109052632/python-support_1.0.15_all.deb
sudo dpkg -i python-support_1.0.15_all.deb
# xdotool
apt install xdotool
# lovewallpaper
dpkg -i LoveWallpaper4Linux.deb
```

2.* 其他

网易云音乐，steam游戏，Franz(聊天工具)，clipgrab(下载视频)</br>
popcorn time(在线视频)，pyrenamer(重命名)，vlc(播放器)，Avidemux(编辑视频)</br>
fishshell|zsh,dde/deepin 全套,Calibre(电子书管理)，Inkspace(矢量图片编辑)</br>
Pidgin(通讯软件)，gitg，PdfShuffler，Guake(下拉式终端)</br>
VLC(播放器)</br>
写论文(Rstudio),SysMonitor Indicator(监控软件)，command line learning(命令行课程)</br>
wine(运行windows程序),emule(ed2k链接下载),KTorrent(BitTorrent客户端)

## 三. 概念

1.ram

Random Access Memory，随机存取存储器，与CPU直接交换数据的内部存储器，也叫主存。

## 四、命令

1、nohup

- 用法：nohup command &
- 作用：后台运行程序，忽略所有挂断信号
