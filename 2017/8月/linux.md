<!-- 2017/8/9  -->

# linux使用小结

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

## 三、命令

3.1 更改文件权限

`chmod a+w 文件名`</br>
参数含义: a全部、w写、r读、x执行、u用户、g组。

3.2 配置dns，ip，mac

```shell
# 修改权限
sudo gedit /etc/NetworkManager/NetworkManager.conf
# start
managed=true
# end

# 查看ip，mac
ifconfig

# 配置mac和ip
sudo gedit /etc/network/interfaces
# start
auto enp2s0 # enp2s0自动连接,根据ifconfig的结果来决定'enp2s0'这个参数
iface enp2s0 inet static # 使用静态IP
pre-up ifconfig enp2s0 hw ether B8:88:E3:DC:C7:63 # 修改mac
address 172.26.8.176 # IP
netmask 255.255.254.0 # 子网掩码
gateway 172.26.8.1 # 网关
boastcast 172.26.8.255 # 广播
dns-nameservers 192.168.10.8 202.116.0.1
# end
# 配置dns
sudo vim /etc/resolvconf/resolv.conf.d/base
# start
nameserver 192.168.10.8
nameserver 202.116.0.1
# end
sudo resolvconf -u

# 重启网络
sudo service network-manager restart
sudo ip addr flush enp2s0
sudo systemctl restart networking.service
```

3.3 安装ss+kcptun

```shell
# 安裝 ss-qt5
sudo add-apt-repository ppa:hzwhuang/ss-qt5
sudo apt update
sudo apt install shadowsocks-qt5

# 设置 pac
sudo apt install python-pip
sudo pip install genpac
pip install --upgrade genpac # 安裝genpac
genpac -p="SOCKS5 127.0.0.1:1080" -o=~/document/gfwoutput.txt
# 网络 -> 网络代理 -> 配置URL -> file:///home/perhaps/document/gfwoutput.txt

# 安裝 kcptun
mkdir ~/kcptun
cd ~/kcptun
wget https://github.com/xtaci/kcptun/releases/download/v20170525/kcptun-linux-386-20170525.tar.gz
tar -zxvf kcptun-linux-386-20170525.tar.gz
rm kcptun-linux-386-20170525.tar.gz
```

## 四、脚本设置和开机启动

4.1 network
vim ~/script/network.sh

```shell
sudo service network-manager restart
sudo ip addr flush enp2s0
sudo systemctl restart networking.service # 重启网卡
```

4.2 kcpstart

vim ~/script/kcpstart.sh

```shell
cd ~/kcptun
sudo ./client_linux_386 -r "138.128.207.165:4003" -l ":0105" -mode fast2
echo 'kcptun start success'
```

vim ~/srcipt/kcpstop.sh

```shell
killall client_linux_386
echo 'kcptun stop success'
```

4.3 赋予权限

chmod a+x *.sh

4.4 快捷方式

vim ~/.bash_aliases

```shell
alias kcpstart='~/script/kcpstart.sh'
alias kcpstop='~/script/kcpstop.sh'
alias network='~/script/network.sh'
```

4.5 开机启动程序

gnome-session-properties

- ss-qt5 /usr/bin/ss-qt5
- guake

4.6 开机启动脚本

方法一：(已用)

- Ubuntu开机之后会执行/etc/rc.local文件中的脚本
- vim /etc/rc.local
- 在exit 0前添加脚本：`sudo /home/perhaps/kcptun/client_linux_386 -r "138.128.207.165:4003" -l ":0105" -mode fast2`

方法二：

- kcpstart.sh复制到`/etc/init.d/`目录下
- `sudo chmod 755 /etc/init.d/kcpstart.sh`
- `sudo update-rc.d /etc/init.d/kcpstart.sh defaults 95`

## 五、各文件目录的用途

- `/`: 根目录，只存放目录
- `/bin /usr/bin`: 可执行二进制文件目录。对应的命令ls,tar,mv,cat<
- `/boot`: 系统启动时用到的文件。`/boot/vmlinuz，/boot/gurb`为内核文件。建议单独分区，分区大小100M即可
- `/etc`: 存放系统配置文件，不建议存放可执行文件，重要配置文件有 `/etc/inittab、/etc/fstab、/etc/init.d、/etc/X11、/etc/sysconfig、/etc/xinetd.d`，修改配置文件前记得备份。`/etc/X11 存放与x windows有关的设置`
- `/usr`: 放置软件
- `/opt`: 第三方软件。如 `bin,share,lib,local` 应用程序，共享数据，函数库文件，软件升级
- `/var`: variable 可变动的，例如 `mail,run,news,lock` 邮箱，程序相关，新闻组，文件锁

## 六、参考文档

- [官网下载](http://cn.ubuntu.com/download/)
- [linux公社：UbuntuU盘安装](http://www.linuxidc.com/Linux/2016-04/130520.htm)
- [知乎：linux实用软件](https://www.zhihu.com/question/32367669)
- [知乎：ubuntu实用软件](https://www.zhihu.com/question/19811112)
- [简书：Ubuntu16.04设置静态IP](http://www.jianshu.com/p/d69a95aa1ed7)
- [Ubuntu更改MAC地址](http://www.linuxdiyf.com/linux/14024.html)
- [linux配置shadowsocks客户端](https://my.oschina.net/u/1432769/blog/619651)
- [ubuntu16.04常用快捷键](http://bbs.hongyuvip.com/?/article/205)
- [Linux各目录的作用及内容](https://cnbin.github.io/blog/2015/06/23/linux-xia-ge-ge-mu-lu-de-zuo-yong-ji-nei-rong/)
