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

2.3 wine

安装

```shell
# wine
sudo dpkg --add-architecture i386
wget -nc https://dl.winehq.org/wine-builds/Release.key
sudo apt-key add Release.key
sudo apt-add-repository https://dl.winehq.org/wine-builds/ubuntu/
sudo apt-get update
sudo apt-get install --install-recommends winehq-stable
```

```shell
# winetricks
wget https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks
chmod +x winetricks
sudo mv winetricks /usr/local/bin
```

配置

```shell
winecfg # 配置环境
```

目录: `home/perhaps/.wine`

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

`sudo apt-get install gnoke vim`

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
