<!-- 2017/12/28  -->

# ubuntu学习笔记2--各种软件

为了正常学习工作所需要的软件
<!--more-->

- [ubuntu学习笔记2--各种软件](#ubuntu%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B02--%E5%90%84%E7%A7%8D%E8%BD%AF%E4%BB%B6)
  - [一、基本软件](#%E4%B8%80%E3%80%81%E5%9F%BA%E6%9C%AC%E8%BD%AF%E4%BB%B6)
  - [二、fishshell](#%E4%BA%8C%E3%80%81fishshell)
  - [三、wine](#%E4%B8%89%E3%80%81wine)
  - [四、连接远程服务器](#%E5%9B%9B%E3%80%81%E8%BF%9E%E6%8E%A5%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8)
  - [五、docker和vitualbox](#%E4%BA%94%E3%80%81docker%E5%92%8Cvitualbox)
  - [其他](#%E5%85%B6%E4%BB%96)

## 一、基本软件

1、卸载不用的软件

```shell
apt remove --purge libreoffice*
apt remove thunderbird totem rhythmbox empathy brasero simple-scan gnome-mahjongg aisleriot
apt remove gnome-mines cheese transmission-common gnome-orca webbrowser-app gnome-sudoku  landscape-client-ui-install
apt remove onboard deja-dup
```

2、unity-tweak-tool

```shell
apti unity-tweak-tool
```

3、flash

- 配置: "software & update" -> "other software" -> "canonical partners"
- 安装: `apti adobe-flashplugin`

4、redshift: 护眼

- 安装: `apti redshift gtk-redshift`
- 配置文件: `~/.config/redshift.conf`
  - [github:redshift配置文件参考](https://github.com/Arondight/profile/blob/master/redshift/redshift.conf)

5、vlc: 视频播放器

```shell
aptr ppa:videolan/master-daily
apt update
apti vlc
```

原播放器的解码器： `apti ubuntu-restricted-extras`

6、guake: 下拉终端

- 安装: `apti guake`
- 配置: `guake preferences`
  - start fullscreen 打勾
  - main window height 变为满

7、爱壁纸

官网下载deb包: [lovebizhi](https://www.lovebizhi.com/linux.html)

```shell
# python-support
wget http://launchpadlibrarian.net/109052632/python-support_1.0.15_all.deb
dpkgi python-support_1.0.15_all.deb
# xdotool
apti xdotool
# lovewallpaper
dpkgi LoveWallpaper4Linux.deb
```

8、shutter: 截图

```shell
aptr ppa:shutter/ppa
apt update
apti shutter
```

快捷键配置: "system settings" -> "keyboard" -> "shortcuts" -> "custom shortcuts"

- f1: `shutter -s`, 截图可选
- f3: `shutter -f`, 截图整个窗口
- f4: `shutter -f -e`, 截图整个窗口后退出

9、uGet: 代替迅雷

```shell
aptr ppa:plushuang-tw/uget-stable
# 添加aria2的依赖
aptr ppa:t-tujikawa/ppa
apt update
apti uget aria2
```

## 二、fishshell

1、安装

```shell
aptr ppa:fish-shell/release-2
apt update
apti fish
```

2、配置： `fish_config`: 设置`prompt`为`minimalist`

[阮：fish入门教程](http://www.ruanyifeng.com/blog/2017/05/fish_shell.html)

3、快捷方式: `vim ~/.config/fish/config.fish`

```shell
function vim
  sudo vim $argv
end
function apt
  sudo apt-fast -y $argv
end
function apti
  sudo apt-fast install -y $argv
end
function aptr
  sudo apt-add-repository -y $argv
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
function kcpstart
  ~/Documents/overwall/kcpstart.sh
end
function sshstart
  ssh root@138.128.207.165 -p 29487 -i ~/.ssh/id_rsa
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
aptr https://dl.winehq.org/wine-builds/ubuntu/
apt update
apti --install-recommends winehq-stable
```

2、安装winetricks

```shell
# winetricks
wget https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks
chmod +x winetricks
sudo mv winetricks /usr/local/bin
# mono
apti mono-complete
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
# 本地的id_rsa.pub复制到服务器
sudo gedit ~/.ssh/id_rsa.pub
# 远程
vim /root/.ssh/authorized_keys
```

3、问题：无法ssh登录

解决(服务器)：`vim /etc/ssh/sshd_config`，将 `AuthorizedKeyFile %h/.ssh/authorized_keys` 的注释去掉

## 五、docker和vitualbox

1、docker

```shell
# 移除老版本
apt remove docker docker-engine docker.io
# 安装环境
apt update
apti apt-transport-https ca-certificates software-properties-common
# 添加gpg key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
# 添加库(ubuntu16.04)
aptr \
  "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable"
apt update
apti docker-ce
```

[get docker ce for ubuntu](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/)

2、vitualbox

```shell
apt remove virtualbox virtualbox-5.0 virtualbox-4.*
sudo sh -c 'echo "deb http://download.virtualbox.org/virtualbox/debian xenial contrib" >> /etc/apt/sources.list.d/virtualbox.list'
wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
apt update
apti virtualbox-5.1
```

[Ubuntu install vitualbox5.1](http://ubuntuhandbook.org/index.php/2016/07/virtualbox-5-1-released/)

## 其他

网易云音乐，steam游戏，Franz(聊天工具)，clipgrab(下载视频)</br>
popcorn time(在线视频)，pyrenamer(重命名)，vlc(播放器)，Avidemux(编辑视频)</br>
fishshell|zsh,dde/deepin 全套,Calibre(电子书管理)，Inkspace(矢量图片编辑)</br>
Pidgin(通讯软件)，gitg，PdfShuffler</br>
写论文(Rstudio),SysMonitor Indicator(监控软件)，command line learning(命令行课程)</br>
emule(ed2k链接下载),KTorrent(BitTorrent客户端)
