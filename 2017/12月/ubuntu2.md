<!-- 2017/8/11  -->

# ubuntu学习笔记2--各种软件

- [ubuntu学习笔记2--各种软件](#ubuntu%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B02--%E5%90%84%E7%A7%8D%E8%BD%AF%E4%BB%B6)
  - [一、基本软件](#%E4%B8%80%E3%80%81%E5%9F%BA%E6%9C%AC%E8%BD%AF%E4%BB%B6)
  - [二、fishshell](#%E4%BA%8C%E3%80%81fishshell)
  - [三、wine](#%E4%B8%89%E3%80%81wine)
  - [四、连接远程服务器](#%E5%9B%9B%E3%80%81%E8%BF%9E%E6%8E%A5%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8)
  - [docker和vitualbox](#docker%E5%92%8Cvitualbox)
  - [三. 概念](#%E4%B8%89-%E6%A6%82%E5%BF%B5)
  - [四、命令](#%E5%9B%9B%E3%80%81%E5%91%BD%E4%BB%A4)
  - [八、参考文档](#%E5%85%AB%E3%80%81%E5%8F%82%E8%80%83%E6%96%87%E6%A1%A3)
  - [六、开机启动](#%E5%85%AD%E3%80%81%E5%BC%80%E6%9C%BA%E5%90%AF%E5%8A%A8)
  - [七、各文件目录的用途](#%E4%B8%83%E3%80%81%E5%90%84%E6%96%87%E4%BB%B6%E7%9B%AE%E5%BD%95%E7%9A%84%E7%94%A8%E9%80%94)

## 一、基本软件

```shell
apti adobe-flashplugin unity-tweak-tool
```

1、redshift: 护眼

- 安装: `apti redshift gtk-redshift`
- 配置文件: `~/.config/redshift.conf`
  - [github:redshift配置文件参考](https://github.com/Arondight/profile/blob/master/redshift/redshift.conf)

2、vlc: 视频播放器

```shell
sudo add-apt-repository ppa:videolan/master-daily
sudo apt-get update
apti vlc
```

原播放器的解码器： `apti ubuntu-restricted-extras`

3、guake: 下拉终端

- 安装: `apti guake`
- 配置: `guake preferences`
  - start fullscreen 打勾
  - main window height 变为满

4、爱壁纸

官网下载deb包: [lovebizhi](https://www.lovebizhi.com/linux.html)

```shell
# python-support
wget http://launchpadlibrarian.net/109052632/python-support_1.0.15_all.deb
sudo dpkg -i python-support_1.0.15_all.deb
# xdotool
apt install xdotool
# lovewallpaper
dpkg -i LoveWallpaper4Linux.deb
```

5、shutter: 截图

```shell
sudo add-apt-repository ppa:shutter/ppa
apt update
apti shutter
```

快捷键配置: "system settings" -> "keyboard" -> "shortcuts" -> "custom shortcuts"

- f1: `shutter -s`, 截图可选
- f2: `shutter -s -e`, 截图后退出
- f3: `shutter -f`, 截图整个窗口
- f4: `shutter -f -e`, 截图整个窗口后退出

## 二、fishshell

1、安装

```shell
sudo apt-add-repository ppa:fish-shell/release-2
apt update
apti fish
```

2、配置： `fish_config`: 设置`prompt`为`minimalist`

[阮：fish入门教程](http://www.ruanyifeng.com/blog/2017/05/fish_shell.html)

3、快捷方式: `vim ~/.config/fish/config.fish`

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

## 三、wine

1、安装wine

```shell
# wine
sudo dpkg --add-architecture i386
cd ~/Documents/software
wget -nc https://dl.winehq.org/wine-builds/Release.key
sudo apt-key add Release.key
sudo apt-add-repository https://dl.winehq.org/wine-builds/ubuntu/
apt update
apti --install-recommends winehq-stable
```

2、安装winetricks

```shell
# winetricks
wget https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks
chmod +x winetricks
sudo mv winetricks /usr/local/bin
```

3、配置: `winecfg`

4、支持中文: `vim ~/Documents/script/zh.reg`

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

`regedit zh.reg`, 再重启wine

5、wine目录: `home/perhaps/.wine`

- [wine安装官网](https://wiki.winehq.org/Ubuntu)
- [winetricks](https://github.com/Winetricks/winetricks)

## 四、连接远程服务器

1、安装

```shell
# 服务器和本地都要
dpkg -l | grep ssh # 检查是否有openssh-client
sudo apt-get install openssh-server -y
sudo service ssh start
```

2、私钥登录

```shell
# 本地的id_rsa.pub复制到远程
sudo gedit ~/.ssh/id_rsa.pub
# 远程
vim /root/.ssh/authorized_keys
```

3、问题：无法ssh登录

解决(远程)：`vim /etc/ssh/sshd_config`，将 `AuthorizedKeyFile %h/.ssh/authorized_keys` 的注释去掉

## docker和vitualbox

2.6 vitualbox

```shell
sudo sh -c 'echo "deb http://download.virtualbox.org/virtualbox/debian xenial contrib" >> /etc/apt/sources.list.d/virtualbox.list'
wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
sudo apt update
sudo apt install virtualbox-5.1
```

- [UbuntuHandbook](http://ubuntuhandbook.org/index.php/2016/07/virtualbox-5-1-released/)




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

## 八、参考文档

- [简书：Ubuntu16.04设置静态IP](http://www.jianshu.com/p/d69a95aa1ed7)
- [Ubuntu更改MAC地址](http://www.linuxdiyf.com/linux/14024.html)
- [Linux各目录的作用及内容](https://cnbin.github.io/blog/2015/06/23/linux-xia-ge-ge-mu-lu-de-zuo-yong-ji-nei-rong/)



## 六、开机启动

6.1 开机启动程序

gnome-session-properties

- ss-qt5 ss-qt5
- guake
- redshift

6.2 开机启动脚本

方法一：(已用)

Ubuntu开机后会执行/etc/rc.local文件

`vim /etc/rc.local`

```shell
# 在exit 0前添加脚本：
`sudo /home/perhaps/kcptun/client_linux_386 -r "138.128.207.165:4003" -l ":0105" -mode fast2`
```

方法二：

- kcpstart.sh复制到`/etc/init.d/`目录下
- `sudo chmod 755 /etc/init.d/kcpstart.sh`
- `sudo update-rc.d /etc/init.d/kcpstart.sh defaults 95`

## 七、各文件目录的用途

- `/`: 根目录，只存放目录
- `/bin /usr/bin`: 可执行二进制文件目录。对应的命令ls,tar,mv,cat<
- `/boot`: 系统启动时用到的文件。`/boot/vmlinuz，/boot/gurb`为内核文件。建议单独分区，分区大小100M即可
- `/etc`: 存放系统配置文件，不建议存放可执行文件，重要配置文件有 `/etc/inittab、/etc/fstab、/etc/init.d、/etc/X11、/etc/sysconfig、/etc/xinetd.d`，修改配置文件前记得备份。`/etc/X11 存放与x windows有关的设置`
- `/usr`: 放置软件
- `/opt`: 第三方软件。如 `bin,share,lib,local` 应用程序，共享数据，函数库文件，软件升级
- `/var`: variable 可变动的，例如 `mail,run,news,lock` 邮箱，程序相关，新闻组，文件锁
