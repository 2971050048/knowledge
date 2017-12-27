<!-- 2017/9/24 -->

# ubuntu下载安装工具

## 一、deb包

deb是debian linus的安装格式</br>
dpkg是Debian Package的简写，是为Debian专门开发的套件管理系统

```shell
sudo dpkg [commands] <package.deb>
[commands]: -i|-r|-P 安装|移除|安装清除
[commands]: -I|-s|-L 查看包详细信息|查看包详细信息|查看包所有文件
```

遇到的问题：

1、依赖缺失

```shell
sudo apt-get -f install
```
2、`Unknown media type in type 'all/all'`
```shell
sudo mv -vi /usr/share/mime/packages/kde.xml 
sudo mv -vi /usr/share/mime/packages/kde.xml.bak
sudo update-mime-database /usr/share/mime
```


## 一. 帮助

- 改密码：`sudo passwd perhaps` lizi Poi12345
- 去掉密码环：`super+a` -> `seahorse`, 右键`密码`，更改密码为空
- 查看对应进程：`ps -aux | grep '程序名'` -> `sudo kill <pidNumber>`
- 耳机没有声音：`apti pavucontrol` -> `pavucontrol` -> 配置的hda关了，输出设备改为模拟耳机

## 二、ubuntu信息

- 查看内核: `uname -r`
- 查看系统版本号: `cat /etc/issue`

## 三、方便点的命令

3、后台运行

`nohup <commands> >filename 2>&1 &`

4、查找文件

- `locate filename`
- `whereis filename`
- `find / -name filename`

## 四、gnome3

```shell
apt install gnome-shell -y
apt install ubuntu-gnome-desktop -y
apt install gnome-tweak-tool -y
```

arc主题

```shell
apt install autoconf automake pkg-config libgtk-3-dev
```

卸载gnome3

```shell
apt remove gnome-shell gnome
apt autoremove
apt purge gnome
apt autoclean
apt clean
```

## 五、卸载不用的软件

```shell
apt remove --purge libreoffice*
sudo apt-get remove thunderbird totem rhythmbox empathy brasero simple-scan gnome-mahjongg aisleriot 
sudo apt-get remove gnome-mines cheese transmission-common gnome-orca webbrowser-app gnome-sudoku  landscape-client-ui-install  
sudo apt-get remove onboard deja-dup
```

```shell
apti git unity-tweak-tool adobe-flashplugin vlc browser-plugin-vlc
```

1、uGet代替迅雷

```shell
sudo add-apt-repository ppa:plushuang-tw/uget-stable
# 添加aria2的依赖
sudo add-apt-repository ppa:t-tujikawa/ppa
apt update
apti uget
apti aria2
```

2、conky: 监视软件

`apti conky conky-all`

- [安装ubuntu后](https://www.jianshu.com/p/19353fbda01e)

## 网络配置

3.1 NetworkManager

`sudo gedit /etc/NetworkManager/NetworkManager.conf`: `managed=true`

3.2 配置ip，mac

查看整体配置：`ifconfig`

配置mac和ip：`sudo gedit /etc/network/interfaces`

```shell
auto enp2s0 # 根据ifconfig决定'enp2s0'参数名
iface enp2s0 inet static # 使用静态IP
pre-up ifconfig enp2s0 hw ether B8:88:E3:DC:C7:63 # 修改mac
address 172.26.8.176 # IP
netmask 255.255.254.0 # 子网掩码
gateway 172.26.8.1 # 网关
boastcast 172.26.8.255 # 广播
dns-nameservers 192.168.10.8 202.116.0.1
```

3.3 配置dns

`sudo vim /etc/resolvconf/resolv.conf.d/base`

```shell
nameserver 192.168.10.8
nameserver 202.116.0.1
```

重启dns服务：`sudo resolvconf -u`

3.4 编写脚本

`vim ~/Docuements/script/network.sh`

```shell
sudo service network-manager restart
sudo ip addr flush enp2s0
sudo systemctl restart networking.service # 重启网卡
```


## 参考文档

- [安装deb包](https://chentao92.github.io/2016/09/19/ubuntu16.04%E5%AE%89%E8%A3%85deb%E8%BD%AF%E4%BB%B6%E5%8C%85%E6%AD%A5%E9%AA%A4/)
- [ubuntu16.04安装后的事](https://www.sysgeek.cn/15-things-to-do-after-installing-ubuntu-16-04-lts/)
- [gnome+arc主题](http://www.linuxdiyf.com/linux/21610.html)
