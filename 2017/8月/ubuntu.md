<!-- 2017/8/9  -->

# ubuntu学习笔记

电脑换成了ubuntu系统，前期有点不适应，各种配置和脚本都完成后，我才算慢慢的体会到ubuntu的优雅。文章包括系统的安装，常用的快捷键，网络的配置，ss的配置，远程服务器的连接，开机启动脚本的编写。
<!--more-->

## 一、系统安装

下载后得到iso文件，用rufus写入u盘，联想电脑开机按F12，选择u盘进入，一步步跟着走就能装好ubuntu系统。

## 二、快捷键

2.1 通用

- `ctr+alt+t`: 打开终端
- `alt+f1|f2|f4`: 左侧任务栏，运行命令，关闭程序
- `alt+space`: 窗口菜单
- `win`: 搜索面板
- `win+a|f|m|<number>`: 搜索程序，文件，音乐，打开任务栏任- 务
- `ctrl+q`: 退出程序
- `ctrl+f1|f7`: 首个虚拟终端，当前登录会话

2.2 gedit 文件编辑

- `win+a gedit`: 启动
- `ctrl+n|w|c|v|x|q`: 新建，关闭，复制，粘贴，剪切，退出
- `ctrl+s|h|i`: 保存，搜索，跳到某行
- `alt`: 打开上方菜单

2.3 nautilus 文件管理

- `win+a nautilus`: 启动
- `ctrl+1|2`: 图标，列表视图
- `ctrl+t|w|d|h`: 新建，关闭标签页，收藏到书签，隐藏文件显示
- `alt+enter|home`: 显示文件属性，移动到主目录

2.4 终端

- `ctrl+alt+t`: 启动
- `tab`: 自动补全命令
- `ctrl+shift+v|t`: 粘贴，新建标签页
- `ctrl+a|e|c`: 移至行首，行尾
- `ctrl+d|l|r`: 关闭标签页，清屏，输入搜
- `f11`: 全屏
- `tab+tab`: 显示所有命令

## 三、网络配置

3.1 NetworkManager

`sudo gedit /etc/NetworkManager/NetworkManager.conf`

```shell
managed=true
```
3.2 配置ip，mac

查看整体配置：`ifconfig`

配置mac和ip：`sudo gedit /etc/network/interfaces`

```shell
auto enp2s0 # enp2s0自动连接,根据ifconfig的结果来决定'enp2s0'这个参数
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

`vim ~/script/network.sh`

```shell
sudo service network-manager restart
sudo ip addr flush enp2s0
sudo systemctl restart networking.service # 重启网卡
```

3.5 添加快捷方式

`vim ~/bash_aliases`

```shell
alias network='~/script/network.sh'
```

## 四、ss配置

4.1 安裝 shadowsocks-qt5

```shell
sudo add-apt-repository ppa:hzwhuang/ss-qt5
sudo apt update
sudo apt install shadowsocks-qt5
```

4.2 配置pac

```shell
sudo apt install python-pip
sudo pip install genpac
pip install --upgrade genpac # 安裝genpac
genpac -p="SOCKS5 127.0.0.1:1080" -o=~/document/gfwoutput.txt
```

添加pac规则：网络 -> 网络代理 -> 配置URL -> file:///home/perhaps/document/gfwoutput.txt

4.3 安装kcptun

```shell
mkdir ~/kcptun
cd ~/kcptun
wget https://github.com/xtaci/kcptun/releases/download/v20170525/kcptun-linux-386-20170525.tar.gz
tar -zxvf kcptun-linux-386-20170525.tar.gz
rm kcptun-linux-386-20170525.tar.gz
```

4.4 编写kcptun脚本

`vim ~/script/kcpstart.sh`

```shell
cd ~/kcptun
sudo ./client_linux_386 -r "138.128.207.165:4003" -l ":0105" -mode fast2
echo 'kcptun start success'
```

`vim ~/srcipt/kcpstop.sh`

```shell
killall client_linux_386
echo 'kcptun stop success'
```

赋予权限：`chmod a+x *.sh`

4.5 快捷方式

`vim ~/.bash_aliases`

```shell
alias kcpstart='~/script/kcpstart.sh'
alias kcpstop='~/script/kcpstop.sh'
```

## 五、连接远程服务器

5.1 远程

```shell
sudo apt-get install openssh-server # 安装
sudo service ssh start # 启动服务
```

5.2 本地

```shell
dpkg -l |grep ssh # 检查是否有openssh-client
sudo apt-get install openssh-server
sudo service ssh start
```

5.3 私钥登录

```shell
# 本地的id_rsa.pub复制到远程
sudo gedit ~/.ssh/id_rsa.pub
# 远程
vim /root/.ssh/authorized_keys
```

问题：无法ssh登录

解决(远程)：`vim /etc/ssh/sshd_config`

将 `AuthorizedKeyFile %h/.ssh/authorized_keys` 的注释去掉

5.4 本地脚本

`vim ~/script/sshstart.sh`

```shell
ssh root@138.128.207.165 -p 29487 -i ~/.ssh/id_rsa
```

赋予权限：`chmod a+x *.sh`

添加快捷方式：`vim ~/.bash_aliases`

```shell
alias sshstart='~/script/sshstart.sh'
```

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

## 八、参考文档

- [官网下载](http://cn.ubuntu.com/download/)
- [linux公社：UbuntuU盘安装](http://www.linuxidc.com/Linux/2016-04/130520.htm)
- [知乎：linux实用软件](https://www.zhihu.com/question/32367669)
- [知乎：ubuntu实用软件](https://www.zhihu.com/question/19811112)
- [简书：Ubuntu16.04设置静态IP](http://www.jianshu.com/p/d69a95aa1ed7)
- [Ubuntu更改MAC地址](http://www.linuxdiyf.com/linux/14024.html)
- [linux配置shadowsocks客户端](https://my.oschina.net/u/1432769/blog/619651)
- [ubuntu16.04常用快捷键](http://bbs.hongyuvip.com/?/article/205)
- [Linux各目录的作用及内容](https://cnbin.github.io/blog/2015/06/23/linux-xia-ge-ge-mu-lu-de-zuo-yong-ji-nei-rong/)
