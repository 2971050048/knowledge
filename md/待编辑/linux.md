# linux使用小结

## 系统安装

---

下载后得到iso文件，用rufus写入u盘，联想电脑开机按F12，选择u盘进入，一步步跟着走就能装好ubuntu系统。

## 快捷键

 `ctr+alt+t`: 打开终端

## 命令

---

### 1. 更改文件权限

`chmod a+w 文件名`</br>
参数含义: a全部、w写、r读、x执行、u用户、g组。

### 2. 配置dns，ip，mac

```shell
# 修改权限
sudo gedit /etc/NetworkManager/NetworkManager.conf
# start
managed=true
# end

# 配置mac和ip
sudo gedit /etc/network/interfaces
# start
auto enp2s0 # enp2s0自动连接
iface enp2s0 inet static # 使用静态IP
pre-up ifconfig enp2s0 hw ether XX:XX:XX:XX:XX:XX # 修改mac
address xxx.xxx.xxx.xxx # IP
netmask xxx.xxx.xxx.xxx # 子网掩码
gateway xxx.xxx.xxx.xxx # 网关
dns-nameservers 192.168.10.8 202.116.0.1
# end

# 重启网络
sudo service network-manager restart
sudo ip addr flush enp2s0
sudo systemctl restart networking.service

# 查看ip，mac
ifconfig
```

### 3.安装ss+kcptun

```shell
# 安装ss
sudo apt-get install python-pip
sudo apt-get install python-setuptools m2crypto
sudo pip install shadowsocks
vim ~/.bashrc-aliases # 设置快捷键(不要去/etc/.bashrc)
# start
sslocal -s 138.128.207.165 -p 1583 -k "yoyo8960827" -l 1080 -t 600 -m aes-256-cfb
# end
```

## 有用的软件

---

chrome，vscode，Unity桌面，vim</br>
网易云音乐，steam游戏，Franz(聊天工具)，clipgrab(下载视频)</br>
popcorn time(在线视频)，pyrenamer(重命名)，vlc(播放器)，Avidemux(编辑视频)</br>
fishshell|zsh,dde/deepin 全套,Calibre(电子书管理)，Inkspace(矢量图片编辑)</br>
Pidgin(通讯软件)，gitg，PdfShuffler，Guake(下拉式终端)</br>
VLC(播放器)</br>
写论文(Rstudio),SysMonitor Indicator(监控软件)，command line learning(命令行课程)

> 参考文档

[官网下载](http://cn.ubuntu.com/download/)</br>
[linux公社：UbuntuU盘安装](http://www.linuxidc.com/Linux/2016-04/130520.htm)<br/>
[知乎：linux实用软件](https://www.zhihu.com/question/32367669)<br/>
[知乎：ubuntu实用软件](https://www.zhihu.com/question/19811112)<br/>
[简书：Ubuntu16.04设置静态IP](http://www.jianshu.com/p/d69a95aa1ed7)
[Ubuntu更改MAC地址](http://www.linuxdiyf.com/linux/14024.html)
[linux配置shadowsocks客户端](https://my.oschina.net/u/1432769/blog/619651)
